
import React, { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import gsap from "gsap";

const features = [
  {
    title: "Visual Clarity",
    description: "Transform complex numbers into intuitive visualizations that make sense at a glance.",
    icon: "🎨"
  },
  {
    title: "Trend Analysis",
    description: "Track your health metrics over time with beautiful animated trend lines.",
    icon: "📈"
  },
  {
    title: "Reference Ranges",
    description: "Immediately see if your results are within normal ranges with clear visual indicators.",
    icon: "⚖️"
  },
  {
    title: "Health Insights",
    description: "Get plain-language explanations of what your test results actually mean for your health.",
    icon: "💡"
  }
];

const FeatureSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (containerRef.current && isInView) {
      gsap.from(".feature-title", {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      });
      
      gsap.from(".feature-card", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
      });
    }
  }, [isInView]);

  return (
    <div 
      ref={containerRef}
      className="py-16 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="feature-title text-3xl md:text-4xl font-bold mb-4 text-center">
          Making Lab Reports Easy to Understand
        </h2>
        <p className="feature-title text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Our animated visualizations provide instant clarity on your health metrics
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
