export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  image: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Zero Trust Security in Enterprise Environments",
    excerpt:
      "Zero trust is no longer a buzzword — it's a necessity. We break down how enterprises can implement a practical zero-trust architecture without disrupting operations.",
    category: "Cybersecurity",
    date: "December 10, 2024",
    readTime: "8 min read",
    author: "Sarah Chen",
    authorRole: "Chief Security Officer",
    authorAvatar: "/images/author-sarah-chen-cso.jpg",
    image: "/images/blog-zero-trust-security-enterprise.jpg",
    slug: "zero-trust-security-enterprise",
  },
  {
    id: "2",
    title: "AWS vs Azure vs Google Cloud: Choosing the Right Platform in 2025",
    excerpt:
      "With cloud spending projected to exceed $1 trillion by 2026, choosing the right cloud provider is more critical than ever. Here's our comprehensive comparison.",
    category: "Cloud",
    date: "December 5, 2024",
    readTime: "12 min read",
    author: "Marcus Johnson",
    authorRole: "Cloud Architect",
    authorAvatar: "/images/author-marcus-johnson-cloud.jpg",
    image: "/images/blog-cloud-provider-comparison-2025.jpg",
    slug: "aws-azure-gcp-comparison-2025",
  },
  {
    id: "3",
    title: "How AI is Transforming IT Operations and Helpdesk Support",
    excerpt:
      "AI-powered IT operations (AIOps) are reducing mean time to resolution by up to 60%. Discover how intelligent automation is reshaping the modern IT helpdesk.",
    category: "AI & Automation",
    date: "November 28, 2024",
    readTime: "6 min read",
    author: "Priya Patel",
    authorRole: "Head of Innovation",
    authorAvatar: "/images/author-priya-patel-innovation.jpg",
    image: "/images/blog-ai-it-operations-automation.jpg",
    slug: "ai-transforming-it-operations",
  },
  {
    id: "4",
    title: "SD-WAN vs MPLS: Why Modern Enterprises Are Making the Switch",
    excerpt:
      "MPLS has been the gold standard for enterprise networking for decades. But SD-WAN is rapidly changing the equation. We explore the key differences and migration strategies.",
    category: "Networking",
    date: "November 20, 2024",
    readTime: "9 min read",
    author: "David Kim",
    authorRole: "Network Engineer",
    authorAvatar: "/images/author-david-kim-network.jpg",
    image: "/images/blog-sdwan-vs-mpls-enterprise-networking.jpg",
    slug: "sdwan-vs-mpls-enterprise",
  },
  {
    id: "5",
    title: "Building a Resilient Disaster Recovery Plan for SMBs",
    excerpt:
      "60% of small businesses that suffer a major data loss shut down within 6 months. Here's a practical, cost-effective disaster recovery framework for SMBs.",
    category: "Managed IT",
    date: "November 12, 2024",
    readTime: "7 min read",
    author: "Emily Rodriguez",
    authorRole: "IT Consultant",
    authorAvatar: "/images/author-emily-rodriguez-consultant.jpg",
    image: "/images/blog-disaster-recovery-plan-smb.jpg",
    slug: "disaster-recovery-plan-smb",
  },
  {
    id: "6",
    title: "Microservices vs Monolith: When to Break Up Your Application",
    excerpt:
      "Microservices promise scalability and agility, but they come with real complexity costs. We help you decide when the migration is worth it — and when it isn't.",
    category: "Software Dev",
    date: "November 5, 2024",
    readTime: "10 min read",
    author: "Alex Turner",
    authorRole: "Lead Software Architect",
    authorAvatar: "/images/author-alex-turner-architect.jpg",
    image: "/images/blog-microservices-vs-monolith-architecture.jpg",
    slug: "microservices-vs-monolith",
  },
];

export const blogCategories = [
  "All",
  "Cybersecurity",
  "Cloud",
  "AI & Automation",
  "Networking",
  "Managed IT",
  "Software Dev",
];
