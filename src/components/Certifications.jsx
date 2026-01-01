import { useState, useEffect, useRef } from 'react';
import { Award, Users, Calendar } from 'lucide-react';

const Certifications = () => {
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

  const certifications = [
    {
      title: 'Machine Learning with Python',
      issuer: 'Cognitive Class',
      icon: '🤖'
    },
    {
      title: 'Python for Data Science',
      issuer: 'Cognitive Class',
      icon: '🐍'
    }
  ];

  const leadership = [
    {
      title: 'SPAC Secretary',
      organization: 'Srishti',
      period: 'Jul 2024 - Apr 2025',
      description: 'Conducted technical symposium with 2,500+ participants.'
    },
    {
      title: 'Joint Secretary',
      organization: 'Biomedical Association',
      period: 'Jul 2023 - Apr 2024',
      description: 'Organized student events and workshops.'
    }
  ];

  return (
    <section ref={sectionRef} id="certifications" className="py-20 md:py-28 relative">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-secondary text-sm font-semibold tracking-wider uppercase mb-3 block">
            Achievements
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-5">
            Certifications & <span className="gradient-text">Leadership</span>
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Certifications */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-text-primary">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="glass-card card-shine rounded-2xl p-5 group"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.5s ease ${0.2 + index * 0.1}s`
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary group-hover:text-secondary transition-colors duration-300">
                        {cert.title}
                      </h4>
                      <p className="text-secondary text-sm font-medium">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-text-primary">Leadership</h3>
            </div>

            <div className="space-y-4">
              {leadership.map((role, index) => (
                <div
                  key={index}
                  className="glass-card card-shine rounded-2xl p-5 group"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.5s ease ${0.3 + index * 0.1}s`
                  }}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary group-hover:text-secondary transition-colors duration-300">
                        {role.title}
                      </h4>
                      <p className="text-secondary text-sm font-medium">{role.organization}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-text-muted text-xs shrink-0">
                      <Calendar size={12} className="text-secondary" />
                      {role.period}
                    </div>
                  </div>
                  <p className="text-text-muted text-sm">{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
