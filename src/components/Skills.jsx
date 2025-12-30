import React, { useState, useEffect, useRef } from 'react';

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
    <>
      <style>{`
        .skills-section {
          background: #0f0f23;
          padding: 60px 0;
        }
        .skills-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .section-title {
          text-align: center;
          margin-bottom: 16px;
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
        .skills-subtitle {
          text-align: center;
          color: #f5a623;
          font-size: 1rem;
          font-weight: 500;
          margin-bottom: 30px;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        .skill-card {
          background: #1a1a2e;
          border: 1px solid #2a2a45;
          border-radius: 12px;
          padding: 16px;
          transition: all 0.3s;
        }
        .skill-card:hover {
          border-color: rgba(245, 166, 35, 0.5);
          transform: translateY(-2px);
        }
        .skill-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .skill-info {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .skill-icon {
          font-size: 1.3rem;
        }
        .skill-name {
          color: #ffffff;
          font-weight: 500;
          font-size: 0.95rem;
        }
        .skill-percent {
          color: #f5a623;
          font-weight: 600;
          font-size: 0.9rem;
        }
        .progress-track {
          width: 100%;
          height: 6px;
          background: #2a2a45;
          border-radius: 3px;
          overflow: hidden;
        }
        .progress-bar {
          height: 100%;
          border-radius: 3px;
          background: linear-gradient(90deg, #f5a623, #ffc107);
          transition: width 1s ease;
        }

        @media (min-width: 640px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (min-width: 768px) {
          .skills-section {
            padding: 80px 0;
          }
          .skills-container {
            padding: 0 40px;
          }
          .section-title h2 {
            font-size: 2.5rem;
          }
          .skills-subtitle {
            font-size: 1.1rem;
            margin-bottom: 40px;
          }
          .skill-card {
            padding: 20px;
          }
          .progress-track {
            height: 8px;
          }
        }

        @media (min-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>

      <section ref={sectionRef} id="skills" className="skills-section">
        <div className="skills-container">
          <div className="section-title">
            <h2>Skills</h2>
            <div className="title-underline"></div>
          </div>

          <p className="skills-subtitle">Technical Skills</p>

          <div className="skills-grid">
            {technicalSkills.map((skill, index) => (
              <div 
                key={index}
                className="skill-card"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s ease ${index * 0.1}s`
                }}
              >
                <div className="skill-header">
                  <div className="skill-info">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <span className="skill-percent">{skill.percentage}%</span>
                </div>
                
                <div className="progress-track">
                  <div 
                    className="progress-bar"
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
    </>
  );
};

export default Skills;
