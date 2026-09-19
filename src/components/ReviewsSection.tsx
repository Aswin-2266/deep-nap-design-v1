import React from 'react';
import { WORKSHOP_DETAILS } from '../data/mattresses';

export const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      quote: "Got an odd 75×68 inch mattress made in 5 days. Fits our carpenter bed perfectly.",
      author: "Karthik S.",
      location: "RS Puram",
      rating: 5
    },
    {
      quote: "Firmness level 7 is exactly what my lower back needed. Outstanding build quality.",
      author: "Revathi M.",
      location: "Saibaba Colony",
      rating: 5
    },
    {
      quote: "Visiting their Chinniyampalayam unit convinced us. Watching them layer it gave total confidence.",
      author: "Anand N.",
      location: "Peelamedu",
      rating: 5
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1280px] mx-auto flex flex-col space-y-10">
        {/* Rating Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex items-center gap-1 text-[#DCA544]">
            <span className="material-symbols-outlined text-[22px]">star</span>
            <span className="material-symbols-outlined text-[22px]">star</span>
            <span className="material-symbols-outlined text-[22px]">star</span>
            <span className="material-symbols-outlined text-[22px]">star</span>
            <span className="material-symbols-outlined text-[22px]">star_half</span>
          </div>
          <h2 className="font-headline text-[19px] text-[#142C47] font-bold">
            {WORKSHOP_DETAILS.googleRating} from {WORKSHOP_DETAILS.reviewsCount} Google reviews
          </h2>
        </div>

        {/* 3 Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#f7f3ec] p-6 rounded-xl border border-[#DFD8CC] flex flex-col justify-between hover:shadow-xs transition-shadow"
            >
              <p className="text-[15px] leading-relaxed text-[#142C47] italic">
                “{rev.quote}”
              </p>
              <p className="text-[13px] text-[#5E6B7A] font-semibold mt-4">
                — {rev.author}, {rev.location}
              </p>
            </div>
          ))}
        </div>

        <div>
          <a
            className="inline-flex items-center gap-1.5 text-[15px] text-[#142C47] hover:text-[#0E1F33] font-semibold underline underline-offset-4 decoration-[#DFD8CC] hover:decoration-[#142C47] cursor-pointer"
            href="https://maps.google.com/?q=Chinniyampalayam+Coimbatore"
            rel="noopener noreferrer"
            target="_blank"
          >
            View our Google listing & reviews →
          </a>
        </div>
      </div>
    </section>
  );
};
