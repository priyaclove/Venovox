// components/AboutUs.tsx
'use client'

import { motion } from 'framer-motion'
import { MailIcon } from 'lucide-react'

export default function AboutUs() {
  return (
    <div className="bg-white text-gray-900 px-6 py-24 ">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-red-700 mb-4 pt-12">Hiring Made Smooth and Transparent</h1>
          <p className="text-lg text-gray-600">Empowering businesses with streamlined, trustworthy hiring and advisory services.</p>
        </motion.div>

        {/* Our Story */}
        <motion.section
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Founded with a mission to redefine talent solutions, Venovox has evolved from a modest venture into a trusted name in the Talent Management space. 
            Our journey is driven by innovation, client-first thinking, and the relentless pursuit of excellence. Today, we deliver high-impact solutions designed to help your business grow sustainably and ethically.
          </p>
        </motion.section>

        {/* Our Approach */}
        <motion.section
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Approach</h2>
          <p className="text-gray-600 leading-relaxed">
            At Venovox, we partner with you to deeply understand your unique goals and challenges. Our integrated, consultative approach blends human insight with advanced tools, ensuring solutions that are not only tailored but future-ready. We believe in long-term impact, not short-term fixes.
          </p>
        </motion.section>

        {/* Our Services */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="border rounded-2xl p-6 shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-red-700 mb-2">Human Resource Consulting</h3>
              <p className="text-gray-600">
                End-to-end HR solutions from background verification and workplace investigations to training, talent acquisition, and compliance — tailored for a high-performance culture.
              </p>
            </div>

            {/* Service 2 */}
            <div className="border rounded-2xl p-6 shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-red-700 mb-2">Advisory & Strategy</h3>
              <p className="text-gray-600">
                We help you rethink, restructure, and realign your business with strategic change management, HR planning, and actionable insights to scale intelligently.
              </p>
            </div>

            {/* Service 3 */}
            <div className="border rounded-2xl p-6 shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-red-700 mb-2">Research & Audit</h3>
              <p className="text-gray-600">
                Our team conducts deep-dive audits and feasibility studies backed by risk assessment, IP analysis, and compliance checks — reducing liabilities, boosting resilience.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Contact Us CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-100 rounded-xl p-10 text-center shadow-md"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Need to Reach Us?</h3>
          <p className="text-gray-600 mb-6">
            Drop us a ticket — we respond within 24 hours.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-red-700 text-white px-6 py-3 rounded-full hover:bg-red-800 transition"
          >
            <MailIcon size={18} />
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  )
}
