import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown, FaDownload, FaEnvelope } from 'react-icons/fa';
import * as THREE from 'three';
import profileImg from '../assets/profile.jpeg';
import AnimatedText from './AnimatedText';
import { fadeIn, staggerContainer, scaleIn } from '../types/animations';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  // Mouse move effect for profile image
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    // Three.js setup with enhanced particles
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Create enhanced particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 10;
      posArray[i + 1] = (Math.random() - 0.5) * 10;
      posArray[i + 2] = (Math.random() - 0.5) * 10;
      
      // Color variation
      const color = new THREE.Color();
      color.setHSL(Math.random() * 0.1 + 0.5, 0.8, 0.6);
      colorArray[i] = color.r;
      colorArray[i + 1] = color.g;
      colorArray[i + 2] = color.b;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 3;

    // Enhanced animation with mouse interaction
    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0005;
      
      // Mouse interaction
      particlesMesh.rotation.x += mousePosition.y * 0.0001;
      particlesMesh.rotation.y += mousePosition.x * 0.0001;
      
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, [mousePosition]);

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
      className="w-full min-h-screen relative overflow-hidden flex items-center justify-center"
      style={{ opacity, scale, y }}
    >
      {/* Background Particles */}
      <div ref={containerRef} className="absolute inset-0" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-transparent to-primary/30" />
      
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 relative z-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Left: Text Content */}
        <motion.div 
          className="flex-1 w-full text-center lg:text-left"
          variants={fadeIn}
        >
          <div className="space-y-6">
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
                className="text-2xl"
              >
                👋
              </motion.div>
              <AnimatedText
                text="Hi, my name is"
                type="paragraph"
                animation="slide"
                className="text-secondary text-lg md:text-xl font-mono"
              />
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-tertiary">
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
              className="text-tertiary text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              I'm a passionate full-stack developer specializing in building exceptional digital experiences. 
              Currently, I'm focused on building accessible, human-centered products that make a difference.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center justify-center space-x-2"
              >
                <span>View My Work</span>
                <FaArrowDown className="text-sm" />
              </motion.a>
              
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary inline-flex items-center justify-center space-x-2"
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
              className="flex justify-center lg:justify-start space-x-6 pt-4"
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
                  className={`text-light hover:text-secondary transition-all duration-300 bg-white/5 p-3 rounded-full hover:bg-white/10 hover:shadow-glow ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Profile Photo */}
        <motion.div 
          className="flex-1 w-full flex justify-center items-center"
          variants={scaleIn}
        >
          <motion.div 
            className="relative group"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
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
              transition={{ duration: 0.3 }}
            >
              <img
                src={profileImg}
                alt="Ihsas Ifthikar - Full Stack Developer"
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-secondary shadow-2xl bg-primary relative z-10 transition-all duration-500 group-hover:border-accent group-hover:shadow-glow-lg"
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
                      className="absolute -top-4 -right-4 bg-secondary text-primary px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                    >
                      React
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ delay: 0.1 }}
                      className="absolute -bottom-4 -left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                    >
                      Node.js
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ delay: 0.2 }}
                      className="absolute top-1/2 -right-8 bg-success text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-secondary cursor-pointer bg-white/5 p-3 rounded-full hover:bg-white/10 hover:shadow-glow transition-all duration-300 border border-white/10"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <FaArrowDown size={20} />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero; 