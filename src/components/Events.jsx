import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Navigation } from 'lucide-react';
import { useState, useEffect } from 'react';

const EventCard = ({ title, date, time, venue, address, mapLink, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -10, transition: { duration: 0.3 } }}
    transition={{ duration: 0.8, delay }}
    className="flex-1 w-full glass-card rounded-2xl p-5 md:p-10 border-t-4 border-t-gold-400 relative overflow-hidden group hover:border-gold-400 transition-colors hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)]"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-600 rounded-full blur-[80px] opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity"></div>
    
    <h3 className="font-script text-3xl md:text-5xl text-gold-400 mb-4 md:mb-8">{title}</h3>

    <div className="space-y-4 md:space-y-6">
      <div className="flex items-center gap-3 md:gap-4 text-cream-200">
        <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-primary-800 flex items-center justify-center">
          <Calendar className="text-gold-400" size={18} md:size={20} />
        </div>
        <div>
          <p className="text-[10px] text-gold-400/80 uppercase tracking-widest">Date</p>
          <p className="font-serif text-base md:text-lg">{date}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3 md:gap-4 text-cream-200">
        <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-primary-800 flex items-center justify-center">
          <Clock className="text-gold-400" size={18} md:size={20} />
        </div>
        <div>
          <p className="text-[10px] text-gold-400/80 uppercase tracking-widest">Time</p>
          <p className="font-serif text-base md:text-lg">{time}</p>
        </div>
      </div>

      <div className="flex items-start gap-3 md:gap-4 text-cream-200 pt-1 md:pt-2">
        <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-primary-800 flex items-center justify-center">
          <MapPin className="text-gold-400" size={18} md:size={20} />
        </div>
        <div>
          <p className="text-[10px] text-gold-400/80 uppercase tracking-widest">Venue</p>
          <p className="font-serif text-lg md:text-xl text-gold-400 mb-1">{venue}</p>
          <p className="font-sans text-cream-200/80 text-xs md:text-sm leading-relaxed">{address}</p>
        </div>
      </div>
    </div>

    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={mapLink}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 md:mt-8 inline-flex items-center justify-center w-full gap-2 px-4 py-3 md:px-6 md:py-4 bg-primary-800 border border-gold-400/50 text-gold-400 rounded-lg hover:bg-gold-400 hover:text-primary-900 transition-colors relative overflow-hidden"
    >
      <Navigation size={18} />
      <span className="font-bold uppercase tracking-wider text-xs md:text-sm">View Location</span>
    </motion.a>
  </motion.div>
);

const Events = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('May 30, 2026 11:30:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="events" className="min-h-[100dvh] py-8 md:py-24 px-4 bg-primary-900 relative overflow-hidden flex flex-col justify-center">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-600 rounded-full blur-[200px] opacity-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="text-center mb-8 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-script text-4xl md:text-7xl text-gold-400 mb-6 md:mb-8 drop-shadow-md"
          >
            Wedding Events
          </motion.h2>

          {/* Countdown Timer */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-2 md:gap-8 max-w-2xl mx-auto p-4 md:p-8 glass-card rounded-2xl md:rounded-3xl"
          >
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Mins', value: timeLeft.minutes },
              { label: 'Secs', value: timeLeft.seconds }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 md:w-24 md:h-24 bg-primary-900 rounded-xl border border-gold-400/30 flex items-center justify-center shadow-inner shadow-black/50 mb-2 md:mb-3">
                  <span className="font-serif text-xl md:text-4xl text-cream-100">{item.value.toString().padStart(2, '0')}</span>
                </div>
                <span className="text-[8px] md:text-sm text-gold-400 uppercase tracking-widest font-bold">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 md:mt-16">
          <EventCard 
            title="The Nikah"
            date="Saturday, 30th May 2026"
            time="11:30 AM to 12:00 Noon"
            venue="Thevarcad Conventional Center"
            address="Valliyode, Vadakkencherry, Palakkad"
            mapLink="https://maps.app.goo.gl/Tkg1mpQa5aEeyLHN7"
            delay={0.4}
          />
          
          <EventCard 
            title="Wedding Reception"
            date="Sunday, 31st May 2026"
            time="12:00 Noon Onwards"
            venue="Green Palace Auditorium"
            address="Othukkungal, Pookkunnu, Malappuram"
            mapLink="https://maps.app.goo.gl/hUHXXzxFMCqLAF4v9"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default Events;
