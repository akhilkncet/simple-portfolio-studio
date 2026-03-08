'use client';

import { useState } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 px-4 py-4 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
        <a
          href="#home"
          className="bg-neo-white border-2 border-black px-2.5 py-1 sm:px-4 text-lg sm:text-xl font-black shadow-hard hover:bg-neo-yellow transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-hover"
        >
          AKHIL.dev
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 bg-white border-2 border-black p-2 shadow-hard">
          <a
            href="#about"
            className="px-3 py-1 font-mono font-bold text-sm hover:bg-black hover:text-white transition-colors cursor-hover"
          >
            /ABOUT
          </a>
          <a
            href="#skills"
            className="px-3 py-1 font-mono font-bold text-sm hover:bg-black hover:text-white transition-colors cursor-hover"
          >
            /SKILLS
          </a>
          <a
            href="#projects"
            className="px-3 py-1 font-mono font-bold text-sm hover:bg-black hover:text-white transition-colors cursor-hover"
          >
            /WORK
          </a>
          <a
            href="#experience"
            className="px-3 py-1 font-mono font-bold text-sm hover:bg-black hover:text-white transition-colors cursor-hover"
          >
            /LOGS
          </a>
          <a
            href="#achievements"
            className="px-3 py-1 font-mono font-bold text-sm hover:bg-black hover:text-white transition-colors cursor-hover"
          >
            /AWARDS
          </a>
          <a
            href="#contact"
            className="px-3 py-1 font-mono font-bold text-sm bg-neo-yellow border border-black hover:bg-neo-pink transition-colors cursor-hover"
          >
            HIRE ME
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden bg-neo-white border-2 border-black p-2 w-12 h-12 flex flex-col items-center justify-center gap-1 shadow-hard hover:bg-neo-yellow transition-all group"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-20 right-4 bg-white border-4 border-black shadow-hard-lg pointer-events-auto w-[calc(100%-2rem)] max-w-sm">
          <div className="flex flex-col">
            <a
              href="#about"
              onClick={closeMenu}
              className="px-5 py-3 font-mono font-bold text-sm hover:bg-black hover:text-white transition-colors border-b-2 border-black"
            >
              /ABOUT
            </a>
            <a
              href="#skills"
              onClick={closeMenu}
              className="px-5 py-3 font-mono font-bold text-sm hover:bg-black hover:text-white transition-colors border-b-2 border-black"
            >
              /SKILLS
            </a>
            <a
              href="#projects"
              onClick={closeMenu}
              className="px-5 py-3 font-mono font-bold text-sm hover:bg-black hover:text-white transition-colors border-b-2 border-black"
            >
              /WORK
            </a>
            <a
              href="#experience"
              onClick={closeMenu}
              className="px-5 py-3 font-mono font-bold text-sm hover:bg-black hover:text-white transition-colors border-b-2 border-black"
            >
              /LOGS
            </a>
            <a
              href="#achievements"
              onClick={closeMenu}
              className="px-5 py-3 font-mono font-bold text-sm hover:bg-black hover:text-white transition-colors border-b-2 border-black"
            >
              /AWARDS
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="px-5 py-3 font-mono font-bold text-sm bg-neo-yellow hover:bg-neo-pink transition-colors"
            >
              HIRE ME ⚡
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
