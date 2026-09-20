import React, { useEffect } from 'react';
import { ExternalLink, X, Calendar, Tag, Layers } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  isDark: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  isDark,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        id="project-modal-content"
        className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl p-6 sm:p-8 transition-all shadow-2xl border ${
          isDark
            ? 'bg-[#141414] text-white border-white/15'
            : 'bg-white text-neutral-900 border-neutral-200'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          id="project-modal-close"
          onClick={onClose}
          aria-label="Tutup modal"
          className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer border ${
            isDark
              ? 'bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 border-white/10'
              : 'bg-neutral-100 text-neutral-500 hover:text-black hover:bg-neutral-200 border-neutral-200'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Preview */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-neutral-900 mb-6 border border-white/10">
          <img
            src={project.imageUrl}
            alt={project.alt}
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Metadata Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium ${
                isDark
                  ? 'bg-white/10 text-neutral-300 border border-white/10'
                  : 'bg-neutral-100 text-neutral-700 border border-neutral-200'
              }`}
            >
              <Layers className="w-3 h-3" />
              {project.category}
            </span>
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono ${
                isDark
                  ? 'bg-neutral-800 text-neutral-400'
                  : 'bg-neutral-100 text-neutral-600'
              }`}
            >
              <Calendar className="w-3 h-3" />
              {project.year}
            </span>
          </div>

          <a
            id="modal-open-live-btn"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium bg-white text-black hover:bg-neutral-200 transition-colors shadow-sm"
          >
            <span>Buka Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-3">
          {project.title}
        </h2>

        {/* Description */}
        <p
          className={`text-sm sm:text-base leading-relaxed mb-6 ${
            isDark ? 'text-neutral-300' : 'text-neutral-700'
          }`}
        >
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="pt-4 border-t border-white/10">
          <h4
            className={`text-xs font-mono tracking-wider font-semibold mb-3 flex items-center gap-1.5 ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            <Tag className="w-3.5 h-3.5" />
            Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-full text-xs font-mono ${
                  isDark
                    ? 'bg-neutral-800/80 text-neutral-300 border border-white/10'
                    : 'bg-neutral-100 text-neutral-800 border border-neutral-200'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button Footer */}
        <div className="mt-8 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
              isDark
                ? 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            Tutup
          </button>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium bg-white text-black hover:opacity-90 transition-opacity shadow-md"
          >
            <span>Kunjungi Website</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
