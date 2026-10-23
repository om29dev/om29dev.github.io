import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight, MessageCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-8 sm:py-10 lg:py-10 scroll-mt-16 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-3 sm:gap-4">
          <div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 font-mono">
              Get In Touch
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Contact & Collaboration
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
            Open to internship opportunities, software collaborations, and technical projects.
          </p>
        </div>

        {/* Contact Cards Grid: 1 col on mobile, 2 col on tablet, 4 col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Email Card */}
          <div className="rounded-2xl p-5 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
                  <Mail size={20} />
                </div>
                <button
                  onClick={() => copyToClipboard(personalInfo.contacts.email, 'email')}
                  title="Copy email address"
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors min-h-[38px] min-w-[38px] flex items-center justify-center cursor-pointer"
                >
                  {copiedField === 'email' ? (
                    <Check size={16} className="text-emerald-500" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Email Inbox</p>
              <a
                href={`mailto:${personalInfo.contacts.email}`}
                className="mt-1 block text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-mono truncate"
                title={personalInfo.contacts.email}
              >
                {personalInfo.contacts.email}
              </a>
            </div>

            <a
              href={`mailto:${personalInfo.contacts.email}`}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline min-h-[36px]"
            >
              <span>Compose Email</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Phone / WhatsApp Card */}
          <div className="rounded-2xl p-5 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
                  <Phone size={20} />
                </div>
                <button
                  onClick={() => copyToClipboard(personalInfo.contacts.phone, 'phone')}
                  title="Copy phone number"
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors min-h-[38px] min-w-[38px] flex items-center justify-center cursor-pointer"
                >
                  {copiedField === 'phone' ? (
                    <Check size={16} className="text-emerald-500" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Direct Phone / WhatsApp</p>
              <a
                href={`tel:${personalInfo.contacts.phoneRaw}`}
                className="mt-1 block text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-mono"
              >
                {personalInfo.contacts.phone}
              </a>
            </div>

            <div className="mt-4 flex items-center gap-3 min-h-[36px]">
              <a
                href={`tel:${personalInfo.contacts.phoneRaw}`}
                className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                <span>Call</span>
                <ArrowUpRight size={14} />
              </a>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <a
                href={`https://wa.me/91${personalInfo.contacts.phoneRaw}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                <MessageCircle size={13} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="rounded-2xl p-5 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
                  <LinkedinIcon size={20} />
                </div>
                <ArrowUpRight size={16} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Professional Network</p>
              <a
                href={personalInfo.contacts.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mt-1 block text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>

            <a
              href={personalInfo.contacts.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:underline min-h-[36px]"
            >
              <span>Connect on LinkedIn</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* GitHub Card */}
          <div className="rounded-2xl p-5 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">
                  <GithubIcon size={20} />
                </div>
                <ArrowUpRight size={16} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Code Repositories</p>
              <a
                href={personalInfo.contacts.github}
                target="_blank"
                rel="noreferrer"
                className="mt-1 block text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                GitHub Profile
              </a>
            </div>

            <a
              href={personalInfo.contacts.github}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:hover:text-blue-400 group-hover:underline min-h-[36px]"
            >
              <span>Explore Repositories</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

        </div>

        {/* Location & Status Banner */}
        <div className="mt-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-2.5">
            <MapPin size={16} className="text-rose-500 shrink-0" />
            <span>Based in Pune / Pimpri-Chinchwad, Maharashtra, India (IST / UTC+5:30)</span>
          </div>
          <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for remote and on-site opportunities</span>
          </div>
        </div>

      </div>
    </section>
  );
};
