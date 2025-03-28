
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Download, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Simple parallax effect on scroll
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const translateY = scrollPosition * 0.3;
      heroRef.current.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-background to-background/50 z-0"></div>
      
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,_#000_1px,_transparent_1px)] bg-[length:20px_20px] pointer-events-none"></div>
      
      {/* Soft glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-soft-glow opacity-30 blur-3xl pointer-events-none"></div>
      
      <div className="container relative z-10 mt-16 stagger-animate-children">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-left max-w-2xl">
            <div className="mb-4 inline-block">
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full">
                Senior Data Engineer
              </span>
            </div>
            
            <h1 ref={heroRef} className="hero-text text-4xl md:text-6xl lg:text-7xl mb-6 text-balance">
              Hi, I'm <span className="text-gradient">Nishant Bahri</span>
              <span className="block mt-3">I build data platforms and pipelines</span>
            </h1>
            
            <p className="text-lg text-foreground/70 mb-8 max-w-lg text-balance">
              With six years of experience in data engineering, I specialize in processing large volumes of data and building robust, scalable data pipelines on cloud platforms to derive key insights.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Button className="button-hover bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg" asChild>
                <Link to="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" className="button-hover rounded-full px-8 py-6 text-lg" asChild>
                <a href="https://drive.google.com/file/d/1P7EHDFlSRzkM9rQd34nYIU4ohchWMNkC/view?usp=sharing" target="_blank" rel="noopener noreferrer" download>
                  <Download className="mr-2 h-5 w-5" />
                  Resume
                </a>
              </Button>
              <Button variant="ghost" className="button-hover rounded-full px-8 py-6 text-lg" asChild>
                <a href="https://www.linkedin.com/in/nishant-bahri/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
          
          <div className="relative aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-full bg-accent/10 blur-2xl transform scale-95 opacity-50"></div>
            <div className="relative glass-panel rounded-full aspect-square w-full overflow-hidden border-4 border-white/30">
              {/* Replace with your profile photo */}
              <div className="w-full h-full flex items-center justify-center bg-accent/20">
                <span className="text-accent font-medium">Your Photo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-pulse-subtle">
        <span className="text-sm text-foreground/60 mb-2">Scroll to explore</span>
        <div className="w-1 h-12 rounded-full relative">
          <div className="absolute top-0 left-0 w-full h-5 bg-accent/60 rounded-full animate-float"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-accent/10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
