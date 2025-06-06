
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ThemeProvider } from '../contexts/ThemeContext';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
};

export default Index;
