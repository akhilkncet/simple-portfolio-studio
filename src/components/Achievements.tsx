import { useState, useEffect, memo, useMemo, useCallback } from 'react';
import { achievements } from '@/lib/data';
import { OptimizedImage } from './OptimizedImage';
import { borderColor, bgColorWithOpacity, textColor } from '@/lib/colorMap';

type Category = 'internship' | 'hackathon' | 'certification';

const AchievementCard = memo(({ achievement, onClick }: { achievement: typeof achievements[0]; onClick: () => void }) => (
  <div
    onClick={onClick}
    className={`bg-[#1a1a1a] border-4 ${borderColor[achievement.color] || 'border-neo-green'} shadow-hard p-2.5 sm:p-4 md:p-5 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer group h-full flex flex-col`}
    role="button"
    tabIndex={0}
    aria-label={`View ${achievement.title} certificate`}
    onKeyDown={(e) => e.key === 'Enter' && onClick()}
  >
    <div className="aspect-video bg-[#1a1a1a] border-2 border-gray-700 mb-2 sm:mb-3 md:mb-4 overflow-hidden">
      <OptimizedImage
        src={achievement.image}
        alt={achievement.title}
        width={400}
        height={225}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
    </div>
    <div className="space-y-1 sm:space-y-1.5 md:space-y-2 flex-grow">
      <span className={`inline-block ${bgColorWithOpacity[achievement.color] || 'bg-neo-green/20'} text-white border ${borderColor[achievement.color] || 'border-neo-green'} px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 text-[9px] sm:text-[10px] md:text-xs font-mono font-bold uppercase`}>
        {achievement.category}
      </span>
      <h3 className="font-black text-xs sm:text-sm md:text-base lg:text-lg uppercase leading-tight text-white">{achievement.title}</h3>
      <p className="font-mono text-[10px] sm:text-xs md:text-sm text-gray-200">{achievement.organization}</p>
      <p className="font-mono text-[9px] sm:text-[10px] md:text-xs text-gray-300">{achievement.date}</p>
    </div>
  </div>
));

AchievementCard.displayName = 'AchievementCard';

