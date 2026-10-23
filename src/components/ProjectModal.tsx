import React, { useEffect } from 'react';
import { 
  X, 
  AlertCircle, 
  CheckCircle2, 
  TrendingUp, 
  Layers, 
  Cpu, 
  Brain, 
  ArrowUpRight, 
  ExternalLink,
  Code2
} from 'lucide-react';
import { Project } from '../types';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex justify-center items-end sm:items-center p-0 sm:p-4 lg:p-6 transition-opacity"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div 
        className="w-full max-h-[90vh] sm:max-h-[88vh] sm:max-w-3xl lg:max-w-4xl bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-2xl border-t sm:border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Drag Indicator Bar */}
        <div className="sm:hidden flex justify-center pt-3 pb-1" aria-hidden="true">
          <div className="w-12 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
        </div>

        {/* Modal Header */}
        <div className="px-5 sm:px-7 py-4 sm:py-5 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between gap-4 bg-slate-50/50 dark:bg-slate-900/60 sticky top-0 z-10 backdrop-blur-md">
          <div className="space-y-1.5 pr-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-slate-200/80 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300/60 dark:border-slate-700">
                {project.category === 'fullstack' && <Layers size={13} className="text-blue-500" />}
                {project.category === 'ai' && <Brain size={13} className="text-purple-500" />}
                {project.category === 'iot' && <Cpu size={13} className="text-emerald-500" />}
                <span className="capitalize">
                  {project.category === 'ai' ? 'AI / ML' : project.category === 'iot' ? 'IoT & Edge' : 'Full-Stack'}
                </span>
              </span>

              {project.metrics && (
                <span className="text-[11px] font-mono font-semibold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 rounded-full border border-blue-200 dark:border-blue-800">
                  {project.metrics}
                </span>
              )}
            </div>

            <h2 id="case-study-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close case study details"
            className="p-2 sm:p-2.5 rounded-xl text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto px-5 sm:px-7 py-5 sm:py-6 space-y-6">
          
          {/* Executive Overview */}
          <div className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-4 sm:p-5 rounded-xl border border-slate-200/80 dark:border-slate-800">
            {project.description}
          </div>

          {/* Problem Section */}
          {caseStudy?.problem && (
            <div className="rounded-xl p-5 bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/50 space-y-3">
              <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold text-sm tracking-wide uppercase font-mono">
                <AlertCircle size={16} />
                <span>The Problem & Engineering Bottleneck</span>
              </div>
              <p className="text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                {caseStudy.problem.summary}
              </p>
              {caseStudy.problem.points.length > 0 && (
                <ul className="space-y-2 pt-1">
                  {caseStudy.problem.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 dark:bg-rose-400 mt-2 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Solution & Architecture Section */}
          {caseStudy?.solution && (
            <div className="rounded-xl p-5 bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-900/50 space-y-3">
              <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-bold text-sm tracking-wide uppercase font-mono">
                <Code2 size={16} />
                <span>The Technical Solution & Architecture</span>
              </div>
              <p className="text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                {caseStudy.solution.summary}
              </p>
              {caseStudy.solution.points.length > 0 && (
                <ul className="space-y-2 pt-1">
                  {caseStudy.solution.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 size={15} className="text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
              {caseStudy.solution.architecture && caseStudy.solution.architecture.length > 0 && (
                <div className="pt-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 font-mono">
                    System Architecture Highlights:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.solution.architecture.map((arch, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-blue-100/70 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                      >
                        {arch}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Impact & Measurable Outcomes Section */}
          {caseStudy?.impact && (
            <div className="rounded-xl p-5 bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/50 space-y-3">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm tracking-wide uppercase font-mono">
                <TrendingUp size={16} />
                <span>Impact, Benchmarks & Results</span>
              </div>
              <p className="text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                {caseStudy.impact.summary}
              </p>
              {caseStudy.impact.points.length > 0 && (
                <ul className="space-y-2 pt-1">
                  {caseStudy.impact.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 mt-2 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
              {caseStudy.impact.metrics && caseStudy.impact.metrics.length > 0 && (
                <div className="pt-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 font-mono">
                    Key Performance Metrics:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {caseStudy.impact.metrics.map((metric, idx) => (
                      <div 
                        key={idx}
                        className="px-3 py-2 rounded-lg text-xs font-mono bg-white dark:bg-slate-800/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200/70 dark:border-emerald-800/70 shadow-2xs"
                      >
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tech Stack List */}
          <div className="pt-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5 font-mono">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Sticky Footer */}
        <div className="px-5 sm:px-7 py-3.5 sm:py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 flex flex-wrap items-center justify-between gap-3 sticky bottom-0 z-10 backdrop-blur-md">
          <div className="flex items-center gap-2.5 flex-wrap">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 shadow-sm transition-all"
              >
                <GithubIcon size={15} />
                <span>View Source Repository</span>
                <ArrowUpRight size={13} className="opacity-70" />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/60 border border-blue-200 dark:border-blue-800 shadow-sm transition-all"
              >
                <ExternalLink size={15} />
                <span>Open Live Deployment</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};

