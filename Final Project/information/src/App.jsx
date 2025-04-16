// App.jsx (Corrected)
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import Contact from './Contact'
import Home from './Home'
import Projects from './Projects'
import Education from './Education'
import Skills from './Skills'

//Nav Bar with Tailwind CSS

function NavBar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" className="text-white hover:text-gray-400">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/education" className="text-white hover:text-gray-400">
            Education
          </Link>
        </li>
        <li>
          <Link to="/skills" className="text-white hover:text-gray-400">
            Skills
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-white hover:text-gray-400">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
// Main App Component
export default function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}