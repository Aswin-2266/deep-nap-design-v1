import React, { useState } from 'react';
import { MattressCategory, ScreenView } from '../types';
import { MATTRESS_MODELS } from '../data/mattresses';

interface TheRangeProps {
  onOpenQuote: (mattressName?: string) => void;
  onNavigate: (screen: ScreenView) => void;
  activeFilter?: string;
}

export const TheRange: React.FC<TheRangeProps> = ({ onOpenQuote, onNavigate, activeFilter = 'all' }) => {
  const [selectedCategory, setSelectedCategory] = useState<MattressCategory>(
    (activeFilter as MattressCategory) || 'all'
  );

  const categories: { label: string; value: MattressCategory }[] = [
    { label: 'All types', value: 'all' },
    { label: 'Latex', value: 'latex' },
    { label: 'Pocket spring', value: 'pocket-spring' },
    { label: 'Orthopaedic', value: 'orthopaedic' },
    { label: 'Memory foam', value: 'memory-foam' },
    { label: 'Coir', value: 'coir' },
  ];

  const filteredMattresses = selectedCategory === 'all'
    ? MATTRESS_MODELS
    : MATTRESS_MODELS.filter((m) => m.category === selectedCategory);

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1280px] mx-auto flex flex-col space-y-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="font-headline text-[32px] md:text-[40px] font-bold text-[#142C47] tracking-tight">
              The range
            </h2>
            <p className="text-[17px] text-[#5E6B7A] mt-1">
              13 mattress types, 18 standard sizes, six thicknesses.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('mattress-collection')}
            className="text-[14px] font-semibold text-[#142C47] hover:underline inline-flex items-center gap-1 cursor-pointer"
          >
            Explore all 13 specifications →
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2.5 items-center">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => setSelectedCategory(cat.value)}
                className={`h-8 px-4 rounded-full text-[13px] font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#142C47] text-[#EFE5D7] shadow-xs'
                    : 'bg-white border border-[#DFD8CC] text-[#43474d] hover:text-[#142C47] hover:border-[#142C47]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid (3 cards per row, no price, no add-to-cart, pure bespoke enquire) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredMattresses.slice(0, 6).map((mattress) => (
            <div
              key={mattress.id}
              className="bg-white rounded-xl border border-[#DFD8CC] overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div>
                <div className="w-full h-56 bg-[#f1ede6] overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={mattress.name}
                    src={mattress.imageUrl}
                  />
                  {mattress.badge && (
                    <span className="absolute top-3 right-3 bg-[#142C47] text-[#EFE5D7] text-[11px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {mattress.badge}
                    </span>
                  )}
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-headline text-[19px] text-[#142C47] font-bold">
                    {mattress.name}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-[#5E6B7A]">
                    {mattress.subtitle}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-4 border-t border-[#DFD8CC] flex items-center justify-between">
                <div className="space-x-3 text-[12px] text-[#5E6B7A] font-medium">
                  <span>
                    Firmness <strong className="text-[#142C47]">{mattress.firmnessScore}/10</strong>
                  </span>
                  <span>·</span>
                  <span>
                    Warranty <strong className="text-[#142C47]">{mattress.warrantyYears} yrs</strong>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenQuote(mattress.name)}
                  className="text-[14px] text-[#142C47] hover:text-[#0E1F33] font-semibold underline underline-offset-4 decoration-[#DFD8CC] hover:decoration-[#142C47] cursor-pointer"
                >
                  Enquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
