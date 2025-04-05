
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <motion.header 
      className="bg-white py-4 px-6 shadow-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
        >
          <img src="/public/lovable-uploads/d18374ce-215b-4262-9e7e-bc68ac0bb32c.png" 
               alt="LabReps Logo" 
               className="h-10" />
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-blue-500 text-transparent bg-clip-text">
            LabReps
          </span>
        </motion.div>

        <nav className="hidden md:flex gap-8">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/" className="text-gray-700 hover:text-purple-600 font-medium">Home</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/reports" className="text-gray-700 hover:text-purple-600 font-medium">Reports</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/about" className="text-gray-700 hover:text-purple-600 font-medium">About</Link>
          </motion.div>
        </nav>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-md">
            Sign In
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
