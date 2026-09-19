import React from 'react';

export const TrustStrip: React.FC = () => {
  const items = [
    { text: 'ISO certified materials' },
    { text: 'Warranty up to 20 years' },
    { text: 'Made in our own unit' },
    { text: '2-4 day delivery in TN' },
  ];

  return (
    <section className="w-full bg-[#EFE5D7] border-y border-[#DFD8CC] py-4 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#DCA544] text-[20px] shrink-0">
              check_circle
            </span>
            <span className="text-[14px] text-[#142C47] font-semibold">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
