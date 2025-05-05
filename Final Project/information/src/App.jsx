import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';
import Education from './Education';
import Skills from './Skills';

function App() {
  return (
    <Router>
      {/* Main container with background and font */}
      <div className="bg-gray-100 font-sans min-h-screen">
        {/* Navigation bar */}
        <nav className="bg-blue-600 p-4 text-white shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo/Your Name */}
            <Link to="/" className="font-bold text-xl hover:text-blue-200 transition duration-300">Xavier Bunker</Link>
            {/* Navigation links */}
            <div className="space-x-4">
              <Link to="/" className="hover:text-blue-200 transition duration-300">Home</Link>
              <Link to="/projects" className="hover:text-blue-200 transition duration-300">Projects</Link>
              <Link to="/education" className="hover:text-blue-200 transition duration-300">Education</Link>
              <Link to="/skills" className="hover:text-blue-200 transition duration-300">Skills</Link>
              <Link to="/contact" className="hover:text-blue-200 transition duration-300">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Main content area */}
        <main className="container mx-auto py-10">
          {/* Routing for different pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-200 py-6 text-center text-gray-600 mt-8 shadow-inner">
          <p>&copy; 2025 Xavier Bunker. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
