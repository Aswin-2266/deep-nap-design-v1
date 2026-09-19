import React from 'react';
import { DIWAN_COTS, WORKSHOP_DETAILS } from '../../data/mattresses';

interface DiwanCotsScreenProps {
  onOpenQuote: (defaultNote?: string) => void;
}

export const DiwanCotsScreen: React.FC<DiwanCotsScreenProps> = ({ onOpenQuote }) => {
  return (
    <div className="w-full bg-[#fdf9f2] min-h-screen py-10 md:py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1280px] mx-auto space-y-12">
        {/* Screen Header */}
        <div className="border-b border-[#DFD8CC] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold text-[#DCA544] tracking-widest uppercase">
              Bespoke Carpentry & Joinery
            </span>
            <h1 className="font-headline text-[34px] md:text-[44px] font-bold text-[#142C47] tracking-tight mt-1">
              Diwan Cots & Daybeds
            </h1>
            <p className="text-[16px] text-[#5E6B7A] mt-2 max-w-2xl">
              Handcrafted in solid Nilambur Teak and seasoned hardwood in our Coimbatore joinery. Built to exact custom mattress measurements.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenQuote('Custom Teakwood Diwan Cot')}
            className="inline-flex items-center gap-2 h-12 px-6 rounded-lg bg-[#142C47] text-white text-sm font-semibold hover:bg-[#0E1F33] transition-all shrink-0 cursor-pointer shadow-sm"
          >
            <span>Custom Cot Enquiry</span>
            <span>→</span>
          </button>
        </div>

        {/* Informational Callout */}
        <div className="bg-[#EFE5D7] p-6 rounded-xl border border-[#DFD8CC] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#DCA544] text-[28px] shrink-0">
              construction
            </span>
            <div>
              <h4 className="font-bold text-[#142C47] text-sm">
                Single Point Responsibility: Cot + Mattress Perfectly Mated
              </h4>
              <p className="text-xs text-[#5E6B7A]">
                Never worry about standard shop mattresses sitting loose or tight. Our carpenters and mattress makers synchronize measurements under one roof.
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-[#142C47] bg-white px-3 py-1.5 rounded-lg border border-[#DFD8CC] shrink-0">
            Seasoned Teakwood Guarantee
          </span>
        </div>

        {/* Diwan Cots Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DIWAN_COTS.map((cot) => (
            <div
              key={cot.id}
              className="bg-white rounded-xl border border-[#DFD8CC] overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div>
                <div className="w-full h-64 bg-[#f1ede6] overflow-hidden relative">
                  <img
                    src={cot.imageUrl}
                    alt={cot.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-[#142C47] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {cot.woodType}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-headline text-[22px] font-bold text-[#142C47]">
                    {cot.name}
                  </h3>
                  <p className="text-sm text-[#5E6B7A] leading-relaxed">
                    {cot.description}
                  </p>

                  <div className="pt-2 border-t border-[#DFD8CC]/60 space-y-1.5 text-xs text-[#43474d]">
                    <p>
                      <strong className="text-[#142C47]">Dimensions:</strong> {cot.dimensions}
                    </p>
                    <p>
                      <strong className="text-[#142C47]">Base Architecture:</strong> {cot.storageType}
                    </p>
                    <p>
                      <strong className="text-[#142C47]">Starting at:</strong> ₹{cot.startingPrice.toLocaleString('en-IN')} (Confirmed on quote)
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#DFD8CC] pt-4">
                <span className="text-xs text-[#5E6B7A]">
                  Built to order in Chinniyampalayam
                </span>
                <button
                  type="button"
                  onClick={() => onOpenQuote(`${cot.name} (${cot.woodType})`)}
                  className="w-full sm:w-auto h-11 px-5 bg-[#142C47] text-white text-xs font-semibold rounded-lg hover:bg-[#0E1F33] transition-colors"
                >
                  Request Cot + Mattress Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Banner */}
        <div className="bg-[#142C47] text-[#EFE5D7] p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="font-headline text-[24px] font-bold text-white">
              Have a reference photo or architect drawing?
            </h3>
            <p className="text-sm text-[#EFE5D7]/80 max-w-xl">
              Send us your bedroom carpenter plan or Pinterest reference. We can manufacture matching solid wood headboards, diwans, and custom-cushioned bases.
            </p>
          </div>
          <a
            href={`https://wa.me/91${WORKSHOP_DETAILS.phoneRaw}?text=${encodeURIComponent(
              'Hello Deep Nap, I would like to share my carpenter drawing / photos for a custom cot and mattress quote.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-lg bg-white text-[#142C47] font-semibold text-sm hover:bg-[#EFE5D7] shrink-0"
          >
            <span className="w-2 h-2 rounded-full bg-[#DCA544]"></span>
            <span>Share Drawing on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
