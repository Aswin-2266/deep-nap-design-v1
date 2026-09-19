import React, { useState } from 'react';
import { WORKSHOP_DETAILS, IMAGES } from '../../data/mattresses';

export const VisitUnitScreen: React.FC = () => {
  const [selectedSlot, setSelectedSlot] = useState<string>('morning');
  const [visitDate, setVisitDate] = useState<string>(
    new Date(Date.now() + 86400000).toISOString().split('T')[0]
  );
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [booked, setBooked] = useState<boolean>(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <div className="w-full bg-[#fdf9f2] min-h-screen py-10 md:py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1280px] mx-auto space-y-12">
        {/* Header */}
        <div className="border-b border-[#DFD8CC] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold text-[#DCA544] tracking-widest uppercase">
              Factory Unit & Diagnostic Studio
            </span>
            <h1 className="font-headline text-[34px] md:text-[44px] font-bold text-[#142C47] tracking-tight mt-1">
              Visit Our Coimbatore Unit
            </h1>
            <p className="text-[16px] text-[#5E6B7A] mt-2 max-w-2xl">
              Lie down on 13 firmness formulations, touch raw pin-core natural latex blocks, inspect pocket spring coils, and talk directly to our mattress makers.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="https://maps.google.com/?q=Chinniyampalayam+Coimbatore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-lg bg-[#142C47] text-white text-sm font-semibold hover:bg-[#0E1F33] transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">directions</span>
              <span>Open in Google Maps</span>
            </a>
          </div>
        </div>

        {/* 2-Column Overview & Appointment Slot Booking */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Workshop Details & Logistics (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#DFD8CC] shadow-xs space-y-6">
              <h3 className="font-headline text-[22px] font-bold text-[#142C47]">
                Location & Facility Information
              </h3>

              <div className="space-y-4 text-sm text-[#43474d]">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#DCA544] text-[22px] shrink-0 mt-0.5">
                    storefront
                  </span>
                  <div>
                    <strong className="text-[#142C47]">Address:</strong>
                    <p className="text-[#5E6B7A] mt-0.5">
                      {WORKSHOP_DETAILS.address}
                    </p>
                    <p className="text-xs text-[#DCA544] font-semibold mt-1">
                      Landmark: {WORKSHOP_DETAILS.landmark}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#DCA544] text-[22px] shrink-0 mt-0.5">
                    schedule
                  </span>
                  <div>
                    <strong className="text-[#142C47]">Operating Hours:</strong>
                    <p className="text-[#5E6B7A] mt-0.5">{WORKSHOP_DETAILS.hours}</p>
                    <p className="text-xs text-[#5E6B7A]">Walk-ins are always welcome. Appointments guarantee a dedicated master maker.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#DCA544] text-[22px] shrink-0 mt-0.5">
                    directions_car
                  </span>
                  <div>
                    <strong className="text-[#142C47]">Parking:</strong>
                    <p className="text-[#5E6B7A] mt-0.5">Dedicated free vehicle parking on site for cars and two-wheelers.</p>
                  </div>
                </div>
              </div>

              {/* Transit Times Table */}
              <div className="pt-4 border-t border-[#DFD8CC]">
                <h4 className="text-xs font-bold uppercase text-[#5E6B7A] mb-3">
                  Estimated Travel Times
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="bg-[#f7f3ec] p-3 rounded-lg border border-[#DFD8CC]">
                    <div className="font-headline text-[18px] font-bold text-[#142C47]">4 mins</div>
                    <div className="text-[11px] text-[#5E6B7A]">Coimbatore Airport</div>
                  </div>
                  <div className="bg-[#f7f3ec] p-3 rounded-lg border border-[#DFD8CC]">
                    <div className="font-headline text-[18px] font-bold text-[#142C47]">8 mins</div>
                    <div className="text-[11px] text-[#5E6B7A]">KMCH / Hope College</div>
                  </div>
                  <div className="bg-[#f7f3ec] p-3 rounded-lg border border-[#DFD8CC]">
                    <div className="font-headline text-[18px] font-bold text-[#142C47]">20 mins</div>
                    <div className="text-[11px] text-[#5E6B7A]">Gandhipuram</div>
                  </div>
                  <div className="bg-[#f7f3ec] p-3 rounded-lg border border-[#DFD8CC]">
                    <div className="font-headline text-[18px] font-bold text-[#142C47]">25 mins</div>
                    <div className="text-[11px] text-[#5E6B7A]">Tiruppur Tollgate</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Preview Image */}
            <div className="w-full h-64 rounded-2xl overflow-hidden border border-[#DFD8CC] shadow-xs relative">
              <img
                src={IMAGES.mapWorkshop}
                alt="Map of Deep Nap Mattress Coimbatore Experience Center"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#142C47]/15 flex items-center justify-center">
                <a
                  href="https://maps.google.com/?q=Chinniyampalayam+Coimbatore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#142C47] px-4 py-2.5 rounded-lg shadow-lg font-bold text-xs flex items-center gap-2 hover:bg-[#f7f3ec]"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#C84B31]">pin_drop</span>
                  <span>Chinniyampalayam Experience Center · Click to Navigate</span>
                </a>
              </div>
            </div>
          </div>

          {/* Appointment Slot Booking Form (5 cols) */}
          <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-2xl border border-[#DFD8CC] shadow-xs space-y-6">
            <div>
              <span className="text-xs font-bold text-[#DCA544] uppercase tracking-wider">
                Prioritize Your Sleep Diagnostic
              </span>
              <h3 className="font-headline text-[22px] font-bold text-[#142C47] mt-1">
                Book a Workshop Visit
              </h3>
              <p className="text-xs text-[#5E6B7A] mt-1">
                We prepare physical foam cutouts in your preferred firmness for you to test during your visit.
              </p>
            </div>

            {booked ? (
              <div className="text-center py-8 space-y-3 bg-[#EFE5D7]/50 rounded-xl p-6 border border-[#DFD8CC]">
                <span className="material-symbols-outlined text-[#DCA544] text-[40px]">
                  task_alt
                </span>
                <h4 className="font-headline text-[20px] font-bold text-[#142C47]">
                  Visit Reserved!
                </h4>
                <p className="text-xs text-[#5E6B7A]">
                  Thank you, <strong>{name}</strong>. Your visit for <strong>{visitDate} ({selectedSlot})</strong> is reserved at our Chinniyampalayam unit.
                </p>
                <a
                  href={`https://wa.me/91${WORKSHOP_DETAILS.phoneRaw}?text=${encodeURIComponent(
                    `Hello Deep Nap, I booked a store visit for ${name} on ${visitDate} (${selectedSlot}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#142C47] font-bold underline mt-2"
                >
                  <span>Confirm on WhatsApp</span>
                  <span>→</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#5E6B7A] mb-1">
                    Select Date
                  </label>
                  <input
                    type="date"
                    value={visitDate}
                    onChange={(e) => setVisitDate(e.target.value)}
                    className="w-full h-11 px-3 rounded-lg border border-[#DFD8CC] text-xs font-semibold text-[#142C47]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#5E6B7A] mb-1">
                    Select Time Window
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'morning', label: 'Morning', time: '10am – 1pm' },
                      { id: 'afternoon', label: 'Afternoon', time: '2pm – 5pm' },
                      { id: 'evening', label: 'Evening', time: '5pm – 9pm' },
                    ].map((slot) => (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => setSelectedSlot(slot.id)}
                        className={`p-2.5 rounded-lg border text-center transition-all text-xs ${
                          selectedSlot === slot.id
                            ? 'border-[#142C47] bg-[#142C47] text-white font-bold'
                            : 'border-[#DFD8CC] bg-white text-[#43474d] hover:bg-[#f7f3ec]'
                        }`}
                      >
                        <div>{slot.label}</div>
                        <div className="text-[10px] opacity-75">{slot.time}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#5E6B7A] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-11 px-3 rounded-lg border border-[#DFD8CC] text-xs text-[#142C47]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#5E6B7A] mb-1">
                    Phone Number
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

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full h-12 bg-[#142C47] text-white font-bold text-sm rounded-lg hover:bg-[#0E1F33] transition-colors cursor-pointer"
                  >
                    Confirm Store Visit Slot
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
