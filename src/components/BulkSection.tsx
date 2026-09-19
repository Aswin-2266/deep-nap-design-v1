import React from 'react';
import { ScreenView } from '../types';

interface BulkSectionProps {
  onNavigate: (screen: ScreenView) => void;
  onOpenBulkQuote: () => void;
}

export const BulkSection: React.FC<BulkSectionProps> = ({ onNavigate, onOpenBulkQuote }) => {
  return (
    <section className="w-full bg-[#142C47] text-[#EFE5D7] py-16 md:py-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="space-y-4 max-w-2xl">
          <h2 className="font-headline text-[32px] md:text-[40px] font-bold text-[#EFE5D7] tracking-tight leading-tight">
            Supplying hotels, hostels, hospitals and builders
          </h2>
          <p className="text-[17px] text-[#EFE5D7]/80">
            Bulk pricing, consistent specification, delivery anywhere in Tamil Nadu.
          </p>

          {/* Sub-badges */}
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#EFE5D7]/90 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DCA544]"></span>
              10+ units pricing
            </span>
            <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#EFE5D7]/90 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DCA544]"></span>
              GST invoice
            </span>
            <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#EFE5D7]/90 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DCA544]"></span>
              Direct factory dispatch
            </span>
          </div>
        </div>

        <div className="shrink-0 flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={onOpenBulkQuote}
            className="inline-flex items-center justify-center h-12 px-7 rounded-lg border-[1.5px] border-[#EFE5D7] text-[#EFE5D7] text-[15px] font-semibold hover:bg-white hover:text-[#142C47] transition-all cursor-pointer shadow-sm"
          >
            Request bulk pricing
          </button>
          <button
            type="button"
            onClick={() => onNavigate('bulk-institutional-orders')}
            className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-white/10 text-white text-[15px] font-medium hover:bg-white/20 transition-all cursor-pointer"
          >
            View B2B Specs
          </button>
        </div>
      </div>
    </section>
  );
};
