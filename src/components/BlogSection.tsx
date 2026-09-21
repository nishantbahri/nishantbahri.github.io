import { Link } from 'react-router-dom';
import { posts } from '@/data/posts';

interface BlogSectionProps {
  limit?: number;
  showLink?: boolean;
}

const BlogSection = ({ limit, showLink = true }: BlogSectionProps) => {
  const displayPosts = limit ? posts.slice(0, limit) : posts;

  return (
    <section className="animate space-y-6">
      <div className="flex flex-wrap gap-y-2 items-center justify-between">
        <h5 className="font-semibold text-black dark:text-white text-lg">
          Latest posts
        </h5>
        {showLink && (
          <Link to="/blog" className="jrzs-link text-sm">
            See all posts
          </Link>
        )}
      </div>

      <ul className="flex flex-col gap-4">
        {displayPosts.map((post, index) => {
          const isExternal = post.external || post.link.startsWith('http');

          const cardContent = (
            <div className="group jrzs-card">
              <div className="flex flex-col flex-1 gap-1 truncate">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-black dark:text-white text-base truncate">
                    {post.title}
                  </span>
                  <span className="text-xs text-neutral-500 shrink-0">
                    {post.date}
                  </span>
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                  {post.description}
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="absolute top-1/2 right-3 -translate-y-1/2 size-5 stroke-2 fill-none stroke-current"
              >
                <line
                  x1="5"
                  y1="12"
                  x2="19"
                  y2="12"
                  className="translate-x-3 group-hover:translate-x-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
                ></line>
                <polyline
                  points="12 5 19 12 12 19"
                  className="-translate-x-1 group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
                ></polyline>
              </svg>
            </div>
          );

          return (
            <li key={index}>
              {isExternal ? (
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={post.title}
                >
                  {cardContent}
                </a>
              ) : (
                <Link to={post.link} aria-label={post.title}>
                  {cardContent}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default BlogSection;
