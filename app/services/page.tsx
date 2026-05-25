// Services Page - Detailed description of all services offered
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  MessageCircle,
  Sparkles,
  BarChart,
  Calendar,
  Star,
  Hammer,
  Phone,
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Sparkles,
    title: 'Listing Setup & Optimization',
    description:
      'We craft high-converting listings with professional copywriting, photography guidance, and SEO optimization to help your property stand out and attract quality guests.',
  },
  {
    icon: MessageCircle,
    title: 'Guest Communication',
    description:
      'Fast, warm, and professional responses to inquiries, booking questions, and guest messages. We handle every conversation with hospitality-first care.',
  },
  {
    icon: Hammer,
    title: 'Cleaning Coordination',
    description:
      'We manage the entire turnover process—scheduling vetted cleaners, conducting quality checks, and ensuring your property is immaculate between guests.',
  },
  {
    icon: BarChart,
    title: 'Dynamic Pricing',
    description:
      'Smart pricing strategies that adapt to seasonality, local demand, and market trends. Maximize occupancy and nightly income without leaving money on the table.',
  },
  {
    icon: Calendar,
    title: 'Calendar Management',
    description:
      'Seamless synchronization across Airbnb, VRBO, and other platforms. Prevents double-bookings and minimizes vacancy gaps between stays.',
  },
  {
    icon: Star,
    title: 'Review Management',
    description:
      'We actively monitor and respond to guest reviews professionally. Positive reviews drive more bookings—we make sure your property shines online.',
  },
  {
    icon: Phone,
    title: 'Check-in/Check-out Support',
    description:
      'Coordinated arrival and departure experiences. Clear instructions, smooth transitions, and problem-solving for a flawless guest experience.',
  },
  {
    icon: Hammer,
    title: 'Property Care Oversight',
    description:
      'Regular property inspections, vendor coordination, and proactive maintenance. Your space stays guest-ready and protected year-round.',
  },
];

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-white via-white to-slate-50">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                Full-Service Airbnb Management
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                From listing launch to guest delight, we handle every detail so your property
                performs at its best. Transparent, personalized, and boutique-quality service.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-xl border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all bg-slate-50 hover:bg-white"
                  >
                    <Icon className="w-12 h-12 text-amber-600 mb-4" />
                    <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Your Dedicated Co-Hosting Partner
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                We personally handle all operations so you don't have to.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Personal Attention',
                  items: [
                    'Dedicated property management',
                    'Owner communication & updates',
                    'Guest feedback integration',
                    'Continuous optimization',
                  ],
                },
                {
                  title: 'Professional Service',
                  items: [
                    'Fast response times',
                    'Problem-solving expertise',
                    'Guest experience focus',
                    'Transparent reporting',
                  ],
                },
                {
                  title: 'Revenue Growth',
                  items: [
                    'Dynamic pricing strategy',
                    'Listing optimization',
                    'Occupancy maximization',
                    'Performance analytics',
                  ],
                },
              ].map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-xl bg-white border border-slate-200"
                >
                  <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                    {section.title}
                  </h3>
                  <ul className="space-y-4">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Ready to transform your property?
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Schedule a free consultation to discuss your property's goals and how we can help you succeed.
              </p>
              <Link href="/contact">
                <button className="px-8 py-4 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors">
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
