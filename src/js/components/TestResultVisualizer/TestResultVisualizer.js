
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

const TestResultVisualizer = ({ test }) => {
  const chartRef = useRef(null);
  const valueRef = useRef(null);
  const progressBarRef = useRef(null);

  // Format trend data for the chart
  const trendData = test.previousValues 
    ? test.previousValues.map((value, index) => ({
        date: test.previousDates?.[index] || `Previous ${index + 1}`,
        value
      })).concat([{ date: "Current", value: test.value }])
    : [{ date: "Current", value: test.value }];
  
  // Calculate value's position within reference range as a percentage
  const range = test.referenceRange.max - test.referenceRange.min;
  const normalizedValue = Math.max(0, Math.min(100, ((test.value - test.referenceRange.min) / range) * 100));
  
  // Calculate the range bands for visualization
  const lowRange = [test.referenceRange.min, test.referenceRange.min + (range * 0.25)];
  const normalRange = [test.referenceRange.min + (range * 0.25), test.referenceRange.min + (range * 0.75)];
  const highRange = [test.referenceRange.min + (range * 0.75), test.referenceRange.max];

  // Determine the color based on where the value falls
  const getValueColor = () => {
    if (test.isAbnormal) {
      return test.value < test.referenceRange.min ? "text-blue-600" : "text-red-600";
    }
    return "text-green-600";
  };

  // Determine the background color for the progress bar
  const getProgressBarColor = () => {
    if (normalizedValue < 25) return "bg-blue-500";
    if (normalizedValue > 75) return "bg-red-500";
    return "bg-green-500";
  };

  useEffect(() => {
    // Animate value counter
    if (valueRef.current) {
      const value = parseFloat(test.value);
      gsap.fromTo(
        valueRef.current,
        { textContent: "0" },
        {
          textContent: value.toFixed(1),
          duration: 1.5,
          ease: "power2.out",
          snap: { textContent: 0.1 },
          onUpdate: function() {
            // Format with one decimal place
            valueRef.current.textContent = parseFloat(valueRef.current.textContent).toFixed(1);
          }
        }
      );
    }

    // Animate progress bar
    if (progressBarRef.current) {
      gsap.fromTo(
        progressBarRef.current,
        { width: "0%" },
        { 
          width: normalizedValue + "%", 
          duration: 1.5, 
          ease: "elastic.out(1, 0.75)" 
        }
      );
    }

    // Animate chart elements
    if (chartRef.current && test.previousValues?.length) {
      const chartLines = chartRef.current.querySelectorAll(".recharts-line-curve");
      const chartDots = chartRef.current.querySelectorAll(".recharts-dot");
      
      gsap.fromTo(
        chartLines,
        { strokeDashoffset: 1000, strokeDasharray: 1000 },
        { strokeDashoffset: 0, duration: 2, ease: "power3.out" }
      );

      gsap.fromTo(
        chartDots,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" }
      );
    }
  }, [test.value, test.previousValues, normalizedValue]);

  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
    >
      <div className="flex flex-wrap justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold">{test.name}</h3>
          <p className="text-sm text-gray-500">{test.description}</p>
        </div>
        
        <div className="mt-2 md:mt-0 text-right">
          <div className="flex items-center">
            <span 
              ref={valueRef} 
              className={`text-2xl font-bold ${getValueColor()}`}
            >
              {test.value.toFixed(1)}
            </span>
            <span className="ml-2 text-sm text-gray-500">{test.referenceRange.unit}</span>
          </div>
          <div className="text-xs text-gray-500">
            Normal range: {test.referenceRange.min} - {test.referenceRange.max} {test.referenceRange.unit}
          </div>
        </div>
      </div>
      
      {/* Visualized range bar */}
      <div className="mb-6">
        <div className="h-8 bg-gray-200 rounded-full relative overflow-hidden">
          {/* Reference markers */}
          <div className="absolute inset-0 flex items-center justify-between px-2">
            <span className="text-xs text-gray-600 font-semibold">Min: {test.referenceRange.min}</span>
            <span className="text-xs text-gray-600 font-semibold">Max: {test.referenceRange.max}</span>
          </div>
          
          {/* Colored progress bar */}
          <div 
            ref={progressBarRef}
            className={`h-full ${getProgressBarColor()} transition-colors duration-500`}
            style={{ width: `${normalizedValue}%` }}
          ></div>
          
          {/* Value indicator */}
          <motion.div 
            className="absolute top-full mt-1"
            style={{ left: `${normalizedValue}%` }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.3 }}
          >
            <div className={`transform -translate-x-1/2 ${getValueColor()} text-xs font-bold`}>{test.value}</div>
          </motion.div>
        </div>
      </div>
      
      {/* Value trend chart */}
      {test.previousValues && test.previousValues.length > 0 && (
        <motion.div 
          ref={chartRef}
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h4 className="text-sm font-medium mb-2">Value History</h4>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis 
                  dataKey="date" 
                  tick={{ fontSize: 10 }} 
                  tickFormatter={(val) => {
                    // Format date string to show only month/day
                    try {
                      const date = new Date(val);
                      return date instanceof Date && !isNaN(date) 
                        ? `${date.getMonth() + 1}/${date.getDate()}` 
                        : val;
                    } catch {
                      return val;
                    }
                  }} 
                />
                <YAxis domain={['dataMin - 10', 'dataMax + 10']} tick={{ fontSize: 10 }} />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke={test.isAbnormal ? "#ef4444" : "#3b82f6"} 
                  strokeWidth={2}
                  dot={{ stroke: test.isAbnormal ? "#ef4444" : "#3b82f6", strokeWidth: 2, r: 4, fill: "white" }}
                  activeDot={{ r: 6, fill: test.isAbnormal ? "#ef4444" : "#3b82f6" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      )}
      
      {/* Abnormal indicator */}
      {test.isAbnormal && (
        <motion.div 
          className="mt-4 p-2 bg-red-50 border border-red-100 rounded-md flex items-center"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span className="text-sm text-red-700">
            This value is {test.value < test.referenceRange.min ? "below" : "above"} the normal range.
          </span>
        </motion.div>
      )}
    </motion.div>
  );
};

export default TestResultVisualizer;
