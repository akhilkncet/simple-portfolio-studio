import { memo } from 'react';
import { projects } from '@/lib/data';
import { OptimizedImage } from './OptimizedImage';
import { hoverTextColor } from '@/lib/colorMap';


const MobileProjectCard = memo(({ project }: { project: typeof projects[0] }) => (
  <article className="flex-shrink-0 w-[75vw] max-w-[280px] bg-white border-4 border-black p-2 shadow-hard snap-center">
    <div className="bg-black border-2 border-black aspect-video relative overflow-hidden mb-2">
      <OptimizedImage
        src={project.image}
        alt={project.title}
        width={300}
        height={180}
        className="w-full h-full object-cover opacity-80"
      />
    </div>
    <div className="space-y-1.5">
      <div className="flex justify-between items-start gap-1.5">
        <h3 className={`text-xs font-black uppercase ${hoverTextColor[project.color] || ''} leading-tight`}>
          {project.title}
        </h3>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} project`}
          className="flex-shrink-0 w-7 h-7 border-2 border-black bg-neo-green flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-hard-sm"
        >
          <i className="ri-arrow-right-up-line text-sm" aria-hidden="true"></i>
        </a>
      </div>
      <p className="font-mono text-[10px] leading-relaxed line-clamp-2">{project.description}</p>
      <div className="flex gap-1 font-mono text-[8px] font-bold flex-wrap">
        {project.technologies.slice(0, 4).map((tech, idx) => (
          <span key={idx} className="bg-neo-black text-white px-1 py-0.5">
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="bg-neo-black text-white px-1 py-0.5">+{project.technologies.length - 4}</span>
        )}
      </div>
    </div>
  </article>
));

MobileProjectCard.displayName = 'MobileProjectCard';

const DesktopProjectCard = memo(({ project, featured = false }: { project: typeof projects[0]; featured?: boolean }) => (
  <article
    className={`reveal group bg-white border-4 border-black p-4 shadow-hard h-full flex ${featured ? 'flex-row gap-5' : 'flex-col'}`}
  >
    <div className={`bg-black border-2 border-black relative overflow-hidden group-hover:shadow-none transition-all ${featured ? 'w-1/2 flex-shrink-0 aspect-[4/3]' : 'aspect-video mb-4'}`}>
      <OptimizedImage
        src={project.image}
        alt={project.title}
        width={featured ? 600 : 500}
        height={featured ? 450 : 300}
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
      />
    </div>
    <div className="space-y-3 flex-1 flex flex-col">
      <div className="flex justify-between items-start gap-2">
        <h3
          className={`${featured ? 'text-lg lg:text-xl' : 'text-base lg:text-lg'} font-black uppercase ${hoverTextColor[project.color] || ''} transition-colors glitch-hover leading-tight`}
        >
          {project.title}
        </h3>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} project`}
          className="flex-shrink-0 w-9 h-9 border-2 border-black bg-neo-green flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-hover shadow-hard-sm"
        >
          <i className="ri-arrow-right-up-line text-lg" aria-hidden="true"></i>
        </a>
      </div>
      <p className="font-mono text-sm leading-relaxed flex-1">{project.description}</p>
      <div className="flex gap-2 font-mono text-xs font-bold flex-wrap">
        {project.technologies.map((tech, idx) => (
          <span key={idx} className="bg-neo-black text-white px-2">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </article>
));

DesktopProjectCard.displayName = 'DesktopProjectCard';

// Featured indices: 0 and 5 span 2 columns for visual variety
const featuredIndices = new Set([0, 5]);

export const Projects = memo(function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-24 bg-neo-yellow border-t-4 border-black overflow-hidden" aria-label="Selected Projects">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <h2 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-12 uppercase tracking-tighter text-black sm:text-white drop-shadow-[2px_2px_0_rgba(255,255,255,0.8)] sm:drop-shadow-[4px_4px_0_rgba(0,0,0,1)] sm:text-stroke-black">
          Selected Works
        </h2>
      </div>

      {/* Mobile: horizontal scroll carousel */}
      <div className="md:hidden flex gap-3 overflow-x-auto snap-x snap-mandatory px-3 pb-4 scrollbar-hide">
        {projects.map((project) => (
          <MobileProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Desktop: grid with featured cards spanning 2 cols */}
      <div className="hidden md:block max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={project.id} className={featuredIndices.has(index) ? 'lg:col-span-2 col-span-2' : ''}>
              <DesktopProjectCard project={project} featured={featuredIndices.has(index)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
