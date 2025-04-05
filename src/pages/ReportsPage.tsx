
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import PatientIDForm from "@/components/PatientIDForm/PatientIDForm";

const ReportsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-purple-100 to-blue-100 py-16 px-4">
          <div className="container mx-auto text-center">
            <motion.h1 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Lab Report Visualizer
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Enter your patient ID to visualize your lab report with interactive animations
            </motion.p>
          </div>
        </div>
        
        <div className="py-16 px-4">
          <div className="container mx-auto">
            <motion.div 
              className="max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <PatientIDForm />
            </motion.div>
            
            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl mb-4">1️⃣</div>
                  <h3 className="text-xl font-semibold mb-2">Enter Patient ID</h3>
                  <p className="text-gray-600">Input your unique patient identifier from your lab report</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl mb-4">2️⃣</div>
                  <h3 className="text-xl font-semibold mb-2">Load Your Report</h3>
                  <p className="text-gray-600">We retrieve your lab results securely and privately</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl mb-4">3️⃣</div>
                  <h3 className="text-xl font-semibold mb-2">View Visualizations</h3>
                  <p className="text-gray-600">Explore your results with interactive, animated charts</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ReportsPage;
