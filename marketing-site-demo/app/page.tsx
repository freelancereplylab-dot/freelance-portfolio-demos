import Link from 'next/link';
import { posts } from '@/lib/posts';

const classes = [
  { name: 'Sunrise Vinyasa', time: 'Mon–Fri · 6:00', level: 'All levels', blurb: 'Breath-led flow to wake the body with the river light.' },
  { name: 'Deep Yin', time: 'Tue & Thu · 18:30', level: 'Beginner-friendly', blurb: 'Long, quiet holds that work into the connective tissue.' },
  { name: 'Restore & Rest', time: 'Sun · 17:00', level: 'Everyone', blurb: 'Fully supported stillness for the end of a heavy week.' }
];

export default function Home() {
  const latest = posts.slice(0, 3);
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sage-100 to-sage-50" />
        <div className="container-x grid items-center gap-12 py-20 sm:py-28 md:grid-cols-2">
          <div>
            <p className="eyebrow">Riverside studio · Da Nang</p>
            <h1 className="mt-4 font-serif text-5xl font-semibold leading-[1.05] text-sage-900 sm:text-6xl">
              Breathe slower.<br />Move with the river.
            </h1>
            <p className="mt-6 max-w-md text-lg text-ink/70">
              Vinyasa, yin, and breathwork classes for every level — in a quiet space built around morning light and still water.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">Book your first class</Link>
              <Link href="/classes" className="btn-ghost">See the schedule</Link>
            </div>
            <p className="mt-6 text-sm text-ink/50">First class is on us — no membership, no pressure.</p>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-sage-500 to-sage-700 shadow-xl" />
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-5 shadow-lg sm:block">
              <div className="font-serif text-3xl font-semibold text-sage-700">1,200+</div>
              <div className="text-sm text-ink/60">classes taught by the water</div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes preview */}
      <section className="container-x py-16">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">What we offer</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-sage-900">Classes for every kind of day</h2>
          </div>
          <Link href="/classes" className="hidden text-sm font-semibold text-sage-600 hover:text-sage-700 sm:inline">
            Full schedule →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {classes.map((c) => (
            <div key={c.name} className="rounded-2xl border border-sage-100 bg-white p-7 shadow-sm">
              <div className="text-sm font-medium text-sage-500">{c.time}</div>
              <h3 className="mt-1 font-serif text-xl font-semibold text-sage-900">{c.name}</h3>
              <p className="mt-3 text-sm text-ink/65">{c.blurb}</p>
              <div className="mt-5 inline-block rounded-full bg-sage-100 px-3 py-1 text-xs font-medium text-sage-700">
                {c.level}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-sage-700 py-20 text-center text-white">
        <div className="container-x">
          <p className="mx-auto max-w-2xl font-serif text-2xl leading-relaxed sm:text-3xl">
            “I came for the stretch and stayed for the quiet. The 6am class by the river reset my whole year.”
          </p>
          <p className="mt-6 text-sm text-sage-100">— Mai, member since 2024</p>
        </div>
      </section>

      {/* Journal preview */}
      <section className="container-x py-16">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">From the journal</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-sage-900">Notes on practice &amp; rest</h2>
          </div>
          <Link href="/blog" className="hidden text-sm font-semibold text-sage-600 hover:text-sage-700 sm:inline">
            Read all →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {latest.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group rounded-2xl border border-sage-100 bg-white p-7 shadow-sm transition hover:shadow-md">
              <div className="text-xs font-medium uppercase tracking-wide text-sage-500">{p.category}</div>
              <h3 className="mt-2 font-serif text-lg font-semibold text-sage-900 group-hover:text-sage-600">{p.title}</h3>
              <p className="mt-3 text-sm text-ink/65">{p.excerpt}</p>
              <div className="mt-4 text-xs text-ink/45">{p.readingTime} read</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
