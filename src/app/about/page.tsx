import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About BIGWIN959',
  description: 'Learn about Asia\'s most trusted gaming destination and our commitment to fair play.',
};

export default function AboutPage() {
  return (
    <div className="container animate-fade-in" style={{ paddingTop: 'var(--spacing-xl)' }}>
      <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>About <span className="gradient-text">BIGWIN959</span></h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Discover the story of Asia's most trusted gaming destination. Since 2019, we've been redefining excellence in sports betting and casino entertainment.
        </p>
      </div>

      <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', padding: 'var(--spacing-md)' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Trusted Since 2019</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
          Founded in 2019, BIGWIN959 has rapidly grown from a local sports betting platform to a comprehensive international gaming hub. Our journey is driven by a simple mission: to provide the ultimate gaming experience with absolute integrity. Our platform is built on a foundation of trust and player satisfaction, ensuring a secure, fair, and entertaining gaming environment.
        </p>

        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Global Presence with Local Expertise</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
          With deep roots in the Asian gaming landscape, we understand the preferences and requirements of players across Bangladesh, Myanmar, Thailand, and beyond. We provide localized payment methods (bKash, Nagad, KBZPay), culturalized game selections, and dedicated local language support for a truly home-grown feel.
        </p>
        
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Certified & Secure</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
          Our platform employs the latest 256-bit SSL security technologies to ensure your data and funds are always protected. We only partner with licensed and audited game providers like Evolution and Pragmatic Play to ensure that every spin, deal, and roll of the dice is governed by a fair and transparent mathematical system.
        </p>
      </div>
    </div>
  );
}
