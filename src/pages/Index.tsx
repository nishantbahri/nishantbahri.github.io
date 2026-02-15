import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Index = () => {
  // Smooth scroll behavior for the whole page
  useEffect(() => {
    // Reset scroll position on page load
    window.scrollTo(0, 0);

    // Check if the URL contains a hash and scroll to that element
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <motion.main
        className="flex-grow"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={fadeInUp}>
          <Hero />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Experience />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Projects />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Skills />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Contact />
        </motion.div>
      </motion.main>

      <Footer />
    </div>
  );
};

export default Index;
