// Contact form component for contact page
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, send this data to your backend or email service
    console.log('Form submitted:', formState);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Left: Contact Information */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Get in Touch</h2>

        <div className="space-y-8">
          {/* Email */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <Mail className="w-6 h-6 text-amber-600 mt-1" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
              <a
                href="mailto:hello@hausandkey.com"
                className="text-slate-600 hover:text-amber-600 transition-colors"
              >
                hello@hausandkey.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <Phone className="w-6 h-6 text-amber-600 mt-1" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
              <p className="text-slate-600">Available on request</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <MapPin className="w-6 h-6 text-amber-600 mt-1" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-1">Service Area</h3>
              <p className="text-slate-600">
                Primarily serving the local market, with options for select out-of-area properties.
              </p>
            </div>
          </div>

          {/* Availability */}
          <div className="mt-12 p-6 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-slate-900 font-semibold mb-2">
              Ready to discuss your property?
            </p>
            <p className="text-slate-700 text-sm">
              We typically respond within 24 hours. Let's explore how we can help you succeed.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Right: Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100 transition-all"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100 transition-all"
              placeholder="your@email.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
              Phone (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100 transition-all"
              placeholder="Your phone number"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100 transition-all resize-none"
              placeholder="Tell us about your property and what you're looking for..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors flex items-center justify-center gap-2"
          >
            <Send size={20} />
            Send Message
          </button>

          {/* Success Message */}
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
            >
              Thank you! We've received your message and will get back to you soon.
            </motion.div>
          )}
        </form>
      </motion.div>
    </div>
  );
}
