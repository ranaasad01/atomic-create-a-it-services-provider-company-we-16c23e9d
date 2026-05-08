export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "James Whitfield",
    role: "CEO & Co-Founder",
    bio: "20+ years in enterprise IT. Former CTO at Fortune 500 companies. Passionate about using technology to solve real business problems.",
    image: "/images/team-james-whitfield-ceo.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: "2",
    name: "Sarah Chen",
    role: "Chief Security Officer",
    bio: "CISSP-certified security expert with a decade of experience protecting critical infrastructure for financial and healthcare organizations.",
    image: "/images/team-sarah-chen-cso.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: "3",
    name: "Marcus Johnson",
    role: "VP of Cloud Architecture",
    bio: "AWS and Azure certified architect who has led 200+ cloud migrations. Specializes in cost optimization and high-availability design.",
    image: "/images/team-marcus-johnson-cloud.jpg",
    linkedin: "#",
  },
  {
    id: "4",
    name: "Priya Patel",
    role: "Head of Innovation",
    bio: "AI/ML enthusiast and digital transformation strategist. Leads our R&D initiatives and emerging technology practice.",
    image: "/images/team-priya-patel-innovation.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: "5",
    name: "David Kim",
    role: "Director of Networking",
    bio: "CCIE-certified network engineer with expertise in SD-WAN, data center design, and large-scale enterprise deployments.",
    image: "/images/team-david-kim-networking.jpg",
    linkedin: "#",
  },
  {
    id: "6",
    name: "Emily Rodriguez",
    role: "Client Success Director",
    bio: "Dedicated to ensuring every client achieves measurable outcomes. Manages our portfolio of 150+ enterprise relationships.",
    image: "/images/team-emily-rodriguez-success.jpg",
    linkedin: "#",
    twitter: "#",
  },
];
