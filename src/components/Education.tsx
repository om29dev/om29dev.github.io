import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { education } = personalInfo;

  return (
    <section id="education" className="py-16 scroll-mt-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 font-mono">
              Academic Background
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Education
            </h2>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md">
            Undergraduate engineering studies and foundational computer science principles.
          </p>
        </div>

        {/* Education Card */}
        <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {education.institution}
                </h3>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                  {education.degree} in {education.field}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Pimpri Chinchwad Education Trust (PCET)
                </p>
              </div>
            </div>

            <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
                <Calendar size={13} />
                {education.period}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
                <MapPin size={13} />
                {education.location}
              </span>
            </div>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-4 mt-4">
            {education.details}
          </p>
        </div>

      </div>
    </section>
  );
};

