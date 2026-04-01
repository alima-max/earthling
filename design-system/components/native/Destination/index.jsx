/**
 * Earthling Native — Destination Components
 * Figma: ▣ Screens & Assets > Mobile / Earthling / AI Assistant / Suggestions
 *
 * DestinationRow   — single horizontal list item (thumb + info + tag + chevron)
 * DestinationList  — scrollable list with section label and scroll-fade overlay
 */

// ─── DestinationRow ───────────────────────────────────────────────────────────
// Props:
//   name       string  — destination name e.g. "Kyoto"
//   location   string  — country/region e.g. "Japan"
//   tag        string  — category label e.g. "CULTURE"
//   image      string  — thumbnail image URL (optional; falls back to color swatch)
//   color      string  — CSS color for the thumbnail placeholder (optional)
//   divider    bool    — show bottom divider (default true)
//   onPress    fn      — tap handler
export function DestinationRow({
  name,
  location,
  tag,
  image,
  color,
  divider = true,
  onPress,
}) {
  return (
    <div
      className={`destination-row${divider ? ' destination-row--divider' : ''}`}
      onClick={onPress}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onPress?.()}
      aria-label={`${name}, ${location}`}
    >
      {/* Thumbnail */}
      <div
        className="destination-row__thumb"
        style={color && !image ? { background: color } : undefined}
      >
        {image && <img src={image} alt={name} className="destination-row__thumb-img" />}
        <span className="destination-row__accent-dot" aria-hidden="true" />
      </div>

      {/* Info */}
      <div className="destination-row__info">
        <span className="destination-row__name">{name}</span>
        <span className="destination-row__location">{location}</span>
      </div>

      {/* Tag pill */}
      {tag && (
        <span className="destination-row__tag" aria-label={`Category: ${tag}`}>
          {tag}
        </span>
      )}

      {/* Chevron */}
      <svg
        className="destination-row__chevron"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <path d="M4 4L12 8L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

// ─── DestinationList ──────────────────────────────────────────────────────────
// Props:
//   destinations  array   — array of destination objects (same shape as DestinationRow props)
//   sectionLabel  string  — overrides default "SUGGESTED FOR YOU" label (pass null to hide)
//   subtitle      string  — AI subtitle text below the main heading
//   onSelect      fn      — called with the destination object when a row is tapped
export function DestinationList({
  destinations = [],
  sectionLabel = 'SUGGESTED FOR YOU',
  onSelect,
}) {
  return (
    <div className="destination-list">
      {sectionLabel && (
        <p className="destination-list__section-label">{sectionLabel}</p>
      )}

      <div className="destination-list__scroll">
        {destinations.map((dest, i) => (
          <DestinationRow
            key={dest.name}
            {...dest}
            divider={i < destinations.length - 1}
            onPress={() => onSelect?.(dest)}
          />
        ))}
      </div>

      {/* Scroll-fade gradient overlay */}
      <div className="destination-list__fade" aria-hidden="true" />
    </div>
  );
}
