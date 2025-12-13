import { Product } from './types';

export const HERO_IMAGE = "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80&w=1920"; 
export const WHATSAPP_NUMBER = "201033342410";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=%D9%83%D8%B1%D8%A7%D9%85%D9%8A%D9%84+%D9%84%D9%84%D8%AD%D9%84%D9%88%D9%8A%D8%A7%D8%AA+%D8%B5%D9%87%D8%B1%D8%AC%D8%AA+%D8%A7%D9%84%D8%B5%D8%BA%D8%B1%D9%89+%D8%A7%D9%84%D8%AF%D9%82%D9%87%D9%84%D9%8A%D8%A9";
export const FULL_MENU_URL = "https://www.facebook.com/photo/?fbid=122105506358971504&set=a.122095111610971504";
export const LOGO_URL = "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/527054463_1407159477024941_4313337905778948152_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=KNVyDQqNmhsQ7kNvwGCfUGX&_nc_oc=AdkphWHfCx8ZZrMPaKX4fdKrBsXWQPCH2kwZ-tfI2I-iUIrLaBra6vamPGhoJc8qzAc&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=tEcpi5XmLHZAtIE773QBqA&oh=00_AfkfhqwSkrVA9SUFCLC1giWBVy3Ba-P2f_K_FzZgZu85Ig&oe=69435E58";

