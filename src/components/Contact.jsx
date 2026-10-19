import { motion } from 'framer-motion';
import { Mail, GitBranch, Globe, Send } from 'lucide-react';
import './Contact.css';

// ── Personal contact info — edit here ────────────────────────────────────────
const CONTACT = {
  email:    'taohidhasannasim@gmail.com',
  linkedin: 'https://www.linkedin.com/in/taohid-hasan-nasim/',
  github:   'https://github.com/taohid-hasan',
};

// ── Animation variants ────────────────────────────────────────────────────────
const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
};

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="section contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      aria-labelledby="contact-heading"
    >
      <div className="section__inner">
        <motion.div className="contact__inner" variants={containerVariants}>
          {/* Header */}
          <motion.div className="section__header contact__header" variants={itemVariants}>
            <span className="section__label">
              <Mail size={12} aria-hidden="true" style={{ display: 'inline', marginRight: '6px' }} />
              Contact
            </span>
            <h2 className="section__title" id="contact-heading">
              Let&apos;s <span className="gradient-text">get in touch</span>
            </h2>
            <p className="section__subtitle">
              Have a project in mind, a question, or just want to say hi?
              My inbox is always open — I&apos;ll do my best to get back to you!
            </p>
          </motion.div>

          {/* CTA cards */}
          <motion.div className="contact__cards" variants={containerVariants}>
            {/* Email */}
            <motion.a
              href={`mailto:${CONTACT.email}`}
              className="contact__card glass"
              variants={itemVariants}
              whileHover={{ y: -4, borderColor: 'rgba(168,85,247,0.5)' }}
              aria-label={`Send email to ${CONTACT.email}`}
            >
              <div className="contact__card-icon contact__card-icon--violet">
                <Send size={24} aria-hidden="true" />
              </div>
              <div>
                <p className="contact__card-label">Email</p>
                <p className="contact__card-value">{CONTACT.email}</p>
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__card glass"
              variants={itemVariants}
              whileHover={{ y: -4, borderColor: 'rgba(6,182,212,0.5)' }}
              aria-label="Connect on LinkedIn"
            >
              <div className="contact__card-icon contact__card-icon--cyan">
                <Globe size={24} aria-hidden="true" />
              </div>
              <div>
                <p className="contact__card-label">LinkedIn</p>
                <p className="contact__card-value">taohid-hasan-nasim</p>
              </div>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__card glass"
              variants={itemVariants}
              whileHover={{ y: -4, borderColor: 'rgba(236,72,153,0.5)' }}
              aria-label="View GitHub profile"
            >
              <div className="contact__card-icon contact__card-icon--pink">
                <GitBranch size={24} aria-hidden="true" />
              </div>
              <div>
                <p className="contact__card-label">GitHub</p>
                <p className="contact__card-value">taohid-hasan</p>
              </div>
            </motion.a>
          </motion.div>

          {/* Big email button */}
          <motion.div variants={itemVariants} className="contact__cta">
            <a href={`mailto:${CONTACT.email}`} className="btn btn--primary contact__cta-btn">
              <Mail size={18} aria-hidden="true" />
              Send me an email
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
