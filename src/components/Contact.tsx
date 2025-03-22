
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 md:py-32" id="contact">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-balance">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-foreground/70 text-balance">
            Have a project in mind or interested in exploring data engineering solutions? Feel free to reach out. I'm always open to discussing new opportunities and challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-panel p-8 md:p-10">
            <h3 className="text-2xl font-medium mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-white/50 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-white/50 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground/70 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 bg-white/50 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 bg-white/50 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <Button className="button-hover bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-6 w-full">
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="glass-panel p-8 md:p-10 mb-6">
              <h3 className="text-2xl font-medium mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/10 text-accent rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground/70 mb-1">Email</h4>
                    <a href="mailto:nishantbahri08@gmail.com" className="text-lg hover:text-accent transition-colors">nishantbahri08@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/10 text-accent rounded-full">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground/70 mb-1">Location</h4>
                    <p className="text-lg">Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-panel p-8 md:p-10 h-64 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-xl font-medium mb-3">Open to New Opportunities</h3>
                <p className="text-foreground/70 mb-6">Interested in discussing data engineering projects and challenges.</p>
                <Button 
                  variant="outline" 
                  className="button-hover rounded-full px-6 py-2"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/nishant-bahri/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
