import { useState, useCallback, memo } from 'react';

const navLinks = [
  { href: '#about', label: '/ABOUT' },
  { href: '#skills', label: '/SKILLS' },
  { href: '#experience', label: '/EXPERIENCE' },
  { href: '#projects', label: '/PROJECTS' },
  { href: '#achievements', label: '/AWARDS' },
];

export const Navbar = memo(function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);

  return (
    <nav className="fixed top-0 w-full z-50 px-4 py-4 2xl:px-8 2xl:py-5 pointer-events-none" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl 2xl:max-w-8xl 3xl:max-w-9xl mx-auto flex justify-between items-center pointer-events-auto">
        <a
          href="#home"
          className="bg-neo-white border-2 border-black px-2.5 py-1 sm:px-4 2xl:px-5 2xl:py-1.5 text-lg sm:text-xl 2xl:text-2xl font-black shadow-hard hover:bg-neo-yellow transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-hover"
          aria-label="Go to home"
        >
          AKHIL.dev
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 2xl:gap-5 bg-white border-2 border-black p-2 2xl:p-3 shadow-hard">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="px-3 py-1 2xl:px-4 2xl:py-1.5 font-mono font-bold text-sm 2xl:text-base hover:bg-black hover:text-white transition-colors cursor-hover">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="px-3 py-1 2xl:px-4 2xl:py-1.5 font-mono font-bold text-sm 2xl:text-base bg-neo-yellow border border-black hover:bg-neo-pink transition-colors cursor-hover">
            HIRE ME
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden bg-neo-white border-2 border-black p-2 w-12 h-12 flex flex-col items-center justify-center gap-1 shadow-hard hover:bg-neo-yellow transition-all group"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <span className={`w-6 h-0.5 bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`w-6 h-0.5 bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-20 right-4 bg-white border-4 border-black shadow-hard-lg pointer-events-auto w-[calc(100%-2rem)] max-w-sm" role="menu">
          <div className="flex flex-col">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                role="menuitem"
                className="px-5 py-3 font-mono font-bold text-sm hover:bg-black hover:text-white transition-colors border-b-2 border-black"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              role="menuitem"
              className="px-5 py-3 font-mono font-bold text-sm bg-neo-yellow hover:bg-neo-pink transition-colors"
            >
              HIRE ME ⚡
            </a>
          </div>
        </div>
      )}
    </nav>
  );
});
