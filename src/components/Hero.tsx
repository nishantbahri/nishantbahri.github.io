import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const scrollToExperience = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-20 bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/50" />
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block mb-6 bg-primary/10 px-4 py-2 rounded-full">
            <span className="text-primary font-medium">
              Senior Data Engineer
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Nishant Bahri
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Building scalable data platforms and pipelines with 6+ years of experience in 
            <span className="text-primary font-medium"> cloud technologies</span>, 
            <span className="text-primary font-medium"> big data processing</span>, and
            <span className="text-primary font-medium"> machine learning</span>.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full"
              onClick={scrollToExperience}
            >
              View Experience
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="secondary" 
              size="lg"
              className="rounded-full bg-secondary hover:bg-secondary/80 text-secondary-foreground"
              asChild
            >
              <a 
                href="https://www.linkedin.com/in/nishant-bahri/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            
            <Button 
              variant="secondary" 
              size="lg"
              className="rounded-full bg-secondary hover:bg-secondary/80 text-secondary-foreground"
              asChild
            >
              <a 
                href="https://github.com/nishantbahri" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mx-auto">
            <div className="bg-card rounded-lg p-6 border border-border shadow-lg">
              <h3 className="font-semibold text-lg mb-2 text-foreground">Data Engineering</h3>
              <p className="text-foreground/80">Building robust ETL/ELT pipelines and data platforms</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border shadow-lg">
              <h3 className="font-semibold text-lg mb-2 text-foreground">Cloud Architecture</h3>
              <p className="text-foreground/80">Designing scalable solutions on AWS and Databricks</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border shadow-lg">
              <h3 className="font-semibold text-lg mb-2 text-foreground">Big Data Processing</h3>
              <p className="text-foreground/80">Processing large-scale data with Spark and distributed systems</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
