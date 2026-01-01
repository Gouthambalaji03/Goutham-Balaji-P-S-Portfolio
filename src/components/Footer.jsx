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

      <div className="max-w-[1200px] mx-auto px-4 sm:px-5 md:px-10 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 mb-8 sm:mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <a href="#home" className="inline-block mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl font-bold gradient-text">Goutham Balaji P S.</span>
            </a>
            <p className="text-text-muted text-xs sm:text-sm leading-relaxed max-w-xs">
              Full Stack Developer passionate about creating innovative web solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-text-primary font-semibold text-sm sm:text-base mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-muted text-xs sm:text-sm hover:text-secondary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-text-primary font-semibold text-sm sm:text-base mb-3 sm:mb-4">Connect</h4>
            <div className="flex gap-2 sm:gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={social.label}
                >
                  <social.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-dark-border/50 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-text-muted text-xs sm:text-sm flex items-center gap-1 sm:gap-1.5 flex-wrap justify-center">
            Made with
            <Heart size={12} className="text-accent fill-accent sm:w-[14px] sm:h-[14px]" />
            by
            <span className="text-text-primary font-medium">Goutham Balaji</span>
          </p>

          <p className="text-text-muted text-xs sm:text-sm">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
