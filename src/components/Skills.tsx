import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Database, Cloud, Cpu, GitBranch } from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  description: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Languages & Core",
    icon: <Database className="h-6 w-6" />,
    description: "Primary programming languages and database technologies",
    skills: ["Python", "Scala", "SQL", "PySpark"]
  },
  {
    name: "Cloud & Infrastructure",
    icon: <Cloud className="h-6 w-6" />,
    description: "Cloud platforms and services expertise",
    skills: [
      "AWS EMR",
      "EMR Serverless",
      "AWS Glue",
      "S3",
      "Athena",
      "Redshift",
      "Lambda",
      "Airflow",
      "Opensearch",
      "Databricks"
    ]
  },
  {
    name: "Big Data & Processing",
    icon: <Cpu className="h-6 w-6" />,
    description: "Large-scale data processing technologies",
    skills: [
      "Apache Spark",
      "Apache Airflow",
      "Palantir Foundry",
      "Apache NiFi",
      "Apache Kafka",
      "Apache Hive",
      "Hadoop",
      "GenAI LLMs"
    ]
  },
  {
    name: "DevOps & Tools",
    icon: <GitBranch className="h-6 w-6" />,
    description: "Development and deployment tools",
    skills: [
      "Jenkins",
      "GitHub Actions",
      "Docker",
      "Git",
      "Infrastructure as Code"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Technical Skills</h2>
            <p className="text-foreground/70 text-lg">
              Technologies and tools I use to build scalable data solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-primary">
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {category.name}
                        </h3>
                        <p className="text-sm text-foreground/70">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map(skill => (
                        <Badge 
                          key={skill} 
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
