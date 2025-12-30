import { Award, Users } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="flex items-center text-3xl font-bold text-slate-100 mb-12">
          <span className="text-cyan-400 mr-2">05.</span> Certifications & Leadership
          <span className="ml-4 h-px bg-slate-700 flex-grow max-w-xs"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <h3 className="flex items-center text-2xl font-bold text-slate-200 mb-6">
              <Award className="text-cyan-400 mr-3" size={28} /> Certifications
            </h3>
            <div className="space-y-4">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-400/30 transition-colors">
                <h4 className="text-lg font-semibold text-slate-100">Machine Learning with Python</h4>
                <p className="text-cyan-400 text-sm">Cognitive Class</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-400/30 transition-colors">
                <h4 className="text-lg font-semibold text-slate-100">Python for Data Science</h4>
                <p className="text-cyan-400 text-sm">Cognitive Class</p>
              </div>
            </div>
          </div>

          {/* Leadership */}
          <div>
            <h3 className="flex items-center text-2xl font-bold text-slate-200 mb-6">
              <Users className="text-cyan-400 mr-3" size={28} /> Leadership
            </h3>
            <div className="space-y-6">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-400/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-slate-100">SPAC Secretary</h4>
                  <span className="text-xs text-slate-400 font-mono">Jul 2024 - Apr 2025</span>
                </div>
                <p className="text-cyan-400 text-sm mb-2">Srishti</p>
                <p className="text-slate-400 text-sm">Conducted technical symposium with 2,500+ participants.</p>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-400/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-slate-100">Joint Secretary</h4>
                  <span className="text-xs text-slate-400 font-mono">Jul 2023 - Apr 2024</span>
                </div>
                <p className="text-cyan-400 text-sm mb-2">Biomedical Association</p>
                <p className="text-slate-400 text-sm">Organized student events and workshops.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
