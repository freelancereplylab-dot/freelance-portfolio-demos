import Section from './components/Section';
import MenuCard from './components/MenuCard';

const menu = [
  { name: 'Cà phê đen', price: '35,000₫', desc: 'House dark roast, hand-dripped phin, no sugar by default.' },
  { name: 'Cà phê sữa đá', price: '40,000₫', desc: 'Strong drip + condensed milk over ice. The classic afternoon pickup.' },
  { name: 'Bạc xỉu', price: '45,000₫', desc: 'Milkier and gentler — for when you want comfort, not caffeine shock.' },
  { name: 'Coconut latte', price: '55,000₫', desc: 'Espresso, fresh coconut cream, a single ice cube. House favorite.' },
  { name: 'Cold brew', price: '50,000₫', desc: '18-hour slow steep. Smooth, low acidity, big body.' },
  { name: 'Single-origin pour', price: '70,000₫', desc: 'Rotating Vietnamese single-origin. Ask the bar what is on today.' }
];

export default function Page() {
  return (
    <main>
      {/* Top bar */}
      <header className="sticky top-0 z-10 border-b border-brand-100 bg-brand-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="flex items-center gap-2 text-lg font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-500 text-white">C</span>
            Café Đà Nẵng
          </span>
          <nav className="hidden gap-6 text-sm sm:flex">
            <a href="#menu" className="hover:text-brand-600">Menu</a>
            <a href="#hours" className="hover:text-brand-600">Hours</a>
            <a href="#visit" className="hover:text-brand-600">Visit</a>
          </nav>
          <a href="#visit" className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600">
            Order online
          </a>
        </div>
      </header>

      {/* Hero */}
      <Section className="grid items-center gap-10 sm:grid-cols-2 sm:py-24">
        <div>
          <p className="mb-3 inline-flex rounded-full border border-brand-100 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-600">
            Specialty roastery · Hải Châu
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            A slow cup,<br />by the river.
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-brand-900/80">
            Vietnamese specialty beans, hand-roasted weekly in Hải Châu, brewed slow and served slower. Open every day.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#menu" className="rounded-lg bg-brand-500 px-5 py-3 font-semibold text-white hover:bg-brand-600">
              See the menu
            </a>
            <a href="#visit" className="rounded-lg border border-brand-500 px-5 py-3 font-semibold text-brand-600 hover:bg-brand-100">
              Find us
            </a>
          </div>
        </div>
        <div className="aspect-square rounded-3xl bg-gradient-to-br from-brand-400 via-brand-500 to-brand-900 shadow-xl" aria-hidden />
      </Section>

      {/* Menu */}
      <Section id="menu">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">The menu</p>
            <h2 className="mt-1 text-3xl font-bold sm:text-4xl">Six drinks. Done right.</h2>
          </div>
          <span className="text-sm text-brand-900/60">Cash and bank QR accepted</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {menu.map((item) => (
            <MenuCard key={item.name} {...item} />
          ))}
        </div>
      </Section>

      {/* Hours */}
      <Section id="hours" className="rounded-3xl bg-white sm:py-16">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Hours</p>
            <h2 className="mt-1 text-3xl font-bold">Every day,<br />6 AM until late.</h2>
          </div>
          <ul className="space-y-2 text-base">
            <li className="flex justify-between"><span>Mon — Fri</span><span className="font-mono">06:00 — 22:00</span></li>
            <li className="flex justify-between"><span>Saturday</span><span className="font-mono">07:00 — 23:00</span></li>
            <li className="flex justify-between"><span>Sunday</span><span className="font-mono">07:00 — 21:00</span></li>
          </ul>
          <div className="text-sm leading-relaxed text-brand-900/70">
            <p><strong>Quiet hours</strong> on weekday mornings — perfect for writing, meetings, or just sitting with a cup.</p>
            <p className="mt-3">Free purified water and WiFi for paying customers. Outdoor seating overlooks the Hàn River.</p>
          </div>
        </div>
      </Section>

      {/* Visit / CTA */}
      <Section id="visit" className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Visit</p>
        <h2 className="mt-1 text-3xl font-bold sm:text-4xl">12 Bạch Đằng, Hải Châu, Đà Nẵng</h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-brand-900/70">
          We are five minutes from the Dragon Bridge, across from the river park. Stop by, sit a while, drink slowly.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="rounded-lg bg-brand-500 px-5 py-3 font-semibold text-white hover:bg-brand-600">
            Open in Maps
          </a>
          <a href="tel:+84905000000" className="rounded-lg border border-brand-500 px-5 py-3 font-semibold text-brand-600 hover:bg-brand-100">
            Call us
          </a>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-brand-100 bg-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-brand-900/60 sm:flex-row">
          <span>© {new Date().getFullYear()} Café Đà Nẵng — built with Next.js + Tailwind</span>
          <a href="https://github.com" className="hover:text-brand-600">GitHub source</a>
        </div>
      </footer>
    </main>
  );
}
