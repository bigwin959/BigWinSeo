import { Metadata } from 'next';

import { getAllContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Guides & Blog',
  description: 'Read the latest guides and strategies for online gaming.',
};

export default async function BlogPage() {
  const posts = getAllContent('guides');

  return (
    <div className="container animate-fade-in" style={{ paddingTop: 'var(--spacing-xl)' }}>
      <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our <span className="gradient-text">Guides</span></h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Expert guides, game strategies, and tutorials to maximize your winning potential.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {posts.map((post, index) => (
          <article key={post.slug} className={`glass-card delay-${(index + 1) * 100}`} style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--accent-color)', marginBottom: '0.5rem', fontWeight: 600 }}>{post.date}</span>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{post.title}</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>{post.description}</p>
            <a href={`/guides/${post.slug}`} style={{ fontWeight: 600, color: 'var(--text-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Read Guide <span>&rarr;</span>
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
