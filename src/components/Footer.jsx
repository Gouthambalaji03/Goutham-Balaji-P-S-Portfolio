import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-footer py-5 md:py-6 border-t border-dark-border">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center md:justify-between gap-4 text-center md:text-left">
        <a href="#home" className="text-lg md:text-xl font-bold text-accent">
          Goutham Balaji P S
        </a>

        <div className="flex items-center gap-4 md:gap-5">
          <a
            href="https://github.com/Gouthambalaji03"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors duration-300 hover:text-accent"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/goutham-balaji-p-s-935b9a25b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors duration-300 hover:text-accent"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:26gouthamba@gmail.com"
            className="text-text-muted transition-colors duration-300 hover:text-accent"
          >
            <Mail size={20} />
          </a>
        </div>

        <p className="text-text-muted text-xs md:text-sm flex items-center gap-1 flex-wrap justify-center">
          Made with <Heart size={14} className="text-accent fill-accent" /> by Goutham Balaji © {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
