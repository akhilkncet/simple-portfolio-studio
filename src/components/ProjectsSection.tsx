const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern shopping experience with seamless checkout and real-time inventory.",
    tags: ["React", "Node.js", "Stripe"],
    year: "2025",
  },
  {
    title: "Brand Identity System",
    description: "Complete visual identity for a sustainable fashion startup.",
    tags: ["Branding", "Typography", "Figma"],
    year: "2024",
  },
  {
    title: "Analytics Dashboard",
    description: "Data visualization platform for tracking key business metrics.",
    tags: ["TypeScript", "D3.js", "PostgreSQL"],
    year: "2024",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-card">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">Projects</p>
        <h2 className="text-3xl md:text-4xl font-display text-foreground mb-16">Selected work</h2>
        <div className="space-y-0 divide-y divide-border">
          {projects.map((project) => (
            <div
              key={project.title}
              className="py-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-12 group cursor-pointer hover:opacity-70 transition-opacity"
            >
              <span className="text-sm text-muted-foreground font-mono w-16 shrink-0">{project.year}</span>
              <div className="flex-1">
                <h3 className="text-xl font-display text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
              <div className="flex gap-2 shrink-0">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
