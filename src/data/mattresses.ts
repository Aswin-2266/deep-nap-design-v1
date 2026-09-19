import { MattressModel, CotModel } from '../types';

export const LOGO_URL = "https://lh3.googleusercontent.com/aida/AEtjO1VyBxylK-3YX6ydgNoyvEM6k3-IYwrftv2b1w8EZrMNWwbDHEkLstP3lfwBQYP1yub851HDJgdj69RnCc64OvsOlfotAmwM0jeiG3r3KclvcXmNSot3s41ZFJkA9ARlDaOFKM6CiXAnoZ--JguVEs1FujkWc23g5XeMUT_lpDTLNShJWVF5bpfC9-QwBsj2RnpdQu3p6n7kbB65ZfiH0PV9rQCy9H-Rj2JXODC904x_wiaYDaSq-YvcUfWf";

export const IMAGES = {
  heroProduct: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOv10oLyUmveNBx7AWdsq7owaAWMYA9Ho_ArxcKpsltOqarxd9REXO_LjWvFYe9N094A2E_bg1CyTXdWS7d84-Ke-r8ZMt5rIrz_s5TvS7jD86-xQePJ_x8uPO4uH_PRz0ccfTPBznLV7hf3GhEEtCTRL_LoIyd6k4949vXQGZ8wTC01E2BlPKQbZtuZbLr2-uoN-FZJPqIt0lywRVbkNfZVwBvg1PFXnIKyg0P3nj3l-8Jd_c4v0Mkg",
  softCard: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtJP2kP6FNh0jaFdCCt3GuG8QCcFSQUxYjPtatnh3EbSt8wdUMn9XtX5gUBV1tDkI2PzF3gNeJagBGTzoQ7WiJkDLB4rvSOBpecBQriWmT9_h2iutOvDiegP2Ie0_4dgadHUn3ccBiGXF2GBNvqT5UL02mryIUkH1bM7cHmBDh0fh80kjRQQGHW6Iul_EJGod1GH_kuCIHtP0YPZasOQpXlTBdnJESpNLj6NX1eihJC4EHcxAPFJui7w",
  mediumFirmCard: "https://lh3.googleusercontent.com/aida-public/AB6AXuBN1qTZ1zuPdJ37U4O67VszEdPoQxDpPDzI_8b3oDSU_XVEIfxOMnmGiuMh4RW5tGZJJ9_gx-aRrZwqhujHljR1IRm9hdq3R0h_PBBHp7eNRRb1zE8uHmOQ8znKjdbO22iKV0n_gN2U0FHqgyDhu_xm21f-Cf5Rw6yjBLrRN9YF7AEcF_OSpoCBNoyt5QiYX4mWQQu-tkDxEjK-_1FkdVZTkHvHaJFWAx5ZEES5JZVg5j45ttx-IE5pHg",
  firmCard: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIimL5IkaRFP0gjKJT-BOKESvkr3jNj6qc38CMFqj9La1y9Z4b9_4g3nfj4AHypo4UOkD5OOUFTNLwppLw3EIg6m5-p76etILsUlEn7AXWgKuR9_DLhfzUBCQJyILdB8Vy5RDICDHLkiYGSAMMhByk5p77PT72tlVhVSU9w6u5KZquhj7_jspZR8eOl2Y4nFAKFJN-vCXKQm026w2Et7wuzmn2GpE3Fe7kXhvuc_nXy1g9PT3E8GGD2w",
  rangeLatex: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzTtsoT1hMbak1nLhCnYMehQ9VXskYGMRRpu5EV1nLr2P5lupH3gF_yPhUWQuzdcoeRh9D9Xs-fRphinAl3p1yUg5XDwMy-M74779PLj2ynSYuoUVK5xq_atZbaQz01XYnVWybFFKYWwpV6Kx44mZaUvV13W-kihlOirQ3-rSiHoww9EYJGA4YOX2bhNfGrjNsTa1KcDtLJDx6fYp9mRe9K4Ls3SmPL27Jonb1amUuzIh4nMQlXf45KA",
  rangeSpring: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvP7I8RmEirwVlqRqzyYn8qf1KkQXraYjYx1q_APK49uJvf_TE1-mvWDDFON2tznPESpecCxZebCtSfW7DOVC96UD-YJum-GUTbhE50ERHrkwkhPFjcmJpoqFAqRXphb9PY7iNQ2Hxw7MJky5Owf45jCaEYFskOTev8v5XxToMuNKCAjw6DEpO2qksATl4UolHKoM4Ne_ek-uTw5SjZuXhOVMIJHAN_9ebLqyVT602vl3pJGleHhXt7g",
  rangeCoir: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKMbdB2zloAuQHlHrZ7CZ9mwNSnQn20DiBVFys9TTWdcRQfghWX6AT9Ly1K_oTonBu3SWeWnEV5Jc0lQIH1q3AfjubRNvk0kkZ-18OSv4vS9XRMdkIKfwZWMz3uaEMTxQGl667PphaKcqoL5JUpP2aHkLQEsbxUf0ug4v2EAxynkTCB-g9bKHDipUzw5I8umQuv9UUwzQCoS6QLncaoSYAwcJv98jKZVUFwgGIYL3GtUR0ja1BSf_LCg",
  builtAroundSleep: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYsOleMvBpqW8g4PzsQ924QRvBCkLoVs7mZN2U96P_RFsQsh5S5URuBKcwAY96FYFxr8gtQ49hYP-kevoI3cShNepvp9E6VhhFVOWl0GfxCLGd5U0zLZReFtYKoe9yI8syZZfKHyjt_STbZt6_Q5DH-nYoM6o_zgKdrQaLk2I9W330RWgr5_w7zYIc00ghbqyQiFOgcdZ4g_jfeofEA-Ht2m4_wYSeswsUVn-T2rwPEb2N-cJsFFMicw",
  mapWorkshop: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXg-7oimRADNPQ41RU6J4nlOhR8cH1RbQAFGq8tRGp3WSSDEm9yszGMH86n6lD8iix2ZnO7Y4VA2lDaEfiBvceY6Z1ugDYgV2xPpegu568fpEZtsi3808f0BIjZyDgkgZAaw3rKt1qNIaWIcmbLhYB0L0XyBxpRlNc2UwTa6UEJ4YJ9K7bLNRBDQpTUr1Cjz974kYtBdVA1U9C7Tyr37stlshcfRMTGUZ6FUvkmIBkmPsQuzYZSB2HcQ",
};

