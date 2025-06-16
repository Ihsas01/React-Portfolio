import React from 'react';
import { motion } from 'framer-motion';

interface HoverEffectProps {
  children: React.ReactNode;
  className?: string;
}

const HoverEffect: React.FC<HoverEffectProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      className={`relative group ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="absolute inset-0 bg-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      />
      {children}
    </motion.div>
  );
};

export default HoverEffect; 