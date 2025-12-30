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
    <>
      <style>{`
        .projects-section {
          background: #0f0f23;
          padding: 60px 0;
        }
        .projects-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .section-title {
          text-align: center;
          margin-bottom: 40px;
        }
        .section-title h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 16px;
        }
        .title-underline {
          width: 60px;
          height: 4px;
          background: #f5a623;
          margin: 0 auto;
          border-radius: 2px;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        .project-card {
          background: #1a1a2e;
          border: 1px solid #2a2a45;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          transition: all 0.3s;
        }
        .project-card:hover {
          border-color: rgba(245, 166, 35, 0.3);
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        .project-image {
          height: 160px;
          overflow: hidden;
          position: relative;
        }
        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }
        .project-card:hover .project-image img {
          transform: scale(1.1);
        }
        .project-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, #1a1a2e, transparent);
        }
        .pro-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          padding: 4px 12px;
          border-radius: 4px;
          font-size: 0.7rem;
          font-weight: 700;
          background: #f5a623;
          color: #0f0f23;
        }
        .project-content {
          padding: 20px;
        }
        .project-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 10px;
          transition: color 0.3s;
        }
        .project-card:hover .project-title {
          color: #f5a623;
        }
        .project-description {
          color: #7a7a8c;
          font-size: 0.85rem;
          line-height: 1.6;
          margin-bottom: 16px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }
        .tech-tag {
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 0.7rem;
          border: 1px solid rgba(245, 166, 35, 0.3);
          color: #a0a0b0;
          background: rgba(245, 166, 35, 0.1);
        }
        .project-buttons {
          display: flex;
          gap: 10px;
        }
        .project-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s;
        }
        .btn-outline {
          border: 1px solid #f5a623;
          color: #f5a623;
          background: transparent;
        }
        .btn-outline:hover {
          background: rgba(245, 166, 35, 0.1);
        }
        .btn-filled {
          background: #f5a623;
          color: #0f0f23;
        }
        .btn-filled:hover {
          background: #ffc107;
        }

        @media (min-width: 640px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .project-image {
            height: 180px;
          }
        }

        @media (min-width: 768px) {
          .projects-section {
            padding: 80px 0;
          }
          .projects-container {
            padding: 0 40px;
          }
          .section-title {
            margin-bottom: 50px;
          }
          .section-title h2 {
            font-size: 2.5rem;
          }
          .project-title {
            font-size: 1.2rem;
          }
          .project-description {
            font-size: 0.9rem;
          }
          .project-btn {
            font-size: 0.8rem;
          }
        }

        @media (min-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>

      <section id="projects" className="projects-section">
        <div className="projects-container">
          <div className="section-title">
            <h2>Projects</h2>
            <div className="title-underline"></div>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay"></div>
                  {project.featured && <div className="pro-badge">Pro</div>}
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="tech-tags">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-buttons">
                    <a 
                      href={project.links.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn btn-outline"
                    >
                      <Github size={14} />
                      Front-End Code
                    </a>
                    <a 
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn btn-filled"
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
    </>
  );
};

export default Projects;
