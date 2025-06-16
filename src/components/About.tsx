import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaRocket, FaLightbulb } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaCode className="text-4xl text-secondary" />,
      title: "Clean Code",
      description: "Writing maintainable and scalable code following best practices and design patterns."
    },
    {
      icon: <FaLaptopCode className="text-4xl text-secondary" />,
      title: "Responsive Design",
      description: "Creating beautiful and functional interfaces that work seamlessly across all devices."
    },
    {
      icon: <FaRocket className="text-4xl text-secondary" />,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency to provide the best user experience."
    },
    {
      icon: <FaLightbulb className="text-4xl text-secondary" />,
      title: "Innovation",
      description: "Staying up-to-date with the latest technologies and implementing creative solutions."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div id="about" className="w-full min-h-screen bg-primary text-light py-20">
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold inline border-b-4 border-secondary mb-4">About Me</h2>
          <p className="py-4 text-tertiary text-lg">Get to know me better</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-tertiary text-lg leading-relaxed">
              Hello! I'm a passionate full-stack developer with a strong foundation in both
              front-end and back-end technologies. I enjoy creating seamless, user-friendly
              applications that solve real-world problems.
            </p>
            <p className="text-tertiary text-lg leading-relaxed">
              My journey in web development started with a curiosity about how things work
              on the internet, which led me to dive deep into various technologies and
              frameworks. I'm constantly learning and adapting to new technologies to stay
              at the forefront of web development.
            </p>
            <p className="text-tertiary text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing
              to open-source projects, or sharing my knowledge through technical writing
              and mentoring.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-primary-light/50 rounded-xl p-6 backdrop-blur-sm"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-tertiary">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-6">Let's Work Together</h3>
          <p className="text-tertiary text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-8 px-8 py-3 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary-light transition-colors"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 