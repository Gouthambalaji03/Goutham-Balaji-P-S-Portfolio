import { Code, Layout, Database, Cloud, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Python']
    },
    {
      title: 'Frontend',
      icon: Layout,
      skills: ['React', 'Redux', 'Next.js', 'Tailwind CSS', 'Responsive Design']
    },
    {
      title: 'Backend',
      icon: Database,
      skills: ['Node.js', 'Express', 'REST APIs', 'JWT Auth', 'Microservices', 'Apache Kafka']
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['MongoDB', 'MySQL']
    },
    {
      title: 'DevOps',
      icon: Cloud,
      skills: ['Docker', 'Git', 'GitHub Actions', 'CI/CD', 'Vercel', 'AWS basics']
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: ['Problem Solving', 'Teamwork', 'Communication', 'Leadership', 'Agile']
    }
  ];

  return (
    <section id="skills" className="py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-12 text-center">
          Tech Stack
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="section-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-dark-light border border-dark-border flex items-center justify-center">
                  <category.icon size={18} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 text-sm rounded-lg bg-dark-light border border-dark-border text-text-secondary hover:text-primary hover:border-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
