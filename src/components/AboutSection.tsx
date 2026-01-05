import { useEffect, useRef, useState } from 'react';
import { Brain, LineChart, Target, Zap, Trophy, Code2 } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'Analytical Thinking',
    description: 'Breaking down complex datasets into actionable insights and business solutions',
  },
  {
    icon: Target,
    title: 'Problem Solving',
    description: '250+ coding problems solved across platforms like LeetCode and GeeksforGeeks',
  },
  {
    icon: LineChart,
    title: 'Data Storytelling',
    description: 'Transforming numbers into compelling visualizations using Tableau and Python',
  },
  {
    icon: Zap,
    title: 'Quick Learner',
    description: 'Rapidly adapting to new tools like XGBoost, Scikit-learn, and RPA technologies',
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
              I'm <span className="text-foreground font-medium">Jaswanth Kumar Reddi</span>, a B.Tech Computer Science graduate from 
              Lovely Professional University with a deep fascination for data analysis. 
              My journey began with a simple question: <span className="text-primary italic">"What story does this data tell?"</span>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With hands-on experience in Python, SQL, and advanced Excel, I've developed expertise in 
              data cleaning, visualization, and machine learning. I've worked on projects analyzing 40,000+ 
              retail transactions and building ML models with 97% accuracy.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about transforming complex datasets into actionable business insights. 
              My coursework in DSA, OOP, and DBMS complements my practical skills in Tableau, 
              Pandas, NumPy, and Scikit-learn.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              <div>
                <p className="text-3xl font-bold gradient-text">3+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">250+</p>
                <p className="text-sm text-muted-foreground">Problems Solved</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">97%</p>
                <p className="text-sm text-muted-foreground">ML Accuracy</p>
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

        {/* Achievements Banner */}
        <div className={`mt-16 glass-card p-6 rounded-xl transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-3">
              <Trophy className="w-6 h-6 text-yellow-500" />
              <div className="text-left">
                <p className="text-foreground font-medium">3rd Place</p>
                <p className="text-xs text-muted-foreground">Winter Notch'22 Coding Contest</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Code2 className="w-6 h-6 text-primary" />
              <div className="text-left">
                <p className="text-foreground font-medium">250+ Problems</p>
                <p className="text-xs text-muted-foreground">LeetCode & GeeksforGeeks</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Trophy className="w-6 h-6 text-yellow-500" />
              <div className="text-left">
                <p className="text-foreground font-medium">Gold Medal</p>
                <p className="text-xs text-muted-foreground">Maths Olympiad 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
