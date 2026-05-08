"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Clock, Users, TrendingUp, Shield, Headphones } from 'lucide-react';
import { staggerContainer, staggerItem } from "@/lib/motionVariants";

const differentiators = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Certified Expertise",
    description: "50+ certified professionals across AWS, Azure, Cisco, Microsoft, and security frameworks.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "24/7 Support",
    description: "Round-the-clock monitoring and support with guaranteed response times and dedicated escalation paths.",
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Client-First Approach",
    description: "Dedicated account managers and vCIO services ensure your technology strategy aligns with business goals.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Proven ROI",
    description: "Our clients average 30% reduction in IT costs and 40% improvement in operational efficiency within 12 months.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Security-First",
    description: "Every solution is designed with security at its core — not bolted on as an afterthought.",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Agile Delivery",
    description: "Rapid deployment cycles with transparent project management and regular stakeholder updates.",
    color: "bg-amber-50 text-amber-600",
  },
];

const stats = [
  { value: "98%", label: "Client Retention Rate" },
  { value: "< 2hr", label: "Avg. Response Time" },
  { value: "35%", label: "Avg. Cost Reduction" },
  { value: "500+", label: "Projects Delivered" },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-28 bg-white" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-200 text-cyan-600 text-sm font-medium px-4 py-2 rounded-full mb-4"
            >
              Why NexaTech
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] mb-5"
            >
              The IT Partner That Delivers Results
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-500 text-lg leading-relaxed mb-8"
            >
              We don&apos;t just fix problems — we build technology foundations that scale with your ambitions. Our team of certified experts brings deep industry knowledge and a relentless focus on measurable outcomes.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 gap-5"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="bg-[#F4F7FA] rounded-2xl p-5">
                  <div className="text-3xl font-extrabold text-[#0A2540] mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {differentiators.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="bg-[#F4F7FA] rounded-2xl p-5 hover:shadow-md transition-shadow duration-300"
              >
                <div className={"w-12 h-12 rounded-xl flex items-center justify-center mb-4 " + item.color}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-[#0A2540] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
