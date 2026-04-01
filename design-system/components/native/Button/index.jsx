/**
 * Earthling Native — Button Components
 * Figma: Components > Native App > Buttons/Labels
 */

// ─── Primary Button ───────────────────────────────────────────────────────────
// Variants: color (primary | secondary), state (default | hover | disabled)
export function PrimaryButton({ label, color = 'primary', state = 'default', onClick }) {
  return (
    <button
      className={`btn-primary btn-primary--${color} btn-primary--${state}`}
      onClick={onClick}
      disabled={state === 'disabled'}
    >
      {label}
    </button>
  );
}

// ─── FAB (Floating Action Button) ────────────────────────────────────────────
// Variants: size (small | medium | large)
export function FabButton({ icon, size = 'medium', onClick }) {
  return (
    <button className={`btn-fab btn-fab--${size}`} onClick={onClick} aria-label={icon}>
      <span className="btn-fab__icon">{icon}</span>
    </button>
  );
}

// ─── Header Nav Button ────────────────────────────────────────────────────────
export function HeaderNavButton({ icon, label, onClick }) {
  return (
    <button className="btn-header-nav" onClick={onClick} aria-label={label}>
      <span className="btn-header-nav__icon">{icon}</span>
    </button>
  );
}

// ─── Bottom Nav Menu Item ─────────────────────────────────────────────────────
// Variants: menuItem (Itinerary | Browse | Journal | Profile), state (idle | active)
export function BottomNavItem({ menuItem, state = 'idle', onClick }) {
  return (
    <button
      className={`btn-bottom-nav__item btn-bottom-nav__item--${state}`}
      onClick={onClick}
      aria-label={menuItem}
      aria-current={state === 'active' ? 'page' : undefined}
    >
      <span className="btn-bottom-nav__icon" />
      <span className="btn-bottom-nav__label">{menuItem}</span>
    </button>
  );
}

// ─── Bottom Navigation Bar ────────────────────────────────────────────────────
export function BottomNav({ activeItem = 'Browse', onSelect }) {
  const items = ['Itinerary', 'Browse', 'Journal', 'Profile'];
  return (
    <nav className="btn-bottom-nav">
      {items.map(item => (
        <BottomNavItem
          key={item}
          menuItem={item}
          state={activeItem === item ? 'active' : 'idle'}
          onClick={() => onSelect?.(item)}
        />
      ))}
    </nav>
  );
}

// ─── Time Label ───────────────────────────────────────────────────────────────
// Variants: active (true | false)
export function TimeLabel({ time, active = false }) {
  return (
    <span className={`label-time ${active ? 'label-time--active' : ''}`}>
      {time}
    </span>
  );
}
