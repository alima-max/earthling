/**
 * Earthling Native — Navigation Components
 * Figma: Components > Native App > Navigation
 */

// ─── Toggle ───────────────────────────────────────────────────────────────────
export function Toggle({ options = [], activeOption, onChange }) {
  return (
    <div className="nav-toggle" role="tablist">
      {options.map(option => (
        <button
          key={option}
          role="tab"
          aria-selected={activeOption === option}
          className={`nav-toggle__option ${activeOption === option ? 'nav-toggle__option--active' : ''}`}
          onClick={() => onChange?.(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

// ─── Tab ──────────────────────────────────────────────────────────────────────
// Variants: active (true | false)
export function Tab({ label, active = false, onClick }) {
  return (
    <button
      role="tab"
      aria-selected={active}
      className={`nav-tab ${active ? 'nav-tab--active' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

// ─── Activity Bottom Sheet ────────────────────────────────────────────────────
export function ActivityBottomSheet({ activities = [], onClose, children }) {
  return (
    <div className="nav-bottom-sheet" role="dialog" aria-modal="true">
      <div className="nav-bottom-sheet__handle" />
      <div className="nav-bottom-sheet__content">
        {children}
      </div>
    </div>
  );
}
