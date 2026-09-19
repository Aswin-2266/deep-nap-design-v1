import React, { useState } from 'react';
import { WORKSHOP_DETAILS } from '../../data/mattresses';

interface BulkOrdersScreenProps {
  onOpenQuote: (defaultMattress?: string) => void;
}

export const BulkOrdersScreen: React.FC<BulkOrdersScreenProps> = ({ onOpenQuote }) => {
  const [unitsNeeded, setUnitsNeeded] = useState<number>(20);
  const [projectType, setProjectType] = useState<string>('Hotel / Resort');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [orgName, setOrgName] = useState<string>('');
  const [contactName, setContactName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const handleBulkSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#fdf9f2] min-h-screen py-10 md:py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1280px] mx-auto space-y-12">
        {/* Screen Header */}
        <div className="border-b border-[#DFD8CC] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold text-[#DCA544] tracking-widest uppercase">
              B2B & Commercial Supply
            </span>
            <h1 className="font-headline text-[34px] md:text-[44px] font-bold text-[#142C47] tracking-tight mt-1">
              Bulk & Institutional Orders
            </h1>
            <p className="text-[16px] text-[#5E6B7A] mt-2 max-w-2xl">
              Consistent density, flame-retardant compliance, and factory-direct volume pricing for hospitality, hostels, healthcare, and residential developments across South India.
            </p>
          </div>
          <a
            href={`https://wa.me/91${WORKSHOP_DETAILS.phoneRaw}?text=${encodeURIComponent(
              'Hello Deep Nap, I would like to enquire about bulk/institutional supply pricing.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-lg bg-[#142C47] text-white text-sm font-semibold hover:bg-[#0E1F33] transition-all shrink-0 cursor-pointer shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#f7bd59]"></span>
            <span>WhatsApp B2B Desk</span>
          </a>
        </div>

        {/* 3 Pillars / Verticals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-[#DFD8CC] space-y-3">
            <span className="material-symbols-outlined text-[#142C47] text-[32px]">
              hotel
            </span>
            <h3 className="font-headline text-[18px] font-bold text-[#142C47]">
              Hotels & Homestays
            </h3>
            <p className="text-xs text-[#5E6B7A] leading-relaxed">
              Pocket spring zero-motion mattresses for top guest review scores. Dual-sided comfort toppers and anti-sag perimeter coils.
            </p>
            <div className="pt-2 text-xs font-semibold text-[#142C47]">
              ● Custom sizes for boutique wooden cot frames
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#DFD8CC] space-y-3">
            <span className="material-symbols-outlined text-[#142C47] text-[32px]">
              apartment
            </span>
            <h3 className="font-headline text-[18px] font-bold text-[#142C47]">
              Colleges & Hostels
            </h3>
            <p className="text-xs text-[#5E6B7A] leading-relaxed">
              Heavy-duty high-density rebonded foam and rubberised coir cores engineered to endure 5+ years of intense student usage without sagging.
            </p>
            <div className="pt-2 text-xs font-semibold text-[#142C47]">
              ● Standard 72×36 / 75×36 single bunker sizes
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#DFD8CC] space-y-3">
            <span className="material-symbols-outlined text-[#142C47] text-[32px]">
              local_hospital
            </span>
            <h3 className="font-headline text-[18px] font-bold text-[#142C47]">
              Hospitals & Eldercare
            </h3>
            <p className="text-xs text-[#5E6B7A] leading-relaxed">
              Medical grade fluid-resistant PU wipe-clean covers, antimicrobial quilting, and articulated notch folding for motorized hospital beds.
            </p>
            <div className="pt-2 text-xs font-semibold text-[#142C47]">
              ● Ortho medical firmness certified
            </div>
          </div>
        </div>

        {/* Bulk Enquiry Form Section */}
        <div className="bg-[#EFE5D7] p-8 md:p-10 rounded-2xl border border-[#DFD8CC] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold text-[#DCA544] uppercase tracking-wider">
              Factory Direct Sourcing
            </span>
            <h3 className="font-headline text-[28px] font-bold text-[#142C47] leading-tight">
              Request an Institutional RFP / Sample Kit
            </h3>
            <p className="text-sm text-[#5E6B7A] leading-relaxed">
              We provide full physical material sample kits (cutaway latex, pocket coils, coir density swatches, fabric swatches) delivered to your project office.
            </p>
            <div className="space-y-2 pt-2 text-xs text-[#142C47] font-semibold">
              <p>✓ 100% Tax Compliant GST Invoices</p>
              <p>✓ Direct Factory Trucking across Tamil Nadu, Kerala & Karnataka</p>
              <p>✓ Staggered Phase-wise Site Delivery Available</p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-xl border border-[#DFD8CC] shadow-xs">
            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <span className="material-symbols-outlined text-[#DCA544] text-[40px]">
                  verified
                </span>
                <h4 className="font-headline text-[20px] font-bold text-[#142C47]">
                  B2B Enquiry Received
                </h4>
                <p className="text-xs text-[#5E6B7A] max-w-md mx-auto">
                  Our Institutional Sales Lead will review your requirement for <strong>{unitsNeeded} units</strong> for <strong>{orgName}</strong> and send an official factory price schedule within 4 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs text-[#142C47] font-bold underline"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleBulkSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#5E6B7A] mb-1">
                      Organization / Business Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Coimbatore Grand Inn"
                      value={orgName}
                      onChange={(e) => setOrgName(e.target.value)}
                      className="w-full h-11 px-3 rounded-lg border border-[#DFD8CC] text-xs font-semibold text-[#142C47]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#5E6B7A] mb-1">
                      Project Type
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full h-11 px-3 rounded-lg border border-[#DFD8CC] text-xs font-semibold text-[#142C47] bg-white"
                    >
                      <option value="Hotel / Resort">Hotel / Resort / Serviced Villa</option>
                      <option value="Student Hostel">Hostel / Educational Institution</option>
                      <option value="Hospital">Hospital / Healthcare Facility</option>
                      <option value="Builder / Architecture">Builder / Interior Designer Project</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#5E6B7A] mb-1">
                      Estimated Units
                    </label>
                    <input
                      type="number"
                      min="10"
                      max="1000"
                      value={unitsNeeded}
                      onChange={(e) => setUnitsNeeded(Number(e.target.value))}
                      className="w-full h-11 px-3 rounded-lg border border-[#DFD8CC] text-xs font-bold text-[#142C47]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#5E6B7A] mb-1">
                      Contact Person
                    </label>
                    <input
                      type="text"
                      placeholder="Purchase Manager"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full h-11 px-3 rounded-lg border border-[#DFD8CC] text-xs text-[#142C47]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#5E6B7A] mb-1">
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="98420 XXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full h-11 px-3 rounded-lg border border-[#DFD8CC] text-xs text-[#142C47]"
                      required
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full h-12 bg-[#142C47] text-white font-bold text-sm rounded-lg hover:bg-[#0E1F33] transition-colors cursor-pointer"
                  >
                    Request Institutional Rate Sheet & Sample
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
