import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Logo from './Logo';

const LoadingScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    try {
      const docEl = document.documentElement;
      if (docEl.requestFullscreen) {
        docEl.requestFullscreen().catch(err => console.log(err));
      } else if (docEl.webkitRequestFullscreen) {
        docEl.webkitRequestFullscreen().catch(err => console.log(err));
      } else if (docEl.msRequestFullscreen) {
        docEl.msRequestFullscreen().catch(err => console.log(err));
      }
    } catch (error) {
      console.log('Fullscreen API not supported');
    }
    
    setIsVisible(false);
    setTimeout(onComplete, 1000); // Wait for fade out
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary-900"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <Logo size="lg" className="mb-6" />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "150px" }}
              transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
              className="h-[1px] bg-gold-400 mb-6"
            />
            
            <div className="h-12 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {!isReady ? (
                  <motion.p
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="font-serif tracking-[0.3em] text-gold-400/70 text-sm uppercase"
                  >
                    Loading...
                  </motion.p>
                ) : (
                  <motion.button
                    key="open-btn"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={handleOpen}
                    className="px-8 py-3 border border-gold-400/50 text-gold-300 font-serif tracking-[0.2em] uppercase text-xs hover:bg-gold-500/10 transition-all duration-500 rounded-sm"
                  >
                    Open Invitation
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
