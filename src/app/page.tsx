// "use client"

// import { useState, useEffect, useRef } from "react"
// import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
// import {
//   ChevronRight,
//   ArrowRight,
//   CheckCircle,
//   Shield,
//   Zap,
//   Users,
//   BarChart,
//   Star,
//   Menu,
//   X,
//   Github,
//   Twitter,
//   Linkedin,
// } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "@/ui/button"
// import { Avatar } from "@radix-ui/react-avatar"

// export default function Home() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const { scrollY } = useScroll()
//   const headerHeight = useTransform(scrollY, [0, 100], [80, 64])
//   const headerBackground = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.95)"])
//   const headerShadow = useTransform(scrollY, [0, 100], ["0 0 0 rgba(0, 0, 0, 0)", "0 4px 20px rgba(0, 0, 0, 0.1)"])

//   // Refs for scroll animations
//   const heroRef = useRef(null)
//   const logosRef = useRef(null)
//   const benefitsRef = useRef(null)
//   const aboutRef = useRef(null)
//   const featuresRef = useRef(null)
//   const stepsRef = useRef(null)
//   const testimonialsRef = useRef(null)
//   const ctaRef = useRef(null)

//   // InView states
//   const heroInView = useInView(heroRef, { once: true, amount: 0.3 })
//   const logosInView = useInView(logosRef, { once: true, amount: 0.3 })
//   const benefitsInView = useInView(benefitsRef, { once: true, amount: 0.1 })
//   const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 })
//   const featuresInView = useInView(featuresRef, { once: true, amount: 0.1 })
//   const stepsInView = useInView(stepsRef, { once: true, amount: 0.1 })
//   const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.3 })
//   const ctaInView = useInView(ctaRef, { once: true, amount: 0.5 })

//   // Typewriter effect for hero heading
//   const [displayText, setDisplayText] = useState("")
//   const fullText = "Revolutionize Your Digital Experience"

//   useEffect(() => {
//     if (heroInView) {
//       let i = 0
//       const typeInterval = setInterval(() => {
//         if (i < fullText.length) {
//           setDisplayText(fullText.substring(0, i + 1))
//           i++
//         } else {
//           clearInterval(typeInterval)
//         }
//       }, 50)

//       return () => clearInterval(typeInterval)
//     }
//   }, [heroInView])

//   // Benefits data
//   const benefits = [
//     {
//       icon: <Zap className="h-8 w-8 text-red-700" />,
//       title: "Lightning Fast",
//       description: "Optimized performance that loads in milliseconds, not seconds.",
//     },
//     {
//       icon: <Shield className="h-8 w-8 text-red-700" />,
//       title: "Highly Secure",
//       description: "Enterprise-grade security to protect your valuable data.",
//     },
//     {
//       icon: <Users className="h-8 w-8 text-red-700" />,
//       title: "Team Collaboration",
//       description: "Seamless workflows for teams of any size.",
//     },
//     {
//       icon: <BarChart className="h-8 w-8 text-red-700" />,
//       title: "Advanced Analytics",
//       description: "Gain insights with comprehensive data visualization.",
//     },
//   ]

//   // Features data
//   const features = [
//     {
//       icon: <CheckCircle className="h-6 w-6 text-red-700" />,
//       title: "Seamless Integration",
//       description: "Connects with all your favorite tools and platforms without friction.",
//     },
//     {
//       icon: <CheckCircle className="h-6 w-6 text-red-700" />,
//       title: "Customizable Workflows",
//       description: "Tailor the experience to match your specific business needs.",
//     },
//     {
//       icon: <CheckCircle className="h-6 w-6 text-red-700" />,
//       title: "Real-time Updates",
//       description: "Stay informed with instant notifications and live data.",
//     },
//     {
//       icon: <CheckCircle className="h-6 w-6 text-red-700" />,
//       title: "Global Accessibility",
//       description: "Access your dashboard from anywhere in the world, anytime.",
//     },
//   ]

//   // Steps data
//   const steps = [
//     {
//       number: "01",
//       title: "Sign Up",
//       description: "Create your account in less than 2 minutes with our streamlined onboarding.",
//     },
//     {
//       number: "02",
//       title: "Configure",
//       description: "Set up your preferences and connect your existing tools and services.",
//     },
//     {
//       number: "03",
//       title: "Launch",
//       description: "Go live with your new system and start seeing results immediately.",
//     },
//   ]

