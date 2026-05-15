import { motion } from 'framer-motion';

const Bismillah = () => {
  return (
    <section
      id="bismillah"
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#5a0e0e' }}
    >
      {/* Embossed dark floral texture overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("https://www.transparenttextures.com/patterns/dark-leather.png")`,
          backgroundSize: 'auto',
          opacity: 0.55,
          mixBlendMode: 'multiply',
        }}
      />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(90,14,14,0) 30%, rgba(30,0,0,0.75) 100%)',
        }}
      />

      {/* Shimmer line top */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.4, ease: 'easeOut' }}
        className="absolute top-10 left-1/2 -translate-x-1/2 w-3/4 max-w-sm h-px"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.7), transparent)',
        }}
      />

      {/* Shimmer line bottom */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.4, ease: 'easeOut' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-3/4 max-w-sm h-px"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.7), transparent)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">

        {/* Arabic Bismillah */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6, ease: 'easeOut' }}
        >
          <p
            className="leading-relaxed"
            style={{
              fontFamily: '"Amiri", "Scheherazade New", serif',
              fontSize: 'clamp(2.8rem, 9vw, 5.5rem)',
              color: '#D4AF37',
              textShadow: '0 2px 20px rgba(212,175,55,0.35)',
              direction: 'rtl',
              letterSpacing: '0.02em',
            }}
          >
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </p>
        </motion.div>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2, ease: 'easeOut' }}
          className="flex items-center gap-3 w-64"
        >
          <div className="flex-1 h-px" style={{ background: 'rgba(212,175,55,0.45)' }} />
          <span style={{ color: '#D4AF37', fontSize: '1.1rem' }}>✦</span>
          <div className="flex-1 h-px" style={{ background: 'rgba(212,175,55,0.45)' }} />
        </motion.div>

        {/* English translation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 1.4, ease: 'easeOut' }}
          className="flex flex-col gap-1"
        >
          <p
            style={{
              fontFamily: '"Great Vibes", "Dancing Script", cursive',
              fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
              color: '#D4AF37',
              textShadow: '0 1px 12px rgba(212,175,55,0.25)',
            }}
          >
            In the name of Allah
          </p>
          <p
            style={{
              fontFamily: '"Great Vibes", "Dancing Script", cursive',
              fontSize: 'clamp(1.3rem, 4.5vw, 2.2rem)',
              color: 'rgba(212,175,55,0.85)',
              textShadow: '0 1px 12px rgba(212,175,55,0.2)',
            }}
          >
            the most Gracious and most Merciful
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Bismillah;
