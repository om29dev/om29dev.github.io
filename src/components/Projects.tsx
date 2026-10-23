import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Layers, 
  Cpu, 
  Brain, 
  ArrowUpRight, 
  FileText
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { label: string; value: ProjectCategory; count: number }[] = [
    { label: 'All Projects', value: 'all', count: projects.length },
    { label: 'Full-Stack', value: 'fullstack', count: projects.filter((p) => p.category === 'fullstack').length },
    { label: 'AI & Vision', value: 'ai', count: projects.filter((p) => p.category === 'ai').length },
    { label: 'IoT & Edge', value: 'iot', count: projects.filter((p) => p.category === 'iot').length },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const initialLimit = 4;
  const isExpandable = filteredProjects.length > initialLimit;
  const displayedProjects = showAll || !isExpandable
    ? filteredProjects
    : filteredProjects.slice(0, initialLimit);

  const handleCategoryChange = (cat: ProjectCategory) => {
    setSelectedCategory(cat);
    setShowAll(false);
  };

  return (
    <section id="projects" className="py-8 sm:py-10 lg:py-10 scroll-mt-16 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3 sm:gap-4">
          <div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 font-mono">
              Engineering Work
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Featured Projects
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
            Production-oriented systems spanning responsive web applications, distributed backend services, and edge sensor telemetry.
          </p>
        </div>

        {/* Horizontally scrollable pill rail on handheld viewports */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 mb-6 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => handleCategoryChange(cat.value)}
              className={`shrink-0 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all min-h-[40px] flex items-center gap-1.5 ${
                selectedCategory === cat.value
                  ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-600/30'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[11px] px-1.5 py-0.2 rounded-md ${
                selectedCategory === cat.value
                  ? 'bg-blue-700 text-blue-100'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid: 1 column on mobile, 2 columns on tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl p-5 sm:p-7 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header with Category & Highlight Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
                    {project.category === 'fullstack' && <Layers size={13} className="text-blue-500" />}
                    {project.category === 'ai' && <Brain size={13} className="text-purple-500" />}
                    {project.category === 'iot' && <Cpu size={13} className="text-emerald-500" />}
                    <span className="capitalize">{project.category === 'ai' ? 'AI / ML' : project.category === 'iot' ? 'IoT & Edge' : 'Full-Stack'}</span>
                  </span>

                  {project.metrics && (
                    <span className="text-[11px] font-mono font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2.5 py-0.5 rounded-full border border-blue-200 dark:border-blue-800 truncate max-w-[180px] sm:max-w-none">
                      {project.metrics}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Problem & Impact Snapshot Block */}
                {project.caseStudy && (
                  <div className="mb-4 p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-800 text-xs space-y-2">
                    <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                      <span className="font-semibold text-rose-600 dark:text-rose-400 uppercase text-[10px] tracking-wider shrink-0 mt-0.5 font-mono">
                        Problem:
                      </span>
                      <span className="line-clamp-2 text-slate-600 dark:text-slate-400">
                        {project.caseStudy.problem.summary}
                      </span>
                    </div>

                    <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300 pt-1.5 border-t border-slate-200/50 dark:border-slate-700/50">
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400 uppercase text-[10px] tracking-wider shrink-0 mt-0.5 font-mono">
                        Impact:
                      </span>
                      <span className="line-clamp-2 text-slate-600 dark:text-slate-400">
                        {project.caseStudy.impact.summary}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div>
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md text-[11px] sm:text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 pt-1">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900/60 border border-blue-200 dark:border-blue-800 transition-colors cursor-pointer min-h-[38px]"
                  >
                    <FileText size={14} />
                    <span>Explore Case Study</span>
                    <ArrowUpRight size={13} className="opacity-70" />
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200/70 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors min-h-[38px]"
                    >
                      <GithubIcon size={14} />
                      <span>Source</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More / View Less Toggle Button */}
        {isExpandable && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 shadow-sm transition-all min-h-[44px]"
            >
              <span>
                {showAll
                  ? 'Show Fewer Projects'
                  : `View More Projects (${filteredProjects.length - initialLimit} more)`
                }
              </span>
              {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        )}

      </div>

      {/* Case Study Modal / Bottom Sheet */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
