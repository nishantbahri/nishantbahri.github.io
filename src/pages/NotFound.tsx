import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useAnimateOnLoad } from '@/hooks/useAnimateOnLoad';

const NotFound = () => {
  useAnimateOnLoad();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-grow flex items-center">
        <div className="mx-auto max-w-screen-sm px-5 py-16 space-y-6 text-center">
          <h1 className="animate text-4xl font-semibold text-black dark:text-white">
            404
          </h1>
          <p className="animate text-neutral-600 dark:text-neutral-400">
            Page not found. The page you are looking for does not exist.
          </p>
          <div className="animate pt-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 jrzs-link text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to home</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
