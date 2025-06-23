import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaSearch, FaStar, FaCode, FaMobile, FaServer, FaLaptopCode, FaEye, FaHeart } from 'react-icons/fa';

// Placeholder images with better quality
const bloodDonationImg = 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center';
const freshConImg = 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop&crop=center';
const freeChoiceImg = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center';
const portfolioVanillaImg = 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop&crop=center';
const portfolioReactImg = 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop&crop=center';
const currencyConverterImg = 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=800&h=600&fit=crop&crop=center';
const passwordGeneratorImg = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&crop=center';
const stopwatchImg = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center';
const rockPaperScissorsImg = 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop&crop=center';
const ageCalculatorImg = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center';
const onlineQuizImg = 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop&crop=center';
const financialTrackerImg = 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&crop=center';
const onlineFruitStoreImg = 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=800&h=600&fit=crop&crop=center';

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  const categories = [
    { id: 'all', name: 'All Projects', icon: FaCode, count: 13 },
    { id: 'full-stack', name: 'Full Stack', icon: FaServer, count: 3 },
    { id: 'web-mini', name: 'Web Apps', icon: FaLaptopCode, count: 9 },
    { id: 'mobile', name: 'Mobile Apps', icon: FaMobile, count: 1 },
  ];

  const projects = [
    {
      id: '1',
      title: 'Advanced Blood Donation System',
      description: 'A comprehensive MERN stack application for managing blood donations and requests. Features include donor registration, blood inventory management, real-time blood request tracking, and automated matching system for blood types.',
      image: bloodDonationImg,
      github: 'https://github.com/Ihsas01/Advanced-Blood-Donation-System',
      demo: 'https://blood-donation-system.vercel.app',
      category: 'full-stack',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux', 'JWT', 'Socket.io'],
      featured: true,
      stats: { stars: 145, forks: 38, views: 1200 },
      difficulty: 'Advanced',
      duration: '3 months',
    },
    {
      id: '2',
      title: 'FreshCoN Online Grocery',
      description: 'A full-featured online grocery ordering system built with PHP and MySQL. Features include product management, shopping cart, order processing, delivery tracking, and admin dashboard for inventory management.',
      image: freshConImg,
      github: 'https://github.com/Ihsas01/Online-Grocery-FreshCoN',
      demo: 'https://freshco-grocery.000webhostapp.com',
      category: 'full-stack',
      technologies: ['PHP', 'MySQL', 'XAMPP', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      featured: true,
      stats: { stars: 98, forks: 25, views: 850 },
      difficulty: 'Advanced',
      duration: '2.5 months',
    },
    {
      id: '3',
      title: 'FreeChoice Online Store',
      description: 'A versatile e-commerce platform for various product categories. Features include user authentication, product catalog, shopping cart, payment integration, order management, and admin panel for store management.',
      image: freeChoiceImg,
      github: 'https://github.com/Ihsas01/Free_Choise',
      demo: 'https://freechoice-store.000webhostapp.com',
      category: 'full-stack',
      technologies: ['PHP', 'MySQL', 'XAMPP', 'jQuery', 'Bootstrap', 'PayPal API'],
      featured: true,
      stats: { stars: 112, forks: 29, views: 950 },
      difficulty: 'Advanced',
      duration: '3 months',
    },
    {
      id: '4',
      title: 'Portfolio Website (HTML/CSS/JS)',
      description: 'A responsive portfolio website built with vanilla web technologies. Features smooth animations, interactive elements, and modern design principles.',
      image: portfolioVanillaImg,
      github: 'https://github.com/Ihsas01/Portfolio',
      demo: 'https://your-portfolio-vanilla.netlify.app',
      category: 'web-mini',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
      featured: false,
      stats: { stars: 35, forks: 8, views: 300 },
      difficulty: 'Intermediate',
      duration: '1 month',
    },
    {
      id: '5',
      title: 'Portfolio Website (React)',
      description: 'A modern portfolio website built with React. Features component-based architecture, smooth transitions, and responsive design.',
      image: portfolioReactImg,
      github: 'https://github.com/yourusername/portfolio-react',
      demo: 'https://your-portfolio-react.vercel.app',
      category: 'web-mini',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      featured: false,
      stats: { stars: 42, forks: 10, views: 400 },
      difficulty: 'Intermediate',
      duration: '1.5 months',
    },
    {
      id: '6',
      title: 'Currency Converter',
      description: 'A real-time currency converter application that fetches current exchange rates. Features include multiple currency support and responsive design.',
      image: currencyConverterImg,
      github: 'https://github.com/Ihsas01/Currency-Converter',
      demo: 'https://currency-converter-app.netlify.app',
      category: 'web-mini',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Exchange Rate API'],
      featured: false,
      stats: { stars: 28, forks: 6, views: 250 },
      difficulty: 'Beginner',
      duration: '2 weeks',
    },
    {
      id: '7',
      title: 'Password Generator',
      description: 'A secure password generator with customizable options. Features include length control, character type selection, and copy-to-clipboard functionality.',
      image: passwordGeneratorImg,
      github: 'https://github.com/Ihsas01/Password-Generator',
      demo: 'https://password-generator-bice-rho.vercel.app',
      category: 'web-mini',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      featured: false,
      stats: { stars: 31, forks: 7, views: 280 },
      difficulty: 'Beginner',
      duration: '1 week',
    },
    {
      id: '8',
      title: 'Stopwatch',
      description: 'A precise stopwatch application with start, pause, and reset functionality. Features include lap time recording and clean UI.',
      image: stopwatchImg,
      github: 'https://github.com/Ihsas01/Stop-Watch',
      demo: 'https://stop-watch-omega-ivory.vercel.app',
      category: 'web-mini',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      featured: false,
      stats: { stars: 25, forks: 5, views: 200 },
      difficulty: 'Beginner',
      duration: '1 week',
    },
    {
      id: '9',
      title: 'Rock Paper Scissors Game',
      description: 'An interactive rock paper scissors game with score tracking. Features include animations, sound effects, and responsive design.',
      image: rockPaperScissorsImg,
      github: 'https://github.com/Ihsas01/Rock-Paper-Scissors-Game',
      demo: 'https://rock-paper-scissors-game-two-nu.vercel.app',
      category: 'web-mini',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      featured: false,
      stats: { stars: 33, forks: 8, views: 320 },
      difficulty: 'Beginner',
      duration: '1 week',
    },
    {
      id: '10',
      title: 'Age Calculator',
      description: 'A precise age calculator that computes exact age in years, months, and days. Features include date validation and clean UI.',
      image: ageCalculatorImg,
      github: 'https://github.com/Ihsas01/Age-Calculator',
      demo: 'https://age-calculator-rose-tau.vercel.app',
      category: 'web-mini',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      featured: false,
      stats: { stars: 29, forks: 6, views: 260 },
      difficulty: 'Beginner',
      duration: '1 week',
    },
    {
      id: '11',
      title: 'Online Quiz',
      description: 'An interactive quiz application with multiple-choice questions. Features include score tracking, timer, and result summary.',
      image: onlineQuizImg,
      github: 'https://github.com/Ihsas01/Online-Quiz',
      demo: 'https://online-quiz-app.netlify.app',
      category: 'web-mini',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      featured: false,
      stats: { stars: 37, forks: 9, views: 350 },
      difficulty: 'Intermediate',
      duration: '2 weeks',
    },
    {
      id: '12',
      title: 'Financial Tracker App',
      description: 'A comprehensive financial management Android application that helps users track expenses, manage budgets, and visualize spending patterns. Features include expense categorization, budget planning, and financial reports.',
      image: financialTrackerImg,
      github: 'https://github.com/Ihsas01/Financial-Tracker-App',
      demo: 'https://play.google.com/store/apps/details?id=com.ihsas.financialtracker',
      category: 'mobile',
      technologies: ['Java', 'Android Studio', 'SQLite', 'Google Play Services'],
      featured: false,
      stats: { stars: 45, forks: 12, views: 500 },
      difficulty: 'Advanced',
      duration: '2 months',
    },
    {
      id: '13',
      title: 'Online Fruit Store',
      description: 'A specialized e-commerce platform for fresh fruits and vegetables. Features include product catalog, shopping cart, order management, and delivery tracking.',
      image: onlineFruitStoreImg,
      github: 'https://github.com/Ihsas01/Online-Fruit-Store',
      demo: 'https://online-fruit-store.000webhostapp.com',
      category: 'web-mini',
      technologies: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      featured: false,
      stats: { stars: 52, forks: 15, views: 420 },
      difficulty: 'Intermediate',
      duration: '1.5 months',
    },
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Filter projects
  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="projects" className="section-spacing relative">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading gradient-text">Featured Projects</h2>
          <p className="subheading max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            web applications, and mobile development.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-tertiary" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-12 w-full"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
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
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid-auto-fit"
            >
              {[...Array(6)].map((_, i) => (
                <div key={i} className="card animate-pulse">
                  <div className="skeleton h-48 rounded-lg mb-4" />
                  <div className="skeleton h-6 rounded mb-2" />
                  <div className="skeleton h-4 rounded mb-2" />
                  <div className="skeleton h-4 rounded w-3/4" />
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="projects"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid-auto-fit"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  layout
                  className="group relative"
                >
                  <div className="card card-hover h-full flex flex-col overflow-hidden">
                    {/* Project Image */}
                    <div className="relative overflow-hidden rounded-t-2xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Overlay Actions */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex space-x-4">
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-secondary text-primary p-3 rounded-full hover:shadow-glow transition-all duration-300"
                          >
                            <FaExternalLinkAlt size={20} />
                          </motion.a>
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
                          >
                            <FaGithub size={20} />
                          </motion.a>
                        </div>
                      </div>

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="badge badge-primary">
                            <FaHeart size={12} className="mr-1" />
                            Featured
                          </span>
                        </div>
                      )}

                      {/* Stats */}
                      <div className="absolute top-4 right-4 flex space-x-2">
                        <span className="badge bg-black/50 text-white text-xs">
                          <FaStar size={10} className="mr-1" />
                          {project.stats.stars}
                        </span>
                        <span className="badge bg-black/50 text-white text-xs">
                          <FaEye size={10} className="mr-1" />
                          {project.stats.views}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-light group-hover:text-secondary transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-tertiary text-sm leading-relaxed mb-4 flex-1">
                        {project.description}
                      </p>

                      {/* Project Meta */}
                      <div className="flex items-center justify-between mb-4 text-xs text-tertiary">
                        <span className="badge badge-secondary">
                          {project.difficulty}
                        </span>
                        <span>{project.duration}</span>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map((tech, index) => (
                          <span
                            key={index}
                            className="text-xs bg-white/5 text-tertiary px-2 py-1 rounded border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-xs text-tertiary px-2 py-1">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-3 mt-auto">
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn-primary flex-1 text-center text-sm py-2"
                        >
                          Live Demo
                        </motion.a>
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn-secondary flex-1 text-center text-sm py-2"
                        >
                          Code
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {!isLoading && filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-light mb-2">No projects found</h3>
            <p className="text-tertiary">Try adjusting your search or filter criteria.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects; 