import { memo } from 'react';
import { experiences } from '@/lib/data';
import { bgColor, textColor } from '@/lib/colorMap';

const ExperienceCard = memo(({ exp }: { exp: typeof experiences[0] }) => (
  <div className="reveal relative pl-6 sm:pl-8 md:pl-16 2xl:pl-20">
    <div
      className={`absolute -left-[14px] top-2 w-6 h-6 2xl:w-8 2xl:h-8 ${bgColor[exp.color] || 'bg-neo-green'} border-4 border-black`}
    />
    <div className="bg-white border-4 border-black p-3 sm:p-5 2xl:p-7 shadow-hard hover:shadow-hard-xl transition-all">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-dashed border-gray-300 pb-2.5 sm:pb-3.5 mb-2.5 sm:mb-3.5">
        <h3 className="text-base sm:text-xl md:text-2xl 2xl:text-3xl font-black uppercase mb-2 md:mb-0">{exp.title}</h3>
        <span className="font-mono font-bold bg-neo-black text-white px-2 py-1 2xl:px-3 2xl:py-1.5 text-xs sm:text-sm 2xl:text-base">
          {exp.period}
        </span>
      </div>
      <p className={`font-mono text-sm sm:text-base md:text-lg 2xl:text-xl mb-2 ${textColor[exp.color] || 'text-neo-green'} font-bold`}>
        @ {exp.company}
      </p>
      <ul className="list-disc list-inside font-mono text-xs sm:text-sm 2xl:text-base text-gray-700 space-y-1 2xl:space-y-2">
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
    <section id="experience" className="py-12 sm:py-20 2xl:py-28 px-4 2xl:px-8 max-w-7xl 2xl:max-w-8xl 3xl:max-w-9xl mx-auto" aria-label="Work Experience">
      <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-black uppercase mb-6 sm:mb-10 2xl:mb-14 tracking-tighter text-center">
        Experience<span className="text-neo-red">_Log</span>
      </h2>

      <div className="relative border-l-4 border-black ml-2 sm:ml-4 md:ml-10 2xl:ml-16 space-y-8 sm:space-y-12 2xl:space-y-16">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>
    </section>
  );
});
