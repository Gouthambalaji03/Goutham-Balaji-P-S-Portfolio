import { Download, Mail } from 'lucide-react';
import profileImage from '../assets/profile.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 whitespace-nowrap">
              Hi, I'm <span className="text-primary">Goutham Balaji P S</span>
            </h1>

            <h2 className="text-xl sm:text-2xl text-text-secondary mb-6">
              Full Stack Developer
            </h2>

            <p className="text-text-muted text-base sm:text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Passionate about building innovative web solutions with modern technologies.
              I create functional, user-friendly applications that solve real-world problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col xs:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="/resume.pdf"
                download="Goutham_Balaji_PS_Resume.pdf"
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-primary text-dark font-semibold rounded-lg hover:bg-primary-light transition-colors text-sm sm:text-base"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-dark transition-colors text-sm sm:text-base"
              >
                <Mail size={18} />
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Floating dot top right */}
              <div className="absolute -top-4 -right-4 w-4 h-4 rounded-full bg-primary"></div>

              {/* Floating dot bottom left */}
              <div className="absolute -bottom-4 -left-4 w-4 h-4 rounded-full bg-primary"></div>

              {/* Profile image with gradient border */}
              <div className="relative w-56 h-56 xs:w-64 xs:h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full border-4 border-primary"></div>
                <div className="absolute inset-2 rounded-full overflow-hidden bg-dark">
                  <img
                    src={profileImage}
                    alt="Goutham Balaji P S"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
