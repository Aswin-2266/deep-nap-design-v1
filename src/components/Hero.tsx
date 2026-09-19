import React, { useState } from 'react';
import { ScreenView } from '../types';
import { IMAGES } from '../data/mattresses';

interface HeroProps {
  onOpenQuote: (defaultMattress?: string) => void;
  onNavigate: (screen: ScreenView) => void;
  onSelectFirmness: (score: number) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onNavigate, onSelectFirmness }) => {
  const [firmness, setFirmness] = useState<number>(7);

  const getFirmnessDesc = (val: number) => {
    if (val <= 3) return 'plush soft';
    if (val <= 5) return 'gentle contour';
    if (val <= 7) return 'medium firm';
    if (val <= 8) return 'firm support';
    return 'ortho extra firm';
  };

  const handleSliderChange = (newVal: number) => {
    setFirmness(newVal);
    onSelectFirmness(newVal);
  };

  return (
    <section className="w-full bg-[#EFE5D7] py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column (approx 55% / 7 cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-4 md:space-y-6">
          <span className="text-[12px] font-semibold text-[#DCA544] tracking-widest uppercase">
            MADE TO ORDER IN COIMBATORE
          </span>

          <h1 className="font-headline text-[34px] sm:text-[42px] lg:text-[52px] font-bold text-[#142C47] tracking-tight leading-[1.12]">
            Firmness you can<br />actually measure.
          </h1>

          <p className="text-[17px] leading-relaxed text-[#5E6B7A] max-w-xl">
            Every mattress built to order in our own unit, rated on a 10-point firmness scale, made in any size.
          </p>

          {/* Live Firmness Scale interactive component */}
          <div className="pt-2 pb-2 max-w-lg">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-[13px] font-medium text-[#5E6B7A]">Soft (1)</span>
              <span
                id="hero-scale-badge"
                className="text-[14px] font-semibold text-[#142C47] px-3 py-1 rounded bg-white/70 shadow-xs border border-[#DFD8CC]/60"
              >
                {firmness} · {getFirmnessDesc(firmness)}
              </span>
              <span className="text-[13px] font-medium text-[#5E6B7A]">Firm (10)</span>
            </div>

            <div className="relative w-full py-2 flex items-center">
              <input
                id="firmnessRange"
                type="range"
                min="1"
                max="10"
                step="1"
                value={firmness}
                onChange={(e) => handleSliderChange(parseInt(e.target.value, 10))}
                className="w-full h-2.5 bg-[#DFD8CC] rounded-full appearance-none cursor-pointer accent-[#142C47] focus:outline-none"
              />
            </div>

            <div className="flex justify-between text-[11px] text-[#5E6B7A]/80 px-1 pt-1 font-medium">
              <span className={firmness <= 3 ? 'text-[#142C47] font-semibold' : ''}>
                Contoured sinking
              </span>
              <span className={firmness >= 4 && firmness <= 7 ? 'text-[#142C47] font-semibold' : ''}>
                Balanced posture
              </span>
              <span className={firmness >= 8 ? 'text-[#142C47] font-semibold' : ''}>
                Orthopaedic spine
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <button
              type="button"
              onClick={() => onOpenQuote('Natural Latex & Pocket Spring')}
              className="inline-flex items-center justify-center h-12 px-7 rounded-lg bg-[#142C47] text-white text-[15px] font-semibold hover:bg-[#0E1F33] transition-all shadow-sm cursor-pointer"
            >
              Get a quote
            </button>
            <button
              type="button"
              onClick={() => onNavigate('visit-our-unit')}
              className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-transparent text-[#142C47] text-[15px] font-semibold border-[1.5px] border-[#142C47] hover:bg-[#142C47]/5 transition-all cursor-pointer"
            >
              Book a store visit
            </button>
          </div>

          <p className="text-[13px] text-[#5E6B7A] pt-1">
            No online payment. Tell us the size, we quote, then we build it.
          </p>
        </div>

        {/* Right Column: Featured Showcase Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-full max-w-[460px] bg-white rounded-xl shadow-md border border-[#DFD8CC] p-6 flex flex-col space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="font-headline text-[19px] text-[#142C47] font-bold">
                  Natural Latex & Pocket Spring
                </h2>
                <p className="text-[12px] text-[#5E6B7A] mt-0.5">
                  Pin-core natural latex with individually encased pocket springs
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F3E3C2]/70 text-[#211400] text-[11px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DCA544]"></span>
                Best seller
              </span>
            </div>

            {/* Product Image */}
            <div className="w-full h-56 rounded-lg overflow-hidden bg-[#f1ede6] relative group">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt="Natural Latex & Pocket Spring mattress resting on a solid teak platform bed"
                src={IMAGES.heroProduct}
              />
            </div>

            {/* 4-Up Spec Row */}
            <div className="grid grid-cols-4 gap-2 pt-1 text-center border-b border-[#DFD8CC] pb-4">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#5E6B7A]">Firmness</p>
                <p className="text-[14px] font-bold text-[#142C47] mt-0.5">7 / 10</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#5E6B7A]">Thickness</p>
                <p className="text-[14px] font-bold text-[#142C47] mt-0.5">4–12 in</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#5E6B7A]">Warranty</p>
                <p className="text-[14px] font-bold text-[#142C47] mt-0.5">20 years</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#5E6B7A]">Sizes</p>
                <p className="text-[14px] font-bold text-[#142C47] mt-0.5">18 + custom</p>
              </div>
            </div>

            {/* Bottom Enquire & Compare */}
            <div className="flex items-center justify-between pt-1">
              <button
                type="button"
                onClick={() => onOpenQuote('Natural Latex & Pocket Spring')}
                className="font-headline text-[17px] text-[#142C47] font-bold hover:underline cursor-pointer"
              >
                Enquire for price
              </button>
              <button
                type="button"
                onClick={() => onNavigate('mattress-collection')}
                className="text-[14px] text-[#142C47] hover:text-[#0E1F33] font-semibold underline underline-offset-4 decoration-[#DFD8CC] hover:decoration-[#142C47] cursor-pointer"
              >
                Compare
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
