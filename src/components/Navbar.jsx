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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-dark/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.3)] py-0'
        : 'py-2'
    }`}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 flex justify-between items-center h-[60px] md:h-[70px]">
        <a href="#home" className="text-xl md:text-2xl font-bold text-accent">
          Goutham Balaji P S
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-text-secondary text-sm font-medium transition-colors duration-300 hover:text-accent"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          className="md:hidden flex bg-transparent border-none text-text-secondary cursor-pointer p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-dark/98 backdrop-blur-md border-b border-dark-border px-5 py-4">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`block text-text-secondary text-base font-medium py-3 transition-colors duration-300 hover:text-accent ${
                index !== navLinks.length - 1 ? 'border-b border-dark-border' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
