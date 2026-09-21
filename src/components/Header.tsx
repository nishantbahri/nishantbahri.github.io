import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="py-6">
      <div className="mx-auto max-w-screen-sm px-5">
        <div className="flex flex-wrap gap-y-2 justify-between items-center">
          <Link
            to="/"
            className="font-semibold text-black dark:text-white hover:opacity-80 transition-opacity"
          >
            Nishant Bahri
          </Link>
          <nav className="flex items-center gap-1 text-sm text-neutral-600 dark:text-neutral-400">
            <Link to="/blog" className="jrzs-link">
              blog
            </Link>
            <span>/</span>
            <Link to="/work" className="jrzs-link">
              work
            </Link>
            <span>/</span>
            <Link to="/projects" className="jrzs-link">
              projects
            </Link>
            <span>/</span>
            <Link to="/skills" className="jrzs-link">
              skills
            </Link>
            <span>/</span>
            <Link to="/contact" className="jrzs-link">
              contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
