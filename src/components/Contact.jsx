import { useState, useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, Phone, Send, MapPin } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: '26gouthamba@gmail.com',
      href: 'mailto:26gouthamba@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 87787 86208',
      href: 'tel:+918778786208'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tamil Nadu, India',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Gouthambalaji03'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/goutham-balaji-p-s-935b9a25b'
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-16 sm:py-20 md:py-28 relative">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-5 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-secondary text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2 sm:mb-3 block">
            Get in Touch
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 sm:mb-5">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <div className="section-divider"></div>
          <p className="text-text-secondary text-sm sm:text-base mt-5 sm:mt-6 max-w-xl mx-auto px-2 sm:px-0">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="flex gap-8 sm:gap-10 lg:gap-14 flex-wrap flex-col lg:flex-row">
          {/* Contact Info */}
          <div
            className="flex-1 min-w-0 w-full"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <div className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 mb-5 sm:mb-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary mb-2">
                Let's create something <span className="gradient-text">amazing</span>
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm md:text-base leading-relaxed mb-5 sm:mb-6">
                I'm always interested in new opportunities and exciting projects.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              {/* Contact Details */}
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-dark-light/50 transition-all duration-300 ${item.href ? 'hover:bg-dark-light cursor-pointer' : ''} group`}
                    onClick={() => item.href && (window.location.href = item.href)}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                      <item.icon size={18} className="text-secondary sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-text-muted text-[10px] sm:text-xs">{item.label}</p>
                      <p className="text-text-primary font-medium text-xs sm:text-sm truncate">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-2 sm:gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <social.icon size={18} className="sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="flex-1 min-w-0 w-full"
            onSubmit={handleSubmit}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}
          >
            <div className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
              {/* Name Field */}
              <div className="mb-4 sm:mb-5">
                <label className={`block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 transition-colors duration-300 ${focusedField === 'name' ? 'text-secondary' : 'text-text-secondary'}`}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Your name"
                  className="w-full px-3 sm:px-4 py-3 sm:py-3.5 rounded-lg sm:rounded-xl border border-dark-border bg-dark-light/50 text-text-primary text-xs sm:text-sm outline-none input-glow placeholder:text-text-muted/50"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="mb-4 sm:mb-5">
                <label className={`block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 transition-colors duration-300 ${focusedField === 'email' ? 'text-secondary' : 'text-text-secondary'}`}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="your.email@example.com"
                  className="w-full px-3 sm:px-4 py-3 sm:py-3.5 rounded-lg sm:rounded-xl border border-dark-border bg-dark-light/50 text-text-primary text-xs sm:text-sm outline-none input-glow placeholder:text-text-muted/50"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="mb-5 sm:mb-6">
                <label className={`block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 transition-colors duration-300 ${focusedField === 'message' ? 'text-secondary' : 'text-text-secondary'}`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Tell me about your project..."
                  className="w-full px-3 sm:px-4 py-3 sm:py-3.5 rounded-lg sm:rounded-xl border border-dark-border bg-dark-light/50 text-text-primary text-xs sm:text-sm outline-none input-glow placeholder:text-text-muted/50 resize-none min-h-[120px] sm:min-h-[140px]"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-dark bg-gradient-to-r from-primary to-secondary hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 group text-sm sm:text-base"
              >
                <span>Send Message</span>
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 sm:w-[18px] sm:h-[18px]" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
