import { motion } from 'framer-motion';
import { Volume2, VolumeX, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Logo from './Logo';

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('/sitaare.ogg');
    audioRef.current.loop = true;
    
    // Auto play policy might block this, so we handle it gracefully
    const attemptPlay = async () => {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (e) {
        console.log("Autoplay prevented by browser");
      }
    };
    
    // Attempt to auto-play immediately on load
    attemptPlay();
    
    // Keep the click listener as a fallback in case the browser blocks autoplay
    document.addEventListener('click', attemptPlay, { once: true });
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      document.removeEventListener('click', attemptPlay);
    };
  }, []);

  const toggleMute = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-900">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/floral-pattern.png")' }}></div>
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/60 via-transparent to-primary-900 z-0"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gold-400 opacity-30"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <Logo size="md" className="mb-6" />
          <p className="font-serif text-gold-400 uppercase tracking-[0.2em] text-sm md:text-base">
            Together with our families
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="my-8 flex flex-col items-center"
        >
          <motion.h1 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="font-script text-6xl md:text-8xl lg:text-9xl text-gradient-gold mb-4 drop-shadow-xl pb-2"
          >
            Muhammed Shibili
          </motion.h1>
          <motion.p 
            animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="font-script text-4xl md:text-6xl text-cream-200/80 my-4 drop-shadow-md"
          >
            &amp;
          </motion.p>
          <motion.h1 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="font-script text-6xl md:text-8xl lg:text-9xl text-gradient-gold drop-shadow-xl pb-2"
          >
            Asna P V
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-12"
        >
          <p className="font-serif text-cream-200/80 max-w-xl mx-auto text-sm md:text-base leading-relaxed italic">
            "With joyous hearts, we invite you to celebrate the union of our hearts and lives."
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-2 z-20 pointer-events-none"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold-400/80">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-gold-400"
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>

      {/* Music Toggle */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        onClick={toggleMute}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full glass-card flex items-center justify-center text-gold-400 hover:text-gold-light hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.1)]"
      >
        {isPlaying ? (
          <div className="relative">
            <Volume2 size={24} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-gold-400 rounded-full animate-ping"></span>
          </div>
        ) : (
          <VolumeX size={24} />
        )}
      </motion.button>
    </section>
  );
};

export default Hero;
