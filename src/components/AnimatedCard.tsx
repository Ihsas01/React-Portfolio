import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverScale?: number;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  delay = 0,
  hoverScale = 1.05,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: hoverScale }}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 
        transition-all duration-300 hover:shadow-xl 
        border border-gray-100 dark:border-gray-700
        ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard; 