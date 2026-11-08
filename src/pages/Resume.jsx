import { motion } from 'framer-motion';
import { Printer, Mail, GitBranch, Globe, Download } from 'lucide-react';
import './Resume.css';

const RESUME_PDF = '/Taohid_Hasan_Nasim_Resume.pdf';
const RESUME_FILENAME = 'Taohid_Hasan_Nasim_Resume.pdf';

// ── Resume data ─────────────────────────────────────────────────────────────
const RESUME_DATA = {
  name:  'Taohid Hasan Nasim',
  title: 'Software Developer',
  email: 'taohidhasannasim@gmail.com',
  linkedin: {
    label: 'linkedin.com/in/taohid-hasan-nasim',
    url:   'https://www.linkedin.com/in/taohid-hasan-nasim',
  },
  github: {
    label: 'github.com/taohid-hasan',
    url:   'https://github.com/taohid-hasan',
  },

  summary:
    'Full-stack developer skilled in Next.js, React, TypeScript, Node.js/Express, and MongoDB. Built and deployed BookNook, a library management app with JWT-secured REST APIs, Better Auth login, and race-condition-safe borrow/return logic. Seeking a junior developer role.',

  skills: {
    Languages:                  ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
    Frontend:                   ['React', 'Next.js (App Router)', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion', 'Swiper'],
    Backend:                    ['Node.js', 'Express.js', 'RESTful APIs'],
    Database:                   ['MongoDB'],
    Authentication:             ['JWT', 'JWKS', 'Better Auth', 'Google OAuth'],
    'Tools & Deployment':       ['Git', 'GitHub', 'Vercel', 'npm', 'ESLint'],
    Concepts:                   ['Responsive Web Design', 'REST API Design', 'Authentication & Authorization', 'Client-Server Architecture'],
  },

  projects: [
    {
      title: 'BookNook: Full-Stack Library Management App',
      links: [
        { label: 'Live Demo',   url: 'https://book-nook-a8-client-kappa.vercel.app' },
        { label: 'Client Repo', url: 'https://github.com/taohid-hasan/book-nook-a8-client' },
        { label: 'Server Repo', url: 'https://github.com/taohid-hasan/book-nook-a8-server' },
      ],
      tech:
        'Next.js 16, React 19, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, Node.js, Express, MongoDB, Better Auth, JWT (JWKS), Vercel',
      bullets: [
        'Built a full-stack library app where users sign in with email or Google (Better Auth) to add, edit, delete, search, and filter books, with image upload via imgbb.',
        'Secured a REST API (Express, MongoDB) by verifying Better Auth JWTs against a JWKS endpoint, with owner-only and borrower-only access rules on update, delete, and return routes.',
        'Implemented atomic borrow/return logic with live copy tracking, using a unique partial index to reject duplicate borrows by the same user.',
        'Designed a responsive UI (phone to desktop) with dark/light themes, loading/empty/error states, and Framer Motion animations; deployed both client and API on Vercel.',
      ],
    },
  ],

  education: [
    {
      degree:      'B.S.S. (Honours) in Economics',
      institution: 'National University',
      period:      'Expected 2029',
    },
  ],

  courses: [
    {
      name:   'Complete Web Development Course',
      issuer: 'Programming Hero',
      period: '2026',
    },
  ],

  languages: ['Bangla (Native)', 'English (Elementary)'],
};

export default function Resume() {
  return (
    <>
      {/* Print / download actions — hidden during actual print */}
      <div className="resume-actions no-print">
        <motion.div
          className="resume-actions__group"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <button
            type="button"
            className="btn btn--outline resume-print-btn"
            onClick={() => window.print()}
            aria-label="Print or save resume as PDF"
          >
            <Printer size={18} aria-hidden="true" />
            Print / Save as PDF
          </button>
          <a
            href={RESUME_PDF}
            download={RESUME_FILENAME}
            className="btn btn--primary resume-download-btn"
            aria-label="Download Taohid Hasan Nasim's resume as a PDF"
          >
            <Download size={18} aria-hidden="true" />
            Download PDF
          </a>
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
            <a
              href={`mailto:${RESUME_DATA.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="resume__contact-item"
              role="listitem"
              aria-label={`Email ${RESUME_DATA.name}`}
            >
              <Mail size={14} aria-hidden="true" />
              {RESUME_DATA.email}
            </a>
            <a
              href={RESUME_DATA.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="resume__contact-item"
              role="listitem"
              aria-label={`${RESUME_DATA.name} on LinkedIn`}
            >
              <Globe size={14} aria-hidden="true" />
              {RESUME_DATA.linkedin.label}
            </a>
            <a
              href={RESUME_DATA.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="resume__contact-item"
              role="listitem"
              aria-label={`${RESUME_DATA.name} on GitHub`}
            >
              <GitBranch size={14} aria-hidden="true" />
              {RESUME_DATA.github.label}
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

        {/* Projects */}
        <ResumeSection title="Projects">
          {RESUME_DATA.projects.map((project) => (
            <div key={project.title} className="resume__entry">
              <div className="resume__entry-header">
                <div>
                  <h3 className="resume__entry-title">{project.title}</h3>
                  <div className="resume__project-links">
                    {project.links.map((link, i) => (
                      <span key={link.url}>
                        {i > 0 && <span className="resume__project-sep" aria-hidden="true"> · </span>}
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="resume__project-link"
                          aria-label={`${link.label} for ${project.title}`}
                        >
                          {link.label}
                        </a>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="resume__project-tech">
                <span className="resume__project-tech-label">Tech:</span> {project.tech}
              </p>
              <ul className="resume__bullets">
                {project.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
              </ul>
            </div>
          ))}
        </ResumeSection>

        {/* Education */}
        <ResumeSection title="Education">
          {RESUME_DATA.education.map((edu) => (
            <div key={edu.degree} className="resume__entry">
              <div className="resume__entry-header">
                <div>
                  <h3 className="resume__entry-title">{edu.degree}</h3>
                  <p className="resume__entry-sub">{edu.institution}</p>
                </div>
                <span className="resume__entry-period">{edu.period}</span>
              </div>
            </div>
          ))}
        </ResumeSection>

        {/* Courses */}
        <ResumeSection title="Courses">
          {RESUME_DATA.courses.map((course) => (
            <div key={course.name} className="resume__entry">
              <div className="resume__entry-header">
                <div>
                  <h3 className="resume__entry-title">{course.name}</h3>
                  <p className="resume__entry-sub">{course.issuer}</p>
                </div>
                <span className="resume__entry-period">{course.period}</span>
              </div>
            </div>
          ))}
        </ResumeSection>

        {/* Languages */}
        <ResumeSection title="Languages">
          <ul className="resume__bullets resume__languages">
            {RESUME_DATA.languages.map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
        </ResumeSection>
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
