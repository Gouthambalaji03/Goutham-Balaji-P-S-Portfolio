import { Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="bg-dark py-15 md:py-20">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Experience</h2>
          <div className="w-15 h-1 bg-accent mx-auto rounded-sm"></div>
        </div>

        <div className="relative max-w-[800px] mx-auto pl-8 md:pl-10">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-dark-border"></div>

          {/* Timeline item */}
          <div className="relative mb-8">
            {/* Timeline dot */}
            <div className="absolute -left-8 md:-left-10 top-1.5 w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_rgba(245,166,35,0.5)]"></div>

            <div className="bg-dark-card border border-dark-border rounded-xl p-6 transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-text-primary">Intern Software Engineer</h3>
                  <p className="text-accent font-medium text-sm md:text-base">
                    Zucus Technologies Private Limited <span className="text-text-muted text-sm">(Remote)</span>
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-text-muted text-sm">
                  <Calendar size={14} className="text-accent" />
                  Jun 2025 – Present
                </div>
              </div>

              <ul className="list-none p-0 m-0 mb-5">
                <li className="relative pl-5 text-text-secondary text-sm leading-relaxed mb-2">
                  <span className="absolute left-0 text-accent">▹</span>
                  Built salon booking app with React.js for service selection and stylist booking.
                </li>
                <li className="relative pl-5 text-text-secondary text-sm leading-relaxed mb-2">
                  <span className="absolute left-0 text-accent">▹</span>
                  Created booking calendar with SMS confirmation system.
                </li>
                <li className="relative pl-5 text-text-secondary text-sm leading-relaxed">
                  <span className="absolute left-0 text-accent">▹</span>
                  Developed admin panel for booking/payment management.
                </li>
              </ul>

              <div className="flex flex-wrap gap-2">
                {['React.js', 'TypeScript', 'Next.js', 'MongoDB', 'Node.js', 'Express.js'].map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-xs border border-accent/30 text-accent bg-accent/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
