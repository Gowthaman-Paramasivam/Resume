import React from 'react';
import { Sun, Moon, Printer, Mail } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Navbar({ darkMode, setDarkMode, personal }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200 no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-bold text-lg tracking-tight text-slate-900 dark:text-white flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 text-white flex items-center justify-center font-black text-sm shadow-sm">
            {personal.name.split(' ').map(n => n[0]).join('')}
          </span>
          <span className="hidden sm:inline font-semibold">{personal.name}</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
          <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
          <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
          <a href="#education" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Education</a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handlePrint}
            title="Print or Save PDF"
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
          >
            <Printer size={18} />
            <span className="hidden sm:inline">Save PDF</span>
          </button>

          <button
            type="button"
            onClick={() => setDarkMode(prev => !prev)}
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
          </button>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            <GithubIcon size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
