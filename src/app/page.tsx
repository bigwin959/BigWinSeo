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
            Asia's Most Trusted <br />
            <span className="gradient-text">Gaming Destination</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Experience premium sports betting, live casino, and slot entertainment. Fully regulated, secure local payments, and 24/7 customer support.
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
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Why Choose BIGWIN959?</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto' }}>
              We combine world-class entertainment with absolute integrity and security.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="glass-card">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎮</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>110+ Premium Providers</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Play 5,000+ certified games from Evolution Gaming, Jili, Pragmatic Play, and SBO Sports.
              </p>
            </div>
            <div className="glass-card delay-100">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🛡️</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Bank-Grade Security</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Your data and funds are protected by 256-bit SSL encryption and strict verification processes.
              </p>
            </div>
            <div className="glass-card delay-200">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚡</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Fast Local Payments</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Instant deposits and rapid withdrawals via bKash, Nagad, KBZPay, WavePay, and local banks.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Market Coverage Section (SEO Content) */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Comprehensive <span className="gradient-text">Gaming Markets</span></h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
              Whether you are a sports enthusiast or a live casino high roller, BIGWIN959 offers unparalleled market coverage tailored for Asian players.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
            <div style={{ padding: '2rem', borderLeft: '2px solid var(--accent-color)' }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Sports Betting Excellence</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                Bet on Cricket, Football, Tennis, and eSports with industry-leading odds. We cover major tournaments including the BPL, IPL, English Premier League, and Champions League. Enjoy live streaming, in-play betting, and rapid bet settlements.
              </p>
              <a href="/services" style={{ color: 'var(--accent-color)', fontWeight: 600 }}>Explore Sports Markets &rarr;</a>
            </div>
            
            <div style={{ padding: '2rem', borderLeft: '2px solid var(--accent-color)' }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Live Casino & Slots</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                Immerse yourself in authentic Live Baccarat, Roulette, and Sic Bo with professional dealers. Our slot catalog features high-RTP games from PG Soft and Jili, packed with mega multipliers and daily jackpot drops.
              </p>
              <a href="/services" style={{ color: 'var(--accent-color)', fontWeight: 600 }}>View Casino Providers &rarr;</a>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="glass-card" style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--accent-gradient)', border: 'none' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#fff' }}>Ready to Start Winning?</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
              Join over 1 million happy players and experience Asia's most trusted gaming platform today.
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
