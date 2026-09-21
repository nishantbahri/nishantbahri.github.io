const skillCategories = [
  {
    name: "Languages",
    skills: ["Python", "PySpark", "Scala", "SQL", "Bash", "JavaScript"]
  },
  {
    name: "Cloud Platform (AWS & Cloud)",
    skills: ["EMR / EMR Serverless", "AWS Glue", "S3", "Athena", "Redshift", "Databricks", "Lambda"]
  },
  {
    name: "Big Data & Engineering Stack",
    skills: ["Apache Spark", "Apache Airflow", "Palantir Foundry", "dbt", "Delta Lake", "Kafka", "Data Quality Guardrails"]
  },
  {
    name: "Databases & Storage",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "OpenSearch", "CloudWatch"]
  },
  {
    name: "Platform & DevOps",
    skills: ["Git", "GitHub Actions", "Docker", "Terraform", "Jenkins", "GenAI LLMs"]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="animate space-y-6">
      <div className="flex flex-wrap gap-y-2 items-center justify-between">
        <h5 className="font-semibold text-black dark:text-white text-lg">
          Skills & Technologies
        </h5>
      </div>

      <div className="space-y-5">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="space-y-1">
            <div className="text-sm font-semibold text-black dark:text-white">
              {cat.name}
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {cat.skills.join('  /  ')}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
