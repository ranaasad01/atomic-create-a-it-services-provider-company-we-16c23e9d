"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, Shield, Monitor, Code, Briefcase, ArrowRight, Wifi } from 'lucide-react';
import { services } from "@/lib/data/services";
import { staggerContainer, staggerItem } from "@/lib/motionVariants";

const iconMap: Record<string, React.ReactNode> = {
  Cloud: <Cloud className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  Network: <Wifi className="w-6 h-6" />,
  Monitor: <Monitor className="w-6 h-6" />,
  Code: <Code className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
};

const gradientMap: Record<string, string> = {
  "from-blue-500 to-cyan-400": "from-blue-500 to-cyan-400",
  "from-red-500 to-orange-400": "from-red-500 to-orange-400",
  "from-green-500 to-teal-400": "from-green-500 to-teal-400",
  "from-purple-500 to-indigo-400": "from-purple-500 to-indigo-400",
  "from-yellow-500 to-amber-400": "from-yellow-500 to-amber-400",
  "from-pink-500 to-rose-400": "from-pink-500 to-rose-400",
};

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-28 bg-[#F4F7FA]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            ref={ref}
            className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-200 text-cyan-600 text-sm font-medium px-4 py-2 rounded-full mb-4"
          >
            What We Offer
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] mb-4"
          >
            Comprehensive IT Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            From infrastructure to innovation — we provide the full spectrum of IT services your business needs to thrive in the digital age.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={staggerItem}
              className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-cyan-100 hover:-translate-y-1"
            >
              <div className={"w-14 h-14 rounded-2xl bg-gradient-to-br " + service.color + " flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300"}>
                {iconMap[service.icon]}
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.shortDesc}</p>
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 3).map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={"/services#" + service.id}
                className="inline-flex items-center gap-1.5 text-cyan-600 font-semibold text-sm hover:gap-3 transition-all duration-200"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#0A2540] hover:bg-[#0d3060] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:-translate-y-0.5"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
