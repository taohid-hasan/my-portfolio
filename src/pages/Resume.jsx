import { motion } from 'framer-motion';
import { Download, ExternalLink, FileText } from 'lucide-react';
import resumePdf from '../assets/Taohid_Hasan_Nasim_Resume.pdf';
import './Resume.css';

const RESUME_FILENAME = 'Taohid_Hasan_Nasim_Resume.pdf';

/**
 * Resume page — embeds the real PDF and provides open/download fallbacks
 * for browsers (notably mobile) that cannot render PDFs inside an iframe.
 */
export default function Resume() {
  return (
    <motion.main
      className="resume-page"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
      aria-labelledby="resume-heading"
    >
      <div className="resume-page__inner">
        {/* Header + actions */}
        <header className="resume-page__header">
          <span className="section__label">Resume</span>
          <h1 className="resume-page__title" id="resume-heading">
            My <span className="gradient-text">Resume</span>
          </h1>
          <p className="resume-page__subtitle">
            View the PDF below, or open it in a new tab / download a copy.
          </p>

          <div className="resume-page__actions">
            <a
              href={resumePdf}
              download={RESUME_FILENAME}
              className="btn btn--primary"
              aria-label="Download Taohid Hasan Nasim's resume as a PDF"
            >
              <Download size={18} aria-hidden="true" />
              Download PDF
            </a>
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
              aria-label="Open Taohid Hasan Nasim's resume PDF in a new tab"
            >
              <ExternalLink size={18} aria-hidden="true" />
              Open in New Tab
            </a>
          </div>
        </header>

        {/* Embedded PDF */}
        <div className="resume-page__viewer">
          <iframe
            src={resumePdf}
            title="Taohid Hasan Nasim's resume PDF"
            className="resume-page__frame"
            loading="lazy"
          />
        </div>

        {/* Fallback for browsers that can't render PDFs in an iframe */}
        <p className="resume-page__fallback">
          <FileText size={16} aria-hidden="true" />
          <span>
            Can&apos;t see the PDF?{' '}
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Taohid Hasan Nasim's resume PDF in a new tab"
            >
              Open it in a new tab
            </a>{' '}
            or{' '}
            <a
              href={resumePdf}
              download={RESUME_FILENAME}
              aria-label="Download Taohid Hasan Nasim's resume as a PDF"
            >
              download it
            </a>
            .
          </span>
        </p>
      </div>
    </motion.main>
  );
}
