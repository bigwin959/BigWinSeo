import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Game Providers',
  description: 'World-Class Game Providers at BIGWIN959.',
};

export default function ServicesPage() {
  const services = [
    { title: 'Evolution Gaming', description: 'World\'s leading live casino provider with innovative game shows and professional dealers.', icon: '🎰' },
    { title: 'Pragmatic Play', description: 'Leading content provider known for Drops & Wins, high-volatility slots and engaging live dealers.', icon: '💎' },
    { title: 'JILI Games', description: 'Famous for engaging fishing and slot games, perfectly optimized for mobile play in Asia.', icon: '🎣' },
    { title: 'SBO Sports', description: 'Premium sports betting provider with extensive markets, Asian handicaps, and live streaming.', icon: '⚽' },
    { title: 'Spribe (Aviator)', description: 'Pioneer of next-generation turbo games and crash mechanics. High-speed social betting.', icon: '🚀' },
    { title: 'PG Soft', description: 'Premium mobile-first slot developer with cinematic graphics and innovative gameplay mechanics.', icon: '📱' },
  ];

  return (
    <div className="container animate-fade-in" style={{ paddingTop: 'var(--spacing-xl)' }}>
      <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>World-Class <span className="gradient-text">Providers</span></h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          BIGWIN959 connects you to the world's most trusted gaming studios. We curate a premium experience powered by industry giants ensuring fair play and massive jackpots.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        {services.map((service, index) => (
          <div key={index} className={`glass-card delay-${(index % 3 + 1) * 100}`}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
