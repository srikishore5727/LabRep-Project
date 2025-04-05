
import React from "react";
import { Link } from "@tata1mg/router";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-6xl mb-6">
            <span role="img" aria-label="confused face">😕</span>
          </div>
          
          <motion.h1 
            className="text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Page Not Found
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            The page you're looking for doesn't seem to exist.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link to="/">
              <motion.button 
                className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-lg text-lg font-medium shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(124, 58, 237, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Go Back Home
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// Add server and client fetchers for Catalyst framework
NotFound.serverFetcher = async () => {
  return {};
};

NotFound.clientFetcher = async () => {
  return {};
};

export default NotFound;
