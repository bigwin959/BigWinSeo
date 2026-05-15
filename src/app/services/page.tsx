import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Game Providers',
  description: 'World-Class Game Providers at BIGWIN959.',
};

export default function ServicesPage() {
  const services = [
    { title: 'Evolution Gaming', description: 'World\'s leading live casino provider with innovative game shows and professional dealers.', icon: '/providers/evolution.png' },
    { title: 'Pragmatic Play', description: 'Leading content provider known for Drops & Wins, high-volatility slots and engaging live dealers.', icon: '/providers/pragmatic.png' },
    { title: 'JILI Games', description: 'Famous for engaging fishing and slot games, perfectly optimized for mobile play in Asia.', icon: '/providers/jili.png' },
    { title: 'SBO Sports', description: 'Premium sports betting provider with extensive markets, Asian handicaps, and live streaming.', icon: '/providers/sbo.png' },
    { title: 'Spribe (Aviator)', description: 'Pioneer of next-generation turbo games and crash mechanics. High-speed social betting.', icon: '/providers/spribe.png' },
    { title: 'PG Soft', description: 'Premium mobile-first slot developer with cinematic graphics and innovative gameplay mechanics.', icon: '/providers/pgsoft.png' },
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
            <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '10px' }}>
              <img src={service.icon} alt={`${service.title} Logo`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
