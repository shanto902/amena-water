export type Locale = "bn" | "en";

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  specs: {
    label: string;
    value: string;
  }[];
  packaging: string[];
  applications: string[];
  badge?: string;
  popular?: boolean;
}

export interface ParameterItem {
  id: string;
  name: string;
  value: string;
  unit: string;
  description: string;
  standard: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  qualification: string;
  bio: string;
  avatarPlaceholder: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface BatteryPart {
  name: string;
  formula: string;
  description: string;
}

export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    products: string;
    parameters: string;
    batteryGuide: string;
    calculator: string;
    team: string;
    faq: string;
    contact: string;
    callNow: string;
    switchLang: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    stats: {
      stat1Value: string;
      stat1Label: string;
      stat2Value: string;
      stat2Label: string;
      stat3Value: string;
      stat3Label: string;
      stat4Value: string;
      stat4Label: string;
    };
  };
  about: {
    tag: string;
    title: string;
    subtitle: string;
    leadParagraph: string;
    story1: string;
    story2: string;
    buetBadge: string;
    buetText: string;
    stagesTitle: string;
    stagesDesc: string;
    features: {
      title: string;
      desc: string;
    }[];
  };
  products: {
    tag: string;
    title: string;
    subtitle: string;
    viewSpecs: string;
    orderInquiry: string;
    allProducts: string;
    items: ProductItem[];
  };
  parameters: {
    tag: string;
    title: string;
    subtitle: string;
    purityGuarantee: string;
    purityDesc: string;
    items: ParameterItem[];
    comparison: {
      title: string;
      tapWater: string;
      marketWater: string;
      amenaWater: string;
    };
  };
  batteryGuide: {
    tag: string;
    title: string;
    subtitle: string;
    electroIntro: string;
    chemicalFormula: string;
    chemicalExplainer: string;
    partsTitle: string;
    anodeTitle: string;
    anodeDesc: string;
    cathodeTitle: string;
    cathodeDesc: string;
    electrolyteTitle: string;
    electrolyteDesc: string;
    radiatorTitle: string;
    radiatorDesc: string;
    whyAmenaTitle: string;
    whyAmenaDesc: string;
  };
  calculator: {
    tag: string;
    title: string;
    subtitle: string;
    selectLabel: string;
    batteryTypeLabel: string;
    resultTitle: string;
    tdsLabel: string;
    estimatedLifeLabel: string;
    riskLevelLabel: string;
    recommendationLabel: string;
  };
  team: {
    tag: string;
    title: string;
    subtitle: string;
    members: TeamMember[];
  };
  faq: {
    tag: string;
    title: string;
    subtitle: string;
    items: FaqItem[];
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    addressLabel: string;
    addressValue: string;
    phoneLabel: string;
    phoneValue: string;
    emailLabel: string;
    emailValue: string;
    hoursLabel: string;
    hoursValue: string;
    form: {
      name: string;
      namePlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      product: string;
      selectProduct: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
      successMessage: string;
    };
  };
  footer: {
    about: string;
    quickLinks: string;
    products: string;
    contactInfo: string;
    copyright: string;
    developedFor: string;
  };
}

