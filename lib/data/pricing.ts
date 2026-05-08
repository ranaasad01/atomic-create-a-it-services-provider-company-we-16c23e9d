export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
  badge?: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    price: "$999",
    period: "/month",
    description: "Perfect for small businesses needing reliable IT support and monitoring.",
    features: [
      "Up to 25 managed endpoints",
      "8×5 helpdesk support",
      "Patch management & updates",
      "Basic antivirus & endpoint protection",
      "Monthly IT health reports",
      "Email & chat support",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    id: "professional",
    name: "Professional",
    price: "$2,499",
    period: "/month",
    description: "Ideal for growing companies requiring proactive IT management and security.",
    features: [
      "Up to 100 managed endpoints",
      "24×7 helpdesk support",
      "Advanced EDR & threat detection",
      "Cloud backup & disaster recovery",
      "Quarterly security assessments",
      "vCIO advisory (4 hrs/month)",
      "Priority response SLA (2 hrs)",
      "Microsoft 365 management",
    ],
    highlighted: true,
    cta: "Most Popular",
    badge: "Most Popular",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large enterprises with complex IT environments.",
    features: [
      "Unlimited managed endpoints",
      "24×7 dedicated NOC & SOC",
      "Full cybersecurity suite",
      "Multi-cloud management",
      "Dedicated account manager",
      "vCIO advisory (unlimited)",
      "1-hour response SLA",
      "Custom integrations & APIs",
      "Compliance management (HIPAA, PCI)",
    ],
    highlighted: false,
    cta: "Contact Sales",
  },
];
