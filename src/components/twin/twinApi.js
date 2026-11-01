function apiBase() {
  const base = import.meta.env.VITE_TWIN_API_URL;
  if (typeof base !== 'string' || !base.trim()) {
    return '';
  }
  return base.trim().replace(/\/$/, '');
}

function detailMessage(data, fallback) {
  if (data && typeof data.detail === 'string' && data.detail.trim()) {
    return data.detail.trim();
  }
  return fallback;
}

export async function sendTwinMessage(message, history) {
  const base = apiBase();
  if (!base) {
    throw new Error('Digital twin is not configured yet.');
  }

  let response;
  try {
    response = await fetch(`${base}/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, history }),
    });
  } catch {
    throw new Error('Could not reach the digital twin. Try again.');
  }

  let data = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    throw new Error(detailMessage(data, 'The twin could not reply. Try again.'));
  }

  const reply = data && typeof data.reply === 'string' ? data.reply.trim() : '';
  if (!reply) {
    throw new Error('The twin returned an empty reply. Try rephrasing.');
  }

  return reply;
}
