'use client';
// Home Page - Personal, boutique landing for one-person operation
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SimpleServices from '@/components/SimpleServices';
import CoastalGallery from '@/components/CoastalGallery';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Heart } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        {/* Hero Section */}
        <Hero />

        {/* Simple Services - Three Tiers */}
        <SimpleServices />

        {/* Coastal Gallery - Santa Barbara & Montecito */}
        <CoastalGallery />

        {/* Testimonials */}
        <Testimonials />

        {/* Why Me Section - Personal touch */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-coastal-900 mb-6">
                  Why Work With Me
                </h2>
                <p className="text-xl text-coastal-600">
                  I treat every property like it's my own—because I understand what matters.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Heart className="w-6 h-6 text-coastal-500 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-coastal-900 mb-2">
                      I Actually Care
                    </h3>
                    <p className="text-coastal-700 leading-relaxed">
                      This isn't a corporate operation. You're not a number to me. I know the local market, I understand your guests, and I'm invested in making your property succeed.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Heart className="w-6 h-6 text-coastal-500 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-coastal-900 mb-2">
                      You're Always in the Loop
                    </h3>
                    <p className="text-coastal-700 leading-relaxed">
                      Want updates? Direct access? A phone call instead of an email? I'm here. Communication is part of the service, not an extra charge.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Heart className="w-6 h-6 text-coastal-500 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-coastal-900 mb-2">
                      Local Expertise, Local Heart
                    </h3>
                    <p className="text-coastal-700 leading-relaxed">
                      287+ stays, 15+ years of experience, and I know Santa Barbara County inside and out. I know what guests want, what hosts need, and how to make both happy.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

        {/* Final CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-coastal-900 to-coastal-800 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Let's Get Your Property Thriving
              </h2>
              <p className="text-lg text-coastal-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                No pressure, no corporate speak. Just a conversation about your property, your goals, and how I can help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-coastal-500 text-white rounded-lg font-semibold hover:bg-coastal-400 transition-colors flex items-center justify-center gap-2 button-glow">
                    Schedule a Chat
                    <ArrowRight size={20} />
                  </button>
                </Link>
                <Link href="/about">
                  <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    Learn My Story
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
