'use client';
// Coastal gallery showcasing Santa Barbara and Montecito properties
import { motion } from 'framer-motion';

export default function CoastalGallery() {
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

  const locations = [
    {
      name: 'Santa Barbara',
      description: 'Charming beachside properties with ocean views',
      color: 'from-coastal-300 to-coastal-400',
      featured: true,
    },
    {
      name: 'Montecito',
      description: 'Luxury estates nestled in the foothills',
      color: 'from-sage to-coastal-300',
      featured: true,
    },
    {
      name: 'Carpinteria',
      description: 'Cozy coastal retreats',
      color: 'from-coastal-200 to-coastal-300',
      featured: false,
    },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-coastal-900 mb-6">
              Beautiful Coastal Living
            </h2>
            <p className="text-xl text-coastal-600 max-w-2xl mx-auto leading-relaxed">
              From the charm of Santa Barbara to the serenity of Montecito, we specialize in managing boutique properties in the Central Coast's most desirable locations.
            </p>
          </motion.div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
        >
          {/* Featured: Santa Barbara - Large */}
          <motion.div
            variants={itemVariants}
            className="md:row-span-2 relative rounded-2xl overflow-hidden shadow-card group"
          >
            <div className={`w-full h-96 md:h-full bg-gradient-to-br ${locations[0].color} flex flex-col items-center justify-center relative`}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="relative z-10 text-center">
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                  {locations[0].name}
                </h3>
                <p className="text-white/90 text-lg">{locations[0].description}</p>
              </div>
            </div>
          </motion.div>

          {/* Featured: Montecito */}
          <motion.div
            variants={itemVariants}
            className="relative rounded-2xl overflow-hidden shadow-card group"
          >
            <div className={`w-full h-80 bg-gradient-to-br ${locations[1].color} flex flex-col items-center justify-center relative`}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="relative z-10 text-center">
                <h3 className="text-3xl font-display font-bold text-white mb-2">
                  {locations[1].name}
                </h3>
                <p className="text-white/90">{locations[1].description}</p>
              </div>
            </div>
          </motion.div>

          {/* Carpinteria */}
          <motion.div
            variants={itemVariants}
            className="relative rounded-2xl overflow-hidden shadow-card group"
          >
            <div className={`w-full h-80 bg-gradient-to-br ${locations[2].color} flex flex-col items-center justify-center relative`}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-display font-bold text-coastal-900 mb-2">
                  {locations[2].name}
                </h3>
                <p className="text-coastal-700">{locations[2].description}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-coastal-50 to-coastal-100 border border-coastal-200 text-center"
        >
          <h3 className="text-2xl font-display font-bold text-coastal-900 mb-3">
            Your Property, Our Passion
          </h3>
          <p className="text-coastal-700 mb-6 max-w-2xl mx-auto">
            Whether you own a cozy cottage or an elegant estate, we bring deep knowledge of the local market and genuine care for your property's success.
          </p>
          <a href="/contact">
            <button className="px-8 py-3 bg-coastal-500 text-white rounded-lg font-semibold hover:bg-coastal-600 transition-colors button-glow">
              Tell Us About Your Property
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
