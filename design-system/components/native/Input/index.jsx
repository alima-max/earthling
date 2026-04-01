/**
 * Earthling Native — Input / Interaction Components
 * Figma: Components > Native App > Interactions/Inputs
 */

// ─── Search Input ─────────────────────────────────────────────────────────────
export function SearchInput({ placeholder = 'Search...', value, onChange }) {
  return (
    <div className="input-search">
      <span className="input-search__icon" aria-hidden="true" />
      <input
        type="search"
        className="input-search__field"
        placeholder={placeholder}
        value={value}
        onChange={e => onChange?.(e.target.value)}
      />
    </div>
  );
}

// ─── Chat Bubble ──────────────────────────────────────────────────────────────
export function ChatBubble({ message, sender = 'other', timestamp }) {
  return (
    <div className={`chat-bubble chat-bubble--${sender}`}>
      <p className="chat-bubble__text">{message}</p>
      {timestamp && <span className="chat-bubble__time">{timestamp}</span>}
    </div>
  );
}

// ─── Notification ────────────────────────────────────────────────────────────
export function Notification({ title, body, icon, onDismiss }) {
  return (
    <div className="interaction-notification" role="alert">
      {icon && <span className="interaction-notification__icon">{icon}</span>}
      <div className="interaction-notification__content">
        <strong className="interaction-notification__title">{title}</strong>
        <p className="interaction-notification__body">{body}</p>
      </div>
      {onDismiss && (
        <button className="interaction-notification__dismiss" onClick={onDismiss} aria-label="Dismiss">✕</button>
      )}
    </div>
  );
}

// ─── Date Picker ─────────────────────────────────────────────────────────────
export function DatePicker({ value, onChange, label }) {
  return (
    <div className="input-date-picker">
      {label && <label className="input-date-picker__label">{label}</label>}
      <input
        type="date"
        className="input-date-picker__field"
        value={value}
        onChange={e => onChange?.(e.target.value)}
      />
    </div>
  );
}

// ─── Day Progress ────────────────────────────────────────────────────────────
export function DayProgress({ progress = 0 }) {
  return (
    <div className="day-progress" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
      <div className="day-progress__bar" style={{ width: `${progress}%` }} />
    </div>
  );
}

// ─── Bottom Sheet Control ────────────────────────────────────────────────────
export function BottomSheetControl() {
  return <div className="bottom-sheet-handle" aria-hidden="true" />;
}
