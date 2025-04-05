
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import PatientIDForm from "../../components/PatientIDForm/PatientIDForm";

const ReportsPage = () => {
  const pageRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const formContainerRef = useRef(null);
  const stepsRef = useRef(null);

  // Medical floating elements for the background
  const floatingElements = [
    { icon: "🧪", size: "text-3xl", delay: 0.2, duration: 15, rotate: 10, y: 50 },
    { icon: "🔬", size: "text-2xl", delay: 1.5, duration: 20, rotate: -5, y: -30 },
    { icon: "⚕️", size: "text-4xl", delay: 0.5, duration: 18, rotate: 15, y: 20 },
    { icon: "💊", size: "text-2xl", delay: 2.2, duration: 12, rotate: -10, y: -40 },
    { icon: "❤️", size: "text-3xl", delay: 3.8, duration: 25, rotate: 8, y: 60 },
    { icon: "🩸", size: "text-xl", delay: 1.0, duration: 14, rotate: -12, y: -20 },
    { icon: "🧬", size: "text-2xl", delay: 2.8, duration: 22, rotate: 20, y: 10 },
  ];

  useEffect(() => {
    // Create a GSAP timeline for entrance animations
    const tl = gsap.timeline();
    
    if (pageRef.current) {
      // Background gradient animation
      gsap.fromTo(
        pageRef.current.querySelector(".bg-gradient"),
        { backgroundPosition: "0% 0%" },
        { 
          backgroundPosition: "100% 100%", 
          duration: 15,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        }
      );

      // Animate heading with text reveal
      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
      
      // Animate description text with staggered letter appearance
      tl.from(descriptionRef.current?.children || [], {
        y: 20,
        opacity: 0,
        stagger: 0.05,
        duration: 0.4,
        ease: "power3.out"
      }, "-=0.4");
      
      // Animate form with bounce effect
      tl.from(formContainerRef.current, {
        scale: 0.8,
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "back.out(1.7)"
      }, "-=0.2");
      
      // Animate steps with staggered appearance
      tl.from(stepsRef.current?.querySelectorAll(".step-card"), {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.3");
    }
  }, []);

  // Split text into spans for character animation
  const splitText = (text) => {
    return text.split('').map((char, idx) => (
      <span key={idx} className="inline-block">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div className="min-h-screen flex flex-col" ref={pageRef}>
      <div className="bg-gradient-to-r from-purple-100 to-blue-100 py-16 px-4 overflow-hidden relative bg-gradient">
        {/* Floating medical symbols in background */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.size} text-purple-500 opacity-10 pointer-events-none`}
            initial={{ 
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              rotate: 0
            }}
            animate={{ 
              x: Math.random() * 100 - 50,
              y: [element.y, -element.y, element.y],
              rotate: [0, element.rotate, 0, -element.rotate, 0]
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
            }}
          >
            {element.icon}
          </motion.div>
        ))}
        
        <div className="container mx-auto text-center relative z-10">
          <motion.h1 
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Lab Report Visualizer
          </motion.h1>
          
          <motion.p 
            ref={descriptionRef}
            className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {splitText("Enter your patient ID to visualize your lab report with interactive animations")}
          </motion.p>
        </div>
      </div>
      
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div 
            ref={formContainerRef}
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {/* Enhanced form container with pulse effect */}
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-xl border-2 border-purple-100"
              whileHover={{ boxShadow: "0 10px 25px rgba(124, 58, 237, 0.15)" }}
              animate={{ 
                boxShadow: ["0 5px 15px rgba(124, 58, 237, 0.1)", "0 8px 25px rgba(124, 58, 237, 0.2)", "0 5px 15px rgba(124, 58, 237, 0.1)"],
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }
              }}
            >
              <PatientIDForm />
            </motion.div>
          </motion.div>
          
          <motion.div 
            ref={stepsRef}
            className="mt-24 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Step 1 */}
              <motion.div 
                className="step-card bg-white p-6 rounded-lg shadow-md relative overflow-hidden border-t-4 border-purple-500"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {/* Animated step indicator */}
                <motion.div 
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-400"
                  initial={{ scaleX: 0, transformOrigin: "left" }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                />
                <div className="text-4xl mb-4 bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <motion.div 
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    1️⃣
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Enter Patient ID</h3>
                <p className="text-gray-600">Input your unique patient identifier from your lab report</p>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div 
                className="step-card bg-white p-6 rounded-lg shadow-md relative overflow-hidden border-t-4 border-indigo-500"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-blue-400"
                  initial={{ scaleX: 0, transformOrigin: "left" }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  viewport={{ once: true }}
                />
                <div className="text-4xl mb-4 bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    2️⃣
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Load Your Report</h3>
                <p className="text-gray-600">We retrieve your lab results securely and privately</p>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div 
                className="step-card bg-white p-6 rounded-lg shadow-md relative overflow-hidden border-t-4 border-blue-500"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400"
                  initial={{ scaleX: 0, transformOrigin: "left" }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.9 }}
                  viewport={{ once: true }}
                />
                <div className="text-4xl mb-4 bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <motion.div 
                    animate={{ 
                      y: [0, -3, 0, 3, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    3️⃣
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold mb-2">View Visualizations</h3>
                <p className="text-gray-600">Explore your results with interactive, animated charts</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Add server and client fetchers for Catalyst framework
ReportsPage.serverFetcher = async () => {
  // We don't need to fetch data for this page, but we must implement the function
  return {};
};

ReportsPage.clientFetcher = async () => {
  // Client-side fetcher implementation
  return {};
};

export default ReportsPage;
