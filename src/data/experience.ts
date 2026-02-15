export interface Experience {
    company: string;
    role: string;
    period: string;
    location: string;
    technologies: string[];
    responsibilities: string[];
}

export const experiences: Experience[] = [
    {
        company: "Zalando",
        role: "Senior Data Engineer",
        period: "Aug 2024 – Present",
        location: "Berlin, Germany",
        technologies: ["Python", "PySpark", "Databricks", "Airflow", "AWS", "dbt"],
        responsibilities: [
            "Designing and scaling analytics data pipelines for fashion e-commerce decision-making",
            "Improving reliability with proactive data quality checks, alerting, and SLA ownership",
            "Partnering with product, analytics, and engineering teams to ship trusted datasets faster",
            "Driving platform performance and cost improvements across Spark and orchestration workloads"
        ]
    },
    {
        company: "GoDaddy",
        role: "Senior Data Engineer",
        period: "Oct 2022 – Jul 2024",
        location: "Gurgaon, India",
        technologies: ["Python", "PySpark", "Redshift", "EMR", "Airflow", "GitHub Actions", "SageMaker"],
        responsibilities: [
            "Leading data platform initiatives for GoDaddyPro analytics and pricing teams",
            "Designed and implemented 12+ production-grade data pipelines",
            "Processed 500TB+ of data on EMR and EMR Serverless using Spark",
            "Developed simulation tools and guardrail mechanisms for pricing optimization",
            "Built an org-level observability layer for data pipeline health and cost monitoring",
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
            "Built and maintained data pipelines for a major US airline client",
            "Designed and implemented data signals for flight operations",
            "Led data migration from legacy systems to Palantir Foundry",
            "Implemented CDC and SCD Type 2 logic for data warehousing",
            "Developed automated testing framework reducing validation time by 60%"
        ]
    }
];
