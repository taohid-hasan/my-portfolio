import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import './Education.css';

// ── Editable education data ─────────────────────────────────────────────────
// TODO: Replace all placeholder entries with your real education history.
const EDUCATION = [
  {
    id: 1,
    degree:      'TODO: Degree name (e.g. B.Sc. in Computer Science)',
    institution: 'TODO: University / College name',
    period:      'TODO: e.g. 2019 – 2023',
    location:    'TODO: City, Country',
    grade:       'TODO: GPA or grade (optional — remove this field if not applicable)',
    notes:       'TODO: Relevant coursework, thesis, achievements, or activities (optional).',
  },
  {
    id: 2,
    degree:      'TODO: Secondary / Higher Secondary (or another degree)',
    institution: 'TODO: School / College name',
    period:      'TODO: e.g. 2017 – 2019',
    location:    'TODO: City, Country',
    grade:       'TODO: Grade / GPA',
    notes:       '',
  },
];

// ── Animation variants ────────────────────────────────────────────────────────
const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
};

export default function Education() {
  return (
    <motion.section
      id="education"
      className="section education"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      aria-labelledby="education-heading"
    >
      <div className="section__inner">
        {/* Header */}
        <motion.div className="section__header" variants={itemVariants}>
          <span className="section__label">
            <GraduationCap size={12} aria-hidden="true" style={{ display: 'inline', marginRight: '6px' }} />
            Education
          </span>
          <h2 className="section__title" id="education-heading">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div className="education__grid" variants={containerVariants}>
          {EDUCATION.map((edu) => (
            <motion.div key={edu.id} className="edu-card glass" variants={itemVariants} whileHover={{ y: -4 }}>
              <div className="edu-card__icon" aria-hidden="true">
                <GraduationCap size={22} />
              </div>
              <div className="edu-card__body">
                <h3 className="edu-card__degree">{edu.degree}</h3>
                <p className="edu-card__institution">{edu.institution}</p>
                <div className="edu-card__meta">
                  <span className="edu-card__period">{edu.period}</span>
                  <span className="edu-card__location">{edu.location}</span>
                  {edu.grade && <span className="edu-card__grade">{edu.grade}</span>}
                </div>
                {edu.notes && <p className="edu-card__notes">{edu.notes}</p>}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
