import { memo, useMemo } from 'react';

interface TechItem {
  name: string;
  icon: string;
}

const skillCategories = [
  {
    title: 'Machine Learning & Computer Vision',
    skills: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
      { name: 'Scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
      { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
      { name: 'YOLO', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
      { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
      { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
    ] as TechItem[],
  },
  {
    title: 'Backend & API Development',
    skills: [
      { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
      { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
      { name: 'REST APIs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    ] as TechItem[],
  },
  {
    title: 'DevOps & Tooling',
    skills: [
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    ] as TechItem[],
  },
  {
    title: 'Frontend (Working Knowledge)',
    skills: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    ] as TechItem[],
  },
  {
    title: 'Additional Exposure',
    skills: [
      { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
      { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' },
      { name: 'C (Basics)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    ] as TechItem[],
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
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white mb-2 sm:mb-3 md:mb-4">
            TECH<span className="text-neo-green">_STACK</span>
          </h2>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-neo-green rounded-full animate-pulse" aria-hidden="true" />
            <p className="font-mono text-gray-400 text-xs sm:text-sm">/// Building with modern tools</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-8 lg:gap-10">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="reveal">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-5 text-white border-l-4 border-neo-green pl-3 sm:pl-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-2.5 md:gap-3" role="list">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    role="listitem"
                    className="w-[72px] sm:w-[80px] md:w-[88px] min-h-[76px] sm:min-h-[84px] md:min-h-[92px] bg-white/5 border border-white/20 text-white px-1.5 py-1.5 font-mono hover:bg-neo-green/20 hover:border-neo-green transition-all duration-300 flex flex-col items-center justify-center text-center gap-1"
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white rounded-md p-1 flex items-center justify-center border border-black/10">
                      <img
                        src={skill.icon}
                        alt={`${skill.name} logo`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <span className="text-[9px] sm:text-[10px] md:text-[11px] leading-tight">{skill.name}</span>
                  </div>
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
