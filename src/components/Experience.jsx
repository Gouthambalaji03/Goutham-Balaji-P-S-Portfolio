const Experience = () => {
  const experiences = [
    {
      company: 'Zucus Technologies',
      role: 'Intern Software Engineer',
      period: 'Jun 2025 - Present',
      location: 'Remote',
      description: [
        'Built salon booking app with React.js for service selection and stylist booking',
        'Created booking calendar with SMS confirmation system',
        'Developed admin panel for booking/payment management'
      ],
      current: true
    }
  ];

  return (
    <section id="experience" className="py-12 px-4 sm:px-8">
      <div className="section-card p-6 sm:p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8">
          Experience
        </h2>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-primary">
                    {exp.company}
                  </h3>
                  <p className="text-text-primary font-medium">
                    {exp.role}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-text-secondary text-sm">
                    {exp.period}
                  </p>
                  <p className="text-text-muted text-sm italic">
                    {exp.location}
                  </p>
                </div>
              </div>

              {/* Description */}
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-secondary text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
