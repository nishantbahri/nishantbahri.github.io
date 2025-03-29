
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, Github, Linkedin, Mail, FileText } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
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
        <Link 
          to="/" 
          className="text-xl md:text-2xl font-medium tracking-tight transition-opacity hover:opacity-80"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="perspective-text">Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <button
              onClick={() => handleNavigation("/")}
              className={cn(
                "text-foreground/80 hover:text-foreground transition-colors duration-200",
                location.pathname === "/" && "text-foreground font-medium"
              )}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("/projects")}
              className={cn(
                "text-foreground/80 hover:text-foreground transition-colors duration-200",
                location.pathname === "/projects" && "text-foreground font-medium"
              )}
            >
              Projects
            </button>
            <button
              onClick={() => handleNavigation("/about")}
              className={cn(
                "text-foreground/80 hover:text-foreground transition-colors duration-200",
                location.pathname === "/about" && "text-foreground font-medium"
              )}
            >
              About
            </button>
            <button
              onClick={() => handleNavigation("/contact")}
              className={cn(
                "text-foreground/80 hover:text-foreground transition-colors duration-200",
                location.pathname === "/contact" && "text-foreground font-medium"
              )}
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
            <button onClick={() => handleNavigation("/contact")}>
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
            onClick={() => handleNavigation("/")}
            className={cn(
              "text-xl text-foreground/80 hover:text-foreground transition-colors duration-200",
              location.pathname === "/" && "text-foreground font-medium"
            )}
          >
            Home
          </button>
          <button
            onClick={() => handleNavigation("/projects")}
            className={cn(
              "text-xl text-foreground/80 hover:text-foreground transition-colors duration-200",
              location.pathname === "/projects" && "text-foreground font-medium"
            )}
          >
            Projects
          </button>
          <button
            onClick={() => handleNavigation("/about")}
            className={cn(
              "text-xl text-foreground/80 hover:text-foreground transition-colors duration-200",
              location.pathname === "/about" && "text-foreground font-medium"
            )}
          >
            About
          </button>
          <button
            onClick={() => handleNavigation("/contact")}
            className={cn(
              "text-xl text-foreground/80 hover:text-foreground transition-colors duration-200",
              location.pathname === "/contact" && "text-foreground font-medium"
            )}
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
          
          <button onClick={() => handleNavigation("/contact")}>
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
