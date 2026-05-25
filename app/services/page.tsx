'use client';
// Services Page - Simple, clear service tiers
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SimpleServices from '@/components/SimpleServices';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-coastal-50 via-coastal-50 to-coastal-100">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-5xl md:text-6xl font-display font-bold text-coastal-900 mb-6">
                How I Can Help
              </h1>
              <p className="text-xl text-coastal-600 max-w-3xl mx-auto leading-relaxed">
                Three simple ways to work with me. Choose what fits your life, your property, and your goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <SimpleServices />

        {/* What's Included Across All Tiers */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold text-coastal-900 mb-8 text-center">
                No Matter Which Tier, You Get
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  'Direct access to me (calls, texts, emails)',
                  'Quick response times (usually same day)',
                  'Local expertise about our market',
                  'Transparent communication & updates',
                  'Genuine care for your property',
                  'Flexible arrangements that work for you',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-coastal-500 font-bold text-lg mt-0.5">✓</span>
                    <p className="text-coastal-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-coastal-50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-coastal-900 mb-6">
                Ready to Pick a Tier?
              </h2>
              <p className="text-lg text-coastal-700 mb-8">
                Let's talk about which option works best for you.
              </p>
              <Link href="/contact">
                <button className="px-8 py-4 bg-coastal-500 text-white rounded-lg font-semibold hover:bg-coastal-600 transition-colors button-glow">
                  Get in Touch
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
