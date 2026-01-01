import { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: 'Intern Software Engineer',
      company: 'Zucus Technologies Private Limited',
      location: 'Remote',
      period: 'Jun 2025 – Present',
      description: [
        'Built salon booking app with React.js for service selection and stylist booking.',
        'Created booking calendar with SMS confirmation system.',
        'Developed admin panel for booking/payment management.'
      ],
      tech: ['React.js', 'TypeScript', 'Next.js', 'MongoDB', 'Node.js', 'Express.js'],
      current: true
    }
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-secondary text-sm font-semibold tracking-wider uppercase mb-3 block">
            Career Path
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-5">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="section-divider"></div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-[800px] mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px timeline-line transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2}s`
              }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full timeline-dot transform -translate-x-1/2 z-10">
                {exp.current && (
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30"></div>
                )}
              </div>

              {/* Content */}
              <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="glass-card card-shine rounded-2xl p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {exp.current && (
                          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-primary to-secondary text-dark">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-text-primary">{exp.title}</h3>
                      <p className="text-secondary font-medium mt-1">{exp.company}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-text-muted text-sm">
                        <Calendar size={14} className="text-secondary" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-text-muted text-sm">
                        <MapPin size={14} className="text-secondary" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-text-secondary text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary mt-2 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="tech-tag"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
