
export interface Feature {
  title: string;
  description: string;
  isLocked?: boolean;
}

export interface Model {
  name: string;
  icon: string;
  highlight: string;
  description: string;
}

export interface Plan {
  name: string;
  price: string;
  features: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}
