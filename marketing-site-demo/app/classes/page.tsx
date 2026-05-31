import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Classes & Schedule',
  description: 'Vinyasa, yin, restorative and breathwork classes at Stillwater Yoga, Da Nang. See the weekly schedule and pricing.'
};

const schedule = [
  { day: 'Monday', items: [['6:00', 'Sunrise Vinyasa'], ['18:30', 'Slow Flow']] },
  { day: 'Tuesday', items: [['6:00', 'Sunrise Vinyasa'], ['18:30', 'Deep Yin']] },
  { day: 'Wednesday', items: [['6:00', 'Sunrise Vinyasa'], ['19:00', 'Breathwork']] },
  { day: 'Thursday', items: [['6:00', 'Sunrise Vinyasa'], ['18:30', 'Deep Yin']] },
  { day: 'Friday', items: [['6:00', 'Sunrise Vinyasa'], ['17:30', 'Wind-Down Flow']] },
  { day: 'Saturday', items: [['8:00', 'Weekend Vinyasa'], ['10:00', 'Beginners Lab']] },
  { day: 'Sunday', items: [['8:00', 'Weekend Vinyasa'], ['17:00', 'Restore & Rest']] }
];

const pricing = [
  { name: 'Drop-in', price: '120k', unit: 'per class', note: 'No commitment. First one is free.' },
  { name: '10-class pass', price: '1,000k', unit: '10 classes', note: 'Valid 3 months. Best for regulars.', featured: true },
  { name: 'Unlimited month', price: '1,600k', unit: 'per month', note: 'Every class, every day.' }
];

export default function Classes() {
  return (
    <>
      <section className="container-x py-16">
        <p className="eyebrow">Classes</p>
        <h1 className="mt-3 max-w-2xl font-serif text-4xl font-semibold text-sage-900 sm:text-5xl">
          A simple weekly rhythm
        </h1>
        <p className="mt-4 max-w-xl text-lg text-ink/70">
          Every class is open to beginners unless noted. Arrive ten minutes early, bring water, and we will lend you everything else.
        </p>
      </section>

      <section className="container-x">
        <div className="overflow-hidden rounded-2xl border border-sage-100 bg-white shadow-sm">
          {schedule.map((row, i) => (
            <div key={row.day} className={`grid grid-cols-1 gap-2 px-6 py-4 sm:grid-cols-[140px_1fr] ${i % 2 ? 'bg-sage-50/50' : ''}`}>
              <div className="font-semibold text-sage-700">{row.day}</div>
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-ink/70">
                {row.items.map(([t, name]) => (
                  <span key={t}><span className="font-medium text-sage-600">{t}</span> · {name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-16">
        <p className="eyebrow">Pricing</p>
        <h2 className="mt-2 font-serif text-3xl font-semibold text-sage-900">Pay as you go, or settle in</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pricing.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border p-7 shadow-sm ${p.featured ? 'border-sage-500 bg-sage-700 text-white' : 'border-sage-100 bg-white'}`}
            >
              <div className={`text-sm font-medium ${p.featured ? 'text-sage-100' : 'text-sage-500'}`}>{p.name}</div>
              <div className="mt-2 font-serif text-4xl font-semibold">{p.price}</div>
              <div className={`text-sm ${p.featured ? 'text-sage-100' : 'text-ink/50'}`}>{p.unit}</div>
              <p className={`mt-4 text-sm ${p.featured ? 'text-sage-50/90' : 'text-ink/65'}`}>{p.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/contact" className="btn-primary">Book your first class</Link>
        </div>
      </section>
    </>
  );
}
