"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A2540] to-[#0d3a6e]" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mx-auto mb-6"
        >
          <Mail className="w-7 h-7 text-cyan-400" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
        >
          Stay Ahead of the Technology Curve
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/60 text-lg mb-8 max-w-xl mx-auto"
        >
          Get monthly insights on cybersecurity, cloud trends, and IT best practices delivered straight to your inbox. No spam, unsubscribe anytime.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {submitted ? (
            <div className="flex items-center justify-center gap-3 text-green-400 text-lg font-semibold">
              <CheckCircle className="w-6 h-6" />
              You&apos;re subscribed! Welcome to the NexaTech community.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                required
                className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-5 py-3.5 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all"
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 disabled:opacity-70 shadow-lg shadow-cyan-500/25"
              >
                {loading ? "Subscribing..." : (
                  <>Subscribe <ArrowRight className="w-4 h-4" /></>
                )}
              </button>
            </form>
          )}
          <p className="text-white/30 text-xs mt-4">
            Join 5,000+ IT professionals. No spam, ever.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
