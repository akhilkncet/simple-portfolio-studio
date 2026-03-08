import { memo, useMemo } from 'react';
import { projects } from '@/lib/data';
import { OptimizedImage } from './OptimizedImage';
import { hoverTextColor } from '@/lib/colorMap';

const ProjectCard = memo(({ project }: { project: typeof projects[0] }) => (
  <article
    className="reveal group bg-white border-4 border-black p-2 sm:p-3 md:p-4 shadow-hard flex flex-col"
  >
    <div className="bg-black border-2 border-black aspect-video relative overflow-hidden mb-2 sm:mb-3 md:mb-4 group-hover:shadow-none transition-all">
      <OptimizedImage
        src={project.image}
        alt={project.title}
        width={500}
        height={300}
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
      />
    </div>
    <div className="space-y-1.5 sm:space-y-2 md:space-y-3 flex-grow">
      <div className="flex justify-between items-start gap-1.5 sm:gap-2">
        <h3
          className={`text-xs sm:text-sm md:text-base lg:text-lg font-black uppercase ${hoverTextColor[project.color] || ''} transition-colors glitch-hover leading-tight`}
        >
          {project.title}
        </h3>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} project`}
          className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 border-2 border-black bg-neo-green flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-hover shadow-hard-sm"
        >
          <i className="ri-arrow-right-up-line text-sm sm:text-base md:text-lg" aria-hidden="true"></i>
        </a>
      </div>
      <p className="font-mono text-[11px] sm:text-xs md:text-sm leading-relaxed">{project.description}</p>
      <div className="flex gap-1 sm:gap-1.5 md:gap-2 font-mono text-[9px] sm:text-[10px] md:text-xs font-bold flex-wrap">
        {project.technologies.map((tech, idx) => (
          <span key={idx} className="bg-neo-black text-white px-1 py-0.5 sm:px-1.5 md:px-2">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </article>
));

ProjectCard.displayName = 'ProjectCard';

export const Projects = memo(function Projects() {
  // Group projects into pairs (columns of 2)
  const columns = useMemo(() => {
    const cols: (typeof projects)[] = [];
    for (let i = 0; i < projects.length; i += 2) {
      cols.push(projects.slice(i, i + 2));
    }
    return cols;
  }, []);

  return (
    <section id="projects" className="py-16 sm:py-24 bg-neo-yellow border-t-4 border-black overflow-hidden" aria-label="Selected Projects">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-12 uppercase tracking-tighter text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)] text-stroke-black">
          Selected Works
        </h2>
      </div>

      <div
        className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', paddingLeft: 'max(1rem, calc((100vw - 80rem) / 2 + 1rem))', paddingRight: 'max(1rem, calc((100vw - 80rem) / 2 + 1rem))' }}
      >
        {columns.map((col, colIdx) => (
          <div
            key={colIdx}
            className="flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] xl:w-[30vw] flex flex-col gap-4 sm:gap-6 snap-start"
          >
            {col.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
});
