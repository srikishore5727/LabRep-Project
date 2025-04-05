
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-6 text-center">About LabReps</h1>
            
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                LabReps was created with a simple but powerful mission: to make medical lab reports accessible 
                and understandable for everyone. We believe that patients should be able to comprehend their own
                health data without needing a medical degree.
              </p>
              
              <p className="text-gray-700 mb-6">
                Through intuitive visualizations and meaningful animations, we transform complex numerical 
                data into visual stories that make sense at a glance. Our goal is to empower patients with
                knowledge about their own health, reducing anxiety and improving health literacy.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">The Problem We're Solving</h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>
                  <span className="font-medium">Confusion:</span> Lab reports are filled with numbers and medical jargon 
                  that most patients find difficult to interpret.
                </li>
                <li>
                  <span className="font-medium">Anxiety:</span> Seeing abnormal results without context can cause 
                  unnecessary stress and worry.
                </li>
                <li>
                  <span className="font-medium">Disconnection:</span> Many patients feel disconnected from their 
                  health data because they don't fully understand what the numbers mean.
                </li>
                <li>
                  <span className="font-medium">Time Constraints:</span> Healthcare providers often have limited 
                  time to thoroughly explain every lab result to patients.
                </li>
              </ul>
            </div>
            
            <motion.div 
              className="bg-purple-50 rounded-xl shadow-md p-8 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-medium mb-2 text-purple-800">Visual Translations</h3>
                  <p className="text-gray-700">
                    We convert numerical values into visual representations that intuitively show where results 
                    fall within reference ranges and what that means for your health.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-2 text-purple-800">Meaningful Animations</h3>
                  <p className="text-gray-700">
                    Our animations aren't just for show—they help illustrate relationships between different 
                    metrics and highlight important changes over time.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-2 text-purple-800">Plain Language</h3>
                  <p className="text-gray-700">
                    We pair visualizations with clear, jargon-free explanations of what each test measures 
                    and why it matters for your health.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-2 text-purple-800">Trend Analysis</h3>
                  <p className="text-gray-700">
                    We show how your results have changed over time, making it easier to spot trends 
                    and understand the impact of lifestyle changes or treatments.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Created for the Tata 1mg Hackathon</h2>
              <p className="text-gray-700 mb-6">
                LabReps was developed as part of the Tata 1mg Hackathon, leveraging the power of their 
                Catalyst framework to create a seamless, user-friendly experience with server-side rendering
                and sophisticated animations.
              </p>
              <p className="text-gray-700 italic">
                "Making health data accessible to everyone, one visualization at a time."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
