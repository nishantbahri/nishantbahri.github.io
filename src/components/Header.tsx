import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, Github, Linkedin, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const RESUME_URL = 'https://drive.google.com/file/d/1QA4K-CmWLUm7U_Sq6yiCXl6hq19ORX1p/view';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { label: 'Home', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { label: 'Experience', action: () => scrollToSection('experience') },
    { label: 'Projects', action: () => scrollToSection('projects') },
    { label: 'Skills', action: () => scrollToSection('skills') },
    { label: 'Contact', action: () => scrollToSection('contact') },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'py-4' : 'py-6'
      )}
    >
      <div className={cn(
        'container mx-auto transition-all duration-300',
        isScrolled ? 'max-w-5xl' : ''
      )}>
        <div className={cn(
          'rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300',
          isScrolled
            ? 'bg-black/50 backdrop-blur-md border border-white/10 shadow-lg'
            : 'bg-transparent'
        )}>
          <a
            href="#"
            className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setMobileMenuOpen(false);
            }}
          >
            NB
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="px-4 py-2 text-sm font-medium text-gray-300 rounded-full"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-3 pl-4 border-l border-white/10">
              <a href="https://github.com/nishantbahri" target="_blank" rel="noopener noreferrer"
                className="p-2 text-gray-400 rounded-full">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/nishant-bahri" target="_blank" rel="noopener noreferrer"
                className="p-2 text-gray-400 rounded-full">
                <Linkedin className="h-5 w-5" />
              </a>
              <Button
                variant="ghost"
                className="rounded-full text-gray-300 px-4"
                asChild
              >
                <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  View Resume
                </a>
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 text-white rounded-full px-6 ml-2"
              >
                Let's Talk
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black/95 z-40 md:hidden pt-24 px-6"
          >
            <nav className="flex flex-col items-center space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="text-2xl font-medium text-gray-300"
                >
                  {item.label}
                </button>
              ))}

              <div className="flex items-center space-x-6 mt-8">
                <a href="https://github.com/nishantbahri" target="_blank" rel="noopener noreferrer"
                  className="text-gray-400">
                  <Github className="h-8 w-8" />
                </a>
                <a href="https://linkedin.com/in/nishant-bahri" target="_blank" rel="noopener noreferrer"
                  className="text-gray-400">
                  <Linkedin className="h-8 w-8" />
                </a>
              </div>

              <Button
                variant="outline"
                className="w-full max-w-xs border-white/20 text-gray-200 rounded-full py-6 text-lg mt-2"
                asChild
              >
                <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                  <FileText className="mr-2 h-5 w-5" />
                  View Resume
                </a>
              </Button>

              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full max-w-xs bg-blue-600 text-white rounded-full py-6 text-lg mt-8"
              >
                Let's Talk
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
