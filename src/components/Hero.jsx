import { useState, useEffect } from 'react';
import { Download, Mail, ArrowDown, Sparkles } from 'lucide-react';
import profileImage from '../assets/profile.png';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const roles = [
    'Full Stack Developer',
    'MERN Stack Expert',
    'React Enthusiast',
    'Problem Solver'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[loopNum % roles.length];

      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(100);

        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(50);

        if (displayText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 sm:pt-20 pb-8 sm:pb-10 relative overflow-hidden">
      {/* Decorative elements - hidden on very small screens */}
      <div className="absolute top-[20%] right-[10%] w-2 h-2 rounded-full bg-primary animate-pulse hidden sm:block"></div>
      <div className="absolute top-[30%] right-[25%] w-3 h-3 rounded-full bg-secondary animate-pulse hidden sm:block" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-[30%] right-[15%] w-2 h-2 rounded-full bg-accent animate-pulse hidden sm:block" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-[40%] left-[5%] w-2 h-2 rounded-full bg-secondary animate-pulse hidden sm:block" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-[20%] left-[10%] w-3 h-3 rounded-full bg-primary animate-pulse hidden sm:block" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-5 md:px-10 w-full">
        <div className="flex items-center justify-between flex-wrap gap-8 sm:gap-10 lg:gap-15 flex-col-reverse lg:flex-row">
          {/* Left Content */}
          <div className="flex-1 min-w-0 w-full lg:max-w-[600px] text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-card mb-4 sm:mb-6">
              <Sparkles size={14} className="text-secondary sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm text-text-secondary">Available for opportunities</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-2 sm:mb-3 leading-tight">
              Hi, I'm{' '}
              <span className="gradient-text block sm:inline">
                Goutham Balaji P S
              </span>
            </h1>

            {/* Typing Animation */}
            <div className="h-8 sm:h-10 md:h-12 mb-4 sm:mb-5">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
                <span className="text-text-secondary">I'm a </span>
                <span className="text-secondary typing-cursor">{displayText}</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-text-muted text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-[500px] mx-auto lg:mx-0 px-2 sm:px-0">
              Passionate about crafting innovative web solutions with modern technologies.
              I build functional, user-friendly applications that solve real-world problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-3 sm:gap-4 flex-wrap justify-center lg:justify-start">
              <a
                href="/resume.pdf"
                download="Goutham_Balaji_PS_Resume.pdf"
                className="btn-primary inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm"
              >
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="hidden xs:inline">Download </span>Resume
                </span>
              </a>
              <a
                href="#contact"
                className="btn-outline inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm"
              >
                <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span className="hidden xs:inline">Get In </span>Touch
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">3+</div>
                <div className="text-text-muted text-xs sm:text-sm">Projects</div>
              </div>
              <div className="w-px bg-dark-border"></div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">1+</div>
                <div className="text-text-muted text-xs sm:text-sm">Years Exp.</div>
              </div>
              <div className="w-px bg-dark-border"></div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">9+</div>
                <div className="text-text-muted text-xs sm:text-sm">Technologies</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center min-w-0 w-full lg:w-auto">
            <div className="relative floating">
              {/* Glow effect behind image - hidden on small screens for performance */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-30 blur-3xl scale-110 hidden sm:block"></div>

              {/* Profile Image Container */}
              <div className="relative w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] lg:w-[340px] lg:h-[340px] xl:w-[360px] xl:h-[360px] rounded-full p-[3px] sm:p-[4px] profile-gradient glow-accent">
                <div className="w-full h-full rounded-full overflow-hidden bg-dark-card">
                  <img
                    src={profileImage}
                    alt="Goutham Balaji P S"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Floating decorative elements - hidden on mobile */}
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-10 h-10 sm:w-12 sm:h-12 rounded-xl glass-card hidden sm:flex items-center justify-center pulse-glow">
                <span className="text-xl sm:text-2xl">⚛️</span>
              </div>
              <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-10 h-10 sm:w-12 sm:h-12 rounded-xl glass-card hidden sm:flex items-center justify-center pulse-glow" style={{ animationDelay: '1s' }}>
                <span className="text-xl sm:text-2xl">🚀</span>
              </div>
              <div className="absolute top-1/2 -right-4 sm:-right-6 w-8 h-8 sm:w-10 sm:h-10 rounded-lg glass-card hidden md:flex items-center justify-center pulse-glow" style={{ animationDelay: '0.5s' }}>
                <span className="text-lg sm:text-xl">💻</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-text-muted">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={20} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