//   // Testimonials data
//   const testimonials = [
//     {
//       avatar: "/placeholder.svg?height=40&width=40",
//       name: "Sarah Johnson",
//       role: "CTO, TechCorp",
//       quote:
//         "This platform has transformed how our team collaborates. The speed and reliability are unmatched in the industry.",
//     },
//     {
//       avatar: "/placeholder.svg?height=40&width=40",
//       name: "Michael Chen",
//       role: "Product Manager, InnovateCo",
//       quote:
//         "We've tried many solutions, but nothing compares to the intuitive design and powerful features offered here.",
//     },
//     {
//       avatar: "/placeholder.svg?height=40&width=40",
//       name: "Emma Rodriguez",
//       role: "Director of Operations, GlobalFirm",
//       quote:
//         "The ROI we've seen since implementing this platform has exceeded our expectations by 300%. Truly game-changing.",
//     },
//   ]

//   return (
//     <div className="relative min-h-screen">
//       {/* Sticky Header */}
//       <motion.header
//         className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 backdrop-blur-sm"
//         style={{
//           height: headerHeight,
//           backgroundColor: headerBackground,
//           boxShadow: headerShadow,
//         }}
//       >
//         <Link href="/" className="flex items-center">
//           <motion.div
//             className="text-2xl font-bold text-gray-900 flex items-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <span className="text-red-700">Nexus</span>
//             <span>Pro</span>
//           </motion.div>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-8">
//           {["Features", "Solutions", "Pricing", "Resources", "About"].map((item) => (
//             <Link
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               className="text-gray-600 hover:text-red-700 transition-colors duration-200 text-sm font-medium"
//             >
//               {item}
//             </Link>
//           ))}
//         </nav>

//         <div className="hidden md:flex items-center space-x-4">
//           <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">
//             Log in
//           </Button>
//           <Button className="bg-red-700 hover:bg-red-800 text-white">Get Started</Button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-700"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//         >
//           {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//         </button>
//       </motion.header>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             className="fixed inset-0 z-40 bg-white pt-20 px-6 md:hidden"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.2 }}
//           >
//             <nav className="flex flex-col space-y-6 py-8">
//               {["Features", "Solutions", "Pricing", "Resources", "About"].map((item) => (
//                 <Link
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   className="text-gray-800 hover:text-red-700 text-lg font-medium"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item}
//                 </Link>
//               ))}
//               <div className="pt-6 flex flex-col space-y-4">
//                 <Button variant="outline" className="w-full border-gray-300 text-gray-700">
//                   Log in
//                 </Button>
//                 <Button className="w-full bg-red-700 hover:bg-red-800 text-white">Get Started</Button>
//               </div>
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <main className="pt-20">
//         {/* Hero Section */}
//         <section ref={heroRef} className="relative py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <motion.div
//               className="flex flex-col space-y-6"
//               initial={{ opacity: 0, x: -50 }}
//               animate={heroInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.7, delay: 0.2 }}
//             >
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
//                 {displayText}
//                 <span className="inline-block w-1 h-8 md:h-10 bg-red-700 animate-blink ml-1"></span>
//               </h1>
//               <motion.p
//                 className="text-lg text-gray-600 max-w-lg"
//                 initial={{ opacity: 0 }}
//                 animate={heroInView ? { opacity: 1 } : {}}
//                 transition={{ duration: 0.7, delay: 1.5 }}
//               >
//                 Elevate your digital presence with our cutting-edge platform. Designed for modern businesses seeking
//                 exceptional performance and reliability.
//               </motion.p>
//               <motion.div
//                 className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={heroInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.5, delay: 1.8 }}
//               >
//                 <Button className="bg-red-700 hover:bg-red-800 text-white px-8 py-6 text-lg">
//                   Start Free Trial
//                   <ChevronRight className="ml-2 h-5 w-5" />
//                 </Button>
//                 <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 px-8 py-6 text-lg">
//                   Watch Demo
//                 </Button>
//               </motion.div>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={heroInView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ duration: 0.7, delay: 0.5 }}
//               className="relative h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden shadow-2xl"
//             >
//               <Image
//                 src="/placeholder.svg?height=500&width=600"
//                 alt="Dashboard Preview"
//                 fill
//                 className="object-cover"
//                 priority
//               />
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-tr from-red-700/20 to-transparent"
//                 initial={{ opacity: 0 }}
//                 animate={heroInView ? { opacity: 1 } : {}}
//                 transition={{ duration: 1, delay: 0.8 }}
//               />
//             </motion.div>
//           </div>
//         </section>

