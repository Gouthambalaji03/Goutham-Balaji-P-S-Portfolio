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
    <section ref={sectionRef} id="experience" className="py-16 sm:py-20 md:py-28 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-5 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-secondary text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2 sm:mb-3 block">
            Career Path
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 sm:mb-5">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="section-divider"></div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-[800px] mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px timeline-line transform md:-translate-x-1/2 hidden sm:block"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-6 sm:gap-8 mb-8 sm:mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2}s`
              }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full timeline-dot transform -translate-x-1/2 z-10 hidden sm:block">
                {exp.current && (
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30"></div>
                )}
              </div>

              {/* Content */}
              <div className={`flex-1 sm:ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="glass-card card-shine rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:flex-wrap items-start justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {exp.current && (
                          <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-gradient-to-r from-primary to-secondary text-dark">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary">{exp.title}</h3>
                      <p className="text-secondary font-medium text-sm sm:text-base mt-1">{exp.company}</p>
                    </div>
                    <div className="flex flex-row sm:flex-col gap-3 sm:gap-2">
                      <div className="flex items-center gap-1.5 sm:gap-2 text-text-muted text-xs sm:text-sm">
                        <Calendar size={12} className="text-secondary sm:w-[14px] sm:h-[14px]" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2 text-text-muted text-xs sm:text-sm">
                        <MapPin size={12} className="text-secondary sm:w-[14px] sm:h-[14px]" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3 text-text-secondary text-xs sm:text-sm">
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary mt-1.5 sm:mt-2 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
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
