
import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import PatientIDForm from "@/components/PatientIDForm/PatientIDForm";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        
        <motion.div 
          className="py-16 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Get Started Now</h2>
            <PatientIDForm />
          </div>
        </motion.div>
        
        <FeatureSection />
        
        <motion.div 
          className="py-16 px-4 bg-gradient-to-r from-purple-50 to-blue-50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Simplify Medical Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              No more struggling to understand complex medical terminology or deciphering
              what your lab values actually mean for your health.
            </p>
            <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
              <img 
                src="https://placehold.co/800x400/e2e8f0/475569?text=Interactive+Lab+Report+Demo" 
                alt="Lab Report Visualization" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
