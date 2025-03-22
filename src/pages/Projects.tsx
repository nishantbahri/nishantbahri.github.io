
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
      
      <main className="flex-grow">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
          </div>
        </div>
        
        <Projects />
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectsPage;
