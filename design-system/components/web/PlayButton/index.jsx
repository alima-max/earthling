/**
 * Earthling Web App — Play Button Component
 * Figma: Components > Web App > Web App/Play Button
 * Variants: size (desktop | tablet | mobile)
 */

const sizeMap = { desktop: 180, tablet: 120, mobile: 80 };

export function PlayButton({ size = 'desktop', onClick, label = 'Play' }) {
  const dim = sizeMap[size];
  return (
    <button
      className={`btn-play btn-play--${size}`}
      onClick={onClick}
      aria-label={label}
      style={{ width: dim, height: dim }}
    >
      <span className="btn-play__icon" aria-hidden="true">▶</span>
    </button>
  );
}

export default PlayButton;
