"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ChevronRight,
  Shield,
  HeadphonesIcon,
  Globe,
  Clock,
  CheckCircle,
  UserCheck,
  FileCheck,
  BarChart,
  Search,
  ArrowRight,
} from "lucide-react"

export default function Horo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) setIsMenuOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isMenuOpen])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset"
    return () => { document.body.style.overflow = "unset" }
  }, [isMenuOpen])

  const trusted_logos = [
    { id: 1, src: "/hrd.png", alt: "Logo 1" },
    { id: 2, src: "/md-status.png", alt: "Logo 2" },
    { id: 3, src: "/mof.png", alt: "Logo 3" },
    { id: 4, src: "/napbs-logo.png", alt: "Logo 4" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <main className="pt-24">
        {/* Hero */}
        <section className="px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Global Background Checks. <span className="text-red-700">2x Faster.</span>{" "}
                <span className="text-red-700">100% Trusted.</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-6 text-lg text-gray-600 max-w-lg">
                Venovox helps businesses hire smarter, faster, and safer — across borders.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-red-700 text-white rounded-lg hover:bg-red-600 transition duration-300 flex items-center justify-center">
                  Get Started <ChevronRight size={18} className="ml-2" />
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-300">
                  See Packages
                </button>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
              <Image src="/group1.jpg" alt="Venovox Dashboard" fill className="object-cover" priority />
            </motion.div>
          </div>
        </section>

        {/* Logos */}
        <section className="px-6 md:px-12 py-12 md:py-20 max-w-7xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-center text-gray-500 mb-10 text-sm font-medium uppercase tracking-wider">
            Trusted by leading companies worldwide
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
            {trusted_logos.map((logo, i) => (
              <motion.div key={logo.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="grayscale hover:grayscale-0 transition duration-300">
                <Image src={logo.src} alt={logo.alt} width={100} height={100} className="object-contain" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Why businesses choose <span className="text-red-700">Venovox</span></h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Our comprehensive background check services help you make informed hiring decisions with confidence.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Shield className="h-8 w-8 text-red-700" />, title: "Safer Hiring", description: "Comprehensive checks to ensure you hire trustworthy candidates." },
              { icon: <HeadphonesIcon className="h-8 w-8 text-red-700" />, title: "24/7 Support", description: "Our expert team is available around the clock to assist you." },
              { icon: <Globe className="h-8 w-8 text-red-700" />, title: "Global Reach", description: "Conduct background checks in over 190 countries worldwide." },
              { icon: <Clock className="h-8 w-8 text-red-700" />, title: "Fast Reports", description: "Get detailed reports in half the time of traditional services." },
            ].map((benefit, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="bg-white rounded-xl p-6 border border-gray-100 transition duration-300">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Feature Image + Content */}
        <section className="px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden shadow-xl order-2 md:order-1">
              <Image src="/group1.jpg" alt="Venovox in action" fill className="object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive background checks for modern businesses</h2>
              <div className="space-y-4 mb-8">
                {[
                  "Criminal record checks across multiple jurisdictions",
                  "Employment and education verification with detailed reports",
                  "Credit history and financial background analysis",
                ].map((text, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-700 mr-3 mt-1" />
                    <p className="text-gray-700">{text}</p>
                  </motion.div>
                ))}
              </div>
              <motion.button initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-red-700 text-white rounded-lg hover:bg-red-600 transition duration-300 flex items-center">
                Why Venovox? <ArrowRight size={18} className="ml-2" />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section className="px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Our streamlined process makes background checks simple and efficient.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-gray-200 z-0"></div>
            {[
              { icon: <UserCheck className="h-8 w-8 text-red-700" />, title: "Create Account", description: "Sign up and verify your business credentials." },
              { icon: <FileCheck className="h-8 w-8 text-red-700" />, title: "Choose Plan", description: "Select the package that fits your hiring needs." },
              { icon: <Search className="h-8 w-8 text-red-700" />, title: "Submit Candidates", description: "Enter candidate details through our secure portal." },
              { icon: <BarChart className="h-8 w-8 text-red-700" />, title: "Get Reports", description: "Receive comprehensive reports with actionable insights." },
            ].map((step, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl p-6 border border-gray-100 text-center relative z-10">
                <div className="mb-4 mx-auto">{step.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
