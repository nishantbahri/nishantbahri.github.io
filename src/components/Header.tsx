
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, Github, Linkedin, Mail, FileText } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
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

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-4 md:py-6',
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md shadow-subtle' 
          : 'bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between">
        <a 
          href="#"
          className="text-xl md:text-2xl font-medium tracking-tight transition-opacity hover:opacity-80"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setMobileMenuOpen(false);
          }}
        >
          <span className="perspective-text">Portfolio</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-foreground/80 hover:text-foreground transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-foreground/80 hover:text-foreground transition-colors duration-200"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-foreground/80 hover:text-foreground transition-colors duration-200"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground/80 hover:text-foreground transition-colors duration-200"
            >
              Contact
            </button>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a href="https://github.com/nishantbahri" target="_blank" rel="noopener noreferrer" 
              className="text-foreground/80 hover:text-foreground transition-colors duration-200">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/nishant-bahri" target="_blank" rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground transition-colors duration-200">
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://drive.google.com/uc?export=download&id=1LFXfZhIlHxB4EEm2NZ-S9g8Mb9jvf1EF" 
              download="NishantBahri_Resume.pdf"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground transition-colors duration-200"
            >
              <FileText className="h-5 w-5" />
            </a>
            <button onClick={() => scrollToSection('contact')}>
              <Button 
                className="button-hover bg-accent hover:bg-accent/90 text-white rounded-full px-6"
              >
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </Button>
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-foreground focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-background z-30 md:hidden flex flex-col items-center justify-center transition-all duration-300 ease-out",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center space-y-8">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setMobileMenuOpen(false);
            }}
            className="text-xl text-foreground/80 hover:text-foreground transition-colors duration-200"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-xl text-foreground/80 hover:text-foreground transition-colors duration-200"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-xl text-foreground/80 hover:text-foreground transition-colors duration-200"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-xl text-foreground/80 hover:text-foreground transition-colors duration-200"
          >
            Contact
          </button>
          
          <div className="flex items-center space-x-6 mt-6">
            <a href="https://github.com/nishantbahri" target="_blank" rel="noopener noreferrer" 
              className="text-foreground/80 hover:text-foreground transition-colors duration-200">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/nishant-bahri" target="_blank" rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground transition-colors duration-200">
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://drive.google.com/uc?export=download&id=1LFXfZhIlHxB4EEm2NZ-S9g8Mb9jvf1EF" 
              download="NishantBahri_Resume.pdf"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground transition-colors duration-200"
            >
              <FileText className="h-6 w-6" />
            </a>
          </div>
          
          <button onClick={() => scrollToSection('contact')}>
            <Button 
              className="mt-4 button-hover bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-6"
            >
              <Mail className="h-5 w-5 mr-2" />
              Contact Me
            </Button>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
