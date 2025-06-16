import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';
import * as THREE from 'three';
import profileImg from '../assets/profile.jpeg';
import AnimatedText from './AnimatedText';
import { fadeIn, staggerContainer, scaleIn } from '../types/animations';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Create particles with improved geometry
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 3000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: '#64ffda',
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 2;

    // Enhanced animation
    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.x += 0.0003;
      particlesMesh.rotation.y += 0.0003;
      renderer.render(scene, camera);
    };

    animate();

    // Improved resize handler
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
  }, []);

  return (
    <motion.div 
      id="home" 
      className="w-full h-screen relative overflow-hidden"
      style={{ opacity, scale, y }}
    >
      <div ref={containerRef} className="absolute inset-0" />
      <motion.div 
        className="max-w-[1200px] mx-auto px-8 flex flex-col lg:flex-row justify-center items-center h-full relative z-10 gap-12"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Left: Text Content */}
        <motion.div 
          className="flex-1 w-full"
          variants={fadeIn}
        >
          <div className="space-y-6">
            <AnimatedText
              text="Hi, my name is"
              type="paragraph"
              animation="slide"
              className="text-secondary text-lg md:text-xl font-mono"
            />
            <AnimatedText
              text="Ihsas Ifthikar"
              type="heading"
              animation="typing"
              className="text-5xl sm:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary via-tertiary to-secondary hover:from-tertiary hover:to-secondary transition-all duration-500"
            />
            <AnimatedText
              text="I'm a Full Stack Developer."
              type="title"
              animation="bounce"
              className="text-3xl sm:text-4xl font-bold text-tertiary"
              delay={0.2}
            />
            <AnimatedText
              text="I'm a passionate full-stack developer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products."
              type="paragraph"
              animation="fade"
              className="text-tertiary py-4 max-w-[700px] text-lg md:text-xl leading-relaxed"
              delay={0.4}
            />
            <motion.div
              variants={fadeIn}
              className="flex gap-8 mt-8"
            >
              <motion.a
                whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/Ihsas01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light hover:text-secondary transition-all duration-300 bg-gray-800 dark:bg-gray-700 p-3 rounded-full hover:bg-secondary/10 hover:shadow-lg hover:shadow-secondary/20"
              >
                <FaGithub size={32} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/mohamed-ihsas-2a928a2b7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light hover:text-secondary transition-all duration-300 bg-gray-800 dark:bg-gray-700 p-3 rounded-full hover:bg-secondary/10 hover:shadow-lg hover:shadow-secondary/20"
              >
                <FaLinkedin size={32} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light hover:text-secondary transition-all duration-300 bg-gray-800 dark:bg-gray-700 p-3 rounded-full hover:bg-secondary/10 hover:shadow-lg hover:shadow-secondary/20"
              >
                <FaTwitter size={32} />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
        {/* Right: Profile Photo */}
        <motion.div 
          className="flex-1 w-full flex justify-center items-center"
          variants={scaleIn}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-tertiary rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse" />
            <motion.img
              src={profileImg}
              alt="Profile"
              className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-secondary shadow-lg bg-primary relative z-10 transition-all duration-500 group-hover:border-tertiary group-hover:shadow-xl group-hover:shadow-tertiary/20"
              draggable={false}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
        {/* Down Arrow */}
        <motion.div
          variants={fadeIn}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-secondary cursor-pointer bg-gray-800 dark:bg-gray-700 p-3 rounded-full hover:bg-secondary/10 hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <FaArrowDown size={24} />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero; 