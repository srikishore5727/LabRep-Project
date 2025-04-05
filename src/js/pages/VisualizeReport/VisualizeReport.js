
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "@tata1mg/router";
import { motion } from "framer-motion";
import { useCurrentRouteData } from "@tata1mg/router";
import TestCategoryCard from "../../components/TestCategoryCard/TestCategoryCard";
import { toast } from "../../utils/toast";

const VisualizeReportPage = () => {
  const { patientId } = useParams();
  const { data: report, error, isFetching } = useCurrentRouteData();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      toast({
        title: "Error loading report",
        description: "An error occurred while fetching the report data",
        variant: "destructive",
      });
    } else if (report) {
      toast({
        title: "Report loaded successfully",
        description: `Viewing report for ${report.patientName}`,
      });
    }
  }, [report, error]);

  if (isFetching) {
    return (
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-purple-600 mb-4"></div>
          <p className="text-xl">Loading your report...</p>
        </div>
      </div>
    );
  }

  if (!report) {
    return (
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
          <div className="text-5xl mb-4">😕</div>
          <h2 className="text-2xl font-bold mb-2">Report Not Found</h2>
          <p className="text-gray-600 mb-6">
            We couldn't find a report with the patient ID: {patientId}
          </p>
          <button 
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Count total abnormal results
  const totalAbnormal = report.categories.reduce((count, category) => {
    return count + category.tests.filter(test => test.isAbnormal).length;
  }, 0);

  return (
    <div className="py-8 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-2xl font-bold mb-2">{report.patientName}'s Lab Report</h1>
                <p className="text-gray-600">Report Date: {new Date(report.reportDate).toLocaleDateString()}</p>
                <p className="text-gray-600">Patient ID: {report.patientId}</p>
              </div>
              
              <div className="mt-4 md:mt-0">
                {totalAbnormal > 0 ? (
                  <motion.div 
                    className="px-4 py-2 bg-red-100 text-red-700 font-medium rounded-full"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: 3, duration: 1 }}
                  >
                    {totalAbnormal} Abnormal Results
                  </motion.div>
                ) : (
                  <div className="px-4 py-2 bg-green-100 text-green-700 font-medium rounded-full">
                    All Results Normal
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Test Categories</h2>
            
            <div className="space-y-6">
              {report.categories.map((category) => (
                <TestCategoryCard key={category.id} category={category} />
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-12 bg-blue-50 rounded-lg p-6 border border-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-2">Important Note</h3>
            <p className="text-gray-700">
              This visualization is for informational purposes only and does not substitute for professional medical advice.
              Always consult with your healthcare provider about your lab results and what they mean for your health.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// Add server and client fetchers for the Catalyst framework
VisualizeReportPage.serverFetcher = async ({ params }) => {
  try {
    const { patientId } = params;
    // In a real application, this would be a fetch to an API
    // For our demo, we're importing the mock data utility
    const { getLabReportByPatientId } = require('../../utils/mockData');
    const reportData = getLabReportByPatientId(patientId);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return reportData || null;
  } catch (error) {
    console.error("Error fetching report:", error);
    throw error;
  }
};

VisualizeReportPage.clientFetcher = async ({ params }) => {
  try {
    const { patientId } = params;
    // For client-side navigation
    const { getLabReportByPatientId } = require('../../utils/mockData');
    const reportData = getLabReportByPatientId(patientId);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return reportData || null;
  } catch (error) {
    console.error("Error fetching report:", error);
    throw error;
  }
};

export default VisualizeReportPage;
