
import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <motion.div 
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-8xl mb-6"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, repeatType: "loop" }}
        >
          🧪
        </motion.div>
        
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The page you're looking for seems to have vanished like a drop of reagent.
        </p>
        
        <Link to="/">
          <Button className="bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-3 text-lg">
            Return Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
