import React from 'react';
import { motion } from 'framer-motion';

const VencvoxBenefits = () => {
  const benefits = [
    {
      title: "Industry-Specific Expertise",
      description: "Our recruiters specialize in your sector for better candidate matches.",
      icon: "👔"
    },
    {
      title: "Faster Hiring Cycles",
      description: "Reduce time-to-hire with our streamlined processes and vast networks.",
      icon: "⏱️"
    },
    {
      title: "Cost Efficiency",
      description: "Optimize your recruitment budget with our scalable solutions.",
      icon: "💰"
    },
    {
      title: "Quality Guarantee",
      description: "We stand behind our placements with industry-leading guarantees.",
      icon: "✅"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="border-b-4 border-red-600 pb-2">Benefits of Partnering With Vencvox</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
          >
            <div className="text-4xl mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Animated Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-16 bg-red-600 text-white p-8 rounded-xl"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl font-bold">98%</div>
            <div>Placement Success</div>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl font-bold">50%</div>
            <div>Faster Hiring</div>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl font-bold">10K+</div>
            <div>Professionals Placed</div>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl font-bold">200+</div>
            <div>Happy Clients</div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default VencvoxBenefits;