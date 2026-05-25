// FAQ section for home page
'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What properties do you work with?',
    answer:
      'We specialize in studios, one-bedroom apartments, and smaller homes perfect for Airbnb hosting. We help owners who want professional management but may lack the time or expertise.',
  },
  {
    question: 'How do you handle guest communication?',
    answer:
      'We respond to guest messages quickly—typically within 1-2 hours. Our approach is warm, professional, and thorough. We handle booking inquiries, check-in instructions, and any guest concerns.',
  },
  {
    question: 'Can you manage multiple properties?',
    answer:
      'Absolutely. We work with owners who have one property or many. Each property gets personalized attention and optimized strategies tailored to its unique market.',
  },
  {
    question: 'How is pricing determined?',
    answer:
      "We offer transparent, value-based pricing that scales with your property performance. Most owners see ROI within the first month. Let's discuss what works best for you.",
  },
  {
    question: 'Do you handle cleaning coordination?',
    answer:
      'Yes. We manage the entire turnover process—scheduling cleaners, quality checks, and guest feedback. Your property stays in perfect condition.',
  },
  {
    question: 'What about reviews and ratings?',
    answer:
      'We actively manage reviews, respond professionally to feedback, and continuously optimize based on guest input. Positive reviews drive bookings, and we take this seriously.',
  },
];

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Got questions? We've got answers. Still curious? Let's chat.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border border-slate-200 rounded-lg overflow-hidden hover:border-amber-300 transition-colors"
            >
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="w-full px-6 py-4 text-left font-semibold text-slate-900 flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                {faq.question}
                <motion.div
                  animate={{
                    rotate: expandedIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} className="text-amber-600" />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-slate-200 bg-slate-50"
                  >
                    <p className="px-6 py-4 text-slate-700">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate-600 mb-4">Don't see your question?</p>
          <a href="/contact">
            <button className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-semibold">
              Get in Touch
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
