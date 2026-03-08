import { memo } from 'react';
import { OptimizedImage } from './OptimizedImage';

export const About = memo(function About() {
  return (
    <section id="about" className="py-10 sm:py-24 px-3 sm:px-4" aria-label="About Me">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white border-3 sm:border-4 border-black p-3 sm:p-8 md:p-12 shadow-hard-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-12">
            <div className="md:col-span-4 reveal">
              <div className="aspect-square max-w-xs mx-auto md:max-w-none bg-gray-200 border-4 border-black relative shadow-hard overflow-hidden group">
                <OptimizedImage
                  src="/images/akhil.jpg"
                  alt="Akhil R - Software Engineer"
                  width={400}
                  height={400}
                  priority={true}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <span className="absolute top-2 left-2 bg-neo-red text-white px-2 font-mono text-xs border border-black z-10" aria-hidden="true">
                  PROFILE.JPG
                </span>
              </div>
            </div>
            <div className="md:col-span-8 flex flex-col justify-center reveal">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase mb-3 sm:mb-5">Who am I?</h2>
              <p className="font-mono text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-5">
                I am Akhil. A software engineer focused on building{' '}
                <span className="bg-neo-yellow px-1 border border-black">scalable backend systems</span> and intelligent applications. I design systems that are efficient, secure, and production-ready.
              </p>
              <p className="font-mono text-xs sm:text-sm md:text-base mb-4 sm:mb-6 text-gray-600 border-l-4 border-neo-purple pl-2.5 sm:pl-3.5">
                &gt; Specialized in Backend Development and Applied Machine Learning.
                <br />
                &gt; Strong foundation in Data Structures, Algorithms, and System Design.
                <br />
                &gt; Experience building REST APIs, ML pipelines, and secure applications.
              </p>

              <div className="flex gap-2 sm:gap-4 flex-wrap">
                <div className="bg-neo-black text-white px-3 py-2 sm:px-4 font-mono text-xs sm:text-sm border-2 border-transparent">
                  📍 India
                </div>
                <div className="bg-neo-green text-black px-3 py-2 sm:px-4 font-mono text-xs sm:text-sm border-2 border-black">
                  🟢 Open to Full-Time Roles &amp; Research Opportunities
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
