import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { posts, getPost } from '@/lib/posts';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: 'Not found' };
  return { title: post.title, description: post.excerpt };
}

function fmt(d: string) {
  return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <article className="container-x max-w-3xl py-16">
      <Link href="/blog" className="text-sm font-semibold text-sage-600 hover:text-sage-700">← Journal</Link>
      <div className="mt-6 flex items-center gap-3 text-xs font-medium uppercase tracking-wide text-sage-500">
        <span>{post.category}</span><span className="text-ink/30">·</span>
        <span className="text-ink/45">{fmt(post.date)}</span><span className="text-ink/30">·</span>
        <span className="text-ink/45">{post.readingTime} read</span>
      </div>
      <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-sage-900">{post.title}</h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
        {post.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
      <div className="mt-12 rounded-2xl bg-sage-700 p-8 text-center text-white">
        <p className="font-serif text-2xl">Ready to try it on the mat?</p>
        <p className="mt-2 text-sm text-sage-100">Your first class is free.</p>
        <Link href="/contact" className="mt-5 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-sage-700 hover:bg-sage-50">
          Book a class
        </Link>
      </div>
    </article>
  );
}
