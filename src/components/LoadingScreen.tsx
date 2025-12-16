import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { isMobile } from '../utils/deviceDetection';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [typedText, setTypedText] = useState("");
  const fullText = "Heello Welcome";
  const isMobileDevice = isMobile();

  useEffect(() => {
    // Faster loading on mobile
    const loadingTime = isMobileDevice ? 1500 : 3000;
    const typingSpeed = isMobileDevice ? 80 : 150;
    
    let i = 0;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + fullText.charAt(i));
      i++;
      if (i >= fullText.length) {
        clearInterval(interval);
      }
    }, typingSpeed);

    const timer = setTimeout(() => setLoading(false), loadingTime);
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!loading) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] bg-gradient-to-br from-primary via-primary-dark to-black text-light flex flex-col items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Background Circles */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4">
          {/* Welcome Text */}
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-wide mb-4"
              style={{
                background: 'linear-gradient(135deg, #00d4ff 0%, #ff0080 50%, #00d4ff 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {typedText || "Hello Welcome"}
              {typedText && (
                <motion.span
                  className="inline-block ml-1 text-secondary"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  |
                </motion.span>
              )}
            </motion.h1>
            
            {/* Subtitle for mobile */}
            {isMobileDevice && (
              <motion.p
                className="text-sm sm:text-base text-tertiary mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Portfolio Loading...
              </motion.p>
            )}
          </motion.div>

          {/* Loading Spinner */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-6 sm:mb-8">
            <motion.div
              className="absolute inset-0 border-4 border-secondary/30 rounded-full"
            />
            <motion.div
              className="absolute inset-0 border-4 border-secondary border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-2 border-4 border-accent/20 border-b-transparent rounded-full"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
            
            {/* Center dot */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-secondary rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Loading Text - Hidden on mobile for cleaner look */}
          {!isMobileDevice && (
            <motion.p
              className="text-base sm:text-xl text-tertiary font-mono tracking-wider"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Loading...
            </motion.p>
          )}

          {/* Progress Bar for Mobile */}
          {isMobileDevice && (
            <motion.div
              className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-secondary to-accent rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </motion.div>
          )}
        </div>

        {/* Floating Particles - Only on desktop */}
        {!isMobileDevice && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-secondary/40 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 3) * 20}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
