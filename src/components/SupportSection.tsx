import React from 'react';
import { ScreenView } from '../types';
import { IMAGES } from '../data/mattresses';

interface SupportSectionProps {
  onOpenQuiz: () => void;
  onNavigate: (screen: ScreenView) => void;
  onFilterCategory?: (category: string) => void;
}

export const SupportSection: React.FC<SupportSectionProps> = ({
  onOpenQuiz,
  onNavigate,
  onFilterCategory
}) => {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1280px] mx-auto flex flex-col space-y-12">
        {/* Heading row with Quiz action */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-headline text-[32px] md:text-[40px] font-bold text-[#142C47] tracking-tight leading-tight">
              Find the right support
            </h2>
            <p className="text-[17px] text-[#5E6B7A] mt-2 max-w-xl">
              Answer four questions about how you sleep, we shortlist from 13 types.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenQuiz}
            className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-[#142C47] text-white text-[15px] font-semibold hover:bg-[#0E1F33] transition-all shrink-0 cursor-pointer shadow-sm"
          >
            Start the quiz
          </button>
        </div>

        {/* 3 Firmness Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* 1. Soft Card */}
          <div className="bg-[#f7f3ec] rounded-xl border border-[#DFD8CC] border-t-4 border-t-[#DFD8CC] p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-headline text-[19px] text-[#142C47] font-bold">Soft</h3>
                <span className="text-[15px] font-bold text-[#DCA544]">Scale 3–4</span>
              </div>
              <div className="w-full h-36 rounded-lg overflow-hidden bg-[#f1ede6]">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  alt="Soft natural pin-core latex mattress surface layered with organic cotton plush fabric"
                  src={IMAGES.softCard}
                />
              </div>
              <div>
                <p className="text-[11px] text-[#5E6B7A] uppercase font-semibold tracking-wider">
                  Suited for
                </p>
                <p className="text-[14px] text-[#1A2230] mt-1 leading-relaxed">
                  Side sleepers, pressure relief on shoulders and hips
                </p>
              </div>
              <div>
                <p className="text-[11px] text-[#5E6B7A] uppercase font-semibold tracking-wider">
                  Internal Core
                </p>
                <p className="text-[13px] text-[#5E6B7A] mt-0.5">
                  Natural Latex, Soft Quilted Foam
                </p>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-[#DFD8CC]">
              <button
                type="button"
                onClick={() => {
                  if (onFilterCategory) onFilterCategory('latex');
                  onNavigate('mattress-collection');
                }}
                className="text-[14px] text-[#142C47] font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                View Soft Mattresses →
              </button>
            </div>
          </div>

          {/* 2. Medium Firm Card (Featured 4px Gold Top) */}
          <div className="bg-white rounded-xl border border-[#DFD8CC] border-t-4 border-t-[#DCA544] p-6 flex flex-col justify-between shadow-md relative">
            <div className="absolute -top-3 right-6 bg-[#142C47] text-white px-3 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase shadow-xs">
              Most Chosen
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-headline text-[19px] text-[#142C47] font-bold">Medium Firm</h3>
                <span className="text-[15px] font-bold text-[#DCA544]">Scale 6–7</span>
              </div>
              <div className="w-full h-36 rounded-lg overflow-hidden bg-[#f1ede6]">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  alt="Cross section of pocket spring combined with organic natural latex sheet"
                  src={IMAGES.mediumFirmCard}
                />
              </div>
              <div>
                <p className="text-[11px] text-[#5E6B7A] uppercase font-semibold tracking-wider">
                  Suited for
                </p>
                <p className="text-[14px] text-[#1A2230] mt-1 leading-relaxed">
                  Back & combination sleepers, balanced spinal posture
                </p>
              </div>
              <div>
                <p className="text-[11px] text-[#5E6B7A] uppercase font-semibold tracking-wider">
                  Internal Core
                </p>
                <p className="text-[13px] text-[#5E6B7A] mt-0.5">
                  Pocket Spring + Latex Hybrid Core
                </p>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-[#DFD8CC]">
              <button
                type="button"
                onClick={() => {
                  if (onFilterCategory) onFilterCategory('pocket-spring');
                  onNavigate('mattress-collection');
                }}
                className="text-[14px] text-[#142C47] font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                View Medium Firm Models →
              </button>
            </div>
          </div>

          {/* 3. Firm Card */}
          <div className="bg-[#f7f3ec] rounded-xl border border-[#DFD8CC] border-t-4 border-t-[#DFD8CC] p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-headline text-[19px] text-[#142C47] font-bold">Firm</h3>
                <span className="text-[15px] font-bold text-[#DCA544]">Scale 8–9</span>
              </div>
              <div className="w-full h-36 rounded-lg overflow-hidden bg-[#f1ede6]">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  alt="Rubberised coconut coir sheet bonded with high resilience orthopaedic foam base"
                  src={IMAGES.firmCard}
                />
              </div>
              <div>
                <p className="text-[11px] text-[#5E6B7A] uppercase font-semibold tracking-wider">
                  Suited for
                </p>
                <p className="text-[14px] text-[#1A2230] mt-1 leading-relaxed">
                  Stomach sleepers, firm orthopaedic spine support
                </p>
              </div>
              <div>
                <p className="text-[11px] text-[#5E6B7A] uppercase font-semibold tracking-wider">
                  Internal Core
                </p>
                <p className="text-[13px] text-[#5E6B7A] mt-0.5">
                  High-density Bonded Coir + HR Foam
                </p>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-[#DFD8CC]">
              <button
                type="button"
                onClick={() => {
                  if (onFilterCategory) onFilterCategory('coir');
                  onNavigate('mattress-collection');
                }}
                className="text-[14px] text-[#142C47] font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                View Orthopaedic Models →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
