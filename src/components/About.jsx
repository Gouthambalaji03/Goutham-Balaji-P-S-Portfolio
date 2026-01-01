import { Mail, Github, Linkedin, Phone, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-secondary text-sm font-semibold tracking-wider uppercase mb-3 block">
            Get to know me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-5">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="flex gap-8 sm:gap-10 lg:gap-14 flex-wrap flex-col lg:flex-row items-center lg:items-start">
          {/* Left Content - Text */}
          <div className="flex-1 min-w-0 w-full lg:max-w-[600px]">
            <div className="glass-card rounded-2xl p-5 sm:p-6 md:p-8 mb-5 sm:mb-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary mb-3 sm:mb-4">
                Passionate about building the <span className="gradient-text">future of web</span>
              </h3>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                I'm <span className="text-text-primary font-semibold">Goutham Balaji P S</span>, a dedicated Full Stack Web Developer
                specialized in <span className="text-secondary font-medium">MERN Stack</span> (MongoDB, Express.js, React.js, Node.js)
                with a strong focus on both front-end and back-end development.
              </p>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                My passion lies in building websites that are not only functional and user-friendly,
                but also visually appealing. I strive to add a personal touch to every project,
                ensuring that each product is eye-catching and intuitive.
              </p>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="glass-card rounded-xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-secondary sm:w-[18px] sm:h-[18px]" />
                </div>
                <div className="min-w-0">
                  <p className="text-text-muted text-[10px] sm:text-xs">Location</p>
                  <p className="text-text-primary text-xs sm:text-sm font-medium truncate">Tamil Nadu, India</p>
                </div>
              </div>
              <div className="glass-card rounded-xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0">
                  <Calendar size={16} className="text-secondary sm:w-[18px] sm:h-[18px]" />
                </div>
                <div className="min-w-0">
                  <p className="text-text-muted text-[10px] sm:text-xs">Experience</p>
                  <p className="text-text-primary text-xs sm:text-sm font-medium">1+ Years</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Card */}
          <div className="w-full max-w-[380px] lg:max-w-[360px] xl:max-w-[380px] shrink-0">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-20 blur-3xl rounded-3xl hidden sm:block"></div>

              {/* Card */}
              <div className="relative glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-primary/20">
                {/* Card Header */}
                <div className="text-center mb-5 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl">👋</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-text-primary">Let's Connect!</h3>
                  <p className="text-text-muted text-xs sm:text-sm mt-1">I'm always open to new opportunities</p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
                  <a href="mailto:26gouthamba@gmail.com" className="flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-xl bg-dark-light/50 hover:bg-dark-light transition-all duration-300 group">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                      <Mail size={16} className="text-secondary sm:w-[18px] sm:h-[18px]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-text-muted text-[10px] sm:text-xs">Email</p>
                      <p className="text-text-primary text-xs sm:text-sm font-medium truncate">26gouthamba@gmail.com</p>
                    </div>
                  </a>

                  <a href="tel:+918778786208" className="flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-xl bg-dark-light/50 hover:bg-dark-light transition-all duration-300 group">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                      <Phone size={16} className="text-secondary sm:w-[18px] sm:h-[18px]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-text-muted text-[10px] sm:text-xs">Phone</p>
                      <p className="text-text-primary text-xs sm:text-sm font-medium">+91 87787 86208</p>
                    </div>
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex gap-2 sm:gap-3">
                  <a
                    href="https://github.com/Gouthambalaji03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 rounded-xl bg-dark-light hover:bg-gradient-to-r hover:from-primary hover:to-secondary text-text-secondary hover:text-dark font-medium text-xs sm:text-sm transition-all duration-300"
                  >
                    <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                    <span className="hidden xs:inline">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/goutham-balaji-p-s-935b9a25b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 rounded-xl bg-dark-light hover:bg-gradient-to-r hover:from-primary hover:to-secondary text-text-secondary hover:text-dark font-medium text-xs sm:text-sm transition-all duration-300"
                  >
                    <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
                    <span className="hidden xs:inline">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
