import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, GitBranch, CheckCircle2 } from 'lucide-react';
import projects from '../data/projects.js';
import './ProjectDetails.css';

// ── Animation variants ────────────────────────────────────────────────────────
const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
};

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  /* ── 404-like fallback ── */
  if (!project) {
    return (
      <motion.main
        className="project-not-found"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        aria-label="Project not found"
      >
        <div className="project-not-found__inner">
          <p className="project-not-found__code">404</p>
          <h1 className="project-not-found__title">Project not found</h1>
          <p className="project-not-found__sub">
            Hmm, there&apos;s no project with id <code>&ldquo;{id}&rdquo;</code>. It may have been moved or renamed.
          </p>
          <Link to="/#projects" className="btn btn--primary">
            <ArrowLeft size={16} aria-hidden="true" />
            Back to Projects
          </Link>
        </div>
      </motion.main>
    );
  }

  const { title, fullDescription, techStack, features, image, liveUrl, githubUrl } = project;

  return (
    <motion.main
      className="project-details"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-label={`Project details: ${title}`}
    >
      <div className="project-details__inner">
        {/* Back */}
        <motion.div variants={itemVariants}>
          <Link to="/#projects" className="project-details__back">
            <ArrowLeft size={16} aria-hidden="true" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Hero image */}
        <motion.div className="project-details__img-wrapper" variants={itemVariants}>
          <img
            src={image}
            alt={`${title} screenshot`}
            className="project-details__img"
            loading="eager"
          />
          <div className="project-details__img-overlay" aria-hidden="true" />
        </motion.div>

        {/* Content grid */}
        <div className="project-details__grid">
          {/* Left: main info */}
          <div className="project-details__main">
            <motion.h1 className="project-details__title" variants={itemVariants}>
              {title}
            </motion.h1>

            <motion.p className="project-details__desc" variants={itemVariants}>
              {fullDescription}
            </motion.p>

            {/* Features */}
            {features.length > 0 && (
              <motion.div className="project-details__features" variants={itemVariants}>
                <h2 className="project-details__section-heading">Key Features</h2>
                <ul className="project-details__feature-list" role="list">
                  {features.map((feature, i) => (
                    <li key={i} className="project-details__feature-item">
                      <CheckCircle2 size={16} className="project-details__feature-icon" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>

          {/* Right: sidebar */}
          <motion.aside className="project-details__sidebar" variants={itemVariants} aria-label="Project sidebar">
            {/* Tech stack */}
            <div className="project-details__sidebar-card glass">
              <h2 className="project-details__section-heading">Tech Stack</h2>
              <ul className="project-details__tech-list" role="list" aria-label="Technologies used">
                {techStack.map((tech) => (
                  <li key={tech}>
                    <span className="project-details__tech-chip">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA buttons */}
            <div className="project-details__ctas">
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
                aria-label={`Live demo of ${title}`}
              >
                <ExternalLink size={16} aria-hidden="true" />
                Live Demo
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
                aria-label={`GitHub repository for ${title}`}
              >
                <GitBranch size={16} aria-hidden="true" />
                GitHub
              </a>
            </div>
          </motion.aside>
        </div>
      </div>
    </motion.main>
  );
}
