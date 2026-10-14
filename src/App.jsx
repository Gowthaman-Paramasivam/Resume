import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { resumeData } from './data/resumeData';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white transition-colors duration-200">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        personal={resumeData.personal}
      />

      <main>
        <Hero personal={resumeData.personal} />
        <About personal={resumeData.personal} />
        <Experience experience={resumeData.experience} />
        <Skills skills={resumeData.skills} />
        <Projects projects={resumeData.projects} />
        <Education
          education={resumeData.education}
          certifications={resumeData.certifications}
        />
        <Contact personal={resumeData.personal} />
      </main>

      <Footer name={resumeData.personal.name} />
    </div>
  );
}
