import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import CoupleIntro from './components/CoupleIntro';
import Events from './components/Events';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Smooth Scrolling Setup
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Mouse Tracking Setup
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-primary-900 text-cream-200 selection:bg-gold-500/30 selection:text-gold-400">
      {/* Desktop Cursor Glow */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        animate={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(212, 175, 55, 0.05), transparent 40%)`
        }}
      />

      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Hero />
          <CoupleIntro />
          <Events />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
