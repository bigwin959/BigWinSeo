export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', minHeight: '80vh' }}>
        <div style={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '50vw',
          height: '50vw',
          background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(15,17,21,0) 70%)',
          zIndex: 0
        }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
            Dominate Search with <br />
            <span className="gradient-text">Precision & Elegance</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            We engineer data-driven SEO strategies wrapped in premium digital experiences. Scale your visibility, outrank the competition, and convert visitors into loyal customers.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="/services" className="btn btn-primary">Our Services</a>
            <a href="/about" className="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Why Choose BIGWINSEO?</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto' }}>
              We combine technical excellence with aesthetic perfection.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="glass-card">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚀</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Technical SEO</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Lightning-fast load times, flawless architectures, and clean codebases that search engines love.
              </p>
            </div>
            <div className="glass-card delay-100">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💎</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Premium UX</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Traffic means nothing without conversions. We design experiences that captivate and convert.
              </p>
            </div>
            <div className="glass-card delay-200">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📊</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Data-Driven Strategy</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                No guesswork. Every decision is backed by analytics, market research, and proven methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="glass-card" style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--accent-gradient)', border: 'none' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#fff' }}>Ready to scale your organic growth?</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
              Join the industry leaders who trust BIGWINSEO to manage their digital presence.
            </p>
            <a href="/download" className="btn" style={{ background: '#fff', color: '#111' }}>
              Download Our App
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
