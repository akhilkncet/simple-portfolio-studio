'use client';

import { useState } from 'react';

export function Hero() {
  const [showResumeModal, setShowResumeModal] = useState(false);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-4 pt-20 pb-16 sm:pb-20 relative overflow-hidden border-b-4 border-black">
      <div className="absolute top-1/3 left-[10%] w-16 h-16 bg-neo-blue border-4 border-black shadow-hard animate-bounce hidden lg:block rotate-12"></div>
      <div className="absolute bottom-1/3 right-[10%] w-24 h-24 bg-neo-pink rounded-full border-4 border-black shadow-hard hidden lg:block animate-pulse"></div>
      <div className="absolute top-20 right-20 text-9xl opacity-5 font-black select-none pointer-events-none hidden md:block">
        CODE
      </div>

      <div className="relative z-10 text-center max-w-5xl">
        <div className="inline-block bg-neo-white border-2 border-black px-3 py-1 sm:px-4 mb-4 sm:mb-6 shadow-hard rotate-[-2deg] reveal">
          <span className="font-mono font-bold text-neo-green bg-black px-1 sm:px-2 mr-1 sm:mr-2 text-xs sm:text-base">●</span>
          <span className="font-mono font-bold text-xs sm:text-base">SYSTEM STATUS: ONLINE</span>
        </div>

        <h1 className="text-[13vw] sm:text-[11vw] md:text-[10vw] lg:text-[9vw] leading-[0.7] sm:leading-[0.65] font-black uppercase tracking-wide mb-3 sm:mb-5 reveal mix-blend-darken">
          AKHIL
          <br />
          <span className="text-white text-stroke-black text-[5.5vw] sm:text-[4.5vw] md:text-[4vw] lg:text-[3.5vw] tracking-wider font-normal">SOFTWARE ENGINEER</span>
        </h1>

        <div className="font-mono text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-5 sm:mb-8 bg-neo-yellow border-4 border-black p-4 sm:p-5 md:p-6 shadow-hard reveal">
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
            className="bg-black text-white border-2 border-black px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base md:text-lg font-bold shadow-hard hover:bg-neo-green hover:text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-hover"
          >
            VIEW DATABASE
          </a>
          <button
            onClick={() => setShowResumeModal(true)}
            className="bg-neo-white text-black border-2 border-black px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base md:text-lg font-bold shadow-hard hover:bg-neo-pink hover:text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-hover flex items-center justify-center gap-2"
          >
            <i className="ri-download-line text-base sm:text-lg"></i> <span>DOWNLOAD CV</span>
          </button>
        </div>
      </div>

      <Marquee />

      {showResumeModal && (
        <ResumeModal onClose={() => setShowResumeModal(false)} />
      )}
    </section>
  );
}

function Marquee() {
  const skills = 'PYTHON • DJANGO • FLASK • PYTORCH • REACT • NEXTJS • CYBERSECURITY • MACHINE LEARNING • POSTGRESQL • DOCKER • GIT • LINUX • REST API • PENETRATION TESTING • ';
  
  return (
    <div className="absolute bottom-0 left-0 w-full bg-neo-red border-t-4 border-black py-2.5 sm:py-3.5 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="font-mono font-bold text-white text-sm sm:text-base md:text-lg mx-2 sm:mx-4">{skills}</span>
        <span className="font-mono font-bold text-white text-sm sm:text-base md:text-lg mx-2 sm:mx-4">{skills}</span>
        <span className="font-mono font-bold text-white text-sm sm:text-base md:text-lg mx-2 sm:mx-4">{skills}</span>
      </div>
    </div>
  );
}

interface ResumeModalProps {
  onClose: () => void;
}

function ResumeModal({ onClose }: ResumeModalProps) {
  const resumes = [
    {
      id: 1,
      title: 'Resume Version 1',
      path: '/Resume/resume (1).pdf',
      description: 'Non-ATS Version'
    },
    {
      id: 2,
      title: 'Resume Version 2',
      path: '/Resume/resume (2).pdf',
      description: 'ATS Version'
    }
  ];

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4"
      onClick={onClose}
    >
      <div 
        className="bg-neo-yellow border-4 border-black shadow-hard-lg max-w-md w-full p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl sm:text-3xl font-black uppercase">
            Choose Resume
          </h3>
          <button
            onClick={onClose}
            className="bg-neo-red text-white border-2 border-black px-3 py-1 font-bold hover:bg-red-600 transition-colors"
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
                  <h4 className="font-black text-lg mb-1 group-hover:text-neo-green transition-colors">
                    {resume.title}
                  </h4>
                  <p className="font-mono text-sm text-gray-600">
                    {resume.description}
                  </p>
                </div>
                <i className="ri-download-2-line text-2xl group-hover:text-neo-green transition-colors"></i>
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
}
