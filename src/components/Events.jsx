import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Navigation } from 'lucide-react';
import { useState, useEffect } from 'react';

const EventCard = ({ title, date, time, venue, address, mapLink, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -6, transition: { duration: 0.3 } }}
    transition={{ duration: 0.8, delay }}
    className="flex-1 w-full glass-card rounded-2xl p-5 md:p-7 border-t-4 border-t-gold-400 relative overflow-hidden group hover:border-gold-400 transition-colors hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)]"
  >
    <div className="absolute top-0 right-0 w-24 h-24 bg-gold-600 rounded-full blur-[60px] opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity"></div>

    <h3 className="font-script text-3xl md:text-4xl text-gold-400 mb-4">{title}</h3>

    <div className="space-y-3">
      <div className="flex items-center gap-3 text-cream-200">
        <div className="w-9 h-9 shrink-0 rounded-full bg-primary-800 flex items-center justify-center">
          <Calendar className="text-gold-400" size={16} />
        </div>
        <div>
          <p className="text-[10px] text-gold-400/80 uppercase tracking-widest">Date</p>
          <p className="font-serif text-sm md:text-base">{date}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 text-cream-200">
        <div className="w-9 h-9 shrink-0 rounded-full bg-primary-800 flex items-center justify-center">
          <Clock className="text-gold-400" size={16} />
        </div>
        <div>
          <p className="text-[10px] text-gold-400/80 uppercase tracking-widest">Time</p>
          <p className="font-serif text-sm md:text-base">{time}</p>
        </div>
      </div>

      <div className="flex items-start gap-3 text-cream-200">
        <div className="w-9 h-9 shrink-0 rounded-full bg-primary-800 flex items-center justify-center">
          <MapPin className="text-gold-400" size={16} />
        </div>
        <div>
          <p className="text-[10px] text-gold-400/80 uppercase tracking-widest">Venue</p>
          <p className="font-serif text-base md:text-lg text-gold-400 mb-0.5">{venue}</p>
          <p className="font-sans text-cream-200/80 text-xs leading-relaxed">{address}</p>
        </div>
      </div>
    </div>

    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={mapLink}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-flex items-center justify-center w-full gap-2 px-4 py-3 bg-primary-800 border border-gold-400/50 text-gold-400 rounded-lg hover:bg-gold-400 hover:text-primary-900 transition-colors relative overflow-hidden"
    >
      <Navigation size={15} />
      <span className="font-bold uppercase tracking-wider text-xs">View Location</span>
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
    <section id="events" className="min-h-screen py-8 px-4 bg-primary-900 relative overflow-hidden flex flex-col justify-center">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-600 rounded-full blur-[200px] opacity-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Header + Countdown */}
        <div className="text-center mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-script text-4xl md:text-6xl text-gold-400 mb-4 drop-shadow-md"
          >
            Wedding Events
          </motion.h2>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-3 md:gap-6 max-w-sm mx-auto p-4 md:p-5 glass-card rounded-2xl"
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
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-900 rounded-xl border border-gold-400/30 flex items-center justify-center shadow-inner shadow-black/50 mb-1.5">
                  <span className="font-serif text-xl md:text-2xl text-cream-100">{item.value.toString().padStart(2, '0')}</span>
                </div>
                <span className="text-[9px] md:text-xs text-gold-400 uppercase tracking-widest font-bold">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Event Cards */}
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">
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
