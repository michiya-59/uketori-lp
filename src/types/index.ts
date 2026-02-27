export interface NavItem {
  label: string;
  href: string;
}

export interface PainPoint {
  icon: string;
  title: string;
  description: string;
}

export interface Reason {
  tag: string;
  title: string;
  description: string;
  icon: string;
  bullets: string[];
}

export interface AIFeature {
  icon: string;
  title: string;
  description: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
  icon: string;
}

export interface CaseStudy {
  company: string;
  industry: string;
  size: string;
  quote: string;
  result: string;
  person: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}
