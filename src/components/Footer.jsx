import { motion } from 'framer-motion';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="py-20 px-4 bg-primary-900 relative border-t border-gold-400/20 text-center overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-gold-600 rounded-full blur-[100px] opacity-20"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Logo size="sm" className="mb-8" />

          <h2 className="font-script text-4xl md:text-5xl text-cream-100 mb-6">Thank You</h2>
          
          <p className="font-serif text-cream-200/80 mb-12 italic text-lg">
            We look forward to celebrating with you!
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-16 bg-gold-400/50"></div>
            <span className="font-script text-gold-400 text-2xl">&hearts;</span>
            <div className="h-px w-16 bg-gold-400/50"></div>
          </div>

          <p className="text-xs text-gold-400/50 uppercase tracking-[0.3em] font-sans">
            Shibili & Asna &copy; 2026
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
