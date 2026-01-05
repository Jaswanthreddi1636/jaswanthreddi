import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Retail Sales & Customer Insights Analysis',
    period: 'Feb 2024 - Apr 2024',
    problem: 'Analyzed 40,000+ retail transactions to identify sales trends, customer behavior patterns, and regional performance variations.',
    tools: ['Python', 'Pandas', 'NumPy', 'SQL', 'Tableau', 'Excel'],
    insights: [
      'Identified high-value customer segments for targeted marketing',
      'Analyzed monthly sales growth and regional performance trends',
      'Created interactive dashboards for business stakeholders',
      'Delivered actionable insights for inventory optimization',
    ],
    color: 'from-cyan-500 to-blue-600',
    github: 'https://github.com/Jaswanthreddi1636',
  },
  {
    id: 2,
    title: 'Mobile Classification System using ML',
    period: 'Aug 2023 - Nov 2023',
    problem: 'Built a recommendation system to classify mobile phones based on user budget and preferences using machine learning algorithms.',
    tools: ['Python', 'XGBoost', 'Pandas', 'Scikit-learn'],
    insights: [
      'Achieved 97% classification accuracy with XGBoost model',
      'Trained and evaluated multiple ML classification models',
      'Implemented feature engineering for optimal model performance',
      'Created user-friendly budget-based recommendation system',
    ],
    color: 'from-purple-500 to-pink-600',
    github: 'https://github.com/Jaswanthreddi1636',
  },
  {
    id: 3,
    title: 'House Rent Prediction Analysis',
    period: '2022 - 2023',
    problem: 'Analyzed house rent patterns across major Indian cities using Kaggle dataset to understand pricing trends and factors.',
    tools: ['Python', 'Seaborn', 'Matplotlib', 'Pandas', 'EDA'],
    insights: [
      'Performed comprehensive exploratory data analysis (EDA)',
      'Created insightful visualizations for price trend analysis',
      'Identified key factors affecting rental prices across cities',
      'Applied statistical methods for data-driven conclusions',
    ],
    color: 'from-green-500 to-teal-600',
    github: 'https://github.com/Jaswanthreddi1636',
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
        <div className="grid lg:grid-cols-3 gap-6">
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

              <div className="p-6">
                {/* Period Badge */}
                <span className="text-xs font-mono text-primary mb-2 inline-block">{project.period}</span>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Problem Statement */}
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground font-medium mb-1">Problem</p>
                  <p className="text-sm text-muted-foreground">{project.problem}</p>
                </div>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Key Insights */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    hoveredProject === project.id ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 lg:max-h-64 lg:opacity-100'
                  }`}
                >
                  <p className="text-sm text-muted-foreground font-medium mb-2">Key Insights</p>
                  <ul className="space-y-1">
                    {project.insights.map((insight, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <ChevronRight className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                        <span>{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-4 pt-4 border-t border-border">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
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
