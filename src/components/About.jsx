import { Mail, Github, Linkedin, Phone } from 'lucide-react';

const About = () => {
  return (
    <>
      <style>{`
        .about-section {
          background: #0f0f23;
          padding: 60px 0;
        }
        .about-container {
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
        .about-content {
          display: flex;
          gap: 30px;
          flex-wrap: wrap;
        }
        .about-text {
          flex: 1;
          min-width: 280px;
        }
        .about-text p {
          color: #a0a0b0;
          font-size: 0.95rem;
          line-height: 1.8;
          margin-bottom: 16px;
        }
        .about-text .highlight {
          color: #ffffff;
          font-weight: 600;
        }
        .about-text .accent {
          color: #f5a623;
        }
        .info-card {
          width: 100%;
          max-width: 320px;
          background: #f5a623;
          border-radius: 16px;
          padding: 24px;
          color: #0f0f23;
          flex-shrink: 0;
        }
        .info-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
        }
        .info-icon {
          width: 32px;
          height: 32px;
          background: rgba(0,0,0,0.1);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .info-label {
          font-size: 0.75rem;
          opacity: 0.7;
          margin-bottom: 2px;
        }
        .info-value {
          font-weight: 500;
          font-size: 0.85rem;
          color: #0f0f23;
          text-decoration: none;
        }
        .social-buttons {
          display: flex;
          gap: 10px;
        }
        .social-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px;
          background: rgba(0,0,0,0.1);
          border-radius: 8px;
          font-weight: 500;
          font-size: 0.85rem;
          color: #0f0f23;
          text-decoration: none;
          transition: background 0.3s;
        }
        .social-btn:hover {
          background: rgba(0,0,0,0.2);
        }

        @media (min-width: 768px) {
          .about-section {
            padding: 80px 0;
          }
          .about-container {
            padding: 0 40px;
          }
          .section-title {
            margin-bottom: 50px;
          }
          .section-title h2 {
            font-size: 2.5rem;
          }
          .about-content {
            gap: 50px;
          }
          .about-text p {
            font-size: 1rem;
          }
        }

        @media (max-width: 767px) {
          .about-content {
            flex-direction: column;
            align-items: center;
          }
          .info-card {
            max-width: 100%;
          }
        }
      `}</style>

      <section id="about" className="about-section">
        <div className="about-container">
          <div className="section-title">
            <h2>About Me</h2>
            <div className="title-underline"></div>
          </div>

          <div className="about-content">
            <div className="about-text">
              <p>
                I'm <span className="highlight">Goutham Balaji P S</span>, a dedicated Full Stack Web Developer 
                specialized in <span className="accent">MERN Stack</span> (MongoDB, Express.js, React.js, Node.js) 
                with a strong focus on both front-end and back-end development. I have a passion for 
                creating dynamic and responsive web applications that provide seamless user experiences.
              </p>
              <p>
                My passion lies in building websites that are not only functional and user-friendly, 
                but also visually appealing. I strive to add a personal touch to every project, 
                ensuring that each product is eye-catching and intuitive.
              </p>
            </div>

            <div className="info-card">
              <h3>Personal Info</h3>
              
              <div className="info-item">
                <div className="info-icon">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="info-label">Email</p>
                  <a href="mailto:26gouthamba@gmail.com" className="info-value">
                    26gouthamba@gmail.com
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="info-label">Mobile</p>
                  <a href="tel:+918778786208" className="info-value">
                    +91 87787 86208
                  </a>
                </div>
              </div>

              <div className="social-buttons">
                <a 
                  href="https://github.com/Gouthambalaji03" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/goutham-balaji-p-s-935b9a25b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
