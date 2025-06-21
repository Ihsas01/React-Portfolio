import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  type?: 'heading' | 'title' | 'paragraph';
  animation?: 'typing' | 'slide' | 'bounce' | 'fade';
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
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: () => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const typingVariants = {
    hidden: { width: 0 },
    visible: {
      width: '100%',
      transition: {
        duration: 1.5,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay,
      },
    },
  };

  const slideVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay,
      },
    },
  };

  const bounceVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        delay,
      },
    },
  };

  const renderAnimatedText = () => {
    switch (animation) {
      case 'typing':
        return (
          <motion.div
            variants={typingVariants}
            initial="hidden"
            animate="visible"
            className="overflow-hidden whitespace-nowrap"
          >
            {text}
          </motion.div>
        );
      case 'slide':
        return (
          <motion.div
            variants={slideVariants}
            initial="hidden"
            animate="visible"
          >
            {text}
          </motion.div>
        );
      case 'bounce':
        return (
          <motion.div
            variants={bounceVariants}
            initial="hidden"
            animate="visible"
          >
            {text}
          </motion.div>
        );
      case 'fade':
      default:
        return (
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={child}
                className="mr-1.5"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        );
    }
  };

  const getTextSize = () => {
    switch (type) {
      case 'heading':
        return 'text-5xl sm:text-8xl font-bold';
      case 'title':
        return 'text-3xl sm:text-4xl font-bold';
      case 'paragraph':
      default:
        return 'text-lg md:text-xl';
    }
  };

  return (
    <div className={`${getTextSize()} ${className}`}>
      {renderAnimatedText()}
    </div>
  );
};

export default AnimatedText; 