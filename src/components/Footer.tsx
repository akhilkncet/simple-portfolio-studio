const Footer = () => {
  return (
    <footer className="section-padding py-12 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">© 2026 Your Name. All rights reserved.</p>
        <div className="flex gap-6">
          {["GitHub", "LinkedIn", "Dribbble"].map((link) => (
            <a key={link} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
