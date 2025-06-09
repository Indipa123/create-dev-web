
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8 sm:py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
              <span className="text-blue-400">Indipa</span> Ayomal
            </h3>
            <p className="text-gray-400 max-w-xs sm:max-w-md lg:max-w-lg mx-auto text-sm sm:text-base leading-relaxed px-4">
              Full-Stack Developer passionate about creating innovative web solutions 
              and building the future of technology.
            </p>
          </div>

          <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200 p-2"
            >
              <Github size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200 p-2"
            >
              <Linkedin size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="mailto:alex@example.com"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200 p-2"
            >
              <Mail size={20} className="sm:w-6 sm:h-6" />
            </a>
          </div>

          <div className="border-t border-gray-800 dark:border-gray-700 pt-6 sm:pt-8">
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed px-4">
              © 2025 Indipa Ayomal. All rights reserved. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
