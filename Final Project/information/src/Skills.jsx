import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Fetch skills data from your API endpoint
    axios.get('/api/skills')
      .then(response => setSkills(response.data))
      .catch(error => console.error('Error fetching skills:', error));
  }, []);

  return (
    <div>
      {/* Page heading */}
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Skills & Technologies</h2>
      {/* Grid layout for skill cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {/* Map through the skills and display each one */}
        {skills.map(skill => (
          <div key={skill.id} className="rounded-lg shadow-md p-4 bg-white flex flex-col items-center justify-center hover:shadow-lg transition duration-300">
            {/* Optional: Skill logo */}
            {skill.logo && <img src={skill.logo} alt={skill.name} className="w-16 h-16 mb-3" />}
            {/* Skill name */}
            <h3 className="text-lg font-semibold text-gray-800 text-center">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;