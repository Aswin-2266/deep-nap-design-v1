import React from 'react';
import { ScreenView } from '../types';
import { LOGO_URL, WORKSHOP_DETAILS } from '../data/mattresses';

interface FooterProps {
  onNavigate: (screen: ScreenView) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <footer className="w-full bg-[#0E1F33] text-[#EFE5D7] pt-12 md:pt-16 border-t border-[#DFD8CC]/20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 pb-12">
          {/* Col 1: Brand & Factory Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                alt="Deep Nap Mattress Logo"
                className="h-8 w-auto object-contain brightness-0 invert"
                src={LOGO_URL}
              />
              <span className="font-headline text-[24px] font-bold text-white tracking-tight">
                Deep Nap
              </span>
            </div>
            <p className="text-[14px] leading-relaxed text-[#EFE5D7]/80">
              Bespoke, climate-adapted sleep systems crafted with artisanal precision in our Coimbatore unit.
            </p>
            <div className="space-y-2 text-[13px] text-[#EFE5D7]/90 pt-1">
              <p className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#f7bd59] text-[18px] shrink-0 mt-0.5">
                  location_on
                </span>
                <span>
                  {WORKSHOP_DETAILS.address}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#f7bd59] text-[18px] shrink-0">
                  schedule
                </span>
                <span>{WORKSHOP_DETAILS.hours}</span>
              </p>
            </div>
            <a
              className="inline-flex items-center gap-1.5 text-[#f7bd59] hover:text-white text-[14px] font-medium transition-colors pt-1 cursor-pointer"
              href="https://maps.google.com/?q=Chinniyampalayam+Coimbatore"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[18px]">directions</span>
              Get directions
            </a>
          </div>

          {/* Col 2: Shop */}
          <div className="space-y-4">
            <div className="font-headline text-[18px] font-semibold text-white border-b border-[#DFD8CC]/20 pb-2">
              Shop
            </div>
            <ul className="space-y-2.5 text-[14px] text-[#EFE5D7]/80 font-medium">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('mattress-collection')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Latex Mattresses
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('mattress-collection')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Pocket Spring
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('mattress-collection')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Orthopaedic
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('diwan-cots')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Diwan Cots
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('custom-size-builder')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Custom Size Builder
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Help */}
          <div className="space-y-4">
            <div className="font-headline text-[18px] font-semibold text-white border-b border-[#DFD8CC]/20 pb-2">
              Help
            </div>
            <ul className="space-y-2.5 text-[14px] text-[#EFE5D7]/80 font-medium">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('visit-our-unit')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  FAQ & Care Guide
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('mattress-collection')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Warranty Registration (Up to 20 Yrs)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('visit-our-unit')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Delivery & Free Installation in TN
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('bulk-institutional-orders')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Bulk & Institutional Orders
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Request Mattress Specification
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Talk to Us */}
          <div className="space-y-4">
            <div className="font-headline text-[18px] font-semibold text-white border-b border-[#DFD8CC]/20 pb-2">
              Talk to Us
            </div>
            <ul className="space-y-2.5 text-[14px] text-[#EFE5D7]/80 font-medium">
              <li>
                <a
                  className="flex items-center gap-2 hover:text-white transition-colors"
                  href={`https://wa.me/91${WORKSHOP_DETAILS.phoneRaw}?text=${encodeURIComponent(WORKSHOP_DETAILS.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f7bd59]"></span>
                  WhatsApp: {WORKSHOP_DETAILS.phoneRaw}
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2 hover:text-white transition-colors"
                  href={`tel:${WORKSHOP_DETAILS.phoneRaw}`}
                >
                  <span className="material-symbols-outlined text-[16px]">call</span>
                  Call: {WORKSHOP_DETAILS.phoneRaw}
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Book a Sleep Consultation
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('visit-our-unit')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Visit the Unit in Chinniyampalayam
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Workshop Banner */}
        <div className="w-full rounded-lg overflow-hidden border border-[#DFD8CC]/20 bg-[#142C47]/50 py-3.5 px-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-[#EFE5D7]/90 text-[13px]">
            <span className="material-symbols-outlined text-[#f7bd59]">map</span>
            <span>Workshop & Experience Facility: Chinniyampalayam, Coimbatore (NH 544 Airport Bypass)</span>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('visit-our-unit')}
            className="text-[#f7bd59] hover:text-white text-[13px] font-semibold shrink-0 transition-colors cursor-pointer"
          >
            View Map & Timings →
          </button>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="border-t border-[#DFD8CC]/20 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-[#EFE5D7]/70">
          <div className="flex items-center gap-2">
            <div className="flex text-[#f7bd59]">
              <span className="material-symbols-outlined text-[16px]">star</span>
              <span className="material-symbols-outlined text-[16px]">star</span>
              <span className="material-symbols-outlined text-[16px]">star</span>
              <span className="material-symbols-outlined text-[16px]">star</span>
              <span className="material-symbols-outlined text-[16px]">star_half</span>
            </div>
            <span>{WORKSHOP_DETAILS.googleRating} stars from {WORKSHOP_DETAILS.reviewsCount} Google reviews</span>
            <span className="text-[#EFE5D7]/40">·</span>
            <a
              className="text-[#f7bd59] hover:underline"
              href="https://google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Review us on Google
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <span>GSTIN: {WORKSHOP_DETAILS.gstin}</span>
            <span>© 2025 Deep Nap Mattress. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
