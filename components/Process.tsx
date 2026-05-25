'use client';
// Simple 3-step process section for home page
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const steps = [
  {
    number: '1',
    title: 'Schedule a Consultation',
    description:
      "Let's talk about your property, goals, and timeline. No pressure—just a friendly conversation.",
  },
  {
    number: '2',
    title: 'We Optimize & Launch',
    description:
      'Photos, descriptions, pricing strategy—we handle the setup and get your listing ready to shine.',
  },
  {
    number: '3',
    title: 'We Manage, You Relax',
    description:
      "Guests, messages, cleanings, reviews. We've got it all. You focus on what matters to you.",
  },
];

export default function Process() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-coastal-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coastal-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-coastal-600">
            Three simple steps to stress-free hosting
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Lines (Desktop Only) */}
          <div className="hidden md:block absolute top-24 left-0 w-full h-1 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="flex flex-col items-center">
                {/* Number Circle */}
                <div className="w-24 h-24 rounded-full bg-coastal-500 text-white flex items-center justify-center text-3xl font-bold mb-6 shadow-lg">
                  {step.number}
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-coastal-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-coastal-600">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a href="/contact">
            <button className="px-8 py-4 bg-coastal-500 text-white rounded-lg font-semibold hover:bg-coastal-600 transition-colors inline-flex items-center gap-2">
              <Check size={20} />
              Get Started Today
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
