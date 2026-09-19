import React from 'react';
import { IMAGES } from '../data/mattresses';

interface SleepConsultationProps {
  onOpenConsultation: () => void;
}

export const SleepConsultation: React.FC<SleepConsultationProps> = ({ onOpenConsultation }) => {
  return (
    <section className="w-full bg-[#EFE5D7] py-16 md:py-24 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left 45% (5 cols) */}
        <div className="lg:col-span-5">
          <div className="w-full h-80 md:h-[420px] rounded-xl overflow-hidden shadow-sm border border-[#DFD8CC] relative group">
            <img
              alt="Real bedroom in Coimbatore with open louvered shutters and warm sunlight"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={IMAGES.builtAroundSleep}
            />
          </div>
        </div>

        {/* Right 55% (7 cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-5 lg:pl-6">
          <h2 className="font-headline text-[32px] md:text-[40px] font-bold text-[#142C47] tracking-tight leading-tight">
            Built around how you actually sleep.
          </h2>

          <p className="text-[18px] md:text-[19px] leading-[1.6] text-[#43474d] max-w-xl">
            Book a 15-minute video call. We ask about your bed, your back and how you sleep, then specify the mattress around it.
          </p>

          <p className="text-[16px] md:text-[17px] leading-relaxed text-[#5E6B7A] max-w-xl">
            Or book a home visit: an advisor can bring physical foam, latex and fabric samples to your house anywhere in Coimbatore.
          </p>

          <div className="pt-2">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center h-12 px-7 rounded-lg bg-[#142C47] text-white text-[15px] font-semibold hover:bg-[#0E1F33] transition-all shadow-sm cursor-pointer"
            >
              Book a consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
