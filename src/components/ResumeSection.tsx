import { useEffect, useRef, useState } from 'react';
import { Download, FileText, Award, Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Data Analytics Intern',
    company: 'TechCorp Solutions',
    period: 'Jun 2024 - Present',
    description: 'Analyzing customer data to drive product decisions and improve user experience.',
  },
  {
    type: 'work',
    title: 'Business Intelligence Intern',
    company: 'DataDriven Inc.',
    period: 'Jan 2024 - May 2024',
    description: 'Built automated reporting dashboards and performed ad-hoc analysis for stakeholders.',
  },
  {
    type: 'education',
    title: 'B.S. Computer Science',
    company: 'State University',
    period: '2021 - 2025',
    description: 'Focus on Data Science, Statistics, and Machine Learning. GPA: 3.8/4.0',
  },
];

const certifications = [
  'Google Data Analytics Professional Certificate',
  'Microsoft Power BI Data Analyst',
  'IBM Data Science Specialization',
  'SQL for Data Science (Coursera)',
  'Python for Data Analysis (DataCamp)',
];

const ResumeSection = () => {
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
    <section id="resume" ref={sectionRef} className="py-24 md:py-32 relative bg-muted/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-primary font-mono text-sm mb-3 tracking-wider">04. EXPERIENCE</p>
          <h2 className="section-title">
            Resume & <span className="gradient-text">Credentials</span>
          </h2>
          <p className="section-subtitle">
            My professional journey and qualifications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-primary" />
              Experience & Education
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-12">
                    {/* Timeline dot */}
                    <div className="absolute left-2 top-1 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />

                    <div className="glass-card p-5 rounded-xl">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-foreground">{exp.title}</h4>
                          <p className="text-sm text-primary">{exp.company}</p>
                        </div>
                        {exp.type === 'education' ? (
                          <GraduationCap className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <Briefcase className="w-5 h-5 text-muted-foreground" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{exp.period}</p>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications & Download */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Certifications
            </h3>

            <div className="space-y-3 mb-8">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="glass-card p-4 rounded-xl flex items-center gap-3 group hover:border-primary/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {cert}
                  </p>
                </div>
              ))}
            </div>

            {/* Download Resume Card */}
            <div className="glass-card p-8 rounded-2xl text-center gradient-border glow-effect animate-glow-pulse">
              <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-foreground mb-2">
                Want to know more?
              </h4>
              <p className="text-muted-foreground mb-6">
                Download my complete resume for a detailed overview of my experience, skills, and achievements.
              </p>
              <a
                href="/resume.pdf"
                download
                className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
