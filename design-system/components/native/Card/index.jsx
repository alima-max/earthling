/**
 * Earthling Native — Card Components
 * Figma: Components > Native App > Cards
 */

// ─── Activity Card ────────────────────────────────────────────────────────────
export function ActivityCard({ title, subtitle, image, tags, onPress }) {
  return (
    <div className="card-activity" onClick={onPress}>
      {image && <img className="card-activity__image" src={image} alt={title} />}
      <div className="card-activity__body">
        {tags?.map(tag => <span key={tag} className="card-activity__tag">{tag}</span>)}
        <h3 className="card-activity__title">{title}</h3>
        {subtitle && <p className="card-activity__subtitle">{subtitle}</p>}
      </div>
    </div>
  );
}

// ─── Activity Tile ────────────────────────────────────────────────────────────
// Variants: active (true | false)
export function ActivityTile({ title, time, active = false, onPress }) {
  return (
    <div className={`card-activity-tile ${active ? 'card-activity-tile--active' : ''}`} onClick={onPress}>
      <span className="card-activity-tile__time">{time}</span>
      <span className="card-activity-tile__title">{title}</span>
    </div>
  );
}

// ─── Destination Card ─────────────────────────────────────────────────────────
// Variants: size (large | small)
export function DestinationCard({ destination, country, image, size = 'large', onPress }) {
  return (
    <div className={`card-destination card-destination--${size}`} onClick={onPress}>
      <img className="card-destination__image" src={image} alt={destination} />
      <div className="card-destination__label">
        <h3 className="card-destination__name">{destination}</h3>
        {country && <span className="card-destination__country">{country}</span>}
      </div>
    </div>
  );
}

// ─── Stay Card ────────────────────────────────────────────────────────────────
// Variants: type (default)
export function StayCard({ name, dates, price, image, rating, onPress }) {
  return (
    <div className="card-stay" onClick={onPress}>
      <img className="card-stay__image" src={image} alt={name} />
      <div className="card-stay__body">
        <h3 className="card-stay__name">{name}</h3>
        <p className="card-stay__dates">{dates}</p>
        <div className="card-stay__footer">
          {rating && <span className="card-stay__rating">{rating}</span>}
          <span className="card-stay__price">{price}</span>
        </div>
      </div>
    </div>
  );
}

// ─── Flight Card ──────────────────────────────────────────────────────────────
// Variants: type (default | alternate)
export function FlightCard({ airline, departure, arrival, duration, price, type = 'default', onPress }) {
  return (
    <div className={`card-flight card-flight--${type}`} onClick={onPress}>
      <div className="card-flight__airline">{airline}</div>
      <div className="card-flight__route">
        <span className="card-flight__dep">{departure}</span>
        <span className="card-flight__duration">{duration}</span>
        <span className="card-flight__arr">{arrival}</span>
      </div>
      <div className="card-flight__price">{price}</div>
    </div>
  );
}
