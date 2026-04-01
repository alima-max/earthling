/**
 * Earthling Web App — Input Component
 * Figma: Components > Web App > Web App/Input
 * Variants: color (off-white | lime)
 */

export function Input({ label, placeholder, value, onChange, color = 'off-white', type = 'text', name }) {
  return (
    <div className={`input input--${color}`}>
      {label && <label className="input__label" htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        className="input__field"
        placeholder={placeholder}
        value={value}
        onChange={e => onChange?.(e.target.value)}
      />
    </div>
  );
}

export default Input;
