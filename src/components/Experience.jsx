import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="flex items-center text-3xl font-bold text-slate-100 mb-12">
          <span className="text-cyan-400 mr-2">03.</span> Experience
          <span className="ml-4 h-px bg-slate-700 flex-grow max-w-xs"></span>
        </h2>

        <div className="relative border-l border-slate-700 ml-3 md:ml-6 space-y-12">
          {/* Experience Item */}
          <div className="relative pl-8 md:pl-12">
            {/* Dot */}
            <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
            
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-400/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-100">Intern Software Engineer</h3>
                  <p className="text-cyan-400 font-medium">Zucus Technologies Private Limited <span className="text-slate-500 text-sm">(Remote)</span></p>
                </div>
                <div className="flex items-center text-slate-400 text-sm mt-2 md:mt-0">
                  <Calendar size={14} className="mr-1" /> Jun 2025 – Present
                </div>
              </div>

              <ul className="list-disc list-outside ml-4 space-y-2 text-slate-400 mb-6 marker:text-cyan-400">
                <li>Built salon booking app with React.js for service selection and stylist booking.</li>
                <li>Created booking calendar with SMS confirmation system.</li>
                <li>Developed admin panel for booking/payment management.</li>
              </ul>

              <div className="flex flex-wrap gap-2">
                {['React.js', 'TypeScript', 'Next.js', 'MongoDB', 'Node.js', 'Express.js'].map((tech, index) => (
                  <span key={index} className="px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-400/10 rounded-full">
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
