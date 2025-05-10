"use client";
import React from 'react';
import { motion } from 'framer-motion';
import VencvoxBenefits from './benefits';
import VencvoxServices from './services';

const VencvoxHero = () => {
  return (
    <div className="min-h-screen bg-white p-8 pt-30">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            animate={{
              color: ['#000000', '#e63946', '#000000'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            <span className="block">Stand Out as a</span>
            <span className="text-red-600">Top Employer</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Attract elite talent to fuel your growing organization with Vencvox
          </motion.p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition-all duration-300">
              Partner With Us
            </button>
          </motion.div>
        </motion.div>

        {/* Why Choose Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="border-b-4 border-red-600 pb-2">Why Choose Vencvox?</span>
          </h2>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              className="bg-gray-100 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-red-600 mb-4">HR Sustainability</h3>
              <p className="text-gray-700">
                Future-proof your workforce with sustainable hiring practices that adapt to market changes while maintaining quality.
              </p>
            </motion.div>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              className="bg-gray-100 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-red-600 mb-4">Elite Talent Access</h3>
              <p className="text-gray-700">
                Tap into our vast network of top-tier professionals actively seeking their next career challenge.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Benefits and Services */}
        <VencvoxBenefits />
        <VencvoxServices />
      </div>
    </div>
  );
};

export default VencvoxHero;