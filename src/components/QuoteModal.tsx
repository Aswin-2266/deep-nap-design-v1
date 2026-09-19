import React, { useState, useEffect } from 'react';
import { WORKSHOP_DETAILS } from '../data/mattresses';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMattress?: string;
  initialDims?: { length: number; width: number; thickness: number; estimatedPrice?: number };
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultMattress,
  initialDims
}) => {
  const [mattress, setMattress] = useState<string>(defaultMattress || 'Natural Latex & Pocket Spring');
  const [length, setLength] = useState<number>(initialDims?.length || 78);
  const [width, setWidth] = useState<number>(initialDims?.width || 60);
  const [thickness, setThickness] = useState<number>(initialDims?.thickness || 6);
  const [quantity, setQuantity] = useState<number>(1);
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [city, setCity] = useState<string>('Coimbatore');
  const [notes, setNotes] = useState<string>('');
  const [deliveryType, setDeliveryType] = useState<'door' | 'pickup'>('door');
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (defaultMattress) setMattress(defaultMattress);
    if (initialDims) {
      setLength(initialDims.length);
      setWidth(initialDims.width);
      setThickness(initialDims.thickness);
    }
  }, [defaultMattress, initialDims]);

  if (!isOpen) return null;

  // Formula matching HTML
  const calculatedUnit = Math.max(
    6500,
    Math.round((length * width * thickness * 0.76) / 100) * 100
  );
  const totalPrice = calculatedUnit * quantity;

  const generateWhatsAppMessage = () => {
    return `Hello Deep Nap, I would like to request an official quote:
• Model: ${mattress}
• Custom Size: ${length}" L × ${width}" W × ${thickness}" Thick
• Quantity: ${quantity} unit(s)
• Indicative Estimate: ₹${totalPrice.toLocaleString('en-IN')}
• Delivery: ${deliveryType === 'door' ? 'Door delivery in ' + city : 'Factory pickup at Chinniyampalayam'}
• Name: ${name || 'Prospective Client'}
• Contact: ${phone || 'Not provided'}
${notes ? `• Special Notes: ${notes}` : ''}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-[#DFD8CC] overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-[#EFE5D7] px-6 py-4 border-b border-[#DFD8CC] flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-[#DCA544] uppercase tracking-wider">
              Consultative Quotation
            </span>
            <h3 className="font-headline text-[20px] font-bold text-[#142C47]">
              {submitted ? "Quote Request Received" : "Tell us the size. We quote."}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#142C47] hover:bg-black/10 text-lg font-bold"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 bg-[#EFE5D7] text-[#142C47] rounded-full mx-auto flex items-center justify-center">
                <span className="material-symbols-outlined text-[36px] text-[#DCA544]">
                  check_circle
                </span>
              </div>
              <div>
                <h4 className="font-headline text-[22px] font-bold text-[#142C47]">
                  Thank You, {name || 'Customer'}!
                </h4>
                <p className="text-[14px] text-[#5E6B7A] mt-1 max-w-md mx-auto">
                  Our Coimbatore master mattress maker has received your specification for <strong className="text-[#142C47]">{mattress} ({length}×{width}×{thickness} in)</strong>.
                </p>
                <p className="text-[13px] text-[#5E6B7A] mt-2">
                  Indicative: <strong className="text-[#142C47]">₹{totalPrice.toLocaleString('en-IN')}</strong> ({quantity} unit{quantity > 1 ? 's' : ''}). No online payment needed. We will call you within 2 business hours.
                </p>
              </div>

              {/* Instant WhatsApp Send */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/91${WORKSHOP_DETAILS.phoneRaw}?text=${encodeURIComponent(generateWhatsAppMessage())}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-[#142C47] text-white font-semibold text-sm hover:bg-[#0E1F33] transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-[#f7bd59]"></span>
                  <span>Send Direct via WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="h-12 px-6 rounded-lg border border-[#DFD8CC] text-[#142C47] font-semibold text-sm hover:bg-[#f7f3ec]"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              {/* Mattress Model */}
              <div>
                <label className="block text-xs font-semibold text-[#5E6B7A] uppercase mb-1">
                  Mattress Specification / Model
                </label>
                <select
                  value={mattress}
                  onChange={(e) => setMattress(e.target.value)}
                  className="w-full h-11 px-3 rounded-lg border border-[#DFD8CC] bg-white text-sm font-semibold text-[#142C47] focus:outline-none focus:border-[#142C47]"
                >
                  <option value="Natural Latex & Pocket Spring">Natural Latex & Pocket Spring (Scale 7 · Best Seller)</option>
                  <option value="Natural Latex Ortho">Natural Latex Ortho (Scale 7 · 100% Kerala Core)</option>
                  <option value="Pocket Spring Comfort">Pocket Spring Comfort (Scale 6 · Zero Motion)</option>
                  <option value="Rubberised Coir Spine-Care">Rubberised Coir Spine-Care (Scale 8 · Firm)</option>
                  <option value="Plush Cloud Soft Latex">Plush Cloud Soft Latex (Scale 3–4 · Side Sleeper)</option>
                  <option value="Ortho Bonded Medical Care">Ortho Bonded Medical Care (Scale 9 · Doctor Prescribed)</option>
                  <option value="Custom Bespoke Layering">Custom Layering (Advisor to suggest)</option>
                </select>
              </div>

              {/* Dimensions: 3 columns */}
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#5E6B7A] mb-1">
                    Length (in)
                  </label>
                  <input
                    type="number"
                    value={length}
                    min="36"
                    max="96"
                    onChange={(e) => setLength(Number(e.target.value) || 0)}
                    className="w-full h-11 px-3 rounded-lg border border-[#DFD8CC] text-sm font-bold text-[#142C47]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5E6B7A] mb-1">
                    Width (in)
                  </label>
                  <input
                    type="number"
                    value={width}
                    min="24"
                    max="90"
                    onChange={(e) => setWidth(Number(e.target.value) || 0)}
                    className="w-full h-11 px-3 rounded-lg border border-[#DFD8CC] text-sm font-bold text-[#142C47]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5E6B7A] mb-1">
                    Thickness (in)
                  </label>
                  <input
                    type="number"
                    value={thickness}
                    min="4"
                    max="14"
                    onChange={(e) => setThickness(Number(e.target.value) || 0)}
                    className="w-full h-11 px-3 rounded-lg border border-[#DFD8CC] text-sm font-bold text-[#142C47]"
                    required
                  />
                </div>
              </div>

              {/* Indicative Price banner */}
              <div className="p-3.5 rounded-xl bg-[#F3E3C2]/50 border border-[#DFD8CC] flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#5E6B7A] font-bold">
                    Indicative Estimate
                  </span>
                  <div className="text-xl font-bold text-[#142C47]">
                    ₹{totalPrice.toLocaleString('en-IN')}
                  </div>
                </div>
                <div className="text-right text-xs text-[#5E6B7A]">
                  <span className="inline-block text-[#DCA544] font-bold">● Free Pillows Included</span>
                  <p className="text-[11px]">Final price confirmed on official quote</p>
                </div>
              </div>

              {/* Customer Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#5E6B7A] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Karthik"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-11 px-3 rounded-lg border border-[#DFD8CC] text-sm text-[#142C47]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5E6B7A] mb-1">
                    Phone Number (for quote call)
                  </label>
                  <input
                    type="tel"
                    placeholder="98420 XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full h-11 px-3 rounded-lg border border-[#DFD8CC] text-sm text-[#142C47]"
                    required
                  />
                </div>
              </div>

              {/* City / Delivery */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#5E6B7A] mb-1">
                    City / Locality in Tamil Nadu
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full h-11 px-3 rounded-lg border border-[#DFD8CC] text-sm text-[#142C47]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5E6B7A] mb-1">
                    Delivery Preference
                  </label>
                  <select
                    value={deliveryType}
                    onChange={(e) => setDeliveryType(e.target.value as 'door' | 'pickup')}
                    className="w-full h-11 px-3 rounded-lg border border-[#DFD8CC] text-sm text-[#142C47] bg-white font-medium"
                  >
                    <option value="door">Door delivery (2-4 days in TN)</option>
                    <option value="pickup">Self pickup at Chinniyampalayam</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-[#5E6B7A] mb-1">
                  Carpenter Cot Notes / Special Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Cot has curved headboard corners, or carpenter made 75x68 inch size..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-[#DFD8CC] text-xs text-[#142C47]"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 h-12 bg-[#142C47] text-white font-semibold rounded-lg hover:bg-[#0E1F33] transition-colors cursor-pointer text-sm shadow-sm"
                >
                  Request Official Factory Quote
                </button>
                <a
                  href={`https://wa.me/91${WORKSHOP_DETAILS.phoneRaw}?text=${encodeURIComponent(generateWhatsAppMessage())}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 px-4 border-[1.5px] border-[#142C47] text-[#142C47] font-semibold rounded-lg hover:bg-[#142C47] hover:text-white transition-colors text-sm flex items-center justify-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-[#f7bd59]"></span>
                  <span>WhatsApp Quote</span>
                </a>
              </div>

              <p className="text-[11px] text-[#5E6B7A] text-center pt-1">
                Zero online payment required. We verify cot dimensions, then begin craftsmanship.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
