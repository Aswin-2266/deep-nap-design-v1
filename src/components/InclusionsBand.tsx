import React from 'react';

export const InclusionsBand: React.FC = () => {
  return (
    <section className="w-full bg-[#F3E3C2] py-4 px-4 md:px-8 lg:px-12 border-y border-[#DFD8CC] min-h-[64px] flex items-center">
      <div className="max-w-[1280px] mx-auto w-full flex flex-col sm:flex-row justify-around items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#DCA544] shrink-0"></span>
          <span className="text-[14px] text-[#142C47] font-semibold">
            Free pillows with every mattress
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#DCA544] shrink-0"></span>
          <span className="text-[14px] text-[#142C47] font-semibold">
            No-cost EMI available in store
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#DCA544] shrink-0"></span>
          <span className="text-[14px] text-[#142C47] font-semibold">
            Bulk discounts on 10+ units
          </span>
        </div>
      </div>
    </section>
  );
};
