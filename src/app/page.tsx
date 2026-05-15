import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Animated Mesh Background for the Hero */}
      <div className="mesh-bg">
        <div className="mesh-blob blob-1"></div>
        <div className="mesh-blob blob-2"></div>
        <div className="mesh-blob blob-3"></div>
      </div>

      <div className="animate-fade-in relative z-10">
        {/* Dynamic Hero Section */}
        <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
          <div className="container" style={{ textAlign: 'center', position: 'relative' }}>
            <div className="news-tag tag-live animate-fade-in delay-100" style={{ marginBottom: '2rem' }}>
              🔴 Live: BPL 2026 Finals
            </div>
            
            <h1 className="title-glow animate-fade-in delay-200" style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', marginBottom: '1.5rem', lineHeight: '1.05' }}>
              Dominate the <br />
              <span className="gradient-text">Global Markets</span>
            </h1>
            
            <p className="animate-fade-in delay-300" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto 3rem', fontWeight: '500' }}>
              BIGWIN959 is Asia's most advanced portal for live cricket betting, premium slots, and real-time sports intelligence. Stay ahead of the curve.
            </p>
            
            <div className="animate-fade-in delay-400" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/services" className="btn btn-primary">
                Explore Providers
              </Link>
              <Link href="/guides" className="btn btn-secondary">
                View Latest Guides
              </Link>
            </div>
            
            {/* Trust Bar */}
            <div className="animate-fade-in delay-400" style={{ marginTop: '5rem', borderTop: '1px solid var(--border-medium)', paddingTop: '2rem', display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap', opacity: 0.8 }}>
              <div><h4 style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>1M+</h4><span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Active Players</span></div>
              <div><h4 style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>5,000+</h4><span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Daily Matches</span></div>
              <div><h4 style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>110+</h4><span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Game Providers</span></div>
            </div>
          </div>
        </section>

        {/* Global Cricket News & Live Ticker (The Information Hub) */}
        <section className="section" style={{ background: 'var(--surface)' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
              <div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Global <span className="gradient-text">Cricket Intelligence</span></h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Real-time news, match updates, and expert predictions.</p>
              </div>
              <Link href="/guides" style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>View All News &rarr;</Link>
            </div>
            
            <div className="bento-grid">
              {/* Highlight News Item */}
              <div className="glass-card bento-large" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', minHeight: '350px', background: 'linear-gradient(to top, rgba(10,12,16,0.9), rgba(10,12,16,0.2)), url("https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop") center/cover' }}>
                <span className="news-tag tag-cricket">Major Tournament</span>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>BPL 2026: Team Previews and Top Betting Markets</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem', maxWidth: '600px' }}>
                  The Bangladesh Premier League is heating up. We analyze the top contenders, key players to watch, and the most lucrative betting markets available on BIGWIN959 this season.
                </p>
                <Link href="/guides/how-to-bet-on-cricket" className="btn btn-primary" style={{ width: 'fit-content' }}>Read Analysis</Link>
              </div>
              
              {/* Sidebar Ticker Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="news-item">
                  <span className="news-tag tag-live" style={{ width: 'fit-content' }}>Live Update</span>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Ashes Day 3: Rain Delay Impacts Over/Under Lines</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>2 hours ago</p>
                </div>
                <div className="news-item">
                  <span className="news-tag tag-cricket" style={{ width: 'fit-content' }}>Transfer News</span>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Star All-Rounder Signs Record IPL Contract</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>5 hours ago</p>
                </div>
                <div className="news-item">
                  <span className="news-tag tag-casino" style={{ width: 'fit-content' }}>Platform Update</span>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Evolution Launches New Lightning Cricket Roulette</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Yesterday</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Advanced Market Coverage Bento Grid */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Elite <span className="gradient-text">Betting Infrastructure</span></h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                Engineered for speed, reliability, and maximum returns. Experience the difference of a truly premium platform.
              </p>
            </div>
            
            <div className="bento-grid">
              <div className="glass-card" style={{ padding: '2.5rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '1.5rem', color: '#3b82f6', border: '1px solid rgba(59, 130, 246, 0.2)' }}>⚡</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>In-Play Engine</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Our sub-second latency ensures you never miss a changing odd. Lock in your bets the exact moment the momentum shifts in a match.
                </p>
              </div>
              
              <div className="glass-card" style={{ padding: '2.5rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(139, 92, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '1.5rem', color: '#8b5cf6', border: '1px solid rgba(139, 92, 246, 0.2)' }}>🎰</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>High-RTP Slots</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  We curate games explicitly for their Return to Player metrics. Access premium slots from PG Soft and Pragmatic Play with guaranteed fairness.
                </p>
              </div>
              
              <div className="glass-card" style={{ padding: '2.5rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '1.5rem', color: '#06b6d4', border: '1px solid rgba(6, 182, 212, 0.2)' }}>🛡️</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Instant Settlements</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Automated local payment gateways mean your winnings hit your bKash or Nagad wallet in minutes, not days.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section" style={{ paddingBottom: '8rem' }}>
          <div className="container">
            <div className="glass-card" style={{ 
              textAlign: 'center', 
              padding: '5rem 2rem', 
              background: 'var(--gradient-primary)', 
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: 'var(--shadow-glow)'
            }}>
              <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>Elevate Your Game</h2>
              <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
                Download the official BIGWIN959 app for biometric login, push notifications on live matches, and an uncompromised mobile experience.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <Link href="/download" className="btn" style={{ background: '#ffffff', color: '#0f1115', boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }}>
                  Download App Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
