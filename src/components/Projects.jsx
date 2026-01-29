import { useState } from 'react';
import { ExternalLink, Code } from 'lucide-react';
import onlineImg from '../assets/online.jpeg';
import ecommerceImg from '../assets/e commerce.jpeg';
import aiDebateImg from '../assets/ai debate.jpeg';
import bloggifyImg from '../assets/bloggify.jpeg';
import bloodDonationImg from '../assets/blood bank.jpeg';


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('fsd');

  const projects = [
    {
      title: 'Online Assessment Platform',
      description: 'Built web app for online exams with webcam tracking and auto-grading features. Raised user engagement by 30% through better UI and smooth user flow. Made REST APIs for login, exams, and results with JWT tokens and role-based access.',
      image: onlineImg,
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      githubFrontend: 'https://github.com/Gouthambalaji03/Online-Assessment-Platform-Frontend',
      githubBackend: 'https://github.com/Gouthambalaji03/Online-Assessment-Platform-Backend',
      demo: 'https://online-assessment-platform-frontend.vercel.app',
      category: 'fsd'
    },
     {
      title: 'Blood Bank Management System',
      description: 'A backend service for managing blood bank operations, including inventory tracking, donor management, and request fulfillment.',
      image: bloodDonationImg,
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'bcrypt', 'Tailwind CSS'],
      githubFrontend: 'https://github.com/Gouthambalaji03/Blood-Bank-Frontend',
      githubBackend: 'https://github.com/Gouthambalaji03/Blood-Bank-Backend',
      demo: 'https://blood-bank-frontend-nu-lac.vercel.app/',
      category: 'fsd'
    },
    {
      title: 'Bloggify - Full-Stack Blog Platform',
      description: 'A modern, full-featured blog publishing platform built with React and Vite. Bloggify allows users to create, publish, and manage blog posts with a rich text editor, complete with user authentication and admin moderation capabilities',
      image: bloggifyImg,
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Cloudinary', 'JWT', 'Multer'],
      githubFrontend: ' https://github.com/Gouthambalaji03/bloggify-frontend',
      githubBackend: ' https://github.com/Gouthambalaji03/bloggify-backend',
      demo: 'https://bloggify-frontend-96ei.vercel.app/',
      category: 'fsd'
    },
  
    {
      title: 'E-commerce Microservices Platform',
      description: 'Built event-driven system with 4 services that communicate via Apache Kafka message broker. Scaled from single server to 3-broker Kafka cluster. Made Next.js store with async order flow, cutting response time from 10s to 3s (70% faster).',
      image: ecommerceImg,
      tech: ['MERN Stack', 'Node.js', 'Kafka', 'Next.js', 'Docker'],
      githubFrontend: 'https://github.com/Gouthambalaji03/Ecommerce-Microservices-Kafka-Frontend',
      githubBackend: 'https://github.com/Gouthambalaji03/Ecommerce-Microservices-Kafka',
      demo: 'https://github.com/Gouthambalaji03/Ecommerce-Microservices-Kafka',
      category: 'other'
    },
    {
      title: 'AI Debate Arena',
      description: 'Built web app where four AI models (GPT-4o, Claude, Gemini, Llama) debate live. Added voting system, win tracking, and match history with clean React UI. Set up CI/CD workflow to run lint and build checks on PRs, auto deploy to Vercel.',
      image: aiDebateImg,
      tech: ['React', 'Node.js', 'Express', 'Next.js', 'TypeScript', 'Vercel AI SDK', 'GitHub Actions'],
      githubFrontend: 'https://github.com/Gouthambalaji03/AI-Debate-Arena-Frontend',
      githubBackend: 'https://github.com/Gouthambalaji03/AI-Debate-Arena',
      demo: 'https://ai-debate-arena-chi.vercel.app/',
      category: 'other'
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === 'fsd');

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Projects
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-primary mx-auto mb-6"></div>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-3 sm:gap-4">
            <button
              onClick={() => setActiveFilter('fsd')}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-medium text-sm sm:text-base transition-colors ${
                activeFilter === 'fsd'
                  ? 'bg-primary text-dark'
                  : 'bg-dark-light border border-dark-border text-text-secondary hover:text-primary hover:border-primary'
              }`}
            >
              FSD Projects
            </button>
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-medium text-sm sm:text-base transition-colors ${
                activeFilter === 'all'
                  ? 'bg-primary text-dark'
                  : 'bg-dark-light border border-dark-border text-text-secondary hover:text-primary hover:border-primary'
              }`}
            >
              All Projects
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProjects.map((project, index) => (
            <div key={index} className="section-card overflow-hidden group">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-text-muted text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full bg-dark-light border border-dark-border text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg bg-dark-light border border-dark-border text-text-secondary hover:text-primary hover:border-primary transition-colors text-xs sm:text-sm font-medium"
                    >
                      <Code size={14} className="sm:w-4 sm:h-4" />
                      GitHub
                    </a>
                  )}
                  {project.githubFrontend && (
                    <a
                      href={project.githubFrontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg bg-dark-light border border-dark-border text-text-secondary hover:text-primary hover:border-primary transition-colors text-xs sm:text-sm font-medium"
                    >
                      <Code size={14} className="sm:w-4 sm:h-4" />
                      Frontend
                    </a>
                  )}
                  {project.githubBackend && (
                    <a
                      href={project.githubBackend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg bg-dark-light border border-dark-border text-text-secondary hover:text-primary hover:border-primary transition-colors text-xs sm:text-sm font-medium"
                    >
                      <Code size={14} className="sm:w-4 sm:h-4" />
                      Backend
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg bg-primary text-dark font-medium hover:bg-primary-light transition-colors text-xs sm:text-sm"
                    >
                      <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                      Live Demo
                    </a>
                  )}
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
