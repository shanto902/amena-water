import { TranslationSchema } from "@/types";

export const translations: Record<"bn" | "en", TranslationSchema> = {
  bn: {
    nav: {
      home: "মূলপাতা",
      about: "আমাদের কথা",
      products: "পণ্যসমূহ",
      parameters: "বৈশিষ্ট্য ও মান",
      batteryGuide: "ব্যাটারি পরিচর্যা",
      calculator: "বিশুদ্ধতা ক্যালকুলেটর",
      team: "আমাদের টিম",
      faq: "প্রশ্নোত্তর",
      contact: "যোগাযোগ",
      callNow: "কল করুন",
      switchLang: "English",
    },
    hero: {
      badge: "🔬 বুয়েট পরীক্ষিত • ৭ স্তরের নিউক্লিয়ার মিডিয়া পরিশোধন",
      titleLine1: "বিশ্বমানের ডিমিনারেলাইজড পানি",
      titleLine2: "দীর্ঘস্থায়ী ব্যাটারি ও যন্ত্রাংশের নিশ্চয়তা",
      description:
        "আমেনা™ উৎপাদন করে সম্পূর্ণ খনিজ ও ব্যাকটেরিয়ামুক্ত ল্যাবরেটরি গ্রেড ডি এম ওয়াটার। অটোরিকশা, কার, সোলার এবং আইপিএস ব্যাটারির আয়ু বৃদ্ধি করতে শতভাগ বিশ্বস্ত ও বিজ্ঞানসম্মত সমাধান।",
      primaryCta: "পণ্যসমূহ দেখুন",
      secondaryCta: "ব্যাটারি পরিচর্যা গাইড",
      stats: {
        stat1Value: "< ১ ppm",
        stat1Label: "অতি-বিশুদ্ধ টিডিএস (TDS)",
        stat2Value: "৭ স্তর",
        stat2Label: "নিউক্লিয়ার মিডিয়া পরিশোধন",
        stat3Value: "২+ কোটি",
        stat3Label: "বাংলাদেশের ব্যাটারিতে উপযোগী",
        stat4Value: "১০০%",
        stat4Label: "মিনারেল ও ব্যাকটেরিয়ামুক্ত",
      },
    },
    about: {
      tag: "আমাদের গল্প ও লক্ষ্য",
      title: "কেন আমেনা™ ডি এম ওয়াটার অনন্য?",
      subtitle: "সঠিক ডিমিনারেলাইজড পানির মাধ্যমে দেশের কোটি কোটি ব্যাটারির আয়ু রক্ষা করা",
      leadParagraph:
        "বাংলাদেশে প্রায় ২০ লক্ষ ইজিবাইক ও বৈদ্যুতিক রিকশায় রয়েছে প্রায় ১ কোটি ব্যাটারি। এছাড়া ৪০ লক্ষাধিক গাড়ি, ৪০ লক্ষ সোলার হোম সিস্টেম, বাসার আইপিএস ও জেনারেটরে ব্যবহৃত হচ্ছে ২ কোটিরও বেশি লেড-এসিড ব্যাটারি।",
      story1:
        "আমাদের ব্যবসা শুরুর পূর্বে পুরো বাজার নিম্নমানের অনির্ভরযোগ্য ব্যাটারি পানিতে পূর্ণ ছিল। সাধারণ ভোক্তা ও চালক ভাইয়েরা জানতেন না যে অপদ্রব্যযুক্ত সাধারণ পানি ব্যাটারির প্লেট দ্রুত নষ্ট করে দেয় এবং ব্যাটারির আয়ু অর্ধেকে নামিয়ে আনে।",
      story2:
        "ভোক্তাদের সঠিক বিজ্ঞানসম্মত সমাধান দেওয়া এবং সচেতনতা সৃষ্টি করতেই আমেনা™ এর যাত্রা শুরু। ২ জন অভিজ্ঞ স্নাতক প্রকৌশলীর সার্বক্ষণিক তত্ত্বাবধানে ৭ টি স্তরে বিশেষায়িত নিউক্লিয়ার মিডিয়া ব্যবহার করে আন্তর্জাতিক মানের ডিএম ওয়াটার উৎপাদন করা হচ্ছে।",
      buetBadge: "বুয়েট (BUET) মান উত্তীর্ণ",
      buetText:
        "বাংলাদেশ প্রকৌশল বিশ্ববিদ্যালয় (BUET) ল্যাবরেটরিতে রাসায়নিকভাবে পরীক্ষিত ও আন্তর্জাতিক ডিমিনারেলাইজড স্ট্যান্ডার্ড অনুযায়ী প্রমাণিত।",
      stagesTitle: "৭ স্তরের অত্যাধুনিক পরিশোধন প্রক্রিয়া",
      stagesDesc:
        "সেডিমেন্ট ফিল্ট্রেশন, অ্যাক্টিভেটেড কার্বন, রিভার্স অসমোসিস, ক্যাটায়ন-অ্যানায়ন রেজিন, নিউক্লিয়ার-গ্রেড মিক্সড বেড ডি-আয়নাইজেশন এবং আল্ট্রাভায়োলেট (UV) স্টেরিলাইজেশন।",
      features: [
        {
          title: "জিরো মিনারেল নিশ্চয়তা",
          desc: "ক্যালসিয়াম, ম্যাগনেসিয়াম, আয়রন, আর্সেনিক বা ক্ষতিকর লবণের লেশমাত্র নেই।",
        },
        {
          title: "ব্যাটারির আয়ু বৃদ্ধি",
          desc: "প্লেটে সালফেটের স্থায়ী স্তর জমা রোধ করে ব্যাটারির কার্যকর আয়ু দ্বিগুণ পর্যন্ত বাড়ায়।",
        },
        {
          title: "ইউভি ট্রিটেড স্টেরিলাইজেশন",
          desc: "পানি সম্পূর্ণ জীবাণু ও শৈবালমুক্ত রাখতে উন্নত আল্ট্রাভায়োলেট রশ্মি প্রয়োগ।",
        },
        {
          title: "ইঞ্জিন ও রেডিয়েটর সুরক্ষা",
          desc: "রেডিয়েটর পাইপে কোনো খনিজ আবরণ জমে না, ফলে ইঞ্জিন ওভারহিটিং রোধ হয়।",
        },
      ],
    },
    products: {
      tag: "আমাদের পণ্যসম্ভার",
      title: "আমেনা™ বিশেষায়িত পানি ও কেমিক্যাল সলিউশন",
      subtitle: "প্রতিটি পণ্য আন্তর্জাতিক মানদণ্ড ও নিজস্ব ল্যাবরেটরি টেস্ট মেনে বাজারজাত করা হয়",
      viewSpecs: "স্পেসিফিকেশন দেখুন",
      orderInquiry: "অর্ডার ও পাইকারি অনুসন্ধান",
      allProducts: "সকল পণ্য",
      items: [
        {
          id: "dm-water",
          name: "আমেনা ডি এম ওয়াটার (amena DM Water)",
          tagline: "ল্যাবরেটরি ও ইন্ডাস্ট্রিয়াল গ্রেড আল্ট্রা-পিওর পানি",
          description:
            "সম্পূর্ণরূপে খনিজ মুক্ত ও জীবাণুমুক্ত বিশেষায়িত পানি। ফার্মাসিউটিক্যালস, কেমিক্যাল ল্যাব, ইলেকট্রনিক্স ম্যানুফ্যাকচারিং এবং প্রিমিয়াম শিল্প প্রতিষ্ঠানে ব্যবহারের জন্য অনুমোদিত।",
          features: [
            "টিডিএস (TDS) < ১ mg/L",
            "কন্ডাক্টিভিটি < ১ μS/cm",
            "পিএইচ মান ৬.৮ - ৭.০",
            "নিউক্লিয়ার মিডিয়া ফিল্টার্ড",
          ],
          specs: [
            { label: "বিশুদ্ধতা", value: "৯৯.৯৯৯%" },
            { label: "গ্রেড", value: "ল্যাবরেটরি ও ইন্ডাস্ট্রিয়াল" },
            { label: "জীবাণুমুক্তকরণ", value: "UV স্টেরিলাইজড" },
          ],
          packaging: ["৫ লিটার জার", "২০ লিটার ড্রাম", "১০০০ লিটার আইবিসি ট্যাংক"],
          applications: ["ওষুধ ও প্রসাধন শিল্প", "কেমিক্যাল ল্যাব", "টেক্সটাইল ডায়িং", "ইলেকট্রনিক্স"],
          badge: "ফ্ল্যাগশিপ পণ্য",
          popular: true,
        },
        {
          id: "battery-water",
          name: "আমেনা ব্যাটারি পানি (amena Battery-Water)",
          tagline: "ইজিবাইক, গাড়ি, আইপিএস ও সোলার ব্যাটারির সেরা বন্ধু",
          description:
            "লেড এসিড ব্যাটারির জন্য বিশেষভাবে তৈরি শতভাগ খনিজশূন্য পানি। ব্যাটারি চার্জিং-ডিসচার্জিং চলাকালীন বাষ্পীভূত হওয়া পানির ঘাটতি পূরণে একমাত্র নির্ভরযোগ্য উপাদান।",
          features: [
            "টিডিএস মান ০-১ ppm",
            "সেল প্লেটের ক্ষয় রোধ করে",
            "ব্যাটারির ব্যাকআপ সময় বৃদ্ধি করে",
            "সালফেট স্তর সহজে দ্রবীভূত রাখে",
          ],
          specs: [
            { label: "অনুপযুক্ত মিনারেল", value: "০% (সম্পূর্ণ অনুপস্থিত)" },
            { label: "উপযোগী", value: "সকল প্রকার লেড-এসিড সেল" },
            { label: "পরীক্ষা", value: "বুয়েট টেস্টেড" },
          ],
          packaging: ["১ লিটার পেট বোতল", "৫ লিটার গ্যালন", "২০ লিটার জার"],
          applications: ["ইজিবাইক ও রিকশা", "প্রাইভেট কার ও বাস-ট্রাক", "বাসার IPS ব্যাটারি", "সোলার হোম সিস্টেম"],
          badge: "সর্বাধিক বিক্রিত",
          popular: true,
        },
        {
          id: "electrolyte",
          name: "আমেনা লিড এসিড ব্যাটারি ইলেক্ট্রোলাইট",
          tagline: "সঠিক অনুপাতের সালফিউরিক এসিড ও ডিএম ওয়াটার দ্রবণ",
          description:
            "নতুন ব্যাটারির ইনিশিয়াল চার্জিং ও প্রস্তুতকরণের জন্য ৩ : ১ মাত্রার আদর্শ ইলেক্ট্রোলাইট মিশ্রণ। সঠিক আপেক্ষিক গুরুত্ব (Specific Gravity) নিশ্চিত করে দীর্ঘস্থায়ী চার্জ ধারণক্ষমতা দেয়।",
          features: [
            "নির্ভুল ৩:১ অনুপাত মিশ্রণ",
            "উচ্চমানের সালফিউরিক এসিড ও ডিএম ওয়াটার",
            "সেল শর্ট-সার্কিট প্রতিরোধক",
            "ফ্যাক্টরি সিল্ড নিরাপদ প্যাকেজিং",
          ],
          specs: [
            { label: "অনুপাত", value: "৩ অংশ ডিএম ওয়াটার : ১ অংশ H2SO4" },
            { label: "আপেক্ষিক গুরুত্ব", value: "১.২৪০ - ১.২৮০ (২৫°C)" },
            { label: "ব্যবহার", value: "ড্রাই চার্জড ব্যাটারির প্রথম প্রস্তুতি" },
          ],
          packaging: ["৫ লিটার জার", "২০ লিটার ক্যানিস্টর"],
          applications: ["নতুন ব্যাটারি চালুকরণ", "ব্যাটারি সার্ভিসিং ওয়ার্কশপ", "শিল্প কারখানা"],
        },
        {
          id: "cooling-water",
          name: "আমেনা ইঞ্জিন কুলিং ওয়াটার (Cooling Water)",
          tagline: "গাড়ির রেডিয়েটরের জন্য ক্ষয়রোধী বিশুদ্ধ কুল্যান্ট পানি",
          description:
            "রেডিয়েটরের সরু পাইপে কোনো লবণ বা আয়রন স্কেল জমতে না দিয়ে ইঞ্জিনের তাপমাত্রা নিয়ন্ত্রণে রাখে। কুল্যান্ট কেমিক্যালের সাথে মিশিয়ে ব্যবহারের জন্য সবচেয়ে নিরাপদ ও কার্যক্ষম।",
          features: [
            "রেডিয়েটর পাইপ ব্লক হওয়া রোধ করে",
            "ইঞ্জিন ওভারহিটিং ঝুঁকি কমায়",
            "মিনারেল স্কেল মুক্ত সার্কুলেশন",
            "অ্যান্টি-ফ্রিজ ও কুল্যান্ট উপযোগী",
          ],
          specs: [
            { label: "স্কেলিং উপাদান", value: "০ মিলিগ্রাম/লিটার" },
            { label: "থার্মাল কনডাক্টিভিটি", value: "আদর্শ" },
            { label: "উপযোগী ইঞ্জিন", value: "পেট্রোল, ডিজেল ও সিএনজি" },
          ],
          packaging: ["১ লিটার বোতল", "৫ লিটার গ্যালন"],
          applications: ["প্রাইভেট কার ও এসইউভি", "ভারী বাস ও ট্রাক", "জেনারেটর কুলিং সিস্টেম", "কৃষি পাম্প"],
        },
        {
          id: "rinsing-water",
          name: "আমেনা রিন্সিং ওয়াটার (Rinsing Water)",
          tagline: "দাগহীন ও অবশিষ্টাংশহীন নির্ভুল ওয়াশিং সলিউশন",
          description:
            "কাচ, ল্যাবরেটরি গ্লাসওয়্যার, সেমিকন্ডাক্টর বোর্ড এবং প্রিন্টেড সার্কিট ক্লিন করার জন্য আল্ট্রা-পিওর রিন্সিং পানি। শুকানোর পর কোনো প্রকার সাদা দাগ বা মিনারেল স্পট থাকে না।",
          features: [
            "শুকানোর পর দাগ বা স্পট শূন্য",
            "কন্ডাক্টিভিটি মুক্ত ওয়াশিং",
            "মাইক্রো-পার্টিকেল ফিল্টার্ড",
            "নির্ভুল ল্যাবরেটরি ফলাফল",
          ],
          specs: [
            { label: "টোটাল সলিডস (TS)", value: "< ১ mg/L" },
            { label: "উপযোগিতা", value: "হাই-প্রেসিশন ইলেকট্রনিক্স ও গ্লাস" },
            { label: "ফিল্ট্রেশন", value: "০.২ মাইক্রন সাইজ" },
          ],
          packaging: ["৫ লিটার জার", "২০ লিটার ক্যান"],
          applications: ["সৌর প্যানেল ক্লিনিং", "ল্যাবরেটরি গ্লাসওয়্যার", "ইলেকট্রনিক্স পিসিবি", "অপটিক্যাল লেন্স"],
        },
        {
          id: "rose-water",
          name: "আমেনা গোলাপজল - প্রাকৃতিক (Rose Water)",
          tagline: "১০০% প্রাকৃতিক গোলাপের নির্যাস ও ডিএম পানি সংমিশ্রণ",
          description:
            "বিশুদ্ধ প্রাকৃতিক গোলাপের পাপড়ির সুগন্ধি ডিস্টিলেট। কোনো কৃত্রিম কেমিক্যাল, বিষাক্ত প্রিজারভেটিভ বা ক্ষতিকর রঙ ছাড়া ঐতিহ্যবাহী ডিস্টিলেশন প্রক্রিয়ায় প্রস্তুত।",
          features: [
            "শতভাগ ভেষজ ও প্রাকৃতিক",
            "ত্বকের পিএইচ ভারসাম্য রক্ষা করে",
            "মিষ্টান্ন ও রূপচর্চায় সম্পূর্ণ নিরাপদ",
            "প্রাকৃতিক সুরভিত শীতলতা",
          ],
          specs: [
            { label: "উপাদান", value: "গোলাপের বিশুদ্ধ নির্যাস + ডিএম পানি" },
            { label: "কৃত্রিম রঙ", value: "০%" },
            { label: "ব্যবহারযোগ্যতা", value: "ত্বকের যত্ন ও খাদ্যসামগ্রী" },
          ],
          packaging: ["১০০ মি.লি স্প্রে", "২৫০ মি.লি বোতল", "৫০০ মি.লি বোতল"],
          applications: ["ফেস টোনার ও রূপচর্চা", "মিষ্টি ও রন্ধনশিল্প", "ধর্মীয় ও সামাজিক অনুষ্ঠান"],
          badge: "১০০% প্রাকৃতিক",
        },
      ],
    },
    parameters: {
      tag: "ল্যাবরেটরি স্ট্যান্ডার্ড",
      title: "আমেনা™ পানির প্রযুক্তিগত পরামিতি (Parameters)",
      subtitle: "সর্বাধুনিক বৈজ্ঞানিক পরীক্ষা ও নিয়মিত কোয়ালিটি কনট্রোল দ্বারা প্রমাণিত বিশুদ্ধতা",
      purityGuarantee: "শূন্য ক্ষতিকর উপাদান নিশ্চয়তা",
      purityDesc:
        "সাধারণ সরবরাহ করা পানিতে থাকে দ্রবীভূত ক্যালসিয়াম, ম্যাগনেসিয়াম, লবণ ও আয়রন। আমেনা™ পানিতে এই উপাদানগুলো সম্পূর্ণ নিষ্কাশিত হয়ে শূন্যের কোঠায় নেমে আসে।",
      items: [
        {
          id: "tds",
          name: "টি.ডি.এস (TDS)",
          value: "< ১",
          unit: "mg/L (ppm)",
          description: "টোটাল ডিসল্ভড সলিডস। পানিতে দ্রবীভূত অজৈব লবণের পরিমাণ নির্দেশ করে।",
          standard: "আদর্শ মান: < ৫ ppm (আমেনা পানি: < ১ ppm)",
          icon: "Gauge",
        },
        {
          id: "conductivity",
          name: "কন্ডাক্টিভিটি (Conductivity)",
          value: "< ১",
          unit: "μS/cm (২৫°C)",
          description: "বৈদ্যুতিক পরিবাহিতা। খনিজহীন পানি বিদ্যুৎ পরিবাহী নয়, যা শর্ট-সার্কিট মুক্ত রাখে।",
          standard: "আদর্শ মান: < ৫ μS/cm (আমেনা পানি: < ১ μS/cm)",
          icon: "Zap",
        },
        {
          id: "ph",
          name: "পি.এইচ (pH)",
          value: "৬.৮ - ৭.০",
          unit: "নিরপেক্ষ মাত্রা",
          description: "পানির অম্লত্ব ও ক্ষারত্বের ভারসাম্য। রাসায়নিকভাবে সম্পূর্ণ ভারসাম্যপূর্ণ ও ক্ষতিকর প্রভাবমুক্ত।",
          standard: "আদর্শ মান: ৬.৫ - ৭.৫",
          icon: "Activity",
        },
        {
          id: "ts",
          name: "টি.এস (Total Solids)",
          value: "< ১",
          unit: "mg/L (ppm)",
          description: "পানির মোট কঠিন কণার পরিমাণ। বাষ্পীভবনের পরেও কোনো অবশেষ লবণ থাকে না।",
          standard: "আদর্শ মান: < ১০ ppm",
          icon: "Layers",
        },
        {
          id: "uv",
          name: "ইউ ভি ট্রিটমেন্ট (UV Treated)",
          value: "১০০%",
          unit: "জীবাণুমুক্ত",
          description: "আল্ট্রাভায়োলেট রশ্মি প্রক্রিয়াকরণ যা পানিতে কোনো ব্যাকটেরিয়া বা শৈবাল জন্মাতে দেয় না।",
          standard: "ক্লিনিক্যাল ল্যাব স্ট্যান্ডার্ড",
          icon: "Sun",
        },
      ],
      comparison: {
        title: "পানির গুণমান তুলনামূলক চিত্র (TDS এর মাত্রা)",
        tapWater: "সাধারণ নলকূপের পানি (২৫০-৬০০ ppm)",
        marketWater: "বাজারের সাধারণ 'ব্যাটারি পানি' (২০-৮০ ppm)",
        amenaWater: "আমেনা™ ডি এম ওয়াটার (< ১ ppm)",
      },
    },
    batteryGuide: {
      tag: "কারিগরি তথ্য ও গাইড",
      title: "লেড-এসিড ব্যাটারির যত্ন ও রসায়ন",
      subtitle: "সঠিক পানি নির্বাচন কেন আপনার ব্যাটারির আয়ু দ্বিগুণ করতে পারে?",
      electroIntro:
        "ব্যাটারি একটি ইলেক্ট্রোকেমিক্যাল ডিভাইস যেখানে রাসায়নিক শক্তি বিদ্যুৎ শক্তিতে রূপান্তরিত হয়। ব্যাটারির অভ্যন্তরে সীসা এবং সালফিউরিক এসিডের বিক্রিয়ায় ইলেকট্রন প্রবাহিত হয়।",
      chemicalFormula: "Pb + PbO₂ + 2H₂SO₄ ⇄ 2PbSO₄ + 2H₂O",
      chemicalExplainer:
        "ডিসচার্জের সময় সালফিউরিক এসিড সালফেটে রূপ নিয়ে প্লেটে জমে। রিচার্জের সময় এই সালফেট আবার সালফিউরিক এসিডে পরিণত হয়। কিন্তু পানিতে ক্ষতিকর খনিজ থাকলে তা প্লেটে স্থায়ী স্কেল তৈরি করে, যা রিচার্জেও আর অপসারিত হয় না।",
      partsTitle: "লেড এসিড ব্যাটারির প্রধান ৩টি অংশ",
      anodeTitle: "১. অ্যানোড (Pb) - নেগেটিভ টার্মিনাল",
      anodeDesc:
        "এর উপাদান নরম ও স্পঞ্জি সীসা বা লিড (Pb)। প্লেট আকারে স্তরে স্তরে সাজানো থাকে এবং নেগেটিভ টার্মিনালে সংযুক্ত থাকে।",
      cathodeTitle: "২. ক্যাথোড (PbO₂) - পজিটিভ টার্মিনাল",
      cathodeDesc:
        "এর উপাদান লিড-পারঅক্সাইড (PbO₂) বা শঙ্করসীসা, যা অ্যানোডের চেয়ে তুলনামূলক শক্ত এবং পজিটিভ টার্মিনালে সংযুক্ত থাকে।",
      electrolyteTitle: "৩. ইলেক্ট্রোলাইট (3H₂O + H₂SO₄)",
      electrolyteDesc:
        "পানি ও সালফিউরিক এসিডের ৩:১ মাত্রার তরল দ্রবণ। তাপের কারণে শুধু পানি বাষ্পীভূত হয়, এসিডের পরিমাণ একই থাকে। তাই ঘাটতি পূরণে শুধুই বিশুদ্ধ ডিএম ওয়াটার দেওয়া বাধ্যতামূলক।",
      radiatorTitle: "রেডিয়েটরে ডিএম পানির অপরিহার্যতা",
      radiatorDesc:
        "গাড়ির ইঞ্জিনের তাপমাত্রা কমাতে রেডিয়েটরে পানি ব্যবহৃত হয়। সাধারণ পানি দিলে পানি বাষ্পীভূত হলেও ভেতরের খনিজগুলো পাইপের গায়ে আটকে সরু পথ বন্ধ করে দেয়। ফলে ইঞ্জিন ঠিকমতো ঠান্ডা হতে না পেরে ব্রেকডাউন ঘটে। আমেনা ডিএম ওয়াটার ব্যবহারে এই ঝুঁকি শূন্য শতাংশ।",
      whyAmenaTitle: "আমেনা™ কেন সবার চেয়ে নিরাপদ?",
      whyAmenaDesc:
        "আমেনা ডি এম ওয়াটার ২ জন অভিজ্ঞ স্নাতক প্রকৌশলীর সার্বক্ষণিক তত্ত্বাবধানে ৭ টি স্তরে বিশেষায়িত নিউক্লিয়ার মিডিয়া ব্যবহার করে তৈরি হয়, যা বুয়েট পরীক্ষিত। বাজারে প্রচলিত বোতলজাত অখ্যাত পানির চেয়ে শতভাগ নির্ভরযোগ্য।",
    },
    calculator: {
      tag: "ইন্টারেক্টিভ সিমুলেটর",
      title: "ব্যাটারি পানি বিশুদ্ধতা ক্যালকুলেটর",
      subtitle: "আপনি ব্যাটারিতে কোন পানি ব্যবহার করছেন এবং তার ফলে ব্যাটারির কী অবস্থা হচ্ছে?",
      selectLabel: "ব্যবহারকৃত পানির ধরন নির্বাচন করুন:",
      batteryTypeLabel: "আপনার অ্যাপ্লিকেশনের ধরন:",
      resultTitle: "ফলাফল বিশ্লেষণ",
      tdsLabel: "পানির আনুমানিক টিডিএস:",
      estimatedLifeLabel: "ব্যাটারির আনুমানিক আয়ুষ্কাল:",
      riskLevelLabel: "প্লেট ড্যামেজ ও ক্ষতির ঝুঁকি:",
      recommendationLabel: "আমাদের কারিগরি পরামর্শ:",
    },
    team: {
      tag: "নেতৃত্ব ও দর্শন",
      title: "আমরা শুধু দল নই... আমরা পরিবার",
      subtitle: "অভিজ্ঞ প্রকৌশলীদের নিবিড় পরিচালনায় পরিচালিত একটি বিশ্বস্ত উদ্যোগ",
      members: [
        {
          name: "ইঞ্জিনিয়ার মোঃ আক্কাছ আলী",
          role: "চেয়ারম্যান",
          qualification: "অবসরপ্রাপ্ত নির্বাহী প্রকৌশলী (বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ড - BPDB)",
          bio: "পাওয়ার সেক্টরে দীর্ঘ ৩৫+ বছরের প্রকৌশল অভিজ্ঞতা। বিদ্যুৎ উৎপাদন, রূপান্তর এবং ইলেক্ট্রোকেমিক্যাল সল্যুশনে গভীর বিশেষজ্ঞ জ্ঞানের ধারক।",
          avatarPlaceholder: "AA",
        },
        {
          name: "মোঃ আতিয়ার আলী শুভ্র",
          role: "পরিচালক",
          qualification: "বি.এসসি ইন ইলেকট্রিক্যাল অ্যান্ড ইলেকট্রনিক ইঞ্জিনিয়ারিং (EEE)",
          bio: "পণ্য উৎপাদন প্রযুক্তি, ওয়াটার প্ল্যান্ট অপারেশন এবং কোয়ালিটি নিশ্চিতকরণ প্রক্রিয়ার সার্বক্ষণিক কারিগরি তত্বাবধায়ক।",
          avatarPlaceholder: "AS",
        },
        {
          name: "আশিক আলী শান্ত",
          role: "পরিচালক (তথ্য প্রযুক্তি)",
          qualification: "সফটওয়্যার ও আইটি স্পেশালিস্ট",
          bio: "আমেনা™ এর ডিজিটাল রূপান্তর, সাপ্লাই চেইন নেটওয়ার্কিং এবং গ্রাহক সেবা আধুনিকায়নে নিবেদিত।",
          avatarPlaceholder: "AAS",
        },
      ],
    },
    faq: {
      tag: "সাধারণ জিজ্ঞাসা",
      title: "প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী (FAQ)",
      subtitle: "ডিমিনারেলাইজড পানি এবং ব্যাটারি রক্ষণাবেক্ষণ সংক্রান্ত প্রয়োজনীয় তথ্যাবলী",
      items: [
        {
          question: "ডি এম (DM) অথবা ডি আই (DI) ওয়াটার কি?",
          answer:
            "DM মানে Demineralized এবং DI মানে Deionized। মূলত এই দুই ধরণের পানিই এক। এর অর্থ এমন এক বিশুদ্ধ পানি যাতে কোনো ধরণের খনিজ পদার্থ (Minerals) বা দ্রবীভূত ক্ষতিকর আয়ন নেই। এটি শতভাগ H₂O অণু সমৃদ্ধ।",
        },
        {
          question: "ডি এম ওয়াটার কি পান করা যায়?",
          answer:
            "ডিমিনারেলাইজড পানিতে কোনো বিষাক্ত উপাদান নেই, ফলে এটি দুর্ঘটনাবশত পান করলে ক্ষতি নেই। তবে এতে শরীরের জন্য প্রয়োজনীয় খনিজ উপাদান থাকে না, তাই নিয়মিত পানীয় জল হিসেবে এটি পান করা অনুচিত। চিকিৎসকরা বিশেষ প্রয়োজনে স্যালাইন গুলে খাওয়ার পরামর্শ দিয়ে থাকেন।",
        },
        {
          question: "ব্যাটারিতে সাধারণ ফিল্টারের বা নলকূপের পানি দিলে কী ক্ষতি হয়?",
          answer:
            "নলকূপ বা সাধারণ ফিল্টারের পানিতে ক্যালসিয়াম, ম্যাগনেসিয়াম ও আয়রন থাকে। ব্যাটারির ভেতর এগুলো ইলেক্ট্রোলাইটের সাথে বিক্রিয়া করে সিসার প্লেটের ওপর স্থায়ী সাদা আবরণে জমাট বাঁধে (Sulfation/Scaling)। এর ফলে ব্যাটারির ব্যাকআপ সময় দ্রুত কমে যায় এবং ব্যাটারি অকালে নষ্ট হয়ে যায়।",
        },
        {
          question: "ডি এম ওয়াটার কোথায় কোথায় ব্যবহার করা হয়?",
          answer:
            "সম্পূর্ণ খনিজ ও জীবাণুমুক্ত হওয়ায় এটি লেড-এসিড ব্যাটারি, গাড়ির রেডিয়েটর, ওষুধ প্রস্তুতকারক কোম্পানি, কেমিক্যাল ল্যাবরেটরি, প্রসাধনী প্রস্তুতকরণ, ইলেকট্রনিক্স সার্কিট ধোয়া এবং ইন্ডাস্ট্রিয়াল বয়লারে বহুল ব্যবহৃত হয়।",
        },
        {
          question: "আমেনা™ ডি এম ওয়াটারের টিডিএস (TDS) কত?",
          answer:
            "আমেনা ডি এম ওয়াটারের টিডিএস মান আন্তর্জাতিক ল্যাবরেটরি গ্রেড অনুযায়ী ১ ppm (mg/L) এর নিচে নিশ্চিত করা হয়। যা বুয়েট (BUET) ল্যাবরেটরি পরীক্ষায় উত্তীর্ণ।",
        },
        {
          question: "ব্যাটারিতে পানি কমে গেলে কি এসিড দিতে হয়?",
          answer:
            "কখনোই না! চার্জিং চলাকালীন ব্যাটারির তাপমাত্রা বৃদ্ধি পাওয়ায় শুধুই পানি বাষ্পীভূত হয়, এসিডের পরিমাণ ব্যাটারির ভেতর অবিকৃত থাকে। তাই ব্যাটারির পানির লেভেল কমে গেলে শুধুমাত্র এবং শুধুমাত্র বিশুদ্ধ ডিএম ওয়াটার যোগ করতে হবে।",
        },
      ],
    },
    contact: {
      tag: "যোগাযোগ ও ডিলারশিপ",
      title: "আমাদের সাথে যোগাযোগ করুন",
      subtitle: "খুচরা, পাইকারি বা ডিলারশিপ সংক্রান্ত যেকোনো প্রয়োজনে আমরা আপনার পাশে আছি",
      addressLabel: "কারখানা ও প্রধান কার্যালয়:",
      addressValue: "৬৬৯/৫ সরকারী গোরস্থান মোড়, শিক্ষকপল্লী, কিশোরগঞ্জ, ঢাকা - ২৩০০",
      phoneLabel: "জরুরি হেল্পলাইন ও অর্ডার:",
      phoneValue: "+৮৮০১৭৫৬১০৩৫০৮",
      emailLabel: "ইমেইল ঠিকানা:",
      emailValue: "amenakhg@gmail.com",
      hoursLabel: "কাজের সময়:",
      hoursValue: "শনিবার - বৃহস্পতিবার: সকাল ৯:০০ - রাত ৮:০০",
      form: {
        name: "আপনার নাম",
        namePlaceholder: "উদাঃ মোঃ রফিকুল ইসলাম",
        phone: "মোবাইল নম্বর",
        phonePlaceholder: "০১৭১২-XXXXXX",
        email: "ইমেইল (ঐচ্ছিক)",
        emailPlaceholder: "example@gmail.com",
        product: "আগ্রহী পণ্য বা বিষয়",
        selectProduct: "পণ্য বা বিষয় বেছে নিন...",
        message: "আপনার বার্তা বা অনুসন্ধানের বিবরণ",
        messagePlaceholder: "আপনি কত লিটার প্রয়োজন বা কী জানতে চান বিস্তারিত লিখুন...",
        submit: "বার্তা পাঠান",
        submitting: "পাঠানো হচ্ছে...",
        successMessage: "ধন্যবাদ! আপনার বার্তাটি আমাদের কাছে পৌঁছেছে। শীঘ্রই আমাদের টিম আপনার সাথে যোগাযোগ করবে।",
      },
    },
    footer: {
      about:
        "আমেনা™ একটি আধুনিক প্রকৌশলভিত্তিক উদ্যোগ। দেশের যানবাহন ও বিদ্যুৎ স্টোরেজ খাতের নিরাপত্তা এবং ব্যাটারির স্থায়িত্ব বৃদ্ধির লক্ষ্যে আমরা উৎপাদন করছি বুয়েট পরীক্ষিত উচ্চমানের ডিমিনারেলাইজড পানি।",
      quickLinks: "প্রয়োজনীয় লিংক",
      products: "জনপ্রিয় পণ্য",
      contactInfo: "অফিস ঠিকানা",
      copyright: "সর্বস্বত্ব সংরক্ষিত © ২০২৪-২০২৬ amena™ | আমেনা এন্টারপ্রাইজ",
      developedFor: "Designed with Modern Liquid Glass Architecture for amena.com.bd",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      products: "Products",
      parameters: "Parameters",
      batteryGuide: "Battery Care",
      calculator: "Purity Calculator",
      team: "Our Team",
      faq: "FAQ",
      contact: "Contact",
      callNow: "Call Now",
      switchLang: "বাংলা",
    },
    hero: {
      badge: "🔬 BUET Tested • 7-Stage Nuclear Media Purification",
      titleLine1: "World-Class Demineralized Water",
      titleLine2: "Ensuring Extended Battery & Equipment Life",
      description:
        "amena™ produces 100% mineral-free and bacteria-free laboratory-grade DM Water. A scientifically proven solution to enhance the lifespan of electric rickshaws, cars, solar systems, and IPS batteries across Bangladesh.",
      primaryCta: "Explore Products",
      secondaryCta: "Battery Care Guide",
      stats: {
        stat1Value: "< 1 ppm",
        stat1Label: "Ultra-Pure TDS",
        stat2Value: "7 Stages",
        stat2Label: "Nuclear Media Purification",
        stat3Value: "20M+",
        stat3Label: "Batteries Across Bangladesh",
        stat4Value: "100%",
        stat4Label: "Mineral & Bacteria Free",
      },
    },
    about: {
      tag: "Our Story & Mission",
      title: "Why amena™ DM Water Stands Apart",
      subtitle: "Safeguarding millions of batteries across Bangladesh through scientific water purification",
      leadParagraph:
        "In Bangladesh, around 20 lac electric rickshaws (easy bikes & autos) serve millions daily, powered by nearly 1 crore lead-acid batteries. Over 40 lac vehicles, 40 lac solar systems, home IPS units, and generators push this count to over 2 crore batteries nationwide.",
      story1:
        "Before we began our journey, the entire market was inundated with substandard, contaminated water labeled as 'Battery Water'. Consumers and hardworking drivers were unaware that tap or low-grade water filled with dissolved minerals destroys lead battery plates, halving their operational life.",
      story2:
        "amena™ was founded to deliver certified purity and consumer awareness at reasonable prices. Under the direct supervision of two qualified graduate engineers, our plant utilizes a 7-stage nuclear-grade media system to produce demineralized water matching international laboratory benchmarks.",
      buetBadge: "BUET Lab Certified",
      buetText:
        "Tested and verified at the Bangladesh University of Engineering and Technology (BUET) laboratories, meeting strict international demineralization standards.",
      stagesTitle: "Advanced 7-Stage Purification Process",
      stagesDesc:
        "Sediment filtration, activated carbon absorption, reverse osmosis, cation-anion ion exchange resin, nuclear-grade mixed bed polishers, and germicidal Ultra-Violet (UV) treatment.",
      features: [
        {
          title: "Zero Mineral Guarantee",
          desc: "Complete absence of calcium, magnesium, iron, arsenic, chloride, and harmful dissolved salts.",
        },
        {
          title: "Extends Battery Lifespan",
          desc: "Prevents irreversible sulphate crystallization, helping lead-acid batteries last up to twice as long.",
        },
        {
          title: "UV Sterilized Quality",
          desc: "Treated with intense ultraviolet rays to eliminate biological contaminants and algae spores.",
        },
        {
          title: "Radiator & Engine Shield",
          desc: "Prevents limescale buildup in narrow radiator tubes, ensuring optimal cooling and preventing engine overheating.",
        },
      ],
    },
    products: {
      tag: "Product Catalog",
      title: "amena™ Specialized Water & Chemical Solutions",
      subtitle: "Each product is produced under rigorous laboratory supervision and strict quality control",
      viewSpecs: "View Specifications",
      orderInquiry: "Order & Wholesale Inquiry",
      allProducts: "All Products",
      items: [
        {
          id: "dm-water",
          name: "amena DM Water",
          tagline: "Laboratory & Industrial Grade Ultra-Pure Water",
          description:
            "Completely mineral-free and bacteria-free demineralized water. Engineered for pharmaceutical formulations, scientific research laboratories, microelectronics, and advanced industrial processes.",
          features: [
            "TDS < 1 mg/L (ppm)",
            "Electrical Conductivity < 1 μS/cm",
            "Balanced Neutral pH 6.8 - 7.0",
            "Nuclear-grade media polished",
          ],
          specs: [
            { label: "Purity", value: "99.999%" },
            { label: "Grade", value: "Laboratory & Industrial" },
            { label: "Sterilization", value: "Ultra-Violet (UV)" },
          ],
          packaging: ["5L Jar", "20L Drum", "1000L IBC Tank"],
          applications: ["Pharmaceuticals & Cosmetics", "Chemical Laboratories", "Textile Dyeing", "Microelectronics"],
          badge: "Flagship Product",
          popular: true,
        },
        {
          id: "battery-water",
          name: "amena Battery-Water",
          tagline: "The Ultimate Protection for Auto, Rickshaw, Car & IPS Batteries",
          description:
            "Zero-mineral pure water crafted specifically for lead-acid battery cells. Essential for replenishing water lost to vaporisation during charge and discharge cycles without harming lead plates.",
          features: [
            "TDS strictly 0-1 ppm",
            "Prevents plate crystallization",
            "Maximizes daily battery backup",
            "BUET laboratory tested",
          ],
          specs: [
            { label: "Harmful Minerals", value: "0% (Completely absent)" },
            { label: "Compatibility", value: "All Lead-Acid Battery Cells" },
            { label: "Testing", value: "BUET Certified" },
          ],
          packaging: ["1L PET Bottle", "5L Gallon", "20L Jar"],
          applications: ["Easy Bikes & Electric Rickshaws", "Automobiles & Trucks", "Home IPS & UPS", "Solar Home Systems"],
          badge: "Best Seller",
          popular: true,
        },
        {
          id: "electrolyte",
          name: "amena Lead Acid Battery Electrolyte",
          tagline: "Precision 3:1 Ratio Sulphuric Acid & DM Water Solution",
          description:
            "Specially formulated electrolyte for initial preparation and charging of dry-charged lead acid batteries. Calibrated to the exact specific gravity needed for peak battery capacity.",
          features: [
            "Exact 3:1 stoichiometric ratio",
            "High-grade sulfuric acid & pure DM water",
            "Prevents internal cell short-circuiting",
            "Hermetically sealed safety packaging",
          ],
          specs: [
            { label: "Ratio", value: "3 Parts DM Water : 1 Part H2SO4" },
            { label: "Specific Gravity", value: "1.240 - 1.280 (at 25°C)" },
            { label: "Usage", value: "Initial battery commissioning" },
          ],
          packaging: ["5L Jar", "20L Canister"],
          applications: ["New Battery Commissioning", "Battery Service Workshops", "Industrial Storage Cells"],
        },
        {
          id: "cooling-water",
          name: "amena Engine Cooling Water",
          tagline: "Scale-Free Coolant Water for Vehicle Radiators",
          description:
            "Formulated for vehicle cooling systems. Unlike ordinary water, it leaves zero mineral deposits or lime scale in radiator flutes, preventing costly engine overheating and head gasket failures.",
          features: [
            "Prevents radiator tubing blockage",
            "Reduces engine overheating risks",
            "Completely mineral scale-free",
            "Compatible with all coolant concentrates",
          ],
          specs: [
            { label: "Scaling Minerals", value: "0 mg/L" },
            { label: "Thermal Conductivity", value: "Optimal" },
            { label: "Engine Compatibility", value: "Petrol, Diesel & CNG Engines" },
          ],
          packaging: ["1L Bottle", "5L Gallon"],
          applications: ["Passenger Cars & SUVs", "Heavy Trucks & Buses", "Backup Generator Radiators", "Agricultural Pumps"],
        },
        {
          id: "rinsing-water",
          name: "amena Rinsing Water",
          tagline: "Residue-Free Spotless Precision Rinsing",
          description:
            "Ultra-clean demineralized water for final rinsing of laboratory glassware, printed circuit boards (PCBs), and delicate optical equipment. Dries completely clear without water spots.",
          features: [
            "Zero water marks or residue upon drying",
            "Conductivity-free cleaning",
            "Micro-particle filtered (0.2 micron)",
            "Accurate laboratory test results",
          ],
          specs: [
            { label: "Total Solids (TS)", value: "< 1 mg/L" },
            { label: "Use Case", value: "High-precision electronics & glassware" },
            { label: "Filtration", value: "Sub-micron level" },
          ],
          packaging: ["5L Jar", "20L Can"],
          applications: ["Solar Panel Cleaning", "Lab Glassware Rinsing", "Electronic PCBs", "Optical Glass"],
        },
        {
          id: "rose-water",
          name: "amena Rose Water (Completely Natural)",
          tagline: "100% Pure Distillate of Fresh Rose Petals",
          description:
            "A delicate, aromatic hydrosol distilled from organic rose petals blended with pure demineralized water. Free from synthetic chemicals, artificial colors, or harsh preservatives.",
          features: [
            "100% herbal and botanical distillate",
            "Balances natural skin pH",
            "Food grade: safe for culinary confectionery",
            "Natural refreshing coolness",
          ],
          specs: [
            { label: "Ingredients", value: "Natural Rose Distillate + Pure DM Water" },
            { label: "Artificial Color", value: "0%" },
            { label: "Usage", value: "Skincare & Culinary Desserts" },
          ],
          packaging: ["100ml Mist Spray", "250ml Bottle", "500ml Bottle"],
          applications: ["Face Toner & Skincare", "Traditional Sweets & Culinary", "Aromatherapy & Ceremonies"],
          badge: "100% Natural",
        },
      ],
    },
    parameters: {
      tag: "Laboratory Standards",
      title: "amena™ Technical Parameters",
      subtitle: "Verified by precision laboratory instruments and rigorous quality assurance",
      purityGuarantee: "Zero Contaminant Guarantee",
      purityDesc:
        "Natural tap and ground water contain dissolved calcium, magnesium, salt, and iron. In amena™ DM water, every unwanted mineral is stripped down to negligible levels.",
      items: [
        {
          id: "tds",
          name: "T.D.S",
          value: "< 1",
          unit: "mg/L (ppm)",
          description: "Total Dissolved Solids. Measures the concentration of dissolved inorganic salts.",
          standard: "Standard: < 5 ppm (amena™: < 1 ppm)",
          icon: "Gauge",
        },
        {
          id: "conductivity",
          name: "Conductivity",
          value: "< 1",
          unit: "μS/cm (at 25°C)",
          description: "Electrical conductivity. Pure water is non-conductive, eliminating electrical leakage.",
          standard: "Standard: < 5 μS/cm (amena™: < 1 μS/cm)",
          icon: "Zap",
        },
        {
          id: "ph",
          name: "pH Level",
          value: "6.8 - 7.0",
          unit: "Neutral Balance",
          description: "Acidity and alkalinity equilibrium, chemically neutral and non-corrosive.",
          standard: "Benchmark: 6.5 - 7.5",
          icon: "Activity",
        },
        {
          id: "ts",
          name: "Total Solids (TS)",
          value: "< 1",
          unit: "mg/L (ppm)",
          description: "Total solid particulate matter. Leaves zero mineral residue upon total evaporation.",
          standard: "Benchmark: < 10 ppm",
          icon: "Layers",
        },
        {
          id: "uv",
          name: "UV Treated",
          value: "100%",
          unit: "Sterilized",
          description: "Ultraviolet irradiation eradicating bacterial growth, micro-flora, and organic contaminants.",
          standard: "Clinical Laboratory Standard",
          icon: "Sun",
        },
      ],
      comparison: {
        title: "Comparative Water Purity (TDS Level)",
        tapWater: "Standard Tap / Tubewell Water (250-600 ppm)",
        marketWater: "Ordinary Market 'Battery Water' (20-80 ppm)",
        amenaWater: "amena™ Demineralized Water (< 1 ppm)",
      },
    },
    batteryGuide: {
      tag: "Technical Science & Care",
      title: "Lead-Acid Battery Electrochemistry & Maintenance",
      subtitle: "Why choosing certified pure DM water doubles your battery lifespan",
      electroIntro:
        "A lead-acid battery is an electrochemical storage device converting chemical potential into electric current. Positive and negative lead plates interact with dilute sulfuric acid to generate ion flow.",
      chemicalFormula: "Pb + PbO₂ + 2H₂SO₄ ⇄ 2PbSO₄ + 2H₂O",
      chemicalExplainer:
        "During discharge, sulfuric acid transforms into lead sulfate, coating the anode and cathode. Recharging breaks this sulfate layer back into acid. However, if mineral impurities enter the battery, they form permanent non-reversible crusts that permanently kill capacity.",
      partsTitle: "The 3 Core Components of a Lead-Acid Battery",
      anodeTitle: "1. Anode (Pb) - Negative Terminal",
      anodeDesc:
        "Composed of soft, porous spongy lead (Pb) arranged in stacked grids connected to the negative terminal.",
      cathodeTitle: "2. Cathode (PbO₂) - Positive Terminal",
      cathodeDesc:
        "Composed of dense lead dioxide (PbO₂) alloy, harder than spongy lead, connected directly to the positive battery post.",
      electrolyteTitle: "3. Electrolyte (3H₂O + H₂SO₄)",
      electrolyteDesc:
        "A 3:1 volumetric ratio of pure distilled water to sulfuric acid. Because heat only evaporates the water molecules, acid volume never decreases—only pure DM water must ever be topped up.",
      radiatorTitle: "Why Radiators Need Demineralized Water",
      radiatorDesc:
        "Vehicle engines rely on radiators to evacuate combustion heat. When tap water is used, minerals remain behind as water vaporizes, calcifying the radiator's micro-tubes. This causes chronic overheating, head gasket warpage, and premature radiator failure. amena™ DM water guarantees zero scaling.",
      whyAmenaTitle: "Why amena™ is Trusted Nationwide",
      whyAmenaDesc:
        "amena™ DM Water is manufactured under the continuous oversight of two graduate engineers using 7-stage nuclear-grade resin technology and certified by BUET laboratories. A 100% reliable choice over unverified local brands.",
    },
    calculator: {
      tag: "Interactive Tool",
      title: "Battery Water Purity & Life Simulator",
      subtitle: "See what happens to your battery plates depending on the water you pour in",
      selectLabel: "Select water source used for top-up:",
      batteryTypeLabel: "Application type:",
      resultTitle: "Purity & Impact Analysis",
      tdsLabel: "Estimated Water TDS:",
      estimatedLifeLabel: "Expected Battery Lifespan:",
      riskLevelLabel: "Plate Corrosion & Scaling Risk:",
      recommendationLabel: "Engineer's Recommendation:",
    },
    team: {
      tag: "Leadership & Family",
      title: "We Are Not Just a Team... We Are Family",
      subtitle: "Dedicated engineers bringing uncompromising scientific standards to Bangladesh",
      members: [
        {
          name: "Engr. MD. Akkas Ali",
          role: "Chairman",
          qualification: "Retd. Executive Engineer (Bangladesh Power Development Board - BPDB)",
          bio: "Over 35+ years of distinguished engineering leadership in the national power sector. Deep technical expertise in electrical grids, power stations, and electrochemical systems.",
          avatarPlaceholder: "AA",
        },
        {
          name: "MD. Atiar Ali Suvro",
          role: "Director",
          qualification: "B.Sc in Electrical & Electronic Engineering (EEE)",
          bio: "Heads plant operations, purification media maintenance, electrochemical laboratory testing, and continuous manufacturing quality control.",
          avatarPlaceholder: "AS",
        },
        {
          name: "Ashik Ali Shanto",
          role: "Director (IT)",
          qualification: "Software & Technology Specialist",
          bio: "Spearheads digital transformation, automated logistics, customer relationship management, and modern supply chain infrastructure for amena™.",
          avatarPlaceholder: "AAS",
        },
      ],
    },
    faq: {
      tag: "Frequently Asked Questions",
      title: "Got Questions? We Have Answers",
      subtitle: "Everything you need to know about demineralized water and battery longevity",
      items: [
        {
          question: "What is DM or DI water?",
          answer:
            "DM stands for Demineralized and DI stands for Deionized. Both refer to pure water stripped of all mineral ions, heavy metals, and dissolved solids. It contains pure H₂O molecules with negligible electrical conductivity.",
        },
        {
          question: "Can I drink DM water?",
          answer:
            "Demineralized water is not toxic, so accidental ingestion poses no immediate harm. However, because it lacks essential dietary minerals (calcium, magnesium), continuous consumption is not recommended for daily hydration. In specific medical scenarios, physicians may advise mixing oral rehydration salts with demineralized water.",
        },
        {
          question: "Why does tap or tubewell water damage batteries?",
          answer:
            "Tap and tubewell water contain dissolved calcium, iron, and chloride. Inside the battery, these minerals react with the sulfuric acid, creating insoluble calcified crusts (sulfation) on the lead plates that block electron transfer, drastically shortening battery life.",
        },
        {
          question: "Where is DM water utilized?",
          answer:
            "Due to its extreme purity, DM water is essential for lead-acid batteries, automobile radiators, electrolyte formulation, pharmaceutical manufacturing, cosmetics, chemical synthesis, and semiconductor chip rinsing.",
        },
        {
          question: "What is the TDS of amena™ DM water?",
          answer:
            "amena™ DM Water maintains a strict Total Dissolved Solids (TDS) level of less than 1 mg/L (ppm), rigorously tested and verified by BUET laboratory standards.",
        },
        {
          question: "Should I add acid when battery electrolyte is low?",
          answer:
            "No! Never add acid to top up a running battery. Water evaporates during charge/discharge heat, while the sulfuric acid remains inside. Adding more acid raises the concentration dangerously and burns the plates. Always top up only with certified pure DM water.",
        },
      ],
    },
    contact: {
      tag: "Get in Touch",
      title: "Contact Us & Dealership Inquiries",
      subtitle: "For retail purchases, bulk supply, or regional dealership partnerships, we are here to assist",
      addressLabel: "Head Office & Manufacturing Facility:",
      addressValue: "669/5 Shorkari Gorosthan more, ShikkhokPolli, Kishorgonj, Dhaka - 2300, Bangladesh",
      phoneLabel: "Helpline & Order Hotline:",
      phoneValue: "+8801756103508",
      emailLabel: "Official Email:",
      emailValue: "amenakhg@gmail.com",
      hoursLabel: "Working Hours:",
      hoursValue: "Saturday - Thursday: 9:00 AM - 8:00 PM",
      form: {
        name: "Your Full Name",
        namePlaceholder: "e.g. John Doe",
        phone: "Mobile Phone Number",
        phonePlaceholder: "+880 17XX-XXXXXX",
        email: "Email Address (Optional)",
        emailPlaceholder: "example@gmail.com",
        product: "Product of Interest",
        selectProduct: "Select product or topic...",
        message: "Your Message or Inquiry",
        messagePlaceholder: "Specify quantity, delivery location, or dealership questions...",
        submit: "Send Message",
        submitting: "Sending...",
        successMessage: "Thank you! Your message has been received. Our team will contact you shortly.",
      },
    },
    footer: {
      about:
        "amena™ is an engineering-driven enterprise dedicated to safeguarding Bangladesh's automotive and renewable energy investments with certified, BUET-tested Demineralized Water solutions.",
      quickLinks: "Quick Navigation",
      products: "Products Range",
      contactInfo: "Office Location",
      copyright: "All Rights Reserved © 2024-2026 amena™ | amena Enterprise",
      developedFor: "Designed with Modern Liquid Glass Architecture for amena.com.bd",
    },
  },
};