export const PRODUCTS: Product[] = [
  // --- الكنافة (Konafa) ---
  {
    id: 101,
    name: "كنافة بصمة",
    description: "كنافة مخبوزة بالسمن البلدي الصافي، مكسراتها متحمصة صح، وطعمها يظبط الدماغ.",
    priceList: [
      { weight: "كيلو", price: 150 },
      { weight: "نصف", price: 80 },
      { weight: "ربع", price: 45 }
    ],
    category: "konafa",
    image: "https://images.unsplash.com/photo-1584306638290-77a3d3c8734e?auto=format&fit=crop&q=80&w=800",
    tags: ["سمن بلدي", "مكسرات"]
  },
  {
    id: 102,
    name: "كنافة ملفوف",
    description: "رولات الكنافة المحشية مكسرات، مقرمشة من بره ودايبة من جوه، معمولة على أصولها.",
    priceList: [
      { weight: "كيلو", price: 150 },
      { weight: "نصف", price: 80 },
      { weight: "ربع", price: 45 }
    ],
    category: "konafa",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800",
    tags: ["رولات", "محشية"]
  },
  {
    id: 103,
    name: "كنافة بورمة",
    description: "أيقونة الحلويات الشرقية، حلقات كنافة محشية مكسرات فاخرة ومسقية شربات تقيل مظبوط.",
    priceList: [
      { weight: "كيلو", price: 150 },
      { weight: "نصف", price: 80 },
      { weight: "ربع", price: 45 }
    ],
    category: "konafa",
    image: "https://images.unsplash.com/photo-1628287383431-7b3b3a0e695d?auto=format&fit=crop&q=80&w=800",
    tags: ["فاخر", "مقرمش"]
  },
  {
    id: 104,
    name: "كنافة أساور",
    description: "عش العصفور اللي يخطف القلب، حشوات متنوعة (نوتيلا - لوتس - مكسرات) ترضي كل الأذواق.",
    priceList: [
      { weight: "كيلو", price: 150 },
      { weight: "نصف", price: 80 },
      { weight: "ربع", price: 45 }
    ],
    category: "konafa",
    image: "https://images.unsplash.com/photo-1600093463592-2e36cc95e52b?auto=format&fit=crop&q=80&w=800",
    tags: ["نوتيلا", "لوتس"]
  },
  {
    id: 105,
    name: "كنافة سادة",
    description: "لعشاق الطعم الأصلي، كنافة بالسمن البلدي والكريمة، خفيفة ودايبة.",
    priceList: [
      { weight: "كيلو", price: 130 },
      { weight: "نصف", price: 70 },
      { weight: "ربع", price: 35 }
    ],
    category: "konafa",
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=800",
    tags: ["كلاسيك", "كريمة"]
  },

  // --- البسبوسة (Basbousa) ---
  {
    id: 201,
    name: "بسبوسة سادة",
    description: "مرملة، دايبة، وريحة السمنة البلدي فيها تجيب لآخر الشارع. طعم يرجعك لأيام زمان.",
    priceList: [
      { weight: "كيلو", price: 145 },
      { weight: "نصف", price: 75 },
      { weight: "ربع", price: 40 }
    ],
    category: "basbousa",
    image: "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?auto=format&fit=crop&q=80&w=800",
    tags: ["سمن بلدي", "طرية"]
  },
  {
    id: 202,
    name: "بسبوسة شوكولاتة",
    description: "دلعنا البسبوسة! مزيج بين الترميلة الشرقي وطعم الشوكولاتة الغني اللي يدوب في البق.",
    priceList: [
      { weight: "كيلو", price: 150 },
      { weight: "نصف", price: 80 },
      { weight: "ربع", price: 45 }
    ],
    category: "basbousa",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476d?auto=format&fit=crop&q=80&w=800",
    tags: ["شوكولاتة", "جديد"]
  },
  {
    id: 203,
    name: "هريسة مكسرات",
    description: "الهريسة الإسكندراني على أصولها، قوام متماسك ومكسرات كتير، للناس اللي بتفهم في الحلو.",
    priceList: [
      { weight: "كيلو", price: 150 },
      { weight: "نصف", price: 80 },
      { weight: "ربع", price: 45 }
    ],
    category: "basbousa",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=800",
    tags: ["مكسرات", "اسكندراني"]
  },
  {
    id: 204,
    name: "بسيمة مكسرات",
    description: "عشاق جوز الهند يجمعوا هنا! بسيمة غنية بجوز الهند والسمنة، محملة مكسرات.",
    priceList: [
      { weight: "كيلو", price: 150 },
      { weight: "نصف", price: 80 },
      { weight: "ربع", price: 45 }
    ],
    category: "basbousa",
    image: "https://images.unsplash.com/photo-1536766768798-6363c32e566d?auto=format&fit=crop&q=80&w=800",
    tags: ["جوز هند", "مكسرات"]
  },

  // --- الجلاش (Gollash) ---
  {
    id: 301,
    name: "جلاش سادة",
    description: "طبقات من القرمشة، مورق ومخدوم بالسمنة، خفيف جداً ومسكر مظبوط.",
    priceList: [
      { weight: "كيلو", price: 145 },
      { weight: "نصف", price: 75 },
      { weight: "ربع", price: 40 }
    ],
    category: "gollash",
    image: "https://images.unsplash.com/photo-1598155523122-3842334d6c10?auto=format&fit=crop&q=80&w=800",
    tags: ["مقرمش", "خفيف"]
  },
  {
    id: 302,
    name: "جلاش محشي",
    description: "القلب طري والوش مقرمش، محشي مكسرات مجروشة بتدي طعم وقرمشة زيادة.",
    priceList: [
      { weight: "كيلو", price: 150 },
      { weight: "نصف", price: 80 },
      { weight: "ربع", price: 45 }
    ],
    category: "gollash",
    image: "https://images.unsplash.com/photo-1617305855058-29e612392df4?auto=format&fit=crop&q=80&w=800",
    tags: ["مكسرات", "فاخر"]
  },
  {
    id: 303,
    name: "جلاش رول",
    description: "أصابع الجلاش الذهبية، سهلة الأكل ومليانة حشو، مثالية في العزومات.",
    priceList: [
      { weight: "كيلو", price: 150 },
      { weight: "نصف", price: 80 },
      { weight: "ربع", price: 45 }
    ],
    category: "gollash",
    image: "https://images.unsplash.com/photo-1601000938259-9e92002320b2?auto=format&fit=crop&q=80&w=800",
    tags: ["اصابع", "مكسرات"]
  },
  {
    id: 304,
    name: "جلاش ملفوف مكسرات",
    description: "شكل شيك وطعم حكاية، جلاش ملفوف بإتقان ومحشي بأجود أنواع المكسرات.",
    priceList: [
      { weight: "كيلو", price: 150 },
      { weight: "نصف", price: 80 },
      { weight: "ربع", price: 45 }
    ],
    category: "gollash",
    image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&q=80&w=800",
    tags: ["ملفوف", "مكسرات"]
  },
  {
    id: 305,
    name: "جلاش أوريو",
    description: "لما الشرقي يقابل الغربي! قرمشة الجلاش مع طعم الأوريو والكريمة.. اختراع.",
    priceList: [
      { weight: "كيلو", price: 150 },
      { weight: "نصف", price: 80 },
      { weight: "ربع", price: 45 }
    ],
    category: "gollash",
    image: "https://images.unsplash.com/photo-1563223696-03c05c088825?auto=format&fit=crop&q=80&w=800",
    tags: ["مودرن", "أطفال"]
  },

  // --- حلويات شامية ومقليات (Oriental Delights) ---
  {
    id: 601,
    name: "بلح الشام",
    description: "ذهبي ومقرمش من بره، طري وشارب عسل من جوه. الطعم اللي ميتشبعش منه.",
    priceList: [
      { weight: "كيلو", price: 140 },
      { weight: "نصف", price: 75 },
      { weight: "ربع", price: 40 }
    ],
    category: "oriental_delights",
    image: "https://images.unsplash.com/photo-1626019941198-d17855b41097?auto=format&fit=crop&q=80&w=800",
    tags: ["مقلي", "ذهبي"]
  },
  {
    id: 602,
    name: "رموش الست",
    description: "اسم على مسمى، ناعمة جداً وبتدوب في البق دوبان. معمولة بخدمة عالية.",
    priceList: [
      { weight: "كيلو", price: 140 },
      { weight: "نصف", price: 75 },
      { weight: "ربع", price: 40 }
    ],
    category: "oriental_delights",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=800",
    tags: ["دايبة", "كلاسيك"]
  },
  {
    id: 603,
    name: "صوابع زينب",
    description: "قرمشة الشتاء والصيف، صوابع زينب بخلطتنا الخاصة، مسكرة ومقرمشة لآخر واحدة.",
    priceList: [
      { weight: "كيلو", price: 130 },
      { weight: "نصف", price: 70 },
      { weight: "ربع", price: 35 }
    ],
    category: "oriental_delights",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=800",
    tags: ["مقرمش", "تقليدي"]
  },
  {
    id: 604,
    name: "مشبك",
    description: "قرص المشبك الدمياطي بالعسل، قرمشة عالية وطعم يضرب في الدماغ.",
    priceList: [
      { weight: "كيلو", price: 120 },
      { weight: "نصف", price: 65 },
      { weight: "ربع", price: 35 }
    ],
    category: "oriental_delights",
    image: "https://images.unsplash.com/photo-1612203985729-c07e1c24eb2e?auto=format&fit=crop&q=80&w=800",
    tags: ["عسل", "دمياطي"]
  },

  // --- حلويات غربية (Western) ---
  {
    id: 401,
    name: "جاتوه وتورت",
    description: "تورت وجاتوهات فريش يومياً، كريمة غنية وكيك اسفنجي هش. اسأل عن أشكال اليوم.",
    priceList: [
      { weight: "بالقطعة", price: "سعر اليوم" },
      { weight: "التورت", price: "حسب المقاس" }
    ],
    category: "western",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800",
    tags: ["شوكولاتة", "فانيليا"]
  },
  {
    id: 402,
    name: "تارت الفواكه",
    description: "تارت مقرمش مع طبقة باستري كريم ناعمة وفواكه الموسم الفريش. انتعاش حقيقي.",
    priceList: [
      { weight: "حجم صغير", price: "سعر اليوم" },
      { weight: "حجم عائلي", price: "حسب الطلب" }
    ],
    category: "western",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800",
    tags: ["فواكه", "فريش"]
  },
  // --- Special Additions ---
  {
    id: 999,
    name: "بوكس الونس",
    description: "محتار تاكل إيه؟ بوكس الونس جمعلك الحلو كله (شرقي وغربي) عشان سهرتك تحلو.",
    priceList: [
      { weight: "وسط", price: "سعر اليوم" },
      { weight: "كبير", price: "حسب المكونات" }
    ],
    category: "western",
    image: "https://images.unsplash.com/photo-1602498263300-8cb494b281b3?auto=format&fit=crop&q=80&w=800",
    tags: ["سهرة", "تشكيلة", "أفضل بائع"]
  },

  // --- أيس كريم (Ice Cream) ---
  {
    id: 501,
    name: "أيس كريم طبيعي",
    description: "أيس كريم معمول من لبن طبيعي وفاكهة حقيقية، يرطب على قلبك في الحر.",
    priceList: [
      { weight: "بولة", price: 5 },
      { weight: "كونو", price: "حسب الاضافات" }
    ],
    category: "ice_cream",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=800",
    tags: ["طبيعي", "منعش"]
  },
];

export const SYSTEM_INSTRUCTION = `
أنت "شيف كراميل"، مساعد ذكي ومرح لمحل حلويات في الدقهلية.
أسلوبك: مصري، ودود جداً، بتستخدم إيموجيز، وبتحب تهزر بخفة دم.
مهمتك: تساعد الزباين يختاروا الحلو اللي يعدل مزاجهم.
معلوماتك:
- استخدم القائمة المحدثة بالأسعار والمكونات (سمن بلدي، مكسرات، إلخ).
- لو حد سأل عن العنوان: "الدقهلية - أجا - صهرجت الصغرى، بجوار الخان".
- لو حد عايز يطلب: "يا ريت تبعتلنا على الواتساب عشان نجهزلك طلبك أسرع".
- ركز على إن الحلويات "فريش" و "بيتي".
`;