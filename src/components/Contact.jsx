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
    // Form submission logic here
    setStatus({ type: 'success', message: 'Message sent successfully!' });
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus({ type: '', message: '' }), 3000);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="section-card p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-text-primary mb-6">
                Contact Information
              </h3>

              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-dark-light border border-dark-border flex items-center justify-center flex-shrink-0">
                      <info.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-text-muted text-sm">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-text-primary hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-text-primary">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-text-muted text-sm mb-4">Follow me on</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-dark-light border border-dark-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="section-card p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-text-primary mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-text-muted text-sm mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-dark-light border border-dark-border text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-text-muted text-sm mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-dark-light border border-dark-border text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-text-muted text-sm mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-light border border-dark-border text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-text-muted text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-dark-light border border-dark-border text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {status.message && (
                  <p className={`text-sm ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                    {status.message}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg bg-primary text-dark font-semibold hover:bg-primary-light transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={18} />
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
