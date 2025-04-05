
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const AboutPage = () => {
  const pageRef = useRef(null);
  
  useEffect(() => {
    if (pageRef.current) {
      // GSAP animations
      const tl = gsap.timeline();
      
      tl.from(".about-title", {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
      
      tl.from(".about-intro", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.3");
      
      // Animate each section with stagger
      tl.from(".about-section", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.2");
      
      // Animate features with stagger
      tl.from(".feature-card", {
        scale: 0.9,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "back.out(1.5)"
      }, "-=0.3");
    }
  }, []);
  
  // Team members data
  const teamMembers = [
    {
      name: "Dr. Emily Johnson",
      role: "Medical Director",
      image: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    {
      name: "Alex Chen",
      role: "Lead Developer",
      image: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      name: "Sarah Williams",
      role: "Data Scientist",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <div className="min-h-screen" ref={pageRef}>
      {/* Hero section */}
      <div className="bg-gradient-to-r from-purple-100 to-blue-100 py-20 px-4 text-center">
        <div className="container mx-auto">
          <h1 className="about-title text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 text-transparent bg-clip-text">
            About Lab Report Visualizer
          </h1>
          <p className="about-intro text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Transforming complex medical data into clear, interactive visualizations to help you understand your health.
          </p>
        </div>
      </div>
      
      {/* Our mission */}
      <div className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="about-section max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8">
                We believe that everyone deserves to understand their health data. 
                Our mission is to demystify complex lab reports by translating numbers and medical jargon 
                into intuitive visualizations that empower patients to take control of their health journey.
              </p>
              
              <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Features */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="about-section text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Key Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform combines medical expertise with cutting-edge visualization technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <motion.div 
              className="feature-card bg-white p-6 rounded-xl shadow-md border border-gray-100"
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-4xl mb-4 text-purple-500">📊</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Interactive Visualizations</h3>
              <p className="text-gray-600">
                Turn complex numbers into intuitive charts and graphs that make sense at a glance.
              </p>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div 
              className="feature-card bg-white p-6 rounded-xl shadow-md border border-gray-100"
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-4xl mb-4 text-purple-500">📱</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Instant Access</h3>
              <p className="text-gray-600">
                Access your lab reports anytime, anywhere with our responsive web application.
              </p>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div 
              className="feature-card bg-white p-6 rounded-xl shadow-md border border-gray-100"
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-4xl mb-4 text-purple-500">🔍</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Abnormal Detection</h3>
              <p className="text-gray-600">
                Automatically highlight values outside normal ranges to focus attention where it matters.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Team section */}
      <div className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="about-section text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the experts behind Lab Report Visualizer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-purple-100"
                  whileHover={{ scale: 1.05, borderColor: "#c4b5fd" }}
                >
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </motion.div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
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
            <h2 className="text-3xl font-bold mb-6">Ready to understand your lab results?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of users who are taking control of their health data with our visualization tools.
            </p>
            <motion.a 
              href="/reports" 
              className="inline-block bg-white text-purple-600 font-bold px-8 py-3 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Add server and client fetchers for the Catalyst framework
AboutPage.serverFetcher = async () => {
  // We don't need to fetch data for this static page
  return {};
};

AboutPage.clientFetcher = async () => {
  return {};
};

export default AboutPage;
