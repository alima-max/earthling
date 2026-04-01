/**
 * Earthling Web App — Tag Component
 * Figma: Components > Web App > Web App/Tag
 */

export function Tag({ label, onRemove }) {
  return (
    <span className="tag">
      {label}
      {onRemove && (
        <button className="tag__remove" onClick={onRemove} aria-label={`Remove ${label}`}>✕</button>
      )}
    </span>
  );
}

export default Tag;
