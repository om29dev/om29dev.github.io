import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            {personalInfo.name}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            B.Tech IT, PCCOE Pune. Built with React, Vite, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

