import { useState } from 'react';

function ShowMore({ items, limit = 3, children }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? items : items.slice(0, limit);
  const canToggle = items.length > limit;

  return (
    <div className="show-more">
      {children(visible)}
      {canToggle ? (
        <button
          type="button"
          className="show-more-toggle"
          onClick={() => setExpanded((open) => !open)}
        >
          {expanded ? 'Show less' : `Show more (${items.length - limit})`}
        </button>
      ) : null}
    </div>
  );
}

export default ShowMore;
