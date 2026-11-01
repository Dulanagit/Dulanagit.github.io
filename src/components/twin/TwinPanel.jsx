import { useEffect, useId, useRef } from 'react';
import { site } from '../../data/site';

function TwinPanel({ messages, draft, loading, error, onDraftChange, onSend, onClose }) {
  const titleId = useId();
  const listRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const list = listRef.current;
    if (list) {
      list.scrollTop = list.scrollHeight;
    }
  }, [messages, loading, error]);

  function handleSubmit(event) {
    event.preventDefault();
    onSend();
  }

  return (
    <section className="twin-panel" role="dialog" aria-modal="false" aria-labelledby={titleId}>
      <header className="twin-panel-header">
        <img className="twin-panel-avatar" src={site.heroImage} alt="" />
        <div>
          <h2 id={titleId}>{site.name}</h2>
          <p>Digital twin</p>
        </div>
        <button type="button" className="twin-close" onClick={onClose} aria-label="Close chat">
          Close
        </button>
      </header>

      <div className="twin-messages" ref={listRef}>
        {messages.length === 0 && !loading ? (
          <p className="twin-empty">Ask about my work, research, or background.</p>
        ) : null}
        {messages.map((item) => (
          <p key={item.id} className={`twin-bubble twin-bubble-${item.role}`}>
            {item.content}
          </p>
        ))}
        {loading ? <p className="twin-typing">Thinking…</p> : null}
        {error ? (
          <p className="twin-error" role="alert">
            {error}
          </p>
        ) : null}
      </div>

      <form className="twin-composer" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          value={draft}
          placeholder="Ask me something"
          aria-label="Message"
          disabled={loading}
          onChange={(event) => onDraftChange(event.target.value)}
        />
        <button type="submit" className="twin-send" disabled={loading || !draft.trim()}>
          Send
        </button>
      </form>
    </section>
  );
}

export default TwinPanel;
