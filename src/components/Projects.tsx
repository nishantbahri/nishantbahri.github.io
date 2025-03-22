
import { useRef, useEffect } from 'react';
import { ArrowUpRight, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// Work experience timeline
const experiences = [
  {
    company: "GoDaddy",
    role: "Senior Data Engineer",
    period: "Oct 2022 – Present",
    location: "Gurgaon, India",
    stack: ["Python", "PySpark", "AWS EMR", "EMR Serverless", "Redshift", "Airflow", "Git", "GitHub Actions", "GenAI LLMs"],
    description: "Working with GoDaddyPro analytics and pricing teams to implement value-based pricing, feature extraction, and KPIs. Built end-to-end data pipelines on AWS, managed 12+ data workflows, and processed over 500TB of data using Spark."
  },
  {
    company: "Warner Bros. Discovery",
    role: "Data Engineer",
    period: "Oct 2021 – Oct 2022",
    location: "Gurgaon, India",
    stack: ["Scala", "Python", "Spark", "Databricks", "AWS Athena", "EMR", "Airflow", "Git", "GitHub Actions"],
    description: "Developed data pipelines for EMEA marketing analytics to fetch reviews, ratings, and viewership data. Created multi-layered data lake architecture and KPIs for reporting and ML models."
  },
  {
    company: "Impetus Technologies",
    role: "Data Engineer",
    period: "June 2019 – Oct 2021",
    location: "Noida, India",
    stack: ["Python", "AWS Glue", "Palantir Foundry", "Bash", "Spark", "SQL", "Airflow", "Git", "Jenkins"],
    description: "Worked with a major US airline client to create data signals for flight onboard teams and developed streaming pipelines for baggage data. Implemented CDC and SCD Type 2 logic for data migration projects."
  }
];

const Projects = () => {
  const experiencesRef = useRef<HTMLDivElement[]>([]);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in', 'opacity-100');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    experiencesRef.current.forEach(exp => {
      if (exp) {
        exp.classList.add('opacity-0');
        observer.observe(exp);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 md:py-32" id="experience">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Professional Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-balance">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-foreground/70 text-balance">
            Five years of experience building robust data pipelines and platforms across various industries.
          </p>
        </div>

        <div className="space-y-12 relative">
          {/* Timeline connector */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/20 transform md:-translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index}
              ref={el => {
                if (el) experiencesRef.current[index] = el;
              }}
              className={cn(
                "relative transition-all duration-500",
                index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:ml-auto",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-10 w-5 h-5 bg-accent rounded-full transform md:-translate-x-1/2 border-4 border-background"></div>
              
              <div className={cn(
                "glass-panel p-8 md:max-w-[calc(50%-2rem)]",
                "transform hover:translate-y-[-8px] hover:shadow-hover transition-all duration-300",
                index % 2 === 0 ? "ml-8 md:ml-auto" : "ml-8 md:mr-auto"
              )}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-medium">{exp.role}</h3>
                    <p className="text-accent">{exp.company}</p>
                  </div>
                  <span className="text-sm text-foreground/60 whitespace-nowrap">{exp.period}</span>
                </div>
                
                <p className="text-foreground/70 mb-4">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs font-medium px-2 py-1 bg-accent/10 text-accent rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button className="button-hover bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg" asChild>
            <a href="https://www.linkedin.com/in/nishant-bahri/" target="_blank" rel="noopener noreferrer">
              View LinkedIn Profile
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
