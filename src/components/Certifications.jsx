import { Award, Users } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="bg-dark py-15 md:py-20">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Certifications & Leadership</h2>
          <div className="w-15 h-1 bg-accent mx-auto rounded-sm"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {/* Certifications */}
          <div>
            <h3 className="flex items-center gap-3 text-xl md:text-2xl font-bold text-text-primary mb-5">
              <Award size={28} className="text-accent" />
              Certifications
            </h3>
            <div className="flex flex-col gap-4">
              <div className="bg-dark-card border border-dark-border rounded-xl p-5 transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                <h4 className="text-base font-semibold text-text-primary mb-1.5">Machine Learning with Python</h4>
                <p className="text-accent text-sm">Cognitive Class</p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-xl p-5 transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                <h4 className="text-base font-semibold text-text-primary mb-1.5">Python for Data Science</h4>
                <p className="text-accent text-sm">Cognitive Class</p>
              </div>
            </div>
          </div>

          {/* Leadership */}
          <div>
            <h3 className="flex items-center gap-3 text-xl md:text-2xl font-bold text-text-primary mb-5">
              <Users size={28} className="text-accent" />
              Leadership
            </h3>
            <div className="flex flex-col gap-4">
              <div className="bg-dark-card border border-dark-border rounded-xl p-5 transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                  <h4 className="text-base font-semibold text-text-primary">SPAC Secretary</h4>
                  <span className="text-xs text-text-muted font-mono">Jul 2024 - Apr 2025</span>
                </div>
                <p className="text-accent text-sm mb-2">Srishti</p>
                <p className="text-text-secondary text-sm">Conducted technical symposium with 2,500+ participants.</p>
              </div>

              <div className="bg-dark-card border border-dark-border rounded-xl p-5 transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                  <h4 className="text-base font-semibold text-text-primary">Joint Secretary</h4>
                  <span className="text-xs text-text-muted font-mono">Jul 2023 - Apr 2024</span>
                </div>
                <p className="text-accent text-sm mb-2">Biomedical Association</p>
                <p className="text-text-secondary text-sm">Organized student events and workshops.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
