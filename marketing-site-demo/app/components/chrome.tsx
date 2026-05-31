import Link from 'next/link';

const nav = [
  { href: '/classes', label: 'Classes' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Journal' },
  { href: '/contact', label: 'Contact' }
];

export function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-sage-100 bg-sage-50/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="font-serif text-xl font-semibold text-sage-700">
          Stillwater<span className="text-sage-500">.</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink/70 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-sage-600">
              {n.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="btn-primary">
          Book a class
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-sage-100 bg-sage-100/40">
      <div className="container-x grid gap-8 py-12 sm:grid-cols-3">
        <div>
          <div className="font-serif text-lg font-semibold text-sage-700">Stillwater Yoga</div>
          <p className="mt-2 max-w-xs text-sm text-ink/60">
            A riverside studio for slow mornings and steady breath. Da Nang, Vietnam.
          </p>
        </div>
        <div className="text-sm">
          <div className="eyebrow mb-3">Visit</div>
          <p className="text-ink/70">14 Bach Dang Riverside</p>
          <p className="text-ink/70">Hai Chau, Da Nang</p>
          <p className="mt-2 text-ink/70">Daily 6:00 – 21:00</p>
        </div>
        <div className="text-sm">
          <div className="eyebrow mb-3">Say hello</div>
          <p className="text-ink/70">hello@stillwater.studio</p>
          <p className="text-ink/70">+84 000 000 000</p>
          <p className="mt-4 text-xs text-ink/40">
            Demo marketing site · built by Duc Dien ·{' '}
            <a className="underline" href="https://portfolio-site-delta-pink.vercel.app">
              portfolio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
