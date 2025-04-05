
import React, { useEffect, useRef } from "react";
import { Link } from "@tata1mg/router";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const HomePage = () => {
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  
  useEffect(() => {
    if (pageRef.current) {
      // GSAP animations for the hero section
      const tl = gsap.timeline();
      
      tl.from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
      
      tl.from(".hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.4");
      
      tl.from(".hero-button", {
        y: 20,
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        ease: "back.out(1.7)"
      }, "-=0.2");
      
      // Animate floating medical icons
      gsap.to(".float-icon", {
        y: "-20px",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2
      });
    }
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen">
      {/* Hero section */}
      <div className="bg-gradient-to-br from-purple-100 via-purple-50 to-blue-100 py-20 relative overflow-hidden" ref={heroRef}>
        {/* Animated floating icons */}
        <div className="absolute inset-0 overflow-hidden">
          {[
            { icon: "🧪", x: "10%", y: "20%", size: "text-4xl", delay: 0 },
            { icon: "🔬", x: "20%", y: "70%", size: "text-5xl", delay: 0.5 },
            { icon: "💊", x: "80%", y: "30%", size: "text-3xl", delay: 1.2 },
            { icon: "🩸", x: "75%", y: "80%", size: "text-4xl", delay: 0.8 },
            { icon: "🧬", x: "60%", y: "15%", size: "text-5xl", delay: 0.3 },
            { icon: "❤️", x: "30%", y: "85%", size: "text-4xl", delay: 1.5 },
            { icon: "📊", x: "90%", y: "60%", size: "text-3xl", delay: 0.7 }
          ].map((item, index) => (
            <div 
              key={index}
              className={`float-icon absolute ${item.size} text-purple-500 opacity-10`}
              style={{ 
                left: item.x, 
                top: item.y, 
                animationDelay: `${item.delay}s`
              }}
            >
              {item.icon}
            </div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Understand Your Lab Results
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle text-xl md:text-2xl text-gray-700 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Visualize complex medical data with interactive animations that 
              help you understand what your lab reports really mean.
            </motion.p>
            
            <motion.div
              className="hero-button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/reports">
                <motion.button 
                  className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-medium shadow-lg"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(124, 58, 237, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Your Reports
                </motion.button>
              </Link>
            </motion.div>
          </div>
          
          {/* Animated demo card */}
          <motion.div 
            className="mt-16 max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Why visualize your lab results?</h2>
                <p className="text-gray-600 mb-6">
                  Traditional lab reports can be confusing with their complex numbers and medical terminology. 
                  Our platform transforms this data into intuitive visualizations.
                </p>
                <ul className="space-y-3">
                  {[
                    "See where your results fall in normal ranges",
                    "Track changes over time with trend analysis",
                    "Identify abnormalities at a glance",
                    "Understand relationships between different tests"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + (index * 0.1) }}
                    >
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2 bg-gray-100 flex items-center justify-center">
                <div className="p-8">
                  {/* Animated lab report visualization */}
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <div className="mb-3 pb-3 border-b border-gray-100">
                      <div className="text-sm text-gray-500">Cholesterol</div>
                      <div className="flex justify-between">
                        <div className="font-bold">240 mg/dL</div>
                        <div className="text-red-500 font-medium">High</div>
                      </div>
                      <motion.div 
                        className="bg-gray-200 h-2 mt-2 rounded-full overflow-hidden"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1, delay: 1 }}
                      >
                        <motion.div 
                          className="bg-red-500 h-full"
                          initial={{ width: 0 }}
                          animate={{ width: "85%" }}
                          transition={{ duration: 1.5, delay: 1.2 }}
                        />
                      </motion.div>
                      <div className="flex justify-between mt-1 text-xs text-gray-500">
                        <span>0</span>
                        <span>Normal: 125-200</span>
                        <span>300</span>
                      </div>
                    </div>
                    
                    <div className="mb-3 pb-3 border-b border-gray-100">
                      <div className="text-sm text-gray-500">Hemoglobin</div>
                      <div className="flex justify-between">
                        <div className="font-bold">14.2 g/dL</div>
                        <div className="text-green-500 font-medium">Normal</div>
                      </div>
                      <motion.div 
                        className="bg-gray-200 h-2 mt-2 rounded-full overflow-hidden"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1, delay: 1.3 }}
                      >
                        <motion.div 
                          className="bg-green-500 h-full"
                          initial={{ width: 0 }}
                          animate={{ width: "60%" }}
                          transition={{ duration: 1.5, delay: 1.5 }}
                        />
                      </motion.div>
                      <div className="flex justify-between mt-1 text-xs text-gray-500">
                        <span>10</span>
                        <span>Normal: 13.5-17.5</span>
                        <span>20</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm text-gray-500">Blood Glucose</div>
                      <div className="flex justify-between">
                        <div className="font-bold">98 mg/dL</div>
                        <div className="text-green-500 font-medium">Normal</div>
                      </div>
                      <motion.div 
                        className="bg-gray-200 h-2 mt-2 rounded-full overflow-hidden"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1, delay: 1.6 }}
                      >
                        <motion.div 
                          className="bg-green-500 h-full"
                          initial={{ width: 0 }}
                          animate={{ width: "45%" }}
                          transition={{ duration: 1.5, delay: 1.8 }}
                        />
                      </motion.div>
                      <div className="flex justify-between mt-1 text-xs text-gray-500">
                        <span>70</span>
                        <span>Normal: 70-130</span>
                        <span>180</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Features section */}
      <div className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Features Designed for Understanding</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive visualization tools make it easy to interpret your health data.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div 
              className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            >
              <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">Interactive Charts</h3>
              <p className="text-gray-600">
                Explore your data through intuitive charts that show your results in context with normal ranges.
              </p>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div 
              className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-2">Trend Analysis</h3>
              <p className="text-gray-600">
                Track changes in your health metrics over time to spot improvements or areas of concern.
              </p>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div 
              className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-2">Abnormal Highlighting</h3>
              <p className="text-gray-600">
                Quickly identify out-of-range values with color-coded indicators that draw attention where needed.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* CTA section */}
      <div className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to take control of your health data?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Stop guessing what your lab results mean. Start visualizing them today.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to="/reports">
                <button className="bg-white text-purple-600 font-bold px-8 py-3 rounded-lg shadow-lg">
                  Get Started Now
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Add server and client fetchers for the Catalyst framework
HomePage.serverFetcher = async () => {
  // No data needed for this static page
  return {};
};

HomePage.clientFetcher = async () => {
  return {};
};

export default HomePage;