export const MATTRESS_MODELS: MattressModel[] = [
  {
    id: "latex-pocket-spring",
    name: "Natural Latex & Pocket Spring",
    subtitle: "Pin-core natural latex with individually encased pocket springs",
    category: "latex",
    firmnessScore: 7,
    firmnessLabel: "Medium Firm",
    scaleRange: "Scale 6–7",
    thicknessOptions: ["6 in", "8 in", "10 in", "12 in"],
    warrantyYears: 20,
    sizesAvailable: "18 + custom",
    startingPrice: 21400,
    suitedFor: "Back & combination sleepers, balanced spinal posture & zero motion disturbance",
    internalCore: "Pocket Spring + 100% Kerala Natural Latex Hybrid Core",
    imageUrl: IMAGES.heroProduct,
    badge: "Best seller",
    featured: true,
    description: "Our hallmark hybrid mattress engineered for Tamil Nadu's tropical climate. Combines uncompromised zero-partner-disturbance pocket springs with a top pin-core natural latex comfort layer that breathes naturally without heat retention.",
    features: [
      "100% Organic Kerala Natural Latex (GOLS Certified)",
      "Individually heat-tempered barrel pocket coils",
      "Organic unbleached bamboo cotton quilt with anti-dustmite finish",
      "Reinforced high-density foam encasement for edge-to-edge support"
    ]
  },
  {
    id: "natural-latex-ortho",
    name: "Natural Latex Ortho",
    subtitle: "100% Kerala natural latex core with breathable organic cotton cover",
    category: "latex",
    firmnessScore: 7,
    firmnessLabel: "Medium Firm",
    scaleRange: "Scale 7–8",
    thicknessOptions: ["5 in", "6 in", "8 in"],
    warrantyYears: 20,
    sizesAvailable: "18 + custom",
    startingPrice: 24800,
    suitedFor: "Natural material purists, allergic individuals, ergonomic lumbar support",
    internalCore: "Monolithic Pin-Core Kerala Natural Latex Block (85D density)",
    imageUrl: IMAGES.rangeLatex,
    description: "Solid monolithic core made from pure vulcanized botanical rubber tree sap. Features 7-zone pin-core aeration holes tailored to relieve pressure along shoulder blades while firming up under the lower spine.",
    features: [
      "Zero chemical synthetics or off-gassing petroleum foams",
      "7-zone posture calibration for anatomical spinal alignment",
      "Washable zippered cover in organic unbleached cotton",
      "Naturally hypoallergenic, anti-microbial, and mold-resistant"
    ]
  },
  {
    id: "pocket-spring-comfort",
    name: "Pocket Spring Comfort",
    subtitle: "Zero-motion transfer encased coils with high resilience foam top",
    category: "pocket-spring",
    firmnessScore: 6,
    firmnessLabel: "Gentle Medium",
    scaleRange: "Scale 5–6",
    thicknessOptions: ["6 in", "8 in", "10 in"],
    warrantyYears: 15,
    sizesAvailable: "18 + custom",
    startingPrice: 17200,
    suitedFor: "Couples with differing sleep rhythms, light sleepers, side sleepers",
    internalCore: "Independent Carbon-Steel Pocketed Springs + Soft HR Foam",
    imageUrl: IMAGES.rangeSpring,
    description: "Each spring reacts independently inside its spun-bond pocket. When your partner moves, rolls over, or wakes up, zero vibration transfers to your side of the bed.",
    features: [
      "Over 800 individually encased active coils in Queen size",
      "Breathable high-resilience transition layer",
      "Heavy-duty border wire prevent sagging on perimeter",
      "Cool-weave knitted jacquard upholstery"
    ]
  },
  {
    id: "rubberised-coir-spine-care",
    name: "Rubberised Coir Spine-Care",
    subtitle: "High-density natural coconut coir with firm orthopaedic spine support",
    category: "coir",
    firmnessScore: 8,
    firmnessLabel: "Firm Orthopaedic",
    scaleRange: "Scale 8–9",
    thicknessOptions: ["4 in", "5 in", "6 in"],
    warrantyYears: 10,
    sizesAvailable: "18 + custom",
    startingPrice: 13900,
    suitedFor: "Stomach sleepers, senior citizens, chronic lower back ache relief",
    internalCore: "High-density Rubberised Coconut Coir + Orthopaedic Rebonded Core",
    imageUrl: IMAGES.rangeCoir,
    description: "The time-tested South Indian sleep foundation. Premium processed natural coconut husk fibers infused with pure natural rubber latex, creating an exceptionally firm, breathable, cool sleep surface that will not sag over decades.",
    features: [
      "High natural air circulation preventing sweat accumulation",
      "Firm unyielding platform recommended by Tamil Nadu orthopaedics",
      "Eco-friendly organic coconut fiber bonded with natural latex milk",
      "Reinforced border quilting"
    ]
  },
  {
    id: "plush-cloud-latex-quilt",
    name: "Plush Cloud Soft Latex",
    subtitle: "Side sleeper gentle contouring with pressure relief on shoulders and hips",
    category: "latex",
    firmnessScore: 3,
    firmnessLabel: "Plush Soft",
    scaleRange: "Scale 3–4",
    thicknessOptions: ["6 in", "8 in", "10 in"],
    warrantyYears: 15,
    sizesAvailable: "18 + custom",
    startingPrice: 22600,
    suitedFor: "Side sleepers, light body frames, shoulder bursitis relief",
    internalCore: "Natural Latex, Soft Quilted Foam + Adaptive Micro-Pocket Core",
    imageUrl: IMAGES.softCard,
    description: "Gently cushions every contour of your shoulders and hip sockets. Allows optimal sinking without losing horizontal spinal equilibrium.",
    features: [
      "Ultra-soft 65D botanical latex topper layer",
      "Plush organic quilted damask tick",
      "Pressure-free circulation for arm and shoulder comfort",
      "Climate-vented side borders"
    ]
  },
  {
    id: "ortho-bonded-firm",
    name: "Ortho Bonded Medical Care",
    subtitle: "High-density bonded core engineered for doctor-prescribed back support",
    category: "orthopaedic",
    firmnessScore: 9,
    firmnessLabel: "Extra Firm",
    scaleRange: "Scale 8–9",
    thicknessOptions: ["4 in", "5 in", "6 in"],
    warrantyYears: 12,
    sizesAvailable: "18 + custom",
    startingPrice: 15400,
    suitedFor: "Severe spine pain, lumbar disc herniation, post-surgery recovery",
    internalCore: "100D Medical Grade High-Density Bonded Core + Coir Insulator",
    imageUrl: IMAGES.firmCard,
    description: "Rigid posture foundation specifically calibrated to prevent pelvic sinkage. Recommended by regional spine physiotherapists in Coimbatore and Tiruppur.",
    features: [
      "Zero sinkage medical-grade core",
      "High thermal dissipation quilting",
      "Even spinal weight distribution across pressure points",
      "Dual-sided reversible firmness option"
    ]
  },
  {
    id: "memory-comfort-hybrid",
    name: "Aerofoam Memory & Latex",
    subtitle: "Slow-recovery thermo-neutral memory foam with bouncy latex resilience",
    category: "memory-foam",
    firmnessScore: 5,
    firmnessLabel: "Gentle Contour",
    scaleRange: "Scale 5–6",
    thicknessOptions: ["6 in", "8 in", "10 in"],
    warrantyYears: 12,
    sizesAvailable: "18 + custom",
    startingPrice: 18900,
    suitedFor: "Pressure-point relief without the sinking heat trap of standard memory foam",
    internalCore: "Aerated Open-Cell Memory Foam + Natural Latex Transition",
    imageUrl: IMAGES.mediumFirmCard,
    description: "Combines body-hugging contouring with pin-core latex rebound so you never feel 'trapped' or warm in Coimbatore's summer heat.",
    features: [
      "Open-cell thermo-neutral cooling formulation",
      "Latex bounce rebound layer below memory foam",
      "Anti-skid cotton canvas bottom",
      "Zippered washable outer cover"
    ]
  }
];

