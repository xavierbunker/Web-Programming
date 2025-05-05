import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch project data from your API endpoint
    axios.get('/api/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div>
      {/* Page heading */}
      <h2 className="text-3xl font-bold text-gray-800 mb-8">My Projects</h2>
      {/* Grid layout for project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Map through the projects and display each one */}
        {projects.map(project => (
          <div key={project.id} className="rounded-lg shadow-md overflow-hidden bg-white">
            {/* Project content */}
            <div className="p-6">
              {/* Project title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
              {/* Project description */}
              <p className="text-gray-600 mb-4">{project.description}</p>
              {/* Technologies used */}
              {project.technologies && project.technologies.length > 0 && (
                <p className="text-sm text-gray-500 mb-2">
                  <span className="font-semibold">Technologies:</span> {project.technologies.join(', ')}
                </p>
              )}
              {/* Links to GitHub and live demo */}
              <div className="flex space-x-3 mt-4">
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md transition duration-300">
                    GitHub
                  </a>
                )}
                {project.liveDemo && (
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
            {/* Optional: Project image or video */}
            {project.image && (
              <img src={project.image} alt={project.title} className="w-full h-auto" />
            )}
            {project.video && (
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-full"
                  src={project.video}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={project.title}
                ></iframe>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;