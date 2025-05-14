import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  technologies: string[];
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    company: "GoDaddy",
    role: "Senior Data Engineer",
    period: "Oct 2022 – Present",
    location: "Gurgaon, India",
    technologies: ["Python", "PySpark", "Redshift", "EMR", "Airflow", "Github Actions", "Sagemaker"],
    responsibilities: [
      "Leading data platform initiatives for GoDaddyPro analytics and pricing teams",
      "Designed and implemented 12+ high-quality data pipelines with 90% uptime",
      "Processed 500TB+ data using Spark on EMR clusters and EMR Serverless",
      "Developed simulation tools and guardrail mechanisms for pricing optimization",
      "Created org-level observability platform for data pipeline monitoring",
      "Saved $1,000+ monthly through infrastructure optimization",
      "Implemented Infrastructure as Code using AWS Service Catalog"
    ]
  },
  {
    company: "Warner Bros. Discovery",
    role: "Data Engineer",
    period: "Oct 2021 – Oct 2022",
    location: "Gurgaon, India",
    technologies: ["Scala", "Python", "Spark", "Databricks", "Athena", "EMR", "Airflow"],
    responsibilities: [
      "Led EMEA marketing analytics data initiatives",
      "Built data pipelines for reviews, ratings, and viewership analytics",
      "Developed multi-layer Data Lake architecture (bronze, silver, gold)",
      "Created KPIs for reporting and machine learning models",
      "Successfully migrated critical pipelines from AWS to Databricks",
      "Implemented data quality checks and monitoring systems"
    ]
  },
  {
    company: "Impetus Technologies",
    role: "Data Engineer",
    period: "June 2019 – Oct 2021",
    location: "Noida, India",
    technologies: ["Python", "AWS Glue", "Palantir Foundry", "Spark", "SQL", "Airflow"],
    responsibilities: [
      "Built data pipelines for major US airline client",
      "Designed and implemented data signals for flight operations",
      "Led data migration from legacy systems to Palantir Foundry",
      "Implemented CDC and SCD Type 2 logic for data warehousing",
      "Developed automated testing framework reducing validation time by 60%"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Professional Experience</h2>
            <p className="text-foreground/90 text-lg">
              Building and scaling data solutions at industry-leading companies
            </p>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-card shadow-lg border-border">
                  <CardHeader className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl font-bold text-foreground">
                          {exp.company}
                        </CardTitle>
                        <CardDescription className="text-foreground/90 text-base mt-1">
                          {exp.role}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-foreground/90">{exp.period}</div>
                        <div className="text-sm text-foreground/80">{exp.location}</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map(tech => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="bg-primary/10 text-primary hover:bg-primary/20 font-medium"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-foreground/90 list-disc list-inside">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="text-sm leading-relaxed">{resp}</li>
                      ))}
                    </ul>
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

export default Experience; 