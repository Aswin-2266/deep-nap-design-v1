import React, { useState } from 'react';
import { MATTRESS_MODELS } from '../../data/mattresses';
import { MattressCategory, MattressModel } from '../../types';

interface MattressCollectionScreenProps {
  onOpenQuote: (mattressName?: string) => void;
  onOpenQuiz: () => void;
  defaultFilter?: string;
}

export const MattressCollectionScreen: React.FC<MattressCollectionScreenProps> = ({
  onOpenQuote,
  onOpenQuiz,
  defaultFilter = 'all'
}) => {
  const [category, setCategory] = useState<MattressCategory>((defaultFilter as MattressCategory) || 'all');
  const [firmnessFilter, setFirmnessFilter] = useState<'all' | 'soft' | 'medium' | 'firm'>('all');
  const [selectedDetail, setSelectedDetail] = useState<MattressModel | null>(null);

  const categories: { label: string; value: MattressCategory }[] = [
    { label: 'All types (13)', value: 'all' },
    { label: 'Natural Latex', value: 'latex' },
    { label: 'Pocket Spring', value: 'pocket-spring' },
    { label: 'Orthopaedic', value: 'orthopaedic' },
    { label: 'Memory Foam', value: 'memory-foam' },
    { label: 'Rubberised Coir', value: 'coir' },
  ];

  const filtered = MATTRESS_MODELS.filter((item) => {
    if (category !== 'all' && item.category !== category) return false;
    if (firmnessFilter === 'soft' && item.firmnessScore > 4) return false;
    if (firmnessFilter === 'medium' && (item.firmnessScore < 5 || item.firmnessScore > 7)) return false;
    if (firmnessFilter === 'firm' && item.firmnessScore < 8) return false;
    return true;
  });

  return (
    <div className="w-full bg-[#fdf9f2] min-h-screen py-10 md:py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1280px] mx-auto space-y-10">
        {/* Header Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DFD8CC] pb-8">
          <div>
            <span className="text-xs font-semibold text-[#DCA544] tracking-widest uppercase">
              Artisanal Workshop Catalog
            </span>
            <h1 className="font-headline text-[34px] md:text-[44px] font-bold text-[#142C47] tracking-tight mt-1">
              Mattress Collection
            </h1>
            <p className="text-[16px] text-[#5E6B7A] mt-2 max-w-2xl">
              13 calibrated formulations built to order in Coimbatore. Zero synthetic fillers, certified organic latex, and individually encased zero-motion coils.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenQuiz}
            className="inline-flex items-center gap-2 h-12 px-6 rounded-lg bg-[#142C47] text-white text-sm font-semibold hover:bg-[#0E1F33] transition-all shrink-0 cursor-pointer shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">quiz</span>
            <span>Sleep Quiz: Find Your Model</span>
          </button>
        </div>

        {/* Filter controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-[#DFD8CC]">
          {/* Material categories */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs font-semibold text-[#5E6B7A] uppercase mr-1">Material:</span>
            {categories.map((c) => (
              <button
                key={c.value}
                type="button"
                onClick={() => setCategory(c.value)}
                className={`h-8 px-3.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  category === c.value
                    ? 'bg-[#142C47] text-[#EFE5D7]'
                    : 'bg-[#f7f3ec] text-[#43474d] hover:bg-[#EFE5D7]'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Firmness tier filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#5E6B7A] uppercase">Firmness:</span>
            <select
              value={firmnessFilter}
              onChange={(e) => setFirmnessFilter(e.target.value as any)}
              className="h-8 px-3 rounded-lg border border-[#DFD8CC] bg-white text-xs font-semibold text-[#142C47]"
            >
              <option value="all">All Firmness Levels</option>
              <option value="soft">Soft (Scale 1–4)</option>
              <option value="medium">Medium Firm (Scale 5–7)</option>
              <option value="firm">Firm / Ortho (Scale 8–10)</option>
            </select>
          </div>
        </div>

        {/* Grid of mattresses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((mattress) => (
            <div
              key={mattress.id}
              className="bg-white rounded-xl border border-[#DFD8CC] overflow-hidden flex flex-col justify-between hover:shadow-md transition-all group"
            >
              <div>
                <div className="w-full h-56 bg-[#f1ede6] overflow-hidden relative">
                  <img
                    src={mattress.imageUrl}
                    alt={mattress.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded text-xs font-bold text-[#142C47] border border-[#DFD8CC]">
                    Firmness {mattress.firmnessScore}/10 · {mattress.firmnessLabel}
                  </div>
                  {mattress.badge && (
                    <span className="absolute top-3 right-3 bg-[#142C47] text-[#EFE5D7] text-[11px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {mattress.badge}
                    </span>
                  )}
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-headline text-[20px] font-bold text-[#142C47]">
                    {mattress.name}
                  </h3>
                  <p className="text-[13px] text-[#5E6B7A] leading-relaxed">
                    {mattress.subtitle}
                  </p>

                  <div className="pt-2 border-t border-[#DFD8CC]/60 space-y-1.5 text-xs text-[#43474d]">
                    <p>
                      <strong className="text-[#142C47]">Internal Core:</strong> {mattress.internalCore}
                    </p>
                    <p>
                      <strong className="text-[#142C47]">Best For:</strong> {mattress.suitedFor}
                    </p>
                    <p>
                      <strong className="text-[#142C47]">Thickness:</strong> {mattress.thicknessOptions.join(', ')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-3">
                <div className="flex items-center justify-between text-xs text-[#5E6B7A] pt-3 border-t border-[#DFD8CC]">
                  <span>Warranty: <strong className="text-[#142C47]">{mattress.warrantyYears} Years</strong></span>
                  <button
                    type="button"
                    onClick={() => setSelectedDetail(mattress)}
                    className="text-[#142C47] font-semibold underline"
                  >
                    View Specs & Layers
                  </button>
                </div>

                <div className="flex gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => onOpenQuote(mattress.name)}
                    className="flex-1 h-11 bg-[#142C47] text-white font-semibold text-xs rounded-lg hover:bg-[#0E1F33] transition-colors"
                  >
                    Get Quote for Any Size
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for detailed specifications */}
        {selectedDetail && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="w-full max-w-xl bg-white rounded-2xl border border-[#DFD8CC] shadow-2xl p-6 space-y-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start border-b border-[#DFD8CC] pb-3">
                <div>
                  <span className="text-xs font-bold text-[#DCA544] uppercase">
                    Full Workshop Specification
                  </span>
                  <h3 className="font-headline text-[22px] font-bold text-[#142C47]">
                    {selectedDetail.name}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedDetail(null)}
                  className="text-lg font-bold text-[#5E6B7A] hover:text-[#142C47]"
                >
                  ✕
                </button>
              </div>

              <img
                src={selectedDetail.imageUrl}
                alt={selectedDetail.name}
                className="w-full h-52 object-cover rounded-lg border border-[#DFD8CC]"
              />

              <p className="text-sm text-[#43474d] leading-relaxed">
                {selectedDetail.description}
              </p>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase text-[#142C47]">Key Construction Features:</h4>
                <ul className="space-y-1.5 text-xs text-[#5E6B7A]">
                  {selectedDetail.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#DCA544] font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-[#DFD8CC] flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const name = selectedDetail.name;
                    setSelectedDetail(null);
                    onOpenQuote(name);
                  }}
                  className="flex-1 h-11 bg-[#142C47] text-white font-semibold text-xs rounded-lg hover:bg-[#0E1F33]"
                >
                  Request Quotation for {selectedDetail.name}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedDetail(null)}
                  className="px-4 h-11 border border-[#DFD8CC] text-xs font-semibold rounded-lg text-[#5E6B7A]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
