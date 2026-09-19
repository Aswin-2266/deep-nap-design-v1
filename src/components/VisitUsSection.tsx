import React from 'react';
import { ScreenView } from '../types';
import { IMAGES, WORKSHOP_DETAILS } from '../data/mattresses';

interface VisitUsSectionProps {
  onNavigate: (screen: ScreenView) => void;
  onBookVisit: () => void;
}

export const VisitUsSection: React.FC<VisitUsSectionProps> = ({ onNavigate, onBookVisit }) => {
  return (
    <section className="w-full bg-[#EFE5D7] py-16 md:py-24 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left info (6 cols) */}
        <div className="lg:col-span-6 flex flex-col space-y-6">
          <div>
            <span className="text-[12px] font-semibold text-[#DCA544] uppercase tracking-wider">
              Experience Center & Workshop
            </span>
            <h2 className="font-headline text-[32px] md:text-[40px] font-bold text-[#142C47] tracking-tight mt-1">
              Visit us
            </h2>
          </div>

          <div className="space-y-4 text-[#1C1C18]">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#DCA544] text-[22px] shrink-0 mt-0.5">
                location_on
              </span>
              <div>
                <p className="text-[15px] font-bold text-[#142C47]">
                  Deep Nap Manufacturing & Experience Unit
                </p>
                <p className="text-[14px] text-[#5E6B7A] mt-0.5 leading-relaxed">
                  {WORKSHOP_DETAILS.address}
                </p>
                <p className="text-[12px] text-[#DCA544] font-semibold mt-1">
                  {WORKSHOP_DETAILS.landmark}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#DCA544] text-[22px] shrink-0">
                schedule
              </span>
              <div>
                <p className="text-[15px] text-[#142C47] font-semibold">
                  {WORKSHOP_DETAILS.hours}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#DCA544] text-[22px] shrink-0">
                phone
              </span>
              <div>
                <a
                  className="font-headline text-[19px] font-bold text-[#142C47] hover:underline"
                  href={`tel:${WORKSHOP_DETAILS.phoneRaw}`}
                >
                  {WORKSHOP_DETAILS.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-[#142C47] text-white text-[14px] font-semibold hover:bg-[#0E1F33] transition-all shadow-sm"
              href={`https://wa.me/91${WORKSHOP_DETAILS.phoneRaw}?text=${encodeURIComponent(
                'Hello Deep Nap, I would like to visit your Coimbatore unit at Chinniyampalayam'
              )}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="w-2 h-2 rounded-full bg-[#f7bd59]"></span>
              WhatsApp
            </a>

            <a
              className="inline-flex items-center gap-1.5 h-11 px-5 rounded-lg border border-[#142C47] text-[#142C47] text-[14px] font-semibold hover:bg-white transition-all"
              href="https://maps.google.com/?q=Chinniyampalayam+Coimbatore"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[18px]">near_me</span>
              Get directions
            </a>
          </div>
        </div>

        {/* Right visual & map (6 cols) */}
        <div className="lg:col-span-6 flex flex-col space-y-4">
          <div className="w-full h-72 md:h-80 rounded-xl overflow-hidden border border-[#DFD8CC] shadow-sm relative group">
            {/* Map visual */}
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url('${IMAGES.mapWorkshop}')` }}
            >
              <div className="absolute inset-0 bg-[#142C47]/10 flex items-center justify-center p-4">
                <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg border border-[#DFD8CC] shadow-md text-center max-w-xs">
                  <span className="material-symbols-outlined text-[#C84B31] text-[24px]">
                    pin_drop
                  </span>
                  <p className="text-[14px] font-bold text-[#142C47] mt-1">
                    Chinniyampalayam Experience Unit
                  </p>
                  <p className="text-[11px] text-[#5E6B7A] mt-0.5">
                    Adjacent to Coimbatore Airport Bypass (NH 544)
                  </p>
                  <span className="inline-block mt-2 text-[11px] text-[#142C47] bg-[#EFE5D7] px-2 py-0.5 rounded font-semibold">
                    Free Parking Available
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => onNavigate('visit-our-unit')}
              className="text-[14px] font-semibold text-[#142C47] hover:underline self-center"
            >
              Workshop details & slots →
            </button>
            <button
              type="button"
              onClick={onBookVisit}
              className="inline-flex items-center justify-center h-12 px-7 rounded-lg bg-[#142C47] text-white text-[15px] font-semibold hover:bg-[#0E1F33] transition-all shadow-sm w-full sm:w-auto cursor-pointer"
            >
              Book a store visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
