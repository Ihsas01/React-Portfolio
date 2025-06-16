import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  type?: 'heading' | 'paragraph' | 'title';
  animation?: 'fade' | 'slide' | 'typing' | 'bounce';
  className?: string;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  type = 'paragraph',
  animation = 'fade',
  className = '',
  delay = 0,
}) => {
  const getAnimationVariants = () => {
    switch (animation) {
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.8, delay } },
        };
      case 'slide':
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
        };
      case 'typing':
        return {
          hidden: { width: 0 },
          visible: {
            width: '100%',
            transition: { duration: 1, delay, ease: 'easeInOut' },
          },
        };
      case 'bounce':
        return {
          hidden: { opacity: 0, y: -20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 100,
              damping: 10,
              delay,
            },
          },
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.8, delay } },
        };
    }
  };

  const getTextStyle = () => {
    switch (type) {
      case 'heading':
        return 'text-4xl md:text-5xl font-bold';
      case 'title':
        return 'text-2xl md:text-3xl font-semibold';
      case 'paragraph':
        return 'text-base md:text-lg';
      default:
        return '';
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={getAnimationVariants()}
      className={`${getTextStyle()} ${className}`}
    >
      {text}
    </motion.div>
  );
};

export default AnimatedText; 