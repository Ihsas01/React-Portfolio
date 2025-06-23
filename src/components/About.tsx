import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCode, FaHeart, FaRocket, FaUsers, FaLightbulb, FaTrophy } from 'react-icons/fa';

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
      description: 'Building modern web applications using React, Node.js, and various cloud technologies. Working with clients to deliver scalable solutions.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'TypeScript'],
      achievements: ['Delivered 10+ client projects', 'Improved performance by 40%', 'Mentored junior developers']
    },
    {
      year: '2022 - 2023',
      title: 'Web Developer',
      company: 'Personal Projects',
      description: 'Developed various web applications and tools, focusing on user experience and modern development practices.',
      technologies: ['JavaScript', 'PHP', 'MySQL', 'HTML/CSS', 'Bootstrap'],
      achievements: ['Built 15+ web applications', 'Open source contributions', 'Learned new technologies']
    },
    {
      year: '2021 - 2022',
      title: 'Student Developer',
      company: 'University Projects',
      description: 'Worked on academic projects and personal learning, building foundational skills in web development.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      achievements: ['Completed degree projects', 'Built first portfolio', 'Learned version control']
    }
  ];

  const education = [
    {
      year: '2019 - 2023',
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      description: 'Studied computer science fundamentals, algorithms, data structures, and software engineering principles.',
      achievements: ['Graduated with honors', 'Dean\'s list 3 years', 'Final year project award']
    },
    {
      year: '2017 - 2019',
      degree: 'High School Diploma',
      institution: 'Science High School',
      description: 'Completed high school with focus on mathematics and sciences.',
      achievements: ['Top 10% of class', 'Science fair winner', 'Student council member']
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
          className="text-center mb-16"
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
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-secondary text-primary shadow-glow'
                    : 'bg-white/5 text-tertiary hover:text-secondary hover:bg-white/10 border border-white/10'
                }`}
              >
                <tab.icon size={16} />
                <span>{tab.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-[400px]"
        >
          {activeTab === 'about' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-secondary rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                  <div className="relative bg-gradient-to-br from-primary-light to-primary rounded-2xl p-8 glass">
                    <div className="text-center space-y-6">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-6xl"
                      >
                        👨‍💻
                      </motion.div>
                      <h3 className="text-2xl font-bold text-light">Ihsas Ifthikar</h3>
                      <p className="text-tertiary">Full Stack Developer</p>
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
                className="space-y-6"
              >
                <div>
                  <h3 className="text-2xl font-bold text-light mb-4">Passionate Developer</h3>
                  <p className="text-tertiary leading-relaxed mb-4">
                    I'm a dedicated full-stack developer with a passion for creating exceptional digital experiences. 
                    With over 4 years of experience in web development, I specialize in building modern, scalable applications 
                    that solve real-world problems.
                  </p>
                  <p className="text-tertiary leading-relaxed mb-4">
                    My journey in technology started with curiosity and has evolved into a deep love for clean code, 
                    user-centered design, and innovative solutions. I believe in writing code that not only works but 
                    is also maintainable, readable, and efficient.
                  </p>
                  <p className="text-tertiary leading-relaxed">
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                    or sharing knowledge with the developer community. I'm always excited to take on new challenges and 
                    learn from every project.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="card text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">4+</div>
                    <div className="text-sm text-tertiary">Years Experience</div>
                  </div>
                  <div className="card text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">20+</div>
                    <div className="text-sm text-tertiary">Projects Completed</div>
                  </div>
                  <div className="card text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">15+</div>
                    <div className="text-sm text-tertiary">Technologies</div>
                  </div>
                  <div className="card text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">100%</div>
                    <div className="text-sm text-tertiary">Client Satisfaction</div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="card">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="lg:w-1/4">
                        <div className="badge badge-primary mb-2">{exp.year}</div>
                        <h3 className="text-xl font-bold text-light mb-1">{exp.title}</h3>
                        <p className="text-secondary font-medium">{exp.company}</p>
                      </div>
                      <div className="lg:w-3/4">
                        <p className="text-tertiary mb-4 leading-relaxed">{exp.description}</p>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-light mb-2">Technologies Used:</h4>
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
                          <h4 className="text-sm font-semibold text-light mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="text-sm text-tertiary flex items-center">
                                <span className="text-secondary mr-2">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-1/4">
                      <div className="badge badge-primary mb-2">{edu.year}</div>
                      <h3 className="text-xl font-bold text-light mb-1">{edu.degree}</h3>
                      <p className="text-secondary font-medium">{edu.institution}</p>
                    </div>
                    <div className="lg:w-3/4">
                      <p className="text-tertiary mb-4 leading-relaxed">{edu.description}</p>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-light mb-2">Achievements:</h4>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="text-sm text-tertiary flex items-center">
                              <span className="text-secondary mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'values' && (
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card text-center group hover:border-secondary/30 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`text-4xl mb-4 ${value.color}`}
                  >
                    <value.icon />
                  </motion.div>
                  <h3 className="text-xl font-bold text-light mb-3 group-hover:text-secondary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-tertiary leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default About; 