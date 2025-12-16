import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { isMobile } from '../utils/deviceDetection';

const CursorFollower = () => {
  // Don't render on mobile devices (no cursor)
  if (isMobile()) {
    return null;
  }
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    // Handle hover effects on interactive elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a, button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleElementHover);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleElementHover);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-secondary rounded-full pointer-events-none z-[100] mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isVisible ? 1 : 0,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border-2 border-secondary/50 rounded-full pointer-events-none z-[99]"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isVisible ? 1 : 0,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          mass: 0.8,
        }}
      />

      {/* Hover effect ring */}
      <motion.div
        className="fixed top-0 left-0 w-20 h-20 border border-secondary/30 rounded-full pointer-events-none z-[98]"
        animate={{
          x: mousePosition.x - 40,
          y: mousePosition.y - 40,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.8 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      />

      {/* Click effect */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-accent/50 rounded-full pointer-events-none z-[101]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isClicking ? 2 : 0,
          opacity: isClicking ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 15,
        }}
      />

      {/* Particle trail */}
      {isVisible && (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[97]">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-secondary rounded-full"
              initial={{
                x: mousePosition.x,
                y: mousePosition.y,
                opacity: 0.8,
                scale: 1,
              }}
              animate={{
                x: mousePosition.x + (Math.random() - 0.5) * 100,
                y: mousePosition.y + (Math.random() - 0.5) * 100,
                opacity: 0,
                scale: 0,
              }}
              transition={{
                duration: 1 + Math.random(),
                ease: "easeOut",
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      )}

      {/* Glow effect for interactive elements */}
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full pointer-events-none z-[96] blur-xl"
        animate={{
          x: mousePosition.x - 64,
          y: mousePosition.y - 64,
          scale: isHovering ? 1.5 : 0.8,
          opacity: isHovering ? 0.6 : 0.2,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
      />

      {/* Text indicator for interactive elements */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            className="fixed top-0 left-0 bg-secondary text-primary px-3 py-1 rounded-lg text-xs font-medium pointer-events-none z-[102]"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            style={{
              x: mousePosition.x + 20,
              y: mousePosition.y - 20,
            }}
          >
            Click me!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Magnetic effect for buttons */}
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 border border-secondary/20 rounded-full pointer-events-none z-[95]"
        animate={{
          x: mousePosition.x - 32,
          y: mousePosition.y - 32,
          scale: isHovering ? 1.2 : 1,
          opacity: isHovering ? 0.4 : 0.1,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
      />

      {/* Pulse effect */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 border border-secondary/30 rounded-full pointer-events-none z-[94]"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: [1, 2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
};

export default CursorFollower; 