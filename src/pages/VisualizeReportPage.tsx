
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { getLabReportByPatientId, LabReport } from "@/utils/mockData";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TestCategoryCard from "@/components/TestCategoryCard/TestCategoryCard";
import { useToast } from "@/components/ui/use-toast";

const VisualizeReportPage = () => {
  const { patientId = "" } = useParams<{ patientId: string }>();
  const [report, setReport] = useState<LabReport | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate API call
    const fetchReport = async () => {
      setLoading(true);
      
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const reportData = getLabReportByPatientId(patientId);
        
        if (reportData) {
          setReport(reportData);
          toast({
            title: "Report loaded successfully",
            description: `Viewing report for ${reportData.patientName}`,
          });
        } else {
          toast({
            title: "Report not found",
            description: "Could not find a report with the provided patient ID",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error("Error fetching report:", error);
        toast({
          title: "Error loading report",
          description: "An error occurred while fetching the report data",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchReport();
  }, [patientId, toast]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-purple-600 mb-4"></div>
            <p className="text-xl">Loading your report...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!report) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
            <div className="text-5xl mb-4">😕</div>
            <h2 className="text-2xl font-bold mb-2">Report Not Found</h2>
            <p className="text-gray-600 mb-6">
              We couldn't find a report with the patient ID: {patientId}
            </p>
            <button 
              onClick={() => window.history.back()}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              Go Back
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Count total abnormal results
  const totalAbnormal = report.categories.reduce((count, category) => {
    return count + category.tests.filter(test => test.isAbnormal).length;
  }, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8 px-4">
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
      </main>
      
      <Footer />
    </div>
  );
};

export default VisualizeReportPage;
