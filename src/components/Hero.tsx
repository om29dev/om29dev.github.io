import React, { useRef, useState } from 'react';
import { 
  Trophy, 
  Award, 
  Sparkles, 
  ArrowUpRight, 
  MapPin, 
  GraduationCap 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { Typewriter } from './Typewriter';

export const Hero: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    if (typeof window !== 'undefined' && window.matchMedia && !window.matchMedia('(hover: hover)').matches) {
      return;
    }
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: -y * 12,
      y: x * 12
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    if (typeof window !== 'undefined' && window.matchMedia && !window.matchMedia('(hover: hover)').matches) {
      return;
    }
    setIsHovered(true);
  };

  return (
    <section className="relative pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8 lg:pb-8 overflow-hidden">
      {/* Ambient background glow accents */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] lg:w-[600px] h-[280px] sm:h-[380px] bg-gradient-to-tr from-blue-400/15 via-indigo-400/15 to-purple-400/10 blur-3xl pointer-events-none rounded-full" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start lg:items-center">
          
          {/* Left Column: Bio & Core Info */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            
            {/* Live Availability Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold tracking-wide max-w-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="truncate">Available for Internships & Collaborations</span>
            </div>

            {/* Main Headline */}
            <div>
              <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase font-mono">
                Software Engineer & Prototyper
              </p>
              <h1 className="mt-1 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {personalInfo.name}
              </h1>
              <div className="mt-1.5 min-h-[1.75rem] sm:min-h-[2rem] flex items-center">
                <p className="text-sm sm:text-lg lg:text-xl font-semibold text-slate-800 dark:text-slate-200">
                  <Typewriter
                    words={personalInfo.roles}
                    typingSpeed={75}
                    deletingSpeed={35}
                    pauseDelay={2200}
                  />
                </p>
              </div>
            </div>

            {/* Education and Location Micro-Badges */}
            <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <GraduationCap size={15} className="text-blue-600 dark:text-blue-400 shrink-0" />
                <span>PCCOE Pune (B.Tech IT 2024 - 2028)</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <MapPin size={14} className="text-rose-500 shrink-0" />
                <span>Pune, Maharashtra, India</span>
              </span>
            </div>

            {/* Concise Human Narrative */}
            <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Curious about what can be built, improved, or engineered differently. 
              Hands-on builder with a focus on taking ideas from initial concepts to functional prototypes: 
              architecting scalable web backends, training edge computer vision models, and engineering distributed IoT hardware.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all min-h-[44px]"
              >
                <span>Explore Projects</span>
                <ArrowUpRight size={16} />
              </a>
              <a
                href="#milestones"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 shadow-sm transition-all min-h-[44px]"
              >
                <span>View Milestones</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200/70 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-sm transition-all min-h-[44px]"
              >
                <span>Contact Details</span>
              </a>
            </div>

          </div>

          {/* Right Column: 3D Cutout Portrait with Clamped Overlays */}
          <div className="lg:col-span-5 flex justify-center items-center w-full px-2 sm:px-0">
            <div 
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[310px] sm:max-w-[380px] lg:max-w-[420px] flex items-center justify-center photo-3d-container cursor-pointer select-none mx-auto"
            >
              {/* Diffuse radial backdrop aura */}
              <div 
                className="absolute inset-4 rounded-3xl bg-gradient-to-b from-blue-500/10 via-indigo-500/10 to-transparent blur-2xl pointer-events-none animate-aura"
                aria-hidden="true"
              />

              {/* 3D Perspective Card Container */}
              <div
                className="relative w-full flex flex-col items-center justify-center photo-3d-card"
                style={{
                  transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${
                    isHovered ? 'scale3d(1.02, 1.02, 1.02)' : 'scale3d(1, 1, 1)'
                  }`,
                }}
              >
                {/* Authentic 3D Cutout Image */}
                <img
                  src="./om-portrait.webp"
                  alt="Om Rajendra Bharambe portrait"
                  className="relative z-10 w-full max-h-[380px] sm:max-h-[440px] object-contain photo-cutout-img drop-shadow-2xl"
                  loading="eager"
                  decoding="async"
                />

                {/* Grounding Contact Shadow underneath the silhouette */}
                <div 
                  className="w-3/4 h-3 sm:h-4 -mt-2 bg-slate-900/25 dark:bg-black/60 rounded-full blur-md pointer-events-none"
                  aria-hidden="true"
                />

                {/* Clamped Floating Badge 1: Alphabyte 3.0 Winner */}
                <div 
                  className="absolute top-[48%] sm:top-[44%] lg:top-[38%] left-1 sm:-left-3 lg:-left-6 z-20 animate-float-1 px-2.5 py-1.5 sm:px-3.5 sm:py-2.5 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-xl max-w-[200px] sm:max-w-none"
                  style={{ transform: 'translateZ(65px)' }}
                >
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <div className="p-1 sm:p-1.5 rounded-lg bg-amber-500/15 text-amber-600 dark:text-amber-400 shrink-0">
                      <Trophy size={15} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-amber-600 dark:text-amber-400">
                        1st Place Winner
                      </p>
                      <p className="text-[11px] sm:text-xs font-semibold text-slate-800 dark:text-slate-100 truncate">
                        Alphabyte 3.0 Hackathon
                      </p>
                    </div>
                  </div>
                </div>

                {/* Clamped Floating Badge 2: IEEE R10 Finalist */}
                <div 
                  className="absolute top-[66%] sm:top-[62%] lg:top-[56%] right-1 sm:-right-3 lg:-right-6 z-20 animate-float-2 px-2.5 py-1.5 sm:px-3.5 sm:py-2.5 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-xl max-w-[200px] sm:max-w-none"
                  style={{ transform: 'translateZ(70px)' }}
                >
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <div className="p-1 sm:p-1.5 rounded-lg bg-blue-500/15 text-blue-600 dark:text-blue-400 shrink-0">
                      <Award size={15} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-blue-600 dark:text-blue-400">
                        Podium Winner
                      </p>
                      <p className="text-[11px] sm:text-xs font-semibold text-slate-800 dark:text-slate-100 truncate">
                        IEEE R10 INV.ENT 2026
                      </p>
                    </div>
                  </div>
                </div>

                {/* Clamped Floating Badge 3: La Trobe AUD 750 Grant */}
                <div 
                  className="absolute bottom-2 left-1 sm:left-0 lg:-left-4 z-20 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-emerald-500/40 text-emerald-700 dark:text-emerald-300 shadow-xl text-[11px] sm:text-xs font-semibold flex items-center gap-1.5 sm:gap-2 max-w-[230px] sm:max-w-none"
                  style={{ transform: 'translateZ(60px)' }}
                >
                  <Sparkles size={13} className="text-emerald-500 shrink-0" />
                  <span className="truncate">AUD 750 Grant - La Trobe TIGC</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
