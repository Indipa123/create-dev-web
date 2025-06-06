import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full text-center">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-6 sm:mb-8">
            <img alt="Professional headshot" className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full mx-auto shadow-2xl border-4 border-white dark:border-gray-300" src="/lovable-uploads/deca2a1f-f875-41fa-8d80-a8f580674b4c.jpg" />
          </div>

          {/* Introduction */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-2">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Indipa Ayomal</span>
          </h1>
          
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 px-2">
            Full-Stack Developer & Computer Science Student
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4">Passionate about creating innovative web solutions with modern technologies. Currently pursuing Bachelor of Computing at Coventry University, specializing in web development and software engineering.</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 sm:px-8 py-3 w-full sm:w-auto text-sm sm:text-base">
              <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-6 sm:px-8 py-3 w-full sm:w-auto text-sm sm:text-base">
              <FileText className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 sm:space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
              <Github size={24} className="sm:w-7 sm:h-7" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              <Linkedin size={24} className="sm:w-7 sm:h-7" />
            </a>
            <a href="mailto:alex@example.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              <Mail size={24} className="sm:w-7 sm:h-7" />
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;