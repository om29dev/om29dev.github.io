import React, { useState, useEffect } from 'react';
import { 
  Award, 
  ChevronDown, 
  ChevronUp, 
  Calendar, 
  ExternalLink, 
  Download, 
  Loader2, 
  Maximize2, 
  X, 
  Trophy, 
  GraduationCap, 
  CheckCircle2 
} from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { Certification, CertificationCategory } from '../types';
import { downloadCertificatePdf } from '../utils/downloadCertificatePdf';

export const Certifications: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CertificationCategory>('all');
  const [expanded, setExpanded] = useState(false);
  const [activeModalCert, setActiveModalCert] = useState<Certification | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const handleDownload = async (cert: Certification) => {
    try {
      setDownloadingId(cert.id);
      await downloadCertificatePdf(cert.previewUrl, cert.title);
    } catch (err) {
      console.error('Failed to generate PDF:', err);
    } finally {
      setDownloadingId(null);
    }
  };

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalCert(null);
      }
    };
    if (activeModalCert) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeModalCert]);

  const categories: { label: string; value: CertificationCategory; count: number }[] = [
    { label: 'All Credentials', value: 'all', count: certifications.length },
    { label: 'Hackathons & Contests', value: 'competitions', count: certifications.filter((c) => c.category === 'competitions').length },
    { label: 'Courses & Internships', value: 'courses', count: certifications.filter((c) => c.category === 'courses').length },
    { label: 'Technical Workshops', value: 'workshops', count: certifications.filter((c) => c.category === 'workshops').length }
  ];

  const filteredCerts = selectedCategory === 'all'
    ? certifications
    : certifications.filter((c) => c.category === selectedCategory);

  const initialCount = 6;
  const isExpandable = filteredCerts.length > initialCount;
  const visibleCertifications = expanded || !isExpandable
    ? filteredCerts
    : filteredCerts.slice(0, initialCount);

  const handleCategoryChange = (cat: CertificationCategory) => {
    setSelectedCategory(cat);
    setExpanded(false);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'competitions':
        return <Trophy size={13} className="text-amber-500" />;
      case 'courses':
        return <GraduationCap size={13} className="text-blue-500" />;
      default:
        return <Award size={13} className="text-emerald-500" />;
    }
  };

  return (
    <section id="certifications" className="py-8 sm:py-10 lg:py-10 scroll-mt-16 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 font-mono">
              Verified Credentials
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Certifications & Awards
            </h2>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md">
            Directly attached proof documents for hackathons, engineering internships, and specialized course completions.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => handleCategoryChange(cat.value)}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat.value
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCertifications.map((cert) => (
            <div
              key={cert.id}
              className="rounded-2xl p-5 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header Badge & Date */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
                    {getCategoryIcon(cert.category)}
                    <span>{cert.type}</span>
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Calendar size={12} />
                    {cert.date}
                  </span>
                </div>

                {/* Preview Thumbnail Container */}
                <div 
                  onClick={() => setActiveModalCert(cert)}
                  className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 cursor-pointer group/thumb"
                  title="Click to inspect certificate preview"
                >
                  <img
                    src={cert.previewUrl}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/thumb:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-xs font-semibold backdrop-blur-[2px]">
                    <Maximize2 size={14} />
                    <span>Quick Preview</span>
                  </div>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2.5">
                  {cert.issuer}
                </p>

                {/* Details */}
                {cert.details && (
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {cert.details}
                  </p>
                )}
              </div>

              {/* Action Buttons: Download PDF & Verify */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => handleDownload(cert)}
                  disabled={downloadingId === cert.id}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700 transition-colors disabled:opacity-60 cursor-pointer"
                  title="Download certificate PDF"
                >
                  {downloadingId === cert.id ? (
                    <Loader2 size={13} className="animate-spin" />
                  ) : (
                    <Download size={13} />
                  )}
                  <span>Download PDF</span>
                </button>

                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    title="Verify credential on provider site"
                  >
                    <span>Verify</span>
                    <ExternalLink size={12} />
                  </a>
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
                  ? 'Show Fewer Credentials'
                  : `View More Credentials (${filteredCerts.length - initialCount} more)`
                }
              </span>
              {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {activeModalCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-fadeIn"
          onClick={() => setActiveModalCert(null)}
        >
          <div 
            className="relative max-w-3xl w-full bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-blue-600 dark:text-blue-400 shrink-0" />
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {activeModalCert.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {activeModalCert.issuer} ({activeModalCert.date})
                  </p>
                </div>
              </div>

              <button
                onClick={() => setActiveModalCert(null)}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="p-4 sm:p-6 overflow-auto bg-slate-50 dark:bg-slate-950/60 flex items-center justify-center">
              <img
                src={activeModalCert.previewUrl}
                alt={activeModalCert.title}
                className="max-h-[60vh] w-auto max-w-full rounded-lg shadow-md border border-slate-200 dark:border-slate-800 object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex flex-wrap items-center justify-between p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 gap-3">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Type: <span className="font-semibold text-slate-700 dark:text-slate-300">{activeModalCert.type}</span>
              </p>

              <div className="flex items-center gap-2">
                {activeModalCert.verificationUrl && (
                  <a
                    href={activeModalCert.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
                  >
                    <span>Verify Online</span>
                    <ExternalLink size={13} />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => handleDownload(activeModalCert)}
                  disabled={downloadingId === activeModalCert.id}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors disabled:opacity-60 cursor-pointer"
                  title="Download certificate PDF"
                >
                  {downloadingId === activeModalCert.id ? (
                    <Loader2 size={13} className="animate-spin" />
                  ) : (
                    <Download size={13} />
                  )}
                  <span>Download PDF</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

