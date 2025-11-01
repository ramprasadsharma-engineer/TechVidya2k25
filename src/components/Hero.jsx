import { motion } from 'framer-motion'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <motion.h3
        className="presenter-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Sai Vidya Institute of Technology
      </motion.h3>
      
      <motion.h3
        className="presenter-title presents"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Presents
      </motion.h3>
      
      <div className="hero-content">
        <motion.h1
          className="event-title liquid-mirror"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.6,
            type: "spring",
            stiffness: 100
          }}
        >
          TECHVIDYA 2K25
        </motion.h1>
        
        <motion.h2
          className="event-subtitle"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          CHANAKYOTSAV
        </motion.h2>

        <motion.p
          className="event-dates"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          14TH & 15TH NOVEMBER
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 40px rgba(232, 232, 232, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('events').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Events
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

