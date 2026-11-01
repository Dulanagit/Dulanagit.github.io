import { useCallback, useState } from 'react';
import DigitalTwin from './DigitalTwin';

function DigitalTwinSlot() {
  const [open, setOpen] = useState(false);
  const onOpenChange = useCallback((next) => {
    setOpen(next);
  }, []);

  return (
    <>
      <div className="twin-slot" data-twin-slot>
        <p className="section-kicker">Digital twin</p>
        <h3>Ask about me</h3>
        <p className="card-summary">
          Chat with a digital twin that can answer questions about my work, research, and background.
        </p>
        <button type="button" className="button-primary twin-slot-cta" onClick={() => setOpen(true)}>
          Start a chat
        </button>
      </div>
      <DigitalTwin open={open} onOpenChange={onOpenChange} />
    </>
  );
}

export default DigitalTwinSlot;
