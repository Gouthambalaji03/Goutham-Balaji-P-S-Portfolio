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
    <section id="home" className="min-h-screen flex items-center pt-20 pb-10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-[20%] right-[10%] w-2 h-2 rounded-full bg-primary animate-pulse"></div>
      <div className="absolute top-[30%] right-[25%] w-3 h-3 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-[30%] right-[15%] w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-[40%] left-[5%] w-2 h-2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-[20%] left-[10%] w-3 h-3 rounded-full bg-primary animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-[1200px] mx-auto px-5 md:px-10 w-full">
        <div className="flex items-center justify-between flex-wrap gap-10 md:gap-15 flex-col-reverse md:flex-row">
          {/* Left Content */}
          <div className="flex-1 min-w-[280px] max-w-full md:max-w-[600px] text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Sparkles size={16} className="text-secondary" />
              <span className="text-sm text-text-secondary">Available for opportunities</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-3 leading-tight">
              Hi, I'm{' '}
              <span className="gradient-text">
                Goutham Balaji
              </span>
            </h1>

            {/* Typing Animation */}
            <div className="h-10 md:h-12 mb-5">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                <span className="text-text-secondary">I'm a </span>
                <span className="text-secondary typing-cursor">{displayText}</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-text-muted text-base md:text-lg leading-relaxed mb-8 max-w-[500px] mx-auto md:mx-0">
              Passionate about crafting innovative web solutions with modern technologies.
              I build functional, user-friendly applications that solve real-world problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
              <a
                href="/resume.pdf"
                download="Goutham_Balaji_PS_Resume.pdf"
                className="btn-primary inline-flex items-center gap-2 text-sm"
              >
                <span className="flex items-center gap-2">
                  <Download size={18} />
                  Download Resume
                </span>
              </a>
              <a
                href="#contact"
                className="btn-outline inline-flex items-center gap-2 text-sm"
              >
                <Mail size={18} />
                Get In Touch
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10 justify-center md:justify-start">
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold gradient-text">3+</div>
                <div className="text-text-muted text-sm">Projects</div>
              </div>
              <div className="w-px bg-dark-border"></div>
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold gradient-text">1+</div>
                <div className="text-text-muted text-sm">Years Exp.</div>
              </div>
              <div className="w-px bg-dark-border"></div>
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold gradient-text">9+</div>
                <div className="text-text-muted text-sm">Technologies</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center min-w-[280px]">
            <div className="relative floating">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-30 blur-3xl scale-110"></div>

              {/* Profile Image Container */}
              <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px] rounded-full p-[4px] profile-gradient glow-accent">
                <div className="w-full h-full rounded-full overflow-hidden bg-dark-card">
                  <img
                    src={profileImage}
                    alt="Goutham Balaji P S"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-2 -right-2 w-12 h-12 rounded-xl glass-card flex items-center justify-center pulse-glow">
                <span className="text-2xl">⚛️</span>
              </div>
              <div className="absolute -bottom-2 -left-2 w-12 h-12 rounded-xl glass-card flex items-center justify-center pulse-glow" style={{ animationDelay: '1s' }}>
                <span className="text-2xl">🚀</span>
              </div>
              <div className="absolute top-1/2 -right-6 w-10 h-10 rounded-lg glass-card flex items-center justify-center pulse-glow" style={{ animationDelay: '0.5s' }}>
                <span className="text-xl">💻</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-text-muted">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={20} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
