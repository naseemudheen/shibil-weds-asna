import { motion } from 'framer-motion';

const CoupleIntro = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-24 px-4 bg-dark-bg relative">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="font-script text-5xl md:text-6xl text-gold-400 mb-4">The Couple</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-8 lg:gap-20">
          {/* Bride Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="flex-1 text-center md:text-right p-8 glass-card rounded-2xl relative w-full"
          >
            <div className="absolute -top-6 -left-6 w-16 h-16 border-t-2 border-l-2 border-gold-400 rounded-tl-xl opacity-50"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 border-b-2 border-r-2 border-gold-400 rounded-br-xl opacity-50"></div>
            
            <h3 className="font-script text-4xl md:text-5xl text-cream-100 mb-2">Asna P V</h3>
            <p className="font-serif text-gold-400 text-sm uppercase tracking-widest mb-6">The Bride</p>
            
            <div className="font-sans text-cream-200/80 space-y-2 text-sm md:text-base">
              <p>D/O Mr. Veerasahib P A & Mrs. Hafsath</p>
              <p>Al Farah, Panamkulambu,</p>
              <p>Mudappallur P.O, Palakkad</p>
            </div>
          </motion.div>

          {/* Separator */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-16 h-16 shrink-0 flex items-center justify-center rounded-full bg-primary-800 border border-gold-400 shadow-[0_0_15px_rgba(212,175,55,0.3)] z-10"
          >
            <span className="font-script text-3xl text-gold-400">&amp;</span>
          </motion.div>

          {/* Groom Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="flex-1 text-center md:text-left p-8 glass-card rounded-2xl relative w-full"
          >
            <div className="absolute -top-6 -right-6 w-16 h-16 border-t-2 border-r-2 border-gold-400 rounded-tr-xl opacity-50"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 border-b-2 border-l-2 border-gold-400 rounded-bl-xl opacity-50"></div>
            
            <h3 className="font-script text-4xl md:text-5xl text-cream-100 mb-2">Muhammed Shibili</h3>
            <p className="font-serif text-gold-400 text-sm uppercase tracking-widest mb-6">The Groom</p>
            
            <div className="font-sans text-cream-200/80 space-y-2 text-sm md:text-base">
              <p>S/O Mr. Yousaf & Mrs. Shajidha Yousaf</p>
              <p>Kurunian Parakkal (H.O), Othukkungal,</p>
              <p>Potikkallu, Malappuram</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoupleIntro;
