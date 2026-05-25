'use client';
// Why Work With Us - value proposition section
import { motion } from 'framer-motion';
import {
  Clock,
  Heart,
  Zap,
  Shield,
  TrendingUp,
  Users,
} from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Fast Response',
    description: 'Quick to respond to guest messages—because details matter.',
  },
  {
    icon: Heart,
    title: 'Genuine Care',
    description: 'Professional yet warm approach that guests love.',
  },
  {
    icon: Zap,
    title: 'Fully Managed',
    description: 'Handles everything: messaging, cleaning, pricing, turnovers.',
  },
  {
    icon: Shield,
    title: 'Trusted Pro',
    description: '15+ years in project management, operations & customer experience.',
  },
  {
    icon: TrendingUp,
    title: 'Revenue Focused',
    description: 'Optimize listings and pricing to maximize your passive income.',
  },
  {
    icon: Users,
    title: 'Expert Network',
    description: 'Professional, kind property owners who value excellence.',
  },
];

export default function WhyUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Why Work With Us
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We blend professional expertise with genuine hospitality passion.
            Your property deserves both.
          </p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 rounded-xl border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all bg-slate-50 hover:bg-white"
              >
                <Icon className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
