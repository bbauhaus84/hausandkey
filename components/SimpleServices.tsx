'use client';
// Simple services section with three tiers - warm and personal
import { motion } from 'framer-motion';

export default function SimpleServices() {
  const services = [
    {
      name: 'The Essentials',
      fee: '9%',
      description: 'Need a helping hand with guest communication and coordination?',
      items: [
        'Guest check-ins & communication',
        'Cleaning coordination',
        'Emergency support',
        'Basic maintenance oversight',
      ],
      cta: 'Let\'s chat',
    },
    {
      name: 'The Smart Host',
      fee: '12%',
      description: 'Want more breathing room while staying involved?',
      items: [
        'Everything in Essentials, plus:',
        'Dynamic pricing strategy',
        'Listing optimization',
        'Guest reviews management',
        'Quarterly performance reports',
      ],
      cta: 'Tell me more',
      featured: true,
    },
    {
      name: 'The Carefree Host',
      fee: '18%',
      description: 'Ready to truly let go and just watch the revenue come in?',
      items: [
        'Full property management',
        '24/7 guest support',
        'Advanced pricing & optimization',
        'Inventory & supply management',
        'Monthly performance insights',
        'Everything handled end-to-end',
      ],
      cta: 'I\'m interested',
    },
  ];

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
    <section className="py-24 px-4 bg-coastal-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-coastal-900 mb-6">
              Three Ways to Work Together
            </h2>
            <p className="text-xl text-coastal-700 max-w-2xl mx-auto">
              Choose the level of hands-on help that fits your life. From light support to full management—I've got you covered.
            </p>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`rounded-2xl p-8 transition-all ${
                service.featured
                  ? 'bg-white border-2 border-coastal-500 shadow-lg scale-105'
                  : 'bg-white border border-coastal-200 shadow-card'
              }`}
            >
              {service.featured && (
                <div className="inline-block px-3 py-1 bg-coastal-100 text-coastal-700 rounded-full text-xs font-semibold mb-4">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-display font-bold text-coastal-900 mb-2">
                {service.name}
              </h3>
              <div className="text-3xl font-bold text-coastal-500 mb-4">
                {service.fee}
              </div>
              <p className="text-coastal-700 mb-6 font-medium leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-coastal-500 font-bold mt-1">✓</span>
                    <span className="text-coastal-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <a href="/contact">
                <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  service.featured
                    ? 'bg-coastal-500 text-white hover:bg-coastal-600'
                    : 'bg-coastal-100 text-coastal-700 hover:bg-coastal-200'
                }`}>
                  {service.cta}
                </button>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <p className="text-coastal-700 mb-4">
            Not sure which option fits? <a href="/contact" className="text-coastal-500 font-semibold hover:text-coastal-600">Let's talk it through.</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
