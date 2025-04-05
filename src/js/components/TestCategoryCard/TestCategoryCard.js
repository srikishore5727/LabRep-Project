
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestResultVisualizer from "../TestResultVisualizer/TestResultVisualizer";

const TestCategoryCard = ({ category }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef(null);

  // Count abnormal tests
  const abnormalCount = category.tests.filter(test => test.isAbnormal).length;

  return (
    <motion.div 
      className={`mb-6 rounded-lg shadow-md overflow-hidden transition-all ${
        isExpanded ? 'bg-white' : 'bg-white hover:shadow-lg'
      }`}
      animate={{
        height: isExpanded ? "auto" : "80px",
        opacity: isExpanded ? 1 : 0.7,
      }}
      transition={{
        height: { duration: 0.3, ease: "easeInOut" },
        opacity: { duration: 0.2 }
      }}
      ref={containerRef}
    >
      <motion.div 
        className="p-4 cursor-pointer flex items-center justify-between"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ backgroundColor: isExpanded ? "white" : "#f9fafb" }}
      >
        <div>
          <h3 className="text-lg font-semibold flex items-center">
            {category.name}
            {abnormalCount > 0 && (
              <span className="ml-3 px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded">
                {abnormalCount} abnormal
              </span>
            )}
          </h3>
          
          {!isExpanded && (
            <p className="text-sm text-gray-500 mt-1">{category.description}</p>
          )}
        </div>
        
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-gray-400"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 pb-4"
          >
            <p className="mb-4 text-gray-600">{category.description}</p>
            
            <div className="space-y-6">
              {category.tests.map((test) => (
                <TestResultVisualizer key={test.id} test={test} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TestCategoryCard;
