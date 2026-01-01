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

        <div className="flex gap-10 md:gap-14 flex-wrap flex-col lg:flex-row items-center lg:items-start">
          {/* Left Content - Text */}
          <div className="flex-1 min-w-[280px] max-w-[600px]">
            <div className="glass-card rounded-2xl p-6 md:p-8 mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-4">
                Passionate about building the <span className="gradient-text">future of web</span>
              </h3>
              <p className="text-text-secondary text-base leading-relaxed mb-4">
                I'm <span className="text-text-primary font-semibold">Goutham Balaji P S</span>, a dedicated Full Stack Web Developer
                specialized in <span className="text-secondary font-medium">MERN Stack</span> (MongoDB, Express.js, React.js, Node.js)
                with a strong focus on both front-end and back-end development.
              </p>
              <p className="text-text-secondary text-base leading-relaxed">
                My passion lies in building websites that are not only functional and user-friendly,
                but also visually appealing. I strive to add a personal touch to every project,
                ensuring that each product is eye-catching and intuitive.
              </p>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <MapPin size={18} className="text-secondary" />
                </div>
                <div>
                  <p className="text-text-muted text-xs">Location</p>
                  <p className="text-text-primary text-sm font-medium">Tamil Nadu, India</p>
                </div>
              </div>
              <div className="glass-card rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Calendar size={18} className="text-secondary" />
                </div>
                <div>
                  <p className="text-text-muted text-xs">Experience</p>
                  <p className="text-text-primary text-sm font-medium">1+ Years</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Card */}
          <div className="w-full max-w-[380px] shrink-0">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-20 blur-3xl rounded-3xl"></div>

              {/* Card */}
              <div className="relative glass-card rounded-3xl p-6 md:p-8 border border-primary/20">
                {/* Card Header */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-3xl">👋</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">Let's Connect!</h3>
                  <p className="text-text-muted text-sm mt-1">I'm always open to new opportunities</p>
                </div>

                {/* Contact Info */}
                <div className="space-y-4 mb-6">
                  <a href="mailto:26gouthamba@gmail.com" className="flex items-center gap-4 p-3 rounded-xl bg-dark-light/50 hover:bg-dark-light transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail size={18} className="text-secondary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-text-muted text-xs">Email</p>
                      <p className="text-text-primary text-sm font-medium truncate">26gouthamba@gmail.com</p>
                    </div>
                  </a>

                  <a href="tel:+918778786208" className="flex items-center gap-4 p-3 rounded-xl bg-dark-light/50 hover:bg-dark-light transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone size={18} className="text-secondary" />
                    </div>
                    <div>
                      <p className="text-text-muted text-xs">Phone</p>
                      <p className="text-text-primary text-sm font-medium">+91 87787 86208</p>
                    </div>
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex gap-3">
                  <a
                    href="https://github.com/Gouthambalaji03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-dark-light hover:bg-gradient-to-r hover:from-primary hover:to-secondary text-text-secondary hover:text-white font-medium text-sm transition-all duration-300"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/goutham-balaji-p-s-935b9a25b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-dark-light hover:bg-gradient-to-r hover:from-primary hover:to-secondary text-text-secondary hover:text-white font-medium text-sm transition-all duration-300"
                  >
                    <Linkedin size={18} />
                    LinkedIn
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
