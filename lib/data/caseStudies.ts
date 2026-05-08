export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  tags: string[];
  image: string;
  metrics: { label: string; value: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "fintech-cloud-migration",
    title: "Cloud Migration for a Leading FinTech Firm",
    client: "Apex Financial Group",
    industry: "Financial Services",
    challenge:
      "Legacy on-premise infrastructure causing 40% downtime spikes during peak trading hours, with escalating maintenance costs.",
    solution:
      "Designed and executed a phased migration to AWS with multi-AZ redundancy, auto-scaling groups, and a zero-downtime cutover strategy.",
    result:
      "Achieved 99.99% uptime, reduced infrastructure costs by 35%, and cut deployment time from 2 weeks to 4 hours.",
    tags: ["Cloud Migration", "AWS", "FinTech", "DevOps"],
    image: "/images/fintech-cloud-migration-dashboard.jpg",
    metrics: [
      { label: "Uptime", value: "99.99%" },
      { label: "Cost Reduction", value: "35%" },
      { label: "Deploy Time", value: "4 hrs" },
    ],
  },
  {
    id: "healthcare-cybersecurity",
    title: "HIPAA Compliance & Security Overhaul",
    client: "MedCore Health Systems",
    industry: "Healthcare",
    challenge:
      "Critical vulnerabilities in patient data systems exposed the organization to HIPAA violations and potential data breaches.",
    solution:
      "Implemented a zero-trust security framework, deployed SOC-as-a-Service, conducted penetration testing, and achieved full HIPAA compliance.",
    result:
      "Zero security incidents post-implementation, passed HIPAA audit with no findings, and reduced threat response time by 80%.",
    tags: ["Cybersecurity", "HIPAA", "Healthcare", "Zero Trust"],
    image: "/images/healthcare-cybersecurity-operations.jpg",
    metrics: [
      { label: "Security Incidents", value: "0" },
      { label: "Response Time", value: "-80%" },
      { label: "Compliance", value: "100%" },
    ],
  },
  {
    id: "retail-ecommerce-platform",
    title: "Custom E-Commerce Platform for National Retailer",
    client: "StyleHub Retail",
    industry: "Retail & E-Commerce",
    challenge:
      "Outdated monolithic platform unable to handle Black Friday traffic spikes, resulting in $2M in lost sales annually.",
    solution:
      "Built a microservices-based e-commerce platform on Next.js and Node.js with Kubernetes orchestration and a CDN-first architecture.",
    result:
      "Handled 10x traffic spikes without degradation, increased conversion rate by 28%, and reduced page load time to under 1.2 seconds.",
    tags: ["Software Dev", "E-Commerce", "Microservices", "Kubernetes"],
    image: "/images/retail-ecommerce-platform-interface.jpg",
    metrics: [
      { label: "Traffic Capacity", value: "10x" },
      { label: "Conversion Rate", value: "+28%" },
      { label: "Load Time", value: "1.2s" },
    ],
  },
  {
    id: "manufacturing-network",
    title: "SD-WAN Rollout Across 50 Manufacturing Sites",
    client: "GlobalMfg Industries",
    industry: "Manufacturing",
    challenge:
      "Inconsistent network performance across 50 global facilities causing production delays and communication breakdowns.",
    solution:
      "Designed and deployed a unified SD-WAN solution with centralized management, QoS policies, and failover redundancy at every site.",
    result:
      "Network reliability improved to 99.95%, IT management overhead reduced by 60%, and inter-site latency cut by 45%.",
    tags: ["Networking", "SD-WAN", "Manufacturing", "Infrastructure"],
    image: "/images/manufacturing-network-control-room.jpg",
    metrics: [
      { label: "Network Reliability", value: "99.95%" },
      { label: "IT Overhead", value: "-60%" },
      { label: "Latency Reduction", value: "45%" },
    ],
  },
  {
    id: "startup-digital-transformation",
    title: "Digital Transformation for SaaS Startup",
    client: "Launchpad Analytics",
    industry: "SaaS / Technology",
    challenge:
      "Rapid growth outpacing infrastructure capabilities, with manual DevOps processes slowing release cycles to bi-monthly deployments.",
    solution:
      "Established full CI/CD pipelines, containerized all services with Docker/Kubernetes, and implemented Infrastructure-as-Code with Terraform.",
    result:
      "Release frequency increased from bi-monthly to daily, infrastructure provisioning time dropped from 3 days to 15 minutes.",
    tags: ["DevOps", "CI/CD", "SaaS", "Kubernetes", "Terraform"],
    image: "/images/saas-startup-devops-pipeline.jpg",
    metrics: [
      { label: "Release Frequency", value: "Daily" },
      { label: "Provisioning Time", value: "15 min" },
      { label: "Deploy Success", value: "99.8%" },
    ],
  },
  {
    id: "government-managed-it",
    title: "Managed IT Services for City Government",
    client: "City of Riverside",
    industry: "Government",
    challenge:
      "Aging IT infrastructure, reactive support model, and lack of strategic IT planning across 12 city departments.",
    solution:
      "Transitioned to a fully managed IT model with vCIO services, standardized endpoints, centralized helpdesk, and a 3-year technology roadmap.",
    result:
      "IT ticket resolution time improved by 70%, hardware refresh completed on schedule, and $1.2M in budget savings identified.",
    tags: ["Managed IT", "Government", "vCIO", "Helpdesk"],
    image: "/images/government-it-infrastructure-management.jpg",
    metrics: [
      { label: "Resolution Time", value: "-70%" },
      { label: "Budget Savings", value: "$1.2M" },
      { label: "Satisfaction", value: "97%" },
    ],
  },
];
