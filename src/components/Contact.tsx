import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-foreground">Get in Touch</h2>
          <p className="text-foreground/70 text-lg mb-8">
            I'm always open to discussing new opportunities and interesting projects
          </p>

          <Card className="bg-card/50 backdrop-blur-sm border border-border/50">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div className="text-left">
                      <h3 className="font-medium text-foreground">Location</h3>
                      <p className="text-sm text-foreground/70">Delhi, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div className="text-left">
                      <h3 className="font-medium text-foreground">Email</h3>
                      <a 
                        href="mailto:nishant.bahri@gmail.com"
                        className="text-sm text-foreground/70 hover:text-primary transition-colors"
                      >
                        nishant.bahri@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start gap-2"
                    asChild
                  >
                    <a 
                      href="https://www.linkedin.com/in/nishant-bahri/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                      Connect on LinkedIn
                    </a>
                  </Button>

                  <Button 
                    variant="outline"
                    className="w-full justify-start gap-2"
                    asChild
                  >
                    <a 
                      href="https://github.com/nishantbahri"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5" />
                      Follow on GitHub
                    </a>
                  </Button>
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
