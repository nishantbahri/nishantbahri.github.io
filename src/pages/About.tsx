
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
                  <Button className="bg-primary text-white rounded-full px-8 py-6" asChild>
                    <a href="https://drive.google.com/file/d/1QA4K-CmWLUm7U_Sq6yiCXl6hq19ORX1p/view" target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-5 w-5" />
                      View Resume
                    </a>
                  </Button>
                  <Button variant="outline" className="rounded-full px-8 py-6" asChild>
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
                    <p className="text-accent">Zalando</p>
                    <p className="text-sm text-foreground/60">Aug 2024 - Present</p>
                  </div>
                  <div>
                    <p className="mb-4">Leading data engineering initiatives for analytics and data platform use cases in fashion e-commerce.</p>
                    <ul className="list-disc pl-5 space-y-2 text-foreground/70">
                      <li>Built and scaled analytics data pipelines using Python, Spark, and Databricks</li>
                      <li>Improved platform reliability with SLA ownership, data quality checks, and monitoring</li>
                      <li>Collaborated with analytics and product teams to deliver trusted datasets faster</li>
                      <li>Drove performance and cost improvements across orchestration and compute workloads</li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6">
                  <div>
                    <h3 className="text-xl font-medium">Senior Data Engineer</h3>
                    <p className="text-accent">GoDaddy</p>
                    <p className="text-sm text-foreground/60">Oct 2022 - Jul 2024</p>
                  </div>
                  <div>
                    <p className="mb-4">Worked with GoDaddyPro analytics and pricing teams to support value-based pricing and reporting KPIs.</p>
                    <ul className="list-disc pl-5 space-y-2 text-foreground/70">
                      <li>Designed and implemented 12+ production data pipelines</li>
                      <li>Processed 500TB+ data using Spark on EMR and EMR Serverless</li>
                      <li>Developed simulation tools and guardrails for pricing optimization</li>
                      <li>Built an org-level observability platform for pipeline monitoring and cost visibility</li>
                      <li>Saved $1,000+ per month through infrastructure optimization</li>
                      <li>Implemented Infrastructure as Code using AWS Service Catalog</li>
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
                    <p className="mb-4">Part of the EMEA marketing analytics team, building scalable pipelines for reviews, ratings, and viewership data.</p>
                    <ul className="list-disc pl-5 space-y-2 text-foreground/70">
                      <li>Developed bronze, silver, and gold layers in the data lake</li>
                      <li>Built scalable pipelines for marketing and OTT analytics data</li>
                      <li>Transformed raw data with Spark Scala/SQL and delivered Athena and Delta datasets</li>
                      <li>Migrated critical data pipelines from AWS to Databricks</li>
                      <li>Implemented data quality checks and monitoring for production stability</li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6">
                  <div>
                    <h3 className="text-xl font-medium">Data Engineer</h3>
                    <p className="text-accent">Impetus Technologies</p>
                    <p className="text-sm text-foreground/60">Jun 2019 - Oct 2021</p>
                  </div>
                  <div>
                    <p className="mb-4">Worked with a major US airline client to build data signals and migration workflows for operational analytics.</p>
                    <ul className="list-disc pl-5 space-y-2 text-foreground/70">
                      <li>Built ingestion and transformation pipelines on AWS and Palantir Foundry</li>
                      <li>Migrated legacy datasets from SQL Server and Teradata to modern data platforms</li>
                      <li>Implemented CDC and SCD Type 2 logic for warehouse-style history tracking</li>
                      <li>Created automated validation checks that reduced migration verification effort</li>
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
                      <li><strong>Containerization:</strong> Docker, AWS ECS/EKS</li>
                      <li><strong>Transformation:</strong> dbt</li>
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
