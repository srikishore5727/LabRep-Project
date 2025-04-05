
import React, { useEffect, useRef } from "react";
import { Link } from "@tata1mg/router";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const Header = () => {
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  
  useEffect(() => {
    // Animate header elements on mount
    if (headerRef.current) {
      const tl = gsap.timeline();
      
      tl.from(headerRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
      });
      
      // Animate logo with slight bounce
      tl.from(logoRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)"
      }, "-=0.2");
      
      // Animate nav links
      tl.from(headerRef.current.querySelectorAll("nav a"), {
        y: -20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.3,
        ease: "power2.out"
      }, "-=0.3");
    }
  }, []);

  return (
    <header 
      ref={headerRef}
      className="bg-white shadow-sm py-4 px-6"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center" ref={logoRef}>
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg flex items-center justify-center mr-3">
            <span className="text-white text-xl font-bold">LR</span>
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
              Lab Report Visualizer
            </h1>
            <p className="text-xs text-gray-500">Powered by Catalyst</p>
          </div>
        </div>
        
        <nav className="flex space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/reports">Reports</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
    </header>
  );
};

// Navigation link with animation
const NavLink = ({ to, children }) => (
  <Link 
    to={to}
    className="relative text-gray-700 hover:text-purple-600 transition-colors duration-200"
  >
    <motion.span
      whileHover={{
        color: "#7c3aed", // purple-600
      }}
    >
      {children}
      <motion.span
        className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ 
          scale: 1, 
          opacity: 1,
          transition: { duration: 0.2 } 
        }}
        style={{ originX: 0 }}
      />
    </motion.span>
  </Link>
);

export default Header;
