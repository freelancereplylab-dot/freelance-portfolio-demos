export type Outcome = 'ok' | 'retry' | 'fail';

export type Lead = {
  name: string;
  email: string;
  company: string;
  outcome: Outcome; // scripted so the demo run is deterministic
  reason?: string; // for fails / retries
};

// Sample CSV of leads the bot processes. Outcomes are scripted to show
// the happy path plus realistic retry / failure handling.
export const leads: Lead[] = [
  { name: 'Maya Chen', email: 'maya@brightloom.co', company: 'Brightloom', outcome: 'ok' },
  { name: 'Tom Alvarez', email: 'tom.alvarez@nordvault.io', company: 'Nordvault', outcome: 'ok' },
  { name: 'Priya Nair', email: 'priya@kettleworks.com', company: 'Kettleworks', outcome: 'retry', reason: 'timeout on submit (1/2)' },
  { name: 'Lukas Weber', email: 'lukas@feldspar.de', company: 'Feldspar', outcome: 'ok' },
  { name: 'Sara Okoye', email: 'sara@driftcoffee.vn', company: 'Drift Coffee', outcome: 'ok' },
  { name: 'Jin Park', email: 'jin.park@hanmoon.kr', company: 'Hanmoon', outcome: 'ok' },
  { name: 'Elena Rossi', email: 'elena@bottega-nove', company: 'Bottega Nove', outcome: 'fail', reason: 'invalid email format — skipped' },
  { name: 'Owen Pratt', email: 'owen@latitude.studio', company: 'Latitude', outcome: 'ok' },
  { name: 'Aisha Bello', email: 'aisha@verdant.africa', company: 'Verdant', outcome: 'ok' },
  { name: 'Marco Diaz', email: 'marco@surfline.mx', company: 'Surfline MX', outcome: 'retry', reason: 'rate-limited, backing off 2s (1/2)' },
  { name: 'Hana Sato', email: 'hana@aozora.jp', company: 'Aozora', outcome: 'ok' },
  { name: 'Ben Idris', email: 'ben@cobaltlab.co', company: 'Cobalt Lab', outcome: 'ok' },
  { name: 'Clara Voss', email: 'clara@northbound.se', company: 'Northbound', outcome: 'ok' },
  { name: 'Raj Malhotra', email: 'raj@spicetrail.in', company: 'Spice Trail', outcome: 'ok' },
  { name: 'Nora Lind', email: 'nora@fjordhaus.no', company: 'Fjordhaus', outcome: 'ok' },
  { name: 'Diego Reyes', email: 'diego@altamar.cl', company: 'Altamar', outcome: 'fail', reason: 'form CAPTCHA detected — flagged for manual review' },
  { name: 'Yuki Tanaka', email: 'yuki@midori.jp', company: 'Midori', outcome: 'ok' },
  { name: 'Grace Owusu', email: 'grace@kente.gh', company: 'Kente', outcome: 'ok' }
];
