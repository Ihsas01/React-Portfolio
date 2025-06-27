import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown, FaDownload, FaEnvelope } from 'react-icons/fa';
import profileImg from '../assets/profile.jpg';
import cvPdf from '../assets/Ihsas.pdf';
import AnimatedText from './AnimatedText';
import { fadeIn, staggerContainer, scaleIn } from '../types/animations';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mouse move effect for profile image (desktop only)
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  // Touch effect for mobile
  useEffect(() => {
    if (!isMobile) return;

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        setMousePosition({
          x: (touch.clientX / window.innerWidth - 0.5) * 10,
          y: (touch.clientY / window.innerHeight - 0.5) * 10,
        });
      }
    };

    const handleTouchEnd = () => {
      setMousePosition({ x: 0, y: 0 });
    };

    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMobile]);

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/Ihsas01",
      label: "GitHub",
      color: "hover:text-gray-400"
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/mohamed-ihsas-2a928a2b7",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com",
      label: "Twitter",
      color: "hover:text-blue-400"
    },
    {
      icon: FaEnvelope,
      href: "mailto:ihsas@example.com",
      label: "Email",
      color: "hover:text-red-400"
    }
  ];

  return (
    <motion.section 
      id="home" 
      className="w-full min-h-screen relative overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{ opacity, scale, y }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-transparent to-primary/30" />
      
      <motion.div 
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 relative z-10 w-full"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Left: Text Content */}
        <motion.div 
          className="flex-1 w-full text-center lg:text-left order-2 lg:order-1"
          variants={fadeIn}
        >
          <div className="space-y-4 sm:space-y-6">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start space-x-2"
            >
              <motion.div
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                className="text-xl sm:text-2xl"
              >
                👋
              </motion.div>
              <AnimatedText
                text="Hi, my name is"
                type="paragraph"
                animation="slide"
                className="text-secondary text-base sm:text-lg md:text-xl font-mono"
              />
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className="gradient-text">Ihsas</span>
                <br />
                <span className="text-light">Ifthikar</span>
              </h1>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-tertiary">
                I'm a{' '}
                <span className="text-secondary relative">
                  Full Stack Developer
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-tertiary text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              I'm a passionate full-stack developer specializing in building exceptional digital experiences. 
              Currently, I'm focused on building accessible, human-centered products that make a difference.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <span>View My Work</span>
                <FaArrowDown className="text-sm" />
              </motion.a>
              
              <motion.a
                href={cvPdf}
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary inline-flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <FaDownload className="text-sm" />
                <span>Download CV</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 pt-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, type: "spring" }}
                  className={`text-light hover:text-secondary transition-all duration-300 bg-white/5 p-2 sm:p-3 rounded-full hover:bg-white/10 hover:shadow-glow ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={isMobile ? 20 : 24} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Profile Photo */}
        <motion.div 
          className="flex-1 w-full flex justify-center items-center order-1 lg:order-2"
          variants={scaleIn}
        >
          <motion.div 
            className="relative group"
            onHoverStart={() => !isMobile && setIsHovered(true)}
            onHoverEnd={() => !isMobile && setIsHovered(false)}
            onTouchStart={() => isMobile && setIsHovered(true)}
            onTouchEnd={() => isMobile && setIsHovered(false)}
            animate={{
              rotateY: mousePosition.x * 0.1,
              rotateX: mousePosition.y * 0.1,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-secondary rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse" />
            
            {/* Profile Image */}
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={profileImg}
                alt="Ihsas Ifthikar - Full Stack Developer"
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-secondary shadow-2xl bg-primary relative z-10 transition-all duration-500 group-hover:border-accent group-hover:shadow-glow-lg"
                draggable={false}
              />
              
              {/* Floating Elements */}
              <AnimatePresence>
                {isHovered && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-secondary text-primary px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg"
                    >
                      React
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ delay: 0.1 }}
                      className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-accent text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg"
                    >
                      Node.js
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ delay: 0.2 }}
                      className="absolute top-1/2 -right-6 sm:-right-8 bg-success text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg"
                    >
                      TypeScript
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-secondary cursor-pointer bg-white/5 p-2 sm:p-3 rounded-full hover:bg-white/10 hover:shadow-glow transition-all duration-300 border border-white/10"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
            }
          }}
        >
          <FaArrowDown size={isMobile ? 16 : 20} />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero; 