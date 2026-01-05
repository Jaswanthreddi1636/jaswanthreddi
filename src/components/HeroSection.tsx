import { useEffect, useRef } from 'react';
import { ArrowDown, Download, FolderKanban, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { width, height } = heroRef.current.getBoundingClientRect();
      const x = (clientX / width - 0.5) * 20;
      const y = (clientY / height - 0.5) * 20;
      heroRef.current.style.setProperty('--mouse-x', `${x}px`);
      heroRef.current.style.setProperty('--mouse-y', `${y}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
      style={{ background: 'var(--gradient-hero), hsl(var(--background))' }}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 animate-float"
          style={{
            background: 'hsl(186 100% 50%)',
            top: '10%',
            left: '10%',
            transform: 'translate(var(--mouse-x, 0), var(--mouse-y, 0))',
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full blur-3xl opacity-15 animate-float"
          style={{
            background: 'hsl(270 60% 60%)',
            bottom: '20%',
            right: '10%',
            animationDelay: '-3s',
            transform: 'translate(calc(var(--mouse-x, 0) * -1), calc(var(--mouse-y, 0) * -1))',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8 animate-fade-up opacity-0"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>

          {/* Name */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up opacity-0"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            <span className="text-foreground">Jaswanth Kumar</span>{' '}
            <span className="gradient-text">Reddi</span>
          </h1>

          {/* Title */}
          <div
            className="flex items-center justify-center gap-3 mb-6 animate-fade-up opacity-0"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
            <p className="text-xl md:text-2xl font-mono text-primary">
              Data Analyst | CS Graduate
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
          </div>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up opacity-0"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            B.Tech Computer Science graduate passionate about transforming raw data into
            <span className="text-foreground"> actionable insights</span>. Skilled in
            <span className="text-primary"> Python, SQL, and Tableau</span> to drive
            <span className="text-secondary"> data-driven decisions</span>.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            <button onClick={scrollToProjects} className="btn-primary flex items-center gap-2 group">
              <FolderKanban className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
              View Projects
            </button>
            <a
              href="/JASWANTH_RESUME.pdf"
              download
              className="btn-secondary flex items-center gap-2 group"
            >
              <Download className="w-5 h-5 transition-transform group-hover:translate-y-0.5" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up opacity-0"
          style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
        >
          <button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
