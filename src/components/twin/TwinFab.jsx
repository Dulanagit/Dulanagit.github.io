import { site } from '../../data/site';

function TwinFab({ open, onToggle }) {
  return (
    <button
      type="button"
      className="twin-fab"
      aria-label={open ? 'Close chat with Dulana' : 'Open chat with Dulana'}
      aria-expanded={open}
      onClick={onToggle}
    >
      <img src={site.heroImage} alt="" />
    </button>
  );
}

export default TwinFab;
