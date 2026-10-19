import { Link } from 'react-router-dom';
import { GitBranch, Globe, Mail, Code2 } from 'lucide-react';
import './Footer.css';

const SOCIAL_LINKS = [
  {
    href:  'https://github.com/taohid-hasan',
    icon:  <GitBranch size={20} aria-hidden="true" />,
    label: 'GitHub',
  },
  {
    href:  'https://www.linkedin.com/in/taohid-hasan-nasim/',
    icon:  <Globe size={20} aria-hidden="true" />,
    label: 'LinkedIn',
  },
  {
    href:  'mailto:taohidhasannasim@gmail.com',
    icon:  <Mail size={20} aria-hidden="true" />,
    label: 'Email',
  },
];

// Computed once at module-load time to avoid impure-function lint warning
const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        {/* Logo */}
        <Link to="/" className="footer__logo" aria-label="Back to top">
          <Code2 size={18} aria-hidden="true" />
          <span>Taohid Hasan Nasim</span>
        </Link>

        {/* Copyright */}
        <p className="footer__copy">
          © {CURRENT_YEAR} Taohid Hasan Nasim. Crafted with ♥ using React &amp; Framer Motion.
        </p>

        {/* Social links */}
        <div className="footer__socials">
          {SOCIAL_LINKS.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="footer__social-link"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
