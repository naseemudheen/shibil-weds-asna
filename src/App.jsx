import { useState, useEffect, useRef } from 'react';
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
  const lenisRef = useRef(null);

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

    lenisRef.current = lenis;

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

  // Auto-scroll tour: triggered once loading finishes
  // Sections: Hero (4s) → Couple → Events → Footer
  useEffect(() => {
    if (isLoading) return;

    // easeInOutQuart: slow start → fast middle → slow end — no jumping
    const easeInOutQuart = (t) =>
      t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

    // Sections with how long to linger before scrolling to the next
    const sections = [
      { id: 'couple', delay: 4000 }, // 4s on Hero → scroll to Couple
      { id: 'events', delay: 5000 }, // 5s on Couple → scroll to Events
      { id: 'footer', delay: 6000 }, // 6s on Events → scroll to Footer
    ];

    const timers = [];
    let elapsed = 0;

    sections.forEach(({ id, delay }) => {
      elapsed += delay;
      const t = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          if (lenisRef.current) {
            lenisRef.current.scrollTo(el, {
              duration: 3.0,
              easing: easeInOutQuart,
              offset: 0,
            });
          } else {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, elapsed);
      timers.push(t);
    });

    // Stop auto-scroll if user manually scrolls
    const stopAutoScroll = () => timers.forEach(clearTimeout);
    window.addEventListener('wheel', stopAutoScroll, { once: true, passive: true });
    window.addEventListener('touchstart', stopAutoScroll, { once: true, passive: true });
    window.addEventListener('keydown', stopAutoScroll, { once: true });

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener('wheel', stopAutoScroll);
      window.removeEventListener('touchstart', stopAutoScroll);
      window.removeEventListener('keydown', stopAutoScroll);
    };
  }, [isLoading]);

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
