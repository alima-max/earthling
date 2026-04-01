/**
 * Earthling Web App — Footer Component
 * Figma: Components > Web App > Web App/Footer
 * Variants: size (desktop | tablet | mobile)
 */

export function Footer({ size = 'desktop', links = [], socialLinks = [], logoSrc }) {
  return (
    <footer className={`footer footer--${size}`}>
      <div className="footer__inner">
        <div className="footer__brand">
          {logoSrc ? <img src={logoSrc} alt="Earthling" /> : <span className="footer__wordmark">Earthling</span>}
        </div>

        <nav className="footer__links" aria-label="Footer navigation">
          {links.map(link => (
            <a key={link.href} href={link.href} className="footer__link">
              {link.label}
            </a>
          ))}
        </nav>

        {socialLinks.length > 0 && (
          <div className="footer__social">
            {socialLinks.map(link => (
              <a key={link.href} href={link.href} className="footer__social-link" aria-label={link.label} target="_blank" rel="noopener noreferrer">
                {link.icon}
              </a>
            ))}
          </div>
        )}

        <p className="footer__legal">© {new Date().getFullYear()} Earthling. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
