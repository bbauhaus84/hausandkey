// Testimonials section for home page
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    title: 'Property Owner',
    text: 'I was stressed managing everything on my own. Within weeks of working with Haus & Key, my bookings increased and I got my weekends back. Highly recommend.',
    rating: 5,
  },
  {
    name: 'James L.',
    title: 'Airbnb Host',
    text: 'Professional, responsive, and genuinely cares about guest experience. My property has never run smoother. Worth every penny.',
    rating: 5,
  },
  {
    name: 'Emma & David',
    title: 'Multi-Property Owners',
    text: 'Finally found someone we can trust with our properties. The communication is exceptional and our revenue has grown 25% in the first quarter.',
    rating: 5,
  },
];

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Property Owners Say
          </h2>
          <p className="text-xl text-slate-600">
            Real feedback from hosts who trust us with their properties
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 rounded-xl border border-slate-200 bg-slate-50 hover:shadow-lg transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-700 mb-6 italic">"{testimonial.text}"</p>

              {/* Author */}
              <div>
                <p className="font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-600">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
