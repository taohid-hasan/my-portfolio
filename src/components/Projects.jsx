import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, FolderKanban } from 'lucide-react';
import projects from '../data/projects.js';
import './Projects.css';

// ── Animation variants ────────────────────────────────────────────────────────
const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="section section--alt projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      aria-labelledby="projects-heading"
    >
      <div className="section__inner">
        {/* Header */}
        <motion.div className="section__header" variants={cardVariants}>
          <span className="section__label">
            <FolderKanban size={12} aria-hidden="true" style={{ display: 'inline', marginRight: '6px' }} />
            Projects
          </span>
          <h2 className="section__title" id="projects-heading">
            Things I&apos;ve <span className="gradient-text">built</span>
          </h2>
          <p className="section__subtitle">
            A selection of projects I&apos;ve worked on — click any card for full details.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div className="projects__grid" variants={containerVariants}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

function ProjectCard({ project }) {
  const { id, title, shortDescription, techStack, image, liveUrl, githubUrl } = project;

  return (
    <motion.article
      className="project-card glass"
      variants={cardVariants}
      whileHover={{ y: -6, boxShadow: '0 8px 40px rgba(168,85,247,0.25), 0 0 0 1px rgba(168,85,247,0.2)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      aria-label={`Project: ${title}`}
    >
      {/* Image */}
      <Link to={`/project/${id}`} className="project-card__img-link" tabIndex={-1} aria-hidden="true">
        <div className="project-card__img-wrapper">
          <img src={image} alt={`${title} screenshot`} className="project-card__img" loading="lazy" />
          <div className="project-card__img-overlay" />
        </div>
      </Link>

      {/* Body */}
      <div className="project-card__body">
        <h3 className="project-card__title">
          <Link to={`/project/${id}`} className="project-card__title-link">{title}</Link>
        </h3>
        <p className="project-card__desc">{shortDescription}</p>

        {/* Tech chips */}
        <ul className="project-card__chips" role="list" aria-label="Technologies used">
          {techStack.map((tech) => (
            <li key={tech}>
              <span className="project-card__chip">{tech}</span>
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="project-card__links">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link project-card__link--live"
            aria-label={`Live demo of ${title}`}
          >
            <ExternalLink size={14} aria-hidden="true" />
            Live Demo
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link project-card__link--gh"
            aria-label={`GitHub repository for ${title}`}
          >
            <GitBranch size={14} aria-hidden="true" />
            GitHub
          </a>
          <Link to={`/project/${id}`} className="project-card__link project-card__link--details">
            Details →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
