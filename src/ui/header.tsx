"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll-based animations
  const { scrollY } = useScroll();
  const headerBg = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"]);
  const headerShadow = useTransform(scrollY, [0, 100], ["0 0 0 rgba(0, 0, 0, 0)", "0 4px 20px rgba(0, 0, 0, 0.1)"]);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "HR Services", path: "/hr-services" },
    { name: "Intelligence", path: "/intelligence" },
    { name: "Payroll", path: "/payroll" },
    { name: "Talent Acquisition", path: "/talent-acquisition" },
    { name: "Academy", path: "/academy" },
    { name: "Publication", path: "/publication" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 flex items-center justify-between bg-white shadow-md"
      style={{ backgroundColor: headerBg, boxShadow: headerShadow }}
    >
      <Link href="/" className="flex items-center">
        <Image src="/logo.png" alt="Venovox Logo" width={100} height={20} priority />
      </Link>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex items-center space-x-6">
        {menuItems.map((item) => (
          <Link key={item.name} href={item.path} className="text-gray-700 hover:text-red-700 text-lg font-medium">
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-white pt-20 px-6 md:hidden"
            role="dialog"
          >
            <nav className="flex flex-col space-y-6 py-8">
              {menuItems.map((item) => (
                <Link key={item.name} href={item.path} className="text-gray-800 hover:text-red-700 text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
