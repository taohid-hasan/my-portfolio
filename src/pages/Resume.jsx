import { motion } from 'framer-motion';
import { Printer, Mail, GitBranch, Globe } from 'lucide-react';
import './Resume.css';

// ── Editable resume data — mirror your real info here ───────────────────────
// All TODO: items must be replaced before printing / sharing.

const RESUME_DATA = {
  name:     'Taohid Hasan Nasim',
  title:    'Software Developer',
  email:    'taohidhasannasim@gmail.com',
  linkedin: 'linkedin.com/in/taohid-hasan-nasim',
  github:   'github.com/taohid-hasan',

  // TODO: Write a 2–3 sentence professional summary
  summary:
    'TODO: Write your professional summary — who you are, what you specialise in, and what value you bring to a team.',

  // TODO: Replace with your real skills (same as Skills component)
  skills: {
    Frontend:        ['TODO: React', 'TODO: Next.js', 'TODO: CSS'],
    Backend:         ['TODO: Node.js', 'TODO: Express', 'TODO: Python'],
    'Tools':         ['TODO: Git', 'TODO: Docker', 'TODO: Vercel'],
  },

  // TODO: Replace with your real experience
  experience: [
    {
      role:     'TODO: Job Title',
      company:  'TODO: Company Name',
      period:   'TODO: Mon YYYY – Present',
      location: 'TODO: City, Country',
      bullets: [
        'TODO: Key responsibility or achievement 1',
        'TODO: Key responsibility or achievement 2',
        'TODO: Key responsibility or achievement 3',
      ],
    },
    {
      role:     'TODO: Job Title',
      company:  'TODO: Company Name',
      period:   'TODO: Mon YYYY – Mon YYYY',
      location: 'TODO: City, Country',
      bullets: [
        'TODO: Key responsibility or achievement 1',
        'TODO: Key responsibility or achievement 2',
      ],
    },
  ],

  // TODO: Replace with your real education
  education: [
    {
      degree:      'TODO: B.Sc. in Computer Science (or your actual degree)',
      institution: 'TODO: University Name',
      period:      'TODO: YYYY – YYYY',
      grade:       'TODO: GPA / Grade',
    },
    {
      degree:      'TODO: Higher Secondary Certificate (or equivalent)',
      institution: 'TODO: College / School Name',
      period:      'TODO: YYYY – YYYY',
      grade:       'TODO: Grade',
    },
  ],

  // TODO: Add any certifications you have (remove if none)
  certifications: [
    'TODO: Certification 1 — Issuer, Year',
    'TODO: Certification 2 — Issuer, Year',
  ],
};

export default function Resume() {
  return (
    <>
      {/* Print / save button — hidden during actual print */}
      <div className="resume-actions no-print">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <button
            type="button"
            className="btn btn--primary resume-print-btn"
            onClick={() => window.print()}
            aria-label="Print or save resume as PDF"
          >
            <Printer size={18} aria-hidden="true" />
            Print / Save as PDF
          </button>
        </motion.div>
      </div>

      {/* Resume sheet */}
      <motion.main
        className="resume"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        aria-label="Resume"
      >
        {/* Header */}
        <header className="resume__header">
          <h1 className="resume__name">{RESUME_DATA.name}</h1>
          <p className="resume__title">{RESUME_DATA.title}</p>
          <div className="resume__contact-row" role="list" aria-label="Contact information">
            <a href={`mailto:${RESUME_DATA.email}`} className="resume__contact-item" role="listitem">
              <Mail size={14} aria-hidden="true" />
              {RESUME_DATA.email}
            </a>
            <a
              href={`https://${RESUME_DATA.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="resume__contact-item"
              role="listitem"
            >
              <Globe size={14} aria-hidden="true" />
              {RESUME_DATA.linkedin}
            </a>
            <a
              href={`https://${RESUME_DATA.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="resume__contact-item"
              role="listitem"
            >
              <GitBranch size={14} aria-hidden="true" />
              {RESUME_DATA.github}
            </a>
          </div>
        </header>

        {/* Summary */}
        <ResumeSection title="Summary">
          <p className="resume__summary">{RESUME_DATA.summary}</p>
        </ResumeSection>

        {/* Skills */}
        <ResumeSection title="Skills">
          <div className="resume__skills-grid">
            {Object.entries(RESUME_DATA.skills).map(([cat, items]) => (
              <div key={cat} className="resume__skill-group">
                <h3 className="resume__skill-cat">{cat}</h3>
                <p className="resume__skill-items">{items.join(' · ')}</p>
              </div>
            ))}
          </div>
        </ResumeSection>

        {/* Experience */}
        <ResumeSection title="Experience">
          {RESUME_DATA.experience.map((exp, i) => (
            <div key={i} className="resume__entry">
              <div className="resume__entry-header">
                <div>
                  <h3 className="resume__entry-title">{exp.role}</h3>
                  <p className="resume__entry-sub">{exp.company} — {exp.location}</p>
                </div>
                <span className="resume__entry-period">{exp.period}</span>
              </div>
              <ul className="resume__bullets">
                {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </ResumeSection>

        {/* Education */}
        <ResumeSection title="Education">
          {RESUME_DATA.education.map((edu, i) => (
            <div key={i} className="resume__entry">
              <div className="resume__entry-header">
                <div>
                  <h3 className="resume__entry-title">{edu.degree}</h3>
                  <p className="resume__entry-sub">{edu.institution}</p>
                </div>
                <span className="resume__entry-period">{edu.period}</span>
              </div>
              {edu.grade && <p className="resume__grade">Grade: {edu.grade}</p>}
            </div>
          ))}
        </ResumeSection>

        {/* Certifications */}
        {RESUME_DATA.certifications.length > 0 && (
          <ResumeSection title="Certifications">
            <ul className="resume__bullets">
              {RESUME_DATA.certifications.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </ResumeSection>
        )}
      </motion.main>
    </>
  );
}

function ResumeSection({ title, children }) {
  return (
    <section className="resume__section" aria-labelledby={`resume-${title.toLowerCase()}`}>
      <h2 className="resume__section-title" id={`resume-${title.toLowerCase()}`}>{title}</h2>
      <div className="resume__section-body">{children}</div>
    </section>
  );
}
