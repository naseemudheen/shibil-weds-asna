import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const CoupleIntro = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="couple" className="py-6 md:py-24 px-4 bg-dark-bg relative">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-4 md:mb-14"
        >
          <h2 className="font-script text-4xl md:text-6xl text-gold-400 mb-2 md:mb-4">The Couple</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto"></div>
        </motion.div>

        {/* Main Layout — stacked on mobile, side-by-side on desktop */}
        <div className="flex flex-col md:flex-row md:items-stretch gap-4 md:gap-12">

          {/* LEFT — Couple Photo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full md:w-2/5 flex-shrink-0 md:self-stretch mb-2 md:mb-0"
          >
            <div className="relative w-full md:max-w-[380px] md:h-full">
              {/* Glowing gradient border */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 25px rgba(212,175,55,0.2), 0 0 50px rgba(212,175,55,0.08)',
                    '0 0 45px rgba(212,175,55,0.4), 0 0 90px rgba(212,175,55,0.15)',
                    '0 0 25px rgba(212,175,55,0.2), 0 0 50px rgba(212,175,55,0.08)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-2xl overflow-hidden w-full md:h-full"
                style={{
                  padding: '3px',
                  background: 'linear-gradient(135deg, rgba(212,175,55,0.7), rgba(180,140,30,0.2), rgba(212,175,55,0.7))'
                }}
              >
                <div className="rounded-2xl overflow-hidden w-full md:h-full">
                  <img
                    src="/couple.png"
                    alt="Shibili & Asna"
                    className="w-full block md:!h-full md:!object-contain md:!object-center"
                    style={{ height: 'min(38svh, 340px)', objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>
              </motion.div>

              {/* Corner decorations */}
              <div className="absolute -top-2 -left-2 w-8 h-8 md:hidden border-t-2 border-l-2 border-gold-400 rounded-tl-lg opacity-70"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 md:hidden border-t-2 border-r-2 border-gold-400 rounded-tr-lg opacity-70"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 md:hidden border-b-2 border-l-2 border-gold-400 rounded-bl-lg opacity-70"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 md:hidden border-b-2 border-r-2 border-gold-400 rounded-br-lg opacity-70"></div>

              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 py-4 rounded-b-2xl text-center">
                <p className="font-script text-xl md:text-2xl text-gold-300 tracking-wide">Shibili & Asna</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Name cards stacked */}
          <div className="w-full md:w-3/5 flex flex-col gap-3 md:gap-10 pt-5 pb-5">

            {/* Groom Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.9 }}
              className="flex-1 p-4 md:p-8 glass-card rounded-2xl relative hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-shadow"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-gold-400 rounded-tl-xl opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-gold-400 rounded-br-xl opacity-50"></div>

              <h3 className="font-script text-3xl md:text-5xl text-cream-100 mb-0.5">Muhammed Shibili</h3>
              <p className="font-serif text-gold-400 text-xs uppercase tracking-widest mb-1 md:mb-4">The Groom</p>
              <div className="font-sans text-cream-200/80 space-y-0.5 text-base md:text-base">
                <p>S/O Mr. Yousaf & Mrs. Shahidha Yousaf</p>
                <p>Kurunian Parakkal (H.O), Othukkungal,</p>
                <p>Potikkallu, Malappuram</p>
              </div>
            </motion.div>

            {/* Decorative divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3"
            >
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold-500/40"></div>
              <span className="font-script text-xl text-gold-400">✦</span>
              <motion.div
                animate={{ boxShadow: ['0 0 10px rgba(212,175,55,0.3)', '0 0 22px rgba(212,175,55,0.6)', '0 0 10px rgba(212,175,55,0.3)'] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-primary-800 border border-gold-400"
              >
                <span className="font-script text-xl md:text-2xl text-gold-400">&amp;</span>
              </motion.div>
              <span className="font-script text-xl text-gold-400">✦</span>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold-500/40"></div>
            </motion.div>

            {/* Bride Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="flex-1 p-4 md:p-8 glass-card rounded-2xl relative hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-shadow"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-gold-400 rounded-tr-xl opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-gold-400 rounded-bl-xl opacity-50"></div>

              <h3 className="font-script text-3xl md:text-5xl text-cream-100 mb-0.5">Asna P V</h3>
              <p className="font-serif text-gold-400 text-xs uppercase tracking-widest mb-1 md:mb-4">The Bride</p>
              <div className="font-sans text-cream-200/80 space-y-0.5 text-base md:text-base">
                <p>D/O Mr. Veerasahib P A & Mrs. Hafsath</p>
                <p>Al Farah, Panamkulambu,</p>
                <p>Mudappallur P.O, Palakkad</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
          onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
          className="mt-6 md:mt-16 mx-auto flex flex-col items-center justify-center gap-2 cursor-pointer hover:opacity-80 transition-opacity relative z-20"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold-400/80">Next Section</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-gold-400"
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.button>

      </div>
    </section>
  );
};

export default CoupleIntro;
