"use client";
import {  useRef } from "react";
import { motion, useInView } from "framer-motion";

// venovoxServices.ts
import {
  ShieldCheck,
  FileWarning,
  BarChart3,
  LineChart,
  RefreshCcw,
  Landmark,
  CheckCircle,
  Search,
  FileText,
  FileCog,
  Briefcase,
  EyeOff,
  Bug,
  AlarmClock,
  Banknote,
  Layers,
  Building,
  Users,
  AlertCircle,
  FileSearch,
  Database,
} from "lucide-react";

export const venovoxServices = [
  {
    category: "Risk Management",
    intro:
      "Effective risk management is crucial in today's business world. We use intelligence-led data, big data, and visual mapping tools for key risk visualization.",
    services: [
      { title: "Financial Stress Testing", icon: <BarChart3 className="text-red-600" size={24} /> },
      { title: "Business Recovery", icon: <RefreshCcw className="text-red-600" size={24} /> },
      { title: "Strategic Risk Planning", icon: <LineChart className="text-red-600" size={24} /> },
      { title: "Market Risk Assessment", icon: <FileWarning className="text-red-600" size={24} /> },
      { title: "Business Continuity Planning", icon: <AlarmClock className="text-red-600" size={24} /> },
      { title: "Enterprise Risk Assessment", icon: <ShieldCheck className="text-red-600" size={24} /> }
    ]
  },
  {
    category: "Compliance",
    intro:
      "We help businesses build robust compliance programs to meet global and local regulatory requirements.",
    services: [
      { title: "Business Monitoring", icon: <CheckCircle className="text-red-600" size={24} /> },
      { title: "AML Investigation", icon: <Search className="text-red-600" size={24} /> },
      { title: "Internal Audit and Control Reviews", icon: <FileText className="text-red-600" size={24} /> },
      { title: "Outsourced Compliance and Regulatory Checks", icon: <FileCog className="text-red-600" size={24} /> },
      { title: "Regulatory Authority Liaison", icon: <Landmark className="text-red-600" size={24} /> },
      { title: "Compliance Program Design", icon: <Briefcase className="text-red-600" size={24} /> }
    ]
  },
  {
    category: "Intellectual Property",
    intro:
      "We protect your IP through enforcement strategies, detection systems, and strong agency partnerships.",
    services: [
      { title: "IP Protection Program Designing", icon: <ShieldCheck className="text-red-600" size={24} /> },
      { title: "Parallel Import Detection", icon: <Search className="text-red-600" size={24} /> },
      { title: "IP Infringement Investigations", icon: <Bug className="text-red-600" size={24} /> },
      { title: "E-Commerce IP Infringement Monitoring", icon: <EyeOff className="text-red-600" size={24} /> },
      { title: "Enforcement Action", icon: <AlarmClock className="text-red-600" size={24} /> },
      { title: "Case Management", icon: <FileText className="text-red-600" size={24} /> }
    ]
  },
  {
    category: "Technical Surveillance Counter Measures (TSCM)",
    intro:
      "We use advanced tools to detect and neutralize electronic surveillance threats and maintain confidentiality.",
    services: [
      { title: "Premises Sweep Before Relocation", icon: <Search className="text-red-600" size={24} /> },
      { title: "Event Site Examination", icon: <Layers className="text-red-600" size={24} /> },
      { title: "Board Room Debugging", icon: <Bug className="text-red-600" size={24} /> }
    ]
  },
  {
    category: "Financial Crime",
    intro:
      "Our team investigates fraud, insider trading, bribery, and more using cutting-edge forensic methods.",
    services: [
      { title: "Fraud Detection", icon: <Search className="text-red-600" size={24} /> },
      { title: "Asset Tracing", icon: <Banknote className="text-red-600" size={24} /> },
      { title: "Forensic Audits", icon: <FileSearch className="text-red-600" size={24} /> },
      { title: "Litigation Support", icon: <FileText className="text-red-600" size={24} /> },
      { title: "Complex Financial Investigations", icon: <FileCog className="text-red-600" size={24} /> },
      { title: "Case Management", icon: <FileText className="text-red-600" size={24} /> }
    ]
  },
  {
    category: "Due Diligence",
    intro:
      "Due diligence helps uncover shell companies, hidden ownership, and off-balance-sheet risks.",
    services: [
      { title: "Research Into Company Structure Ownership", icon: <Database className="text-red-600" size={24} /> },
      { title: "Compliance, Litigation and Regulatory Checks", icon: <AlertCircle className="text-red-600" size={24} /> },
      { title: "Financial & Political Risk Analysis Assessment", icon: <FileCog className="text-red-600" size={24} /> },
      { title: "Site Inspections and Audit", icon: <FileSearch className="text-red-600" size={24} /> },
      { title: "Vendor and Customer Interviews", icon: <Users className="text-red-600" size={24} /> },
      { title: "Profiling of Company Principles and Major Shareholders", icon: <Building className="text-red-600" size={24} /> }
    ]
  }
];

// Define the intelligenceData object
const intelligenceData = {
  title: "Intelligence Services",
  paragraphs: [
    "Our intelligence services provide comprehensive solutions for your business needs.",
    "We combine cutting-edge technology with expert analysis to deliver actionable insights."
  ],
  offerTitle: "What We Offer",
  services: venovoxServices.flatMap(category => category.services)
};

export default function IntelligenceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const flipIn = {
    hidden: { rotateY: 90, opacity: 0 },
    visible: (i: number) => ({
      rotateY: 0,
      opacity: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="bg-white w-full min-h-screen" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-30">
        <div className="flex flex-col lg:flex-row">
          {/* Left Column */}
          <div className="w-full lg:w-2/3 pr-0 lg:pr-12 pt-20">
            <motion.h1
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={flipIn}
              custom={0}
              className="text-4xl font-bold text-red-600 mb-6"
            >
              {intelligenceData.title}
            </motion.h1>

            <div className="space-y-6">
              {intelligenceData.paragraphs.map((paragraph: string, index: number) => (
                <motion.p
                  key={index}
                  variants={flipIn}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={index + 1}
                  className="text-gray-700 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <motion.div
            className="w-full lg:w-1/3 mt-10 lg:mt-0"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={flipIn}
            custom={3}
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <div className="relative bg-gray-100 h-80">
                <div className="absolute inset-0 bg-red-600 bg-opacity-10 flex items-center justify-center">
                  <span className="text-red-600 text-2xl font-bold transform rotate-180">XOVONEA</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What We Offer */}
        <motion.div
          className="mt-20 pt-12 pb-16 bg-gray-50 rounded-xl"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={flipIn}
          custom={4}
        >
          <motion.h2
            className="text-3xl font-bold text-center mb-16"
            variants={flipIn}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={5}
          >
            {intelligenceData.offerTitle}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-10">
            {intelligenceData.services.map((service: { icon: React.ReactNode; title: string }, index: number) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md"
                variants={flipIn}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={index + 6}
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-3 bg-gray-100 rounded-full">
                  {service.icon}
                </div>
                <div className="font-medium text-gray-800">{service.title}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}