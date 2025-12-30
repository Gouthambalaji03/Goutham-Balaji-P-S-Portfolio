import { Download, Mail } from 'lucide-react';
import profileImage from '../assets/profile.png';

const Hero = () => {
  return (
    <section id="home" className="bg-dark min-h-screen flex items-center pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Dots */}
      <div className="absolute w-4 h-4 rounded-full bg-accent top-[18%] right-[12%]"></div>
      <div className="absolute w-3 h-3 rounded-full bg-accent bottom-[28%] right-[32%]"></div>

      <div className="max-w-[1200px] mx-auto px-5 md:px-10 w-full">
        <div className="flex items-center justify-between flex-wrap gap-10 md:gap-15 flex-col-reverse md:flex-row">
          {/* Left Content */}
          <div className="flex-1 min-w-[280px] max-w-full md:max-w-[550px] text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-2 leading-tight">
              Hi, I'm <span className="text-accent">Goutham Balaji P S</span>
            </h1>
            <h2 className="text-base md:text-xl text-text-secondary font-medium mb-4 md:mb-5">
              Full Stack Web Developer
            </h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-6 md:mb-8">
              Passionate about building innovative web solutions with modern technologies.
              I create functional, user-friendly applications that solve real-world problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-3 flex-wrap justify-center md:justify-start">
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 px-5 md:px-6 py-3 rounded-md font-semibold text-sm bg-accent text-dark transition-all duration-300 hover:bg-accent-hover"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 md:px-6 py-3 rounded-md font-semibold text-sm border-2 border-accent text-accent bg-transparent transition-all duration-300 hover:bg-accent/10"
              >
                <Mail size={18} />
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center min-w-[280px]">
            <div className="relative">
              <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[340px] lg:h-[340px] rounded-full p-[5px] profile-gradient">
                <div className="w-full h-full rounded-full overflow-hidden bg-dark-card">
                  <img
                    src={profileImage}
                    alt="Goutham Balaji P S"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="absolute w-4 md:w-5 h-4 md:h-5 rounded-full bg-accent top-[5px] -right-[5px] md:-right-[10px]"></div>
              <div className="absolute w-3 md:w-4 h-3 md:h-4 rounded-full bg-accent bottom-10 -left-[15px] md:-left-5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