export const Achievements = memo(function Achievements() {
  const [selectedCertificate, setSelectedCertificate] = useState<typeof achievements[0] | null>(null);
  const [activeTab, setActiveTab] = useState<Category>('internship');
  const [showAllModal, setShowAllModal] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedCertificate || showAllModal) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [selectedCertificate, showAllModal]);

  const internships = useMemo(() => achievements.filter(a => a.category === 'internship'), []);
  const hackathons = useMemo(() => achievements.filter(a => a.category === 'hackathon'), []);
  const certifications = useMemo(() => achievements.filter(a => a.category === 'certification'), []);

  const activeItems = useMemo(() => {
    switch (activeTab) {
      case 'internship': return internships;
      case 'hackathon': return hackathons;
      case 'certification': return certifications;
    }
  }, [activeTab, internships, hackathons, certifications]);

  const tabs = useMemo(() => [
    { id: 'internship' as Category, label: 'INTERNSHIPS', icon: '🎓', color: 'neo-green', count: internships.length },
    { id: 'hackathon' as Category, label: 'HACKATHONS', icon: '🏆', color: 'neo-orange', count: hackathons.length },
    { id: 'certification' as Category, label: 'CERTIFICATIONS', icon: '📜', color: 'neo-blue', count: certifications.length },
  ], [internships.length, hackathons.length, certifications.length]);

  const handleCardClick = useCallback((achievement: typeof achievements[0]) => {
    setSelectedCertificate(achievement);
    setShowAllModal(false);
  }, []);

  const closeCertModal = useCallback(() => setSelectedCertificate(null), []);
  const closeAllModal = useCallback(() => setShowAllModal(false), []);

  return (
    <section id="achievements" className="py-12 sm:py-16 md:py-20 bg-[#0a0a0a] border-b-4 border-[#333] relative overflow-hidden" aria-label="Achievements & Certifications">
      <div
        className="absolute inset-0 opacity-20"
        aria-hidden="true"
        style={{
          backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 sm:mb-10 border-b-4 border-cyan-400 pb-2.5 sm:pb-3.5">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-cyan-100 tracking-tighter mb-2 md:mb-0">
            ACHIEVE<span className="text-neo-green">_MENTS</span>
          </h2>
          <div className="flex items-center gap-2 mb-2 md:mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" aria-hidden="true" />
            <p className="font-mono text-neo-green text-xs sm:text-sm font-bold">/// CERTIFICATES_LOADED</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <nav className="flex flex-wrap gap-2.5 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10" role="tablist" aria-label="Achievement categories">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3 py-2.5 sm:px-4 sm:py-3 md:px-6 md:py-4 border-4 shadow-hard font-black uppercase text-xs sm:text-sm md:text-base transition-all duration-200 ${
                activeTab === tab.id
                  ? `${bgColor(tab.color)} border-white text-black scale-105 translate-x-1 translate-y-1 shadow-none`
                  : 'bg-[#1a1a1a] border-gray-700 text-white hover:border-gray-500 hover:translate-x-1 hover:translate-y-1 hover:shadow-none'
              }`}
            >
              <span className="text-base sm:text-lg md:text-xl" aria-hidden="true">{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.label.slice(0, -1)}</span>
              <span className="ml-1 sm:ml-2 px-1.5 py-0.5 sm:px-2 sm:py-1 border-2 border-white bg-[#0a0a0a] text-white text-xs font-mono">
                {tab.count}
              </span>
            </button>
          ))}
        </nav>

        {/* Grid Display */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-6" role="tabpanel">
          {activeItems.slice(0, 4).map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} onClick={() => handleCardClick(achievement)} />
          ))}
        </div>

        {/* More Button */}
        {activeItems.length > 4 && (
          <div className="flex justify-center mb-8 sm:mb-10">
            <button
              onClick={() => setShowAllModal(true)}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-neo-blue border-4 border-white shadow-hard font-black uppercase text-sm sm:text-base hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all"
            >
              📜 VIEW ALL {activeItems.length} CERTIFICATES
            </button>
          </div>
        )}

        <div className="border-t-4 border-cyan-400 mt-8 sm:mt-12 pt-3 sm:pt-4 flex flex-col sm:flex-row justify-between gap-2 font-mono text-xs text-cyan-500">
          <span className="text-cyan-400">TOTAL_CERTIFICATES: {achievements.length}</span>
          <span className="text-cyan-400">STATUS: VERIFIED</span>
        </div>
      </div>

      {/* Certificate Detail Modal */}
      {selectedCertificate && (
        <CertificateModal certificate={selectedCertificate} onClose={closeCertModal} />
      )}

      {/* All Certificates Modal */}
      {showAllModal && (
        <AllCertificatesModal
          items={activeItems}
          tabs={tabs}
          activeTab={activeTab}
          onClose={closeAllModal}
          onCardClick={handleCardClick}
        />
      )}
    </section>
  );
});

// Helper for tab bg color
function bgColor(color: string): string {
  const map: Record<string, string> = {
    'neo-green': 'bg-neo-green',
    'neo-red': 'bg-neo-red',
    'neo-blue': 'bg-neo-blue',
    'neo-yellow': 'bg-neo-yellow',
    'neo-pink': 'bg-neo-pink',
    'neo-purple': 'bg-neo-purple',
    'neo-orange': 'bg-neo-orange',
  };
  return map[color] || 'bg-neo-green';
}

const CertificateModal = memo(({ certificate, onClose }: { certificate: typeof achievements[0]; onClose: () => void }) => {
  const hasDescription = (certificate.category === 'internship' || certificate.category === 'hackathon') && certificate.description;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={certificate.title}
    >
      <div className="absolute inset-0 overflow-y-auto">
        <div className="min-h-full flex items-start justify-center px-2 sm:px-4 py-8">
          <div
            className="relative max-w-7xl w-full bg-[#1a1a1a] border-4 border-cyan-400 shadow-hard p-4 sm:p-6"
            onClick={e => e.stopPropagation()}
          >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-neo-red text-white border-2 border-cyan-400 flex items-center justify-center hover:bg-white hover:text-neo-red transition-all shadow-hard font-black text-xl sm:text-2xl z-10"
          aria-label="Close modal"
        >
          ×
        </button>

        <div className="space-y-4 sm:space-y-6">
          <div className="border-b-2 border-cyan-400 pb-3 sm:pb-4 pr-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-cyan-100 mb-2">{certificate.title}</h3>
            <div className="flex flex-wrap gap-2 sm:gap-4 font-mono text-xs sm:text-sm">
              <span className="text-neo-green">📍 {certificate.organization}</span>
              <span className="text-neo-yellow">📅 {certificate.date}</span>
              <span className={`${textColor[certificate.color] || 'text-neo-green'} uppercase font-bold`}>
                {certificate.category}
              </span>
            </div>
          </div>

          {hasDescription ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-[#1a1a1a] border-2 border-gray-700 p-3 sm:p-4">
                <OptimizedImage src={certificate.image} alt={certificate.title} width={800} height={600} className="w-full h-auto object-contain" />
              </div>
              <div className="bg-[#0a0a0a] border-2 border-gray-700 p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-black uppercase text-neo-green mb-3 sm:mb-4">/// DETAILS</h4>
                <ul className="font-mono text-sm sm:text-base text-gray-300 leading-relaxed space-y-2 sm:space-y-3 list-none">
                  {(certificate.description ?? '').split(/(?<=\.)\s+/).filter(item => item.trim()).map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-neo-yellow mt-1 flex-shrink-0" aria-hidden="true">•</span>
                      <span>{point.trim()}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="bg-[#1a1a1a] border-2 border-gray-700 p-3 sm:p-4">
              <OptimizedImage src={certificate.image} alt={certificate.title} width={1200} height={900} className="w-full h-auto object-contain" />
            </div>
          )}
        </div>
          </div>
        </div>
      </div>
    </div>
  );
});

CertificateModal.displayName = 'CertificateModal';

interface AllCertificatesModalProps {
  items: typeof achievements;
  tabs: { id: Category; label: string; icon: string }[];
  activeTab: Category;
  onClose: () => void;
  onCardClick: (a: typeof achievements[0]) => void;
}

const AllCertificatesModal = memo(({ items, tabs, activeTab, onClose, onCardClick }: AllCertificatesModalProps) => {
  const activeTabInfo = tabs.find(t => t.id === activeTab);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center px-2 sm:px-4 py-8 bg-black/90 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`All ${activeTabInfo?.label}`}
    >
      <div
        className="relative max-w-7xl w-full bg-[#0a0a0a] border-4 border-neo-blue shadow-hard p-4 sm:p-6 md:p-8 my-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-[#0a0a0a] pb-4 mb-4 border-b-2 border-neo-blue z-10">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white mb-2">
                {activeTabInfo?.icon} ALL {activeTabInfo?.label}
              </h3>
              <p className="font-mono text-xs sm:text-sm text-gray-400">
                Total: {items.length} certificates
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-neo-red text-white border-2 border-white flex items-center justify-center hover:bg-white hover:text-neo-red transition-all shadow-hard font-black text-xl sm:text-2xl"
              aria-label="Close modal"
            >
              ×
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {items.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} onClick={() => onCardClick(achievement)} />
          ))}
        </div>
      </div>
    </div>
  );
});

AllCertificatesModal.displayName = 'AllCertificatesModal';
