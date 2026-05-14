import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the team behind BIGWINSEO.',
};

export default function AboutPage() {
  return (
    <div className="container animate-fade-in" style={{ paddingTop: 'var(--spacing-xl)' }}>
      <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>About <span className="gradient-text">BIGWINSEO</span></h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          We are a team of passionate engineers, data scientists, and marketers dedicated to changing the SEO landscape.
        </p>
      </div>

      <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', padding: 'var(--spacing-md)' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Our Mission</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
          To provide unparalleled visibility for ambitious brands. We believe that true growth happens at the intersection of technical excellence and strategic execution. For the next 6 months and beyond, we are committed to building the most robust toolkit and service offering in the industry.
        </p>

        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Our Vision</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
          A digital ecosystem where quality content and flawless user experience naturally rise to the top. We empower businesses to achieve this standard, bridging the gap between their offerings and the audiences actively searching for them.
        </p>
      </div>
    </div>
  );
}
