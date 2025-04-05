
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-100 py-8 mt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">LabReps</h3>
            <p className="text-gray-600">
              Transforming complex lab reports into intuitive visual experiences.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600">Reports</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600">Terms of Service</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-600 mb-2">info@labreps.com</p>
            <p className="text-gray-600">+1 (555) 123-4567</p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-600 hover:text-purple-600">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} LabReps. All rights reserved. Created for Tata 1mg Hackathon.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
