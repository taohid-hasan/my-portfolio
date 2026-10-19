import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import './Skills.css';

// ── Editable skill data ───────────────────────────────────────────────────────
// TODO: Replace placeholder entries with your real skills.
// Keep the category grouping — add/remove items freely.
const SKILL_GROUPS = [
  {
    category: 'Frontend',
    color: 'violet',
    skills: [
      'TODO: Skill 1 (e.g. React)',
      'TODO: Skill 2 (e.g. Next.js)',
      'TODO: Skill 3 (e.g. TypeScript)',
      'TODO: Skill 4 (e.g. CSS / Tailwind)',
      'TODO: Skill 5',
    ],
  },
  {
    category: 'Backend',
    color: 'cyan',
    skills: [
      'TODO: Skill 1 (e.g. Node.js)',
      'TODO: Skill 2 (e.g. Express)',
      'TODO: Skill 3 (e.g. Python)',
      'TODO: Skill 4 (e.g. REST APIs)',
      'TODO: Skill 5',
    ],
  },
  {
    category: 'Tools & Platforms',
    color: 'pink',
    skills: [
      'TODO: Skill 1 (e.g. Git / GitHub)',
      'TODO: Skill 2 (e.g. Docker)',
      'TODO: Skill 3 (e.g. Vercel)',
      'TODO: Skill 4 (e.g. VS Code)',
      'TODO: Skill 5',
    ],
  },
];

// ── Animation variants ────────────────────────────────────────────────────────
const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
};

const chipVariants = {
  hidden:  { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="section skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      aria-labelledby="skills-heading"
    >
      <div className="section__inner">
        {/* Header */}
        <motion.div className="section__header" variants={cardVariants}>
          <span className="section__label">
            <Cpu size={12} aria-hidden="true" style={{ display: 'inline', marginRight: '6px' }} />
            Skills
          </span>
          <h2 className="section__title" id="skills-heading">
            Technologies I <span className="gradient-text">work with</span>
          </h2>
          <p className="section__subtitle">
            A categorised overview of the tools and technologies in my toolkit.
          </p>
        </motion.div>

        {/* Skill groups */}
        <motion.div className="skills__grid" variants={containerVariants}>
          {SKILL_GROUPS.map(({ category, color, skills }) => (
            <motion.div
              key={category}
              className={`skills__group glass skills__group--${color}`}
              variants={cardVariants}
              whileHover={{ y: -4 }}
            >
              <h3 className={`skills__category skills__category--${color}`}>{category}</h3>
              <motion.ul
                className="skills__chips"
                variants={containerVariants}
                role="list"
              >
                {skills.map((skill) => (
                  <motion.li key={skill} variants={chipVariants}>
                    <span className={`skills__chip skills__chip--${color}`}>{skill}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
