import { getContentBySlug, getContentSlugs } from '@/lib/content';
import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';

export async function generateStaticParams() {
  const params = getContentSlugs('guides');
  return params.map((p) => ({
    slug: p.params.slug,
  }));
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getContentBySlug('guides', slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="section" style={{ background: 'var(--surface)', marginTop: '2rem' }}>
        <div className="container">
          <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>{post.title}</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>{post.description}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container">
          <div className="glass-card animate-fade-in delay-100" style={{ maxWidth: '800px', margin: '0 auto', padding: 'var(--spacing-lg) var(--spacing-md)' }}>
            <article className="prose">
              <Markdown>{post.content}</Markdown>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
