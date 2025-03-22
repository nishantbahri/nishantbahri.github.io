
import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Layers, Lightbulb, Paintbrush } from 'lucide-react';

const features = [
  {
    title: "Minimal Design",
    description: "Focusing on essential elements to create clear, purposeful experiences that eliminate noise and distraction.",
    icon: <Paintbrush className="h-7 w-7 text-accent" />
  },
  {
    title: "Functional Beauty",
    description: "Every element serves a purpose. Elegant simplicity that elevates both aesthetics and usability.",
    icon: <Lightbulb className="h-7 w-7 text-accent" />
  },
  {
    title: "Precision Detail",
    description: "Crafting with meticulous attention to every pixel and interaction, creating harmony through thoughtful design.",
    icon: <Layers className="h-7 w-7 text-accent" />
  }
];

const Features = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  
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
    
    cardsRef.current.forEach(card => {
      if (card) {
        card.classList.add('opacity-0');
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 md:py-32 bg-secondary/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Core Principles
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-balance">
            Less is more, <span className="text-gradient">more or less</span>
          </h2>
          <p className="text-lg text-foreground/70 text-balance">
            Our approach is guided by the belief that thoughtful reduction creates focus, clarity, and enduring design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              ref={el => {
                if (el) cardsRef.current[index] = el;
              }}
              className={cn(
                "glass-panel p-8 transition-all duration-500",
                "transform hover:translate-y-[-8px] hover:shadow-hover"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="p-4 bg-accent/10 rounded-2xl inline-flex mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
