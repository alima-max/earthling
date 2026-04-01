/**
 * Earthling Web App — Radio Component
 * Figma: Components > Web App > Web App/Radio
 * Variants: property1 (unselected | selected)
 */

export function Radio({ label, value, checked = false, onChange, name }) {
  return (
    <label className={`radio ${checked ? 'radio--selected' : 'radio--unselected'}`}>
      <input
        type="radio"
        className="radio__input"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange?.(value)}
      />
      <span className="radio__indicator" />
      <span className="radio__label">{label}</span>
    </label>
  );
}

export function RadioGroup({ options = [], value, onChange, name }) {
  return (
    <div className="radio-group" role="radiogroup">
      {options.map(opt => (
        <Radio
          key={opt.value}
          label={opt.label}
          value={opt.value}
          checked={value === opt.value}
          onChange={onChange}
          name={name}
        />
      ))}
    </div>
  );
}

export default Radio;
