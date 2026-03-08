const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">Contact</p>
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6">
            Let's work together.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Have a project in mind? I'd love to hear about it. Drop me a message and let's create something great.
          </p>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>hello@yourname.com</p>
            <p>San Francisco, CA</p>
          </div>
        </div>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="text-xs font-medium tracking-wide uppercase text-muted-foreground block mb-2">Name</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-xs font-medium tracking-wide uppercase text-muted-foreground block mb-2">Email</label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="text-xs font-medium tracking-wide uppercase text-muted-foreground block mb-2">Message</label>
            <textarea
              rows={4}
              className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="text-sm font-medium tracking-wide uppercase border-b-2 border-foreground pb-1 hover:opacity-70 transition-opacity mt-4"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
