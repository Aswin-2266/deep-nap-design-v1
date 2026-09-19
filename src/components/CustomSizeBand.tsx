import React, { useState } from 'react';

interface CustomSizeBandProps {
  onOpenCustomQuote: (dims: { length: number; width: number; thickness: number; estimatedPrice: number }) => void;
}

export const CustomSizeBand: React.FC<CustomSizeBandProps> = ({ onOpenCustomQuote }) => {
  const [length, setLength] = useState<number>(78);
  const [width, setWidth] = useState<number>(60);
  const [thickness, setThickness] = useState<number>(6);

  // Exact formula matching HTML: Math.round((l * w * t * 0.76) / 100) * 100
  const calculatedPrice = Math.max(
    6500,
    Math.round((length * width * thickness * 0.76) / 100) * 100
  );

  const handleSendEnquiry = () => {
    onOpenCustomQuote({
      length,
      width,
      thickness,
      estimatedPrice: calculatedPrice
    });
  };

  return (
    <section className="w-full bg-[#F3E3C2] py-14 px-4 md:px-8 lg:px-12 border-y border-[#DFD8CC]">
      <div className="max-w-[1080px] mx-auto flex flex-col space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-[28px] md:text-[32px] text-[#142C47] font-bold">
            Tell us the size. We build it.
          </h2>
          <p className="text-[15px] text-[#43474d] mt-2">
            A quarter to half of what we make is a non-standard size. No surcharge, no waiting for stock.
          </p>
        </div>

        {/* Configurator Panel */}
        <div className="bg-white rounded-xl p-6 md:p-8 shadow-xs border border-[#DFD8CC]/80">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-center">
            {/* Input 1: Length */}
            <div>
              <label className="block text-[13px] text-[#5E6B7A] mb-1.5 font-semibold">
                Length
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="36"
                  max="96"
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value) || 0)}
                  className="w-full h-[52px] bg-white rounded-lg border border-[#DFD8CC] px-3.5 pr-8 text-[16px] text-[#142C47] font-bold focus:outline-none focus:border-[#142C47] focus:ring-1 focus:ring-[#142C47]"
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[13px] text-[#5E6B7A] font-medium pointer-events-none">
                  in
                </span>
              </div>
            </div>

            {/* Input 2: Width */}
            <div>
              <label className="block text-[13px] text-[#5E6B7A] mb-1.5 font-semibold">
                Width
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="24"
                  max="90"
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value) || 0)}
                  className="w-full h-[52px] bg-white rounded-lg border border-[#DFD8CC] px-3.5 pr-8 text-[16px] text-[#142C47] font-bold focus:outline-none focus:border-[#142C47] focus:ring-1 focus:ring-[#142C47]"
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[13px] text-[#5E6B7A] font-medium pointer-events-none">
                  in
                </span>
              </div>
            </div>

            {/* Input 3: Thickness */}
            <div>
              <label className="block text-[13px] text-[#5E6B7A] mb-1.5 font-semibold">
                Thickness
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="4"
                  max="14"
                  value={thickness}
                  onChange={(e) => setThickness(Number(e.target.value) || 0)}
                  className="w-full h-[52px] bg-white rounded-lg border border-[#DFD8CC] px-3.5 pr-8 text-[16px] text-[#142C47] font-bold focus:outline-none focus:border-[#142C47] focus:ring-1 focus:ring-[#142C47]"
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[13px] text-[#5E6B7A] font-medium pointer-events-none">
                  in
                </span>
              </div>
            </div>

            {/* Output price display */}
            <div className="sm:col-span-3 lg:col-span-1 text-center lg:text-left py-2">
              <span className="block text-[11px] text-[#5E6B7A] uppercase tracking-wider font-bold">
                Indicative
              </span>
              <div className="font-headline text-[30px] font-bold text-[#142C47] tracking-tight">
                ₹{calculatedPrice.toLocaleString('en-IN')}
              </div>
            </div>

            {/* CTA Enquiry button */}
            <div className="sm:col-span-3 lg:col-span-1 flex items-end">
              <button
                type="button"
                onClick={handleSendEnquiry}
                className="w-full h-[52px] flex items-center justify-center bg-[#142C47] text-white rounded-lg text-[15px] font-semibold hover:bg-[#0E1F33] transition-all shadow-sm cursor-pointer"
              >
                Send this enquiry
              </button>
            </div>
          </div>

          <p className="text-[13px] text-[#5E6B7A] text-center mt-5">
            Indicative. Confirmed on quote. Custom sizes are non-returnable.
          </p>
        </div>
      </div>
    </section>
  );
};
