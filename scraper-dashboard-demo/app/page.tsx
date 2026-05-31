'use client';

import { useMemo, useState } from 'react';
import { products, type Product } from '@/lib/products';

type SortKey = keyof Pick<Product, 'name' | 'category' | 'brand' | 'price' | 'rating' | 'reviews'>;

const categories = ['All', ...Array.from(new Set(products.map((p) => p.category)))];

export default function Dashboard() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All');
  const [stockOnly, setStockOnly] = useState(false);
  const [sortKey, setSortKey] = useState<SortKey>('reviews');
  const [asc, setAsc] = useState(false);

  const rows = useMemo(() => {
    let r = products.filter((p) => {
      const matchesQ =
        !q ||
        p.name.toLowerCase().includes(q.toLowerCase()) ||
        p.sku.toLowerCase().includes(q.toLowerCase()) ||
        p.brand.toLowerCase().includes(q.toLowerCase());
      const matchesCat = cat === 'All' || p.category === cat;
      const matchesStock = !stockOnly || p.inStock;
      return matchesQ && matchesCat && matchesStock;
    });
    r = [...r].sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      let cmp: number;
      if (typeof av === 'number' && typeof bv === 'number') cmp = av - bv;
      else cmp = String(av).localeCompare(String(bv));
      return asc ? cmp : -cmp;
    });
    return r;
  }, [q, cat, stockOnly, sortKey, asc]);

  const stats = useMemo(() => {
    const inStock = products.filter((p) => p.inStock).length;
    const avg = products.reduce((s, p) => s + p.price, 0) / products.length;
    return { total: products.length, inStock, avg, cats: categories.length - 1 };
  }, []);

  function toggleSort(k: SortKey) {
    if (k === sortKey) setAsc((v) => !v);
    else {
      setSortKey(k);
      setAsc(false);
    }
  }

  function exportCsv() {
    const header = ['sku', 'name', 'category', 'brand', 'price', 'rating', 'reviews', 'inStock'];
    const lines = [header.join(',')];
    for (const p of rows) {
      lines.push(
        [p.sku, `"${p.name.replace(/"/g, '""')}"`, p.category, p.brand, p.price, p.rating, p.reviews, p.inStock]
          .join(',')
      );
    }
    const blob = new Blob([lines.join('\n')], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'scraper-output.csv';
    a.click();
    URL.revokeObjectURL(url);
  }

  const arrow = (k: SortKey) => (k === sortKey ? (asc ? ' ▲' : ' ▼') : '');

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="rounded-md bg-brand-100 px-2 py-0.5 font-mono text-xs font-semibold text-brand-700">
              PUPPETEER · DEMO
            </span>
            <h1 className="text-lg font-bold text-slate-900">Catalog Scraper — Output Dashboard</h1>
          </div>
          <p className="mt-2 max-w-2xl text-sm text-slate-500">
            This is the kind of output a scraping job delivers: a public catalog crawled headlessly with Puppeteer,
            cleaned to structured JSON, and rendered here as a searchable, sortable, exportable dashboard. Sample data —
            <a className="text-brand-600 underline" href="https://github.com/freelancereplylab-dot/freelance-portfolio-demos/tree/main/catalog-scraper" target="_blank" rel="noopener"> see the scraper source ↗</a>.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label="Products scraped" value={String(stats.total)} />
          <Stat label="In stock" value={`${stats.inStock} / ${stats.total}`} />
          <Stat label="Avg price" value={`$${stats.avg.toFixed(2)}`} />
          <Stat label="Categories" value={String(stats.cats)} />
        </div>

        {/* Controls */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search name, SKU, brand…"
            className="h-10 flex-1 min-w-[220px] rounded-lg border border-slate-300 px-3 text-sm outline-none focus:border-brand-500"
          />
          <select
            value={cat}
            onChange={(e) => setCat(e.target.value)}
            className="h-10 rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:border-brand-500"
          >
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <label className="flex h-10 items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 text-sm">
            <input type="checkbox" checked={stockOnly} onChange={(e) => setStockOnly(e.target.checked)} />
            In stock only
          </label>
          <button onClick={exportCsv} className="h-10 rounded-lg bg-brand-600 px-4 text-sm font-semibold text-white hover:bg-brand-700">
            ↓ Export CSV
          </button>
        </div>

        <p className="mt-3 text-xs text-slate-400">
          Showing <b className="text-slate-600">{rows.length}</b> of {products.length} rows
        </p>

        {/* Table */}
        <div className="mt-3 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <Th onClick={() => toggleSort('name')} label={`Product${arrow('name')}`} />
                <Th onClick={() => toggleSort('category')} label={`Category${arrow('category')}`} />
                <Th onClick={() => toggleSort('brand')} label={`Brand${arrow('brand')}`} />
                <Th onClick={() => toggleSort('price')} label={`Price${arrow('price')}`} right />
                <Th onClick={() => toggleSort('rating')} label={`Rating${arrow('rating')}`} right />
                <Th onClick={() => toggleSort('reviews')} label={`Reviews${arrow('reviews')}`} right />
                <th className="px-4 py-3 text-center">Stock</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((p) => (
                <tr key={p.sku} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                  <td className="px-4 py-3">
                    <div className="font-medium text-slate-900">{p.name}</div>
                    <div className="font-mono text-xs text-slate-400">{p.sku}</div>
                  </td>
                  <td className="px-4 py-3 text-slate-600">{p.category}</td>
                  <td className="px-4 py-3 text-slate-600">{p.brand}</td>
                  <td className="px-4 py-3 text-right font-medium tabular-nums">${p.price.toFixed(2)}</td>
                  <td className="px-4 py-3 text-right tabular-nums">{p.rating.toFixed(1)}</td>
                  <td className="px-4 py-3 text-right tabular-nums text-slate-500">{p.reviews.toLocaleString()}</td>
                  <td className="px-4 py-3 text-center">
                    {p.inStock ? (
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">In stock</span>
                    ) : (
                      <span className="rounded-full bg-rose-100 px-2 py-0.5 text-xs font-medium text-rose-600">Out</span>
                    )}
                  </td>
                </tr>
              ))}
              {rows.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-4 py-10 text-center text-slate-400">
                    No rows match your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <footer className="mt-8 text-center text-xs text-slate-400">
          Built by Duc Dien · web developer &amp; automation engineer ·{' '}
          <a className="text-brand-600 underline" href="https://portfolio-site-delta-pink.vercel.app" target="_blank" rel="noopener">
            portfolio
          </a>{' '}
          ·{' '}
          <a className="text-brand-600 underline" href="https://www.fiverr.com/freelancereplyl" target="_blank" rel="noopener">
            hire on Fiverr
          </a>
        </footer>
      </main>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="text-xs font-medium uppercase tracking-wide text-slate-400">{label}</div>
      <div className="mt-1 text-2xl font-bold text-slate-900">{value}</div>
    </div>
  );
}

function Th({ label, onClick, right }: { label: string; onClick: () => void; right?: boolean }) {
  return (
    <th className={`px-4 py-3 ${right ? 'text-right' : 'text-left'}`}>
      <button onClick={onClick} className="font-semibold uppercase tracking-wide hover:text-brand-600">
        {label}
      </button>
    </th>
  );
}
