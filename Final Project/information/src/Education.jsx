import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Education() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    // Fetch education data from your API endpoint
    axios.get('/api/education')
      .then(response => setEducation(response.data))
      .catch(error => console.error('Error fetching education:', error));
  }, []);

  return (
    <div>
      {/* Page heading */}
      <h2 className="text-3xl font-bold text-gray-800 mb-8">My Education</h2>
      {/* Grid layout for education cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Map through the education items and display each one */}
        {education.map(item => (
          <div key={item.id} className="rounded-lg shadow-md p-6 bg-white">
            {/* Degree or certificate */}
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.degree || item.certificate}</h3>
            {/* Institution */}
            <p className="text-lg text-gray-700 mb-1">{item.institution}</p>
            {/* Dates of attendance */}
            <p className="text-sm text-gray-500 mb-3">{item.startDate} - {item.endDate || 'Present'}</p>
            {/* Description of the program */}
            {item.description && <p className="text-gray-600 mb-3">{item.description}</p>}
            {/* List of achievements */}
            {item.achievements && item.achievements.length > 0 && (
              <div>
                <h4 className="text-md font-semibold text-gray-800 mt-3 mb-2">Achievements:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {item.achievements.map((achievement, index) => (
                    <li key={index} className="mb-1">{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;