'use client';

import { useEffect, useRef, useState } from 'react';
import { leads } from '@/lib/leads';

type Level = 'info' | 'ok' | 'warn' | 'err';
type Log = { ts: string; level: Level; msg: string };
type Status = 'pending' | 'running' | 'ok' | 'failed';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const levelColor: Record<Level, string> = {
  info: 'text-zinc-400',
  ok: 'text-emerald-400',
  warn: 'text-amber-400',
  err: 'text-rose-400'
};

export default function Monitor() {
  const [logs, setLogs] = useState<Log[]>([]);
  const [statuses, setStatuses] = useState<Record<string, Status>>({});
  const [running, setRunning] = useState(false);
  const runId = useRef(0);
  const startRef = useRef(0);
  const logBoxRef = useRef<HTMLDivElement | null>(null);

  function stamp() {
    const s = (performance.now() - startRef.current) / 1000;
    return `+${s.toFixed(1)}s`;
  }
  const addLog = (level: Level, msg: string) =>
    setLogs((p) => [...p, { ts: stamp(), level, msg }]);

  async function run() {
    const myId = ++runId.current;
    setLogs([]);
    setStatuses({});
    setRunning(true);
    startRef.current = performance.now();

    addLog('info', `Loaded ${leads.length} leads from leads.csv`);
    addLog('info', 'Launching headless Chromium (puppeteer-core)…');
    await sleep(550);
    if (runId.current !== myId) return;
    addLog('ok', 'Browser ready · target form: https://example.com/contact');
    await sleep(350);

    for (const lead of leads) {
      if (runId.current !== myId) return;
      setStatuses((p) => ({ ...p, [lead.email]: 'running' }));
      addLog('info', `→ ${lead.name} <${lead.email}> · ${lead.company}`);
      await sleep(300);
      if (runId.current !== myId) return;

      if (lead.outcome === 'ok') {
        addLog('ok', `✓ submitted (HTTP 200) · ${lead.name}`);
        setStatuses((p) => ({ ...p, [lead.email]: 'ok' }));
      } else if (lead.outcome === 'retry') {
        addLog('warn', `⚠ ${lead.reason} · ${lead.name}`);
        await sleep(450);
        if (runId.current !== myId) return;
        addLog('ok', `✓ submitted on retry (HTTP 200) · ${lead.name}`);
        setStatuses((p) => ({ ...p, [lead.email]: 'ok' }));
      } else {
        addLog('err', `✗ ${lead.reason} · ${lead.name}`);
        setStatuses((p) => ({ ...p, [lead.email]: 'failed' }));
      }
      await sleep(170);
    }

    if (runId.current !== myId) return;
    const ok = leads.filter((l) => l.outcome !== 'fail').length;
    const fail = leads.length - ok;
    addLog('info', `Run complete · ${ok} submitted, ${fail} flagged for review · closing browser`);
    setRunning(false);
  }

  useEffect(() => {
    run();
    return () => {
      runId.current++;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (logBoxRef.current) logBoxRef.current.scrollTop = logBoxRef.current.scrollHeight;
  }, [logs]);

  const values = Object.values(statuses);
  const processed = values.filter((s) => s === 'ok' || s === 'failed').length;
  const success = values.filter((s) => s === 'ok').length;
  const failed = values.filter((s) => s === 'failed').length;
  const pct = Math.round((processed / leads.length) * 100);

  return (
    <div className="min-h-screen">
      <header className="border-b border-zinc-800 bg-zinc-900/60">
        <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="rounded-md bg-emerald-500/15 px-2 py-0.5 font-mono text-xs font-semibold text-emerald-400">
              AUTOMATION · DEMO
            </span>
            <h1 className="text-lg font-bold text-white">Form-Fill Bot — Run Monitor</h1>
          </div>
          <p className="mt-2 max-w-2xl text-sm text-zinc-400">
            A simulated run of a browser-automation bot: read leads from a CSV, submit each to a target form, with
            retries, rate-limit back-off, and a live log. This is a visual stand-in —
            <a
              className="text-emerald-400 underline"
              href="https://github.com/freelancereplylab-dot/freelance-portfolio-demos/tree/main/form-fill-csv"
              target="_blank"
              rel="noopener"
            >
              {' '}see the real Puppeteer source ↗
            </a>
            .
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        {/* Controls + stats */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => !running && run()}
            disabled={running}
            className="rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {running ? 'Running…' : '▶ Run bot again'}
          </button>
          <div className="flex gap-2 font-mono text-xs">
            <Pill label="processed" value={`${processed}/${leads.length}`} tone="zinc" />
            <Pill label="ok" value={String(success)} tone="emerald" />
            <Pill label="flagged" value={String(failed)} tone="rose" />
          </div>
        </div>

        {/* Progress */}
        <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-zinc-800">
          <div
            className="h-full bg-emerald-500 transition-all duration-300"
            style={{ width: `${pct}%` }}
          />
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {/* Log console */}
          <div className="rounded-xl border border-zinc-800 bg-black/60">
            <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-2">
              <span className="h-3 w-3 rounded-full bg-rose-500/70" />
              <span className="h-3 w-3 rounded-full bg-amber-500/70" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
              <span className="ml-2 font-mono text-xs text-zinc-500">bot.log</span>
            </div>
            <div ref={logBoxRef} className="h-[420px] overflow-y-auto p-4 font-mono text-xs leading-relaxed">
              {logs.map((l, i) => (
                <div key={i} className="flex gap-3">
                  <span className="shrink-0 text-zinc-600">{l.ts}</span>
                  <span className={levelColor[l.level]}>{l.msg}</span>
                </div>
              ))}
              {running && <span className="inline-block animate-pulse text-emerald-400">▌</span>}
            </div>
          </div>

          {/* Results table */}
          <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40">
            <div className="border-b border-zinc-800 px-4 py-2 font-mono text-xs text-zinc-500">
              results · {leads.length} rows
            </div>
            <div className="h-[420px] overflow-y-auto">
              <table className="w-full text-left text-sm">
                <tbody>
                  {leads.map((lead) => {
                    const st = statuses[lead.email] ?? 'pending';
                    return (
                      <tr key={lead.email} className="border-b border-zinc-800/60 last:border-0">
                        <td className="px-4 py-2.5">
                          <div className="font-medium text-zinc-100">{lead.name}</div>
                          <div className="font-mono text-xs text-zinc-500">{lead.email}</div>
                        </td>
                        <td className="px-4 py-2.5 text-right">
                          <StatusBadge status={st} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <footer className="mt-8 text-center text-xs text-zinc-500">
          Built by Duc Dien · web developer &amp; automation engineer ·{' '}
          <a className="text-emerald-400 underline" href="https://portfolio-site-delta-pink.vercel.app" target="_blank" rel="noopener">
            portfolio
          </a>{' '}
          ·{' '}
          <a className="text-emerald-400 underline" href="https://www.fiverr.com/freelancereplyl" target="_blank" rel="noopener">
            hire on Fiverr
          </a>
        </footer>
      </main>
    </div>
  );
}

function Pill({ label, value, tone }: { label: string; value: string; tone: 'zinc' | 'emerald' | 'rose' }) {
  const tones = {
    zinc: 'border-zinc-700 text-zinc-300',
    emerald: 'border-emerald-700 text-emerald-400',
    rose: 'border-rose-800 text-rose-400'
  } as const;
  return (
    <span className={`rounded-md border px-2 py-1 ${tones[tone]}`}>
      {label} <b>{value}</b>
    </span>
  );
}

function StatusBadge({ status }: { status: Status }) {
  const map = {
    pending: ['bg-zinc-800 text-zinc-500', 'queued'],
    running: ['bg-amber-500/15 text-amber-400', 'submitting…'],
    ok: ['bg-emerald-500/15 text-emerald-400', '✓ submitted'],
    failed: ['bg-rose-500/15 text-rose-400', '✗ flagged']
  } as const;
  const [cls, label] = map[status];
  return <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${cls}`}>{label}</span>;
}
