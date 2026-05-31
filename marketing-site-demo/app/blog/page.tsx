import Link from 'next/link';
import type { Metadata } from 'next';
import { posts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Journal',
  description: 'Notes on practice, rest, and studio life from the teachers at Stillwater Yoga, Da Nang.'
};

function fmt(d: string) {
  return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function Blog() {
  return (
    <section className="container-x py-16">
      <p className="eyebrow">Journal</p>
      <h1 className="mt-3 font-serif text-4xl font-semibold text-sage-900 sm:text-5xl">Notes on practice &amp; rest</h1>
      <p className="mt-4 max-w-xl text-lg text-ink/70">Short reads from the teachers — no jargon, no pressure.</p>

      <div className="mt-12 divide-y divide-sage-100 border-t border-sage-100">
        {posts.map((p) => (
          <article key={p.slug} className="py-8">
            <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wide text-sage-500">
              <span>{p.category}</span><span className="text-ink/30">·</span><span className="text-ink/45">{fmt(p.date)}</span>
            </div>
            <h2 className="mt-2 font-serif text-2xl font-semibold text-sage-900">
              <Link href={`/blog/${p.slug}`} className="hover:text-sage-600">{p.title}</Link>
            </h2>
            <p className="mt-2 max-w-2xl text-ink/65">{p.excerpt}</p>
            <Link href={`/blog/${p.slug}`} className="mt-3 inline-block text-sm font-semibold text-sage-600 hover:text-sage-700">
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