export const DIWAN_COTS: CotModel[] = [
  {
    id: "teak-diwan-classic",
    name: "Solid Teak Traditional Diwan",
    woodType: "100% Seasoned First-Grade Teak Wood",
    dimensions: "72 x 36 in / 75 x 36 in / Custom",
    storageType: "Optional Hydraulic or Box Storage",
    startingPrice: 18500,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKMbdB2zloAuQHlHrZ7CZ9mwNSnQn20DiBVFys9TTWdcRQfghWX6AT9Ly1K_oTonBu3SWeWnEV5Jc0lQIH1q3AfjubRNvk0kkZ-18OSv4vS9XRMdkIKfwZWMz3uaEMTxQGl667PphaKcqoL5JUpP2aHkLQEsbxUf0ug4v2EAxynkTCB-g9bKHDipUzw5I8umQuv9UUwzQCoS6QLncaoSYAwcJv98jKZVUFwgGIYL3GtUR0ja1BSf_LCg",
    description: "Handcrafted in our Chinniyampalayam workshop from solid seasoned teak. Designed to fit bespoke 3-to-5 inch firm coir or latex diwan mattresses with matching bolsters."
  },
  {
    id: "teak-platform-bed",
    name: "Minimalist Low Teak Platform Cot",
    woodType: "Solid Teak & Vented Plywood Plank Base",
    dimensions: "King (78x72) / Queen (78x60) / Custom",
    storageType: "Open-Leg Air Circulation Architecture",
    startingPrice: 26500,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYsOleMvBpqW8g4PzsQ924QRvBCkLoVs7mZN2U96P_RFsQsh5S5URuBKcwAY96FYFxr8gtQ49hYP-kevoI3cShNepvp9E6VhhFVOWl0GfxCLGd5U0zLZReFtYKoe9yI8syZZfKHyjt_STbZt6_Q5DH-nYoM6o_zgKdrQaLk2I9W330RWgr5_w7zYIc00ghbqyQiFOgcdZ4g_jfeofEA-Ht2m4_wYSeswsUVn-T2rwPEb2N-cJsFFMicw",
    description: "Clean Japanese-Scandinavian architectural lines with South Indian solid teak durability. Vented slats provide bottom airflow essential for natural latex mattresses."
  },
  {
    id: "rosewood-carved-cot",
    name: "Artisanal Rosewood Platform Cot",
    woodType: "Natural Rosewood (Eetti Maram) Finish",
    dimensions: "78 x 72 in King or Bespoke Carpenter specs",
    storageType: "Solid Frame with Heavy-Duty Center Rails",
    startingPrice: 34000,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzTtsoT1hMbak1nLhCnYMehQ9VXskYGMRRpu5EV1nLr2P5lupH3gF_yPhUWQuzdcoeRh9D9Xs-fRphinAl3p1yUg5XDwMy-M74779PLj2ynSYuoUVK5xq_atZbaQz01XYnVWybFFKYWwpV6Kx44mZaUvV13W-kihlOirQ3-rSiHoww9EYJGA4YOX2bhNfGrjNsTa1KcDtLJDx6fYp9mRe9K4Ls3SmPL27Jonb1amUuzIh4nMQlXf45KA",
    description: "Built for generational heritage homes. Perfect pairing for our 8-to-10 inch Natural Latex Ortho mattresses."
  }
];

