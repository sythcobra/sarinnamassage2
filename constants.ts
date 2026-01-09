import { Review, Service, Language } from "./types";

export const BRAND = {
  name: "Sarinna Thai Massage",
  address: "193 Sathon Tai Rd, Yan Nawa, Sathon, Bangkok 10120",
  trustAnchor: "Located in: Holiday Inn Express & Suites Bangkok Central Pier by IHG",
  phone: "080 920 1707",
  phoneIntl: "66809201707",
  phoneSecondary: "06 2381 6389",
  phoneSecondaryIntl: "66623816389",
  lineId: "katherlyn_h_",
  googleMapsUrl: "https://share.google/O6rAIFzLG3doUgBCk",
  instagram: "https://www.instagram.com/sarinna_thaimassage/",
  facebook: "https://www.facebook.com/p/Sarinna-Thai-Massage-61574949187902/",
};

export const getServices = (lang: Language): Service[] => {
  const isThai = lang === 'th';
  return [
    // TRADITIONAL THAI
    {
      id: "thai",
      name: isThai ? "นวดแผนไทย" : "Thai Massage",
      description: isThai 
        ? "ศาสตร์การรักษาแบบโบราณที่ช่วยปรับสมดุลร่างกายและพลังงานด้วยการกดจุดและยืดเหยียด" 
        : "Traditional ancient healing therapy using acupressure and stretching to balance body and energy.",
      price60: 499,
      price90: 699,
      stats: {
        relaxation: 6,
        pressure: 8,
        healthFocus: isThai ? ["ความยืดหยุ่น", "การไหลเวียนพลังงาน", "คลายปวดเมื่อย"] : ["Flexibility", "Energy Flow", "Muscle Relief"],
      },
    },
    {
      id: "thai_balm",
      name: isThai ? "นวดไทยยาหม่อง" : "Thai Balm Massage",
      description: isThai
        ? "เพิ่มประสิทธิภาพการนวดไทยด้วยยาหม่องสมุนไพรสูตรเย็น ช่วยคลายกล้ามเนื้อที่ตึงเครียดได้ดียิ่งขึ้น"
        : "Enhanced Traditional Thai massage using cooling herbal balm to deeply relieve muscle tension and inflammation.",
      price60: 599,
      price90: 849,
      stats: {
        relaxation: 7,
        pressure: 8,
        healthFocus: isThai ? ["ลดการอักเสบ", "คลายกล้ามเนื้อ", "สดชื่น"] : ["Inflammation", "Deep Tension", "Cooling"],
      },
    },
    {
      id: "foot",
      name: isThai ? "นวดเท้า" : "Foot Massage",
      description: isThai
        ? "กระตุ้นจุดสะท้อนบนฝ่าเท้าเพื่อปรับสมดุลการทำงานของอวัยวะภายในและผ่อนคลายความเมื่อยล้า"
        : "Stimulates reflex points on the feet to promote overall health, internal organ balance, and relaxation.",
      price60: 499,
      price90: 699,
      stats: {
        relaxation: 8,
        pressure: 7,
        healthFocus: isThai ? ["การไหลเวียนเลือด", "สุขภาพอวัยวะ", "ลดความเมื่อยล้า"] : ["Circulation", "Organ Health", "Fatigue Reduction"],
      },
    },
    
    // MASSAGE THERAPY
    {
      id: "sarinna_sig",
      name: isThai ? "สริณณา ซิกเนเจอร์ (แรงปานกลาง)" : "Sarinna Signature Massage (Medium Pressure)",
      description: isThai
        ? "เอกลักษณ์เฉพาะของสริณณา ผสมผสานเทคนิคตะวันออกและตะวันตก เน้นแรงกดปานกลางเพื่อความผ่อนคลายสูงสุด"
        : "Our unique signature blend combining Eastern and Western techniques, focusing on medium pressure for optimal balance.",
      price60: 799,
      price90: 1149,
      stats: {
        relaxation: 9,
        pressure: 5,
        healthFocus: isThai ? ["สมดุลร่างกาย", "คลายเครียด", "ฟื้นฟู"] : ["Body Balance", "De-stress", "Revitalize"],
      },
    },
    {
      id: "coconut",
      name: isThai ? "นวดน้ำมันมะพร้าว (แรงปานกลาง)" : "Coconut Oil Massage (Medium Pressure)",
      description: isThai
        ? "ปรนนิบัติผิวด้วยน้ำมันมะพร้าวบริสุทธิ์ ช่วยให้ผิวชุ่มชื้นพร้อมผ่อนคลายกล้ามเนื้อด้วยแรงกดปานกลาง"
        : "Nourishing massage using virgin coconut oil to deeply hydrate the skin while relaxing muscles with medium pressure.",
      price60: 799,
      price90: 1149,
      stats: {
        relaxation: 9,
        pressure: 5,
        healthFocus: isThai ? ["ผิวพรรณ", "ชุ่มชื้น", "ผ่อนคลาย"] : ["Skin Hydration", "Glowing Skin", "Relaxation"],
      },
    },
    {
      id: "deep",
      name: isThai ? "นวดรีดเส้น (แรงหนัก)" : "Deep Tissue Massage (Strong Pressure)",
      description: isThai
        ? "เน้นการกดจุดลึกเพื่อคลายกล้ามเนื้อชั้นลึกและพังผืด เหมาะสำหรับผู้ที่มีอาการปวดเรื้อรัง"
        : "Focuses on deep layers of muscle and connective tissue to release chronic tension and knots.",
      price60: 899,
      price90: 1349,
      stats: {
        relaxation: 5,
        pressure: 10,
        healthFocus: isThai ? ["ปวดเรื้อรัง", "ฟื้นฟูกล้ามเนื้อ", "หลังออกกำลังกาย"] : ["Chronic Pain", "Muscle Recovery", "Sports Recovery"],
      },
    },
    {
      id: "aroma",
      name: isThai ? "นวดอโรมาผ่อนคลาย (แรงเบา)" : "Aroma Relaxing Oil Massage (Light Pressure)",
      description: isThai
        ? "การนวดบำบัดอย่างอ่อนโยนโดยใช้น้ำมันหอมระเหยเกรดพรีเมียม เพื่อกระตุ้นประสาทสัมผัสและผ่อนคลาย"
        : "A gentle therapeutic massage using premium essential oils to stimulate the senses and deeply relax the mind.",
      price60: 699,
      price90: 999,
      stats: {
        relaxation: 10,
        pressure: 3,
        healthFocus: isThai ? ["คลายเครียด", "สุขภาพผิว", "นอนหลับสบาย"] : ["Stress Relief", "Skin Health", "Better Sleep"],
      },
    },

    // ADDITIONAL SERVICES
    {
      id: "head_coco",
      name: isThai ? "นวดศีรษะน้ำมันมะพร้าว" : "Head Massage with Coconut Oil",
      description: isThai
        ? "ผ่อนคลายความเครียดสะสมบริเวณศีรษะด้วยน้ำมันมะพร้าวอุ่น ช่วยบำรุงเส้นผมและหนังศีรษะ"
        : "Relieves accumulated stress and headaches using warm coconut oil, also beneficial for hair and scalp health.",
      price30: 299,
      stats: {
        relaxation: 9,
        pressure: 4,
        healthFocus: isThai ? ["ลดไมเกรน", "บำรุงผม", "หลับสบาย"] : ["Migraine Relief", "Hair Care", "Sleep Aid"],
      },
    },
    {
      id: "neck_shoulder",
      name: isThai ? "นวดคอ บ่า ไหล่" : "Neck and Shoulder Massage",
      description: isThai
        ? "เน้นเฉพาะจุดเพื่อบรรเทาอาการปวดตึงบริเวณคอและไหล่จากการทำงานหรือความเครียด"
        : "Focused massage treatment to relieve stiffness and acute pain in the neck and shoulder area.",
      price30: 299,
      stats: {
        relaxation: 7,
        pressure: 6,
        healthFocus: isThai ? ["ออฟฟิศซินโดรม", "คลายเส้น", "ลดปวด"] : ["Stiff Neck", "Tension Release", "Pain Relief"],
      },
    },
    {
      id: "foot_add",
      name: isThai ? "นวดเท้า (เพิ่มเติม)" : "Foot Massage",
      description: isThai
        ? "บริการเสริมสำหรับการนวดเท้า 30 นาที เพื่อความผ่อนคลายที่รวดเร็ว"
        : "A 30-minute add-on service for quick foot relaxation and recovery.",
      price30: 299,
      stats: {
        relaxation: 7,
        pressure: 6,
        healthFocus: isThai ? ["ผ่อนคลายเท้า"] : ["Quick Relief"],
      },
    },
  ];
};

