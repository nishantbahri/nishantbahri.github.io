
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Skills from '@/components/Skills';
import { Button } from '@/components/ui/button';
import { Download, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  useEffect(() => {
    // Reset scroll position on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32">
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                About Me
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 text-balance">
                My <span className="text-gradient">Journey</span>
              </h1>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-2">
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-accent/10 blur-2xl transform translate-x-4 translate-y-4 opacity-50"></div>
                  <div className="glass-panel aspect-[3/4] relative overflow-hidden rounded-2xl">
                    {/* Coding cat image */}
                    <img 
                      src="https://images.unsplash.com/photo-1582562124811-c09040d0a901" 
                      alt="Coding Cat" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3">
                <h2 className="text-3xl font-medium mb-6">I'm <span className="text-gradient">Nishant Bahri</span>, a Senior Data Engineer</h2>
                
                <div className="space-y-6 text-foreground/70">
                  <p>
                    With six years of experience in data engineering, I specialize in processing huge volumes of data and building robust, scalable data pipelines (ETL/ELT) on cloud platforms to derive key insights.
                  </p>
                  <p>
                    I've developed crucial reliable datasets for downstream teams (Analysts/Data Scientists) and have contributed to data platforms and common data utilities helping teams across organizations.
                  </p>
                  <p>
                    My expertise spans across AWS cloud services (EMR, Glue, S3, Athena, Redshift, Lambda), Databricks, and big data technologies like Spark, Airflow, Kafka, and Hive. I'm currently exploring GenAI LLMs for feature extraction and data enrichment.
                  </p>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button className="button-hover bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6" asChild>
                    <a href="https://drive.google.com/file/d/17PoZGNn5BfmQoye96zQPRlk0xEfrVzRY/view?usp=drive_link" target="_blank" rel="noopener noreferrer" download>
                      <Download className="mr-2 h-5 w-5" />
                      Download Resume
                    </a>
                  </Button>
                  <Button variant="outline" className="button-hover rounded-full px-8 py-6" asChild>
                    <Link to="/contact">
                      <Mail className="mr-2 h-5 w-5" />
                      Contact Me
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container">
            <div className="glass-panel p-10 md:p-12">
              <h2 className="text-3xl font-medium mb-8 text-center">Work Experience</h2>
              
              <div className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6">
                  <div>
                    <h3 className="text-xl font-medium">Senior Data Engineer</h3>
                    <p className="text-accent">GoDaddy</p>
                    <p className="text-sm text-foreground/60">Oct 2022 - Present</p>
                  </div>
                  <div>
                    <p className="mb-4">Working with the GoDaddyPro analytics and pricing teams to set up value-based pricing campaigns, feature extraction, and KPIs for reporting.</p>
                    <ul className="list-disc pl-5 space-y-2 text-foreground/70">
                      <li>Designed and implemented high-quality, end-to-end data pipelines on AWS cloud platform</li>
                      <li>Owned 12+ data pipelines on Airflow with 90% uptime, processing over 500TB of data</li>
                      <li>Experimented with GenAI LLMs for feature extraction and data enrichment</li>
                      <li>Developed an org-level observability platform for all data pipeline performance and costing</li>
                      <li>Created value-based pricing models for GoDaddy Pro platform services</li>
                      <li>Built robust monitoring and alerting systems for data quality assurance</li>
                      <li>Implemented data governance policies and procedures for compliance</li>
                    </ul>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6">
                  <div>
                    <h3 className="text-xl font-medium">Data Engineer</h3>
                    <p className="text-accent">Warner Bros. Discovery</p>
                    <p className="text-sm text-foreground/60">Oct 2021 - Oct 2022</p>
                  </div>
                  <div>
                    <p className="mb-4">Part of the EMEA marketing analytics team. Developed data pipelines that efficiently fetched reviews, ratings, and viewership data.</p>
                    <ul className="list-disc pl-5 space-y-2 text-foreground/70">
                      <li>Developed different layers (bronze, silver, and gold) of the Data Lake</li>
                      <li>Created scalable pipelines for marketing, reviews, ratings, and linear and OTT data</li>
                      <li>Transformed raw data using Spark Scala/SQL and ingested it into Athena and Delta tables</li>
                      <li>Successfully migrated data pipelines from AWS to Databricks</li>
                      <li>Optimized slow-running data transformations, reducing processing time by 40%</li>
                      <li>Implemented delta processing for large datasets to reduce computational costs</li>
                      <li>Developed automated testing framework for data pipeline validation</li>
                    </ul>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6">
                  <div>
                    <h3 className="text-xl font-medium">Data Engineer</h3>
                    <p className="text-accent">Impetus Technologies</p>
                    <p className="text-sm text-foreground/60">June 2019 - Oct 2021</p>
                  </div>
                  <div>
                    <p className="mb-4">Worked with a major US airline client to create various data signals consumed by the flight onboard team and developed structured streaming pipelines for baggage data.</p>
                    <ul className="list-disc pl-5 space-y-2 text-foreground/70">
                      <li>Designed and implemented data ingestion pipelines on Palantir Foundry and AWS cloud platform</li>
                      <li>Migrated large data volume tables from SQL Server and Teradata to Palantir Foundry</li>
                      <li>Implemented CDC and SCD Type 2 logic, along with validation logic across data pipelines</li>
                      <li>Developed testing framework that reduced validation time for data migration projects</li>
                      <li>Created real-time alerting system for baggage handling operations</li>
                      <li>Built data lineage tracking for regulatory compliance requirements</li>
                      <li>Implemented data quality checks that reduced error rates by 35%</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Skills />
        
        <section className="py-16">
          <div className="container">
            <div className="glass-panel p-10 md:p-12">
              <h2 className="text-3xl font-medium mb-8 text-center">Education</h2>
              
              <div className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6">
                  <div>
                    <h3 className="text-xl font-medium">Technical Skills</h3>
                    <p className="text-accent">Core Competencies</p>
                  </div>
                  <div>
                    <ul className="list-disc pl-5 space-y-2 text-foreground/70">
                      <li><strong>Languages:</strong> Python, Scala, SQL, Bash, Java, JavaScript</li>
                      <li><strong>Cloud Services:</strong> AWS (EMR, EMR Serverless, Glue, S3, Athena, Redshift, Lambda, Airflow, Opensearch), Databricks, Azure Data Factory, Google Cloud Platform</li>
                      <li><strong>Big Data Stack:</strong> Spark, Airflow, Palantir Foundry, NiFi, Kafka, Hive, Hadoop, GenAI LLMs, Presto/Trino</li>
                      <li><strong>Databases:</strong> PostgreSQL, MySQL, MongoDB, DynamoDB, Cassandra, Redis</li>
                      <li><strong>Data Visualization:</strong> Tableau, PowerBI, Looker, Grafana</li>
                      <li><strong>ML/AI:</strong> Scikit-learn, TensorFlow, Keras, PyTorch, Hugging Face Transformers</li>
                      <li><strong>CI/CD:</strong> Jenkins, GitHub Actions, GitLab CI, Azure DevOps</li>
                      <li><strong>Containerization:</strong> Docker, Kubernetes, AWS ECS/EKS</li>
                      <li><strong>Version Control:</strong> Git, GitHub, GitLab, Bitbucket</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