//         {/* Trusted Logos Section */}
//         <section ref={logosRef} className="py-12 md:py-16 bg-gray-50">
//           <div className="max-w-7xl mx-auto px-6 md:px-12">
//             <motion.p
//               className="text-center text-gray-500 mb-8 text-sm font-medium uppercase tracking-wider"
//               initial={{ opacity: 0 }}
//               animate={logosInView ? { opacity: 1 } : {}}
//               transition={{ duration: 0.5 }}
//             >
//               Trusted by industry leaders
//             </motion.p>
//             <motion.div
//               className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
//               initial={{ opacity: 0, x: -20 }}
//               animate={logosInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.7, delay: 0.2 }}
//             >
//               {[1, 2, 3, 4, 5].map((i) => (
//                 <motion.div
//                   key={i}
//                   className="grayscale hover:grayscale-0 transition-all duration-300 h-8 md:h-10"
//                   initial={{ opacity: 0 }}
//                   animate={logosInView ? { opacity: 1 } : {}}
//                   transition={{ duration: 0.5, delay: 0.1 * i }}
//                 >
//                   <Image
//                     src={`/placeholder-logo.svg`}
//                     alt={`Company logo ${i}`}
//                     width={120}
//                     height={40}
//                     className="h-full w-auto"
//                   />
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </section>

//         {/* Benefits Grid Section */}
//         <section ref={benefitsRef} className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 20 }}
//             animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.5 }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Benefits for Your Business</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Our platform delivers exceptional value through these key advantages, helping you stay ahead in today's
//               competitive landscape.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {benefits.map((benefit, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.5, delay: 0.1 * index }}
//               >
//                 <div className="mb-4 p-3 bg-red-50 rounded-full w-fit">{benefit.icon}</div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
//                 <p className="text-gray-600">{benefit.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* About Section */}
//         <section ref={aboutRef} className="py-20 md:py-32 px-6 md:px-12 bg-gray-50">
//           <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//             <motion.div
//               className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={aboutInView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ duration: 0.7 }}
//             >
//               <Image
//                 src="/placeholder.svg?height=400&width=600"
//                 alt="Team collaboration"
//                 fill
//                 className="object-cover"
//               />
//               <motion.div
//                 className="absolute inset-0"
//                 animate={
//                   aboutInView
//                     ? {
//                         y: [0, -5, 0, 5, 0],
//                         transition: {
//                           repeat: Number.POSITIVE_INFINITY,
//                           duration: 6,
//                           ease: "easeInOut",
//                         },
//                       }
//                     : {}
//                 }
//               />
//             </motion.div>
//             <motion.div
//               className="flex flex-col space-y-6"
//               initial={{ opacity: 0, x: 50 }}
//               animate={aboutInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.7, delay: 0.2 }}
//             >
//               <div className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-2">
//                 About Us
//               </div>
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900">We're Changing How Teams Work Together</h2>
//               <p className="text-gray-600">
//                 Founded in 2020, our mission is to empower organizations with tools that enhance productivity and foster
//                 innovation. We believe in creating technology that adapts to how people work, not the other way around.
//               </p>
//               <p className="text-gray-600">
//                 Our team of experts brings decades of combined experience in software development, UX design, and
//                 business operations to create solutions that truly make a difference.
//               </p>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={aboutInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//               >
//                 <Button className="bg-red-700 hover:bg-red-800 text-white mt-4">
//                   Learn More About Us
//                   <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//               </motion.div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Features Section */}
//         <section ref={featuresRef} className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto" id="features">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 20 }}
//             animate={featuresInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.5 }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Platform</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               We've built our solution with your success in mind, focusing on the features that drive real business
//               results.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 className="flex p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
//                 animate={featuresInView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ duration: 0.5, delay: 0.1 * index }}
//                 whileHover={{ scale: 1.02 }}
//               >
//                 <div className="mr-4 mt-1">{feature.icon}</div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
//                   <p className="text-gray-600">{feature.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* How It Works Section */}
//         <section ref={stepsRef} className="py-20 md:py-32 px-6 md:px-12 bg-gray-50">
//           <div className="max-w-7xl mx-auto">
//             <motion.div
//               className="text-center mb-16"
//               initial={{ opacity: 0, y: 20 }}
//               animate={stepsInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.5 }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
//               <p className="text-gray-600 max-w-2xl mx-auto">
//                 Getting started is simple. Follow these steps to transform your workflow.
//               </p>
//             </motion.div>

