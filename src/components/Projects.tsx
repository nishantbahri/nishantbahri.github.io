import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';
import { projects } from '@/data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Showcasing technical expertise through complex data engineering solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col glass-card border-none hover:bg-white/10 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                        <FolderGit2 className="h-6 w-6" />
                      </div>
                      <div className="flex gap-2">
                        {project.github && (
                          <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-white/10 hover:text-white text-gray-400" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-5 w-5" />
                            </a>
                          </Button>
                        )}
                        {project.link && (
                          <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-white/10 hover:text-white text-gray-400" asChild>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-base mt-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto pt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 border border-purple-500/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
