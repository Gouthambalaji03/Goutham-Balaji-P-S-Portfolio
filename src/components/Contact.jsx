import { useState } from 'react';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:26gouthamba@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="bg-dark py-15 md:py-20">
      <div className="max-w-[1100px] mx-auto px-5 md:px-10">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Get In Touch</h2>
          <div className="w-15 h-1 bg-accent mx-auto rounded-sm"></div>
        </div>

        <div className="flex gap-10 md:gap-12 flex-wrap flex-col md:flex-row">
          <div className="flex-1 min-w-[280px]">
            <h3 className="text-xl md:text-2xl font-bold text-accent mb-4">Let's Work Together</h3>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6">
              I'm always interested in new opportunities and exciting projects.
              Whether you have a project in mind or just want to chat about web development,
              feel free to reach out!
            </p>

            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-text-muted text-xs mb-0.5">Email</p>
                <a href="mailto:26gouthamba@gmail.com" className="text-text-primary font-medium text-sm">
                  26gouthamba@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-text-muted text-xs mb-0.5">Mobile</p>
                <a href="tel:+918778786208" className="text-text-primary font-medium text-sm">
                  +91 87787 86208
                </a>
              </div>
            </div>

            <div className="flex gap-3 mt-6 flex-wrap">
              <a
                href="https://github.com/Gouthambalaji03"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-dark-border text-text-secondary text-sm transition-all duration-300 hover:border-accent hover:text-accent"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/goutham-balaji-p-s-935b9a25b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-dark-border text-text-secondary text-sm transition-all duration-300 hover:border-accent hover:text-accent"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>

          <form className="flex-1 min-w-[280px]" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-text-secondary text-sm mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-3.5 py-3 rounded-lg border border-dark-border bg-dark-card text-text-primary text-sm outline-none transition-colors duration-300 focus:border-accent placeholder:text-text-muted/60"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-text-secondary text-sm mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full px-3.5 py-3 rounded-lg border border-dark-border bg-dark-card text-text-primary text-sm outline-none transition-colors duration-300 focus:border-accent placeholder:text-text-muted/60"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-text-secondary text-sm mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                className="w-full px-3.5 py-3 rounded-lg border border-dark-border bg-dark-card text-text-primary text-sm outline-none transition-colors duration-300 focus:border-accent placeholder:text-text-muted/60 resize-none min-h-[120px]"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-lg border-none bg-accent text-dark text-base font-semibold cursor-pointer transition-colors duration-300 hover:bg-accent-hover"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
