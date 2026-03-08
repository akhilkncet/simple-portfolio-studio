import { useState, memo, useCallback } from 'react';

export const Hero = memo(function Hero() {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const openModal = useCallback(() => setShowResumeModal(true), []);
  const closeModal = useCallback(() => setShowResumeModal(false), []);

  return (
    <section id="home" className="min-h-[600px] h-screen max-h-[1200px] flex flex-col justify-center items-center px-4 2xl:px-8 pt-20 pb-16 sm:pb-20 relative overflow-hidden border-b-4 border-black" aria-label="Introduction">
      <div className="absolute top-1/3 left-[10%] w-16 h-16 2xl:w-20 2xl:h-20 bg-neo-blue border-4 border-black shadow-hard animate-bounce hidden lg:block rotate-12" aria-hidden="true" />
      <div className="absolute bottom-1/3 right-[10%] w-24 h-24 2xl:w-32 2xl:h-32 bg-neo-pink rounded-full border-4 border-black shadow-hard hidden lg:block animate-pulse" aria-hidden="true" />
      <div className="absolute top-20 right-20 text-9xl 2xl:text-[12rem] 3xl:text-[14rem] opacity-5 font-black select-none pointer-events-none hidden md:block" aria-hidden="true">
        CODE
      </div>

      <div className="relative z-10 text-center max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl">
        <div className="inline-block bg-neo-white border-2 border-black px-3 py-1 sm:px-4 mb-4 sm:mb-6 shadow-hard rotate-[-2deg] reveal">
          <span className="font-mono font-bold text-neo-green bg-black px-1 sm:px-2 mr-1 sm:mr-2 text-xs sm:text-base 2xl:text-lg" aria-hidden="true">●</span>
          <span className="font-mono font-bold text-xs sm:text-base 2xl:text-lg">SYSTEM STATUS: ONLINE</span>
        </div>

        <h1 className="text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[11vw] xl:text-[10rem] 2xl:text-[11rem] 3xl:text-[13rem] leading-[0.7] font-black uppercase tracking-wide mb-3 sm:mb-5 reveal mix-blend-darken">
          AKHIL
          <br />
          <span className="text-white text-stroke-black text-[7vw] sm:text-[6vw] md:text-[5vw] lg:text-[4.5vw] xl:text-[3.5rem] 2xl:text-[4rem] 3xl:text-[4.5rem] tracking-wider font-normal leading-[1]">SOFTWARE ENGINEER</span>
        </h1>

        <div className="font-mono text-sm sm:text-base md:text-lg 2xl:text-xl max-w-2xl 2xl:max-w-3xl mx-auto mb-5 sm:mb-8 bg-neo-yellow border-4 border-black p-4 sm:p-5 md:p-6 2xl:p-8 shadow-hard reveal">
          <p className="mb-3 sm:mb-4 leading-relaxed">
            Building scalable backend systems and ML-powered applications.
          </p>
          <p className="font-bold">
            Python • Django • REST APIs • Machine Learning
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 reveal">
          <a
            href="#projects"
            className="bg-black text-white border-2 border-black px-6 py-3 sm:px-8 sm:py-4 2xl:px-10 2xl:py-5 text-sm sm:text-base md:text-lg 2xl:text-xl font-bold shadow-hard hover:bg-neo-green hover:text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-hover"
          >
            VIEW PROJECTS
          </a>
          <button
            onClick={openModal}
            className="bg-neo-white text-black border-2 border-black px-6 py-3 sm:px-8 sm:py-4 2xl:px-10 2xl:py-5 text-sm sm:text-base md:text-lg 2xl:text-xl font-bold shadow-hard hover:bg-neo-pink hover:text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-hover flex items-center justify-center gap-2"
          >
            <i className="ri-download-line text-base sm:text-lg 2xl:text-xl" aria-hidden="true"></i> <span>DOWNLOAD CV</span>
          </button>
        </div>
      </div>

      <HeroMarquee />

      {showResumeModal && <ResumeModal onClose={closeModal} />}
    </section>
  );
});

const HeroMarquee = memo(function HeroMarquee() {
  const skills = 'PYTHON • DJANGO • FLASK • PYTORCH • REACT • NEXTJS • CYBERSECURITY • MACHINE LEARNING • POSTGRESQL • DOCKER • GIT • LINUX • REST API • PENETRATION TESTING • ';

  return (
    <div className="absolute bottom-0 left-0 w-full bg-neo-red border-t-4 border-black py-2.5 sm:py-3.5 2xl:py-4 overflow-hidden" aria-hidden="true">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="font-mono font-bold text-white text-sm sm:text-base md:text-lg 2xl:text-xl mx-2 sm:mx-4">{skills}</span>
        <span className="font-mono font-bold text-white text-sm sm:text-base md:text-lg 2xl:text-xl mx-2 sm:mx-4">{skills}</span>
        <span className="font-mono font-bold text-white text-sm sm:text-base md:text-lg 2xl:text-xl mx-2 sm:mx-4">{skills}</span>
      </div>
    </div>
  );
});

const resumes = [
  { id: 1, title: 'Resume Version 1', path: '/Resume/resume (1).pdf', description: 'Non-ATS Version' },
  { id: 2, title: 'Resume Version 2', path: '/Resume/resume (2).pdf', description: 'ATS Version' },
];

const ResumeModal = memo(function ResumeModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Choose Resume"
    >
      <div
        className="bg-neo-yellow border-4 border-black shadow-hard-lg max-w-md 2xl:max-w-lg w-full p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl sm:text-3xl 2xl:text-4xl font-black uppercase">Choose Resume</h3>
          <button
            onClick={onClose}
            className="bg-neo-red text-white border-2 border-black px-3 py-1 font-bold hover:bg-red-600 transition-colors"
            aria-label="Close resume modal"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          {resumes.map((resume) => (
            <a
              key={resume.id}
              href={resume.path}
              download
              className="block bg-white border-4 border-black p-4 shadow-hard hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-black text-lg 2xl:text-xl mb-1 group-hover:text-neo-green transition-colors">{resume.title}</h4>
                  <p className="font-mono text-sm 2xl:text-base text-gray-600">{resume.description}</p>
                </div>
                <i className="ri-download-2-line text-2xl group-hover:text-neo-green transition-colors" aria-hidden="true"></i>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-6 font-mono text-xs text-center text-gray-700">
          Click on a resume to download
        </div>
      </div>
    </div>
  );
});
