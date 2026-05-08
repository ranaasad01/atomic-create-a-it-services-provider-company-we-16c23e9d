export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Robert Harrington",
    role: "CTO",
    company: "Apex Financial Group",
    content:
      "NexaTech transformed our entire cloud infrastructure in under 6 months. The migration was seamless, and we've seen a 35% reduction in infrastructure costs. Their team is incredibly knowledgeable and responsive.",
    rating: 5,
    avatar: "/images/testimonial-robert-harrington-cto.jpg",
  },
  {
    id: "2",
    name: "Dr. Linda Okafor",
    role: "IT Director",
    company: "MedCore Health Systems",
    content:
      "After our security overhaul with NexaTech, we passed our HIPAA audit with zero findings for the first time in 5 years. Their cybersecurity team is world-class. I sleep much better at night now.",
    rating: 5,
    avatar: "/images/testimonial-linda-okafor-it-director.jpg",
  },
  {
    id: "3",
    name: "Tom Nakamura",
    role: "VP of Operations",
    company: "StyleHub Retail",
    content:
      "Our new e-commerce platform handled Black Friday traffic without a single hiccup. NexaTech delivered on every promise — on time and on budget. Our conversion rate is up 28% since launch.",
    rating: 5,
    avatar: "/images/testimonial-tom-nakamura-vp-ops.jpg",
  },
  {
    id: "4",
    name: "Angela Brooks",
    role: "City IT Manager",
    company: "City of Riverside",
    content:
      "Transitioning to NexaTech's managed IT services was the best decision we made. Our helpdesk resolution times improved by 70%, and their vCIO helped us save $1.2M in our IT budget.",
    rating: 5,
    avatar: "/images/testimonial-angela-brooks-city-it.jpg",
  },
  {
    id: "5",
    name: "Kevin Walsh",
    role: "CEO",
    company: "Launchpad Analytics",
    content:
      "NexaTech helped us go from bi-monthly releases to daily deployments. Their DevOps expertise is unmatched. We can now move at startup speed with enterprise-grade reliability.",
    rating: 5,
    avatar: "/images/testimonial-kevin-walsh-ceo-startup.jpg",
  },
];
