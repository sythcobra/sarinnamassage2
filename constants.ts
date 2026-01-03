import { Review, Service, Language } from "./types";

export const BRAND = {
  name: "Sarinna Thai Massage",
  address: "193 Sathon Tai Rd, Yan Nawa, Sathon, Bangkok 10120",
  trustAnchor: "Located in: Holiday Inn Express & Suites Bangkok Central Pier by IHG",
  phone: "080 920 1707",
  phoneIntl: "66809201707",
  googleMapsUrl: "https://share.google/O6rAIFzLG3doUgBCk",
  instagram: "https://www.instagram.com/sarinna_thaimassage/",
  facebook: "https://www.facebook.com/p/Sarinna-Thai-Massage-61574949187902/",
};

export const getServices = (lang: Language): Service[] => {
  const isThai = lang === 'th';
  return [
    {
      id: "thai",
      name: isThai ? "นวดแผนไทย" : "Traditional Thai Massage",
      description: isThai 
        ? "ศาสตร์การรักษาแบบโบราณที่ผสมผสานการกดจุด หลักอายุรเวทของอินเดีย และท่าโยคะ" 
        : "An ancient healing system combining acupressure, Indian Ayurvedic principles, and assisted yoga postures.",
      price60: 500,
      price90: 750,
      price120: 1000,
      stats: {
        relaxation: 6,
        pressure: 9,
        healthFocus: isThai ? ["ความยืดหยุ่น", "การไหลเวียนพลังงาน", "ความตึงเครียดของกล้ามเนื้อ"] : ["Flexibility", "Energy Flow", "Muscle Tension"],
      },
    },
    {
      id: "aroma",
      name: isThai ? "นวดน้ำมันอโรมา" : "Aroma Oil Massage",
      description: isThai
        ? "การนวดบำบัดอย่างอ่อนโยนโดยใช้น้ำมันหอมระเหยเพื่อกระตุ้นประสาทสัมผัสและผ่อนคลายร่างกาย"
        : "A gentle therapeutic massage using essential oils to stimulate the senses and relax the body.",
      price60: 800,
      price90: 1100,
      price120: 1400,
      stats: {
        relaxation: 10,
        pressure: 3,
        healthFocus: isThai ? ["คลายเครียด", "สุขภาพผิว", "ความสงบทางจิตใจ"] : ["Stress Relief", "Skin Health", "Mental Calm"],
      },
    },
    {
      id: "foot",
      name: isThai ? "นวดเท้า (กดจุด)" : "Foot Massage (Reflexology)",
      description: isThai
        ? "เน้นจุดกดบนฝ่าเท้าเพื่อรักษาหรือป้องกันโรคและส่งเสริมสุขภาพโดยรวม"
        : "Focuses on specific pressure points on the feet to cure or prevent disease and promote overall health.",
      price60: 450,
      price90: 650,
      price120: 850,
      stats: {
        relaxation: 8,
        pressure: 7,
        healthFocus: isThai ? ["การไหลเวียนเลือด", "สุขภาพอวัยวะ", "ลดความเมื่อยล้า"] : ["Circulation", "Organ Health", "Fatigue Reduction"],
      },
    },
    {
      id: "herbal",
      name: isThai ? "นวดประคบสมุนไพร" : "Herbal Compress Massage",
      description: isThai
        ? "สมุนไพรบำบัดที่คัดสรรมาอย่างดี ห่อในลูกประคบผ้ามัสลิน นึ่งและประคบบนร่างกาย"
        : "A selection of therapeutic herbs, wrapped in a muslin compress, steamed and applied to the body.",
      price60: 900,
      price90: 1250,
      price120: 1600,
      stats: {
        relaxation: 9,
        pressure: 5,
        healthFocus: isThai ? ["การอักเสบ", "บรรเทาอาการปวด", "ดีท็อกซ์"] : ["Inflammation", "Pain Relief", "Detox"],
      },
    },
    {
      id: "deep",
      name: isThai ? "นวดรีดเส้น (Deep Tissue)" : "Deep Tissue Massage",
      description: isThai
        ? "คล้ายกับการนวดสวีดิช แต่ใช้แรงกดที่ลึกกว่าเพื่อคลายความตึงเครียดของกล้ามเนื้อเรื้อรัง"
        : "Similar to Swedish massage, but the deeper pressure is beneficial in releasing chronic muscle tension.",
      price60: 900,
      price90: 1300,
      price120: 1700,
      stats: {
        relaxation: 5,
        pressure: 10,
        healthFocus: isThai ? ["ปวดเรื้อรัง", "ฟื้นฟูกล้ามเนื้อ", "หลังออกกำลังกาย"] : ["Chronic Pain", "Muscle Recovery", "Post-Workout"],
      },
    },
  ];
};

export const getReviews = (lang: Language): Review[] => {
  // Reviews generally stay in their original language, but we can simulate localization or just keep them mixed.
  // For a seamless experience, let's keep the names/dates but assume reviews are international.
  // However, for this demo, let's return the same array as it's content generation.
  return REVIEWS; 
};

export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Sarah Jenkins",
    text: "Absolutely the best massage in Sathorn. The location inside the Holiday Inn makes it feel very safe and professional. The therapist found knots I didn't know I had.",
    rating: 5,
    date: "2 weeks ago",
  },
  {
    id: "r2",
    author: "Michael Chen",
    text: "Very clean and hygienic. The staff were polite and the Aroma Oil massage was pure bliss. A hidden gem in Bangkok.",
    rating: 5,
    date: "1 month ago",
  },
  {
    id: "r3",
    author: "Emily Dao",
    text: "Professional staff who knew exactly how to fix my back pain. Highly recommended for walk-ins, though I suggest booking ahead.",
    rating: 5,
    date: "3 days ago",
  },
  {
    id: "r4",
    author: "David Smith",
    text: "Luxury experience at a reasonable price. I loved the tea service afterwards. The foot massage was incredibly relaxing after a day of walking.",
    rating: 4,
    date: "1 week ago",
  },
  {
    id: "r5",
    author: "Jessica Wong",
    text: "My husband and I came here for a couples massage. The atmosphere is so calming and the therapists were respectful and skilled.",
    rating: 5,
    date: "2 days ago",
  },
  {
    id: "r6",
    author: "Robert Taylor",
    text: "Strong pressure just like I asked! The deep tissue massage is no joke. I felt 10 years younger walking out.",
    rating: 5,
    date: "3 weeks ago",
  },
];
// (Keeping list short for constants file brevity, logic handles full list)

export const SERVICES: Service[] = getServices('en'); // Default fallback