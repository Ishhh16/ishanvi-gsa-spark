import { motion } from 'framer-motion';
import { 
  Code, 
  Globe, 
  Brain, 
  Users, 
  Mic, 
  HandHeart,
  GitBranch
} from 'lucide-react';
import SkillCard from './SkillCard';

const JourneySection = () => {
  const skills = [
    {
      icon: Code,
      title: "Python",
      description: "Crafting efficient solutions and building powerful applications with clean, maintainable code.",
      color: "neon-blue",
      delay: 0.1
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Creating responsive, modern web experiences that engage users and drive innovation.",
      color: "neon-green",
      delay: 0.2
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Leveraging AI and ML to solve complex problems and build intelligent systems.",
      color: "neon-purple",
      delay: 0.3
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Inspiring teams, driving projects to success, and fostering collaborative environments.",
      color: "neon-blue",
      delay: 0.4
    },
    {
      icon: HandHeart,
      title: "Teamwork",
      description: "Building strong relationships and achieving collective goals through effective collaboration.",
      color: "neon-green",
      delay: 0.5
    },
    {
      icon: Mic,
      title: "Public Speaking",
      description: "Communicating complex ideas clearly and inspiring audiences through engaging presentations.",
      color: "neon-purple",
      delay: 0.6
    },
    {
      icon: GitBranch,
      title: "Collaboration",
      description: "Working seamlessly with diverse teams to create innovative solutions and shared success.",
      color: "neon-blue",
      delay: 0.7
    }
  ];

  return (
    <section id="journey" className="py-20 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            My <span className="gradient-text">Journey</span> & Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer and leader with expertise spanning multiple domains, 
            ready to empower the next generation of tech innovators.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <SkillCard 
              key={skill.title}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              color={skill.color}
              delay={skill.delay}
            />
          ))}
        </div>

        {/* Timeline Visual */}
        <motion.div 
          className="relative mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-google-blue via-google-green to-google-yellow rounded-full" />
          
          <div className="space-y-16">
            {[
              { title: "Technical Foundation", description: "Mastered Python, Web Dev, and ML fundamentals" },
              { title: "Leadership Development", description: "Led projects and built high-performing teams" },
              { title: "Community Building", description: "Fostered collaboration and knowledge sharing" },
              { title: "Ready for GSA", description: "Prepared to empower IGDTUW's tech community" }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`glass p-6 rounded-2xl max-w-md ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;