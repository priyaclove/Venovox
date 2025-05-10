"use client";
import React from 'react';
import { motion } from 'framer-motion';
import payrollData from '@/data/payrollData.json';

const PayrollServices = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-br from-gray-50 to-white pt-40"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl font-bold mb-6"
            animate={{ 
              color: ['#000', '#e63946', '#000'],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity 
            }}
          >
            {payrollData.hero.title}
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {payrollData.hero.description}
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {payrollData.services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-red-600">{service.title}</h3>
                <p className="mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-start">
                      <span className="text-red-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PEO Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{payrollData.peoBenefits.title}</h2>
            <p className="text-xl max-w-3xl mx-auto">{payrollData.peoBenefits.description}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {payrollData.peoBenefits.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="py-16 bg-red-600 text-white text-center"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Streamline Your Payroll?</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-8 py-3 rounded-full font-bold shadow-lg"
          >
            Get Started
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default PayrollServices;