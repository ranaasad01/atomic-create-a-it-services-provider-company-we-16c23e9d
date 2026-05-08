"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Check, Zap } from 'lucide-react';
import { pricingPlans } from "@/lib/data/pricing";
import { staggerContainer, staggerItem } from "@/lib/motionVariants";

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-28 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-200 text-cyan-600 text-sm font-medium px-4 py-2 rounded-full mb-4"
          >
            Transparent Pricing
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] mb-4"
          >
            Simple, Predictable Plans
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            No hidden fees, no surprises. Choose the plan that fits your business and scale as you grow.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={staggerItem}
              className={"relative rounded-3xl p-8 flex flex-col " + (plan.highlighted ? "bg-[#0A2540] text-white shadow-2xl shadow-[#0A2540]/30 scale-105" : "bg-[#F4F7FA] text-[#0A2540]")}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                  <Zap className="w-3 h-3" fill="white" />
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className={"text-xl font-bold mb-2 " + (plan.highlighted ? "text-white" : "text-[#0A2540]")}>{plan.name}</h3>
                <div className="flex items-end gap-1 mb-3">
                  <span className={"text-4xl font-extrabold " + (plan.highlighted ? "text-white" : "text-[#0A2540]")}>{plan.price}</span>
                  {plan.period && <span className={"text-sm mb-1.5 " + (plan.highlighted ? "text-white/60" : "text-gray-500")}>{plan.period}</span>}
                </div>
                <p className={"text-sm leading-relaxed " + (plan.highlighted ? "text-white/70" : "text-gray-500")}>{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className={"w-4 h-4 mt-0.5 shrink-0 " + (plan.highlighted ? "text-cyan-400" : "text-cyan-600")} />
                    <span className={plan.highlighted ? "text-white/80" : "text-gray-600"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={"block text-center font-semibold py-3.5 rounded-xl transition-all duration-200 " + (plan.highlighted ? "bg-cyan-500 hover:bg-cyan-400 text-white shadow-lg shadow-cyan-500/30" : "bg-white hover:bg-gray-50 text-[#0A2540] border border-gray-200 hover:border-cyan-300")}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-gray-400 text-sm mt-8"
        >
          All plans include onboarding support and a 30-day satisfaction guarantee. Need a custom solution?{" "}
          <Link href="/contact" className="text-cyan-600 hover:underline font-medium">Contact our sales team.</Link>
        </motion.p>
      </div>
    </section>
  );
}
