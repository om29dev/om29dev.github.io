import React from 'react';
import { Code2, Monitor, Server, Cpu, Brain, Wrench } from 'lucide-react';
import { skillGroups } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Languages':
        return <Code2 size={16} className="text-blue-500" />;
      case 'Frontend & Mobile':
        return <Monitor size={16} className="text-indigo-500" />;
      case 'Backend & Cloud':
        return <Server size={16} className="text-cyan-500" />;
      case 'AI & Edge Vision':
        return <Brain size={16} className="text-purple-500" />;
      case 'IoT & Embedded':
        return <Cpu size={16} className="text-emerald-500" />;
      case 'Tools & DevOps':
        return <Wrench size={16} className="text-amber-500" />;
      default:
        return <Code2 size={16} className="text-blue-500" />;
    }
  };

  return (
    <section id="skills" className="py-16 scroll-mt-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 font-mono">
              Capabilities
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Technical Stack & Skills
            </h2>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md">
            Technologies and toolsets applied across daily engineering workflows and competitive hackathons.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl p-6 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                  {getIcon(group.category)}
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/40 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200/60 dark:border-slate-700/60 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

