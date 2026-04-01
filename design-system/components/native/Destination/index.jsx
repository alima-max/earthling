/**
 * Earthling Native — Destination Components
 * Figma: ▣ Screens & Assets > Mobile / Earthling / AI Assistant / Suggestions
 *
 * DestinationRow   — single horizontal list item (thumb + title + reason)
 * DestinationList  — scrollable list with section label and scroll-fade overlay
 */

// ─── DestinationRow ───────────────────────────────────────────────────────────
// Props:
//   title      string  — destination name + country e.g. "Kyoto, Japan"
//   reason     string  — AI-generated reason e.g. "Based on your search"
//   image      string  — thumbnail image URL
//   divider    bool    — show bottom divider (default true)
//   onPress    fn      — tap handler
export function DestinationRow({
  title,
  reason,
  image,
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
      aria-label={title}
    >
      {/* Thumbnail */}
      <div className="destination-row__thumb">
        {image && <img src={image} alt={title} className="destination-row__thumb-img" />}
        <span className="destination-row__accent-dot" aria-hidden="true" />
      </div>

      {/* Info */}
      <div className="destination-row__info">
        <span className="destination-row__title">{title}</span>
        <span className="destination-row__reason">{reason}</span>
      </div>
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
  sectionLabel = 'Suggested destinations',
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
