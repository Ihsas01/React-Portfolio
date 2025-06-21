import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaSearch, FaFilter, FaStar, FaCode, FaMobile, FaServer, FaLaptopCode } from 'react-icons/fa';

// Placeholder images
const bloodDonationImg = 'https://placehold.co/800x600/2563eb/ffffff?text=Blood+Donation+System';
const freshConImg = 'https://placehold.co/800x600/16a34a/ffffff?text=FreshCoN+Grocery';
const freeChoiceImg = 'https://placehold.co/800x600/9333ea/ffffff?text=FreeChoice+Store';
const portfolioVanillaImg = 'https://placehold.co/800x600/ea580c/ffffff?text=Portfolio';
const portfolioReactImg = 'https://placehold.co/800x600/0284c7/ffffff?text=Portfolio+React';
const currencyConverterImg = 'https://placehold.co/800x600/0891b2/ffffff?text=Currency+Converter';
const passwordGeneratorImg = 'https://placehold.co/800x600/4f46e5/ffffff?text=Password+Generator';
const stopwatchImg = 'https://placehold.co/800x600/be185d/ffffff?text=Stopwatch';
const rockPaperScissorsImg = 'https://placehold.co/800x600/7c3aed/ffffff?text=Rock+Paper+Scissors';
const ageCalculatorImg = 'https://placehold.co/800x600/0f766e/ffffff?text=Age+Calculator';
const onlineQuizImg = 'https://placehold.co/800x600/be123c/ffffff?text=Online+Quiz';
const financialTrackerImg = 'https://placehold.co/800x600/0369a1/ffffff?text=Financial+Tracker';
const onlineFruitStoreImg = 'https://placehold.co/800x600/15803d/ffffff?text=Online+Fruit+Store';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  const categories = ['all', 'web-mini', 'mobile', 'full-stack'];

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
      stats: {
        stars: 145,
        forks: 38,
      },
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
      stats: {
        stars: 98,
        forks: 25,
      },
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
      stats: {
        stars: 112,
        forks: 29,
      },
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
      stats: {
        stars: 35,
        forks: 8,
      },
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
      stats: {
        stars: 42,
        forks: 10,
      },
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
      stats: {
        stars: 28,
        forks: 6,
      },
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
      stats: {
        stars: 31,
        forks: 7,
      },
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
      stats: {
        stars: 25,
        forks: 5,
      },
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
      stats: {
        stars: 33,
        forks: 8,
      },
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
      stats: {
        stars: 29,
        forks: 6,
      },
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
      stats: {
        stars: 37,
        forks: 9,
      },
    },
    {
      id: '12',
      title: 'Financial Tracker App',
      description: 'A comprehensive financial management Android application that helps users track expenses, manage budgets, and visualize spending patterns. Features include expense categorization, budget planning, and financial reports.',
      image: financialTrackerImg,
      github: 'https://github.com/Ihsas01/PersonalFinanceTrackerApp',
      demo: 'https://play.google.com/store/apps/details?id=com.yourusername.financialtracker',
      category: 'mobile',
      technologies: ['Kotlin', 'XML', 'Android SDK', 'Room Database', 'MPAndroidChart'],
      featured: true,
      stats: {
        stars: 112,
        forks: 28,
      },
    },
    {
      id: '13',
      title: 'Online Fruit Store',
      description: 'A specialized e-commerce platform for fresh fruits and vegetables. Features include product catalog, shopping cart, order management, and delivery tracking system.',
      image: onlineFruitStoreImg,
      github: 'https://github.com/Ihsas01/Online-Fruit-Store',
      demo: 'https://online-fruit-store.vercel.app',
      category: 'full-stack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Stripe'],
      featured: true,
      stats: {
        stars: 85,
        forks: 22,
      },
    },
  ];

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filter === 'all' || project.category === filter;
    return matchesSearch && matchesCategory;
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

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      id="projects" 
      className="w-full min-h-screen bg-primary text-light py-20"
      style={{ opacity, scale }}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold inline border-b-4 border-secondary mb-4">
            Projects
          </h2>
          <p className="py-4 text-tertiary text-lg md:text-xl">
            Check out some of my recent work
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between"
        >
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 pl-10 bg-primary-light/50 border border-tertiary/20 rounded-lg text-light placeholder-tertiary focus:outline-none focus:border-secondary transition-all duration-300 backdrop-blur-sm"
            />
            <FaSearch className="absolute left-3 top-3.5 text-tertiary" />
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-lg capitalize transition-all duration-300 flex items-center gap-2 backdrop-blur-sm ${
                  filter === category
                    ? 'bg-secondary text-primary shadow-lg shadow-secondary/20'
                    : 'bg-primary-light/50 text-tertiary hover:bg-tertiary/20'
                }`}
              >
                {category === 'mobile' ? <FaMobile size={14} /> : 
                 category === 'full-stack' ? <FaServer size={14} /> :
                 category === 'web-mini' ? <FaLaptopCode size={14} /> :
                 <FaFilter size={14} />}
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {isLoading ? (
              // Loading skeleton
              Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-primary-light/50 rounded-xl overflow-hidden animate-pulse"
                >
                  <div className="h-48 bg-tertiary/20" />
                  <div className="p-6 space-y-4">
                    <div className="h-6 bg-tertiary/20 rounded w-3/4" />
                    <div className="space-y-2">
                      <div className="h-4 bg-tertiary/20 rounded" />
                      <div className="h-4 bg-tertiary/20 rounded w-5/6" />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={projectVariants}
                  whileHover="hover"
                  layout
                  className="group relative bg-primary-light/50 rounded-xl overflow-hidden backdrop-blur-sm border border-tertiary/10 hover:border-secondary/30 transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-light">{project.title}</h3>
                      {project.featured && (
                        <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full flex items-center gap-1">
                          <FaStar size={12} />
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <p className="text-tertiary mb-4 line-clamp-3">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-secondary/20 text-secondary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex gap-4">
                        <motion.a
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-light hover:text-secondary transition-colors"
                        >
                          <FaGithub size={20} />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-light hover:text-secondary transition-colors"
                        >
                          <FaExternalLinkAlt size={20} />
                        </motion.a>
                      </div>
                      
                      <div className="flex items-center gap-4 text-tertiary text-sm">
                        <span className="flex items-center gap-1">
                          <FaStar size={14} />
                          {project.stats.stars}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaCode size={14} />
                          {project.stats.forks}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects; 