import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { 
  Play, 
  Code, 
  Users, 
  Target, 
  Lightbulb,
  Heart,
  Zap,
  Rocket
} from 'lucide-react';
import workshopScene from '@/assets/workshop-scene.jpg';

const GSAVisionSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const codeRef = useRef<HTMLDivElement>(null);

  const workshopSteps = [
    "Welcome to 'Vibe Code Your First Site with Gemini!' 🚀",
    "// Let's create something amazing together",
    "const myFirstSite = gemini.create({",
    "  type: 'portfolio',",
    "  style: 'modern',",
    "  personality: 'creative'",
    "});",
    "",
    "// Watch the magic happen! ✨",
    "myFirstSite.deploy();"
  ];

  useEffect(() => {
    if (isPlaying && codeRef.current) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev < workshopSteps.length - 1) {
            return prev + 1;
          } else {
            setIsPlaying(false);
            return 0;
          }
        });
      }, 800);

      return () => clearInterval(interval);
    }
  }, [isPlaying, workshopSteps.length]);

  const startDemo = () => {
    setCurrentStep(0);
    setIsPlaying(true);
  };

  const impactGoals = [
    {
      icon: Users,
      title: "Inclusive Community",
      description: "Creating welcoming spaces where every student feels empowered to learn and grow",
      color: "text-google-blue"
    },
    {
      icon: Lightbulb,
      title: "Practical Innovation",
      description: "Bridging theory and practice through hands-on projects and real-world applications",
      color: "text-google-yellow"
    },
    {
      icon: Rocket,
      title: "Future Builders",
      description: "Inspiring students to become the next generation of tech leaders and innovators",
      color: "text-google-green"
    }
  ];

  return (
    <section className="py-20 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            My <span className="gradient-text">GSA Vision</span>: Hands-On Workshops
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Transforming learning through interactive experiences that make complex technologies 
            accessible, engaging, and fun for everyone.
          </p>
        </motion.div>

        {/* Workshop Demo */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Interactive Code Demo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-google-green/20">
                    <Code className="h-6 w-6 text-google-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Live Workshop Preview</h3>
                </div>
                <Button 
                  onClick={startDemo}
                  disabled={isPlaying}
                  className="bg-google-green hover:bg-google-green/90"
                >
                  {isPlaying ? (
                    <Zap className="h-4 w-4 mr-2 animate-pulse" />
                  ) : (
                    <Play className="h-4 w-4 mr-2" />
                  )}
                  {isPlaying ? 'Running...' : 'Start Demo'}
                </Button>
              </div>
              
              <div 
                ref={codeRef} 
                className="bg-background/60 p-6 rounded-xl font-mono text-sm min-h-[300px]"
              >
                {workshopSteps.slice(0, currentStep + 1).map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="py-1"
                  >
                    <span className="text-muted-foreground mr-4">{index + 1}</span>
                    <span className={
                      line.includes('//') ? 'text-google-green' :
                      line.includes('const') || line.includes('myFirstSite') ? 'text-google-blue' :
                      line.includes("'") ? 'text-google-yellow' :
                      line.includes('🚀') || line.includes('✨') ? 'text-google-red' :
                      'text-foreground'
                    }>
                      {line}
                    </span>
                  </motion.div>
                ))}
                {isPlaying && (
                  <motion.div
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-2 h-5 bg-google-blue ml-1"
                  />
                )}
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground">
                <strong className="text-google-blue">"Vibe Code Your First Site with Gemini!"</strong> - 
                Making learning interactive and fun for everyone.
              </p>
            </div>
          </motion.div>

          {/* Workshop Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden neon-green">
              <img 
                src={workshopScene}
                alt="Interactive workshop scene"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              
              {/* Overlay Elements */}
              <div className="absolute top-6 left-6 glass p-3 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-google-green rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Live Workshop</span>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-6 glass p-4 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-google-blue" />
                  <span className="text-sm">25+ Students Engaged</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="glass p-8 rounded-2xl max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Target className="h-8 w-8 text-google-red" />
              <h3 className="text-3xl font-bold text-foreground">My Impact Goal</h3>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To <strong className="text-google-blue">demystify complex technologies</strong> and foster a culture of 
              <strong className="text-google-green"> practical application</strong> and 
              <strong className="text-google-yellow"> innovation</strong> on campus, 
              empowering every student to become a confident builder and creator.
            </p>
          </div>
        </motion.div>

        {/* Impact Goals Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {impactGoals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl hover-glow group"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-3 rounded-xl bg-background/20 group-hover:scale-110 transition-transform`}>
                  <goal.icon className={`h-6 w-6 ${goal.color}`} />
                </div>
                <h4 className="text-xl font-semibold text-foreground">{goal.title}</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">{goal.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GSAVisionSection;