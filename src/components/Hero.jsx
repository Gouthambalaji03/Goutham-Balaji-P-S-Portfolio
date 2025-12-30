import { Download, Mail } from 'lucide-react';
import profileImage from '../assets/profile.png';

const Hero = () => {
  return (
    <>
      <style>{`
        .hero-section {
          background: #0f0f23;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px;
          padding-bottom: 40px;
          position: relative;
          overflow: hidden;
        }
        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          width: 100%;
        }
        .hero-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 40px;
        }
        .hero-text {
          flex: 1;
          min-width: 280px;
          max-width: 550px;
        }
        .hero-title {
          font-size: 2.2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 8px;
          line-height: 1.2;
        }
        .hero-title span {
          color: #f5a623;
        }
        .hero-subtitle {
          font-size: 1rem;
          color: #a0a0b0;
          font-weight: 500;
          margin-bottom: 16px;
        }
        .hero-description {
          color: #7a7a8c;
          font-size: 0.95rem;
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .hero-buttons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.85rem;
          background: #f5a623;
          color: #0f0f23;
          text-decoration: none;
          transition: all 0.3s;
        }
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.85rem;
          border: 2px solid #f5a623;
          color: #f5a623;
          background: transparent;
          text-decoration: none;
          transition: all 0.3s;
        }
        .hero-image-wrapper {
          flex: 1;
          display: flex;
          justify-content: center;
          min-width: 280px;
        }
        .profile-container {
          position: relative;
        }
        .profile-border {
          width: 250px;
          height: 250px;
          border-radius: 50%;
          padding: 5px;
          background: linear-gradient(135deg, #f5a623, #ffc107);
        }
        .profile-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          background: #1a1a2e;
        }
        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
        }
        .decorative-dot {
          position: absolute;
          border-radius: 50%;
          background: #f5a623;
        }
        .dot-1 {
          width: 16px;
          height: 16px;
          top: 5px;
          right: -5px;
        }
        .dot-2 {
          width: 12px;
          height: 12px;
          bottom: 40px;
          left: -15px;
        }
        .dot-3 {
          position: absolute;
          width: 16px;
          height: 16px;
          top: 18%;
          right: 12%;
        }
        .dot-4 {
          position: absolute;
          width: 12px;
          height: 12px;
          bottom: 28%;
          right: 32%;
        }

        @media (min-width: 768px) {
          .hero-container {
            padding: 0 40px;
          }
          .hero-content {
            gap: 60px;
          }
          .hero-title {
            font-size: 3rem;
          }
          .hero-subtitle {
            font-size: 1.25rem;
            margin-bottom: 20px;
          }
          .hero-description {
            font-size: 1rem;
            margin-bottom: 30px;
          }
          .btn-primary, .btn-secondary {
            padding: 12px 24px;
            font-size: 0.9rem;
          }
          .profile-border {
            width: 300px;
            height: 300px;
          }
          .dot-1 {
            width: 20px;
            height: 20px;
            right: -10px;
          }
          .dot-2 {
            width: 16px;
            height: 16px;
            left: -20px;
          }
        }

        @media (min-width: 1024px) {
          .hero-title {
            font-size: 3.5rem;
          }
          .profile-border {
            width: 340px;
            height: 340px;
          }
        }

        @media (max-width: 767px) {
          .hero-content {
            flex-direction: column-reverse;
            text-align: center;
          }
          .hero-text {
            max-width: 100%;
          }
          .hero-buttons {
            justify-content: center;
          }
        }
      `}</style>

      <section id="home" className="hero-section">
        {/* Decorative Dots */}
        <div className="decorative-dot dot-3"></div>
        <div className="decorative-dot dot-4"></div>

        <div className="hero-container">
          <div className="hero-content">
            {/* Left Content */}
            <div className="hero-text">
              <h1 className="hero-title">
                Hi, I'm <span>Goutham Balaji P S</span>
              </h1>
              <h2 className="hero-subtitle">
                Full Stack Web Developer
              </h2>
              <p className="hero-description">
                Passionate about building innovative web solutions with modern technologies. 
                I create functional, user-friendly applications that solve real-world problems.
              </p>

              {/* CTA Buttons */}
              <div className="hero-buttons">
                <a href="/resume.pdf" className="btn-primary">
                  <Download size={18} />
                  Download Resume
                </a>
                <a href="#contact" className="btn-secondary">
                  <Mail size={18} />
                  Get In Touch
                </a>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="hero-image-wrapper">
              <div className="profile-container">
                <div className="profile-border">
                  <div className="profile-inner">
                    <img 
                      src={profileImage} 
                      alt="Goutham Balaji P S" 
                      className="profile-img"
                    />
                  </div>
                </div>
                <div className="decorative-dot dot-1"></div>
                <div className="decorative-dot dot-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
