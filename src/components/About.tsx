import { memo } from 'react';
import { OptimizedImage } from './OptimizedImage';

export const About = memo(function About() {
  return (
    <section id="about" className="py-10 sm:py-16 md:py-24 px-3 sm:px-4" aria-label="About Me">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white border-3 sm:border-4 border-black p-3 sm:p-6 md:p-12 shadow-hard-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-8 md:gap-12">
            <div className="md:col-span-4 reveal">
              <div className="aspect-square w-48 sm:w-56 md:w-full mx-auto bg-gray-200 border-3 sm:border-4 border-black relative shadow-hard overflow-hidden group">
                <OptimizedImage
                  src="/images/akhil.jpg"
                  alt="Akhil R - Software Engineer"
                  width={400}
                  height={400}
                  priority={true}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <span className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 bg-neo-red text-white px-1.5 sm:px-2 font-mono text-[10px] sm:text-xs border border-black z-10" aria-hidden="true">
                  PROFILE.JPG
                </span>
              </div>
            </div>
            <div className="md:col-span-8 flex flex-col justify-center reveal">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-2 sm:mb-4">Who am I?</h2>
              <p className="font-mono text-xs sm:text-sm md:text-lg leading-relaxed mb-2 sm:mb-4">
                I am Akhil. A software engineer focused on building{' '}
                <span className="bg-neo-yellow px-1 border border-black">scalable backend systems</span> and intelligent applications. I design systems that are efficient, secure, and production-ready.
              </p>
              <p className="font-mono text-[11px] sm:text-xs md:text-base mb-3 sm:mb-5 text-gray-600 border-l-3 sm:border-l-4 border-neo-purple pl-2 sm:pl-3">
                &gt; Specialized in Backend Development and Applied Machine Learning.
                <br />
                &gt; Strong foundation in Data Structures, Algorithms, and System Design.
                <br />
                &gt; Experience building REST APIs, ML pipelines, and secure applications.
              </p>

              <div className="flex gap-2 sm:gap-3 flex-wrap">
                <div className="bg-neo-black text-white px-2 py-1.5 sm:px-4 sm:py-2 font-mono text-[10px] sm:text-sm border-2 border-transparent">
                  India
                </div>
                <div className="bg-neo-green text-black px-2 py-1.5 sm:px-4 sm:py-2 font-mono text-[10px] sm:text-sm border-2 border-black">
                  Open to Full-Time Roles &amp; Research
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
