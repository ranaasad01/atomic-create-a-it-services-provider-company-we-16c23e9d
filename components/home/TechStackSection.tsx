"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const techStack = [
  { name: "AWS", logo: "☁️" },
  { name: "Microsoft Azure", logo: "🔷" },
  { name: "Google Cloud", logo: "🌐" },
  { name: "Kubernetes", logo: "⚙️" },
  { name: "Docker", logo: "🐳" },
  { name: "Terraform", logo: "🏗️" },
  { name: "Cisco", logo: "🔗" },
  { name: "VMware", logo: "💻" },
  { name: "Microsoft 365", logo: "📊" },
  { name: "Splunk", logo: "🔍" },
  { name: "CrowdStrike", logo: "🛡️" },
  { name: "Palo Alto", logo: "🔒" },
  { name: "ServiceNow", logo: "📋" },
  { name: "Datadog", logo: "📈" },
  { name: "GitHub", logo: "🐙" },
  { name: "Jenkins", logo: "🤖" },
];

const techLogos = [
  { name: "Amazon Web Services", abbr: "AWS", bg: "bg-orange-50", text: "text-orange-600" },
  { name: "Microsoft Azure", abbr: "Azure", bg: "bg-blue-50", text: "text-blue-600" },
  { name: "Google Cloud", abbr: "GCP", bg: "bg-red-50", text: "text-red-500" },
  { name: "Kubernetes", abbr: "K8s", bg: "bg-blue-50", text: "text-blue-700" },
  { name: "Docker", abbr: "Docker", bg: "bg-sky-50", text: "text-sky-600" },
  { name: "Terraform", abbr: "Terraform", bg: "bg-purple-50", text: "text-purple-600" },
  { name: "Cisco", abbr: "Cisco", bg: "bg-cyan-50", text: "text-cyan-700" },
  { name: "VMware", abbr: "VMware", bg: "bg-gray-50", text: "text-gray-700" },
  { name: "Microsoft 365", abbr: "M365", bg: "bg-blue-50", text: "text-blue-500" },
  { name: "CrowdStrike", abbr: "CrowdStrike", bg: "bg-red-50", text: "text-red-600" },
  { name: "Palo Alto", abbr: "PAN-OS", bg: "bg-orange-50", text: "text-orange-700" },
  { name: "Datadog", abbr: "Datadog", bg: "bg-purple-50", text: "text-purple-700" },
];

export default function TechStackSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-24 bg-[#0A2540]" id="technologies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-cyan-400 text-sm font-medium px-4 py-2 rounded-full mb-4"
          >
            Our Technology Stack
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
          >
            Certified Across Leading Platforms
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            We hold certifications and partnerships with the world&apos;s leading technology vendors, ensuring you get best-in-class solutions.
          </motion.p>
        </div>

        {/* Scrolling marquee */}
        <div className="relative overflow-hidden">
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {[...techLogos, ...techLogos].map((tech, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-3 shrink-0 hover:bg-white/10 transition-colors"
              >
                <div className={"w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold " + tech.bg + " " + tech.text}>
                  {tech.abbr.slice(0, 2)}
                </div>
                <span className="text-white/80 font-medium text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { cert: "AWS Certified Solutions Architect", level: "Professional" },
            { cert: "Microsoft Azure Expert", level: "MSP Partner" },
            { cert: "Cisco CCIE", level: "Enterprise Infrastructure" },
            { cert: "ISO 27001", level: "Certified Organization" },
          ].map((item) => (
            <div key={item.cert} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-cyan-400 font-bold text-sm mb-1">{item.cert}</div>
              <div className="text-white/50 text-xs">{item.level}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
