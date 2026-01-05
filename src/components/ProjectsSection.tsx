import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Sales Analytics Dashboard',
    problem: 'A retail company struggled to identify sales trends and customer behavior patterns across 100K+ transactions.',
    tools: ['Python', 'Power BI', 'SQL', 'Pandas'],
    insights: [
      'Increased conversion rate by 23% through targeted recommendations',
      'Identified top 20% products driving 80% of revenue',
      'Reduced inventory costs by 15% via demand forecasting',
    ],
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 2,
    title: 'Customer Churn Prediction Model',
    problem: 'Telecom company losing 15% customers annually without understanding the underlying causes.',
    tools: ['Python', 'Scikit-learn', 'Excel', 'Matplotlib'],
    insights: [
      'Built ML model with 87% prediction accuracy',
      'Identified 5 key factors contributing to churn',
      'Proposed retention strategies saving $2M annually',
    ],
    color: 'from-purple-500 to-pink-600',
  },
  {
    id: 3,
    title: 'COVID-19 Impact Analysis',
    problem: 'Healthcare organization needed to understand pandemic trends for resource allocation.',
    tools: ['SQL', 'Tableau', 'Python', 'Statistics'],
    insights: [
      'Created real-time dashboard tracking 50+ metrics',
      'Predicted hospital bed requirements with 92% accuracy',
      'Enabled 30% better resource distribution',
    ],
    color: 'from-green-500 to-teal-600',
  },
  {
    id: 4,
    title: 'Financial Portfolio Optimizer',
    problem: 'Investment firm needed data-driven approach to balance risk and returns across diverse assets.',
    tools: ['Python', 'NumPy', 'Pandas', 'Monte Carlo'],
    insights: [
      'Optimized portfolio allocation reducing risk by 18%',
      'Backtested strategies across 10 years of market data',
      'Automated daily performance reports for stakeholders',
    ],
    color: 'from-orange-500 to-red-600',
  },
];

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-primary font-mono text-sm mb-3 tracking-wider">03. PORTFOLIO</p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Real-world data challenges I've tackled and the impact I've made
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`glass-card rounded-2xl overflow-hidden group transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />

              <div className="p-6 md:p-8">
                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Problem Statement */}
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground font-medium mb-1">Problem</p>
                  <p className="text-muted-foreground">{project.problem}</p>
                </div>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Key Insights */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    hoveredProject === project.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 md:max-h-48 md:opacity-100'
                  }`}
                >
                  <p className="text-sm text-muted-foreground font-medium mb-2">Key Insights</p>
                  <ul className="space-y-2">
                    {project.insights.map((insight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-6 pt-4 border-t border-border">
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-4 h-4" />
                    View Code
                  </button>
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
