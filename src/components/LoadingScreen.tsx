import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRocket, FaCode, FaHeart, FaStar } from 'react-icons/fa';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    "Initializing portfolio...",
    "Loading awesome animations...",
    "Preparing stunning visuals...",
    "Almost ready...",
    "Welcome to my world! 🚀"
  ];

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setLoading(false), 1000);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    // Cycle through loading texts
    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 1500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [loadingTexts.length]);

  if (!loading) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] bg-primary flex items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Animated background */}
        <div className="absolute inset-0">
          {/* Gradient orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-secondary rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Main loading content */}
        <div className="relative z-10 text-center">
          {/* Logo and title */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div
              className="flex items-center justify-center space-x-4 mb-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-2xl flex items-center justify-center shadow-neon"
                animate={{
                  rotate: [0, 360],
                  boxShadow: [
                    "0 0 30px rgba(0, 212, 255, 0.5)",
                    "0 0 50px rgba(0, 212, 255, 0.8)",
                    "0 0 30px rgba(0, 212, 255, 0.5)"
                  ]
                }}
                transition={{
                  rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                  boxShadow: { duration: 2, repeat: Infinity }
                }}
              >
                <FaRocket className="text-primary text-2xl" />
              </motion.div>
              
              <motion.h1
                className="text-4xl md:text-6xl font-bold gradient-text-neon"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Ihsas
              </motion.h1>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-tertiary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Full Stack Developer & Creative Thinker
            </motion.p>
          </motion.div>

          {/* Loading text */}
          <motion.div
            className="mb-8 min-h-[2rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={currentText}
                className="text-lg md:text-xl text-secondary font-mono"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {loadingTexts[currentText]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="w-80 md:w-96 mx-auto mb-8"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <div className="relative">
              {/* Background bar */}
              <div className="w-full h-3 bg-primary-light/30 rounded-full overflow-hidden backdrop-blur-sm">
                {/* Progress fill */}
                <motion.div
                  className="h-full bg-gradient-to-r from-secondary to-accent rounded-full relative"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              </div>
              
              {/* Progress percentage */}
              <motion.div
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm text-secondary font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
              >
                {Math.round(progress)}%
              </motion.div>
            </div>
          </motion.div>

          {/* Loading animation */}
          <motion.div
            className="flex items-center justify-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-secondary rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>

          {/* Floating icons */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/4 left-1/4 text-secondary/30"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
              }}
              transition={{
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 8, repeat: Infinity, ease: "linear" }
              }}
            >
              <FaCode className="text-2xl" />
            </motion.div>

            <motion.div
              className="absolute top-3/4 right-1/4 text-accent/30"
              animate={{
                y: [0, 20, 0],
                rotate: [0, -360],
              }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 6, repeat: Infinity, ease: "linear" }
              }}
            >
              <FaHeart className="text-2xl" />
            </motion.div>

            <motion.div
              className="absolute bottom-1/4 left-1/3 text-secondary/30"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 360],
              }}
              transition={{
                y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 10, repeat: Infinity, ease: "linear" }
              }}
            >
              <FaStar className="text-xl" />
            </motion.div>
          </div>
        </div>

        {/* Completion message */}
        <AnimatePresence>
          {progress >= 100 && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-primary/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="text-center"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-r from-success to-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-neon"
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      "0 0 30px rgba(0, 255, 136, 0.5)",
                      "0 0 50px rgba(0, 255, 136, 0.8)",
                      "0 0 30px rgba(0, 255, 136, 0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaRocket className="text-primary text-2xl" />
                </motion.div>
                <motion.p
                  className="text-2xl font-bold gradient-text-neon"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Ready to explore! 🚀
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen; 