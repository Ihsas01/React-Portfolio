import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { isMobile } from '../utils/deviceDetection';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [typedText, setTypedText] = useState("");
  const fullText = "Heello! Welcome";
  const isMobileDevice = isMobile();

  useEffect(() => {
    // Faster loading on mobile
    const loadingTime = isMobileDevice ? 1000 : 3000;
    const typingSpeed = isMobileDevice ? 50 : 150;
    
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
        className="fixed inset-0 z-[999] bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold tracking-wide mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {typedText}
          <span className="animate-pulse text-white">|</span>
        </motion.h1>

        <div className="relative w-20 h-20 mb-8">
          <motion.div
            className="absolute inset-0 border-4 border-white border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-3 border-4 border-white/20 border-b-transparent rounded-full"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
        </div>

        <motion.p
          className="text-xl text-gray-300 font-mono tracking-widest"
          animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Loading...
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
