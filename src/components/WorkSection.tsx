import { Link } from 'react-router-dom';
import { experiences } from '@/data/experience';

interface WorkSectionProps {
  limit?: number;
  showLink?: boolean;
}

const WorkSection = ({ limit, showLink = true }: WorkSectionProps) => {
  const displayExperiences = limit ? experiences.slice(0, limit) : experiences;

  return (
    <section className="animate space-y-6">
      <div className="flex flex-wrap gap-y-2 items-center justify-between">
        <h5 className="font-semibold text-black dark:text-white text-lg">
          Work Experience
        </h5>
        {showLink && (
          <Link to="/work" className="jrzs-link text-sm">
            See all work
          </Link>
        )}
      </div>

      <ul className="flex flex-col space-y-8">
        {displayExperiences.map((exp, index) => (
          <li key={index} className="space-y-1.5">
            <div className="text-sm opacity-75 text-neutral-600 dark:text-neutral-400">
              {exp.period}
            </div>
            <div className="font-semibold text-black dark:text-white text-base">
              {exp.company}
            </div>
            <div className="text-sm opacity-75 text-neutral-600 dark:text-neutral-400">
              {exp.role} • {exp.location}
            </div>
            <article className="pt-2">
              <ul className="list-disc pl-4 space-y-1.5 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WorkSection;
