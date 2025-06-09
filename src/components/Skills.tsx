
import React from 'react';

const Skills = () => {
  const frontendSkills = [
    'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 
    'NUXT', 'Vue.js', 'Tailwind CSS', 'Bootstrap','XML' , 'Flutter' , 'Flowbite'
  ];

  const backendSkills = [
    'Node.js', 'Express.js', 'Python', 'MongoDB', 'Laravel', 'Sql Lite',
    'Spring Boot', 'MySQL', 'RESTful APIs', 'Postman', 'Firebase'               
  ];

  const toolsSkills = [
    'Git & GitHub', 'Vercel', 'Netlify', 'Figma',
    'Jira', 'Vite', 'npm'
  ];

  const SkillCategory = ({ title, skills, bgColor }: { title: string; skills: string[]; bgColor: string }) => (
    <div className={`p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg ${bgColor} hover:shadow-xl transition-shadow duration-300`}>
      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 text-center">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
        {skills.map((skill, index) => (
          <div
            key={skill}
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-xs sm:text-sm lg:text-base text-center font-medium text-gray-800 dark:text-gray-200 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-colors duration-200"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 max-w-xs sm:max-w-md lg:max-w-2xl mx-auto px-4">
            A comprehensive toolkit for building modern, scalable web applications and mobile applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <SkillCategory 
            title="Frontend Development" 
            skills={frontendSkills} 
            bgColor="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40"
          />
          <SkillCategory 
            title="Backend Development" 
            skills={backendSkills} 
            bgColor="bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/40 dark:to-green-800/40"
          />
          <SkillCategory 
            title="Tools & Technologies" 
            skills={toolsSkills} 
            bgColor="bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/40 dark:to-purple-800/40"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
