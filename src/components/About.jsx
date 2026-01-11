import { Mail, Github, Linkedin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Content - About Text */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-text-secondary leading-relaxed">
              I'm Goutham Balaji P S, a dedicated Full Stack Web Developer specialized in MERN Stack
              (MongoDB, Express.js, React.js, Node.js) with a strong focus on both front-end and back-end
              development. I have a passion for creating dynamic and responsive web applications that
              provide seamless user experiences.
            </p>

            <p className="text-text-secondary leading-relaxed">
              My passion lies in building websites that are not only functional and user-friendly, but
              also visually appealing. I strive to add a personal touch to every project, ensuring that
              each product is eye-catching and intuitive to use.
            </p>
          </div>

          {/* Right Content - Personal Info Card */}
          <div className="lg:col-span-1">
            <div className="bg-dark-card rounded-xl p-6 border border-dark-border">
              <h3 className="text-xl font-semibold text-primary mb-6">
                Personal Info
              </h3>

              {/* Email */}
              <div className="flex items-start gap-3 mb-6">
                <Mail size={20} className="text-primary mt-1" />
                <div>
                  <p className="text-text-muted text-sm">Email</p>
                  <a href="mailto:26gouthamba@gmail.com" className="text-text-primary hover:text-primary transition-colors">
                    26gouthamba@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="flex gap-3">
                <a
                  href="https://github.com/gouthambalajips"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-dark-border text-text-secondary hover:text-primary hover:border-primary transition-colors text-sm font-medium"
                >
                  <Github size={18} />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/gouthambalajips"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-dark-border text-text-secondary hover:text-primary hover:border-primary transition-colors text-sm font-medium"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
