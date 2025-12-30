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
    <>
      <style>{`
        .contact-section {
          background: #0f0f23;
          padding: 60px 0;
        }
        .contact-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .section-title {
          text-align: center;
          margin-bottom: 40px;
        }
        .section-title h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 16px;
        }
        .title-underline {
          width: 60px;
          height: 4px;
          background: #f5a623;
          margin: 0 auto;
          border-radius: 2px;
        }
        .contact-content {
          display: flex;
          gap: 40px;
          flex-wrap: wrap;
        }
        .contact-info {
          flex: 1;
          min-width: 280px;
        }
        .contact-info h3 {
          font-size: 1.3rem;
          font-weight: 700;
          color: #f5a623;
          margin-bottom: 16px;
        }
        .contact-info > p {
          color: #a0a0b0;
          font-size: 0.95rem;
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
        }
        .contact-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(245, 166, 35, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .contact-icon svg {
          color: #f5a623;
        }
        .contact-label {
          color: #7a7a8c;
          font-size: 0.75rem;
          margin-bottom: 2px;
        }
        .contact-value {
          color: #ffffff;
          font-weight: 500;
          font-size: 0.9rem;
          text-decoration: none;
        }
        .social-links {
          display: flex;
          gap: 12px;
          margin-top: 24px;
          flex-wrap: wrap;
        }
        .social-link {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: 8px;
          border: 1px solid #2a2a45;
          color: #a0a0b0;
          text-decoration: none;
          font-size: 0.85rem;
          transition: all 0.3s;
        }
        .social-link:hover {
          border-color: #f5a623;
          color: #f5a623;
        }
        .contact-form {
          flex: 1;
          min-width: 280px;
        }
        .form-group {
          margin-bottom: 18px;
        }
        .form-label {
          display: block;
          color: #a0a0b0;
          font-size: 0.85rem;
          margin-bottom: 8px;
        }
        .form-input {
          width: 100%;
          padding: 12px 14px;
          border-radius: 8px;
          border: 1px solid #2a2a45;
          background: #1a1a2e;
          color: #ffffff;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.3s;
        }
        .form-input:focus {
          border-color: #f5a623;
        }
        .form-input::placeholder {
          color: #5a5a6c;
        }
        .form-textarea {
          resize: none;
          min-height: 120px;
        }
        .submit-btn {
          width: 100%;
          padding: 14px;
          border-radius: 8px;
          border: none;
          background: #f5a623;
          color: #0f0f23;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
        }
        .submit-btn:hover {
          background: #ffc107;
        }

        @media (min-width: 768px) {
          .contact-section {
            padding: 80px 0;
          }
          .contact-container {
            padding: 0 40px;
          }
          .section-title {
            margin-bottom: 50px;
          }
          .section-title h2 {
            font-size: 2.5rem;
          }
          .contact-content {
            gap: 50px;
          }
          .contact-info h3 {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 767px) {
          .contact-content {
            flex-direction: column;
          }
        }
      `}</style>

      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="section-title">
            <h2>Get In Touch</h2>
            <div className="title-underline"></div>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Work Together</h3>
              <p>
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a project in mind or just want to chat about web development, 
                feel free to reach out!
              </p>

              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="contact-label">Email</p>
                  <a href="mailto:26gouthamba@gmail.com" className="contact-value">
                    26gouthamba@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="contact-label">Mobile</p>
                  <a href="tel:+918778786208" className="contact-value">
                    +91 87787 86208
                  </a>
                </div>
              </div>

              <div className="social-links">
                <a 
                  href="https://github.com/Gouthambalaji03" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/goutham-balaji-p-s-935b9a25b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Name</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  className="form-input form-textarea"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
