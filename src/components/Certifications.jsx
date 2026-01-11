import { Award, Users } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Machine Learning with Python',
      issuer: 'Cognitive Class'
    },
    {
      title: 'Python for Data Science',
      issuer: 'Cognitive Class'
    }
  ];

  const leadership = [
    {
      title: 'SPAC Secretary',
      organization: 'Srishti',
      period: 'Jul 2024 - Apr 2025',
      description: 'Conducted technical symposium with 2,500+ participants.'
    },
    {
      title: 'Joint Secretary',
      organization: 'Biomedical Association',
      period: 'Jul 2023 - Apr 2024',
      description: 'Organized student events and workshops.'
    }
  ];

  return (
    <section id="certifications" className="py-12 px-4 sm:px-8">
      <div className="section-card p-6 sm:p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8">
          Certifications & Leadership
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Certifications */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Award size={18} className="text-primary" />
              <h3 className="text-lg font-semibold text-text-primary">Certifications</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-dark-light border border-dark-border"
                >
                  <h4 className="font-medium text-text-primary mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-primary text-sm">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Users size={18} className="text-primary" />
              <h3 className="text-lg font-semibold text-text-primary">Leadership</h3>
            </div>
            <div className="space-y-3">
              {leadership.map((role, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-dark-light border border-dark-border"
                >
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-text-primary">
                      {role.title}
                    </h4>
                    <span className="text-text-muted text-xs">{role.period}</span>
                  </div>
                  <p className="text-primary text-sm mb-1">{role.organization}</p>
                  <p className="text-text-muted text-sm">{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
