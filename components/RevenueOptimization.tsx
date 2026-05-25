'use client';
// Revenue Optimization section for home page
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Calendar, DollarSign } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '287+',
    label: 'Stays Hosted',
  },
  {
    icon: BarChart3,
    value: 'Avg +25%',
    label: 'Revenue Growth',
  },
  {
    icon: Calendar,
    value: '95%+',
    label: 'Occupancy Rate',
  },
  {
    icon: DollarSign,
    value: 'Optimized',
    label: 'Dynamic Pricing',
  },
];

export default function RevenueOptimization() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Maximize Your Revenue
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Strategic pricing, optimized listings, and seamless operations combine
              to transform your property into a high-performing income stream.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                'Dynamic pricing that adapts to market demand',
                'Professional photography & copywriting',
                'Calendar optimization across platforms',
                'Guest reviews management & response',
                'Turnaround speed that reduces vacancy',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-amber-600 font-bold mt-1">✓</span>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <a href="/services">
              <button className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-semibold">
                Explore Full Services
              </button>
            </a>
          </motion.div>

          {/* Right: Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-10 h-10 text-amber-600 mb-3" />
                  <p className="text-3xl font-bold text-slate-900 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-600">{stat.label}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
