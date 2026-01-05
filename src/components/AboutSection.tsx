import { useEffect, useRef, useState } from 'react';
import { Brain, LineChart, Target, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'Analytical Thinking',
    description: 'Breaking down complex problems into actionable data-driven solutions',
  },
  {
    icon: Target,
    title: 'Problem Solving',
    description: 'Identifying patterns and anomalies that drive business decisions',
  },
  {
    icon: LineChart,
    title: 'Data Storytelling',
    description: 'Transforming numbers into compelling narratives that resonate',
  },
  {
    icon: Zap,
    title: 'Quick Learner',
    description: 'Adapting rapidly to new tools, technologies, and methodologies',
  },
];

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <section id="about" ref={sectionRef} className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-primary font-mono text-sm mb-3 tracking-wider">01. INTRODUCTION</p>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Curious mind with a passion for uncovering insights hidden in data
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-foreground font-medium">Computer Science student</span> with a deep fascination for data analysis. 
              My journey began with a simple question: <span className="text-primary italic">"What story does this data tell?"</span>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Since then, I've developed a strong foundation in statistical analysis, data visualization, 
              and machine learning fundamentals. I believe that every dataset has a narrative waiting to be discovered, 
              and my role is to bring that narrative to light.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not exploring datasets, you'll find me keeping up with the latest in AI/ML research, 
              contributing to open-source projects, or participating in data science competitions on Kaggle.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              <div>
                <p className="text-3xl font-bold gradient-text">10+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">5+</p>
                <p className="text-sm text-muted-foreground">Certifications</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">2+</p>
                <p className="text-sm text-muted-foreground">Internships</p>
              </div>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`glass-card p-6 rounded-xl group hover:border-primary/30 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
