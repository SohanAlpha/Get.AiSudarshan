import type { Feature, Model, Plan, FAQItem } from './types';

export const websiteName = "Sudarshan AI 2.0";

export const heroSection = {
  headline: "This Diwali, Experience the Power of AI — 10 Days Absolutely Free!",
  subheadline: "Unlock the next generation of intelligence with Sudarshan AI 2.0 — powered by Gemini, Llama, Groq, KimiDev, and Qwen3. Create, code, learn, and visualize — all in one platform.",
  ctaButton: {
    text: "🎁 Claim 10 Days Free",
    link: "https://aisudarshan.vercel.app",
  },
  subtext: "Limited-time Diwali offer. No card required. Fair-use policy applies.",
};

export const features: Feature[] = [
  {
    title: "Multi-AI Fusion Engine",
    description: "Harness Gemini, Llama, Groq, Qwen3, and KimiDev simultaneously for ultra-accurate results."
  },
  {
    title: "Prompt Enhancer",
    description: "Instantly upgrade your inputs into detailed JSON, XML, YAML, or MVP formats."
  },
  {
    title: "Visual Response Mode",
    description: "See every concept as charts, diagrams, and mind maps — not just text."
  },
  {
    title: "Mock Test Creator for Teachers",
    description: "Upload text or PDF question sets to auto-generate mock tests with hints and shareable links.",
    isLocked: true,
  },
  {
    title: "Coding Playground",
    description: "Write, debug, and preview live code instantly with AI help.",
    isLocked: true,
  },
  {
    title: "Custom AI Agent Personality",
    description: "Switch your AI’s tone, behavior, and theme anytime."
  }
];

export const exclusiveModels: Model[] = [
  {
    name: "Sudarshan AI",
    icon: "🌀",
    highlight: "Always Visual",
    description: "Your personal visual-thinking assistant. From clarifying complex concepts to generating instant notes — Sudarshan AI creates visual responses for everything."
  },
  {
    name: "Mono Banana",
    icon: "🍌",
    highlight: "Image-to-Prompt",
    description: "Upload any image, and Mono Banana generates perfect AI prompts for creative projects, art, or code."
  }
];

export const offerSection = {
  title: "🎇 Celebrate Diwali with 10 Days of Full Access — Absolutely Free!",
  description: "Every new user gets full access to Visual Responses, Prompt Enhancer, Mock Test Generator, and Multi-AI Chat — for 10 days at zero cost.",
  ctaButton: {
    text: "Claim My 10 Days Free Access",
    link: "https://aisudarshan.vercel.app"
  },
  benefits: ["No credit card needed", "Fair-use daily limit", "Limited to 1000 users"],
};

export const plans: Plan[] = [
  {
    name: "Weekly",
    price: "₹9 / week",
    features: ["Fast responses", "Ad-free experience", "Priority AI queue"]
  },
  {
    name: "Monthly",
    price: "₹29 / month",
    features: ["Includes free Mono Banana Prompt Book", "High response speed", "Access to advanced models"]
  },
  {
    name: "Yearly",
    price: "₹299 / year",
    features: ["Save 60%", "All monthly features", "Exclusive early access to Sudarshan AI updates"]
  }
];

export const faqs: FAQItem[] = [
  {
    question: "What AI models are included in Sudarshan AI 2.0?",
    answer: "Sudarshan AI 2.0 integrates a powerful Multi-AI Fusion Engine, giving you access to leading models like Gemini, Llama, Groq, KimiDev, and Qwen3. This allows you to leverage the best model for any task, all from a single platform."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! To celebrate Diwali, we're offering a 10-day full-access free trial to all new users. No credit card is required. You can explore all our premium features, including the Mock Test Creator and Visual Response Mode, completely free."
  },
  {
    question: "How does the pricing work after the trial?",
    answer: "We offer flexible and affordable plans to suit your needs. You can choose from weekly, monthly, or yearly subscriptions. Our yearly plan offers the best value with a 60% discount. All paid plans provide faster responses and an ad-free experience."
  },
  {
    question: "What makes Sudarshan AI's Visual Response Mode unique?",
    answer: "Unlike traditional text-only AI interfaces, our Visual Response Mode translates complex information into easy-to-understand charts, diagrams, and mind maps. It's designed to help you grasp concepts faster and boost your learning and creativity."
  }
];


export const footer = {
  tagline: "Experience the future of AI — Made in India, for the world.",
  links: [
    { text: "Privacy Policy", url: "#" },
    { text: "Terms of Use", url: "#" },
    { text: "Support", url: "#" }
  ],
  socials: ["Twitter", "Instagram", "LinkedIn"]
};