export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: 'morning-breath-practice',
    title: 'A five-minute breath practice for slow mornings',
    excerpt:
      'You do not need an hour on the mat to feel the difference. Here is a short sequence we teach every beginner.',
    date: '2026-05-18',
    readingTime: '4 min',
    category: 'Practice',
    body: [
      'Most people think a yoga practice has to be long to count. It does not. The nervous system responds to consistency far more than duration, and five honest minutes each morning will do more than one heroic session a week.',
      'Start seated. Let the spine grow tall without forcing it, soften the jaw, and rest the hands on the thighs. Close the eyes or lower the gaze.',
      'Inhale through the nose for a count of four. Hold gently for four. Exhale for six. The longer exhale is the part that matters — it tells the body it is safe to settle. Repeat for ten rounds.',
      'When you finish, do not rush to stand. Sit for a moment and notice the quality of the mind. That noticing is the practice. The poses come later.'
    ]
  },
  {
    slug: 'choosing-your-first-class',
    title: 'Vinyasa, yin, or restorative? Choosing your first class',
    excerpt:
      'New to the studio and not sure where to start? A plain-language guide to the three styles we run most.',
    date: '2026-05-09',
    readingTime: '5 min',
    category: 'Beginners',
    body: [
      'Walking into a studio for the first time can feel like reading a menu in a language you half-recognise. Here is the short version of what each style actually feels like.',
      'Vinyasa is movement linked to breath. Expect to flow, to warm up, to sweat a little. If you like to feel like you have moved your body, start here.',
      'Yin is slow and still. You hold floor-based shapes for two to five minutes, working into connective tissue rather than muscle. It looks easy and is quietly demanding.',
      'Restorative is rest, fully supported by props. Nothing is stretched hard; the goal is to do less. It is the class to book when the week has been too much.',
      'Our advice: try one of each over your first two weeks. You will know your style by how you feel walking out the door.'
    ]
  },
  {
    slug: 'why-we-built-by-the-river',
    title: 'Why we built the studio by the river',
    excerpt:
      'A note from our founder on light, water, and why location is part of the practice.',
    date: '2026-04-27',
    readingTime: '3 min',
    category: 'Studio',
    body: [
      'When we were looking for a home for Stillwater, every practical voice said to take the cheaper space inland. We chose the river instead, and we have not regretted it once.',
      'Morning light on water does something to a room that no lamp can fake. Classes that start at six catch the sky changing colour through the tall windows, and the practice slows to match it.',
      'A studio is not only a floor and a ceiling. It is the air, the sound outside, the walk you take to get there. We wanted all of that to be part of why you come back.'
    ]
  }
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
