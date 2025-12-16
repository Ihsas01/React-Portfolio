import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show button after a short delay for better UX
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    // WhatsApp number: 0763913526 (Sri Lanka: +94 76 391 3526)
    const phoneNumber = '94763913526'; // Country code + number without spaces
    const message = encodeURIComponent("Hello! I'd like to get in touch with you.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="fixed bottom-6 left-6 z-50 sm:bottom-8 sm:left-8"
        >
          <motion.button
            onClick={handleWhatsAppClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="group relative w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            aria-label="Chat on WhatsApp"
          >
            {/* WhatsApp Icon */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-white"
            >
              <FaWhatsapp size={28} className="sm:w-8 sm:h-8" />
            </motion.div>

            {/* Pulse Animation */}
            <motion.div
              className="absolute inset-0 bg-[#25D366] rounded-full"
              animate={{
                scale: [1, 1.5, 1.5],
                opacity: [0.7, 0, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />

            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-black/90 text-white text-sm rounded-lg whitespace-nowrap pointer-events-none hidden sm:block"
            >
              Chat on WhatsApp
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-black/90"></div>
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;

