// Tiny Telegram sendPhoto wrapper.
// Uses native fetch (Node 18+) and FormData (Node 18+).

import fs from 'node:fs/promises';

export async function sendPhoto({ token, chatId, filePath, caption }) {
  const file = await fs.readFile(filePath);
  const form = new FormData();
  form.set('chat_id', String(chatId));
  if (caption) form.set('caption', caption);
  form.set('photo', new Blob([file], { type: 'image/png' }), 'screenshot.png');

  const res = await fetch(`https://api.telegram.org/bot${token}/sendPhoto`, {
    method: 'POST',
    body: form
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Telegram ${res.status}: ${text}`);
  }
  return res.json();
}
