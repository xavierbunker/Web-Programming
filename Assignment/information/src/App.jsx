import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function PersonalInfo() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/personal-info").then((response) => {
      setInfo(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Personal Information</h1>
      <ul>
        {info.map((item) => (
          <li key={item.id}>{item.name} - {item.age} - {item.email}</li>
        ))}
      </ul>
    </div>
  );
}

function Hobbies() {
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/hobbies").then((response) => {
      setHobbies(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Hobbies</h1>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby.id}>{hobby.hobby_name}: {hobby.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/personal-info">Personal Info</Link>
        <Link to="/hobbies">Hobbies</Link>
      </nav>
      <Routes>
        <Route path="/personal-info" element={<PersonalInfo />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes>
    </Router>
  );
}

