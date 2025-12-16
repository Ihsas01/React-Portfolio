import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { isMobile, isLowEndDevice } from '../utils/deviceDetection';

const AnimatedBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isMobileDevice = isMobile();
  const isLowEnd = isLowEndDevice();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Create particles - reduce count on mobile/low-end devices
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = (isMobileDevice || isLowEnd) ? 100 : 500;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Create particle material with gradient - reduce quality on mobile
    const particlesMaterial = new THREE.PointsMaterial({
      size: (isMobileDevice || isLowEnd) ? 0.03 : 0.02,
      color: new THREE.Color(0x00d4ff),
      transparent: true,
      opacity: (isMobileDevice || isLowEnd) ? 0.5 : 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Create floating orbs
    const createOrb = (color: number, size: number, position: [number, number, number]) => {
      // Reduce geometry segments on mobile
      const segments = (isMobileDevice || isLowEnd) ? 16 : 32;
      const geometry = new THREE.SphereGeometry(size, segments, segments);
      const material = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: (isMobileDevice || isLowEnd) ? 0.05 : 0.1,
        blending: THREE.AdditiveBlending,
      });
      const orb = new THREE.Mesh(geometry, material);
      orb.position.set(...position);
      return orb;
    };

    // Reduce orbs on mobile
    const orbs = (isMobileDevice || isLowEnd) 
      ? [createOrb(0x00d4ff, 2, [-5, 0, -5])]
      : [
          createOrb(0x00d4ff, 2, [-5, 0, -5]),
          createOrb(0xff0080, 1.5, [5, 2, -3]),
          createOrb(0x00ff88, 1, [0, -3, -4]),
        ];

    orbs.forEach(orb => scene.add(orb));

    // Camera position
    camera.position.z = 5;

    // Animation
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop - reduce animation complexity on mobile
    let lastTime = 0;
    const targetFPS = (isMobileDevice || isLowEnd) ? 30 : 60;
    const frameInterval = 1000 / targetFPS;
    
    const animate = (currentTime: number) => {
      requestAnimationFrame(animate);
      
      const deltaTime = currentTime - lastTime;
      
      if (deltaTime < frameInterval) {
        return;
      }
      
      lastTime = currentTime - (deltaTime % frameInterval);

      // Rotate particles - slower on mobile
      const rotationSpeed = (isMobileDevice || isLowEnd) ? 0.0005 : 0.001;
      particlesMesh.rotation.x += rotationSpeed;
      particlesMesh.rotation.y += rotationSpeed * 2;

      // Move particles based on mouse - only on desktop
      if (!isMobileDevice) {
        particlesMesh.rotation.x += mouseY * 0.0005;
        particlesMesh.rotation.y += mouseX * 0.0005;
      }

      // Animate orbs - slower on mobile
      const orbSpeed = (isMobileDevice || isLowEnd) ? 0.005 : 0.01;
      orbs.forEach((orb, index) => {
        orb.rotation.x += orbSpeed * (index + 1);
        orb.rotation.y += orbSpeed * (index + 1);
        orb.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
      });

      renderer.render(scene, camera);
    };

    animate(performance.now());
    setIsVisible(true);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <>
      {/* Three.js Background */}
      <div 
        ref={mountRef} 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s ease-in-out' }}
      />
      
      {/* Gradient Overlays */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-primary/40" />
        
        {/* Animated gradient orbs */}
        {!isMobileDevice && (
          <>
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full blur-3xl"
              animate={isLowEnd ? {} : {
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {!isLowEnd && (
              <motion.div
                className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-full blur-3xl"
                animate={{
                  x: [0, -80, 0],
                  y: [0, 60, 0],
                  scale: [1, 0.8, 1],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 5
                }}
              />
            )}
            
            {!isLowEnd && (
              <motion.div
                className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-success/10 to-secondary/10 rounded-full blur-3xl"
                animate={{
                  x: [0, 60, 0],
                  y: [0, -40, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 10
                }}
              />
            )}
          </>
        )}
      </div>

      {/* Floating Particles - reduce on mobile */}
      {!isMobileDevice && (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          {[...Array(isLowEnd ? 5 : 20)].map((_, i) => (
            <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
            />
          ))}
        </div>
      )}

      {/* Noise Texture */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-5">
        <div className="w-full h-full bg-noise" />
      </div>

      {/* Grid Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div 
          className="w-full h-full opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Animated Lines - reduce on mobile */}
      {!isMobileDevice && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          {[...Array(isLowEnd ? 2 : 5)].map((_, i) => (
            <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: '-100%',
              width: '200%',
            }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5,
            }}
            />
          ))}
        </div>
      )}

      {/* Glowing Edges */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-transparent opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-l from-primary via-transparent to-transparent opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-transparent opacity-15" />
      </div>
    </>
  );
};

export default AnimatedBackground; 