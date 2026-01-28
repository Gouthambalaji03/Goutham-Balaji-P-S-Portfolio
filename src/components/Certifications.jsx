import { Award, ExternalLink, Users } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Full Stack Web Development with AI Tools',
      issuer: 'IIT Madras Pravartak and Guvi HCL',
      icon: Award,
      link: 'https://drive.google.com/file/d/1oe1ZtzbxC1bF1dHggksUEXU_CkEQGpzx/view?usp=sharing'
    },
    {
      title: 'SPAC Secretary',
      issuer: 'PSG College of Technology | 2023 - 2024',
      description: 'Led team of 15 members to plan and run tech events for 2,500+ students. Worked with speakers, sponsors, and student groups to deliver programs on time.',
      icon: Users,
      link: null
    }
  ];

  return (
    <section id="certifications" className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Achievements
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="section-card p-4 sm:p-6 w-full sm:w-auto sm:min-w-[300px] sm:max-w-[400px]">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-dark-light border border-dark-border flex items-center justify-center">
                  <cert.icon size={16} className="text-primary sm:w-[18px] sm:h-[18px]" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-text-primary">
                  {cert.title}
                </h3>
              </div>
              <p className="text-text-muted text-sm mb-2">
                {cert.issuer}
              </p>
              {cert.description && (
                <p className="text-text-secondary text-xs mb-4">
                  {cert.description}
                </p>
              )}
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors text-sm font-medium"
                >
                  <ExternalLink size={14} />
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
