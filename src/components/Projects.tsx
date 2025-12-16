import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaSearch, FaStar, FaCode, FaMobile, FaServer, FaLaptopCode, FaEye, FaHeart, FaTimes, FaClock, FaGlobe } from 'react-icons/fa';

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

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  category: string;
  technologies: string[];
  featured: boolean;
  stats: { stars: number; forks: number; views: number };
  difficulty: string;
  duration: string;
  longDescription?: string;
  features?: string[];
  challenges?: string[];
  learnings?: string[];
}

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Projects', icon: FaCode, count: 13 },
    { id: 'full-stack', name: 'Full Stack', icon: FaServer, count: 3 },
    { id: 'web-mini', name: 'Web Apps', icon: FaLaptopCode, count: 9 },
    { id: 'mobile', name: 'Mobile Apps', icon: FaMobile, count: 1 },
  ];

  const projects: Project[] = [
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
      longDescription: 'A comprehensive blood donation management system built with the MERN stack. The application facilitates the entire blood donation process from donor registration to blood request fulfillment.',
      features: [
        'User authentication and authorization with JWT',
        'Real-time blood request tracking',
        'Automated blood type matching system',
        'Donor and recipient management',
        'Blood inventory tracking',
        'Admin dashboard for hospital staff',
        'Mobile-responsive design',
        'Real-time notifications'
      ],
      challenges: [
        'Implementing real-time updates across multiple users',
        'Ensuring data security and privacy compliance',
        'Optimizing database queries for large datasets',
        'Creating an intuitive user interface for medical staff'
      ],
      learnings: [
        'Advanced state management with Redux',
        'Real-time communication with Socket.io',
        'Database optimization techniques',
        'Healthcare application security best practices'
      ]
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
      longDescription: 'A comprehensive e-commerce platform specifically designed for grocery shopping. The system handles the complete order lifecycle from product browsing to delivery.',
      features: [
        'Product catalog with categories and search',
        'Shopping cart with quantity management',
        'User registration and profile management',
        'Order processing and payment integration',
        'Delivery tracking system',
        'Admin panel for inventory management',
        'Sales reports and analytics',
        'Email notifications'
      ],
      challenges: [
        'Managing product inventory in real-time',
        'Implementing secure payment processing',
        'Creating an efficient delivery tracking system',
        'Ensuring data consistency across multiple operations'
      ],
      learnings: [
        'E-commerce platform architecture',
        'Payment gateway integration',
        'Inventory management systems',
        'User experience optimization'
      ]
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
      longDescription: 'A multi-category e-commerce platform that supports various product types. The system includes advanced features for both customers and administrators.',
      features: [
        'Multi-category product management',
        'Advanced search and filtering',
        'Wishlist functionality',
        'Order history and tracking',
        'Customer reviews and ratings',
        'Admin dashboard with analytics',
        'Bulk product import/export',
        'Discount and coupon system'
      ],
      challenges: [
        'Designing a flexible product categorization system',
        'Implementing advanced search algorithms',
        'Managing user-generated content (reviews)',
        'Creating an intuitive admin interface'
      ],
      learnings: [
        'Advanced database design patterns',
        'Search algorithm implementation',
        'User-generated content moderation',
        'E-commerce analytics and reporting'
      ]
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
      longDescription: 'A modern portfolio website showcasing personal projects and skills. Built with vanilla web technologies for optimal performance.',
      features: [
        'Responsive design for all devices',
        'Smooth scroll animations',
        'Interactive project showcase',
        'Contact form with validation',
        'Dark/light theme toggle',
        'Performance optimized',
        'SEO friendly structure'
      ],
      challenges: [
        'Creating smooth animations without libraries',
        'Ensuring cross-browser compatibility',
        'Optimizing for mobile performance',
        'Implementing accessible design patterns'
      ],
      learnings: [
        'Advanced CSS animations and transitions',
        'JavaScript performance optimization',
        'Web accessibility guidelines',
        'Cross-browser compatibility techniques'
      ]
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
      longDescription: 'A modern, interactive portfolio built with React and modern web technologies. Features smooth animations and excellent user experience.',
      features: [
        'Component-based architecture',
        'Smooth page transitions',
        'Interactive animations',
        'Responsive design',
        'Performance optimized',
        'Modern UI/UX design',
        'Easy content management'
      ],
      challenges: [
        'Managing complex state across components',
        'Optimizing bundle size',
        'Implementing smooth animations',
        'Ensuring good performance on mobile'
      ],
      learnings: [
        'React hooks and state management',
        'Performance optimization techniques',
        'Modern animation libraries',
        'Component design patterns'
      ]
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
      longDescription: 'A real-time currency converter that provides accurate exchange rates for multiple currencies worldwide.',
      features: [
        'Real-time exchange rates',
        'Multiple currency support',
        'Historical rate charts',
        'Offline functionality',
        'Responsive design',
        'Fast and accurate calculations'
      ],
      challenges: [
        'Handling API rate limits',
        'Ensuring data accuracy',
        'Implementing offline functionality',
        'Creating an intuitive interface'
      ],
      learnings: [
        'API integration and error handling',
        'Data validation techniques',
        'Offline web app development',
        'User interface design principles'
      ]
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
      longDescription: 'A secure and customizable password generator that helps users create strong passwords for their accounts.',
      features: [
        'Customizable password length',
        'Character type selection',
        'Password strength indicator',
        'Copy to clipboard functionality',
        'Password history',
        'Secure random generation'
      ],
      challenges: [
        'Implementing cryptographically secure random generation',
        'Creating an intuitive strength indicator',
        'Ensuring cross-browser clipboard compatibility',
        'Designing a user-friendly interface'
      ],
      learnings: [
        'Cryptographic security principles',
        'Browser API integration',
        'User interface design',
        'Security best practices'
      ]
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
      longDescription: 'A precise and feature-rich stopwatch application with lap time recording and a clean, intuitive interface.',
      features: [
        'Precise time measurement',
        'Lap time recording',
        'Start, pause, and reset functionality',
        'Clean and intuitive UI',
        'Responsive design',
        'Keyboard shortcuts'
      ],
      challenges: [
        'Ensuring precise time measurement',
        'Managing multiple lap times',
        'Creating smooth animations',
        'Implementing keyboard shortcuts'
      ],
      learnings: [
        'JavaScript timing functions',
        'State management for timers',
        'User interface design',
        'Keyboard event handling'
      ]
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
      longDescription: 'An engaging rock paper scissors game with animations, sound effects, and comprehensive score tracking.',
      features: [
        'Interactive game mechanics',
        'Score tracking and statistics',
        'Animated game elements',
        'Sound effects',
        'Responsive design',
        'Game history'
      ],
      challenges: [
        'Creating engaging animations',
        'Implementing sound effects',
        'Designing an intuitive game flow',
        'Ensuring fair random selection'
      ],
      learnings: [
        'Game development principles',
        'Animation techniques',
        'Audio integration',
        'User engagement strategies'
      ]
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
      longDescription: 'A precise age calculator that provides accurate age calculations in years, months, and days with a clean interface.',
      features: [
        'Precise age calculation',
        'Date validation',
        'Clean and intuitive UI',
        'Responsive design',
        'Multiple date formats support'
      ],
      challenges: [
        'Handling leap years correctly',
        'Implementing date validation',
        'Creating an intuitive interface',
        'Ensuring calculation accuracy'
      ],
      learnings: [
        'Date manipulation in JavaScript',
        'Form validation techniques',
        'User interface design',
        'Mathematical calculations'
      ]
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
      longDescription: 'An interactive quiz application with multiple-choice questions, timer functionality, and comprehensive result tracking.',
      features: [
        'Multiple-choice questions',
        'Timer functionality',
        'Score tracking',
        'Result summary',
        'Question randomization',
        'Responsive design'
      ],
      challenges: [
        'Implementing timer functionality',
        'Randomizing question order',
        'Calculating accurate scores',
        'Creating engaging question formats'
      ],
      learnings: [
        'Timer implementation techniques',
        'Data randomization algorithms',
        'Score calculation methods',
        'User experience design'
      ]
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
      longDescription: 'A comprehensive Android application for personal finance management with advanced features for expense tracking and budget planning.',
      features: [
        'Expense tracking and categorization',
        'Budget planning and monitoring',
        'Financial reports and analytics',
        'Data visualization with charts',
        'Export functionality',
        'Backup and sync',
        'Reminder notifications'
      ],
      challenges: [
        'Designing an intuitive mobile interface',
        'Implementing complex data visualization',
        'Ensuring data security and privacy',
        'Optimizing app performance'
      ],
      learnings: [
        'Android app development',
        'Mobile UI/UX design',
        'Data visualization techniques',
        'Mobile app optimization'
      ]
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
      longDescription: 'A specialized e-commerce platform focused on fresh fruits and vegetables with features tailored for perishable goods.',
      features: [
        'Product catalog with categories',
        'Shopping cart functionality',
        'Order management system',
        'Delivery tracking',
        'Freshness indicators',
        'Seasonal product highlighting',
        'Customer reviews'
      ],
      challenges: [
        'Managing perishable inventory',
        'Implementing freshness indicators',
        'Creating seasonal product features',
        'Ensuring fast delivery coordination'
      ],
      learnings: [
        'Specialized e-commerce development',
        'Inventory management for perishables',
        'Seasonal product strategies',
        'Delivery system integration'
      ]
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

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section id="projects" className="section-spacing relative">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
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
            className="mb-8 sm:mb-12"
          >
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md w-full">
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
              <div className="flex flex-wrap gap-2 sm:gap-3">
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
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                          <div className="flex space-x-3 sm:space-x-4">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => openProjectModal(project)}
                              className="bg-secondary text-primary p-2 sm:p-3 rounded-full hover:shadow-glow transition-all duration-300"
                              aria-label="View details"
                            >
                              <FaEye size={16} />
                            </motion.button>
                            <motion.a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/30 transition-all duration-300"
                              aria-label="Live demo"
                            >
                              <FaExternalLinkAlt size={16} />
                            </motion.a>
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="bg-black/50 text-white p-2 sm:p-3 rounded-full hover:bg-black/70 transition-all duration-300"
                              aria-label="View code"
                            >
                              <FaGithub size={16} />
                            </motion.a>
                          </div>
                        </div>

                        {/* Featured Badge */}
                        {project.featured && (
                          <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                            <span className="badge badge-primary text-xs">
                              <FaHeart size={10} className="mr-1" />
                              Featured
                            </span>
                          </div>
                        )}

                        {/* Stats */}
                        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex space-x-2">
                          <span className="badge bg-black/50 text-white text-xs">
                            <FaStar size={8} className="mr-1" />
                            {project.stats.stars}
                          </span>
                          <span className="badge bg-black/50 text-white text-xs">
                            <FaEye size={8} className="mr-1" />
                            {project.stats.views}
                          </span>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-4 sm:p-6 flex-1 flex flex-col">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg sm:text-xl font-bold text-light group-hover:text-secondary transition-colors duration-300">
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
                          <motion.button
                            onClick={() => openProjectModal(project)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary flex-1 text-center"
                          >
                            View Details
                          </motion.button>
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-secondary flex-1 text-center"
                          >
                            Live Demo
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
              <div className="text-4xl sm:text-6xl mb-4">🔍</div>
              <h3 className="text-xl sm:text-2xl font-bold text-light mb-2">No projects found</h3>
              <p className="text-tertiary">Try adjusting your search or filter criteria.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeProjectModal}
            >
              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-primary-light/95 backdrop-blur-md border border-white/10 rounded-2xl z-50"
                onClick={(e) => e.stopPropagation()}
              >
              {/* Modal Header */}
              <div className="sticky top-0 bg-primary-light/95 backdrop-blur-md border-b border-white/10 p-6 rounded-t-2xl">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl font-bold text-light mb-2">
                      {selectedProject.title}
                    </h2>
                    <div className="flex items-center space-x-4 text-sm text-tertiary">
                      <span className="badge badge-secondary">{selectedProject.difficulty}</span>
                      <span className="flex items-center">
                        <FaClock className="mr-1" />
                        {selectedProject.duration}
                      </span>
                      <span className="flex items-center">
                        <FaStar className="mr-1" />
                        {selectedProject.stats.stars} stars
                      </span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={closeProjectModal}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 ml-4"
                    aria-label="Close modal"
                  >
                    <FaTimes className="text-light text-xl" />
                  </motion.button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Project Image */}
                <div className="relative rounded-xl overflow-hidden mb-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-light mb-3">About This Project</h3>
                  <p className="text-tertiary leading-relaxed">
                    {selectedProject.longDescription || selectedProject.description}
                  </p>
                </div>

                {/* Features */}
                {selectedProject.features && (
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-light mb-3">Key Features</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2 text-tertiary">
                          <span className="text-secondary mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-light mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-secondary/20 text-secondary border border-secondary/30 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenges & Learnings */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  {selectedProject.challenges && (
                    <div>
                      <h3 className="text-xl font-bold text-light mb-3">Challenges Faced</h3>
                      <ul className="space-y-2">
                        {selectedProject.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start space-x-2 text-tertiary">
                            <span className="text-accent mt-1">•</span>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedProject.learnings && (
                    <div>
                      <h3 className="text-xl font-bold text-light mb-3">Key Learnings</h3>
                      <ul className="space-y-2">
                        {selectedProject.learnings.map((learning, index) => (
                          <li key={index} className="flex items-start space-x-2 text-tertiary">
                            <span className="text-success mt-1">•</span>
                            <span>{learning}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex-1 text-center"
                  >
                    <FaGlobe className="mr-2" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary flex-1 text-center"
                  >
                    <FaGithub className="mr-2" />
                    View Code
                  </motion.a>
                </div>
              </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects; 