import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const contactInfo = [
    { icon: Mail, label: 'Email', value: '26gouthamba@gmail.com', href: 'mailto:26gouthamba@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91-8778786208', href: 'tel:+918778786208' },
    { icon: MapPin, label: 'Location', value: 'Coimbatore, Tamil Nadu', href: null },
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/gouthambalajips' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/gouthambalajips' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: 'success', message: 'Message sent successfully!' });
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus({ type: '', message: '' }), 3000);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Get In Touch
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-text-muted text-sm sm:text-base max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="section-card p-4 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-4 sm:mb-6">
                Contact Information
              </h3>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-dark-light border border-dark-border flex items-center justify-center flex-shrink-0">
                      <info.icon size={16} className="text-primary sm:w-[18px] sm:h-[18px]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-text-muted text-xs sm:text-sm">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-text-primary hover:text-primary transition-colors text-sm sm:text-base break-all">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-text-primary text-sm sm:text-base">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-text-muted text-xs sm:text-sm mb-3 sm:mb-4">Follow me on</p>
                <div className="flex gap-2 sm:gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-dark-light border border-dark-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="section-card p-4 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-4 sm:mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label htmlFor="name" className="block text-text-muted text-xs sm:text-sm mb-1.5 sm:mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-dark-light border border-dark-border text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors text-sm sm:text-base"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-text-muted text-xs sm:text-sm mb-1.5 sm:mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-dark-light border border-dark-border text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors text-sm sm:text-base"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-text-muted text-xs sm:text-sm mb-1.5 sm:mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-dark-light border border-dark-border text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors text-sm sm:text-base"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-text-muted text-xs sm:text-sm mb-1.5 sm:mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-dark-light border border-dark-border text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {status.message && (
                  <p className={`text-xs sm:text-sm ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                    {status.message}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg bg-primary text-dark font-semibold hover:bg-primary-light transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
