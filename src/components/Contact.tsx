import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, MapPin, BookOpen, Newspaper, FileText } from 'lucide-react';

const RESUME_URL = 'https://drive.google.com/file/d/1QA4K-CmWLUm7U_Sq6yiCXl6hq19ORX1p/view';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6 text-gradient">Get in Touch</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Open to high-impact data engineering opportunities and collaborative projects
          </p>

          <Card className="glass-card border-none">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8 text-left">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-blue-500/10 text-blue-400">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg mb-1">Location</h3>
                      <p className="text-gray-400">Berlin, Germany</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-blue-500/10 text-blue-400">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg mb-1">Email</h3>
                      <a
                        href="mailto:nishantbahri08@gmail.com"
                        className="text-gray-400"
                      >
                        nishantbahri08@gmail.com
                      </a>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full justify-start gap-4 h-14 bg-white/5 border-white/10 text-gray-300"
                    asChild
                  >
                    <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                      <FileText className="h-5 w-5" />
                      View Resume
                    </a>
                  </Button>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Linkedin, label: "Connect on LinkedIn", href: "https://www.linkedin.com/in/nishant-bahri/" },
                    { icon: Github, label: "Follow on GitHub", href: "https://github.com/nishantbahri" },
                    { icon: BookOpen, label: "Read on Medium", href: "https://medium.com/@nishantbahri" },
                    { icon: Newspaper, label: "Subscribe on Substack", href: "https://substack.com/@nishantbahri" }
                  ].map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start gap-4 h-14 bg-white/5 border-white/10 text-gray-300"
                      asChild
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <social.icon className="h-5 w-5" />
                        {social.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
