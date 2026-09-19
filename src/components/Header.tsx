import React, { useState } from 'react';
import { ScreenView } from '../types';
import { LOGO_URL, WORKSHOP_DETAILS } from '../data/mattresses';

interface HeaderProps {
  currentScreen: ScreenView;
  onNavigate: (screen: ScreenView) => void;
  onOpenQuote: () => void;
  lang: 'en' | 'ta';
  setLang: (l: 'en' | 'ta') => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  onOpenQuote,
  lang,
  setLang
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; labelTa: string; screen: ScreenView }[] = [
    { label: 'Mattresses', labelTa: 'மெத்தைகள்', screen: 'mattress-collection' },
    { label: 'Diwan cots', labelTa: 'திவான் கட்டில்கள்', screen: 'diwan-cots' },
    { label: 'Custom size', labelTa: 'தனிப்பயன் அளவு', screen: 'custom-size-builder' },
    { label: 'Bulk orders', labelTa: 'மொத்த ஆர்டர்கள்', screen: 'bulk-institutional-orders' },
    { label: 'Visit us', labelTa: 'நேரில் வரவும்', screen: 'visit-our-unit' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Banner */}
      <div className="hidden lg:flex h-9 bg-[#142C47] text-white/80 text-[13px] font-medium items-center justify-between px-6 lg:px-12 max-w-[1280px] mx-auto">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f7bd59]"></span>
          {lang === 'en'
            ? 'Made to order in our own unit · delivered across Tamil Nadu'
            : 'எங்கள் சொந்த தொழிற்சாலையில் ஆர்டரின் பேரில் தயாரிக்கப்படுகிறது · தமிழ்நாடு முழுவதும் டெலிவரி'}
        </span>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`hover:text-white transition-colors cursor-pointer ${
                lang === 'en' ? 'text-white font-semibold underline underline-offset-2' : 'text-white/60'
              }`}
            >
              English
            </button>
            <span className="text-white/30">/</span>
            <button
              type="button"
              onClick={() => setLang('ta')}
              className={`hover:text-white transition-colors cursor-pointer ${
                lang === 'ta' ? 'text-white font-semibold underline underline-offset-2' : 'text-white/60'
              }`}
            >
              தமிழ்
            </button>
          </div>
          <span className="text-white/30">·</span>
          <a
            href={`tel:${WORKSHOP_DETAILS.phoneRaw}`}
            className="flex items-center gap-1 hover:text-white transition-colors font-medium"
          >
            <span className="material-symbols-outlined text-[15px]">call</span>
            {WORKSHOP_DETAILS.phone}
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-[#EFE5D7]/95 backdrop-blur-md border-b border-[#DFD8CC] shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-20 max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between gap-4">
          {/* Logo & Brand */}
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            <img
              alt="Deep Nap Mattress Logo"
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
              src={LOGO_URL}
            />
            <span className="font-headline text-[24px] font-bold text-[#142C47] tracking-tight hidden sm:inline">
              Deep Nap
            </span>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-3">
            {navItems.map((item) => {
              const isActive = currentScreen === item.screen;
              return (
                <button
                  key={item.screen}
                  type="button"
                  onClick={() => onNavigate(item.screen)}
                  className={`px-3.5 py-1.5 rounded-lg text-[15px] font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#142C47] text-white font-semibold shadow-sm'
                      : 'text-[#43474d] hover:text-[#142C47] hover:bg-white/40'
                  }`}
                >
                  {lang === 'en' ? item.label : item.labelTa}
                </button>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-3">
            {/* WhatsApp trigger */}
            <a
              className="hidden sm:inline-flex items-center gap-2 border-[1.5px] border-[#142C47] bg-transparent text-[#142C47] px-4 py-2 rounded-full text-[14px] font-semibold hover:bg-[#142C47] hover:text-white transition-all cursor-pointer"
              href={`https://wa.me/91${WORKSHOP_DETAILS.phoneRaw}?text=${encodeURIComponent(WORKSHOP_DETAILS.whatsappText)}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="w-2 h-2 rounded-full bg-[#DCA544] shrink-0"></span>
              WhatsApp
            </a>

            {/* Get a quote button */}
            <button
              type="button"
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center bg-[#142C47] text-white px-5 py-2.5 rounded-lg text-[14px] font-semibold hover:bg-[#0E1F33] transition-all shadow-sm cursor-pointer"
            >
              {lang === 'en' ? 'Get a quote' : 'விலைப்பட்டியல்'}
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-10 h-10 rounded-lg flex items-center justify-center text-[#142C47] hover:bg-black/5"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>

            {/* Profile avatar indicator */}
            <div className="w-8 h-8 rounded-full bg-[#142C47] hidden md:flex items-center justify-center text-white" title="Account / Orders">
              <span className="material-symbols-outlined text-[18px]">person</span>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#EFE5D7] border-t border-[#DFD8CC] px-4 py-4 space-y-2">
            <div className="flex items-center justify-between pb-2 border-b border-[#DFD8CC]">
              <span className="text-xs font-semibold text-[#5E6B7A] uppercase">Language</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`px-2 py-0.5 text-xs rounded ${lang === 'en' ? 'bg-[#142C47] text-white' : 'text-[#142C47]'}`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setLang('ta')}
                  className={`px-2 py-0.5 text-xs rounded ${lang === 'ta' ? 'bg-[#142C47] text-white' : 'text-[#142C47]'}`}
                >
                  தமிழ்
                </button>
              </div>
            </div>

            {navItems.map((item) => (
              <button
                key={item.screen}
                type="button"
                onClick={() => {
                  onNavigate(item.screen);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                  currentScreen === item.screen
                    ? 'bg-[#142C47] text-white'
                    : 'text-[#142C47] hover:bg-white/60'
                }`}
              >
                <span>{lang === 'en' ? item.label : item.labelTa}</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            ))}

            <div className="pt-2">
              <a
                href={`https://wa.me/91${WORKSHOP_DETAILS.phoneRaw}?text=${encodeURIComponent(WORKSHOP_DETAILS.whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-[#142C47] text-[#142C47] font-semibold text-sm"
              >
                <span className="w-2 h-2 rounded-full bg-[#DCA544]"></span>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
