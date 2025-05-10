import React from 'react';
import { motion } from 'framer-motion';

const VencvoxServices = () => {
  const services = [
    {
      title: "Talent Acquisition",
      description: "End-to-end recruitment solutions tailored to your needs",
      color: "bg-red-100"
    },
    {
      title: "Industry-Specific Experts",
      description: "Recruiters who understand your business deeply",
      color: "bg-gray-100"
    },
    {
      title: "RPO (Recruitment Process Outsourcing)",
      description: "Outsource your entire hiring function to our experts",
      color: "bg-red-100"
    },
    {
      title: "MSP (Managed Services Program)",
      description: "Comprehensive workforce management solutions",
      color: "bg-gray-100"
    },
    {
      title: "Contingent Staffing",
      description: "Flexible workforce solutions for project-based needs",
      color: "bg-red-100"
    },
    {
      title: "Direct Hire Placements",
      description: "Permanent staffing solutions for key roles",
      color: "bg-gray-100"
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
        <span className="border-b-4 border-red-600 pb-2">Our Comprehensive Suite of Services</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className={`${service.color} p-6 rounded-xl shadow-md hover:shadow-lg transition-all`}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
            <motion.div
              whileHover={{ x: 5 }}
              className="mt-4 inline-block"
            >
              <button className="text-red-600 font-semibold flex items-center">
                Learn more 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your Talent Strategy?</h3>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <button className="bg-black hover:bg-gray-800 text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl transform transition-all duration-300">
            Get Started Today
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default VencvoxServices;