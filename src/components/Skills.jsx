import { useState, useEffect, useRef } from 'react';

const Skills = () => {
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

  const technicalSkills = [
    { name: 'HTML5', percentage: 95, icon: '🌐', color: 'from-orange-500 to-red-500' },
    { name: 'CSS3', percentage: 90, icon: '🎨', color: 'from-blue-500 to-cyan-500' },
    { name: 'Tailwind CSS', percentage: 92, icon: '💨', color: 'from-teal-500 to-cyan-400' },
    { name: 'JavaScript', percentage: 90, icon: '⚡', color: 'from-yellow-400 to-orange-500' },
    { name: 'React', percentage: 90, icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
    { name: 'Node.js', percentage: 92, icon: '🟢', color: 'from-green-500 to-emerald-500' },
    { name: 'Express.js', percentage: 95, icon: '🚀', color: 'from-gray-500 to-gray-700' },
    { name: 'MongoDB', percentage: 80, icon: '🍃', color: 'from-green-600 to-green-400' },
    { name: 'MySQL', percentage: 90, icon: '🐬', color: 'from-blue-600 to-blue-400' },
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-secondary text-sm font-semibold tracking-wider uppercase mb-3 block">
            What I know
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-5">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="section-divider"></div>
          <p className="text-text-secondary mt-6 max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {technicalSkills.map((skill, index) => (
            <div
              key={index}
              className="glass-card card-shine rounded-2xl p-5 group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <div>
                    <span className="text-text-primary font-semibold text-base block">{skill.name}</span>
                    <span className="text-text-muted text-xs">Proficiency</span>
                  </div>
                </div>
                <div className="text-right">
                  <span
                    className="text-2xl font-bold gradient-text"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transition: `opacity 0.5s ease ${index * 0.1 + 0.5}s`
                    }}
                  >
                    {isVisible ? skill.percentage : 0}%
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative h-2 bg-dark-border rounded-full overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 rounded-full progress-bar-gradient"
                  style={{
                    width: isVisible ? `${skill.percentage}%` : '0%',
                    transition: `width 1s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1 + 0.3}s`
                  }}
                >
                  {/* Shine effect on progress bar */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12 text-center">
          <p className="text-text-muted text-sm mb-4">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Git', 'GitHub', 'VS Code', 'Figma', 'REST APIs', 'TypeScript', 'Next.js'].map((tag, index) => (
              <span
                key={tag}
                className="tech-tag cursor-default"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                  transition: `all 0.4s ease ${0.8 + index * 0.05}s`
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
