
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { TestResult } from "@/utils/mockData";
import gsap from "gsap";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface TestResultVisualizerProps {
  test: TestResult;
}

const TestResultVisualizer: React.FC<TestResultVisualizerProps> = ({ test }) => {
  const barRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLDivElement>(null);

  // Calculate position within reference range (0-100%)
  const calculatePosition = () => {
    const { min, max } = test.referenceRange;
    const range = max - min;
    
    // Clamp value between min and max for display purposes
    const clampedValue = Math.max(min, Math.min(max, test.value));
    
    return ((clampedValue - min) / range) * 100;
  };

  // Determine if value is low, normal, or high
  const getStatusColor = () => {
    const { min, max } = test.referenceRange;
    
    if (test.value < min) return "bg-blue-500";
    if (test.value > max) return "bg-red-500";
    return "bg-green-500";
  };

  // Format historical data for chart
  const chartData = test.previousValues && test.previousDates 
    ? [...test.previousValues, test.value].map((value, index) => {
        const date = index < test.previousDates!.length 
          ? test.previousDates![index] 
          : "Current";
          
        return { date, value };
      })
    : [{ date: "Current", value: test.value }];

  useEffect(() => {
    if (barRef.current && valueRef.current) {
      gsap.fromTo(
        valueRef.current,
        { 
          left: "0%", 
          opacity: 0 
        },
        { 
          left: `${calculatePosition()}%`, 
          opacity: 1,
          duration: 1.5,
          ease: "elastic.out(1, 0.5)"
        }
      );
    }
  }, []);

  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h4 className="font-medium text-gray-800">
            {test.name}
            {test.isAbnormal && (
              <motion.span 
                className="ml-2 inline-block"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: 8, repeatType: "mirror", duration: 1 }}
              >
                ⚠️
              </motion.span>
            )}
          </h4>
          <div className="text-sm text-gray-500">
            Reference Range: {test.referenceRange.min} - {test.referenceRange.max} {test.referenceRange.unit}
          </div>
        </div>
        <div className="text-right">
          <div className={`text-xl font-bold ${test.isAbnormal ? 'text-red-600' : 'text-green-600'}`}>
            {test.value}
          </div>
          <div className="text-sm text-gray-500">{test.referenceRange.unit}</div>
        </div>
      </div>
      
      {/* Interactive Value Slider Visualization */}
      <div className="my-4">
        <div className="relative h-8">
          {/* Reference Range Bar */}
          <div className="absolute top-3 left-0 right-0 h-2 bg-gray-200 rounded-full" ref={barRef}>
            {/* Normal Range Indicator */}
            <div 
              className="absolute h-full bg-green-200 rounded-full"
              style={{ 
                left: '0%', 
                width: '100%' 
              }}
            ></div>
            
            {/* Actual Value Indicator */}
            <motion.div 
              className={`absolute top-1/2 -translate-y-1/2 h-6 w-6 rounded-full shadow-md flex items-center justify-center ${getStatusColor()}`}
              ref={valueRef}
              style={{ left: `${calculatePosition()}%`, transform: 'translate(-50%, -50%)' }}
              whileHover={{ scale: 1.2 }}
            >
              <Popover>
                <PopoverTrigger asChild>
                  <button className="w-full h-full rounded-full focus:outline-none"></button>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-4">
                  <h5 className="font-bold mb-2">{test.name}</h5>
                  <p className="text-sm mb-2">{test.description}</p>
                  <p className="text-sm">
                    Your value: <span className="font-semibold">{test.value} {test.referenceRange.unit}</span>
                  </p>
                  {test.isAbnormal && (
                    <p className="text-red-500 text-sm mt-2">
                      This result is outside the normal range and may require attention.
                    </p>
                  )}
                </PopoverContent>
              </Popover>
            </motion.div>
          </div>
          
          {/* Scale Labels */}
          <div className="absolute top-6 left-0 text-xs text-gray-500">
            {test.referenceRange.min}
          </div>
          <div className="absolute top-6 right-0 text-xs text-gray-500">
            {test.referenceRange.max}
          </div>
        </div>
      </div>
      
      {/* Historical Trend Chart */}
      {test.previousValues && test.previousValues.length > 0 && (
        <div className="mt-6">
          <h5 className="text-sm font-medium text-gray-700 mb-2">Historical Trend</h5>
          <div className="h-[180px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 5, right: 20, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="date" 
                  tick={{ fontSize: 12 }} 
                  angle={-45}
                  textAnchor="end"
                  height={50}
                />
                <YAxis 
                  domain={[
                    Math.min(test.referenceRange.min * 0.8, Math.min(...chartData.map(d => d.value)) * 0.9),
                    Math.max(test.referenceRange.max * 1.2, Math.max(...chartData.map(d => d.value)) * 1.1)
                  ]}
                />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#8884d8" 
                  strokeWidth={2}
                  dot={{ fill: '#8884d8', r: 6 }}
                  activeDot={{ r: 8, fill: "#6366f1" }}
                  animationDuration={2000}
                  animationEasing="ease-in-out"
                />
                {/* Reference Range Area */}
                <rect 
                  x="0%" 
                  y={test.referenceRange.min} 
                  width="100%" 
                  height={test.referenceRange.max - test.referenceRange.min} 
                  fill="#4ade8055" 
                  fillOpacity={0.2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestResultVisualizer;
