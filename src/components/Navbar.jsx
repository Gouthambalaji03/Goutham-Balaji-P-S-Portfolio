import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
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
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'py-2 bg-dark/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-dark-border/50'
        : 'py-4 bg-transparent'
    }`}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="relative group">
          <span className="text-xl md:text-2xl font-bold gradient-text">
            Goutham<span className="text-text-primary">.</span>
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg
                  ${isActive
                    ? 'text-text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                  }
                `}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20"></span>
                )}
                <span className="relative">{link.name}</span>
              </a>
            );
          })}

          {/* CTA Button */}
          <a
            href="/resume.pdf"
            download="Goutham_Balaji_PS_Resume.pdf"
            className="ml-4 px-5 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-primary to-secondary text-dark transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg glass-card text-text-secondary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-5 h-5">
            <span className={`absolute left-0 block w-5 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'top-2 rotate-45' : 'top-1'}`}></span>
            <span className={`absolute left-0 top-2 block w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`absolute left-0 block w-5 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'top-2 -rotate-45' : 'top-3'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="mx-4 my-2 p-4 rounded-2xl glass-card border border-dark-border/50">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`block py-3 px-4 rounded-xl text-base font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-text-primary bg-gradient-to-r from-primary/10 to-secondary/10'
                    : 'text-text-secondary hover:text-text-primary hover:bg-dark-light'
                } ${index !== navLinks.length - 1 ? 'mb-1' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            );
          })}

          {/* Mobile CTA */}
          <a
            href="/resume.pdf"
            download="Goutham_Balaji_PS_Resume.pdf"
            className="block mt-4 py-3 text-center font-semibold rounded-xl bg-gradient-to-r from-primary to-secondary text-dark"
            onClick={() => setIsOpen(false)}
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
