import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Sparkles, Database, Zap, Rocket } from 'lucide-react';
import geminiDemo from '@/assets/gemini-demo.jpg';
import firebaseVisual from '@/assets/firebase-visual.jpg';

const GooglePassionSection = () => {
  const [activeDemo, setActiveDemo] = useState<'gemini' | 'firebase'>('gemini');
  const codeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeDemo === 'gemini' && codeRef.current) {
      const codeLines = codeRef.current.querySelectorAll('.code-line');
      
      gsap.fromTo(codeLines, 
        { opacity: 0, x: -20 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.5, 
          stagger: 0.1,
          ease: "power2.out"
        }
      );
    }
  }, [activeDemo]);

  const codeSnippet = [
    "// Vibe coding with Gemini ✨",
    "const welcomePage = gemini.generate({",
    "  prompt: 'Create a welcome page',",
    "  style: 'modern and friendly'",
    "});",
    "",
    "// Instant magic! 🚀",
    "document.body.innerHTML = welcomePage;"
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Powering Progress with <span className="gradient-text">Google's Best</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Harnessing the power of Gemini AI and Firebase to create incredible experiences 
            and build the future of technology education.
          </p>
        </motion.div>

        {/* Tool Selection */}
        <div className="flex justify-center mb-12">
          <div className="glass p-2 rounded-xl flex space-x-2">
            <Button
              variant={activeDemo === 'gemini' ? 'default' : 'ghost'}
              onClick={() => setActiveDemo('gemini')}
              className="rounded-lg px-6 py-3"
            >
              <Sparkles className="h-5 w-5 mr-2" />
              Gemini AI
            </Button>
            <Button
              variant={activeDemo === 'firebase' ? 'default' : 'ghost'}
              onClick={() => setActiveDemo('firebase')}
              className="rounded-lg px-6 py-3"
            >
              <Database className="h-5 w-5 mr-2" />
              Firebase
            </Button>
          </div>
        </div>

        {/* Demo Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Interactive Demo */}
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {activeDemo === 'gemini' ? (
              <>
                <div className="glass p-8 rounded-2xl">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 rounded-lg bg-google-blue/20">
                      <Sparkles className="h-6 w-6 text-google-blue" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Gemini AI Magic</h3>
                  </div>
                  
                  <div ref={codeRef} className="bg-background/50 p-6 rounded-xl font-mono text-sm">
                    {codeSnippet.map((line, index) => (
                      <div key={index} className="code-line py-1">
                        <span className="text-muted-foreground mr-4">{index + 1}</span>
                        <span className={
                          line.includes('//') ? 'text-google-green' :
                          line.includes('const') || line.includes('document') ? 'text-google-blue' :
                          line.includes("'") ? 'text-google-yellow' :
                          'text-foreground'
                        }>
                          {line}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex items-center space-x-3">
                    <Zap className="h-5 w-5 text-google-yellow" />
                    <span className="text-muted-foreground">Instant code generation with AI assistance</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="glass p-8 rounded-2xl">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 rounded-lg bg-google-red/20">
                      <Database className="h-6 w-6 text-google-red" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Firebase Power</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 bg-background/30 rounded-lg">
                      <Rocket className="h-5 w-5 text-google-green" />
                      <span className="text-foreground">Real-time database sync</span>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-background/30 rounded-lg">
                      <Zap className="h-5 w-5 text-google-yellow" />
                      <span className="text-foreground">Instant deployment</span>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-background/30 rounded-lg">
                      <Sparkles className="h-5 w-5 text-google-blue" />
                      <span className="text-foreground">Seamless authentication</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </motion.div>

          {/* Visual Demonstration */}
          <motion.div
            key={`${activeDemo}-visual`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden neon-google">
              <img 
                src={activeDemo === 'gemini' ? geminiDemo : firebaseVisual}
                alt={`${activeDemo} demonstration`}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default GooglePassionSection;