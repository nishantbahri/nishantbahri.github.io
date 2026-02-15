import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, BookOpen, Newspaper, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const RESUME_URL = 'https://drive.google.com/file/d/1QA4K-CmWLUm7U_Sq6yiCXl6hq19ORX1p/view';

const Hero = () => {
  const scrollToExperience = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative inline-block mb-8 px-6 py-2 rounded-full border border-cyan-400/40 bg-gradient-to-r from-blue-500/25 via-cyan-400/20 to-emerald-400/20 backdrop-blur-xl shadow-[0_0_32px_rgba(56,189,248,0.25)]"
          >
            <span className="text-cyan-100 font-semibold tracking-wide">
              Senior Data Engineer at Zalando
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
            <span className="text-white">Nishant</span>{' '}
            <span className="text-gradient">Bahri</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            I build scalable data platforms and high-quality pipelines with
            <span className="text-blue-400 font-medium"> 6+ years</span> of hands-on experience in
            <span className="text-purple-400 font-medium"> cloud data engineering</span>,
            <span className="text-pink-400 font-medium"> distributed processing</span>, and
            <span className="text-orange-400 font-medium"> analytics enablement</span>.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <Button
              size="lg"
              className="bg-blue-600 text-white font-medium rounded-full px-8 h-12 text-lg shadow-lg shadow-blue-900/20"
              onClick={scrollToExperience}
            >
              View Experience
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-12 text-lg border-white/20"
              asChild
            >
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                View Resume
                <FileText className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/nishant-bahri/", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/nishantbahri", label: "GitHub" },
                { icon: BookOpen, href: "https://medium.com/@nishantbahri", label: "Medium" },
                { icon: Newspaper, href: "https://substack.com/@nishantbahri", label: "Substack" }
              ].map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="rounded-full w-12 h-12 glass-card border-white/10"
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-gray-300" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
