import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read the latest insights and strategies in the SEO industry.',
};

export default function BlogPage() {
  // Placeholder data for CMS integration later
  const posts = [
    { id: 1, title: "10 Technical SEO Audit Steps for 2026", excerpt: "A comprehensive guide to auditing modern web applications for peak search visibility.", date: "May 10, 2026" },
    { id: 2, title: "The Rise of AI Search: What You Need to Know", excerpt: "How generative AI engines are changing the way users search and how you should adapt.", date: "April 28, 2026" },
    { id: 3, title: "Core Web Vitals Demystified", excerpt: "Practical tips on improving LCP, INP, and CLS scores for React and Next.js applications.", date: "April 15, 2026" },
  ];

  return (
    <div className="container animate-fade-in" style={{ paddingTop: 'var(--spacing-xl)' }}>
      <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our <span className="gradient-text">Blog</span></h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Industry insights, technical guides, and proven strategies from our SEO experts.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {posts.map((post, index) => (
          <article key={post.id} className={`glass-card delay-${(index + 1) * 100}`} style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--accent-color)', marginBottom: '0.5rem', fontWeight: 600 }}>{post.date}</span>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{post.title}</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>{post.excerpt}</p>
            <a href={`/blog/${post.id}`} style={{ fontWeight: 600, color: 'var(--text-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Read Article <span>&rarr;</span>
            </a>
          </article>
        ))}
      </div>
      
      <div style={{ marginTop: 'var(--spacing-lg)', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem', fontStyle: 'italic' }}>
        * Note: This section will be connected to our Headless CMS shortly.
      </div>
    </div>
  );
}
