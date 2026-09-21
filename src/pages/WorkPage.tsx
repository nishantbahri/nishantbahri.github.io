import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WorkSection from '@/components/WorkSection';
import { useAnimateOnLoad } from '@/hooks/useAnimateOnLoad';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const WorkPage = () => {
  useAnimateOnLoad();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-grow">
        <div className="mx-auto max-w-screen-sm px-5 py-6 space-y-8">
          <div className="animate">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm jrzs-link text-neutral-600 dark:text-neutral-400"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to home</span>
            </Link>
          </div>

          <h1 className="animate font-semibold text-2xl md:text-3xl text-black dark:text-white">
            Work Experience
          </h1>

          <WorkSection showLink={false} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WorkPage;
