import { memo, useState, useCallback } from 'react';

const resumes = [
  { id: 1, title: 'Resume Version 1', path: '/Resume/resume (1).pdf', description: 'Non-ATS Version' },
  { id: 2, title: 'Resume Version 2', path: '/Resume/resume (2).pdf', description: 'ATS Version' },
];

export const Footer = memo(function Footer() {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const openModal = useCallback(() => setShowResumeModal(true), []);
  const closeModal = useCallback(() => setShowResumeModal(false), []);

  return (
    <footer className="relative w-full p-3 sm:p-8 flex items-center justify-center overflow-hidden" role="contentinfo">
      <div className="relative w-full h-full bg-black rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 flex flex-col justify-between overflow-hidden">
        {/* Corner Symbols */}
        <div className="absolute top-3 left-3 right-3 sm:top-8 sm:left-8 sm:right-8 flex justify-between pointer-events-none opacity-50" aria-hidden="true">
          <span className="text-white text-lg sm:text-2xl">✦</span>
          <span className="text-white text-lg sm:text-2xl">✦</span>
        </div>
        <div className="absolute bottom-3 left-3 right-3 sm:bottom-8 sm:left-8 sm:right-8 flex justify-between pointer-events-none opacity-50" aria-hidden="true">
          <span className="text-white text-lg sm:text-2xl">✦</span>
          <span className="text-white text-lg sm:text-2xl">✦</span>
        </div>

        {/* Header */}
        <div className="text-center mb-5 sm:mb-10">
          <p className="font-mono text-white/50 text-[10px] sm:text-sm uppercase tracking-widest mb-2">AI & Backend Developer</p>
          <h2 className="text-2xl sm:text-5xl md:text-6xl font-black uppercase text-white leading-none">
            Akhil R
          </h2>
          <p className="font-mono text-white/40 text-[10px] sm:text-sm mt-2 sm:mt-3">Building intelligent systems with Python, Django & Machine Learning</p>
        </div>

        {/* Footer Columns */}
        <nav className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-12 mb-6 sm:mb-10 md:mb-14" aria-label="Footer navigation">
          <div className="flex flex-col items-center gap-1.5 sm:gap-4">
            <p className="font-mono text-white font-bold uppercase text-[10px] sm:text-sm">Explore</p>
            <a href="#home" className="font-mono text-white/35 hover:text-white text-[10px] sm:text-sm transition-colors">Home</a>
            <a href="#about" className="font-mono text-white/35 hover:text-white text-[10px] sm:text-sm transition-colors">About</a>
            <a href="#skills" className="font-mono text-white/35 hover:text-white text-[10px] sm:text-sm transition-colors">Skills</a>
            <a href="#projects" className="font-mono text-white/35 hover:text-white text-[10px] sm:text-sm transition-colors">Projects</a>
            <a href="#contact" className="font-mono text-white/35 hover:text-white text-[10px] sm:text-sm transition-colors">Contact</a>
          </div>

          <div className="flex flex-col items-center gap-1.5 sm:gap-4">
            <p className="font-mono text-white font-bold uppercase text-[10px] sm:text-sm">Connect</p>
            <a href="https://www.linkedin.com/in/akhil0911" target="_blank" rel="noopener noreferrer" className="font-mono text-white/35 hover:text-white text-[10px] sm:text-sm transition-colors">LinkedIn</a>
            <a href="https://github.com/Akhil-0911" target="_blank" rel="noopener noreferrer" className="font-mono text-white/35 hover:text-white text-[10px] sm:text-sm transition-colors">Github</a>
            <a href="mailto:akhil.kncet@gmail.com" className="font-mono text-white/35 hover:text-white text-[10px] sm:text-sm transition-colors">Email</a>
          </div>

          <div className="flex flex-col items-center gap-1.5 sm:gap-4">
            <p className="font-mono text-white font-bold uppercase text-[10px] sm:text-sm">Featured Work</p>
            <a href="https://github.com/akhilkncet/Marine" target="_blank" rel="noopener noreferrer" className="font-mono text-white/35 hover:text-white text-[10px] sm:text-sm transition-colors text-center">Marine Bio AI</a>
            <a href="https://github.com/akhilkncet/Emotion-bot" target="_blank" rel="noopener noreferrer" className="font-mono text-white/35 hover:text-white text-[10px] sm:text-sm transition-colors text-center">Emotion Chatbot</a>
            <a href="https://github.com/Akhil-0911/Ecolca_pro" target="_blank" rel="noopener noreferrer" className="font-mono text-white/35 hover:text-white text-[10px] sm:text-sm transition-colors text-center">EcoLCA Pro</a>
          </div>

          <div className="flex flex-col items-center gap-1.5 sm:gap-4">
            <p className="font-mono text-white font-bold uppercase text-[10px] sm:text-sm">Resources</p>
            <button onClick={openModal} className="font-mono text-white/35 hover:text-white text-[10px] sm:text-sm transition-colors text-center">Resume</button>
            <a href="#achievements" className="font-mono text-white/35 hover:text-white text-[10px] sm:text-sm transition-colors text-center">Certifications</a>
            <a href="#experience" className="font-mono text-white/35 hover:text-white text-[10px] sm:text-sm transition-colors text-center">Experience</a>
          </div>
        </nav>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-4 sm:mb-6" />

        {/* Copyright */}
        <div className="text-center">
          <p className="font-mono text-white/70 text-[10px] sm:text-sm">
            © {new Date().getFullYear()} Akhil R. All rights reserved.
          </p>
        </div>

        {/* Background Text */}
        <div className="absolute bottom-0 left-0 w-full text-center text-[25vw] sm:text-[20vw] font-black text-white/5 leading-none select-none pointer-events-none" aria-hidden="true">
          AKHIL
        </div>
      </div>

      {/* Resume Modal */}
      {showResumeModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Choose Resume"
        >
          <div
            className="bg-neo-yellow border-4 border-black shadow-hard-lg max-w-md w-full p-5 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-5 sm:mb-6">
              <h3 className="text-xl sm:text-3xl font-black uppercase">Choose Resume</h3>
              <button
                onClick={closeModal}
                className="bg-neo-red text-white border-2 border-black px-3 py-1 font-bold hover:bg-red-600 transition-colors"
                aria-label="Close resume modal"
              >
                ✕
              </button>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {resumes.map((resume) => (
                <a
                  key={resume.id}
                  href={resume.path}
                  download
                  className="block bg-white border-4 border-black p-3 sm:p-4 shadow-hard hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-black text-sm sm:text-lg mb-0.5 sm:mb-1 group-hover:text-neo-green transition-colors">{resume.title}</h4>
                      <p className="font-mono text-xs sm:text-sm text-gray-600">{resume.description}</p>
                    </div>
                    <i className="ri-download-2-line text-xl sm:text-2xl group-hover:text-neo-green transition-colors" aria-hidden="true"></i>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-4 sm:mt-6 font-mono text-[10px] sm:text-xs text-center text-gray-700">
              Click on a resume to download
            </div>
          </div>
        </div>
      )}
    </footer>
  );
});
