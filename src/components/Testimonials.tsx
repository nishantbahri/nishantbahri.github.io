import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Activity, BarChart3, BriefcaseBusiness } from 'lucide-react';

const highlights = [
    {
        icon: Activity,
        title: "Production Scale",
        content: "Built and maintained production-grade data pipelines processing 500TB+ data workloads."
    },
    {
        icon: BarChart3,
        title: "Business Impact",
        content: "Enabled pricing and analytics teams with trusted datasets, guardrails, and observability."
    },
    {
        icon: BriefcaseBusiness,
        title: "Cross-Industry Experience",
        content: "Delivered data engineering solutions across e-commerce, domains, media, and aviation."
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 relative overflow-hidden">
            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-gradient">Career Highlights</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Snapshot of the outcomes I focus on in data engineering
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {highlights.map((highlight, index) => (
                            <motion.div
                                key={highlight.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full glass-card border-none hover:bg-white/10 transition-all duration-300">
                                    <CardContent className="p-8 flex flex-col h-full">
                                        <highlight.icon className="h-10 w-10 text-blue-400/70 mb-6" />
                                        <h4 className="text-white font-bold text-xl mb-3">{highlight.title}</h4>
                                        <p className="text-gray-300 text-lg leading-relaxed mb-8 flex-grow">
                                            {highlight.content}
                                        </p>
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

export default Testimonials;
