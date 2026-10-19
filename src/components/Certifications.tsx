import React, { useState } from 'react';
import { Award, ChevronDown, ChevronUp, Calendar } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const initialCount = 3;
  const isExpandable = certifications.length > initialCount;
  const visibleCertifications = expanded
    ? certifications
    : certifications.slice(0, initialCount);

  return (
    <section id="certifications" className="py-16 scroll-mt-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 font-mono">
              Continuous Learning
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Certifications & Activities
            </h2>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md">
            Verified credentials, coursework, and technical community volunteering.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCertifications.map((cert) => (
            <div
              key={cert.id}
              className="rounded-2xl p-6 bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                    <Award size={13} />
                    <span>{cert.type}</span>
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Calendar size={12} />
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
                  {cert.issuer}
                </p>

                {cert.details && (
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {cert.details}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View More / View Less Expansion Button */}
        {isExpandable && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 shadow-sm transition-all"
            >
              <span>
                {expanded
                  ? 'Show Fewer Certifications'
                  : `View More Certifications (${certifications.length - initialCount} more)`
                }
              </span>
              {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
