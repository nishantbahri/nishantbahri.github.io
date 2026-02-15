
export interface Project {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    github?: string;
    image?: string;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        title: "Pricing Analytics Platform",
        description: "Built reliable data products for pricing analytics with automated quality guardrails and SLA-based monitoring. Improved trust in downstream metrics used by product and analytics teams.",
        tags: ["Python", "PySpark", "Airflow", "AWS", "Redshift"],
        github: "https://github.com/nishantbahri",
        featured: true
    },
    {
        title: "Modern Data Lakehouse Migration",
        description: "Led migration from legacy warehouse patterns to a scalable lakehouse architecture using Spark and Delta tables. Simplified ingestion, improved performance, and reduced operational complexity.",
        tags: ["Databricks", "Delta Lake", "Spark", "Airflow", "AWS"],
        featured: true
    },
    {
        title: "Pipeline Observability Framework",
        description: "Developed a centralized observability layer for batch pipelines covering run health, freshness, failure diagnostics, and cost signals. Reduced incident response time for data failures.",
        tags: ["Airflow", "Python", "OpenSearch", "CloudWatch", "Data Quality"],
        featured: true
    },
    {
        title: "Data Migration Validation Toolkit",
        description: "Implemented a reusable validation toolkit for large-scale dataset migrations with CDC/SCD checks and reconciliation reports. Reduced manual validation effort during migration programs.",
        tags: ["Python", "SQL", "CDC", "SCD Type 2", "Palantir Foundry"],
        github: "https://github.com/nishantbahri"
    }
];
