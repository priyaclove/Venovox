"use client";
import { motion } from "framer-motion";
import { 
  Users, Search, Shield, FileText, 
  BarChart, Brain, Handshake, Mail,
  Globe, Briefcase, BookOpen, ChevronRight
} from "lucide-react";

export default function HRServicesPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-900 to-red-700 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Optimize Hiring Practices
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl max-w-3xl mb-8"
          >
            A strong focus on workforce talent shapes both existing and potential employees' 
            relationship with the organization, directly impacting business success.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <button className="bg-white text-red-700 px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-red-50 transition">
              Explore Services <ChevronRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Workplace Investigation */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="bg-red-100 p-3 rounded-full">
              <Search className="text-red-700 w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Workplace Investigation</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 mb-6">
                Workplace investigation is a process used to gather and examine information to 
                determine whether a workplace policy or procedure has been violated.
              </p>
              <p className="text-gray-600 mb-6">
                Our field investigators are experts in conducting interviews, reviewing documents, 
                and gathering relevant information to facilitate thorough investigations.
              </p>
              <p className="text-gray-600">
                Employers have a legal obligation to investigate allegations of wrongdoing. 
                Venovox supports employers to maintain clear investigation policies.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-red-50 p-8 rounded-xl border border-red-100"
            >
              <h3 className="text-xl font-semibold text-red-800 mb-4">Our Investigation Services</h3>
              <ul className="space-y-4">
                {[
                  "Pre & Post Employment Screening",
                  "Regulatory Checks",
                  "Reputational Screening",
                  "Vendor Screening",
                  "Customer Verification"
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <Shield className="text-red-600 w-5 h-5" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NLE Section */}
      <section className="py-20 px-6 bg-red-50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-red-100 px-4 py-2 rounded-full mb-4">
              <Brain className="text-red-700 w-5 h-5" />
              <span className="text-red-700 font-medium">Innovative Assessment</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Neuro-Linguistic Enneagram (NLE)</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A powerful combination of Neuro-Linguistic Programming and Enneagram personality system for workforce analysis.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">What is NLE?</h3>
              <p className="text-gray-600 mb-6">
                NLE integrates the insights of the Enneagram with practical NLP techniques to provide 
                powerful tools for personal growth and development in the workplace.
              </p>
              <p className="text-gray-600">
                It helps individuals gain self-awareness and improve relationships, while helping 
                organizations create ideal candidate profiles and improve team dynamics.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Benefits of NLE</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Users />, text: "Improved Team Dynamics" },
                  { icon: <BarChart />, text: "Increased Productivity" },
                  { icon: <Handshake />, text: "Better Communication" },
                  { icon: <Briefcase />, text: "Enhanced Leadership" }
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3"
                  >
                    <div className="bg-red-100 p-2 rounded-full text-red-700">
                      {item.icon}
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Change Management */}
   <section className="py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="grid md:grid-cols-2 gap-12 items-center"
    >
      {/* Left Text Content */}
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-red-100 p-3 rounded-full">
            <BookOpen className="text-red-700 w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Change Management</h2>
        </div>
        <p className="text-gray-600 mb-6">
          Our process helps organizations smoothly implement changes within operations, 
          processes, and systems to become more adaptable and efficient.
        </p>
        <p className="text-gray-600">
          We enhance the organization's ability to adapt to market changes, encourage 
          employee engagement, and increase competitiveness through strategic change.
        </p>
      </div>

      {/* Right Card */}
      <motion.div
        initial={{ scale: 0.95 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-red-700 text-white p-8 rounded-xl"
      >
        <h3 className="text-xl font-semibold mb-4">Key Outcomes</h3>
        <ul className="space-y-3">
          {[
            "Smooth technology adoption",
            "Improved operational efficiency",
            "Enhanced employee collaboration",
            "Minimized business disruptions",
            "Data-driven decision making"
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <ChevronRight className="text-red-200 w-4 h-4" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  </div>
</section>


      {/* Contact CTA */}
      <section className="py-20 px-6 bg-red-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Globe className="w-12 h-12 mx-auto mb-6 text-red-300" />
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your HR Strategy?</h2>
            <p className="text-red-100 max-w-2xl mx-auto mb-8">
              Our experts are ready to discuss your unique needs and craft solutions that drive measurable results.
            </p>
            <button className="bg-white text-red-700 px-8 py-3 rounded-full font-medium flex items-center gap-2 mx-auto hover:bg-red-50 transition">
              <Mail size={18} /> Contact Us
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}