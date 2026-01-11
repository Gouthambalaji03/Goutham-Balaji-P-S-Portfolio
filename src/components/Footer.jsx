import { Linkedin, Github, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/gouthambalajips' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/gouthambalajips' },
    { icon: Mail, label: 'Email', href: 'mailto:26gouthamba@gmail.com' },
  ];

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="py-12 px-4 sm:px-8 border-t border-dark-border bg-dark-footer">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-text-primary mb-2">
              Goutham Balaji P S
            </h3>
            <p className="text-text-muted text-sm">
              Full Stack Developer
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-text-muted hover:text-primary transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-dark-light border border-dark-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-text-muted text-sm">
              © {new Date().getFullYear()} Goutham Balaji P S. All rights reserved.
            </p>
            <p className="text-text-muted text-sm flex items-center gap-1">
              Made with <Heart size={14} className="text-red-500" /> using React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
