import React, { useState } from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Award, 
  Download, 
  Loader2, 
  BookOpen
} from 'lucide-react';
import { educationList } from '../data/portfolioData';
import { EducationItem } from '../types';
import { downloadCertificatePdf } from '../utils/downloadCertificatePdf';

export const Education: React.FC = () => {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const handleDownload = async (item: EducationItem) => {
    if (!item.previewUrl) return;
    try {
      setDownloadingId(item.id);
      await downloadCertificatePdf(item.previewUrl, `${item.degree} - ${item.institution}`);
    } catch (err) {
      console.error('Failed to generate PDF:', err);
    } finally {
      setDownloadingId(null);
    }
  };

  return (
    <section id="education" className="py-8 sm:py-10 lg:py-10 scroll-mt-16 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 font-mono">
              Academic Background
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Education
            </h2>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md">
            Formal undergraduate engineering studies, secondary milestones, and verified board credentials.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationList.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl p-5 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header Badge & Period */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
                    <GraduationCap size={13} className="text-blue-500" />
                    <span>{item.badge}</span>
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Calendar size={12} />
                    {item.period}
                  </span>
                </div>

                {/* Institution & Logo Bar */}
                <div className="flex items-start gap-3 mb-3.5">
                  {item.logoUrl ? (
                    <div className="w-12 h-12 rounded-xl p-1 bg-white border border-slate-200 dark:border-slate-700 shrink-0 flex items-center justify-center shadow-xs overflow-hidden">
                      <img
                        src={item.logoUrl}
                        alt={item.institution}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/80 shrink-0 flex items-center justify-center">
                      <BookOpen size={22} />
                    </div>
                  )}

                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.institution}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                      <MapPin size={11} className="shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </p>
                  </div>
                </div>

                {/* Degree & Score Banner */}
                <div className="mb-3.5 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between gap-2">
                  <div>
                    <p className="text-xs font-semibold text-slate-900 dark:text-white">
                      {item.degree}
                    </p>
                    {item.field && (
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {item.field}
                      </p>
                    )}
                  </div>
                  {item.score && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 shrink-0">
                      <Award size={12} />
                      {item.score}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {item.details}
                </p>
              </div>

              {/* Action Buttons: Download PDF */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                {item.previewUrl ? (
                  <button
                    type="button"
                    onClick={() => handleDownload(item)}
                    disabled={downloadingId === item.id}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700 transition-colors disabled:opacity-60 cursor-pointer"
                    title="Download marksheet PDF"
                  >
                    {downloadingId === item.id ? (
                      <Loader2 size={13} className="animate-spin" />
                    ) : (
                      <Download size={13} />
                    )}
                    <span>Download Marksheet PDF</span>
                  </button>
                ) : (
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    B.Tech Program Active
                  </span>
                )}

                {item.scoreLabel && (
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    {item.scoreLabel}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
