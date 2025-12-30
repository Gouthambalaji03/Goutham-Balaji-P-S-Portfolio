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
    { name: 'HTML5', percentage: 95, icon: '📄' },
    { name: 'CSS3', percentage: 90, icon: '🎨' },
    { name: 'Tailwind CSS', percentage: 92, icon: '💨' },
    { name: 'JavaScript', percentage: 90, icon: '⚡' },
    { name: 'React', percentage: 90, icon: '⚛️' },
    { name: 'Node.js', percentage: 92, icon: '🟢' },
    { name: 'Express.js', percentage: 95, icon: '🚀' },
    { name: 'MongoDB', percentage: 80, icon: '🍃' },
    { name: 'MySQL', percentage: 90, icon: '🐬' },
  ];

  return (
    <section ref={sectionRef} id="skills" className="bg-dark py-15 md:py-20">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Skills</h2>
          <div className="w-15 h-1 bg-accent mx-auto rounded-sm"></div>
        </div>

        <p className="text-center text-accent text-base md:text-lg font-medium mb-8 md:mb-10">
          Technical Skills
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {technicalSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-dark-card border border-dark-border rounded-xl p-4 md:p-5 transition-all duration-300 hover:border-accent/50 hover:-translate-y-0.5"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s ease ${index * 0.1}s`
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">{skill.icon}</span>
                  <span className="text-text-primary font-medium text-sm md:text-base">{skill.name}</span>
                </div>
                <span className="text-accent font-semibold text-sm">{skill.percentage}%</span>
              </div>

              <div className="w-full h-1.5 md:h-2 bg-dark-border rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full progress-bar-gradient transition-all duration-1000"
                  style={{
                    width: isVisible ? `${skill.percentage}%` : '0%',
                    transitionDelay: `${index * 0.1 + 0.3}s`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
