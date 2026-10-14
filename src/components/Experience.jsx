import { Briefcase, Calendar, MapPin, Building2, CheckCircle2, Sparkles } from 'lucide-react';

const experiences = [
  {
    role: 'AI Engineer Intern',
    company: 'CarDekho',
    parentCompany: 'Girnar Software Pvt Ltd',
    location: 'Remote',
    period: 'July 2026 – Present',
    current: true,
    summary:
      'Working on core GenAI initiatives and intelligent automotive assistants, focusing on autonomous agent workflows, cost optimization, and conversational quality assurance.',
    highlights: [
      'Developed AutoBot, an enterprise GenAI POC assistant for automotive queries using Pydantic AI, Gemini, FastAPI, and PostgreSQL.',
      'Implemented dynamic intent classification, parameterised tool calling, SSE streaming, and automated Pytest-based testing suites.',
      'Analyzed and tested chatbot responses for the CarDekho and BikeDekho chatbots, reviewing conversation logs to identify, triage, and document response-quality issues.'
    ],
    tech: [
      'Python',
      'Pydantic AI',
      'Gemini API',
      'FastAPI',
      'PostgreSQL',
      'SSE Streaming',
      'Pytest',
      'Docker'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Experience
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Timeline / Experience Container */}
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="section-card p-6 sm:p-8 relative overflow-hidden transition-all duration-300 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/5 group"
            >
              {/* Subtle gradient accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-light to-primary" />

              {/* Header row: Role, Company & Meta */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-2">
                    <span className="p-2 rounded-lg bg-dark-light border border-dark-border text-primary group-hover:border-primary/50 transition-colors">
                      <Briefcase size={20} />
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Current
                      </span>
                    )}
                  </div>

                  {/* Company Name */}
                  <div className="flex items-center gap-2 text-text-secondary font-medium text-base sm:text-lg">
                    <Building2 size={16} className="text-primary flex-shrink-0" />
                    <span>{exp.company}</span>
                    {exp.parentCompany && (
                      <span className="text-text-muted text-sm font-normal">
                        ({exp.parentCompany})
                      </span>
                    )}
                  </div>
                </div>

                {/* Period & Location Pills */}
                <div className="flex flex-wrap md:flex-col md:items-end gap-2 text-xs sm:text-sm text-text-muted">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-dark-light border border-dark-border">
                    <Calendar size={14} className="text-primary" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-dark-light border border-dark-border">
                    <MapPin size={14} className="text-primary" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Role Context Summary */}
              {exp.summary && (
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-5">
                  {exp.summary}
                </p>
              )}

              {/* Responsibilities & Achievements */}
              <div className="mb-6">
                <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-text-muted mb-3 flex items-center gap-2">
                  <Sparkles size={14} className="text-primary" />
                  Key Contributions & Impact
                </h4>
                <ul className="space-y-2.5">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary leading-relaxed">
                      <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Tags */}
              <div className="pt-4 border-t border-dark-border/60">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="text-xs text-text-muted mr-1 font-medium">Stack:</span>
                  {exp.tech.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-dark-light border border-dark-border text-primary hover:border-primary/60 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
