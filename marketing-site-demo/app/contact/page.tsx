import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Booking',
  description: 'Book your first free class at Stillwater Yoga, Da Nang, or get in touch with the studio.'
};

export default function Contact() {
  return (
    <section className="container-x py-16">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-sage-900 sm:text-5xl">
            Book your first class
          </h1>
          <p className="mt-4 max-w-md text-lg text-ink/70">
            Your first class is free. Leave your details and we will text you the next available slot — usually within a few hours.
          </p>
          <div className="mt-8 space-y-3 text-sm text-ink/70">
            <p><span className="font-semibold text-sage-700">Studio</span><br />14 Bach Dang Riverside, Hai Chau, Da Nang</p>
            <p><span className="font-semibold text-sage-700">Hours</span><br />Daily 6:00 – 21:00</p>
            <p><span className="font-semibold text-sage-700">Email</span><br />hello@stillwater.studio</p>
          </div>
        </div>

        <form className="rounded-2xl border border-sage-100 bg-white p-7 shadow-sm" action="#" method="post">
          <div className="grid gap-4">
            <label className="text-sm font-medium text-ink/80">
              Name
              <input type="text" name="name" required className="mt-1 w-full rounded-lg border border-sage-200 px-3 py-2 text-sm outline-none focus:border-sage-500" placeholder="Your name" />
            </label>
            <label className="text-sm font-medium text-ink/80">
              Phone or email
              <input type="text" name="contact" required className="mt-1 w-full rounded-lg border border-sage-200 px-3 py-2 text-sm outline-none focus:border-sage-500" placeholder="So we can reach you" />
            </label>
            <label className="text-sm font-medium text-ink/80">
              Which class?
              <select name="class" className="mt-1 w-full rounded-lg border border-sage-200 px-3 py-2 text-sm outline-none focus:border-sage-500">
                <option>Sunrise Vinyasa</option>
                <option>Deep Yin</option>
                <option>Restore &amp; Rest</option>
                <option>Beginners Lab</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <label className="text-sm font-medium text-ink/80">
              Anything we should know?
              <textarea name="note" rows={3} className="mt-1 w-full rounded-lg border border-sage-200 px-3 py-2 text-sm outline-none focus:border-sage-500" placeholder="Injuries, goals, questions…" />
            </label>
            <button type="submit" className="btn-primary mt-2 w-full">Request my free class</button>
            <p className="text-center text-xs text-ink/45">Demo form — not wired to a backend in this portfolio build.</p>
          </div>
        </form>
      </div>
    </section>
  );
}
