import { useState, useRef, useEffect, memo, useCallback } from 'react';

const EMAILJS_CONFIG = {
  publicKey: 'GhsWwmIj6-3NIcUpV',
  serviceId: 'service_o5jbw0n',
  templateId: 'template_t2hgmqe',
};

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

interface Toast {
  id: string;
  title: string;
  description: string;
  type: 'success' | 'error' | 'info';
}

const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePhone = (phone: string) => {
  // International: optional + followed by 7-15 digits (ITU-T E.164)
  const re = /^\+?[1-9]\d{6,14}$/;
  return phone === '' || re.test(phone.replace(/[\s\-()]/g, ''));
};

const RATE_LIMIT_MS = 60_000; // 1 minute between submissions
let lastSubmitTime = 0;

export const Contact = memo(function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '', lastName: '', email: '', phone: '', message: ''
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [emailjsReady, setEmailjsReady] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const retryCountRef = useRef(0);

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts(prev => [...prev, { ...toast, id }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 5000);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  useEffect(() => {
    let mounted = true;
    const init = async () => {
      try {
        const emailjsModule = await import('@emailjs/browser');
        await emailjsModule.default.init(EMAILJS_CONFIG.publicKey);
        await new Promise(resolve => setTimeout(resolve, 300));
        if (mounted) setEmailjsReady(true);
      } catch {
        if (mounted) addToast({ title: 'Email Service Error', description: 'Email service initialization failed. Please try refreshing.', type: 'error' });
      }
    };
    init();
    return () => { mounted = false; };
  }, [addToast]);

  const validateForm = useCallback((): boolean => {
    const errors: FormErrors = {};
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    else if (formData.firstName.trim().length < 2) errors.firstName = 'First name must be at least 2 characters';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!validateEmail(formData.email)) errors.email = 'Please enter a valid email address';
    if (!formData.message.trim()) errors.message = 'Message is required';
    else if (formData.message.trim().length < 10) errors.message = 'Message must be at least 10 characters';
    if (formData.phone && !validatePhone(formData.phone)) errors.phone = 'Please enter a valid phone number';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }, [formData]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setFormErrors(prev => prev[name] ? { ...prev, [name]: '' } : prev);
  }, []);

  const sendEmail = useCallback(async (data: FormData, attempt: number): Promise<void> => {
    try {
      const emailjsModule = await import('@emailjs/browser');
      await emailjsModule.default.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, {
        from_name: `${data.firstName} ${data.lastName}`,
        from_email: data.email,
        subject: 'New Project Inquiry',
        message: data.message,
        phone: data.phone || 'Not provided',
        timestamp: new Date().toLocaleString(),
        to_name: 'Akhil',
      }, EMAILJS_CONFIG.publicKey);

      addToast({ title: 'Message Sent!', description: "Thank you! I'll get back to you within 24 hours.", type: 'success' });
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      retryCountRef.current = 0;
      formRef.current?.reset();
    } catch {
      if (attempt < 2) {
        addToast({ title: 'Send Failed - Retrying', description: `Attempt ${attempt + 1} failed. Retrying...`, type: 'info' });
        await new Promise(resolve => setTimeout(resolve, 3000));
        return sendEmail(data, attempt + 1);
      } else {
        addToast({ title: 'Failed to Send', description: 'Please try again later or contact me directly via email.', type: 'error' });
        retryCountRef.current = 0;
      }
    }
  }, [addToast]);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      addToast({ title: 'Validation Error', description: 'Please fix the errors before submitting.', type: 'error' });
      return;
    }
    if (!emailjsReady) {
      addToast({ title: 'Service Unavailable', description: 'Email service not ready. Please try again.', type: 'error' });
      return;
    }
    if (isSubmitting) return;
    setIsSubmitting(true);
    // Snapshot form data to avoid stale references during retries
    const snapshot = { ...formData };
    try {
      await sendEmail(snapshot, 0);
    } finally {
      setIsSubmitting(false);
    }
  }, [validateForm, emailjsReady, isSubmitting, formData, sendEmail, addToast]);

  const inputClass = (field: string) =>
    `w-full bg-neo-white border-2 ${formErrors[field] ? 'border-neo-red' : 'border-black/20'} rounded-lg p-2.5 sm:p-3.5 font-mono text-xs sm:text-sm font-semibold text-black focus:outline-none focus:border-neo-green focus:-translate-y-0.5 focus:shadow-[3px_3px_0px_#33FF57] transition-all`;

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-8 relative overflow-hidden border-t-4 border-black" aria-label="Contact">
      {/* Toast Container */}
      <div className="fixed top-20 sm:top-24 right-2 sm:right-4 z-50 space-y-2 max-w-[calc(100vw-1rem)] sm:max-w-md" role="alert" aria-live="polite">
        {toasts.map(toast => (
          <div
            key={toast.id}
            className={`p-3 sm:p-4 border-4 border-black shadow-hard font-mono transform transition-all duration-300 ${
              toast.type === 'success' ? 'bg-neo-green text-black' : toast.type === 'error' ? 'bg-neo-red text-white' : 'bg-neo-blue text-white'
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-bold text-xs sm:text-sm uppercase">{toast.title}</h4>
                <p className="text-xs sm:text-sm mt-1">{toast.description}</p>
              </div>
              <button onClick={() => removeToast(toast.id)} className="ml-2 hover:scale-125 transition-transform font-black" aria-label="Dismiss">×</button>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start relative z-10">
        {/* Left Side */}
        <div className="flex flex-col gap-6 sm:gap-8">
          <div className="space-y-4 sm:space-y-6">
            <div className="inline-block bg-neo-pink border-4 border-black px-3 py-1 shadow-hard rotate-[-2deg]">
              <span className="font-mono font-bold text-xs sm:text-sm uppercase">/// GET IN TOUCH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.95] text-black">
              Let's<br />Connect<span className="text-neo-red">.</span>
            </h2>
            <p className="font-mono text-xs sm:text-sm md:text-base font-semibold max-w-md text-black/80">
              Got a project idea? Need a stunning website or a robust app? Drop me a line, and let's create something extraordinary together.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 sm:mt-8">
            <div className="bg-white border-4 border-black p-4 shadow-hard">
              <p className="font-mono text-xs font-bold uppercase bg-black text-white px-2 py-1 w-max mb-2">Project Inquiries</p>
              <a href="mailto:akhil.kncet@gmail.com" className="font-mono text-xs sm:text-sm font-medium uppercase text-black hover:text-neo-green hover:translate-x-2 transition-all inline-block break-all">
                akhil.kncet@gmail.com
              </a>
            </div>
            <div className="bg-white border-4 border-black p-4 shadow-hard">
              <p className="font-mono text-xs font-bold uppercase bg-black text-white px-2 py-1 w-max mb-2">Phone</p>
              <a href="tel:+918220002860" className="font-mono text-xs sm:text-sm font-medium uppercase text-black hover:text-neo-green hover:translate-x-2 transition-all inline-block">
                +91 8220002860
              </a>
            </div>
            <div className="bg-white border-4 border-black p-4 shadow-hard">
              <p className="font-mono text-xs font-bold uppercase bg-black text-white px-2 py-1 w-max mb-2">GitHub</p>
              <div className="flex flex-col gap-1.5">
                <a href="https://github.com/Akhil-0911" target="_blank" rel="noopener noreferrer" className="font-mono text-xs sm:text-sm font-medium uppercase text-black hover:text-neo-blue hover:translate-x-2 transition-all inline-block">
                  @Akhil-0911
                </a>
                <a href="https://github.com/akhilkncet" target="_blank" rel="noopener noreferrer" className="font-mono text-xs sm:text-sm font-medium uppercase text-black hover:text-neo-blue hover:translate-x-2 transition-all inline-block">
                  @akhilkncet
                </a>
              </div>
            </div>
            <div className="bg-white border-4 border-black p-4 shadow-hard">
              <p className="font-mono text-xs font-bold uppercase bg-black text-white px-2 py-1 w-max mb-2">Quick Chat</p>
              <a href="https://www.linkedin.com/in/akhil0911" target="_blank" rel="noopener noreferrer" className="font-mono text-xs sm:text-sm font-medium uppercase text-black hover:text-neo-blue hover:translate-x-2 transition-all inline-block">
                @akhil0911
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-neo-black border-4 border-black p-3 shadow-hard mt-4">
            <div className={`w-3 h-3 border-2 border-white ${emailjsReady ? 'bg-neo-green' : 'bg-neo-red'}`} aria-hidden="true" />
            <span className="text-xs font-mono font-bold uppercase text-white">
              Email service: {emailjsReady ? 'Ready' : 'Connecting...'}
            </span>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white border-2 border-black/20 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="mb-4 sm:mb-6 border-b-2 border-black/10 pb-3 sm:pb-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase leading-[0.95] mb-1.5 sm:mb-2.5 text-black">Start a Project</h3>
              <p className="font-mono text-[10px] sm:text-xs font-semibold text-black/70">Tell me about your vision and let's make it reality</p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="firstName" className="font-mono text-xs font-bold uppercase text-black">First Name *</label>
                  <input id="firstName" type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Your first name" className={inputClass('firstName')} />
                  {formErrors.firstName && <p className="text-neo-red text-xs font-mono font-bold" role="alert">{formErrors.firstName}</p>}
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="lastName" className="font-mono text-xs font-bold uppercase text-black">Last Name *</label>
                  <input id="lastName" type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Your last name" className={inputClass('lastName')} />
                  {formErrors.lastName && <p className="text-neo-red text-xs font-mono font-bold" role="alert">{formErrors.lastName}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="email" className="font-mono text-xs font-bold uppercase text-black">Email Address *</label>
                  <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className={inputClass('email')} />
                  {formErrors.email && <p className="text-neo-red text-xs font-mono font-bold" role="alert">{formErrors.email}</p>}
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="phone" className="font-mono text-xs font-bold uppercase text-black">Phone Number</label>
                  <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" className={inputClass('phone')} />
                  {formErrors.phone && <p className="text-neo-red text-xs font-mono font-bold" role="alert">{formErrors.phone}</p>}
                </div>
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <label htmlFor="message" className="font-mono text-xs font-bold uppercase text-black">Project Details *</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Tell me about your project, goals, timeline, and budget..." className={`${inputClass('message')} resize-vertical`} />
                {formErrors.message && <p className="text-neo-red text-xs font-mono font-bold" role="alert">{formErrors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-neo-green text-black border-2 border-black/20 rounded-xl py-3 sm:py-4 px-6 font-mono text-sm sm:text-base font-black uppercase shadow-lg hover:translate-y-0.5 hover:shadow-md active:translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? '⏳ SENDING...' : '🚀 SEND MESSAGE'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});
