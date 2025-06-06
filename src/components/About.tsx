
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              My Journey in Development
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate Computer Science student with a deep love for creating 
              innovative web applications. My journey began with curiosity about how 
              websites work, and it has evolved into a comprehensive understanding of 
              full-stack development.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently pursuing my degree in Computer Science, I've developed expertise 
              in both frontend and backend technologies. I enjoy solving complex problems 
              and building user-centric applications that make a real difference.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or learning about the latest 
              developments in web development and software engineering.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">15+</div>
                <div className="text-gray-700 dark:text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">2+</div>
                <div className="text-gray-700 dark:text-gray-300">Years Learning</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
              alt="Developer workspace"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
