import React, { useState } from 'react';
import { WORKSHOP_DETAILS } from '../../data/mattresses';

interface CustomSizeScreenProps {
  onOpenQuoteWithDims: (dims: { length: number; width: number; thickness: number; model: string }) => void;
}

export const CustomSizeScreen: React.FC<CustomSizeScreenProps> = ({ onOpenQuoteWithDims }) => {
  const [unit, setUnit] = useState<'in' | 'cm'>('in');
  const [lengthIn, setLengthIn] = useState<number>(78);
  const [widthIn, setWidthIn] = useState<number>(60);
  const [thicknessIn, setThicknessIn] = useState<number>(6);
  const [coreType, setCoreType] = useState<string>('Natural Latex & Pocket Spring Hybrid');
  const [cornerStyle, setCornerStyle] = useState<'sharp' | 'radius' | 'notched'>('sharp');
  const [cotStyle, setCotStyle] = useState<string>('Carpenter Cot');

  // Convert for display if cm
  const displayLength = unit === 'cm' ? Math.round(lengthIn * 2.54) : lengthIn;
  const displayWidth = unit === 'cm' ? Math.round(widthIn * 2.54) : widthIn;

  // Multiplier depending on core
  let coreFactor = 0.76;
  if (coreType.includes('100% Natural Latex')) coreFactor = 0.95;
  if (coreType.includes('Ortho Coir')) coreFactor = 0.65;

  const estimatedPrice = Math.max(
    6500,
    Math.round((lengthIn * widthIn * thicknessIn * coreFactor) / 100) * 100
  );

  const handleUnitToggle = (newUnit: 'in' | 'cm') => {
    setUnit(newUnit);
  };

  const handleApplyPreset = (l: number, w: number, t: number, name: string) => {
    setLengthIn(l);
    setWidthIn(w);
    setThicknessIn(t);
    setCotStyle(name);
  };

  return (
    <div className="w-full bg-[#fdf9f2] min-h-screen py-10 md:py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1280px] mx-auto space-y-10">
        {/* Header */}
        <div className="border-b border-[#DFD8CC] pb-8">
          <span className="text-xs font-semibold text-[#DCA544] tracking-widest uppercase">
            No Extra Surcharge for Non-Standard Sizes
          </span>
          <h1 className="font-headline text-[34px] md:text-[44px] font-bold text-[#142C47] tracking-tight mt-1">
            Custom Size Builder
          </h1>
          <p className="text-[16px] text-[#5E6B7A] mt-2 max-w-2xl">
            Over 40% of beds in Tamil Nadu are built by local carpenters with unique dimensions. We cut and layer every mattress specifically for your bed frame.
          </p>
        </div>

        {/* Quick Presets */}
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs font-semibold text-[#5E6B7A] uppercase mr-2">Common Cot Presets:</span>
          {[
            { label: 'Popular Carpenter Cot (75×68 in)', l: 75, w: 68, t: 6, name: 'Carpenter Cot (75x68)' },
            { label: 'Traditional Diwan (72×36 in)', l: 72, w: 36, t: 5, name: 'Traditional Diwan (72x36)' },
            { label: 'Large King (78×72 in)', l: 78, w: 72, t: 8, name: 'Spacious King (78x72)' },
            { label: 'Standard Queen (78×60 in)', l: 78, w: 60, t: 6, name: 'Standard Queen (78x60)' },
            { label: 'Single Cot (75×36 in)', l: 75, w: 36, t: 5, name: 'Single Cot (75x36)' },
          ].map((preset, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleApplyPreset(preset.l, preset.w, preset.t, preset.name)}
              className="text-xs bg-white border border-[#DFD8CC] hover:border-[#142C47] text-[#142C47] font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              {preset.label}
            </button>
          ))}
        </div>

        {/* Builder Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl border border-[#DFD8CC] shadow-xs space-y-6">
            {/* Unit Switcher */}
            <div className="flex items-center justify-between border-b border-[#DFD8CC] pb-4">
              <span className="text-sm font-bold text-[#142C47]">Measurement Unit</span>
              <div className="flex bg-[#EFE5D7] p-1 rounded-lg">
                <button
                  type="button"
                  onClick={() => handleUnitToggle('in')}
                  className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                    unit === 'in' ? 'bg-[#142C47] text-white shadow-xs' : 'text-[#142C47]'
                  }`}
                >
                  Inches (in)
                </button>
                <button
                  type="button"
                  onClick={() => handleUnitToggle('cm')}
                  className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                    unit === 'cm' ? 'bg-[#142C47] text-white shadow-xs' : 'text-[#142C47]'
                  }`}
                >
                  Centimeters (cm)
                </button>
              </div>
            </div>

            {/* Dimension Sliders & Inputs */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-[#5E6B7A] mb-1.5">
                  <span>Length ({unit})</span>
                  <span className="text-sm text-[#142C47]">
                    {displayLength} {unit} ({lengthIn} inches)
                  </span>
                </div>
                <input
                  type="range"
                  min="36"
                  max="90"
                  value={lengthIn}
                  onChange={(e) => setLengthIn(Number(e.target.value))}
                  className="w-full h-2 bg-[#DFD8CC] rounded-lg appearance-none cursor-pointer accent-[#142C47]"
                />
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-bold text-[#5E6B7A] mb-1.5">
                  <span>Width ({unit})</span>
                  <span className="text-sm text-[#142C47]">
                    {displayWidth} {unit} ({widthIn} inches)
                  </span>
                </div>
                <input
                  type="range"
                  min="24"
                  max="84"
                  value={widthIn}
                  onChange={(e) => setWidthIn(Number(e.target.value))}
                  className="w-full h-2 bg-[#DFD8CC] rounded-lg appearance-none cursor-pointer accent-[#142C47]"
                />
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-bold text-[#5E6B7A] mb-1.5">
                  <span>Thickness (Height)</span>
                  <span className="text-sm text-[#142C47]">{thicknessIn} inches</span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {[4, 5, 6, 8, 10].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setThicknessIn(t)}
                      className={`h-10 rounded-lg text-xs font-bold border transition-colors ${
                        thicknessIn === t
                          ? 'border-[#142C47] bg-[#142C47] text-white'
                          : 'border-[#DFD8CC] bg-white text-[#142C47] hover:bg-[#f7f3ec]'
                      }`}
                    >
                      {t} in
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Core Layer Selection */}
            <div className="space-y-2 border-t border-[#DFD8CC] pt-4">
              <label className="block text-xs font-bold text-[#5E6B7A] uppercase">
                Internal Core Layering
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { name: 'Natural Latex & Pocket Spring Hybrid', feel: 'Medium Firm (7/10)' },
                  { name: '100% Kerala Natural Latex Core', feel: 'Plush & Bouncy (6/10)' },
                  { name: 'Ortho High Density Coir + HR Foam', feel: 'Firm Spine Care (8/10)' },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCoreType(item.name)}
                    className={`p-3 rounded-xl border text-left text-xs transition-all ${
                      coreType === item.name
                        ? 'border-[#142C47] bg-[#EFE5D7]/50 font-bold text-[#142C47]'
                        : 'border-[#DFD8CC] bg-white text-[#5E6B7A] hover:border-[#142C47]'
                    }`}
                  >
                    <div className="text-[#142C47]">{item.name}</div>
                    <div className="text-[11px] text-[#DCA544] mt-1">{item.feel}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Corner Notch / Radius Selection */}
            <div className="space-y-2 border-t border-[#DFD8CC] pt-4">
              <label className="block text-xs font-bold text-[#5E6B7A] uppercase">
                Corner Profile
              </label>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                {[
                  { id: 'sharp', label: 'Standard 90° Square', desc: 'Standard boxed frame' },
                  { id: 'radius', label: 'Rounded 2" Radius', desc: 'For curved upholstered beds' },
                  { id: 'notched', label: 'Post Notched Cutout', desc: 'Fits 4-poster cot legs' },
                ].map((corner) => (
                  <button
                    key={corner.id}
                    type="button"
                    onClick={() => setCornerStyle(corner.id as any)}
                    className={`p-2.5 rounded-lg border text-xs ${
                      cornerStyle === corner.id
                        ? 'border-[#142C47] bg-[#142C47] text-white font-bold'
                        : 'border-[#DFD8CC] bg-white text-[#43474d] hover:bg-[#f7f3ec]'
                    }`}
                  >
                    <div>{corner.label}</div>
                    <div className="text-[10px] opacity-75 mt-0.5">{corner.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Real-time Diagram & Estimate Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Visual Bed Diagram */}
            <div className="bg-white p-6 rounded-2xl border border-[#DFD8CC] shadow-xs text-center space-y-4">
              <span className="text-xs font-bold text-[#5E6B7A] uppercase tracking-wider">
                Scaled Proportional Top-Down Preview
              </span>

              <div className="h-64 bg-[#f7f3ec] rounded-xl border border-dashed border-[#DFD8CC] flex items-center justify-center p-4 relative overflow-hidden">
                {/* Visual Mattress Representation with Scaled aspect ratio */}
                <div
                  className="bg-[#EFE5D7] border-2 border-[#142C47] shadow-lg flex flex-col items-center justify-center p-3 text-center transition-all duration-300 relative"
                  style={{
                    width: `${Math.min(220, Math.max(100, (widthIn / 84) * 220))}px`,
                    height: `${Math.min(220, Math.max(120, (lengthIn / 90) * 220))}px`,
                    borderRadius: cornerStyle === 'radius' ? '20px' : cornerStyle === 'notched' ? '4px' : '6px'
                  }}
                >
                  <span className="font-headline text-xs font-bold text-[#142C47]">
                    {lengthIn}" × {widthIn}"
                  </span>
                  <span className="text-[10px] text-[#5E6B7A] mt-0.5">
                    {thicknessIn}" Thick
                  </span>
                  <div className="mt-2 text-[9px] bg-white/80 px-1.5 py-0.5 rounded text-[#142C47] font-semibold">
                    {cornerStyle === 'sharp' ? 'Square Corners' : cornerStyle === 'radius' ? 'Curved Corners' : 'Post Cutout'}
                  </div>
                </div>

                {/* Corner markers */}
                <span className="absolute bottom-2 right-3 text-[10px] text-[#5E6B7A]">
                  Deep Nap Coimbatore Unit
                </span>
              </div>

              <div className="text-xs text-[#5E6B7A] space-y-1">
                <p>Selected Core: <strong className="text-[#142C47]">{coreType}</strong></p>
                <p>Profile: <strong className="text-[#142C47]">{cotStyle}</strong></p>
              </div>
            </div>

            {/* Indicative Price Summary Card */}
            <div className="bg-[#142C47] text-[#EFE5D7] p-6 rounded-2xl shadow-md space-y-4">
              <div>
                <span className="text-xs font-semibold text-[#f7bd59] uppercase tracking-wider">
                  Indicative Unit Price
                </span>
                <div className="font-headline text-[36px] font-bold text-white tracking-tight">
                  ₹{estimatedPrice.toLocaleString('en-IN')}
                </div>
                <p className="text-xs text-[#EFE5D7]/75 mt-1">
                  Includes 2 Free Pillows + Direct Coimbatore Factory Dispatch + GST.
                </p>
              </div>

              <div className="pt-2 space-y-2.5">
                <button
                  type="button"
                  onClick={() => onOpenQuoteWithDims({
                    length: lengthIn,
                    width: widthIn,
                    thickness: thicknessIn,
                    model: `${coreType} (Custom ${lengthIn}×${widthIn}×${thicknessIn} in)`
                  })}
                  className="w-full h-12 bg-white text-[#142C47] font-bold text-sm rounded-lg hover:bg-[#EFE5D7] transition-colors cursor-pointer shadow-sm"
                >
                  Submit Official Quote Request
                </button>

                <a
                  href={`https://wa.me/91${WORKSHOP_DETAILS.phoneRaw}?text=${encodeURIComponent(
                    `Hello Deep Nap, I built a custom mattress size on your website: ${lengthIn}" L × ${widthIn}" W × ${thicknessIn}" Thickness, Core: ${coreType}, Corner: ${cornerStyle}. Estimated: ₹${estimatedPrice.toLocaleString('en-IN')}. Please confirm availability.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-11 flex items-center justify-center gap-2 border border-white/40 text-white font-semibold text-xs rounded-lg hover:bg-white/10 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-[#f7bd59]"></span>
                  <span>Confirm on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
