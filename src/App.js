import React from "react";
import About from './components/About';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Education from './components/Education';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}