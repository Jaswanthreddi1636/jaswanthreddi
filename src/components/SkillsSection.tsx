import { useEffect, useRef, useState } from 'react';
import { Database, FileSpreadsheet, BarChart2, Code2, Sparkles, TrendingUp } from 'lucide-react';

const skills = [
  {
    name: 'SQL',
    level: 90,
    icon: Database,
    description: 'Complex queries, optimization, database design',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    name: 'Python',
    level: 85,
    icon: Code2,
    description: 'Pandas, NumPy, Matplotlib, Scikit-learn',
    color: 'from-blue-400 to-purple-500',
  },
  {
    name: 'Excel',
    level: 88,
    icon: FileSpreadsheet,
    description: 'Advanced formulas, pivot tables, VBA macros',
    color: 'from-green-400 to-cyan-500',
  },
  {
    name: 'Power BI',
    level: 82,
    icon: BarChart2,
    description: 'Interactive dashboards, DAX, data modeling',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    name: 'Data Visualization',
    level: 87,
    icon: TrendingUp,
    description: 'Storytelling through charts and infographics',
    color: 'from-purple-400 to-pink-500',
  },
  {
    name: 'Statistics',
    level: 80,
    icon: Sparkles,
    description: 'Hypothesis testing, regression, probability',
    color: 'from-pink-400 to-red-500',
  },
];

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState<number[]>(skills.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedLevels((prev) => {
                const newLevels = [...prev];
                newLevels[index] = skill.level;
                return newLevels;
              });
            }, index * 150);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 md:py-32 relative bg-muted/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-primary font-mono text-sm mb-3 tracking-wider">02. EXPERTISE</p>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subtitle">
            Tools and technologies I use to turn data into insights
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`glass-card p-6 rounded-xl group hover:border-primary/30 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <skill.icon className="w-5 h-5 text-background" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{skill.name}</h3>
                    <p className="text-xs text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
                <span className="text-lg font-bold gradient-text">{animatedLevels[index]}%</span>
              </div>

              {/* Skill Bar */}
              <div className="skill-bar">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${animatedLevels[index]}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-muted-foreground mb-4">Also experienced with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Git', 'Jupyter', 'Tableau', 'R', 'MongoDB', 'APIs', 'Machine Learning', 'A/B Testing'].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 glass-card rounded-full text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
