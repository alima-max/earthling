/**
 * Earthling Web App — Button Component
 * Figma: Components > Web App > Web App/Button
 * Variants: color (black | lime | off-white), state (default | hover | disabled)
 */

export function Button({ label, color = 'black', state = 'default', onClick, type = 'button' }) {
  return (
    <button
      type={type}
      className={`btn btn--${color} btn--${state}`}
      onClick={onClick}
      disabled={state === 'disabled'}
    >
      {label}
    </button>
  );
}

export default Button;
