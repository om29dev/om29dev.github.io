import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Milestones } from './components/Milestones';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  // Light theme by default
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    localStorage.removeItem('theme');
    const saved = localStorage.getItem('portfolio_theme');
    if (saved) {
      return saved === 'dark';
    }
    return false; // Default to light theme
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio_theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 bg-grid-pattern selection:bg-blue-600 selection:text-white transition-colors duration-200">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main>
        <Hero />
        <Milestones />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;

