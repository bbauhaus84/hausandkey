'use client';
// Hero section for home page - main value proposition
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-white to-slate-50 px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 bg-stone-100 text-stone-700 rounded-full text-sm font-medium mb-6">
              🏠 Welcome to Haus & Key
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight"
          >
            Stress-Free Airbnb
            <span className="block text-amber-600">Co-Hosting</span>
            for Busy Property Owners
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto"
          >
            Maximize revenue, streamline operations, and deliver exceptional guest experiences—while you focus on what matters most. Professional, personalized co-hosting designed for owners who value their time.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/contact">
              <button className="px-8 py-4 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors flex items-center gap-2 text-lg">
                Schedule a Free Consultation
                <ArrowRight size={20} />
              </button>
            </Link>
            <Link href="/services">
              <button className="px-8 py-4 border-2 border-slate-900 text-slate-900 rounded-lg font-semibold hover:bg-slate-50 transition-colors text-lg">
                See Services
              </button>
            </Link>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-12 border-t border-slate-200"
          >
            <p className="text-sm text-slate-600 mb-4">Trusted by property owners who demand excellence</p>
            <div className="flex justify-center gap-8 text-slate-700 flex-wrap">
              <div>
                <p className="text-2xl font-bold text-amber-600">287+</p>
                <p className="text-sm">Stays Hosted</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-amber-600">100%</p>
                <p className="text-sm">Response Rate</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-amber-600">15+</p>
                <p className="text-sm">Years Experience</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
