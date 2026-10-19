import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import './AboutMe.css';

// ── Editable bio content ─────────────────────────────────────────────────────
// TODO: Replace all placeholder strings with your real information.
const BIO_PARAGRAPHS = [
  "TODO: Write your first bio paragraph here — e.g. a brief introduction about who you are, your background, and what kind of software you build.",
  "TODO: Write a second paragraph — e.g. your motivation, what excites you about software development, or a personal story that shaped your career.",
  "TODO: Write a third paragraph (optional) — e.g. what you're currently learning, open to, or pursuing.",
];

// TODO: Replace stat values with your real numbers
const STATS = [
  { value: 'TODO',  label: 'Years Experience' },
  { value: 'TODO',  label: 'Projects Built'   },
  { value: 'TODO',  label: 'Technologies Used' },
];

// ── Animation variants ────────────────────────────────────────────────────────
const sectionVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const slideUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

export default function AboutMe() {
  return (
    <motion.section
      id="about"
      className="section section--alt about"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      aria-labelledby="about-heading"
    >
      <div className="section__inner about__inner">
        {/* Header */}
        <motion.div className="section__header" variants={slideUp}>
          <span className="section__label">
            <User size={12} aria-hidden="true" style={{ display: 'inline', marginRight: '6px' }} />
            About Me
          </span>
          <h2 className="section__title" id="about-heading">
            A little bit <span className="gradient-text">about me</span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="about__grid">
          {/* Bio */}
          <motion.div className="about__bio" variants={slideUp}>
            {BIO_PARAGRAPHS.map((para, i) => (
              <p key={i} className="about__para">{para}</p>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div className="about__stats" variants={slideUp}>
            {STATS.map(({ value, label }) => (
              <div key={label} className="about__stat glass">
                <span className="about__stat-value gradient-text">{value}</span>
                <span className="about__stat-label">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
