import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="space-y-6">
      <div className="animate inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/10 text-xs font-mono text-neutral-600 dark:text-neutral-400">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span>Data Engineer @ Zalando • Berlin</span>
      </div>

      <h1 className="animate font-semibold text-2xl md:text-3xl text-black dark:text-white">
        Hi, I'm Nishant.
      </h1>

      <article className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
        <p className="animate">
          I'm a Data Engineer based in Berlin, currently building and scaling analytics data pipelines and data platform infrastructure at{' '}
          <a
            href="https://www.zalando.com"
            target="_blank"
            rel="noopener noreferrer"
            className="jrzs-link"
          >
            Zalando
          </a>
          .
        </p>
        <p className="animate">
          I'm passionate about distributed data systems, pipeline observability, and cloud architecture—building reliable datasets and scalable platform utilities that power high-stakes analytics and decision making.
        </p>
        <p className="animate">
          I enjoy designing end-to-end data architectures, from PySpark engine optimization and orchestration workloads to automated data quality guardrails. Key initiatives include{' '}
          <Link to="/projects" className="jrzs-link">
            Pricing Analytics Platform
          </Link>
          ,{' '}
          <Link to="/projects" className="jrzs-link">
            Modern Data Lakehouse Migration
          </Link>
          , and{' '}
          <Link to="/projects" className="jrzs-link">
            Pipeline Observability Framework
          </Link>
          .
        </p>
      </article>
    </section>
  );
};

export default Hero;
