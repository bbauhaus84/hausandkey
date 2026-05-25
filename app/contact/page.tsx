'use client';
// Contact Page - Contact form and information
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="pt-32 pb-12 px-4 bg-gradient-to-br from-coastal-50 via-coastal-50 to-coastal-100">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-5xl md:text-6xl font-display font-bold text-coastal-900 mb-6">
                Let's Chat
              </h1>
              <p className="text-xl text-coastal-600 max-w-3xl mx-auto leading-relaxed">
                Tell me about your property, your goals, and what's on your mind. I respond within 24 hours—personally.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <ContactForm />
          </div>
        </section>

        {/* Service Area Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-coastal-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-coastal-900 mb-4">
                Area of Service
              </h2>
              <p className="text-lg text-coastal-600 mb-6">
                We primarily serve the local area and are open to discussing select out-of-area properties on a case-by-case basis. Reach out to see if we're a good fit for your specific situation.
              </p>
              <div className="p-8 rounded-lg bg-white border-2 border-amber-200">
                <p className="text-coastal-700 text-lg leading-relaxed">
                  No matter where your property is located, we welcome the conversation. Our portfolio includes diverse property types and markets—let's explore how we can help.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Quick Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-coastal-900 mb-12 text-center">
                Before You Contact Us
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-coastal-900 mb-3">
                    What should I prepare?
                  </h3>
                  <p className="text-coastal-700 leading-relaxed mb-4">
                    Have the following handy for our initial conversation:
                  </p>
                  <ul className="space-y-2 text-coastal-700 ml-4">
                    <li>• Property type and size (studio, 1BR, etc.)</li>
                    <li>• Current occupancy rate or booking frequency</li>
                    <li>• Whether you're currently listed on Airbnb, VRBO, or both</li>
                    <li>• Your main challenge or goal (better bookings, less work, higher revenue)</li>
                    <li>• Any specific concerns or priorities</li>
                  </ul>
                </div>

                <div className="border-t border-coastal-200 pt-8">
                  <h3 className="text-2xl font-semibold text-coastal-900 mb-3">
                    How quickly can we get started?
                  </h3>
                  <p className="text-coastal-700 leading-relaxed">
                    After an initial consultation, we can typically begin onboarding within 48 hours and launch your optimized listing within one week. Every property is unique, so timeline and scope are customized to your needs.
                  </p>
                </div>

                <div className="border-t border-coastal-200 pt-8">
                  <h3 className="text-2xl font-semibold text-coastal-900 mb-3">
                    Do you work with multiple properties?
                  </h3>
                  <p className="text-coastal-700 leading-relaxed">
                    Absolutely. We work with owners who have one property or many. Each gets personalized strategy and dedicated attention.
                  </p>
                </div>

                <div className="border-t border-coastal-200 pt-8">
                  <h3 className="text-2xl font-semibold text-coastal-900 mb-3">
                    What's the next step after I submit this form?
                  </h3>
                  <p className="text-coastal-700 leading-relaxed">
                    We'll review your submission and reach out within 24 hours to discuss your property, goals, and timeline. If it's a good fit, we'll schedule a consultation call to explore how we can help.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
