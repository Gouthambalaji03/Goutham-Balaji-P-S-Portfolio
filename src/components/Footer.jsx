import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Gouthambalaji03',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/goutham-balaji-p-s-935b9a25b',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:26gouthamba@gmail.com',
      label: 'Email'
    }
  ];

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-dark-footer border-t border-dark-border/50">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-block mb-4">
              <span className="text-2xl font-bold gradient-text">Goutham.</span>
            </a>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Full Stack Developer passionate about creating innovative web solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-text-primary font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-muted text-sm hover:text-secondary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-text-primary font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm flex items-center gap-1.5 flex-wrap justify-center">
            Made with
            <Heart size={14} className="text-accent fill-accent" />
            by
            <span className="text-text-primary font-medium">Goutham Balaji</span>
          </p>

          <p className="text-text-muted text-sm">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
