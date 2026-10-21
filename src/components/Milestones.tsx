import React, { useState } from 'react';
import { Trophy, Award, Sparkles, ChevronDown, ChevronUp, Users, Calendar, Download, Loader2 } from 'lucide-react';
import { milestones } from '../data/portfolioData';
import { downloadCertificatePdf } from '../utils/downloadCertificatePdf';

export const Milestones: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const visibleMilestones = expanded ? milestones : milestones.slice(0, 2);

  const handleDownload = async (milestone: (typeof milestones)[number]) => {
    if (!milestone.previewUrl) return;
    try {
      setDownloadingId(milestone.id);
      await downloadCertificatePdf(milestone.previewUrl, `${milestone.title} - ${milestone.competition}`);
    } catch (err) {
      console.error('Failed to generate PDF:', err);
    } finally {
      setDownloadingId(null);
    }
  };

  return (
    <section id="milestones" className="py-8 sm:py-10 lg:py-10 scroll-mt-16 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4">
          <div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 font-mono">
              Achievements & Competitions
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Milestones & Recognition
            </h2>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md">
            National hackathons, competitive prototypes, and international research grants engineered with Team Hustlers.
          </p>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleMilestones.map((milestone) => (
            <div
              key={milestone.id}
              className="rounded-2xl p-6 sm:p-7 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between relative group"
            >
              <div>
                {/* Header with Award & Date */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                    {milestone.id === 'alphabyte' && <Trophy size={13} className="text-amber-500" />}
                    {milestone.id === 'ieee-r10' && <Award size={13} className="text-blue-500" />}
                    {milestone.id === 'latrobe-tigc' && <Sparkles size={13} className="text-emerald-500" />}
                    {milestone.id === 'ai-for-bharat' && <Sparkles size={13} className="text-indigo-500" />}
                    <span>{milestone.award}</span>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
                    <Calendar size={13} />
                    <span>{milestone.date}</span>
                  </div>
                </div>

                {/* Title & Competition */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {milestone.title}
                </h3>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mt-1">
                  {milestone.competition}
                </p>

                {/* Team Tag */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-2 mb-3">
                  <Users size={13} className="text-slate-400" />
                  <span>{milestone.team}</span>
                  {milestone.grant && (
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                      (Grant: {milestone.grant})
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {milestone.description}
                </p>
              </div>

              {/* Tags & Certificate Link */}
              <div className="flex flex-wrap items-center justify-between gap-3 mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {milestone.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {milestone.previewUrl && (
                  <button
                    type="button"
                    onClick={() => handleDownload(milestone)}
                    disabled={downloadingId === milestone.id}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100 dark:hover:bg-blue-900/50 border border-blue-200 dark:border-blue-800 transition-colors disabled:opacity-60 cursor-pointer"
                    title="Download award certificate PDF"
                  >
                    {downloadingId === milestone.id ? (
                      <Loader2 size={13} className="animate-spin" />
                    ) : (
                      <Download size={13} />
                    )}
                    <span>Download PDF</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View More / View Less Expansion Button */}
        {milestones.length > 2 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 shadow-sm transition-all"
            >
              <span>
                {expanded 
                  ? 'Show Fewer Milestones' 
                  : `View More Milestones (${milestones.length - 2} more)`
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

