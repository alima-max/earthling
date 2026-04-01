/**
 * Earthling Web App — Navigation Component
 * Figma: Components > Web App > Web App/Nav
 * Variants: size (desktop), type (default | alt)
 */

export function Nav({ type = 'default', links = [], ctaLabel, onCtaClick, logoSrc }) {
  return (
    <header className={`nav nav--${type}`}>
      <div className="nav__inner">
        <a className="nav__logo" href="/" aria-label="Earthling home">
          {logoSrc ? <img src={logoSrc} alt="Earthling" /> : <span className="nav__wordmark">Earthling</span>}
        </a>

        <nav className="nav__links" aria-label="Main navigation">
          {links.map(link => (
            <a key={link.href} href={link.href} className="nav__link">
              {link.label}
            </a>
          ))}
        </nav>

        {ctaLabel && (
          <button className="nav__cta" onClick={onCtaClick}>
            {ctaLabel}
          </button>
        )}
      </div>
    </header>
  );
}

export default Nav;
