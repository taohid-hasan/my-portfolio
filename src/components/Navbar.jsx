import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import './Navbar.css';

// ── Nav links — update hrefs if you rename section IDs ──────────────────────
const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'      },
  { label: 'Projects',   href: '#projects'    },
  { label: 'Experience', href: '#experience'  },
  { label: 'Education',  href: '#education'   },
  { label: 'Contact',    href: '#contact'     },
];

/**
 * Smooth-scrolls to a section on the Home page.
 * If we're on another page, navigates to "/" first, then scrolls.
 */
function useScrollToSection() {
  const navigate = useNavigate();
  const location = useLocation();

  return useCallback(
    (hash) => {
      const scrollNow = () => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };

      if (location.pathname === '/') {
        scrollNow();
      } else {
        navigate('/', { state: { scrollTo: hash } });
      }
    },
    [location.pathname, navigate],
  );
}

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('');
  const scrollTo                = useScrollToSection();
  const location                = useLocation();

  /* Detect scroll to add glass background */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Intersection observer to highlight active section */
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(`#${id}`); },
        { threshold: 0.3 },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, [location.pathname]);

  /* Close mobile menu on route change */
  useEffect(() => {
    // oxlint-disable-next-line react/set-state-in-effect -- intentional: sync UI to route
    setOpen(false);
  }, [location.pathname]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    scrollTo(href);
  };

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
      <nav className="navbar__inner" aria-label="Main navigation">
        {/* Logo */}
        <Link to="/" className="navbar__logo" aria-label="Taohid Hasan Nasim — home">
          <Code2 size={22} aria-hidden="true" />
          <span>Taohid</span>
        </Link>

        {/* Desktop links */}
        <ul className="navbar__links" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`navbar__link${active === href ? ' navbar__link--active' : ''}`}
                onClick={(e) => handleNavClick(e, href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume CTA */}
        <Link to="/resume" className="btn btn--outline navbar__resume">
          Resume
        </Link>

        {/* Mobile hamburger */}
        <button
          className="navbar__hamburger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="navbar__drawer" aria-label="Mobile navigation">
          <ul role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`navbar__drawer-link${active === href ? ' navbar__drawer-link--active' : ''}`}
                  onClick={(e) => handleNavClick(e, href)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <Link to="/resume" className="btn btn--primary navbar__drawer-resume" onClick={() => setOpen(false)}>
                Resume
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
