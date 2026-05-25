'use client';
// About Page - Founder story and bio
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Heart, Zap, Users, Target, Award } from 'lucide-react';
import Link from 'next/link';

export default function About() {
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
                Hi, I'm Here to Help
              </h1>
              <p className="text-xl text-coastal-600 max-w-3xl mx-auto leading-relaxed">
                I've hosted 287+ stays, managed properties for 15+ years, and learned that great hosting is about genuine care. Your property deserves someone who gets that.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Founder Story Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold text-coastal-900 mb-6">The Haus & Key Story</h2>
                <p className="text-lg text-coastal-700 leading-relaxed mb-4">
                  I started as a property owner myself, managing my own boutique studio attached to my house. Over 287 stays, I learned that exceptional hospitality comes from genuine care, attention to detail, and fast communication. My guests consistently praised our communication, cleanliness, ease of check-in, detailed instructions, comfortable accommodations, and how true the listing was to reality.
                </p>
                <p className="text-lg text-coastal-700 leading-relaxed mb-4">
                  But I fell in love with the entire process—not just owning a property, but the careful coordination, guest experience design, and revenue optimization that makes a rental thrive. That passion led me to start Haus & Key: a co-hosting service for owners who share my values but lack the time (or desire) to handle everything themselves.
                </p>
              </div>

              <div className="border-t-2 border-amber-200 pt-8">
                <h3 className="text-2xl font-bold text-coastal-900 mb-6">What I Do Best</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: Heart,
                      title: 'Professional Yet Warm',
                      description:
                        'I bring genuine kindness and professionalism to every guest interaction, every decision, and every detail.',
                    },
                    {
                      icon: Zap,
                      title: 'Lightning-Fast Response',
                      description:
                        'Guest messages get responses quickly. I understand that fast communication builds trust and drives bookings.',
                    },
                    {
                      icon: Target,
                      title: 'Guest-First Approach',
                      description:
                        'I listen to guest feedback and use it to continuously improve the property, amenities, and experience.',
                    },
                    {
                      icon: Award,
                      title: 'Operations & Strategy',
                      description:
                        '15+ years in project management, editorial, production, customer experience, and operations.',
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="p-6 rounded-lg bg-coastal-50 border border-coastal-100">
                        <Icon className="w-8 h-8 text-coastal-500 mb-3" />
                        <h4 className="font-semibold text-coastal-900 mb-2">{item.title}</h4>
                        <p className="text-coastal-700 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="border-t-2 border-amber-200 pt-8">
                <h3 className="text-2xl font-bold text-coastal-900 mb-6">Who I Partner With</h3>
                <p className="text-lg text-coastal-700 leading-relaxed mb-4">
                  I work with property owners who are:
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    'Professional and kind—people who care about their properties and guests',
                    "Busy or overwhelmed—owners who lack the time to manage daily operations",
                    "Hands-off by choice—those who don't want to handle guest communication, cleaning coordination, or pricing",
                    'Committed to quality—owners who value excellence and are willing to invest in it',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-coastal-500 font-bold mt-1">✓</span>
                      <span className="text-coastal-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t-2 border-amber-200 pt-8">
                <h3 className="text-2xl font-bold text-coastal-900 mb-6">My Professional Background</h3>
                <div className="p-6 rounded-lg bg-slate-100">
                  <p className="text-coastal-700 text-lg leading-relaxed">
                    With 15+ years of professional experience in <strong>project management, editorial, production, customer experience, and operations</strong>, I've built a career on managing complex workflows, delivering quality at scale, and understanding what exceptional customer care looks like.
                  </p>
                  <p className="text-coastal-700 text-lg leading-relaxed mt-4">
                    That foundation directly translates to boutique hosting: coordinating vendors, managing timelines, anticipating guest needs, and optimizing every process.
                  </p>
                </div>
              </div>

              <div className="border-t-2 border-amber-200 pt-8">
                <h3 className="text-2xl font-bold text-coastal-900 mb-6">Our Promise</h3>
                <div className="p-8 rounded-lg bg-gradient-to-br from-coastal-50 to-white border-2 border-amber-200">
                  <p className="text-lg text-coastal-900 font-semibold mb-4">
                    Haus & Key isn't just a co-hosting service—it's a partnership.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Personalized attention to your specific property and goals',
                      'Consistent, warm communication with guests and owners alike',
                      'Transparent reporting so you always know how your property performs',
                      'Continuous optimization based on guest feedback and market trends',
                      'Peace of mind that your property is cared for like our own',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Heart className="w-5 h-5 text-coastal-500 mt-0.5 flex-shrink-0" />
                        <span className="text-coastal-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t-2 border-amber-200 pt-8">
                <h3 className="text-2xl font-bold text-coastal-900 mb-6">By the Numbers</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    { number: '287+', label: 'Stays Hosted' },
                    { number: '15+', label: 'Years Experience' },
                    { number: '100%', label: 'Response Rate' },
                    { number: '∞', label: 'Care & Passion' },
                  ].map((stat, i) => (
                    <div key={i} className="text-center p-6 rounded-lg bg-coastal-50 border border-coastal-100">
                      <p className="text-4xl font-bold text-coastal-500 mb-2">{stat.number}</p>
                      <p className="text-coastal-700 font-medium">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-coastal-900 to-coastal-800 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                If you're a property owner who values hospitality, excellence, and a genuine partnership—let's talk about how I can help your rental thrive.
              </p>
              <Link href="/contact">
                <button className="px-8 py-4 bg-coastal-500 text-white rounded-lg font-semibold hover:bg-coastal-600 transition-colors">
                  Schedule a Consultation
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
