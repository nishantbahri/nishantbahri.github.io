
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border/40">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link to="/" className="text-2xl font-medium tracking-tight">
              Nishant Bahri
            </Link>
            <p className="mt-2 text-muted-foreground">
              Made with ❤️ from India
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/nishantbahri" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-accent/10 text-accent rounded-full hover:bg-accent hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/nishant-bahri" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-accent/10 text-accent rounded-full hover:bg-accent hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:nishantbahri08@gmail.com"
              className="p-2 bg-accent/10 text-accent rounded-full hover:bg-accent hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Nishant Bahri. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Interested in data engineering solutions? Feel free to reach out. I'm always open to discussing new opportunities and challenges.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
