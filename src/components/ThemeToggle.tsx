import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setIsDark(!isDark)}
      className="fixed top-24 right-8 p-3 rounded-full bg-secondary text-primary shadow-lg hover:shadow-xl transition-all duration-300 z-50"
    >
      {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
    </motion.button>
  );
};

export default ThemeToggle; 