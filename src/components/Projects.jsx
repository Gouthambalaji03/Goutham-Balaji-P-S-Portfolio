import { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, Folder, Star } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Sonique',
      description: 'A full-stack music streaming platform with seamless audio playback, user playlists, song discovery, and a modern responsive UI.',
      tech: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Cloudinary'],
      image: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=600&h=400&fit=crop',
      links: {
        frontend: 'https://github.com/Gouthambalaji03/sonique-frontend',
        live: '#'
      },
      featured: false,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Notes Management',
      description: 'A lightweight web app for creating, editing, organizing notes with rich-text formatting, color tagging, and quick search.',
      tech: ['React', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&h=400&fit=crop',
      links: {
        frontend: 'https://github.com/Gouthambalaji03/notes-app',
        live: '#'
      },
      featured: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Smart Expense Tracker',
      description: 'A responsive web app to manage daily expenses, set budgets, and visualize spending patterns through interactive charts.',
      tech: ['React', 'Chart.js', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
      links: {
        frontend: 'https://github.com/Gouthambalaji03/expense-tracker',
        live: '#'
      },
      featured: true,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-16 sm:py-20 md:py-28 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-5 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-secondary text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2 sm:mb-3 block">
            My Work
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 sm:mb-5">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider"></div>
          <p className="text-text-secondary text-sm sm:text-base mt-5 sm:mt-6 max-w-xl mx-auto px-2 sm:px-0">
            A selection of projects that showcase my skills and passion for development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15}s`
              }}
            >
              <div className="glass-card card-shine rounded-xl sm:rounded-2xl overflow-hidden h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/50 to-transparent"></div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-primary to-secondary text-dark text-[10px] sm:text-xs font-semibold">
                      <Star size={10} fill="currentColor" className="sm:w-3 sm:h-3" />
                      Featured
                    </div>
                  )}

                  {/* Hover Overlay with Links */}
                  <div className={`absolute inset-0 hidden sm:flex items-center justify-center gap-4 transition-all duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                    <a
                      href={project.links.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                    >
                      <Github size={18} className="sm:w-5 sm:h-5" />
                    </a>
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                    >
                      <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col">
                  {/* Title */}
                  <div className="flex items-start justify-between gap-2 mb-2 sm:mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-text-primary group-hover:text-secondary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <Folder size={18} className="text-secondary shrink-0 mt-0.5 sm:w-5 sm:h-5 sm:mt-1" />
                  </div>

                  {/* Description */}
                  <p className="text-text-muted text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium bg-dark-light text-text-secondary border border-dark-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 sm:gap-3 mt-auto">
                    <a
                      href={project.links.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium border border-primary/30 text-secondary hover:bg-primary/10 transition-all duration-300"
                    >
                      <Github size={14} className="sm:w-4 sm:h-4" />
                      Code
                    </a>
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium bg-gradient-to-r from-primary to-secondary text-dark hover:shadow-glow transition-all duration-300"
                    >
                      <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-8 sm:mt-12">
          <a
            href="https://github.com/Gouthambalaji03"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 text-text-secondary hover:text-secondary transition-colors duration-300 text-sm sm:text-base"
          >
            <span>View more on GitHub</span>
            <ExternalLink size={14} className="sm:w-4 sm:h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
