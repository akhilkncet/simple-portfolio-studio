import { memo } from 'react';
import { projects } from '@/lib/data';
import { OptimizedImage } from './OptimizedImage';
import { hoverTextColor } from '@/lib/colorMap';

const cardHeights = [
  'min-h-[180px] sm:min-h-[240px] md:min-h-[450px]',
  'min-h-[160px] sm:min-h-[200px] md:min-h-[380px]',
  'min-h-[170px] sm:min-h-[220px] md:min-h-[420px]',
  'min-h-[165px] sm:min-h-[210px] md:min-h-[400px]',
  'min-h-[185px] sm:min-h-[250px] md:min-h-[460px]',
  'min-h-[162px] sm:min-h-[205px] md:min-h-[390px]',
  'min-h-[175px] sm:min-h-[230px] md:min-h-[440px]',
  'min-h-[168px] sm:min-h-[215px] md:min-h-[410px]',
];

const ProjectCard = memo(({ project, index }: { project: typeof projects[0]; index: number }) => (
  <article
    className={`reveal break-inside-avoid mb-2.5 sm:mb-4 md:mb-6 group bg-white border-4 border-black p-2 sm:p-3 md:p-4 shadow-hard ${cardHeights[index % cardHeights.length]}`}
    style={{ pageBreakInside: 'avoid' }}
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
    <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
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
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-24 bg-neo-yellow border-t-4 border-black px-3 sm:px-4 overflow-hidden" aria-label="Selected Projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-12 uppercase tracking-tighter text-black drop-shadow-[2px_2px_0_rgba(255,255,255,0.8)] sm:text-white sm:drop-shadow-[4px_4px_0_rgba(0,0,0,1)] sm:text-stroke-black">
          Selected Works
        </h2>

        <div className="columns-2 lg:columns-3 gap-2.5 sm:gap-4 md:gap-6 space-y-2.5 sm:space-y-4 md:space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
});
