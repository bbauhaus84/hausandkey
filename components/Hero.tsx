'use client';
// Hero section for home page - coastal boutique aesthetic
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 coastal-gradient z-0" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 bg-coastal-100 text-coastal-700 rounded-full text-sm font-medium mb-6">
                ✨ Boutique Coastal Living
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold text-coastal-900 mb-6 leading-tight font-display"
            >
              Let's Make Hosting
              <span className="block text-coastal-500">Simple</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-coastal-700 mb-10 leading-relaxed max-w-xl"
            >
              I'm here to handle the heavy lifting—guest communication, pricing, cleaning coordination, and everything in between. You focus on what you love. Your property deserves someone who cares as much as you do.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <button className="px-8 py-4 bg-coastal-500 text-white rounded-lg font-semibold hover:bg-coastal-600 transition-colors flex items-center gap-2 text-base button-glow">
                  Schedule a Free Chat
                  <ArrowRight size={18} />
                </button>
              </Link>
              <Link href="/services">
                <button className="px-8 py-4 border-2 border-coastal-500 text-coastal-600 rounded-lg font-semibold hover:bg-coastal-50 transition-colors text-base">
                  Explore Services
                </button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-12 pt-10 border-t border-coastal-200 space-y-4"
            >
              <p className="text-sm text-coastal-600">By the numbers</p>
              <div className="flex gap-8 flex-wrap">
                <div>
                  <p className="text-3xl font-bold text-coastal-600">287+</p>
                  <p className="text-sm text-coastal-700">Coastal Stays</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-coastal-600">100%</p>
                  <p className="text-sm text-coastal-700">Response Rate</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-coastal-600">15+</p>
                  <p className="text-sm text-coastal-700">Years Expert</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Coastal Image Gallery */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:block relative h-96 lg:h-full min-h-96"
          >
            <div className="space-y-4 h-full">
              <div className="grid grid-cols-2 gap-4 h-2/3">
                {/* Santa Barbara placeholder */}
                <div className="relative rounded-xl overflow-hidden shadow-card group">
                  <div className="w-full h-full bg-gradient-to-br from-coastal-200 to-coastal-300 flex items-center justify-center">
                    <span className="text-coastal-600 text-sm font-medium">Santa Barbara</span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>

                {/* Montecito placeholder */}
                <div className="relative rounded-xl overflow-hidden shadow-card group">
                  <div className="w-full h-full bg-gradient-to-br from-coastal-300 to-coastal-400 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Montecito</span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
              </div>

              {/* Larger featured image */}
              <div className="relative rounded-xl overflow-hidden shadow-card h-1/3">
                <div className="w-full h-full bg-gradient-to-r from-sage to-coastal-400 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Coastal Living at Its Best</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
