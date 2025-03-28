
import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

type SkillCategory = {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Python", "Scala", "SQL", "Bash", "Java", "JavaScript", "TypeScript", "R"]
  },
  {
    name: "Cloud Services",
    skills: ["AWS EMR", "AWS Glue", "S3", "Athena", "Redshift", "Lambda", "Airflow", "Databricks", "Azure Data Factory", "GCP"]
  },
  {
    name: "Big Data",
    skills: ["Spark", "Airflow", "Palantir Foundry", "NiFi", "Kafka", "Hive", "Hadoop", "GenAI LLMs", "Presto", "Trino"]
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Cassandra", "Redis", "Snowflake"]
  },
  {
    name: "Data Viz",
    skills: ["Tableau", "PowerBI", "Looker", "Grafana", "Kibana", "Metabase"]
  },
  {
    name: "DevOps",
    skills: ["Git", "GitHub", "GitLab", "Jenkins", "GitHub Actions", "Docker", "Kubernetes", "Terraform"]
  }
];

const Skills = () => {
  const categoriesRef = useRef<HTMLDivElement[]>([]);
  
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
    
    categoriesRef.current.forEach(category => {
      if (category) {
        category.classList.add('opacity-0');
        observer.observe(category);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 md:py-32 bg-secondary/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-balance">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-foreground/70 text-balance">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              ref={el => {
                if (el) categoriesRef.current[index] = el;
              }}
              className="glass-panel p-8 transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-medium mb-6 text-gradient">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className={cn(
                      "text-sm font-medium px-3 py-1.5 rounded-full transition-colors",
                      "bg-accent/10 text-foreground hover:bg-accent hover:text-white"
                    )}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
