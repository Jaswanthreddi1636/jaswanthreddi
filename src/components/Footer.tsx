import { Github, Linkedin, Mail, BarChart3 } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/Jaswanthreddi1636' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/jaswanthreddi' },
  { name: 'Kaggle', icon: BarChart3, href: 'https://kaggle.com' },
  { name: 'Email', icon: Mail, href: 'mailto:jaswanthreddy1636@gmail.com' },
];

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-muted/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            <span className="font-bold gradient-text">Jaswanth Kumar Reddi</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-card rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all hover:scale-110"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jaswanth Kumar Reddi. All rights reserved.
          </p>
        </div>

        {/* Bottom Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            Designed & Built with <span className="text-primary">♥</span> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
