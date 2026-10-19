import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, FolderOpen, FileText } from 'lucide-react';
import heroPhoto from '../assets/my-photo.png';
import './Hero.css';

// ── Typing animation config ──────────────────────────────────────────────────
const TYPED_WORDS = [
  'Software Developer',
  'Full-Stack Engineer',
  'Problem Solver',
  'Open-Source Enthusiast',
];

function useTypingEffect(words, speed = 80, pause = 1800, erase = 50) {
  // Detect reduced-motion preference at call time (synchronous, no side effect)
  const reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const [text, setText]       = useState(reducedMotion ? words[0] : '');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    // Skip animation entirely if user prefers reduced motion
    if (reducedMotion) return;

    const current = words[wordIdx];
    let timeout;

    if (!deleting) {
      if (charIdx < current.length) {
        timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
      } else {
        timeout = setTimeout(() => setDeleting(true), pause);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => setCharIdx((c) => c - 1), erase);
      } else {
        // oxlint-disable-next-line react/set-state-in-effect -- intentional animation state machine
        setDeleting(false);
        setWordIdx((i) => (i + 1) % words.length);
      }
    }

    setText(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause, erase, reducedMotion]);

  return text;
}

// ── Framer Motion variants ────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

export default function Hero() {
  const typedText = useTypingEffect(TYPED_WORDS);

  return (
    <section className="hero" id="hero" aria-label="Introduction">
      {/* Animated background blobs */}
      <div className="hero__blob hero__blob--1" aria-hidden="true" />
      <div className="hero__blob hero__blob--2" aria-hidden="true" />
      <div className="hero__blob hero__blob--3" aria-hidden="true" />
      <div className="hero__grid-overlay" aria-hidden="true" />

      <div className="hero__inner">
        {/* Text column */}
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero__greeting" variants={itemVariants}>
            👋 Hey there, I&apos;m
          </motion.p>

          <motion.h1 className="hero__name" variants={itemVariants}>
            Taohid Hasan
            <span className="hero__name-accent"> Nasim</span>
          </motion.h1>

          <motion.div className="hero__title" variants={itemVariants} aria-live="polite">
            <span className="hero__typed">{typedText}</span>
            <span className="hero__cursor" aria-hidden="true">|</span>
          </motion.div>

          <motion.p className="hero__tagline" variants={itemVariants}>
            {/* TODO: Replace with your real tagline / short bio (1–2 sentences) */}
            I build web apps that solve everyday problems, from tracking market prices to logging workouts.
          </motion.p>

          <motion.div className="hero__actions" variants={itemVariants}>
            <a href="#projects" className="btn btn--primary">
              <FolderOpen size={18} aria-hidden="true" />
              View Projects
            </a>
            <Link to="/resume" className="btn btn--outline">
              <FileText size={18} aria-hidden="true" />
              Download Resume
            </Link>
          </motion.div>
        </motion.div>

        {/* Photo column */}
        <motion.div
          className="hero__photo-wrapper"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
        >
          <div className="hero__photo-ring" aria-hidden="true" />
          <div className="hero__photo-glow" aria-hidden="true" />
          <img
            src={heroPhoto}
            alt="Portrait of Taohid Hasan Nasim"
            className="hero__photo"
            width={340}
            height={340}
          />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        className="hero__scroll-cue"
        aria-label="Scroll to About section"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <ChevronDown size={24} />
      </motion.a>
    </section>
  );
}
