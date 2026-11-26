import fs from 'node:fs';

const form = new FormData();
form.append('image_file', new Blob([fs.readFileSync('input.jpg')]), 'input.jpg');
form.append('size', 'auto');

const res = await fetch('https://api.backgroundremoverapi.com/v1.0/removebg', {
  method: 'POST',
  headers: { 'X-Api-Key': process.env.BG_REMOVER_API_KEY },
  body: form,
});

if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`);
fs.writeFileSync('output.png', Buffer.from(await res.arrayBuffer()));
