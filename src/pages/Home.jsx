import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero      from '../components/Hero.jsx';
import AboutMe   from '../components/AboutMe.jsx';
import Skills    from '../components/Skills.jsx';
import Projects  from '../components/Projects.jsx';
import Experience from '../components/Experience.jsx';
import Education from '../components/Education.jsx';
import Contact   from '../components/Contact.jsx';

/**
 * Home page — renders all sections in order.
 * Handles deferred scroll when navigating from another page
 * (the Navbar stores the target hash in location.state.scrollTo).
 */
export default function Home() {
  const { state } = useLocation();

  useEffect(() => {
    if (state?.scrollTo) {
      // Small delay lets sections mount before scrolling
      const timer = setTimeout(() => {
        const el = document.querySelector(state.scrollTo);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [state]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      aria-label="Main content"
    >
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </motion.main>
  );
}
