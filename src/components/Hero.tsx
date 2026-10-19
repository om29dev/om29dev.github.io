import React, { useRef, useState } from 'react';
import { 
  Trophy, 
  Award, 
  Sparkles, 
  ArrowUpRight, 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  MapPin, 
  GraduationCap 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: -y * 14,
      y: x * 14
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      {/* Ambient background glow accents */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] bg-gradient-to-tr from-blue-400/15 via-indigo-400/15 to-purple-400/10 blur-3xl pointer-events-none rounded-full" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Core Info */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Availability Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Internships & Engineering Collaborations
            </div>

            {/* Main Headline */}
            <div>
              <p className="text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase font-mono">
                Software Engineer & Prototyper
              </p>
              <h1 className="mt-1 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {personalInfo.name}
              </h1>
              <p className="mt-2 text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300">
                {personalInfo.headline}
              </p>
            </div>

            {/* Education and Location Micro-Badges */}
            <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <GraduationCap size={15} className="text-blue-600 dark:text-blue-400" />
                PCCOE Pune (B.Tech IT 2024 - 2028)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <MapPin size={14} className="text-rose-500" />
                Pune, Maharashtra, India
              </span>
            </div>

            {/* Concise Human Narrative */}
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Curious about what can be built, improved, or engineered differently. 
              Hands-on builder with a focus on taking ideas from initial concepts to functional prototypes: 
              architecting scalable web backends, training edge computer vision models, and engineering distributed IoT hardware.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all"
              >
                Explore Projects
                <ArrowUpRight size={16} />
              </a>
              <a
                href="#milestones"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 shadow-sm transition-all"
              >
                View Milestones
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
              >
                Contact Details
              </a>
            </div>

            {/* Direct Contact & Social Chips */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2.5">
              <button
                onClick={() => copyToClipboard(personalInfo.contacts.phone, 'phone')}
                title="Click to copy phone number"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-blue-950/40 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700 transition-colors"
              >
                <Phone size={13} />
                <span>{personalInfo.contacts.phone}</span>
                {copiedField === 'phone' ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} className="opacity-60" />}
              </button>

              <button
                onClick={() => copyToClipboard(personalInfo.contacts.email, 'email')}
                title="Click to copy email address"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-blue-950/40 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700 transition-colors"
              >
                <Mail size={13} />
                <span>{personalInfo.contacts.email}</span>
                {copiedField === 'email' ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} className="opacity-60" />}
              </button>

              <a
                href={personalInfo.contacts.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={16} />
              </a>

              <a
                href={personalInfo.contacts.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={16} />
              </a>
            </div>

          </div>

          {/* Right Column: 3D Cutout Portrait without Rounded Circle */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div 
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[420px] aspect-[4/5] flex items-center justify-center photo-3d-container cursor-pointer select-none"
            >
              {/* Diffuse radial backdrop aura */}
              <div 
                className="absolute inset-4 rounded-3xl bg-gradient-to-b from-blue-500/10 via-indigo-500/10 to-transparent blur-2xl pointer-events-none animate-aura"
                aria-hidden="true"
              />

              {/* 3D Perspective Card Container */}
              <div
                className="relative w-full h-full flex flex-col items-center justify-end photo-3d-card pb-2"
                style={{
                  transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${
                    isHovered ? 'scale3d(1.03, 1.03, 1.03)' : 'scale3d(1, 1, 1)'
                  }`,
                }}
              >
                {/* Authentic 3D Cutout Image (WebP only, no circle mask, no borders) */}
                <img
                  src="./assets/om-portrait.webp"
                  alt="Om Rajendra Bharambe portrait"
                  className="relative z-10 w-full max-h-[460px] object-contain photo-cutout-img drop-shadow-2xl"
                  loading="eager"
                  decoding="async"
                />

                {/* Grounding Contact Shadow underneath the silhouette */}
                <div 
                  className="w-3/4 h-5 -mt-3 bg-slate-900/25 dark:bg-black/60 rounded-full blur-md pointer-events-none"
                  aria-hidden="true"
                />

                {/* Floating 3D Badge 1: Alphabyte 3.0 Winner */}
                <div 
                  className="absolute top-4 -left-3 sm:-left-6 z-20 animate-float-1 px-3 py-2 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/90 dark:border-slate-700 shadow-xl"
                  style={{ transform: 'translateZ(35px)' }}
                >
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-amber-500/15 text-amber-600 dark:text-amber-400">
                      <Trophy size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-wider text-amber-600 dark:text-amber-400">
                        1st Place Winner
                      </p>
                      <p className="text-xs font-semibold text-slate-800 dark:text-slate-100">
                        Alphabyte 3.0 Hackathon
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating 3D Badge 2: IEEE R10 Finalist */}
                <div 
                  className="absolute bottom-16 -right-3 sm:-right-6 z-20 animate-float-2 px-3 py-2 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/90 dark:border-slate-700 shadow-xl"
                  style={{ transform: 'translateZ(45px)' }}
                >
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-blue-500/15 text-blue-600 dark:text-blue-400">
                      <Award size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-wider text-blue-600 dark:text-blue-400">
                        Podium Winner
                      </p>
                      <p className="text-xs font-semibold text-slate-800 dark:text-slate-100">
                        IEEE R10 INV.ENT 2026
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating 3D Badge 3: La Trobe AUD 750 Grant */}
                <div 
                  className="absolute -bottom-2 left-2 z-20 px-3 py-1.5 rounded-lg bg-emerald-500/10 dark:bg-emerald-950/60 backdrop-blur-md border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 shadow-lg text-[11px] font-semibold flex items-center gap-1.5"
                  style={{ transform: 'translateZ(25px)' }}
                >
                  <Sparkles size={13} className="text-emerald-500" />
                  <span>AUD 750 Grant - La Trobe TIGC</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
