import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import './Experience.css';

// ── Editable experience data ─────────────────────────────────────────────────
// TODO: Replace all placeholder entries with your real work experience.
// Add or remove objects in this array freely.
const EXPERIENCE = [
  {
    id: 1,
    role:        'TODO: Job Title (e.g. Software Developer)',
    company:     'TODO: Company Name',
    period:      'TODO: e.g. Jan 2024 – Present',
    location:    'TODO: City, Country (or Remote)',
    description: 'TODO: Describe your responsibilities and achievements at this role — what you built, improved, or led.',
    highlights: [
      'TODO: Key achievement or responsibility 1',
      'TODO: Key achievement or responsibility 2',
      'TODO: Key achievement or responsibility 3',
    ],
  },
  {
    id: 2,
    role:        'TODO: Job Title',
    company:     'TODO: Company Name',
    period:      'TODO: e.g. Jun 2022 – Dec 2023',
    location:    'TODO: City, Country',
    description: 'TODO: Describe your responsibilities and achievements at this role.',
    highlights: [
      'TODO: Key achievement or responsibility 1',
      'TODO: Key achievement or responsibility 2',
    ],
  },
];

// ── Animation variants ────────────────────────────────────────────────────────
const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden:  { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="section section--alt experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      aria-labelledby="experience-heading"
    >
      <div className="section__inner">
        {/* Header */}
        <motion.div className="section__header" variants={itemVariants}>
          <span className="section__label">
            <Briefcase size={12} aria-hidden="true" style={{ display: 'inline', marginRight: '6px' }} />
            Experience
          </span>
          <h2 className="section__title" id="experience-heading">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.ol className="timeline" variants={containerVariants} role="list">
          {EXPERIENCE.map((exp) => (
            <motion.li key={exp.id} className="timeline__item" variants={itemVariants}>
              {/* Dot */}
              <div className="timeline__dot" aria-hidden="true" />

              {/* Card */}
              <div className="timeline__card glass">
                <div className="timeline__card-header">
                  <div>
                    <h3 className="timeline__role">{exp.role}</h3>
                    <p className="timeline__company">{exp.company}</p>
                  </div>
                  <div className="timeline__meta">
                    <span className="timeline__period">{exp.period}</span>
                    <span className="timeline__location">{exp.location}</span>
                  </div>
                </div>
                <p className="timeline__desc">{exp.description}</p>
                {exp.highlights.length > 0 && (
                  <ul className="timeline__highlights" role="list">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </motion.section>
  );
}
