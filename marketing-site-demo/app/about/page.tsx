import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'The story behind Stillwater Yoga — a riverside studio in Da Nang built around light, water, and steady breath.'
};

const teachers = [
  { name: 'Linh Tran', role: 'Founder · Vinyasa & breathwork', bio: 'Trained in Rishikesh and Da Lat. Believes the breath is the whole practice.' },
  { name: 'Quang Pham', role: 'Yin & restorative', bio: 'Former physiotherapist. Teaches the slow, structural side of the work.' },
  { name: 'Sara Okoye', role: 'Beginners & mobility', bio: 'Makes the first class feel like the easiest decision you made all week.' }
];

export default function About() {
  return (
    <>
      <section className="container-x py-16">
        <p className="eyebrow">Our story</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold text-sage-900 sm:text-5xl">
          A quiet room by the water, open to everyone
        </h1>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div className="space-y-4 text-ink/75">
            <p>
              Stillwater began in 2023 with one borrowed mat and a stubborn idea: that a yoga studio should feel less like a gym and more like a deep breath.
            </p>
            <p>
              We found a room with tall windows on the Bach Dang riverside, where the morning light comes off the water and slows everything down. We kept the floors plain, the music soft, and the door open to beginners.
            </p>
            <p>
              Three years later we have taught more than 1,200 classes. The idea has not changed. Come as you are, breathe a little slower, and leave a little lighter.
            </p>
          </div>
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-sage-300 to-sage-600 shadow-lg" />
        </div>
      </section>

      <section className="container-x py-8">
        <p className="eyebrow">The teachers</p>
        <h2 className="mt-2 font-serif text-3xl font-semibold text-sage-900">The people who hold the room</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {teachers.map((t) => (
            <div key={t.name} className="rounded-2xl border border-sage-100 bg-white p-7 shadow-sm">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-sage-400 to-sage-600" />
              <h3 className="mt-4 font-serif text-lg font-semibold text-sage-900">{t.name}</h3>
              <div className="text-sm font-medium text-sage-500">{t.role}</div>
              <p className="mt-3 text-sm text-ink/65">{t.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
