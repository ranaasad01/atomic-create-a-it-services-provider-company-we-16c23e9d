"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "What industries do you serve?",
    a: "We serve clients across financial services, healthcare, retail, manufacturing, government, education, and technology sectors. Our team has deep domain expertise in regulated industries including HIPAA, PCI-DSS, and FISMA compliance.",
  },
  {
    q: "How quickly can you respond to IT emergencies?",
    a: "Our Professional and Enterprise plans include 24/7 monitoring with guaranteed response times. For critical incidents, our NOC team responds within 15 minutes. Basic plan clients receive 8×5 support with a 4-hour response SLA.",
  },
  {
    q: "Do you offer cloud migration services?",
    a: "Yes — cloud migration is one of our core competencies. We handle migrations to AWS, Azure, and Google Cloud, including lift-and-shift, re-platforming, and full cloud-native re-architecture. We use a proven 6-phase migration methodology to ensure zero-downtime transitions.",
  },
  {
    q: "Can you work with our existing IT team?",
    a: "Absolutely. Many of our clients use us as an extension of their internal IT team. We offer co-managed IT services where we handle specific functions (like security monitoring or cloud management) while your team retains control of day-to-day operations.",
  },
  {
    q: "What certifications does your team hold?",
    a: "Our team holds 150+ active certifications including AWS Solutions Architect, Azure Expert MSP, Cisco CCIE, CISSP, CISM, CompTIA Security+, PMP, and more. We maintain partnerships with AWS, Microsoft, Cisco, and Palo Alto Networks.",
  },
  {
    q: "How do you handle data security and confidentiality?",
    a: "We take data security extremely seriously. All client data is handled under strict NDAs, and our internal systems are ISO 27001 certified. We conduct annual third-party security audits and maintain SOC 2 Type II compliance.",
  },
  {
    q: "What is your pricing model?",
    a: "We offer transparent monthly subscription pricing for managed services (Basic, Professional, Enterprise tiers) and project-based pricing for one-time engagements like cloud migrations or software development. All pricing is clearly outlined with no hidden fees.",
  },
  {
    q: "Do you provide a service level agreement (SLA)?",
    a: "Yes, all our managed service plans include a formal SLA with defined uptime guarantees (99.9% for Professional, 99.99% for Enterprise), response time commitments, and escalation procedures. SLA credits are automatically applied if we miss our targets.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-28 bg-[#F4F7FA]" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-200 text-cyan-600 text-sm font-medium px-4 py-2 rounded-full mb-4"
          >
            FAQ
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 text-lg"
          >
            Everything you need to know about working with NexaTech.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-[#0A2540] pr-4">{faq.q}</span>
                <span className="shrink-0 w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600">
                  {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
