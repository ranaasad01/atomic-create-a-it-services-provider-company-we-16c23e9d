export interface Service {
  id: string;
  icon: string;
  title: string;
  shortDesc: string;
  description: string;
  features: string[];
  color: string;
}

export const services: Service[] = [
  {
    id: "cloud",
    icon: "Cloud",
    title: "Cloud Solutions",
    shortDesc: "Scalable cloud infrastructure tailored to your business needs.",
    description:
      "We design, migrate, and manage cloud environments on AWS, Azure, and Google Cloud. Our certified architects ensure seamless transitions, cost optimization, and enterprise-grade reliability.",
    features: [
      "Cloud migration & lift-and-shift",
      "Multi-cloud & hybrid architecture",
      "Cost optimization & FinOps",
      "24/7 cloud monitoring & support",
      "Disaster recovery & backup",
    ],
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: "cybersecurity",
    icon: "Shield",
    title: "Cybersecurity",
    shortDesc: "Protect your assets with enterprise-grade security solutions.",
    description:
      "Our security experts deliver end-to-end protection — from vulnerability assessments and penetration testing to SOC-as-a-Service and compliance management for HIPAA, PCI-DSS, and ISO 27001.",
    features: [
      "Penetration testing & red teaming",
      "SOC-as-a-Service (24/7 monitoring)",
      "Zero-trust architecture design",
      "Compliance & risk management",
      "Incident response & forensics",
    ],
    color: "from-red-500 to-orange-400",
  },
  {
    id: "networking",
    icon: "Network",
    title: "Networking & Infrastructure",
    shortDesc: "Reliable, high-performance network design and management.",
    description:
      "From SD-WAN deployments to data center buildouts, we engineer robust network infrastructures that keep your business connected, secure, and performing at peak capacity.",
    features: [
      "SD-WAN & MPLS design",
      "Data center buildout & cabling",
      "Network security & segmentation",
      "VoIP & unified communications",
      "Performance monitoring & NOC",
    ],
    color: "from-green-500 to-teal-400",
  },
  {
    id: "managed-it",
    icon: "Monitor",
    title: "Managed IT Services",
    shortDesc: "Proactive IT management so you can focus on your business.",
    description:
      "Our managed services team acts as your dedicated IT department — handling helpdesk support, patch management, endpoint security, and strategic IT planning at a predictable monthly cost.",
    features: [
      "24/7 helpdesk & remote support",
      "Patch management & updates",
      "Endpoint detection & response",
      "IT asset management",
      "vCIO & strategic planning",
    ],
    color: "from-purple-500 to-indigo-400",
  },
  {
    id: "software-dev",
    icon: "Code",
    title: "Software Development",
    shortDesc: "Custom software solutions built for scale and performance.",
    description:
      "We build bespoke web applications, mobile apps, APIs, and enterprise platforms using modern tech stacks. Our agile teams deliver on time, on budget, and aligned with your business goals.",
    features: [
      "Web & mobile app development",
      "API design & microservices",
      "Legacy system modernization",
      "DevOps & CI/CD pipelines",
      "QA testing & code reviews",
    ],
    color: "from-yellow-500 to-amber-400",
  },
  {
    id: "it-consulting",
    icon: "Briefcase",
    title: "IT Consulting",
    shortDesc: "Strategic technology guidance to accelerate your growth.",
    description:
      "Our seasoned consultants align technology investments with business objectives. We conduct IT audits, develop digital transformation roadmaps, and guide vendor selection to maximize ROI.",
    features: [
      "IT strategy & roadmap development",
      "Digital transformation consulting",
      "Vendor evaluation & selection",
      "IT audit & gap analysis",
      "Technology due diligence",
    ],
    color: "from-pink-500 to-rose-400",
  },
];
