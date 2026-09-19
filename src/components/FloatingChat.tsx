import React, { useState } from 'react';
import { WORKSHOP_DETAILS } from '../data/mattresses';

interface FloatingChatProps {
  onOpenQuote: (mattressName?: string) => void;
}

export const FloatingChat: React.FC<FloatingChatProps> = ({ onOpenQuote }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const quickTopics = [
    {
      title: "Carpenter Bed Custom Size",
      msg: "Hello Deep Nap, I have a carpenter-made cot with non-standard measurements and need a custom mattress quote.",
    },
    {
      title: "Lower Back Ache & Firmness Advice",
      msg: "Hello Deep Nap, I suffer from lower back pain. Which firmness score and core layering do you recommend for my posture?",
    },
    {
      title: "Workshop Visit in Chinniyampalayam",
      msg: "Hello Deep Nap, I would like to visit your workshop today to test the latex and pocket spring layers in person.",
    },
  ];

  return (
    <>
      {/* Floating Pill Trigger */}
      <aside className="fixed bottom-6 right-6 z-40">
        <div className="relative">
          {/* Main button */}
          <button
            type="button"
            onClick={() => setOpenDrawer(!openDrawer)}
            className="flex items-center gap-2.5 bg-[#0E1F33] text-white pl-4 pr-5 py-3 rounded-full border border-[#DFD8CC]/20 shadow-[0_4px_24px_rgba(14,31,51,0.25)] hover:bg-[#142C47] transition-all group cursor-pointer"
            aria-label="Chat with Mattress Maker"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#f7bd59] group-hover:scale-125 transition-transform shrink-0"></span>
            <span className="text-[14px] font-semibold tracking-wide">
              Chat with Mattress Maker
            </span>
            <span className="material-symbols-outlined text-[#f7bd59] text-[20px]">
              chat
            </span>
          </button>
        </div>
      </aside>

      {/* Interactive Quick Dialogue Drawer */}
      {openDrawer && (
        <div className="fixed bottom-22 right-6 z-50 w-88 sm:w-96 bg-white rounded-xl shadow-2xl border border-[#DFD8CC] p-5 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex justify-between items-start pb-3 border-b border-[#DFD8CC]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#142C47] flex items-center justify-center text-white text-xs font-bold">
                DN
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-[#142C47]">
                  Deep Nap Advisory
                </h4>
                <p className="text-[11px] text-[#5E6B7A]">
                  Factory unit online · Typically replies in &lt; 5 mins
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpenDrawer(false)}
              className="text-[#5E6B7A] hover:text-[#142C47] text-lg font-bold"
            >
              ✕
            </button>
          </div>

          <div className="py-3 space-y-2">
            <p className="text-[13px] text-[#5E6B7A]">
              Select a consultation topic to immediately connect with our master mattress maker:
            </p>

            {quickTopics.map((item, idx) => (
              <a
                key={idx}
                href={`https://wa.me/91${WORKSHOP_DETAILS.phoneRaw}?text=${encodeURIComponent(item.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2.5 rounded-lg bg-[#f7f3ec] hover:bg-[#F3E3C2]/40 border border-[#DFD8CC]/70 transition-colors text-left group"
              >
                <div className="text-[13px] font-bold text-[#142C47] flex items-center justify-between">
                  <span>{item.title}</span>
                  <span className="text-[#DCA544] text-[16px] group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
                <div className="text-[11px] text-[#5E6B7A] line-clamp-1 mt-0.5">
                  {item.msg}
                </div>
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-[#DFD8CC] flex gap-2">
            <button
              type="button"
              onClick={() => {
                setOpenDrawer(false);
                onOpenQuote();
              }}
              className="flex-1 py-2 text-center text-xs font-bold rounded-lg bg-[#142C47] text-white hover:bg-[#0E1F33]"
            >
              Get Custom Quote
            </button>
            <a
              href={`https://wa.me/91${WORKSHOP_DETAILS.phoneRaw}?text=${encodeURIComponent(WORKSHOP_DETAILS.whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3 text-xs font-bold rounded-lg border border-[#142C47] text-[#142C47] hover:bg-[#142C47] hover:text-white"
            >
              Direct WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
};
