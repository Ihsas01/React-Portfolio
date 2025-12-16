import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon, FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClick = () => {
    setNav(!nav);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { name: 'Home', to: 'home', icon: FaHome },
    { name: 'About', to: 'about', icon: FaUser },
    { name: 'Skills', to: 'skills', icon: FaCode },
    { name: 'Projects', to: 'projects', icon: FaBriefcase },
    { name: 'Contact', to: 'contact', icon: FaEnvelope },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.to);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuItems]);


  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
        setNav(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'glass backdrop-blur-md border-b border-white/10 py-2' 
            : 'bg-transparent py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-sm">I</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold gradient-text">Ihsas</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -2 }}
                  className="relative"
                >
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className={`nav-link px-3 py-2 text-sm font-medium transition-all duration-300 ${
                      activeSection === item.to ? 'active' : ''
                    }`}
                    onClick={() => setActiveSection(item.to)}
                  >
                    {item.name}
                  </Link>
                  {activeSection === item.to && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <FaSun className="text-yellow-400 text-lg" />
                ) : (
                  <FaMoon className="text-blue-400 text-lg" />
                )}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClick}
                className="lg:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300"
                aria-label="Toggle mobile menu"
              >
                <AnimatePresence mode="wait">
                  {nav ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaTimes className="text-light text-xl" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaBars className="text-light text-xl" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {nav && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => {
                setNav(false);
                setIsMobileMenuOpen(false);
              }}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="mobile-menu-container fixed top-0 right-0 h-full w-80 max-w-[85vw] glass backdrop-blur-md border-l border-white/10 z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">I</span>
                    </div>
                    <span className="text-xl font-bold gradient-text">Ihsas</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      setNav(false);
                      setIsMobileMenuOpen(false);
                    }}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    <FaTimes className="text-light text-xl" />
                  </motion.button>
                </div>

                {/* Mobile Menu Items */}
                <div className="flex-1 p-6">
                  <div className="space-y-2">
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={item.to}
                          smooth={true}
                          duration={500}
                          className={`flex items-center space-x-3 px-4 py-4 text-lg font-medium rounded-xl transition-all duration-300 ${
                            activeSection === item.to
                              ? 'bg-secondary/20 text-secondary border border-secondary/30'
                              : 'text-tertiary hover:text-secondary hover:bg-white/5'
                          }`}
                          onClick={() => {
                            setActiveSection(item.to);
                            setNav(false);
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          <item.icon size={20} />
                          <span>{item.name}</span>
                          {activeSection === item.to && (
                            <motion.div
                              layoutId="mobileActiveTab"
                              className="w-1 h-6 bg-secondary rounded-full ml-auto"
                              initial={false}
                              transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Mobile Menu Footer */}
                <div className="p-6 border-t border-white/10">
                  <div className="text-center">
                    <p className="text-tertiary text-sm mb-4">
                      Let's create something amazing together!
                    </p>
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary w-full text-center"
                      onClick={() => {
                        setNav(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Get In Touch
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 