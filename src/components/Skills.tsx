import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws, FaHtml5, FaCss3Alt, FaJs, FaLaptopCode,
  FaDatabase, FaServer, FaTools, FaCode
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiRedux, SiNextdotjs, SiVite, SiFramer, SiPhp, SiMysql } from 'react-icons/si';

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const skills = [
    // Frontend
    { 
      name: 'React', 
      icon: <FaReact size={40} />, 
      level: 90, 
      color: '#61DAFB',
      description: 'Building modern, responsive user interfaces with React and its ecosystem',
      years: 3,
      category: 'frontend',
      experience: 'Advanced'
    },
    { 
      name: 'TypeScript', 
      icon: <SiTypescript size={40} />, 
      level: 85, 
      color: '#3178C6',
      description: 'Developing type-safe applications with TypeScript',
      years: 2,
      category: 'frontend',
      experience: 'Advanced'
    },
    { 
      name: 'JavaScript', 
      icon: <FaJs size={40} />, 
      level: 95, 
      color: '#F7DF1E',
      description: 'Expert in modern JavaScript (ES6+) and its best practices',
      years: 4,
      category: 'frontend',
      experience: 'Expert'
    },
    { 
      name: 'HTML5', 
      icon: <FaHtml5 size={40} />, 
      level: 95, 
      color: '#E34F26',
      description: 'Writing semantic and accessible HTML markup',
      years: 4,
      category: 'frontend',
      experience: 'Expert'
    },
    { 
      name: 'CSS3', 
      icon: <FaCss3Alt size={40} />, 
      level: 90, 
      color: '#1572B6',
      description: 'Creating responsive and animated user interfaces',
      years: 4,
      category: 'frontend',
      experience: 'Advanced'
    },
    { 
      name: 'Tailwind CSS', 
      icon: <SiTailwindcss size={40} />, 
      level: 92, 
      color: '#06B6D4',
      description: 'Building modern UIs with utility-first CSS',
      years: 2,
      category: 'frontend',
      experience: 'Advanced'
    },
    { 
      name: 'Next.js', 
      icon: <SiNextdotjs size={40} />, 
      level: 80, 
      color: '#000000',
      description: 'Full-stack React framework for production',
      years: 1,
      category: 'frontend',
      experience: 'Intermediate'
    },
    { 
      name: 'Framer Motion', 
      icon: <SiFramer size={40} />, 
      level: 85, 
      color: '#0055FF',
      description: 'Creating smooth animations and interactions',
      years: 2,
      category: 'frontend',
      experience: 'Advanced'
    },

    // Backend
    { 
      name: 'Node.js', 
      icon: <FaNodeJs size={40} />, 
      level: 88, 
      color: '#339933',
      description: 'Building scalable backend services with Node.js',
      years: 3,
      category: 'backend',
      experience: 'Advanced'
    },
    { 
      name: 'Express.js', 
      icon: <SiExpress size={40} />, 
      level: 87, 
      color: '#000000',
      description: 'Creating RESTful APIs and middleware with Express',
      years: 3,
      category: 'backend',
      experience: 'Advanced'
    },
    { 
      name: 'PHP', 
      icon: <SiPhp size={40} />, 
      level: 85, 
      color: '#777BB4',
      description: 'Server-side scripting and web development',
      years: 3,
      category: 'backend',
      experience: 'Advanced'
    },
    { 
      name: 'Redux', 
      icon: <SiRedux size={40} />, 
      level: 88, 
      color: '#764ABC',
      description: 'State management and predictable data flow',
      years: 2,
      category: 'backend',
      experience: 'Advanced'
    },
    { 
      name: 'Vite', 
      icon: <SiVite size={40} />, 
      level: 80, 
      color: '#646CFF',
      description: 'Fast build tool and development server',
      years: 1,
      category: 'backend',
      experience: 'Intermediate'
    },
    { 
      name: 'REST APIs', 
      icon: <FaServer size={40} />, 
      level: 90, 
      color: '#4A90E2',
      description: 'Designing and implementing RESTful APIs',
      years: 3,
      category: 'backend',
      experience: 'Advanced'
    },

    // Database
    { 
      name: 'MongoDB', 
      icon: <SiMongodb size={40} />, 
      level: 85, 
      color: '#47A248',
      description: 'Designing and optimizing NoSQL databases',
      years: 2,
      category: 'database',
      experience: 'Advanced'
    },
    { 
      name: 'MySQL', 
      icon: <SiMysql size={40} />, 
      level: 80, 
      color: '#4479A1',
      description: 'Relational database management and optimization',
      years: 2,
      category: 'database',
      experience: 'Intermediate'
    },
    { 
      name: 'SQLite', 
      icon: <FaDatabase size={40} />, 
      level: 75, 
      color: '#003B57',
      description: 'Lightweight database for mobile and web apps',
      years: 1,
      category: 'database',
      experience: 'Intermediate'
    },

    // Tools
    { 
      name: 'Git', 
      icon: <FaGitAlt size={40} />, 
      level: 85, 
      color: '#F05032',
      description: 'Version control and collaborative development',
      years: 3,
      category: 'tools',
      experience: 'Advanced'
    },
    { 
      name: 'Docker', 
      icon: <FaDocker size={40} />, 
      level: 80, 
      color: '#2496ED',
      description: 'Containerization and deployment automation',
      years: 2,
      category: 'tools',
      experience: 'Intermediate'
    },
    { 
      name: 'AWS', 
      icon: <FaAws size={40} />, 
      level: 75, 
      color: '#FF9900',
      description: 'Cloud infrastructure and serverless architecture',
      years: 1,
      category: 'tools',
      experience: 'Intermediate'
    },
  ];

  const categories = [
    { id: 'all', name: 'All Skills', icon: FaCode, count: 20 },
    { id: 'frontend', name: 'Frontend', icon: FaLaptopCode, count: 8 },
    { id: 'backend', name: 'Backend', icon: FaServer, count: 6 },
    { id: 'database', name: 'Database', icon: FaDatabase, count: 3 },
    { id: 'tools', name: 'Tools', icon: FaTools, count: 3 },
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="section-spacing relative">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading gradient-text">Skills & Technologies</h2>
          <p className="subheading max-w-3xl mx-auto">
            I've worked with a variety of technologies in web development. 
            Here are the main technologies I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-secondary text-primary shadow-glow'
                    : 'bg-white/5 text-tertiary hover:text-secondary hover:bg-white/10 border border-white/10'
                }`}
              >
                <category.icon size={16} />
                <span>{category.name}</span>
                <span className="bg-white/10 px-2 py-0.5 rounded-full text-xs">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={selectedCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          layout
          transition={{ duration: 0.3 }}
          className="grid-auto-fit"
        >
          {filteredSkills.length > 0 ? (
            filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={skillVariants}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                className="group relative"
              >
                <div className="card card-hover h-full p-6">
                  {/* Skill Header */}
                  <div className="flex items-center justify-between mb-4">
                    <motion.div 
                      style={{ color: skill.color }}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="p-3 rounded-lg bg-white/5 backdrop-blur-sm"
                    >
                      {skill.icon}
                    </motion.div>
                    <div className="text-right">
                      <span className={`badge ${
                        skill.experience === 'Expert' ? 'badge-success' :
                        skill.experience === 'Advanced' ? 'badge-primary' :
                        'badge-secondary'
                      }`}>
                        {skill.experience}
                      </span>
                    </div>
                  </div>

                  {/* Skill Info */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-light mb-2 group-hover:text-secondary transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-tertiary text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-tertiary">Proficiency</span>
                      <span className="text-sm font-medium text-secondary">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="flex items-center justify-between text-sm text-tertiary">
                    <span>{skill.years} years experience</span>
                    <span className="capitalize">{skill.category}</span>
                  </div>

                  {/* Hover Effect */}
                  {hoveredSkill === skill.name && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl border border-secondary/20 backdrop-blur-sm"
                    />
                  )}
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="col-span-full text-center py-12"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-light mb-2">No skills found</h3>
              <p className="text-tertiary">Try selecting a different category.</p>
            </motion.div>
          )}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-light mb-4">Ready to Build Something Amazing?</h3>
            <p className="text-tertiary mb-6 max-w-2xl mx-auto">
              I'm always learning and expanding my skill set. Whether you need a full-stack application, 
              a responsive website, or a mobile app, I have the expertise to bring your vision to life.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Let's Work Together</span>
              <FaCode className="text-sm" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 