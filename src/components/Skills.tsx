
import React from 'react';

const Skills = () => {
  const frontendSkills = [
    'HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React', 
    'Angular', 'Vue.js', 'Tailwind CSS', 'Bootstrap', 'Sass/SCSS'
  ];

  const backendSkills = [
    'Node.js', 'Express.js', 'Python', 'Django', 'MongoDB', 
    'PostgreSQL', 'MySQL', 'RESTful APIs', 'GraphQL', 'Firebase'
  ];

  const toolsSkills = [
    'Git & GitHub', 'Docker', 'AWS', 'Vercel', 'Netlify', 
    'Jest', 'Cypress', 'Webpack', 'Vite', 'npm/yarn'
  ];

  const SkillCategory = ({ title, skills, bgColor }: { title: string; skills: string[]; bgColor: string }) => (
    <div className={`p-6 rounded-xl shadow-lg ${bgColor} hover:shadow-xl transition-shadow duration-300`}>
      <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{title}</h3>
      <div className="grid grid-cols-2 gap-2">
        {skills.map((skill, index) => (
          <div
            key={skill}
            className="bg-white/70 backdrop-blur-sm rounded-lg p-2 text-sm text-center font-medium text-gray-800 hover:bg-white/90 transition-colors duration-200"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <SkillCategory 
            title="Frontend Development" 
            skills={frontendSkills} 
            bgColor="bg-gradient-to-br from-blue-100 to-blue-200"
          />
          <SkillCategory 
            title="Backend Development" 
            skills={backendSkills} 
            bgColor="bg-gradient-to-br from-green-100 to-green-200"
          />
          <SkillCategory 
            title="Tools & Technologies" 
            skills={toolsSkills} 
            bgColor="bg-gradient-to-br from-purple-100 to-purple-200"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
