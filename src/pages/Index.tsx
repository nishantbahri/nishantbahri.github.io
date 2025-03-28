
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  // Smooth scroll behavior only for anchor links within the page
  useEffect(() => {
    // Reset scroll position on page load
    window.scrollTo(0, 0);
    
    // Add smooth scrolling only to anchors that start with # and correspond to an ID on the page
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        
        try {
          const targetId = href.substring(1); // Remove the # symbol
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        } catch (error) {
          console.error("Error in smooth scroll:", error);
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
