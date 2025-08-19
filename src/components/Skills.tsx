import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws, FaHtml5, FaCss3Alt, FaJs, FaLaptopCode,
  FaDatabase, FaServer, FaTools, FaCode, FaTimes, FaStar, FaInfo
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiRedux, SiNextdotjs, SiVite, SiFramer, SiPhp, SiMysql } from 'react-icons/si';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  color: string;
  description: string;
  years: number;
  category: string;
  experience: string;
  projects?: number;
  certifications?: string[];
}

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const skills: Skill[] = [
    // Frontend
    { 
      name: 'React', 
      icon: <FaReact size={40} />, 
      level: 60, 
      color: '#61DAFB',
      description: 'Building modern, responsive user interfaces with React and its ecosystem',
      years: 2,
      category: 'frontend',
      experience: 'Advanced',
      projects: 3,
      certifications: ['React Developer Certification']
    },
    { 
      name: 'TypeScript', 
      icon: <SiTypescript size={40} />, 
      level: 65, 
      color: '#3178C6',
      description: 'Developing type-safe applications with TypeScript',
      years: 2,
      category: 'frontend',
      experience: 'Advanced',
      projects: 2
    },
    { 
      name: 'JavaScript', 
      icon: <FaJs size={40} />, 
      level: 75, 
      color: '#F7DF1E',
      description: 'Expert in modern JavaScript (ES6+) and its best practices',
      years: 3,
      category: 'frontend',
      experience: 'Expert',
      projects: 8
    },
    { 
      name: 'HTML5', 
      icon: <FaHtml5 size={40} />, 
      level: 95, 
      color: '#E34F26',
      description: 'Writing semantic and accessible HTML markup',
      years: 4,
      category: 'frontend',
      experience: 'Expert',
      projects: 20
    },
    { 
      name: 'CSS3', 
      icon: <FaCss3Alt size={40} />, 
      level: 95, 
      color: '#1572B6',
      description: 'Creating responsive and animated user interfaces',
      years: 3,
      category: 'frontend',
      experience: 'Advanced',
      projects: 20
    },
    { 
      name: 'Tailwind CSS', 
      icon: <SiTailwindcss size={40} />, 
      level: 70, 
      color: '#06B6D4',
      description: 'Building modern UIs with utility-first CSS',
      years: 2,
      category: 'frontend',
      experience: 'Advanced',
      projects: 5
    },
    { 
      name: 'Next.js', 
      icon: <SiNextdotjs size={40} />, 
      level: 65, 
      color: '#000000',
      description: 'Full-stack React framework for production',
      years: 1,
      category: 'frontend',
      experience: 'Intermediate',
      projects: 2
    },
    { 
      name: 'Framer Motion', 
      icon: <SiFramer size={40} />, 
      level: 20, 
      color: '#0055FF',
      description: 'Creating smooth animations and interactions',
      years: 2,
      category: 'frontend',
      experience: 'Advanced',
      projects: 0
    },

    // Backend
    { 
      name: 'Node.js', 
      icon: <FaNodeJs size={40} />, 
      level: 70, 
      color: '#339933',
      description: 'Building scalable backend services with Node.js',
      years: 2,
      category: 'backend',
      experience: 'Advanced',
      projects: 2
    },
    { 
      name: 'Express.js', 
      icon: <SiExpress size={40} />, 
      level: 65, 
      color: '#000000',
      description: 'Creating RESTful APIs and middleware with Express',
      years: 1,
      category: 'backend',
      experience: 'Advanced',
      projects: 4
    },
    { 
      name: 'PHP', 
      icon: <SiPhp size={40} />, 
      level: 80, 
      color: '#777BB4',
      description: 'Server-side scripting and web development',
      years: 3,
      category: 'backend',
      experience: 'Advanced',
      projects: 8
    },
    { 
      name: 'Redux', 
      icon: <SiRedux size={40} />, 
      level: 40, 
      color: '#764ABC',
      description: 'State management and predictable data flow',
      years: 1,
      category: 'backend',
      experience: 'Advanced',
      projects: 0
    },
    { 
      name: 'Vite', 
      icon: <SiVite size={40} />, 
      level: 70, 
      color: '#646CFF',
      description: 'Fast build tool and development server',
      years: 1,
      category: 'backend',
      experience: 'Intermediate',
      projects: 5
    },
    { 
      name: 'REST APIs', 
      icon: <FaServer size={40} />, 
      level: 60, 
      color: '#4A90E2',
      description: 'Designing and implementing RESTful APIs',
      years: 2,
      category: 'backend',
      experience: 'Advanced',
      projects: 2
    },

    // Database
    { 
      name: 'MongoDB', 
      icon: <SiMongodb size={40} />, 
      level: 75, 
      color: '#47A248',
      description: 'Designing and optimizing NoSQL databases',
      years: 1,
      category: 'database',
      experience: 'Advanced',
      projects: 3
    },
    { 
      name: 'MySQL', 
      icon: <SiMysql size={40} />, 
      level: 75, 
      color: '#4479A1',
      description: 'Relational database management and optimization',
      years: 2,
      category: 'database',
      experience: 'Intermediate',
      projects: 5
    },
    { 
      name: 'SQLite', 
      icon: <FaDatabase size={40} />, 
      level: 70, 
      color: '#003B57',
      description: 'Lightweight database for mobile and web apps',
      years: 1,
      category: 'database',
      experience: 'Intermediate',
      projects: 4
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
      experience: 'Advanced',
      projects: 20
    },
    { 
      name: 'Docker', 
      icon: <FaDocker size={40} />, 
      level: 20, 
      color: '#2496ED',
      description: 'Containerization and deployment',
      years: 1,
      category: 'tools',
      experience: 'Intermediate',
      projects: 0
    },
    { 
      name: 'AWS', 
      icon: <FaAws size={40} />, 
      level: 50, 
      color: '#FF9900',
      description: 'Cloud services and deployment',
      years: 1,
      category: 'tools',
      experience: 'Intermediate',
      projects: 3
    }
  ];

  const categories = [
    { id: 'all', name: 'All Skills', icon: FaCode, count: skills.length },
    { id: 'frontend', name: 'Frontend', icon: FaLaptopCode, count: skills.filter(s => s.category === 'frontend').length },
    { id: 'backend', name: 'Backend', icon: FaServer, count: skills.filter(s => s.category === 'backend').length },
    { id: 'database', name: 'Database', icon: FaDatabase, count: skills.filter(s => s.category === 'database').length },
    { id: 'tools', name: 'Tools', icon: FaTools, count: skills.filter(s => s.category === 'tools').length },
  ];

  const filteredSkills = skills.filter(skill => 
    selectedCategory === 'all' || skill.category === selectedCategory
  );

  const openSkillModal = (skill: Skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeSkillModal = () => {
    setIsModalOpen(false);
    setSelectedSkill(null);
    document.body.style.overflow = 'unset';
  };

  const getExperienceColor = (experience: string) => {
    switch (experience) {
      case 'Expert': return 'text-green-400';
      case 'Advanced': return 'text-blue-400';
      case 'Intermediate': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <>
      <section id="skills" className="section-spacing relative">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="heading gradient-text">Skills & Expertise</h2>
            <p className="subheading max-w-3xl mx-auto">
              I've developed a diverse set of skills through years of experience in web development. 
              Here's what I bring to the table.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-secondary text-primary shadow-glow'
                      : 'bg-white/5 text-tertiary hover:text-secondary hover:bg-white/10 border border-white/10'
                  }`}
                >
                  <category.icon size={14} />
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="bg-white/10 px-2 py-0.5 rounded-full text-xs">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <motion.div
                  className="card card-hover h-full flex flex-col items-center text-center p-4 sm:p-6 cursor-pointer"
                  onHoverStart={() => setHoveredSkill(skill.name)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  onClick={() => openSkillModal(skill)}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Skill Icon */}
                  <motion.div
                    className="mb-4"
                    animate={{
                      scale: hoveredSkill === skill.name ? 1.1 : 1,
                      rotate: hoveredSkill === skill.name ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </motion.div>

                  {/* Skill Name */}
                  <h3 className="text-sm sm:text-base font-semibold text-light mb-2 group-hover:text-secondary transition-colors duration-300">
                    {skill.name}
                  </h3>

                  {/* Experience Level */}
                  <div className="flex items-center space-x-1 mb-3">
                    <span className={`text-xs font-medium ${getExperienceColor(skill.experience)}`}>
                      {skill.experience}
                    </span>
                    <FaStar className="text-xs text-yellow-400" />
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-white/10 rounded-full h-2 mb-3">
                    <motion.div
                      className="h-2 rounded-full"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>

                  {/* Skill Level */}
                  <span className="text-xs text-tertiary">
                    {skill.level}%
                  </span>

                  {/* Info Button for Mobile */}
                  <motion.button
                    className="absolute top-2 right-2 p-1 rounded-full bg-white/10 text-tertiary hover:text-secondary transition-all duration-300 sm:hidden"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      openSkillModal(skill);
                    }}
                  >
                    <FaInfo size={12} />
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-16"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="card text-center p-6">
                <div className="text-3xl font-bold text-secondary mb-2">
                  {skills.length}+
                </div>
                <div className="text-tertiary text-sm">Technologies</div>
              </div>
              <div className="card text-center p-6">
                <div className="text-3xl font-bold text-secondary mb-2">
                  {skills.reduce((acc, skill) => acc + (skill.projects || 0), 0)}+
                </div>
                <div className="text-tertiary text-sm">Projects Completed</div>
              </div>
              <div className="card text-center p-6">
                <div className="text-3xl font-bold text-secondary mb-2">
                  {Math.max(...skills.map(s => s.years))}+
                </div>
                <div className="text-tertiary text-sm">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skill Details Modal */}
      <AnimatePresence>
        {isModalOpen && selectedSkill && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              onClick={closeSkillModal}
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-primary-light/95 backdrop-blur-md border border-white/10 rounded-2xl z-50 m-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div style={{ color: selectedSkill.color }}>
                      {selectedSkill.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-light">
                        {selectedSkill.name}
                      </h3>
                      <p className="text-tertiary text-sm">
                        {selectedSkill.experience} Level
                      </p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={closeSkillModal}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                    aria-label="Close modal"
                  >
                    <FaTimes className="text-light text-xl" />
                  </motion.button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Description */}
                <p className="text-tertiary mb-6 leading-relaxed">
                  {selectedSkill.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">
                      {selectedSkill.years}
                    </div>
                    <div className="text-tertiary text-sm">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">
                      {selectedSkill.projects || 0}
                    </div>
                    <div className="text-tertiary text-sm">Projects</div>
                  </div>
                </div>

                {/* Progress */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-light">Proficiency</span>
                    <span className="text-sm text-tertiary">{selectedSkill.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3">
                    <motion.div
                      className="h-3 rounded-full"
                      style={{ backgroundColor: selectedSkill.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedSkill.level}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </div>

                {/* Certifications */}
                {selectedSkill.certifications && selectedSkill.certifications.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-light mb-3">Certifications</h4>
                    <div className="space-y-2">
                      {selectedSkill.certifications.map((cert, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-tertiary">
                          <FaStar className="text-yellow-400" size={12} />
                          <span>{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Experience Level */}
                <div className="text-center">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getExperienceColor(selectedSkill.experience)} bg-white/5`}>
                    {selectedSkill.experience} Experience
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Skills; 