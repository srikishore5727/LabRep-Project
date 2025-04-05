
import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const floatingElements = [
  { icon: "🧪", delay: 0, x: -20, y: -30, size: "text-2xl" },
  { icon: "❤️", delay: 0.5, x: 30, y: -10, size: "text-xl" },
  { icon: "🩸", delay: 1, x: -30, y: 20, size: "text-3xl" },
  { icon: "💊", delay: 1.5, x: 40, y: 30, size: "text-2xl" },
  { icon: "🔬", delay: 2, x: 10, y: -40, size: "text-xl" },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef);

  useEffect(() => {
    if (containerRef.current && isInView) {
      const tl = gsap.timeline();
      
      tl.from(".hero-title", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
      });
      
      tl.from(".hero-description", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.4");
      
      tl.from(".hero-button", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power3.out",
      }, "-=0.4");
    }
  }, [isInView]);

  return (
    <div 
      ref={containerRef}
      className="relative bg-gradient-to-br from-indigo-50 to-white py-28 px-4 overflow-hidden"
    >
      <div className="container mx-auto z-10 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="hero-title text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 text-transparent bg-clip-text"
          >
            Understand Your Lab Reports With Visual Clarity
          </motion.h1>
          
          <motion.p 
            className="hero-description text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Transform confusing medical numbers into intuitive, animated visualizations. 
            Make sense of your health data in seconds with LabReps.
          </motion.p>
          
          <motion.div className="hero-button">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-6 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all"
                onClick={() => navigate('/reports')}
              >
                Visualize Your Report Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating medical elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} z-0 opacity-40`}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.4, 0.6, 0.4],
            x: [element.x, element.x + 10, element.x],
            y: [element.y, element.y - 10, element.y],
          }}
          transition={{
            delay: element.delay,
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            top: `${50 + Math.random() * 20}%`,
            left: `${10 + Math.random() * 80}%`
          }}
        >
          {element.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default HeroSection;
