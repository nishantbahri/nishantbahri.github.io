import { useTheme } from '@/components/ThemeProvider';
import { Sun, Moon, Monitor, ArrowUp } from 'lucide-react';

const Footer = () => {
  const { theme, setTheme } = useTheme();

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="animate pt-16 pb-12">
      <div className="mx-auto max-w-screen-sm px-5">
        <div className="flex justify-end pb-6">
          <button
            onClick={scrollToTop}
            className="relative group w-fit flex items-center gap-2 pl-3 pr-4 py-1.5 rounded border border-black/15 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out text-sm"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
            <span>Back to top</span>
          </button>
        </div>

        <div className="flex justify-between items-center text-sm text-neutral-600 dark:text-neutral-400 border-t border-black/10 dark:border-white/10 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs md:text-sm">
            <span>&copy; {new Date().getFullYear()} Nishant Bahri</span>
            <span className="hidden sm:inline opacity-40">•</span>
            <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">Berlin, DE</span>
          </div>

          <div className="flex flex-wrap gap-1 items-center">
            <button
              onClick={() => setTheme('light')}
              aria-label="Light theme"
              className={`size-8 flex items-center justify-center rounded-full transition-colors duration-300 ${
                theme === 'light'
                  ? 'bg-black/10 dark:bg-white/20 text-black dark:text-white'
                  : 'hover:bg-black/5 dark:hover:bg-white/10 text-neutral-500'
              }`}
            >
              <Sun className="w-4 h-4" />
            </button>
            <button
              onClick={() => setTheme('dark')}
              aria-label="Dark theme"
              className={`size-8 flex items-center justify-center rounded-full transition-colors duration-300 ${
                theme === 'dark'
                  ? 'bg-black/10 dark:bg-white/20 text-black dark:text-white'
                  : 'hover:bg-black/5 dark:hover:bg-white/10 text-neutral-500'
              }`}
            >
              <Moon className="w-4 h-4" />
            </button>
            <button
              onClick={() => setTheme('system')}
              aria-label="System theme"
              className={`size-8 flex items-center justify-center rounded-full transition-colors duration-300 ${
                theme === 'system'
                  ? 'bg-black/10 dark:bg-white/20 text-black dark:text-white'
                  : 'hover:bg-black/5 dark:hover:bg-white/10 text-neutral-500'
              }`}
            >
              <Monitor className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
