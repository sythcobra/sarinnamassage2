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
      name: isThai ? "นวดแผนไทย" : "Thai Massage",
      description: isThai 
        ? "ศาสตร์การรักษาแบบโบราณที่ช่วยปรับสมดุลร่างกายและพลังงานด้วยการกดจุดและยืดเหยียด" 
        : "Traditional ancient healing therapy using acupressure and stretching to balance body and energy.",
      price60: 499,
      price90: 699,
      price120: 899,
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
      price120: 1099,
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
    {
      id: "neck_shoulder_foot",
      name: isThai ? "นวดคอ บ่า ไหล่ และเท้า" : "Neck, Shoulder and Foot Massage",
      description: isThai
        ? "การผสมผสานที่ลงตัวสำหรับการผ่อนคลายความตึงเครียดจากการทำงานของร่างกายส่วนบนและเท้า"
        : "The perfect combination treatment to relieve upper body tension from office work and tired feet.",
      price60: 599,
      price90: 849,
      stats: {
        relaxation: 8,
        pressure: 7,
        healthFocus: isThai ? ["ออฟฟิศซินโดรม", "ผ่อนคลายครบวงจร"] : ["Office Syndrome", "Total Relief"],
      },
    },
    {
      id: "sarinna_sig",
      name: isThai ? "สารินนา ซิกเนเจอร์ (แรงปานกลาง)" : "Sarinna Signature Massage (Medium Pressure)",
      description: isThai
        ? "เอกลักษณ์เฉพาะของสารินนา ผสมผสานเทคนิคตะวันออกและตะวันตก เน้นแรงกดปานกลางเพื่อความผ่อนคลายสูงสุด"
        : "Our unique signature blend combining Eastern and Western techniques, focusing on medium pressure for optimal balance.",
      price60: 799,
      price90: 1149,
      price120: 1499,
      stats: {
        relaxation: 9,
        pressure: 5,
        healthFocus: isThai ? ["สมดุลร่างกาย", "คลายเครียด", "ฟื้นฟู"] : ["Body Balance", "De-stress", "Revitalize"],
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
      price120: 1749,
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
      price120: 1299,
      stats: {
        relaxation: 10,
        pressure: 3,
        healthFocus: isThai ? ["คลายเครียด", "สุขภาพผิว", "นอนหลับสบาย"] : ["Stress Relief", "Skin Health", "Better Sleep"],
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
      price120: 1499,
      stats: {
        relaxation: 9,
        pressure: 5,
        healthFocus: isThai ? ["ผิวพรรณ", "ชุ่มชื้น", "ผ่อนคลาย"] : ["Skin Hydration", "Glowing Skin", "Relaxation"],
      },
    },
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
      name: isThai ? "นวดเท้า (เพิ่มเติม)" : "Foot Massage (Additional Service)",
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

export const SERVICES: Service[] = getServices('en');