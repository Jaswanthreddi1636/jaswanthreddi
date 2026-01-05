import { useEffect, useRef, useState } from 'react';
import { Download, FileText, Award, Briefcase, GraduationCap, BookOpen } from 'lucide-react';

const education = [
  {
    type: 'education',
    title: 'B.Tech in Computer Science',
    company: 'Lovely Professional University',
    period: '2020 - 2024',
    description: 'CGPA: 6.55. Coursework: DSA, OOP, Computer Networks, DBMS, Operating Systems',
  },
  {
    type: 'education',
    title: 'Higher Secondary Education',
    company: 'Narayana Junior College, Vizag',
    period: '2018 - 2020',
    description: 'Score: 84.4%. Focus on Mathematics and Science.',
  },
];

const certifications = [
  {
    name: 'Java Full Stack Development',
    provider: 'Hit Bullseye',
    date: 'Nov 2023',
  },
  {
    name: 'Data Structures and Algorithms',
    provider: 'GeeksforGeeks',
    date: 'Jun 2022',
  },
  {
    name: 'Data Visualization',
    provider: 'Coursera',
    date: 'Aug 2023',
  },
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
            My educational journey and qualifications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              Education
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-6">
                {education.map((item, index) => (
                  <div key={index} className="relative pl-12">
                    {/* Timeline dot */}
                    <div className="absolute left-2 top-1 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />

                    <div className="glass-card p-5 rounded-xl">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-foreground">{item.title}</h4>
                          <p className="text-sm text-primary">{item.company}</p>
                        </div>
                        <GraduationCap className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{item.period}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Relevant Coursework */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-primary" />
                Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'Computer Networks', 'Operating Systems'].map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 text-sm glass-card rounded-full text-muted-foreground"
                  >
                    {course}
                  </span>
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
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-foreground font-medium group-hover:text-primary transition-colors">
                      {cert.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {cert.provider} • {cert.date}
                    </p>
                  </div>
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
                href="/JASWANTH_RESUME.pdf"
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
