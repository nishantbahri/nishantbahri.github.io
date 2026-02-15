import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, BookOpen, Newspaper, FileText } from 'lucide-react';

const RESUME_URL = 'https://drive.google.com/file/d/1QA4K-CmWLUm7U_Sq6yiCXl6hq19ORX1p/view';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/10 bg-black/20 backdrop-blur-lg">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <Link to="/" className="text-2xl font-bold tracking-tight text-white">
              Nishant Bahri
            </Link>
            <p className="mt-2 text-gray-400">
              Senior Data Engineer | Berlin, Germany
            </p>
          </div>

          <div className="flex space-x-4">
            {[
              { icon: Github, href: "https://github.com/nishantbahri", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/nishant-bahri", label: "LinkedIn" },
              { icon: BookOpen, href: "https://medium.com/@nishantbahri", label: "Medium" },
              { icon: Newspaper, href: "https://substack.com/@nishantbahri", label: "Substack" },
              { icon: FileText, href: RESUME_URL, label: "View Resume" },
              { icon: Mail, href: "mailto:nishantbahri08@gmail.com", label: "Email" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 text-gray-400 rounded-full"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-gray-500">
            © {currentYear} Nishant Bahri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
