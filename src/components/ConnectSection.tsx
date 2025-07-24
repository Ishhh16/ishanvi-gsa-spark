import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Linkedin, 
  Mail, 
  MessageCircle, 
  Heart,
  Sparkles,
  ExternalLink
} from 'lucide-react';

const ConnectSection = () => {
  const contactMethods = [
    {
      icon: Linkedin,
      title: "Connect on LinkedIn",
      description: "Let's build our professional network",
      link: "https://linkedin.com/in/ishanvi-srivastava",
      color: "text-google-blue",
      bgColor: "bg-google-blue/10",
      hoverEffect: "neon-blue"
    },
    {
      icon: Mail,
      title: "Send an Email",
      description: "Drop me a line anytime",
      link: "mailto:ishanvi@example.com",
      color: "text-google-red",
      bgColor: "bg-google-red/10", 
      hoverEffect: "neon-green"
    },
    {
      icon: MessageCircle,
      title: "Start a Conversation",
      description: "Let's discuss tech and innovation",
      link: "#",
      color: "text-google-green",
      bgColor: "bg-google-green/10",
      hoverEffect: "neon-purple"
    }
  ];

  return (
    <footer className="py-20 bg-background/90 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span> & Build Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to embark on this journey as Google Student Ambassador? 
            Let's start building the future of tech education at IGDTUW!
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`glass p-8 rounded-2xl hover-glow ${method.hoverEffect} transition-all duration-300`}>
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-full ${method.bgColor} mb-6 group-hover:scale-110 transition-transform`}>
                    <method.icon className={`h-8 w-8 ${method.color}`} />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-foreground mb-3">{method.title}</h3>
                  <p className="text-muted-foreground mb-6">{method.description}</p>
                  
                  <Button
                    asChild
                    variant="outline"
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  >
                    <a 
                      href={method.link}
                      target={method.link.startsWith('http') ? '_blank' : '_self'}
                      rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-2"
                    >
                      <span>Connect</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="glass p-8 rounded-2xl max-w-3xl mx-auto neon-google">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Sparkles className="h-8 w-8 text-google-yellow animate-pulse" />
              <h3 className="text-3xl font-bold gradient-text">Ready to Transform IGDTUW?</h3>
              <Sparkles className="h-8 w-8 text-google-yellow animate-pulse" />
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Together, we can create an amazing tech community where innovation thrives, 
              students grow, and the future is built one project at a time.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-gradient-google hover:scale-105 transition-transform text-white font-semibold px-8 py-4 rounded-xl"
            >
              <a 
                href="https://linkedin.com/in/ishanvi-srivastava" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Linkedin className="h-5 w-5" />
                <span>Let's Make It Happen!</span>
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Heart className="h-5 w-5 text-google-red" />
              <span className="text-muted-foreground">
                Made with love by Ishanvi
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                © 2024 Ishanvi Srivastava
              </span>
              <div className="flex items-center space-x-1">
                <span className="text-xs text-muted-foreground">Powered by</span>
                <span className="text-xs gradient-text font-semibold">Google Technologies</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default ConnectSection;