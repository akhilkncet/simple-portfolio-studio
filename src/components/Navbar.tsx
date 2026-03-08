import { useState, useCallback, useEffect, memo } from 'react';

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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 px-4 py-4 pointer-events-none" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
        <a
          href="#home"
          className="bg-neo-white border-2 border-black px-2.5 py-1 sm:px-4 text-lg sm:text-xl font-black shadow-hard hover:bg-neo-yellow transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-hover"
          aria-label="Go to home"
        >
          AKHIL.dev
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-2 lg:gap-4 bg-white border-2 border-black p-1.5 lg:p-2 shadow-hard">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="px-2 lg:px-3 py-1 font-mono font-bold text-xs lg:text-sm hover:bg-black hover:text-white transition-colors cursor-hover whitespace-nowrap">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="px-2 lg:px-3 py-1 font-mono font-bold text-xs lg:text-sm bg-neo-yellow border border-black hover:bg-neo-pink transition-colors cursor-hover whitespace-nowrap">
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

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40 pointer-events-auto"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-20 right-4 left-4 bg-white border-4 border-black shadow-hard-lg pointer-events-auto max-w-sm mx-auto z-50" role="menu">
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
              HIRE ME
            </a>
          </div>
        </div>
      )}
    </nav>
  );
});
