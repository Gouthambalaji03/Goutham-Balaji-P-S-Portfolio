import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>{`
        .footer {
          background: #0a0a18;
          padding: 20px 0;
          border-top: 1px solid #2a2a45;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          text-align: center;
        }
        .footer-logo {
          font-size: 1.1rem;
          font-weight: 700;
          color: #f5a623;
          text-decoration: none;
        }
        .footer-socials {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .footer-social {
          color: #7a7a8c;
          transition: color 0.3s;
        }
        .footer-social:hover {
          color: #f5a623;
        }
        .footer-copyright {
          color: #7a7a8c;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          gap: 4px;
          flex-wrap: wrap;
          justify-content: center;
        }

        @media (min-width: 768px) {
          .footer {
            padding: 24px 0;
          }
          .footer-container {
            padding: 0 40px;
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
          .footer-logo {
            font-size: 1.25rem;
          }
          .footer-socials {
            gap: 20px;
          }
          .footer-copyright {
            font-size: 0.85rem;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">
          <a href="#home" className="footer-logo">
            Goutham Balaji P S
          </a>

          <div className="footer-socials">
            <a 
              href="https://github.com/Gouthambalaji03" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/goutham-balaji-p-s-935b9a25b" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:26gouthamba@gmail.com" 
              className="footer-social"
            >
              <Mail size={20} />
            </a>
          </div>

          <p className="footer-copyright">
            Made with <Heart size={14} style={{ color: '#f5a623' }} fill="#f5a623" /> by Goutham Balaji © {currentYear}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
