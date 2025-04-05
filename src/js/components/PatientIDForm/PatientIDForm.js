
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "@tata1mg/router";
import { toast } from "../../utils/toast";
import { getLabReportByPatientId } from "../../utils/mockData";

const PatientIDForm = ({ onSubmit }) => {
  const [patientId, setPatientId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!patientId.trim()) {
      toast({
        title: "Patient ID Required",
        description: "Please enter a valid patient ID",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const report = getLabReportByPatientId(patientId);
      
      if (report) {
        toast({
          title: "Report Found",
          description: `Loading report for ${report.patientName}`,
        });
        
        if (onSubmit) {
          onSubmit(patientId);
        } else {
          navigate(`/visualize/${patientId}`);
        }
      } else {
        toast({
          title: "Report Not Found",
          description: "Try PT-12345 or PT-67890 for demo purposes",
          variant: "destructive",
        });
      }
      
      setIsLoading(false);
    }, 1500);
  };

  return (
    <motion.div
      className="max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">Enter Your Patient ID</h2>
      <p className="text-gray-600 mb-6 text-center">
        Find your patient ID on your lab report document or app
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="e.g. PT-12345"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            className="w-full p-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-500 p-4 text-white font-medium rounded-lg"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "View Your Report"}
          </button>
        </motion.div>
        
        <p className="text-sm text-gray-500 mt-4 text-center">
          Try "PT-12345" or "PT-67890" for demo purposes
        </p>
      </form>
    </motion.div>
  );
};

export default PatientIDForm;
