export interface Project {
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Pricing Analytics Platform",
    description: "Built reliable data products for pricing analytics with automated quality guardrails and SLA-based monitoring. Improved trust in downstream metrics used by executive product and analytics teams.",
    tags: ["Python", "PySpark", "Airflow", "AWS", "Redshift"],
    featured: true
  },
  {
    title: "Modern Data Lakehouse Migration",
    description: "Led migration from legacy data warehouse patterns to a scalable lakehouse architecture using Spark and Delta tables. Simplified ingestion workflows, improved querying performance, and reduced operational infrastructure costs.",
    tags: ["Databricks", "Delta Lake", "Spark", "Airflow", "AWS"],
    featured: true
  },
  {
    title: "Pipeline Observability Framework",
    description: "Developed a centralized observability layer for batch pipelines covering execution health, data freshness, failure diagnostics, and cost signals. Significantly reduced incident response time for production data failures.",
    tags: ["Airflow", "Python", "OpenSearch", "CloudWatch", "Data Quality"],
    featured: true
  },
  {
    title: "Data Migration Validation Toolkit",
    description: "Implemented a reusable validation toolkit for large-scale dataset migrations featuring CDC and SCD Type 2 reconciliation checks. Automated verification reports, cutting manual validation effort by 60%.",
    tags: ["Python", "SQL", "CDC", "SCD Type 2", "Palantir Foundry"],
    featured: true
  }
];
