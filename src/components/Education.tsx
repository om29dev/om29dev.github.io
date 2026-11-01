import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Award, 
  Download, 
  Loader2, 
  BookOpen,
  Eye,
  X
} from 'lucide-react';
import { educationList } from '../data/portfolioData';
import { EducationItem } from '../types';
import { downloadCertificatePdf } from '../utils/downloadCertificatePdf';

export const Education: React.FC = () => {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [activeModalItem, setActiveModalItem] = useState<EducationItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalItem(null);
      }
    };
    if (activeModalItem) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeModalItem]);

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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3 sm:gap-4">
          <div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 font-mono">
              Academic Background
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Education
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
            Formal undergraduate engineering studies, secondary milestones, and verified board credentials.
          </p>
        </div>

        {/* Education Grid: 1 col on mobile, 2 col on tablet, 3 col on desktop */}
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

                {/* Key Coursework & Performance Badges */}
                {item.subjects && item.subjects.length > 0 && (
                  <div className="mb-4">
                    <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5 font-mono">
                      Key Coursework & Performance
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.subjects.map((subj) => (
                        <span
                          key={subj}
                          className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                        >
                          {subj}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons: View & Download PDF */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2 flex-wrap">
                {item.previewUrl ? (
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveModalItem(item)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer min-h-[36px]"
                      title="View marksheet preview"
                    >
                      <Eye size={13} />
                      <span>View</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDownload(item)}
                      disabled={downloadingId === item.id}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700 transition-colors disabled:opacity-60 cursor-pointer min-h-[36px]"
                      title="Download marksheet PDF"
                    >
                      {downloadingId === item.id ? (
                        <Loader2 size={13} className="animate-spin" />
                      ) : (
                        <Download size={13} />
                      )}
                      <span>Download PDF</span>
                    </button>
                  </div>
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

        {/* Lightbox / Preview Modal */}
        {activeModalItem && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setActiveModalItem(null)}
          >
            <div 
              className="relative max-w-4xl w-full bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                <div className="min-w-0 pr-4">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white truncate">
                    {activeModalItem.degree}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                    {activeModalItem.institution} {activeModalItem.score ? `(${activeModalItem.score})` : ''}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => handleDownload(activeModalItem)}
                    disabled={downloadingId === activeModalItem.id}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors disabled:opacity-60 cursor-pointer min-h-[36px]"
                  >
                    {downloadingId === activeModalItem.id ? (
                      <Loader2 size={13} className="animate-spin" />
                    ) : (
                      <Download size={13} />
                    )}
                    <span>Download PDF</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveModalItem(null)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                    title="Close preview"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Modal Image Area */}
              <div className="flex-1 overflow-auto p-4 bg-slate-100 dark:bg-slate-950 flex items-center justify-center">
                <img
                  src={activeModalItem.previewUrl}
                  alt={activeModalItem.degree}
                  className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
