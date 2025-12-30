import { Mail, Github, Linkedin, Phone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-dark py-15 md:py-20">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">About Me</h2>
          <div className="w-15 h-1 bg-accent mx-auto rounded-sm"></div>
        </div>

        <div className="flex gap-8 md:gap-12 flex-wrap flex-col md:flex-row items-center md:items-start">
          <div className="flex-1 min-w-[280px]">
            <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-4">
              I'm <span className="text-text-primary font-semibold">Goutham Balaji P S</span>, a dedicated Full Stack Web Developer
              specialized in <span className="text-accent">MERN Stack</span> (MongoDB, Express.js, React.js, Node.js)
              with a strong focus on both front-end and back-end development. I have a passion for
              creating dynamic and responsive web applications that provide seamless user experiences.
            </p>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
              My passion lies in building websites that are not only functional and user-friendly,
              but also visually appealing. I strive to add a personal touch to every project,
              ensuring that each product is eye-catching and intuitive.
            </p>
          </div>

          <div className="w-full max-w-[320px] md:max-w-[320px] bg-accent rounded-2xl p-6 text-dark shrink-0">
            <h3 className="text-xl font-bold mb-5">Personal Info</h3>

            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 bg-black/10 rounded-md flex items-center justify-center shrink-0">
                <Mail size={16} />
              </div>
              <div>
                <p className="text-xs opacity-70 mb-0.5">Email</p>
                <a href="mailto:26gouthamba@gmail.com" className="font-medium text-sm text-dark">
                  26gouthamba@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 bg-black/10 rounded-md flex items-center justify-center shrink-0">
                <Phone size={16} />
              </div>
              <div>
                <p className="text-xs opacity-70 mb-0.5">Mobile</p>
                <a href="tel:+918778786208" className="font-medium text-sm text-dark">
                  +91 87787 86208
                </a>
              </div>
            </div>

            <div className="flex gap-2.5">
              <a
                href="https://github.com/Gouthambalaji03"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-black/10 rounded-lg font-medium text-sm text-dark transition-colors duration-300 hover:bg-black/20"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/goutham-balaji-p-s-935b9a25b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-black/10 rounded-lg font-medium text-sm text-dark transition-colors duration-300 hover:bg-black/20"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
