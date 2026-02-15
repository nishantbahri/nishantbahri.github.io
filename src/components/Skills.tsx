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
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Technical Skills</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
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
                <Card className="h-full glass-card border-none hover:bg-white/10 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map(skill => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5 transition-all"
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
