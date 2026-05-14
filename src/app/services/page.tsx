import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Our premium SEO services to scale your business.',
};

export default function ServicesPage() {
  const services = [
    { title: 'Technical SEO Audits', description: 'Deep-dive analysis of your website architecture, performance, and indexability.', icon: '🔍' },
    { title: 'Content Strategy', description: 'Data-driven content planning designed to capture high-intent organic traffic.', icon: '📝' },
    { title: 'Link Building', description: 'Acquiring high-authority backlinks to establish domain trust and dominance.', icon: '🔗' },
    { title: 'Local SEO', description: 'Optimizing your digital footprint to dominate local search results and maps.', icon: '📍' },
  ];

  return (
    <div className="container animate-fade-in" style={{ paddingTop: 'var(--spacing-xl)' }}>
      <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our <span className="gradient-text">Services</span></h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Comprehensive solutions designed to accelerate your organic growth.
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
