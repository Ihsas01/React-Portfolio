import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCode, FaHeart, FaRocket, FaUsers, FaLightbulb, FaTrophy, FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', name: 'About Me', icon: FaHeart },
    { id: 'experience', name: 'Experience', icon: FaBriefcase },
    { id: 'education', name: 'Education', icon: FaGraduationCap },
    { id: 'values', name: 'Values', icon: FaLightbulb },
  ];

  const experience = [
    {
      year: '2023 - Present',
      title: 'Full Stack Developer',
      company: 'Freelance',
      location: 'Remote',
      description: 'Building modern web applications using React, Node.js, and various cloud technologies. Working with clients to deliver scalable solutions.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'TypeScript'],
      achievements: ['Delivered 10+ client projects', 'Improved performance by 40%', 'Mentored junior developers']
    },
    {
      year: '2022 - 2023',
      title: 'Web Developer',
      company: 'Personal Projects',
      location: 'Colombo, Sri Lanka',
      description: 'Developed various web applications and tools, focusing on user experience and modern development practices.',
      technologies: ['JavaScript', 'PHP', 'MySQL', 'HTML/CSS', 'Bootstrap'],
      achievements: ['Built 15+ web applications', 'Open source contributions', 'Learned new technologies']
    },
    {
      year: '2021 - 2022',
      title: 'Student Developer',
      company: 'University Projects',
      location: 'University of Technology',
      description: 'Worked on academic projects and personal learning, building foundational skills in web development.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      achievements: ['Completed degree projects', 'Built first portfolio', 'Learned version control']
    }
  ];

  const education = [
    {
      year: '2023 - 2025',
      degree: 'Diploma in Computer Hardware',
      institution: 'Technical Center.',
      location: 'Colombo, Sri Lanka',
      description: 'Completed Diploma in Computer Hardware',
      achievements: ['Technical Team Member.'],
      

    },
    {
      year: '2023 - 2025',
      degree: 'Higher Diploma',
      institution: 'SLIIT',
      location: 'Colombo, Sri Lanka',
      description: 'Completed Higher Diploma in Information Technology',
      achievements: ['Student council member'],
      gpa: '2.8/4.0'
    },
    {
      year: '2025 - 2027',
      degree: 'Reading for a Degree in Information Technology',
      institution: 'SLIIT',
      location: 'Colombo, Sri Lanka',
      description: 'Currently pursuing a Degree in Information Technology',
      achievements: ['Pending'],
      gpa: 'N/A'

    }
  ];

  const values = [
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'Writing maintainable, readable, and efficient code that others can easily understand and build upon.',
      color: 'text-secondary'
    },
    {
      icon: FaUsers,
      title: 'User-First',
      description: 'Always prioritizing user experience and accessibility in every project I work on.',
      color: 'text-accent'
    },
    {
      icon: FaRocket,
      title: 'Innovation',
      description: 'Constantly learning new technologies and finding creative solutions to complex problems.',
      color: 'text-success'
    },
    {
      icon: FaTrophy,
      title: 'Excellence',
      description: 'Striving for excellence in every project, from small features to large applications.',
      color: 'text-warning'
    }
  ];

  return (
    <section id="about" className="section-spacing relative">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="heading gradient-text">About Me</h2>
          <p className="subheading max-w-3xl mx-auto">
            I'm a passionate full-stack developer who loves creating meaningful digital experiences. 
            Let me tell you a bit more about my journey and what drives me.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-secondary text-primary shadow-glow'
                    : 'bg-white/5 text-tertiary hover:text-secondary hover:bg-white/10 border border-white/10'
                }`}
              >
                <tab.icon size={14} />
                <span className="hidden sm:inline">{tab.name}</span>
                <span className="sm:hidden">{tab.name.split(' ')[0]}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-[400px]"
          >
            {activeTab === 'about' && (
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left: Image */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative order-2 lg:order-1"
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-secondary rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                    <div className="relative bg-gradient-to-br from-primary-light to-primary rounded-2xl p-6 sm:p-8 glass">
                      <div className="text-center space-y-4 sm:space-y-6">
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-4xl sm:text-6xl"
                        >
                          👨‍💻
                        </motion.div>
                        <h3 className="text-xl sm:text-2xl font-bold text-light">Ihsas Ifthikar</h3>
                        <p className="text-tertiary text-sm sm:text-base">Full Stack Developer</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Right: Content */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-4 sm:space-y-6 order-1 lg:order-2"
                >
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-light mb-3 sm:mb-4">Passionate Developer</h3>
                    <p className="text-tertiary leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      I'm a dedicated full-stack developer with a passion for creating exceptional digital experiences. 
                      With over 4 years of experience in web development, I specialize in building modern, scalable applications 
                      that solve real-world problems.
                    </p>
                    <p className="text-tertiary leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      My journey in technology started with curiosity and has evolved into a deep love for clean code, 
                      user-centered design, and innovative solutions. I believe in writing code that not only works but 
                      is also maintainable, readable, and efficient.
                    </p>
                    <p className="text-tertiary leading-relaxed text-sm sm:text-base">
                      When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                      or sharing knowledge with the developer community. I'm always excited to take on new challenges and 
                      learn from every project.
                    </p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                    <div className="card text-center p-3 sm:p-4">
                      <div className="text-xl sm:text-2xl font-bold text-secondary mb-1">4+</div>
                      <div className="text-xs sm:text-sm text-tertiary">Years Experience</div>
                    </div>
                    <div className="card text-center p-3 sm:p-4">
                      <div className="text-xl sm:text-2xl font-bold text-secondary mb-1">25+</div>
                      <div className="text-xs sm:text-sm text-tertiary">Projects Completed</div>
                    </div>
                    <div className="card text-center p-3 sm:p-4 col-span-2 sm:col-span-1">
                      <div className="text-xl sm:text-2xl font-bold text-secondary mb-1">15+</div>
                      <div className="text-xs sm:text-sm text-tertiary">Technologies</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card p-4 sm:p-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="badge badge-primary text-xs">{exp.year}</span>
                          <span className="text-tertiary text-xs flex items-center">
                            <FaMapMarkerAlt className="mr-1" />
                            {exp.location}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-light mb-1">{exp.title}</h3>
                        <p className="text-secondary font-medium text-sm sm:text-base">{exp.company}</p>
                      </div>
                    </div>
                    
                    <p className="text-tertiary text-sm sm:text-base leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium text-light mb-2">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-xs bg-white/5 text-tertiary px-2 py-1 rounded border border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-light mb-2">Key Achievements</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start space-x-2 text-sm text-tertiary">
                              <FaStar className="text-secondary mt-1 flex-shrink-0" size={10} />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'education' && (
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card p-4 sm:p-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="badge badge-primary text-xs">{edu.year}</span>
                          <span className="text-tertiary text-xs flex items-center">
                            <FaMapMarkerAlt className="mr-1" />
                            {edu.location}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-light mb-1">{edu.degree}</h3>
                        <p className="text-secondary font-medium text-sm sm:text-base">{edu.institution}</p>
                        {edu.gpa && (
                          <p className="text-tertiary text-sm mt-1">GPA: {edu.gpa}</p>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-tertiary text-sm sm:text-base leading-relaxed mb-4">
                      {edu.description}
                    </p>

                    <div>
                      <h4 className="text-sm font-medium text-light mb-2">Achievements</h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start space-x-2 text-sm text-tertiary">
                            <FaStar className="text-secondary mt-1 flex-shrink-0" size={10} />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'values' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card p-4 sm:p-6 text-center group hover:border-secondary/30 transition-all duration-300"
                  >
                    <motion.div
                      className={`text-3xl sm:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 ${value.color}`}
                      whileHover={{ rotate: 5 }}
                    >
                      <value.icon />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-bold text-light mb-2 group-hover:text-secondary transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-tertiary text-sm sm:text-base leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default About; 