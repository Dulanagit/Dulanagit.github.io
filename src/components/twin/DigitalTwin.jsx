import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import TwinFab from './TwinFab';
import TwinPanel from './TwinPanel';
import { sendTwinMessage } from './twinApi';

let messageSeq = 0;

function nextId() {
  messageSeq += 1;
  return `twin-${messageSeq}`;
}

function DigitalTwin({ open, onOpenChange }) {
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        onOpenChange(false);
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onOpenChange]);

  async function handleSend() {
    const text = draft.trim();
    if (!text || loading) {
      return;
    }

    const history = messages
      .filter((item) => item.role === 'user' || item.role === 'assistant')
      .map((item) => ({ role: item.role, content: item.content }));
    const userId = nextId();

    setDraft('');
    setError('');
    setLoading(true);
    setMessages((current) => [...current, { id: userId, role: 'user', content: text }]);

    try {
      const reply = await sendTwinMessage(text, history);
      setMessages((current) => [...current, { id: nextId(), role: 'assistant', content: reply }]);
    } catch (err) {
      setMessages((current) => current.filter((item) => item.id !== userId));
      setDraft(text);
      setError(err instanceof Error ? err.message : 'The twin could not reply. Try again.');
    } finally {
      setLoading(false);
    }
  }

  return createPortal(
    <>
      <TwinFab open={open} onToggle={() => onOpenChange(!open)} />
      {open ? (
        <TwinPanel
          messages={messages}
          draft={draft}
          loading={loading}
          error={error}
          onDraftChange={setDraft}
          onSend={handleSend}
          onClose={() => onOpenChange(false)}
        />
      ) : null}
    </>,
    document.body,
  );
}

export default DigitalTwin;
