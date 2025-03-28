
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';

const ProjectsPage = () => {
  useEffect(() => {
    // Reset scroll position on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32">
        <div className="container mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Experience
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 text-balance">
              Work <span className="text-gradient">History</span>
            </h1>
            <p className="text-lg text-foreground/70 text-balance">
              My professional journey and the projects I've worked on.
            </p>
          </div>
        </div>
        
        <Projects />
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectsPage;
