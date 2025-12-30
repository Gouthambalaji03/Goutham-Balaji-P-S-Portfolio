import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          width: 100%;
          z-index: 1000;
          transition: all 0.3s;
        }
        .navbar.scrolled {
          background: rgba(15, 15, 35, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 20px rgba(0,0,0,0.3);
        }
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 60px;
        }
        .nav-logo {
          font-size: 1.2rem;
          font-weight: 700;
          color: #f5a623;
          text-decoration: none;
        }
        .nav-links {
          display: none;
          align-items: center;
          gap: 30px;
        }
        .nav-link {
          color: #a0a0b0;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 0.3s;
        }
        .nav-link:hover {
          color: #f5a623;
        }
        .mobile-toggle {
          display: flex;
          background: none;
          border: none;
          color: #a0a0b0;
          cursor: pointer;
          padding: 8px;
        }
        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: rgba(15, 15, 35, 0.98);
          border-bottom: 1px solid #2a2a45;
          backdrop-filter: blur(10px);
          padding: 16px 20px;
        }
        .mobile-link {
          display: block;
          color: #a0a0b0;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          padding: 12px 0;
          border-bottom: 1px solid #2a2a45;
        }
        .mobile-link:last-child {
          border-bottom: none;
        }
        .mobile-link:hover {
          color: #f5a623;
        }

        @media (min-width: 768px) {
          .nav-container {
            padding: 0 40px;
            height: 70px;
          }
          .nav-logo {
            font-size: 1.4rem;
          }
          .nav-links {
            display: flex;
          }
          .mobile-toggle {
            display: none;
          }
        }
      `}</style>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} style={{ padding: scrolled ? '0' : '8px 0' }}>
        <div className="nav-container">
          <a href="#home" className="nav-logo">
            Goutham Balaji P S
          </a>

          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </div>

          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="mobile-menu">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="mobile-link"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
