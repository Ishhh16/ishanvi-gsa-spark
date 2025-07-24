import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Award, 
  Users, 
  Mic, 
  Lightbulb, 
  Heart, 
  Zap,
  ChevronDown,
  Star,
  Trophy,
  Target
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhyGSASection = () => {
  const [expandedTrait, setExpandedTrait] = useState<number | null>(null);

  const traits = [
    {
      icon: Users,
      title: "Proven Leadership",
      shortDesc: "Successfully led multiple tech projects and teams",
      fullDesc: "Demonstrated ability to inspire and guide teams through complex projects, fostering collaboration and driving results. Experience in managing diverse groups and creating inclusive environments where everyone can thrive.",
      achievement: "Led 5+ successful tech projects",
      color: "text-google-blue",
      bgColor: "bg-google-blue/10"
    },
    {
      icon: Mic,
      title: "Public Speaking Excellence",
      shortDesc: "Engaging presenter with proven track record",
      fullDesc: "Skilled at communicating complex technical concepts to diverse audiences, from beginners to experts. Natural ability to inspire and educate through clear, engaging presentations that make technology accessible to all.",
      achievement: "Delivered 15+ impactful presentations",
      color: "text-google-green",
      bgColor: "bg-google-green/10"
    },
    {
      icon: Lightbulb,
      title: "Innovation Mindset",
      shortDesc: "Creative problem-solver and tech innovator",
      fullDesc: "Passionate about finding creative solutions to challenging problems. Always exploring new technologies and methodologies to improve processes and create better experiences for students and communities.",
      achievement: "Implemented 3 innovative solutions",
      color: "text-google-yellow",
      bgColor: "bg-google-yellow/10"
    },
    {
      icon: Heart,
      title: "Community Builder",
      shortDesc: "Dedicated to fostering inclusive tech communities",
      fullDesc: "Strong commitment to building supportive, inclusive communities where every member feels valued and empowered. Focus on creating environments that encourage learning, growth, and mutual support.",
      achievement: "Built communities of 100+ members",
      color: "text-google-red",
      bgColor: "bg-google-red/10"
    }
  ];

  const coreValues = [
    {
      icon: Target,
      title: "Student-Centric Approach",
      description: "Every initiative focused on student growth and success"
    },
    {
      icon: Zap,
      title: "Practical Learning",
      description: "Hands-on experiences that bridge theory and application"
    },
    {
      icon: Star,
      title: "Inclusive Excellence",
      description: "Creating opportunities for all students to shine"
    }
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
            Why I'll Make a <span className="gradient-text">Great GSA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Combining technical expertise, leadership experience, and genuine passion for 
            community building to create lasting impact at IGDTUW.
          </p>
        </motion.div>

        {/* Key Traits */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {traits.map((trait, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl overflow-hidden hover-glow group"
            >
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-xl ${trait.bgColor} group-hover:scale-110 transition-transform`}>
                    <trait.icon className={`h-6 w-6 ${trait.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground">{trait.title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <Trophy className="h-4 w-4 text-google-yellow" />
                      <span className="text-sm text-muted-foreground">{trait.achievement}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{trait.shortDesc}</p>

                <motion.div
                  initial={false}
                  animate={{ 
                    height: expandedTrait === index ? 'auto' : 0,
                    opacity: expandedTrait === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-foreground leading-relaxed mb-4">
                    {trait.fullDesc}
                  </p>
                </motion.div>

                <Button
                  variant="ghost"
                  onClick={() => setExpandedTrait(expandedTrait === index ? null : index)}
                  className="w-full justify-between text-primary hover:text-primary/80"
                >
                  {expandedTrait === index ? 'Show Less' : 'Learn More'}
                  <ChevronDown 
                    className={`h-4 w-4 transition-transform ${
                      expandedTrait === index ? 'rotate-180' : ''
                    }`} 
                  />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            My <span className="text-google-blue">Core Values</span> as GSA
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="glass p-8 rounded-2xl hover-glow">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass p-8 rounded-2xl max-w-4xl mx-auto neon-google">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Award className="h-8 w-8 text-google-blue" />
              <h3 className="text-3xl font-bold text-foreground">My GSA Promise</h3>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              As your Google Student Ambassador, I commit to creating an environment where 
              <strong className="text-google-blue"> every student</strong> feels empowered to 
              <strong className="text-google-green"> explore technology</strong>, 
              <strong className="text-google-yellow"> build amazing projects</strong>, and 
              <strong className="text-google-red"> grow into confident leaders</strong>. 
              Together, we'll build a thriving tech community at IGDTUW.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyGSASection;