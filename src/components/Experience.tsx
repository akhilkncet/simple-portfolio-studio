import { memo } from 'react';
import { experiences } from '@/lib/data';
import { bgColor, textColor } from '@/lib/colorMap';

const ExperienceCard = memo(({ exp }: { exp: typeof experiences[0] }) => (
  <div className="reveal relative pl-4 sm:pl-8 md:pl-16">
    <div
      className={`absolute -left-[14px] top-2 w-5 h-5 sm:w-6 sm:h-6 ${bgColor[exp.color] || 'bg-neo-green'} border-3 sm:border-4 border-black`}
    />
    <div className="bg-white border-3 sm:border-4 border-black p-2.5 sm:p-5 shadow-hard hover:shadow-hard-xl transition-all">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-dashed border-gray-300 pb-2.5 sm:pb-3.5 mb-2.5 sm:mb-3.5">
        <h3 className="text-base sm:text-xl md:text-2xl font-black uppercase mb-2 md:mb-0">{exp.title}</h3>
        <span className="font-mono font-bold bg-neo-black text-white px-2 py-1 text-xs sm:text-sm">
          {exp.period}
        </span>
      </div>
      <p className={`font-mono text-sm sm:text-base md:text-lg mb-2 ${textColor[exp.color] || 'text-neo-green'} font-bold`}>
        @ {exp.company}
      </p>
      <ul className="list-disc list-inside font-mono text-xs sm:text-sm text-gray-700 space-y-1">
        {exp.responsibilities.map((resp, idx) => (
          <li key={idx}>{resp}</li>
        ))}
      </ul>
    </div>
  </div>
));

ExperienceCard.displayName = 'ExperienceCard';

export const Experience = memo(function Experience() {
  return (
    <section id="experience" className="py-10 sm:py-20 px-3 sm:px-4 max-w-7xl mx-auto" aria-label="Work Experience">
      <h2 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-5 sm:mb-10 tracking-tighter text-center">
        Experience<span className="text-neo-red">_Log</span>
      </h2>

      <div className="relative border-l-4 border-black ml-2 sm:ml-4 md:ml-10 space-y-8 sm:space-y-12">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>
    </section>
  );
});
