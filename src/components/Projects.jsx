import { ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Microservices Platform',
      description: 'Built event-driven system with 4 services that communicate via Apache Kafka message broker. Scaled from single server to 3-broker Kafka cluster. Made Next.js store with async order flow, cutting response time from 10s to 3s (70% faster).',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      tech: ['Node.js', 'Kafka', 'Next.js', 'Docker'],
      github: 'https://github.com/gouthambalajips',
      demo: '#'
    },
    {
      title: 'Online Assessment Platform',
      description: 'Built web app for online exams with webcam tracking and auto-grading features. Raised user engagement by 30% through better UI and smooth user flow. Made REST APIs for login, exams, and results with JWT tokens and role-based access.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/gouthambalajips',
      demo: '#'
    },
    {
      title: 'AI Debate Arena',
      description: 'Built web app where four AI models (GPT-4o, Claude, Gemini, Llama) debate live. Added voting system, win tracking, and match history with clean React UI. Set up CI/CD workflow to run lint and build checks on PRs, auto deploy to Vercel.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      tech: ['Next.js', 'TypeScript', 'Vercel AI SDK', 'GitHub Actions'],
      github: 'https://github.com/gouthambalajips',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-12 text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="section-card overflow-hidden group">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-dark-light border border-dark-border text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-dark-light border border-dark-border text-text-secondary hover:text-primary hover:border-primary transition-colors text-sm font-medium"
                  >
                    <Code size={16} />
                    View Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-primary text-dark font-medium hover:bg-primary-light transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
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
