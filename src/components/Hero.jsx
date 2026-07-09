import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import "../styles/hero.css";

function Hero() {
  const scrollToForm = () => {
    const form = document.getElementById("complaint-form");

    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <ParticleBackground />

      <div className="hero-content">

        <motion.span
          className="hero-badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
        >
          منصة إماراتية لحماية المستهلك
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2, duration: .8 }}
        >
          منصة شكاوى الإمارات
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .45, duration: .8 }}
        >
          قدّم شكواك ضد أي شركة أو مؤسسة تجارية في الإمارات خلال دقائق.
          بياناتك محمية بالكامل ويتم استقبال البلاغات بسرية تامة.
        </motion.p>

        <motion.button
          onClick={scrollToForm}
          whileHover={{
            scale: 1.05
          }}
          whileTap={{
            scale: .97
          }}
          transition={{
            type: "spring",
            stiffness: 300
          }}
          initial={{
            opacity: 0,
            y: 25
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          className="hero-btn"
        >
          قدّم شكوتك الآن
        </motion.button>

      </div>

    </section>
  );
}

export default Hero;