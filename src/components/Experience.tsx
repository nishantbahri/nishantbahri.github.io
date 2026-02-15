import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { experiences } from '@/data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Professional Experience</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Building and scaling data platforms across e-commerce, domains, media, and travel
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const isCurrent = exp.period.includes('Present');
              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="glass-card border-none">
                    <CardHeader className="space-y-4">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div>
                          <CardTitle className="text-2xl font-bold text-white">
                            {exp.company}
                          </CardTitle>
                          <CardDescription className="text-gray-300 text-lg mt-1 font-medium">
                            {exp.role}
                          </CardDescription>
                        </div>
                        <div className="text-right md:text-right text-left">
                          <div className="text-base font-semibold text-blue-400">{exp.period}</div>
                          <div className="text-sm text-gray-400">{exp.location}</div>
                          {isCurrent && (
                            <Badge className="mt-2 bg-emerald-500/15 text-emerald-300 border border-emerald-500/20">
                              Current
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map(tech => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-blue-500/10 text-blue-300 border border-blue-500/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-gray-300 list-none">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="text-base leading-relaxed flex items-start gap-2">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
