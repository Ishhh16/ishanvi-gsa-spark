import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { ChevronDown, Sparkles, Code, Users } from 'lucide-react';
import heroIllustration from '@/assets/hero-illustration.jpg';

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(titleRef.current, 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    )
    .fromTo(ctaRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    );

    // Floating animation for icons
    gsap.to(".floating-icon", {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      stagger: 0.5
    });

  }, []);

  const scrollToNextSection = () => {
    document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5" />
      <div className="absolute inset-0 bg-gradient-to-tr from-google-blue/5 via-transparent to-google-green/5" />
      <div className="absolute top-20 left-20 floating-icon">
        <Sparkles className="h-8 w-8 text-google-yellow opacity-70" />
      </div>
      <div className="absolute top-40 right-32 floating-icon">
        <Code className="h-10 w-10 text-google-green opacity-70" />
      </div>
      <div className="absolute bottom-40 left-32 floating-icon">
        <Users className="h-9 w-9 text-google-blue opacity-70" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              ref={titleRef}
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              <span className="gradient-text">Ishanvi Srivastava</span>
              <br />
              <span className="text-foreground">Empowering Tech</span>
              <br />
              <span className="text-foreground">Communities</span>
            </motion.h1>

            <motion.p 
              ref={subtitleRef}
              className="text-xl lg:text-2xl text-muted-foreground max-w-2xl"
            >
              Your Future <span className="text-google-blue font-semibold">Google Student Ambassador</span> – 
              Building, Learning, Innovating.
            </motion.p>

            <motion.div 
              ref={ctaRef}
              className="flex gap-4"
            >
              <Button 
                size="lg" 
                onClick={scrollToNextSection}
                className="bg-primary hover:bg-primary/90 text-primary-foreground neon-google text-lg px-8 py-6 rounded-xl hover-glow"
              >
                Explore My Pitch
                <ChevronDown className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Illustration */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="relative rounded-3xl overflow-hidden neon-blue">
              <img 
                src={heroIllustration} 
                alt="Tech Innovation Illustration"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;