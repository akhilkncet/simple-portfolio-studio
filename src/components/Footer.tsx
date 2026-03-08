export const Footer = () => {
  return (
    <footer className="relative w-full min-h-[70vh] sm:min-h-[85vh] p-4 sm:p-8 flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full bg-black rounded-3xl p-6 sm:p-8 md:p-12 flex flex-col justify-between overflow-hidden">
        {/* Corner Symbols */}
        <div className="absolute top-4 left-4 right-4 sm:top-8 sm:left-8 sm:right-8 flex justify-between pointer-events-none opacity-50">
          <span className="text-white text-xl sm:text-2xl">✦</span>
          <span className="text-white text-xl sm:text-2xl">✦</span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 flex justify-between pointer-events-none opacity-50">
          <span className="text-white text-xl sm:text-2xl">✦</span>
          <span className="text-white text-xl sm:text-2xl">✦</span>
        </div>

        {/* Header */}
        <div className="text-center mb-6 sm:mb-10">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white leading-none">
            Akhil R
          </h1>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16 md:mb-32">
          <div className="flex flex-col items-center gap-2 sm:gap-4">
            <p className="font-mono text-white font-bold uppercase text-xs sm:text-sm">Explore</p>
            <a href="/" className="font-mono text-white/35 hover:text-white text-xs sm:text-sm transition-colors">
              Home
            </a>
            <a href="/contact" className="font-mono text-white/35 hover:text-white text-xs sm:text-sm transition-colors">
              Contact
            </a>
          </div>

          <div className="flex flex-col items-center gap-2 sm:gap-4">
            <p className="font-mono text-white font-bold uppercase text-xs sm:text-sm">Creative Hub</p>
            <a
              href="https://github.com/Akhil-0911"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-white/35 hover:text-white text-xs sm:text-sm transition-colors text-center"
            >
              View Portfolio
            </a>
            <a
              href="https://leetcode.com/Akhil_0911/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-white/35 hover:text-white text-xs sm:text-sm transition-colors text-center"
            >
              LeetCode Profile
            </a>
          </div>

          <div className="flex flex-col items-center gap-2 sm:gap-4">
            <p className="font-mono text-white font-bold uppercase text-xs sm:text-sm">Connect</p>
            <a
              href="https://www.linkedin.com/in/akhil0911"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-white/35 hover:text-white text-xs sm:text-sm transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Akhil-0911"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-white/35 hover:text-white text-xs sm:text-sm transition-colors"
            >
              Github
            </a>
            <a
              href="https://leetcode.com/Akhil_0911/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-white/35 hover:text-white text-xs sm:text-sm transition-colors"
            >
              LeetCode
            </a>
          </div>

          <div className="flex flex-col items-center gap-2 sm:gap-4">
            <p className="font-mono text-white font-bold uppercase text-xs sm:text-sm">Featured Work</p>
            <a
              href="https://github.com/Akhil-0911/Ecolca_pro"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-white/35 hover:text-white text-xs sm:text-sm transition-colors text-center"
            >
              EcoLCA Pro
            </a>
            <a
              href="https://github.com/Akhil-0911/SecureVault"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-white/35 hover:text-white text-xs sm:text-sm transition-colors text-center"
            >
              SecureVault
            </a>
            <a
              href="https://github.com/Akhil-0911/PADCOM_V3"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-white/35 hover:text-white text-xs sm:text-sm transition-colors text-center"
            >
              PADCOM
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center space-y-2">
          <p className="font-mono text-white/70 text-xs sm:text-sm">
            © - Akhil R // 2025
          </p>
        </div>

        {/* Background Text */}
        <div className="absolute bottom-0 left-0 w-full text-center text-[25vw] sm:text-[20vw] font-black text-white/5 leading-none select-none pointer-events-none">
          BRUTAL
        </div>
      </div>
    </footer>
  );
};
