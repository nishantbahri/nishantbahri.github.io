import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';

interface ProjectsSectionProps {
  limit?: number;
  showLink?: boolean;
}

const ProjectsSection = ({ limit, showLink = true }: ProjectsSectionProps) => {
  const displayProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="animate space-y-6">
      <div className="flex flex-wrap gap-y-2 items-center justify-between">
        <h5 className="font-semibold text-black dark:text-white text-lg">
          Key Initiatives & Projects
        </h5>
        {showLink && (
          <Link to="/projects" className="jrzs-link text-sm">
            See all projects
          </Link>
        )}
      </div>

      <ul className="flex flex-col space-y-6">
        {displayProjects.map((project, index) => (
          <li key={index} className="space-y-1.5">
            <div className="font-semibold text-black dark:text-white text-base">
              {project.title}
            </div>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {project.description}
            </p>
            {project.tags && project.tags.length > 0 && (
              <div className="text-xs text-neutral-500 dark:text-neutral-400 font-mono pt-0.5">
                {project.tags.join('  /  ')}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