export const getReviews = (lang: Language): Review[] => {
  return REVIEWS; 
};

export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Holger",
    text: "Very good massage, very clean and professional. Located inside the Holiday Inn Express. I can recommend the Thai Massage 90 minutes. 5 stars!",
    rating: 5,
    date: "2 weeks ago",
  },
  {
    id: "r2",
    author: "May P.",
    text: "Clean, cozy and peaceful atmosphere. The therapist was very polite and skilled. I had the Aroma Oil massage and it was perfect. Good value for money in this area.",
    rating: 5,
    date: "1 month ago",
  },
  {
    id: "r3",
    author: "John D.",
    text: "Found this place on Google Maps and gave it a try. Excellent service! The reception was warm and welcoming. The massage pressure was just right. A real sanctuary in Bangkok.",
    rating: 5,
    date: "3 days ago",
  },
  {
    id: "r4",
    author: "Chen Wei",
    text: "Professional and safe environment. The shop is boutique style and very well maintained. My neck and shoulder pain is gone. Highly recommended.",
    rating: 5,
    date: "1 week ago",
  },
  {
    id: "r5",
    author: "Sophie",
    text: "I loved the interior, very calming. The coconut oil massage was amazing. The staff are lovely and attentive. Will definitely return next time I am in Sathorn.",
    rating: 5,
    date: "2 months ago",
  },
  {
    id: "r6",
    author: "Natthapong",
    text: "Best massage place near the hotel. Very clean and the price is reasonable. The therapists know what they are doing. Very relaxing.",
    rating: 5,
    date: "3 weeks ago",
  },
  {
    id: "r7",
    author: "Sarah J.",
    text: "My husband and I had a couple's massage here. The room was private and very clean. We both fell asleep it was so relaxing. Definitely the highlight of our stay.",
    rating: 5,
    date: "3 days ago",
  },
  {
    id: "r8",
    author: "Ploy S.",
    text: "I have office syndrome and the therapist really worked out the knots in my shoulders. The strength was perfect. Will be coming back next week.",
    rating: 5,
    date: "1 week ago",
  },
  {
    id: "r9",
    author: "Michael T.",
    text: "Walked in without a reservation and they managed to fit me in after a short wait. Very accommodating staff and excellent foot massage.",
    rating: 5,
    date: "5 days ago",
  },
  {
    id: "r10",
    author: "David W.",
    text: "Staying at the Holiday Inn and this is so convenient. Much better quality than the random places on the street. Feels very safe and premium.",
    rating: 5,
    date: "2 weeks ago",
  },
  {
    id: "r11",
    author: "Emily R.",
    text: "The Thai Balm massage is a must-try. The cooling sensation really helps with the heat in Bangkok. The therapist was attentive to my back pain.",
    rating: 5,
    date: "3 weeks ago",
  },
  {
    id: "r12",
    author: "Kenji",
    text: "Spotless clean. This is the most important thing for me and Sarinna passed with flying colors. The linens smelled fresh and the atmosphere was serene.",
    rating: 5,
    date: "1 month ago",
  },
  {
    id: "r13",
    author: "Anna K.",
    text: "Receptionist was very helpful and spoke good English. Made booking very easy via WhatsApp. The massage itself was heavenly.",
    rating: 5,
    date: "4 days ago",
  },
  {
    id: "r14",
    author: "Thomas B.",
    text: "Luxury experience for a reasonable price. Don't go to the expensive hotel spas, come here instead. You get the same quality for half the price.",
    rating: 5,
    date: "1 week ago",
  },
  {
    id: "r15",
    author: "Jessica L.",
    text: "After walking around IconSiam all day, the foot massage was exactly what I needed. Pure bliss. My legs feel brand new.",
    rating: 5,
    date: "2 days ago",
  },
  {
    id: "r16",
    author: "Mark S.",
    text: "Asked for strong pressure and the therapist actually delivered. Finally a real deep tissue massage that hits the right spots.",
    rating: 5,
    date: "3 weeks ago",
  },
  {
    id: "r17",
    author: "Laura M.",
    text: "This is my third time here during my trip. Consistent quality every time. I've tried Thai, Foot, and Oil massage, all were excellent.",
    rating: 5,
    date: "1 month ago",
  },
  {
    id: "r18",
    author: "Robert H.",
    text: "Very quiet and peaceful. Hard to believe it's in the middle of Sathorn. The music and lighting really help you disconnect.",
    rating: 5,
    date: "5 days ago",
  },
  {
    id: "r19",
    author: "Yumi T.",
    text: "Professional service from start to finish. Tea afterwards was a nice touch. I felt very taken care of.",
    rating: 5,
    date: "2 weeks ago",
  },
  {
    id: "r20",
    author: "Chris Evans",
    text: "Highly recommend the coconut oil massage. My skin felt amazing afterwards and not too greasy. Great for sunburn relief too.",
    rating: 5,
    date: "1 week ago",
  },
];

export const SERVICES: Service[] = getServices('en');