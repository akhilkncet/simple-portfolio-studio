const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">About</p>
          <h2 className="text-3xl md:text-4xl font-display text-foreground">
            A passion for clean design and solid code.
          </h2>
        </div>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            I'm a designer and developer based in San Francisco with over 5 years of experience
            creating digital products. I focus on the intersection of aesthetics and functionality.
          </p>
          <p>
            My approach combines meticulous attention to detail with a deep understanding of
            user needs, resulting in experiences that feel both intuitive and memorable.
          </p>
          <p>
            When I'm not designing or coding, you'll find me exploring architecture,
            reading about typography, or hiking coastal trails.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
