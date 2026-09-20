import React, { useState, useMemo } from 'react';
import { ExternalLink, Search, Info } from 'lucide-react';
import {
  CATEGORIES,
  CategoryType,
  Project,
  PROJECTS,
} from '../data/projects';

interface PortfolioSectionProps {
  isDark: boolean;
  onSelectProject: (project: Project) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  isDark,
  onSelectProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      // Category match
      const matchesCategory =
        selectedCategory === 'Semua' ||
        project.categoryList.includes(selectedCategory);

      // Search match (title, category, tags, or description)
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === '' ||
        project.title.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query) ||
        project.tags.some((t) => t.toLowerCase().includes(query)) ||
        project.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="portfolio"
      className="w-full py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto"
    >
      {/* Header Controls: Filter Chips & Optional Search */}
      <div className="flex flex-col items-center gap-5 mb-12 w-full">
        <div className="w-fit max-w-full flex flex-col gap-3.5">
          {/* Filter Chips Bar */}
          <div
            id="filter-chips-container"
            className={`w-full flex items-center justify-start sm:justify-center overflow-x-auto max-w-full p-1.5 rounded-full border shadow-lg backdrop-blur-md gap-1 sm:gap-1.5 no-scrollbar ${
              isDark
                ? 'bg-[#161616]/85 border-white/10'
                : 'bg-white/90 border-neutral-200'
            }`}
          >
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  id={`filter-chip-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? isDark
                        ? 'bg-[#262626] text-white border border-white/20 shadow-sm'
                        : 'bg-neutral-900 text-white shadow-sm'
                      : isDark
                      ? 'text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent'
                      : 'text-neutral-600 hover:text-black hover:bg-neutral-100 border border-transparent'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Counter and Search Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4 px-1.5 sm:px-2">
            <div
              id="project-count-display"
              className={`text-xs sm:text-sm font-mono tracking-wider whitespace-nowrap ${
                isDark ? 'text-neutral-400' : 'text-neutral-600'
              }`}
            >
              Menampilkan{' '}
              <span className={isDark ? 'text-white font-semibold' : 'text-black font-semibold'}>
                {filteredProjects.length}
              </span>{' '}
              dari {PROJECTS.length} karya
            </div>

            <div className="relative w-full sm:w-60">
              <Search
                className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${
                  isDark ? 'text-neutral-500' : 'text-neutral-400'
                }`}
              />
              <input
                type="text"
                id="portfolio-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari website atau stack..."
                className={`w-full pl-9 pr-4 py-1.5 rounded-full text-xs sm:text-sm transition-colors outline-none border ${
                  isDark
                    ? 'bg-[#181818] border-white/10 text-white placeholder-neutral-500 focus:border-white/40'
                    : 'bg-neutral-100 border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:border-neutral-500'
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Grid (Centering trailing items) */}
      {filteredProjects.length === 0 ? (
        <div
          className={`text-center py-24 rounded-2xl border ${
            isDark
              ? 'bg-[#101010] border-white/10 text-neutral-400'
              : 'bg-neutral-50 border-neutral-200 text-neutral-600'
          }`}
        >
          <p className="text-base sm:text-lg font-medium mb-2">
            Tidak ada proyek yang cocok dengan filter atau kata kunci.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('Semua');
              setSearchQuery('');
            }}
            className="mt-3 px-4 py-1.5 rounded-full text-xs font-medium bg-white text-black hover:bg-neutral-200 transition-colors"
          >
            Reset Filter
          </button>
        </div>
      ) : (
        <div
          id="projects-grid"
          className="flex flex-wrap justify-center -m-3 sm:-m-3.5"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="w-full md:w-1/2 lg:w-1/3 p-3 sm:p-3.5 flex"
            >
              <article
                id={`project-card-${project.id}`}
                className={`project-card group flex flex-col w-full rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 border ${
                  isDark
                    ? 'bg-[#0e0e0e] hover:bg-[#161616] border-white/5 hover:border-white/15 hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.8),0_0_20px_rgba(255,255,255,0.03)]'
                    : 'bg-white hover:bg-neutral-50/90 border-neutral-200 hover:border-neutral-300 hover:shadow-xl'
                }`}
              >
                {/* Image Container flush to top and sides */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Buka website ${project.title}`}
                  className={`relative w-full aspect-video overflow-hidden bg-neutral-900 block group/img border-b ${
                    isDark ? 'border-white/5' : 'border-neutral-100'
                  }`}
                >
                  <img
                    src={project.imageUrl}
                    alt={project.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100 object-top"
                    loading="lazy"
                  />

                  {/* Monochromatic Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Top-Right Circular Arrow Badge */}
                  <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 group-hover:text-white group-hover:bg-white/20 transition-all shadow-sm">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </a>

                {/* Content Container with comfortable padding */}
                <div className="flex flex-col flex-1 p-5 sm:p-6">
                  {/* Metadata Row: Category & Year */}
                  <div
                    className={`flex items-center justify-between text-xs font-mono mb-2 ${
                      isDark ? 'text-neutral-400' : 'text-neutral-500'
                    }`}
                  >
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>

                  {/* Project Title */}
                  <h3
                    className={`text-lg font-semibold tracking-tight transition-colors line-clamp-1 mb-2 ${
                      isDark
                        ? 'text-white group-hover:text-neutral-200'
                        : 'text-neutral-900 group-hover:text-neutral-700'
                    }`}
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {project.title}
                    </a>
                  </h3>

                  {/* Short excerpt */}
                  <p
                    className={`text-xs leading-relaxed line-clamp-2 mb-4 flex-grow ${
                      isDark ? 'text-neutral-400' : 'text-neutral-600'
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Tech Stack Tags & Detail trigger */}
                  <div
                    className={`flex items-center justify-between pt-3 border-t mt-auto ${
                      isDark ? 'border-white/5' : 'border-neutral-100'
                    }`}
                  >
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full leading-none font-mono text-[11px] px-3 py-1.5 ${
                            isDark
                              ? 'bg-[#1a1919] text-neutral-400 border border-white/5'
                              : 'bg-neutral-100 text-neutral-600 border border-neutral-200'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      title="Lihat detail proyek"
                      aria-label={`Lihat detail ${project.title}`}
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors cursor-pointer ml-2 flex-shrink-0 ${
                        isDark
                          ? 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                          : 'text-neutral-500 hover:text-black hover:bg-neutral-200'
                      }`}
                    >
                      <Info className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};