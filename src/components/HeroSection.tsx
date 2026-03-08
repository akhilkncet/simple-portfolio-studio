import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-padding relative overflow-hidden">
      <div className="max-w-3xl z-10">
        <p className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6">
          Designer & Developer
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display leading-[0.95] mb-8 text-foreground">
          Crafting digital
          <br />
          experiences
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed">
          I design and build thoughtful, elegant interfaces that connect people with technology.
        </p>
        <div className="mt-12 flex gap-6">
          <a href="#projects" className="text-sm font-medium tracking-wide uppercase border-b-2 border-foreground pb-1 hover:opacity-70 transition-opacity">
            View Work
          </a>
          <a href="#contact" className="text-sm font-medium tracking-wide uppercase text-muted-foreground hover:text-foreground transition-colors">
            Get in Touch
          </a>
        </div>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-3/4 hidden lg:block">
        <img src={heroBg} alt="" className="w-full h-full object-cover rounded-l-sm opacity-80" />
      </div>
    </section>
  );
};

export default HeroSection;
