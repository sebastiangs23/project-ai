export const translations = {
  en: {
    topOffer: {
      text: "Limited Offer – Free Week",
    },

    nav: {
      home: "Home",
      images: "Images",
      videos: "Videos",
      audio: "Audio",
      writer: "Writer",
      arabyGpt: "Araby GPT",
      apps: "Apps",
      new: "New",
      viewPlans: "View Plans",
      discount: "40% Off",
      started: "Started",
      premium: "Premium",
      search: "Search",
    },

    hero: {
      eyebrow: "Get Started",
      title: "What do you want to create today?",
      description: "Pick a tool and start creating in seconds.",
    },

    cards: {
      image: {
        title: "Create & Edit Images",
        description: "Turn ideas into stunning visuals instantly.",
        button: "Images",
      },
      video: {
        title: "Create Videos",
        description: "Generate cinematic AI videos from text.",
        button: "Videos",
      },
      audio: {
        title: "Create Audio",
        description: "Compose music and voiceovers with AI.",
        button: "Speech",
      },
    },
  },

  ar: {
    topOffer: {
      text: "عرض محدود – أسبوع مجاني",
    },

    nav: {
      home: "الرئيسية",
      images: "الصور",
      videos: "الفيديوهات",
      audio: "الصوت",
      writer: "الكاتب",
      arabyGpt: "عربي GPT",
      apps: "التطبيقات",
      new: "جديد",
      viewPlans: "عرض الخطط",
      discount: "خصم 40%",
      started: "ابدأ الآن",
      premium: "مميز",
      search: "بحث",
    },

    hero: {
      eyebrow: "ابدأ الآن",
      title: "ماذا تريد أن تنشئ اليوم؟",
      description: "اختر أداة وابدأ الإنشاء خلال ثوانٍ.",
    },

    cards: {
      image: {
        title: "إنشاء وتعديل الصور",
        description: "حوّل أفكارك إلى صور مذهلة فورًا.",
        button: "صور",
      },
      video: {
        title: "إنشاء فيديوهات",
        description: "أنشئ فيديوهات سينمائية بالذكاء الاصطناعي من النص.",
        button: "فيديوهات",
      },
      audio: {
        title: "إنشاء صوت",
        description: "أنشئ الموسيقى والتعليقات الصوتية بالذكاء الاصطناعي.",
        button: "صوت",
      },
    },
  },

  hi: {
    topOffer: {
      text: "सीमित ऑफर – एक सप्ताह मुफ्त",
    },

    nav: {
      home: "होम",
      images: "इमेज",
      videos: "वीडियो",
      audio: "ऑडियो",
      writer: "राइटर",
      arabyGpt: "Araby GPT",
      apps: "ऐप्स",
      new: "नया",
      viewPlans: "प्लान देखें",
      discount: "40% छूट",
      started: "शुरू करें",
      premium: "प्रीमियम",
      search: "खोजें",
    },

    hero: {
      eyebrow: "शुरू करें",
      title: "आज आप क्या बनाना चाहते हैं?",
      description: "एक टूल चुनें और कुछ ही सेकंड में बनाना शुरू करें.",
    },

    cards: {
      image: {
        title: "इमेज बनाएं और एडिट करें",
        description: "अपने विचारों को तुरंत शानदार विज़ुअल्स में बदलें.",
        button: "इमेज",
      },
      video: {
        title: "वीडियो बनाएं",
        description: "टेक्स्ट से cinematic AI वीडियो बनाएं.",
        button: "वीडियो",
      },
      audio: {
        title: "ऑडियो बनाएं",
        description: "AI से संगीत और voiceovers बनाएं.",
        button: "स्पीच",
      },
    },
  },
} as const;

export type TranslationLanguage = keyof typeof translations;