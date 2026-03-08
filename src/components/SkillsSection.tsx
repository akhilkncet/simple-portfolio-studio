const skills = [
  { category: "Design", items: ["UI/UX Design", "Brand Identity", "Typography", "Figma"] },
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
  { category: "Backend", items: ["Node.js", "PostgreSQL", "REST APIs", "GraphQL"] },
  { category: "Tools", items: ["Git", "Docker", "CI/CD", "AWS"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">Skills</p>
        <h2 className="text-3xl md:text-4xl font-display text-foreground mb-16">What I work with</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold tracking-wide uppercase text-foreground mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-muted-foreground text-sm">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