//             <div className="grid md:grid-cols-3 gap-8">
//               {steps.map((step, index) => (
//                 <motion.div
//                   key={index}
//                   className="bg-white rounded-xl p-8 shadow-sm relative overflow-hidden"
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={stepsInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ duration: 0.6, delay: 0.2 * index }}
//                 >
//                   <motion.div
//                     className="absolute -right-4 -top-4 text-8xl font-bold text-gray-100"
//                     initial={{ opacity: 0, scale: 0.5 }}
//                     animate={stepsInView ? { opacity: 1, scale: 1 } : {}}
//                     transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
//                   >
//                     {step.number}
//                   </motion.div>
//                   <div className="relative">
//                     <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
//                     <p className="text-gray-600">{step.description}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Testimonials Section */}
//         <section ref={testimonialsRef} className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 20 }}
//             animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.5 }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Don't just take our word for it. Here's what industry leaders have experienced with our platform.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 relative"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.5, delay: 0.1 * index }}
//                 whileHover={{ y: -5 }}
//               >
//                 <div className="absolute -top-4 left-8 text-red-700">
//                   <Star className="h-8 w-8 fill-red-700" />
//                 </div>
//                 <div className="pt-4">
//                   <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
//                   <div className="flex items-center">
//                     <Avatar className="h-10 w-10 mr-4">
//                       <Image
//                         src={testimonial.avatar || "/placeholder.svg"}
//                         alt={testimonial.name}
//                         width={40}
//                         height={40}
//                       />
//                     </Avatar>
//                     <div>
//                       <p className="font-semibold text-gray-900">{testimonial.name}</p>
//                       <p className="text-sm text-gray-500">{testimonial.role}</p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* CTA Banner */}
//         <section ref={ctaRef} className="py-16 md:py-24 px-6 md:px-12 bg-gray-900 text-white">
//           <div className="max-w-5xl mx-auto text-center">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ duration: 0.6 }}
//               className="space-y-6"
//             >
//               <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Workflow?</h2>
//               <p className="text-gray-300 max-w-2xl mx-auto text-lg">
//                 Join thousands of satisfied customers who have elevated their business with our platform. Start your
//                 free trial today – no credit card required.
//               </p>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={ctaInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.5, delay: 0.3 }}
//                 className="pt-4"
//               >
//                 <motion.button
//   initial={{ opacity: 0, scale: 0.95 }}
//   animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
//   whileHover={{
//     scale: 1.05,
//     boxShadow: "0 0 20px rgba(220, 38, 38, 0.5)",
//   }}
//   transition={{ type: "spring", stiffness: 400, damping: 10 }}
//   className="bg-red-700 hover:bg-red-600 text-white px-8 py-6 text-lg"
// >
//   Start Your Free Trial
//   <ArrowRight className="ml-2 h-5 w-5" />
// </motion.button>
//               </motion.div>
//             </motion.div>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-100 py-12 md:py-20 px-6 md:px-12">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
//             <div className="col-span-2">
//               <Link href="/" className="flex items-center mb-6">
//                 <div className="text-2xl font-bold text-gray-900 flex items-center">
//                   <span className="text-red-700">Nexus</span>
//                   <span>Pro</span>
//                 </div>
//               </Link>
//               <p className="text-gray-600 mb-6 max-w-xs">
//                 Empowering businesses with next-generation digital solutions that drive growth and innovation.
//               </p>
//               <div className="flex space-x-4">
//                 <a href="#" className="text-gray-500 hover:text-red-700" aria-label="Twitter">
//                   <Twitter className="h-5 w-5" />
//                 </a>
//                 <a href="#" className="text-gray-500 hover:text-red-700" aria-label="LinkedIn">
//                   <Linkedin className="h-5 w-5" />
//                 </a>
//                 <a href="#" className="text-gray-500 hover:text-red-700" aria-label="GitHub">
//                   <Github className="h-5 w-5" />
//                 </a>
//               </div>
//             </div>

