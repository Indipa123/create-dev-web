
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Food Store",
      description: "A responsive e-commerce food store with product listings, shopping cart, and user authentication. Built with React and Spring boot.",
      image: "https://i.pinimg.com/736x/34/07/64/34076406cb925e97d9865186a94619b9.jpg",
      tech: ["React", "Spring boot", "MYSQL", "RESTful API", "JWT"],
      githubUrl: "https://github.com/Indipa123/food-store-frontend.git"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, team collaboration features, and advanced filtering options.",
      image: "https://i.pinimg.com/736x/f7/ec/75/f7ec75a470625b07fd507ac0e214c0d3.jpg",
      tech: ["NUXT", "Express", "Tailwind", "Flowbite", "PINIA"],
      githubUrl: "https://github.com/Indipa123/Task-Management.git"
    },
    {
      title: "Food Delivery App",
      description: "A mobile-first food delivery application with restaurant listings, order tracking, and user reviews. Built with XML & SQLLite.",
      image: "https://videos.openai.com/vg-assets/assets%2Ftask_01jx9vydezf0etm6mhkwcbx7xw%2F1749456824_img_1.webp?st=2025-06-09T06%3A52%3A31Z&se=2025-06-15T07%3A52%3A31Z&sks=b&skt=2025-06-09T06%3A52%3A31Z&ske=2025-06-15T07%3A52%3A31Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=YkJvbLknNLO5CpAAY%2FEP1w4iBH7Nj%2BzKiJBlFF1lVgc%3D&az=oaivgprodscus",
      tech: ["XML", "SQLLite", "Java", "Android Studio"],
      githubUrl: "https://github.com/Indipa123/My-food-app.git"
    },
    {
      title: "Healthcare Management App",
      description: "A healthcare management App for patient records, patient report management, and all pharmacy features. Built with Flutter and node.js backend.",
      image: "https://videos.openai.com/vg-assets/assets%2Ftask_01jx9wyqw6fwea0n6kbwx2kn7h%2F1749457862_img_0.webp?st=2025-06-09T06%3A51%3A16Z&se=2025-06-15T07%3A51%3A16Z&sks=b&skt=2025-06-09T06%3A51%3A16Z&ske=2025-06-15T07%3A51%3A16Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=oT3Xc1EH4EGS6DtQvzgZfXu%2FnmmqMTUoFn6i%2ByQEALI%3D&az=oaivgprodscus",
      tech: ["React", "Node.js", "express", "flutter", "MySQL"],
      githubUrl: "https://github.com/Indipa123/healthcare.git"
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 max-w-xs sm:max-w-md lg:max-w-2xl mx-auto px-4">
            A showcase of my recent work demonstrating various technologies and problem-solving approaches
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white dark:bg-gray-800">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 lg:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-xs sm:text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex flex-col sm:flex-row gap-2 sm:gap-3 p-4 sm:p-6 pt-0">
                 <Button
                     variant="outline"
                     size="sm"
                     className="flex-1 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-xs sm:text-sm"
                     onClick={() => {
                     if (project.githubUrl && project.githubUrl !== "#") {
                     window.open(project.githubUrl, "_blank", "noopener,noreferrer");
                        }
                     }}
                    >
                  <Github className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                   Code
                  </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-sm sm:text-base px-6 sm:px-8"
            onClick={() => window.open("https://github.com/Indipa123?tab=repositories", "_blank", "noopener,noreferrer")}
          >
            <Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
