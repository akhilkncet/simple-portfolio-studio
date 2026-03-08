import { memo, useMemo } from 'react';

const skillCategories = [
  {
    title: 'Machine Learning & Computer Vision',
    skills: ['Python', 'PyTorch', 'Scikit-learn', 'TensorFlow', 'YOLO', 'NumPy', 'Pandas'],
  },
  {
    title: 'Backend & API Development',
    skills: ['Django', 'Flask', 'REST APIs'],
  },
  {
    title: 'DevOps & Tooling',
    skills: ['Docker', 'Git', 'GitHub'],
  },
  {
    title: 'Frontend (Working Knowledge)',
    skills: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Additional Exposure',
    skills: ['Flutter', 'Dart', 'Android Studio', 'C (Basics)'],
  },
];

export const Skills = memo(function Skills() {
  const totalTech = useMemo(() => skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0), []);

  return (
    <section id="skills" className="py-8 sm:py-16 md:py-20 bg-neo-black text-white border-y-4 border-black relative overflow-hidden" aria-label="Technical Skills">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="mb-6 sm:mb-10 md:mb-12 reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white mb-2 sm:mb-3 md:mb-4">
            TECH<span className="text-neo-green">_STACK</span>
          </h2>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-neo-green rounded-full animate-pulse" aria-hidden="true" />
            <p className="font-mono text-gray-400 text-xs sm:text-sm">/// Building with modern tools</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-10 lg:gap-12">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="reveal">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-5 text-white border-l-4 border-neo-green pl-3 sm:pl-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2.5 md:gap-3" role="list">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    role="listitem"
                    className="bg-white/5 border border-white/20 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 font-mono text-[11px] sm:text-xs md:text-sm hover:bg-neo-green hover:text-black hover:border-neo-green transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/20 mt-8 sm:mt-10 md:mt-12 pt-4 sm:pt-5 md:pt-6 flex flex-col sm:flex-row justify-between gap-2 sm:gap-4 font-mono text-xs text-gray-600 reveal">
          <span>TOTAL_TECHNOLOGIES: {totalTech}</span>
          <span>LAST_UPDATED: {new Date().getFullYear()}</span>
        </div>
      </div>
    </section>
  );
});
