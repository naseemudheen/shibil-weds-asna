import { motion } from 'framer-motion';

const Logo = ({ className = "", size = "md" }) => {
  const sizes = {
    sm: "w-12 h-12 text-xl",
    md: "w-20 h-20 text-3xl",
    lg: "w-24 h-24 text-4xl"
  };

  return (
    <div className={`relative flex items-center justify-center mx-auto ${sizes[size]} ${className}`}>
      {/* Ornate geometric background to emulate a crest */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 border-[1px] border-gold-400/30 rounded-full"
      ></motion.div>
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-10%] border-[1px] border-gold-400/20 rounded-[40%] rotate-45"
      ></motion.div>
      <div className="absolute inset-[-5%] border border-gold-400/40 rounded-[30%] rotate-[22.5deg]"></div>
      <div className="absolute inset-[-5%] border border-gold-400/40 rounded-[30%] rotate-[-22.5deg]"></div>
      
      {/* Center glowing element */}
      <div className="absolute inset-0 bg-primary-900/80 rounded-full blur-sm z-0"></div>
      
      {/* Text Monogram Overlap */}
      <div className="relative z-10 flex items-center justify-center font-serif mt-1">
        {/* Silver S */}
        <span className="absolute -translate-x-3 text-[1.2em] bg-clip-text text-transparent bg-gradient-to-b from-gray-100 via-gray-400 to-gray-800 drop-shadow-md z-20">S</span>
        
        {/* Gold A */}
        <span className="relative translate-x-2 text-[1.4em] bg-clip-text text-transparent bg-gradient-to-br from-[#f3e5ab] via-[#d4af37] to-[#aa7c11] z-10">A</span>
      </div>
    </div>
  );
};

export default Logo;
