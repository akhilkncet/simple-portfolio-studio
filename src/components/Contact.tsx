'use client';

import { useState, useRef, useEffect } from 'react';

// EmailJS configuration - Replace with your actual values
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

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [emailjsReady, setEmailjsReady] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const formRef = useRef<HTMLFormElement>(null);

  // Toast management
  const addToast = (toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = { ...toast, id };
    setToasts(prev => [...prev, newToast]);
    
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 5000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Initialize EmailJS - Lazy load only when component mounts
  useEffect(() => {
    const initializeEmailJS = async () => {
      try {
        console.log('Lazy loading EmailJS...');
        // Dynamically import EmailJS
        const emailjsModule = await import('@emailjs/browser');
        const emailjs = emailjsModule.default;
        
        console.log('Initializing EmailJS with config:', EMAILJS_CONFIG);
        await emailjs.init(EMAILJS_CONFIG.publicKey);
        await new Promise(resolve => setTimeout(resolve, 300));
        setEmailjsReady(true);
        console.log('EmailJS initialized successfully');
      } catch (error) {
        console.error('Failed to initialize EmailJS:', error);
        addToast({
          title: 'Email Service Error',
          description: 'Email service initialization failed. Please try refreshing the page.',
          type: 'error'
        });
      }
    };

    initializeEmailJS();
  }, []);

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    // Indian mobile number format: +91 followed by 10 digits
    const re = /^(\+91[\s]?)?[6-9]\d{9}$/;
    return phone === '' || re.test(phone.replace(/\s/g, ''));
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    let isValid = true;
    
    // Name validation
    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
      isValid = false;
    } else if (formData.firstName.trim().length < 2) {
      errors.firstName = "First name must be at least 2 characters";
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
      isValid = false;
    }
    
    // Email validation
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }
    
    // Message validation
    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
      isValid = false;
    }
    
    // Phone validation (optional)
    if (formData.phone && !validatePhone(formData.phone)) {
      errors.phone = "Please enter a valid Indian mobile number (e.g., +91 98765 43210)";
      isValid = false;
    }
    
    setFormErrors(errors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const sendEmail = async (templateParams: any) => {
    // Dynamically import EmailJS for sending
    const emailjsModule = await import('@emailjs/browser');
    const emailjs = emailjsModule.default;
    
    return emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      addToast({
        title: 'Validation Error',
        description: 'Please fix the errors in the form before submitting.',
        type: 'error'
      });
      return;
    }

    if (!emailjsReady) {
      addToast({
        title: 'Service Unavailable',
        description: 'Email service is not ready. Please try again in a moment.',
        type: 'error'
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        subject: 'New Project Inquiry',
        message: formData.message,
        phone: formData.phone || 'Not provided',
        timestamp: new Date().toLocaleString(),
        to_name: 'Akhil',
      };
      
      await sendEmail(templateParams);
      
      addToast({
        title: 'Message Sent Successfully!',
        description: 'Thank you for reaching out. I\'ll get back to you within 24 hours.',
        type: 'success'
      });
      
      // Reset form
      setFormData({ 
        firstName: '',
        lastName: '',
        email: '', 
        phone: '',
        message: ''
      });
      setRetryCount(0);
      
      if (formRef.current) {
        formRef.current.reset();
      }
      
    } catch (error) {
      console.error('Email sending failed:', error);
      
      if (retryCount < 2) {
        addToast({
          title: 'Send Failed - Retrying',
          description: `Attempt ${retryCount + 1} failed. Retrying automatically...`,
          type: 'info'
        });
        setRetryCount(prev => prev + 1);
        
        // Auto retry after 3 seconds
        setTimeout(() => {
          handleSubmit(e);
        }, 3000);
      } else {
        addToast({
          title: 'Failed to Send Message',
          description: 'Please try again later or contact me directly via email.',
          type: 'error'
        });
        setRetryCount(0);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-8 relative overflow-hidden min-h-screen">
      {/* Toast Container */}
      <div className="fixed top-20 sm:top-24 right-2 sm:right-4 z-50 space-y-2 max-w-[calc(100vw-1rem)] sm:max-w-md">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`p-3 sm:p-4 border-4 border-black shadow-hard font-mono transform transition-all duration-300 ${
              toast.type === 'success' 
                ? 'bg-neo-green text-black' 
                : toast.type === 'error'
                ? 'bg-neo-red text-white'
                : 'bg-neo-blue text-white'
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-bold text-xs sm:text-sm uppercase">{toast.title}</h4>
                <p className="text-xs sm:text-sm mt-1">{toast.description}</p>
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className="ml-2 hover:scale-125 transition-transform font-black"
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">
        {/* Left Side - Header & Info */}
        <div className="flex flex-col gap-6 sm:gap-8">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.95] italic text-black">
              Let's
              <br />
              Connect
            </h1>
            <p className="font-mono text-xs sm:text-sm md:text-base font-semibold max-w-md text-black/80">
              Got a project idea? Need a stunning website or a robust app? Or just want to geek out over code and design? I'm all in. Drop me a line, and let's create something extraordinary together.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6 mt-4 sm:mt-8">
            <div className="space-y-2">
              <p className="font-mono text-xs font-bold uppercase bg-black text-white px-2 py-1 w-max">
                Project Inquiries
              </p>
              <a
                href="mailto:akhil.kncet@gmail.com"
                className="font-mono text-xs sm:text-sm font-medium uppercase text-black hover:text-neo-green hover:translate-x-2 transition-all inline-block break-all"
              >
                akhil.kncet@gmail.com
              </a>
            </div>
            <div className="space-y-2">
              <p className="font-mono text-xs font-bold uppercase bg-black text-white px-2 py-1 w-max">
                Quick Chat
              </p>
              <a
                href="https://www.linkedin.com/in/akhil0911"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs sm:text-sm font-medium uppercase text-black hover:text-neo-blue hover:translate-x-2 transition-all inline-block"
              >
                @akhil0911
              </a>
            </div>
            <div className="mt-3 sm:mt-4 flex items-center space-x-2">
              <div className={`w-3 h-3 border-2 border-black ${emailjsReady ? 'bg-neo-green' : 'bg-neo-red'}`}></div>
              <span className="text-xs font-mono font-bold uppercase">
                Email service: {emailjsReady ? 'Ready' : 'Connecting...'}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-gray-100 border-4 border-black rounded-3xl p-4 sm:p-6 md:p-8 shadow-hard-lg relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{
            background: 'repeating-linear-gradient(45deg, transparent 0px, transparent 8px, rgba(20, 20, 20, 0.1) 8px, rgba(20, 20, 20, 0.1) 16px)'
          }}></div>
          
          <div className="relative z-10">
            <div className="text-center mb-3 sm:mb-5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase leading-[0.95] italic mb-1.5 sm:mb-2.5 text-black">
                Start a Project
              </h2>
              <p className="font-mono text-[10px] sm:text-xs font-semibold text-black/70">
                Tell me about your vision and let's make it reality
              </p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="font-mono text-xs font-medium uppercase text-black">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Your first name"
                    className={`w-full bg-white border-2 ${formErrors.firstName ? 'border-neo-red' : 'border-black'} rounded-xl p-2.5 sm:p-3.5 font-mono text-xs sm:text-sm font-semibold text-black focus:outline-none focus:border-neo-green focus:-translate-y-0.5 focus:shadow-[3px_3px_0px_#33FF57] transition-all`}
                  />
                  {formErrors.firstName && (
                    <p className="text-neo-red text-xs font-mono font-bold">{formErrors.firstName}</p>
                  )}
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="font-mono text-xs font-medium uppercase text-black">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Your last name"
                    className={`w-full bg-white border-2 ${formErrors.lastName ? 'border-neo-red' : 'border-black'} rounded-xl p-2.5 sm:p-3.5 font-mono text-xs sm:text-sm font-semibold text-black focus:outline-none focus:border-neo-green focus:-translate-y-0.5 focus:shadow-[3px_3px_0px_#33FF57] transition-all`}
                  />
                  {formErrors.lastName && (
                    <p className="text-neo-red text-xs font-mono font-bold">{formErrors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="font-mono text-xs font-medium uppercase text-black">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`w-full bg-white border-2 ${formErrors.email ? 'border-neo-red' : 'border-black'} rounded-xl p-2.5 sm:p-3.5 font-mono text-xs sm:text-sm font-semibold text-black focus:outline-none focus:border-neo-green focus:-translate-y-0.5 focus:shadow-[3px_3px_0px_#33FF57] transition-all`}
                  />
                  {formErrors.email && (
                    <p className="text-neo-red text-xs font-mono font-bold">{formErrors.email}</p>
                  )}
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="font-mono text-xs font-medium uppercase text-black">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={`w-full bg-white border-2 ${formErrors.phone ? 'border-neo-red' : 'border-black'} rounded-xl p-2.5 sm:p-3.5 font-mono text-xs sm:text-sm font-semibold text-black focus:outline-none focus:border-neo-green focus:-translate-y-0.5 focus:shadow-[3px_3px_0px_#33FF57] transition-all`}
                  />
                  {formErrors.phone && (
                    <p className="text-neo-red text-xs font-mono font-bold">{formErrors.phone}</p>
                  )}
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <label className="font-mono text-xs font-medium uppercase text-black">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell me about your project, goals, timeline, and budget..."
                  className={`w-full bg-white border-2 ${formErrors.message ? 'border-neo-red' : 'border-black'} rounded-xl p-2.5 sm:p-3.5 font-mono text-xs sm:text-sm font-semibold text-black focus:outline-none focus:border-neo-green focus:-translate-y-0.5 focus:shadow-[3px_3px_0px_#33FF57] transition-all resize-vertical`}
                ></textarea>
                {formErrors.message && (
                  <p className="text-neo-red text-xs font-mono font-bold">{formErrors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-neo-green via-neo-blue to-neo-purple bg-[length:400%_400%] animate-gradient text-black border-2 border-black rounded-3xl py-3 px-6 font-mono text-xs sm:text-sm font-bold uppercase shadow-[4px_4px_0px_#000] hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#000] active:translate-y-0 active:shadow-[2px_2px_0px_#000] transition-all relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
                <div className="absolute inset-0 opacity-10" style={{
                  background: 'repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.05) 0px, rgba(0, 0, 0, 0.05) 8px, transparent 8px, transparent 16px)',
                  animation: 'stripeMove 20s linear infinite'
                }}></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
