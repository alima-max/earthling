/**
 * Earthling Native — System Components
 * Figma: Components > Native App > System
 */

// ─── Home Indicator ───────────────────────────────────────────────────────────
export function HomeIndicator() {
  return <div className="system-home-indicator" aria-hidden="true" />;
}

// ─── iOS Status Bar ───────────────────────────────────────────────────────────
// Variants: property1 (default | variant2)
export function StatusBar({ time = '9:41', variant = 'default' }) {
  return (
    <div className={`system-status-bar system-status-bar--${variant}`} aria-hidden="true">
      <span className="system-status-bar__time">{time}</span>
      <div className="system-status-bar__indicators">
        <span className="system-status-bar__signal" />
        <span className="system-status-bar__wifi" />
        <span className="system-status-bar__battery" />
      </div>
    </div>
  );
}