//             <div>
//               <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
//               <ul className="space-y-3">
//                 {["Features", "Pricing", "Integrations", "Changelog", "Documentation"].map((item) => (
//                   <li key={item}>
//                     <Link href="#" className="text-gray-600 hover:text-red-700 text-sm">
//                       {item}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div>
//               <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
//               <ul className="space-y-3">
//                 {["About", "Careers", "Press", "Partners", "Legal"].map((item) => (
//                   <li key={item}>
//                     <Link href="#" className="text-gray-600 hover:text-red-700 text-sm">
//                       {item}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div>
//               <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
//               <ul className="space-y-3">
//                 {["Blog", "Newsletter", "Events", "Help Center", "Tutorials"].map((item) => (
//                   <li key={item}>
//                     <Link href="#" className="text-gray-600 hover:text-red-700 text-sm">
//                       {item}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-500 text-sm">© {new Date().getFullYear()} NexusPro. All rights reserved.</p>
//             <div className="flex space-x-6 mt-4 md:mt-0">
//               <Link href="#" className="text-gray-500 hover:text-red-700 text-sm">
//                 Privacy Policy
//               </Link>
//               <Link href="#" className="text-gray-500 hover:text-red-700 text-sm">
//                 Terms of Service
//               </Link>
//               <Link href="#" className="text-gray-500 hover:text-red-700 text-sm">
//                 Cookie Policy
//               </Link>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* Custom animation styles */}
//       <style jsx global>{`
//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }
//         .animate-blink {
//           animation: blink 1s infinite;
//         }
//       `}</style>
//     </div>
//   )
// }



"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  CheckCircle,
  Globe,
  Clock,
  Shield,
  HeadphonesIcon,
  MapPin,
  ChevronRight,
  UserCheck,
  FileCheck,
  BarChart,
  Search,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowRight,
} from "lucide-react"

export default function Home() {
  // State for mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Refs for scroll animations
  const { scrollY } = useScroll()
  const headerBg = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"])
  const headerShadow = useTransform(scrollY, [0, 100], ["0 0 0 rgba(0, 0, 0, 0)", "0 4px 20px rgba(0, 0, 0, 0.1)"])
  const trusted_logos = [
  { id: 1, src: "/hrd.png", alt: "Logo 1" },
  { id: 2, src: "/md-status.png", alt: "Logo 2" },
  { id: 3, src: "/mof.png", alt: "Logo 3" },
  { id: 4, src: "/napbs-logo.png", alt: "Logo 4" },
];
  // Handle window resize for mobile menu
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }




    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navbar */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12  flex items-center justify-between"
        style={{
          backgroundColor: headerBg,
          boxShadow: headerShadow,
        }}
      >
        <Link href="/" className="flex items-center">
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="w-[150px] h-auto"
  >
    <Image
      src="/logo.png" 
      alt="Venovox Logo"
      width={100}
      height={20}
      priority
    />
  </motion.div>
</Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["Home", "Services", "Why Us", "Packages", "Contact"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Link
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-gray-700 hover:text-red-700 relative group text-lg font-bold"
              >
                {item}
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-red-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-white pt-20 px-6 md:hidden"
          >
            <nav className="flex flex-col space-y-6 py-8">
              {["Home", "Services", "Why Us", "Packages", "Contact"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Link
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-800 hover:text-red-700 text-lg font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="pt-6"
              >
                <button className="w-full py-3 px-6 bg-red-700 text-white rounded-lg hover:bg-red-600 transition-colors duration-300">
                  Get Started
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Global Background Checks. <span className="text-red-700">2x Faster.</span>{" "}
                <span className="text-red-700">100% Trusted.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-6 text-lg text-gray-600 max-w-lg"
              >
                Venovox helps businesses hire smarter, faster, and safer — across borders.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <button className="px-6 py-3 bg-red-700 text-white rounded-lg hover:bg-red-600 transition-colors duration-300 flex items-center justify-center">
                  Get Started
                  <ChevronRight size={18} className="ml-2" />
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  See Packages
                </button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/group1.jpg"
                alt="Venovox Dashboard"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </section>

        {/* Trusted By Logos */}
        <section className="px-6 md:px-12 py-12 md:py-20 max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-gray-500 mb-10 text-sm font-medium uppercase tracking-wider"
          >
            Trusted by leading companies worldwide
          </motion.p>

       <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
      {trusted_logos.map((trusted_logo, i) => (
        <motion.div
          key={trusted_logo.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="grayscale hover:grayscale-0 transition-all duration-300"
        >
          <Image
            src={trusted_logo.src}
            alt={trusted_logo.alt}
            width={100}
            height={100}
            className="object-contain"
          />
        </motion.div>
      ))}
    </div>
        </section>

        {/* Benefits Section */}
        <section className="px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Why businesses choose <span className="text-red-700">Venovox</span></h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Our comprehensive background check services help you make informed hiring decisions with confidence.
            </p>
          </motion.div>
 
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-red-700" />,
                title: "Safer Hiring",
                description: "Comprehensive checks to ensure you hire trustworthy candidates.",
              },
              {
                icon: <HeadphonesIcon className="h-8 w-8 text-red-700" />,
                title: "24/7 Support",
                description: "Our expert team is available around the clock to assist you.",
              },
              {
                icon: <Globe className="h-8 w-8 text-red-700" />,
                title: "Global Reach",
                description: "Conduct background checks in over 190 countries worldwide.",
              },
              {
                icon: <Clock className="h-8 w-8 text-red-700" />,
                title: "Fast Reports",
                description: "Get detailed reports in half the time of traditional services.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="bg-white rounded-xl p-6 border border-gray-100 transition-all duration-300"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Image + Content Section */}
        <section className="px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden shadow-xl order-2 md:order-1"
            >
              <Image
                src="/group1.jpg"
                alt="Venovox in action"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Comprehensive background checks for modern businesses
              </h2>

              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: <CheckCircle className="h-5 w-5 text-red-700" />,
                    text: "Criminal record checks across multiple jurisdictions",
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5 text-red-700" />,
                    text: "Employment and education verification with detailed reports",
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5 text-red-700" />,
                    text: "Credit history and financial background analysis",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="mr-3 mt-1">{item.icon}</div>
                    <p className="text-gray-700">{item.text}</p>
                  </motion.div>
                ))}
              </div>

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-red-700 text-white rounded-lg hover:bg-red-600 transition-colors duration-300 flex items-center"
              >
                Why Venovox?
                <ArrowRight size={18} className="ml-2" />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* How It Works Timeline */}
        <section className="px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Our streamlined process makes background checks simple and efficient.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Timeline line for desktop */}
            <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-gray-200 z-0"></div>

            {[
              {
                icon: <UserCheck className="h-8 w-8 text-red-700" />,
                title: "Create Account",
                description: "Sign up and verify your business credentials.",
              },
              {
                icon: <FileCheck className="h-8 w-8 text-red-700" />,
                title: "Choose Plan",
                description: "Select the package that fits your hiring needs.",
              },
              {
                icon: <Search className="h-8 w-8 text-red-700" />,
                title: "Submit Candidates",
                description: "Enter candidate details through our secure portal.",
              },
              {
                icon: <BarChart className="h-8 w-8 text-red-700" />,
                title: "Get Reports",
                description: "Receive comprehensive reports with actionable insights.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl p-6 border border-gray-100 relative z-10"
              >
                {/* Timeline number */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-red-700 text-white flex items-center justify-center font-bold text-sm ">
                  {index + 1}
                </div>

                <div className="flex flex-col items-center text-center pt-4">
                  <div className="mb-4 p-3 bg-red-50 rounded-full">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose Venovox Grid */}
        <section className="px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose <span className="text-red-700">Venovox</span></h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We offer unparalleled background check services with industry-leading features.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-red-700" />,
                title: "Industry-Leading Security",
                benefits: [
                  "256-bit encryption for all data",
                  "GDPR and FCRA compliant processes",
                  "Secure data handling protocols",
                ],
              },
              {
                icon: <Globe className="h-8 w-8 text-red-700" />,
                title: "Global Coverage",
                benefits: ["Checks in 190+ countries", "Multi-language support", "Local compliance expertise"],
              },
              {
                icon: <Clock className="h-8 w-8 text-red-700" />,
                title: "Speed & Efficiency",
                benefits: [
                  "Results in half the industry average time",
                  "Automated verification processes",
                  "Real-time progress tracking",
                ],
              },
              {
                icon: <HeadphonesIcon className="h-8 w-8 text-red-700" />,
                title: "Dedicated Support",
                benefits: ["24/7 customer service", "Dedicated account managers", "Expert compliance consultants"],
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-700 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Hear from businesses that have transformed their hiring process with Venovox.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Venovox has revolutionized our international hiring process. We've reduced time-to-hire by 40% while increasing candidate quality.",
                name: "Sarah Johnson",
                title: "HR Director, TechGlobal Inc.",
                image: "/client1.jpg",
              },
              {
                quote:
                  "The depth and accuracy of Venovox's background checks give us complete confidence in our hiring decisions across all our global offices.",
                name: "Michael Chen",
                title: "COO, Nexus Enterprises",
                image: "/client.jpeg",
              },
              {
                quote:
                  "Their customer service is exceptional. Any time we have questions, the Venovox team responds quickly with expert guidance.",
                name: "Emma Rodriguez",
                title: "Talent Acquisition Manager, Horizon Group",
                image: "/client1.jpg",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="bg-white rounded-xl p-8 border border-gray-100 transition-all duration-300"
              >
                <div className="mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-red-700">
                      ★
                    </span>
                  ))}
                </div>
              <p className="text-gray-700 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center">
                  <div className="mr-4 rounded-full overflow-hidden h-12 w-12 relative">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="px-6 md:px-12 py-16 md:py-24 bg-red-700 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let Venovox handle your background checks — while you grow.
            </h2>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="px-8 py-4 bg-white text-red-700 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Get a Free Demo
            </motion.button>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="px-6 md:px-12 py-16 md:py-24 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Column 1: Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                <ul className="space-y-4">
                  {["Home", "About Us", "Services", "Pricing", "Blog", "Contact"].map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-gray-600 hover:text-red-700 transition-colors duration-200">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Column 2: Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-6">Services</h3>
                <ul className="space-y-4">
                  {[
                    "Criminal Background Checks",
                    "Employment Verification",
                    "Education Verification",
                    "Credit Checks",
                    "Global Screening",
                    "Identity Verification",
                  ].map((service) => (
                    <li key={service}>
                      <Link href="#" className="text-gray-600 hover:text-red-700 transition-colors duration-200">
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Column 3: Global Offices */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold mb-6">Global Offices</h3>
                <ul className="space-y-4">
                  {[
                    { city: "New York", address: "123 Broadway, NY 10001" },
                    { city: "London", address: "456 Oxford St, London W1C" },
                    { city: "Singapore", address: "78 Shenton Way, Singapore" },
                    { city: "Sydney", address: "90 Pitt Street, Sydney NSW" },
                  ].map((office) => (
                    <li key={office.city} className="flex">
                      <MapPin className="h-5 w-5 text-red-700 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium block">{office.city}</span>
                        <span className="text-gray-500 text-sm">{office.address}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Column 4: Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your message"
                      rows={3}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 bg-red-700 text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>

                <div className="mt-6">
                  <div className="flex items-center mb-2">
                    <Mail className="h-5 w-5 text-red-700 mr-2" />
                    <span className="text-gray-600">contact@venovox.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-red-700 mr-2" />
                    <span className="text-gray-600">+1 (888) 123-4567</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center"
            >
              <div className="mb-4 md:mb-0">
                <Link href="/" className="flex items-center">
                  <div className="text-2xl font-bold">
                     <Image
      src="/logo.png" 
      alt="Venovox Logo"
      width={100}
      height={20}
      priority
    />
                  </div>
                </Link>
                <p className="text-gray-500 text-sm mt-2">© {new Date().getFullYear()} Venovox. All rights reserved.</p>
              </div>

              <div className="flex space-x-4">
                {[
                  { icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
                  { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
                  { icon: <Facebook className="h-5 w-5" />, label: "Facebook" },
                  { icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, color: "#b91c1c" }}
                    className="text-gray-500 hover:text-red-700 transition-colors duration-200"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </footer>
      </main>
    </div>
  )
}

