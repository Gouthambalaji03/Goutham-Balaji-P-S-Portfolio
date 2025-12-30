import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Sonique',
      description: 'Sonique is a full-stack music streaming platform built with React and Node.js, offering seamless audio playback, user playlists, song discovery, and a modern, responsive UI.',
      tech: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Cloudinary'],
      image: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=600&h=400&fit=crop',
      links: {
        frontend: 'https://github.com/Gouthambalaji03/sonique-frontend',
        live: '#'
      },
      featured: false
    },
    {
      title: 'Notes Management',
      description: 'Notes Management is a lightweight and responsive web app for creating, editing, organizing, and deleting notes. It supports rich-text formatting, color tagging, and quick search.',
      tech: ['React', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&h=400&fit=crop',
      links: {
        frontend: 'https://github.com/Gouthambalaji03/notes-app',
        live: '#'
      },
      featured: false
    },
    {
      title: 'Smart Expense Tracker',
      description: 'Smart Expense Tracker is a responsive web application that helps users manage their daily expenses, set budgets, and visualize spending patterns through interactive charts.',
      tech: ['React', 'Chart.js', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
      links: {
        frontend: 'https://github.com/Gouthambalaji03/expense-tracker',
        live: '#'
      },
      featured: true
    }
  ];

  return (
    <section id="projects" className="bg-dark py-15 md:py-20">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Projects</h2>
          <div className="w-15 h-1 bg-accent mx-auto rounded-sm"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden relative transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] group"
            >
              <div className="h-40 sm:h-45 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent"></div>
                {project.featured && (
                  <div className="absolute top-3 right-3 px-3 py-1 rounded text-xs font-bold bg-accent text-dark">
                    Pro
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="text-lg md:text-xl font-bold text-text-primary mb-2.5 transition-colors duration-300 group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-full text-xs border border-accent/30 text-text-secondary bg-accent/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2.5">
                  <a
                    href={project.links.frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-medium border border-accent text-accent bg-transparent transition-all duration-300 hover:bg-accent/10"
                  >
                    <Github size={14} />
                    Front-End Code
                  </a>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-medium bg-accent text-dark transition-all duration-300 hover:bg-accent-hover"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
