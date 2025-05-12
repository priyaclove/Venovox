"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation, type Variants } from "framer-motion"
import { Briefcase, Users, CheckCircle, BarChart } from "lucide-react";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const features = [
    {
      icon: <Briefcase className="w-8 h-8 text-red-600" />,
      title: "End-to-End Recruitment",
      description: "Industry-specific recruiters and best practice talent acquisition processes with advanced screening tools."
    },
    {
      icon: <Users className="w-8 h-8 text-red-600" />,
      title: "Quality Candidates",
      description: "Award-winning due diligence ensures a database of verified, qualified candidates at your disposal."
    },
    {
      icon: <BarChart className="w-8 h-8 text-red-600" />,
      title: "Data & Insights",
      description: "Extensive reporting and analytics for operational efficiency and informed decision-making."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-red-600" />,
      title: "Cost & Time Effective",
      description: "Significant reduction in recruitment time and costs while ensuring authentic candidate details."
    }
  ];

export default function TalentAcquisitionPage() {
  return (
    <main className="bg-white text-black">

 <AnimatedSection animation="slideLeft" className="bg-gray-50">
        <div className="max-w-6xl mx-auto py-20 px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={slideLeftVariants} className="order-2 md:order-1">
              <img src="/talent-main.jpg" alt="Talent Acquisition" className="w-full h-auto" />
            </motion.div>
            <motion.div variants={slideLeftVariants} className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-6">Empower your business with end-to-end recruitment support tailored for growth.</h3>
              <p className="text-gray-700 mb-6">
\Discover how Venovox transforms your hiring journey with expert-driven recruitment solutions.
Build a workplace that top talents aspire to join and grow with.              </p>
              <p className="text-gray-700">
                Unlock the potential of your organization with a future-ready talent strategy.
Attract, engage, and retain the best minds in your industry.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Venovox Section */}
      <AnimatedSection animation="slideRight" className="bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <motion.div
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 variants={fadeIn}
                 className="text-center mb-12"
               >
                 <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                   Why You Need Venovox as Your Human Resource Partner
                 </h2>
                 <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                   Our solution transforms how talent is identified, attracted, assessed, and onboarded through world-class recruitment processes.
                 </p>
               </motion.div>
       
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {features.map((feature, index) => (
                   <motion.div
                     key={feature.title}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true }}
                     variants={fadeIn}
                     custom={index * 0.1}
                     className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                   >
                     <div className="mb-4">
                       {feature.icon}
                     </div>
                     <h3 className="text-xl font-semibold text-gray-900 mb-2">
                       {feature.title}
                     </h3>
                     <p className="text-gray-600">
                       {feature.description}
                     </p>
                   </motion.div>
                 ))}
               </div>
             </div>
      </AnimatedSection>


      {/* Services Breakdown */}
      <AnimatedSection animation="flip" className="bg-gray-50">
        <div className="max-w-6xl mx-auto py-20 px-4">
          <motion.h2 variants={flipVariants} className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Our <span className="text-red-600">Services</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Recruitment Process Outsourcing (RPO)",
                description: "End-to-end recruitment management to help you scale fast and smart.",
              },
              {
                title: "Managed Service Provider (MSP)",
                description: "Simplify workforce management with flexible, scalable staffing solutions.",
              },
              {
                title: "Direct Hire Solutions",
                description: "Find the right people, for the right roles, at the right time.",
              },
              {
                title: "Sustainable HR Strategy",
                description: "Build long-term HR infrastructure that supports growth and wellbeing.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={flipVariants}
                className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-black hover:shadow-xl transition-shadow duration-300"
              >
                <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                <p className="text-gray-700">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Strategic Approach & Expert Guidance */}
      <AnimatedSection animation="slideRight">
        <div className="max-w-6xl mx-auto py-20 px-4">
          <motion.h2 variants={slideRightVariants} className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Strategic Approach & <span className="text-red-600">Expert Guidance</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={slideRightVariants}>
              <h3 className="text-2xl font-bold mb-6">Data-Driven Talent Acquisition</h3>
              <p className="text-gray-700 mb-6">
                Our approach combines industry expertise with advanced analytics to identify the best talent for your
                specific needs. We don't just fill positions—we build strategic workforce solutions.
              </p>
              <ul className="space-y-3">
                {[
                  "Market-informed talent strategies",
                  "Competitive intelligence",
                  "Predictive hiring analytics",
                  "Retention-focused recruitment",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={slideRightVariants} className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Our Expertise Includes:</h3>
              <div className="space-y-4">
                {[
                  "Executive search and leadership placement",
                  "Technical and specialized role recruitment",
                  "Volume hiring for scaling organizations",
                  "Global talent acquisition and relocation",
                  "Diversity and inclusion-focused recruitment",
                ].map((expertise, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                    <p>{expertise}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* RPO and Talent Experts */}
      <AnimatedSection animation="slideLeft" className="bg-gray-50">
        <div className="max-w-6xl mx-auto py-20 px-4">
          <motion.h2 variants={slideLeftVariants} className="text-3xl md:text-4xl font-bold mb-12 text-center">
            RPO and <span className="text-red-600">Talent Experts</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={slideLeftVariants} className="order-2 md:order-1">
              <div className="bg-black text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Why Choose Our RPO Solutions?</h3>
                <div className="space-y-4">
                  {[
                    "Scalable recruitment infrastructure",
                    "Reduced time-to-hire by up to 40%",
                    "Improved quality of hire metrics",
                    "Cost savings of 25-30% on recruitment",
                    "Enhanced candidate experience",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      <p>{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div variants={slideLeftVariants} className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-6">Recruitment Process Outsourcing Excellence</h3>
              <p className="text-gray-700 mb-6">
                Our RPO solutions provide end-to-end recruitment management, allowing your organization to focus on core
                business activities while we handle the entire talent acquisition process.
              </p>
              <p className="text-gray-700">
                From sourcing and screening to interviewing and onboarding, our team of talent experts ensures a
                seamless recruitment experience for both your organization and candidates.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* MSP and Contingent Staffing */}
      <AnimatedSection animation="flip">
        <div className="max-w-6xl mx-auto py-20 px-4">
          <motion.h2 variants={flipVariants} className="text-3xl md:text-4xl font-bold mb-12 text-center">
            MSP and <span className="text-red-600">Contingent Staffing</span>
          </motion.h2>
          <motion.div variants={flipVariants} className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {[
                {
                  title: "Vendor Management",
                  description: "Streamlined supplier relationships and performance tracking for optimal results.",
                },
                {
                  title: "Workforce Flexibility",
                  description: "Scale your workforce up or down based on business demands and project needs.",
                },
                {
                  title: "Cost Control",
                  description: "Transparent pricing models and consolidated billing for better budget management.",
                },
              ].map((feature, index) => (
                <div key={index} className="p-8">
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 p-8">
              <p className="text-center text-gray-700">
                Our Managed Service Provider solutions simplify your contingent workforce management, providing you with
                the flexibility to adapt to changing business needs while maintaining quality and compliance.
              </p>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Direct Hire Placements */}
      <AnimatedSection animation="slideRight" className="bg-gray-50">
        <div className="max-w-6xl mx-auto py-20 px-4">
          <motion.h2 variants={slideRightVariants} className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Direct Hire <span className="text-red-600">Placements</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={slideRightVariants}>
              <h3 className="text-2xl font-bold mb-6">Finding Your Perfect Match</h3>
              <p className="text-gray-700 mb-6">
                Our direct hire solutions connect you with top-tier permanent talent who not only have the skills you
                need but also align with your company culture and values.
              </p>
              <p className="text-gray-700">
                We take the time to understand your organization's unique needs and culture, ensuring that we find
                candidates who will thrive in your environment and contribute to your long-term success.
              </p>
            </motion.div>
            <motion.div variants={slideRightVariants}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Executive Search",
                  "Professional Staffing",
                  "Technical Recruitment",
                  "Healthcare Staffing",
                  "Financial Services",
                  "IT & Technology",
                  "Engineering & Manufacturing",
                  "Sales & Marketing",
                ].map((specialty, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center">
                    <div className="w-3 h-3 bg-black rounded-full mr-3"></div>
                    <p className="font-medium">{specialty}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection animation="slideLeft">
        <div className="max-w-6xl mx-auto py-20 px-4">
          <motion.h2 variants={slideLeftVariants} className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Benefits of Hiring <span className="text-red-600">VENOVOX</span> Talent Acquisition Experts
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Deep Industry Expertise",
                description: "Specialized knowledge in HR & recruitment across various sectors.",
              },
              {
                title: "Global Talent Access",
                description: "Reach candidates worldwide while understanding local market nuances.",
              },
              {
                title: "AI-Powered Matching",
                description: "Advanced technology to identify the perfect candidates for your needs.",
              },
              {
                title: "24/7 Client Support",
                description: "Dedicated teams available around the clock to address your needs.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={slideLeftVariants}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
                  <span className="text-white text-xl font-bold">{index + 1}</span>
                </div>
                <h4 className="text-xl font-bold mb-4">{benefit.title}</h4>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA Section */}
      <AnimatedSection animation="fadeIn" className="bg-black text-white">
        <div className="max-w-4xl mx-auto text-center py-20 px-4">
          <motion.h2 variants={fadeInVariants} className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your <span className="text-red-600">Workforce</span>?
          </motion.h2>
          <motion.p variants={fadeInVariants} className="text-xl md:text-2xl mb-10 text-gray-300">
            Let's collaborate to create powerful, people-first solutions for your business.
          </motion.p>
          <motion.div variants={fadeInVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md font-medium text-lg transition-colors duration-300">
              Schedule a Free Consultation
            </button>
          </motion.div>
        </div>
      </AnimatedSection>
    </main>
  )
}

// Animation variants
const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

const slideLeftVariants: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

const flipVariants: Variants = {
  hidden: { opacity: 0, rotateY: 90 },
  visible: {
    opacity: 1,
    rotateY: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

// Reusable animated section component
function AnimatedSection({
  children,
  animation = "fadeIn",
  className = "",
}: {
  children: React.ReactNode
  animation?: "fadeIn" | "slideLeft" | "slideRight" | "flip"
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const getVariants = () => {
    switch (animation) {
      case "fadeIn":
        return fadeInVariants
      case "slideLeft":
        return slideLeftVariants
      case "slideRight":
        return slideRightVariants
      case "flip":
        return flipVariants
      default:
        return fadeInVariants
    }
  }

  return (
    <section ref={ref} className={className}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {children}
      </motion.div>
    </section>
  )
}