export const WORKSHOP_DETAILS = {
  address: "Irugur Road, Chinniyampalayam, Coimbatore, Tamil Nadu 641062",
  landmark: "Adjacent to Coimbatore Airport Bypass (NH 544)",
  phone: "+91 96008 89334",
  phoneRaw: "9600889334",
  whatsappText: "Hello Deep Nap, I would like to enquire about a custom mattress made in Coimbatore.",
  hours: "Open 9:00 AM – 10:00 PM, every single day",
  googleRating: 4.6,
  reviewsCount: 62,
  gstin: "33AAAAA0000A1Z5"
};

export const QUIZ_QUESTIONS = [
  {
    id: "sleepPosition",
    question: "What is your primary sleep position?",
    options: [
      { label: "Side sleeper", detail: "Needs pressure relief on shoulders and hip sockets", recommendedBias: "soft" },
      { label: "Back sleeper", detail: "Requires gentle lumbar support and spinal alignment", recommendedBias: "medium-firm" },
      { label: "Stomach sleeper", detail: "Needs firm, flat unyielding surface to prevent arching", recommendedBias: "firm" },
      { label: "Combination sleeper", detail: "Switches positions frequently through the night", recommendedBias: "medium-firm" }
    ]
  },
  {
    id: "bodySupport",
    question: "Do you experience any back, shoulder, or neck pain?",
    options: [
      { label: "Frequent lower back stiffness", detail: "Needs calibrated firm orthopaedic lumbar support" },
      { label: "Shoulder or hip numbness", detail: "Needs soft contouring pressure relief" },
      { label: "Upper back / neck tension", detail: "Needs balanced medium firmness with correct pillow" },
      { label: "No pain / general wellness", detail: "Focus on zero-partner-disturbance & pure comfort" }
    ]
  },
  {
    id: "partnerDisturbance",
    question: "Do you share your bed with a partner or child?",
    options: [
      { label: "Yes, easily disturbed by partner movement", detail: "Individually encased pocket springs are strongly advised" },
      { label: "Yes, but movement doesn't bother us", detail: "Latex or hybrid core works nicely" },
      { label: "No, sleeping alone", detail: "Focus strictly on individual ergonomic preference" }
    ]
  },
  {
    id: "firmnessPreference",
    question: "What surface feel do you naturally prefer?",
    options: [
      { label: "Plush & sink-in (Scale 3–4)", detail: "Cloud-like, wrapping cushioning" },
      { label: "Medium firm & resilient (Scale 6–7)", detail: "Balanced posture, gentle bounce, easy turning" },
      { label: "Firm & unyielding (Scale 8–9)", detail: "Flat traditional solid support, zero sinking" }
    ]
  }
];
