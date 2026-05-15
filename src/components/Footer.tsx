import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      padding: 'var(--spacing-xl) var(--spacing-md) var(--spacing-md)',
      borderTop: '1px solid var(--border-medium)',
      background: 'var(--surface)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Subtle Glow at the bottom */}
      <div style={{ position: 'absolute', bottom: '-50px', left: '50%', transform: 'translateX(-50%)', width: '60vw', height: '100px', background: 'var(--accent-blue)', filter: 'blur(100px)', opacity: 0.1, zIndex: 0 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
          
          <div style={{ gridColumn: 'span 2' }}>
            <h3 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>BIGWIN959</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '400px', fontSize: '1.05rem' }}>
              Asia's premier destination for live cricket betting, premium casino entertainment, and instant local settlements. Play responsibly.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {/* Social Placeholders */}
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: '1px solid var(--border-light)' }}>FB</div>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: '1px solid var(--border-light)' }}>TG</div>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: '1px solid var(--border-light)' }}>TW</div>
            </div>
          </div>

          <div>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '1.2rem' }}>Markets</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-secondary)' }}>
              <li><Link href="/services" style={{ transition: 'color 0.2s' }}>Sports Exchange</Link></li>
              <li><Link href="/services" style={{ transition: 'color 0.2s' }}>Live Casino</Link></li>
              <li><Link href="/services" style={{ transition: 'color 0.2s' }}>Slot Games</Link></li>
              <li><Link href="/services" style={{ transition: 'color 0.2s' }}>Crash Games (Aviator)</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '1.2rem' }}>Intelligence</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-secondary)' }}>
              <li><Link href="/guides" style={{ transition: 'color 0.2s' }}>Cricket News</Link></li>
              <li><Link href="/guides" style={{ transition: 'color 0.2s' }}>Betting Strategies</Link></li>
              <li><Link href="/guides/how-to-bet-on-cricket" style={{ transition: 'color 0.2s' }}>How to Bet</Link></li>
              <li><Link href="/about" style={{ transition: 'color 0.2s' }}>About BIGWIN959</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '1.2rem' }}>Support</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-secondary)' }}>
              <li><Link href="#" style={{ transition: 'color 0.2s' }}>24/7 Live Chat</Link></li>
              <li><Link href="#" style={{ transition: 'color 0.2s' }}>Deposit Guide</Link></li>
              <li><Link href="#" style={{ transition: 'color 0.2s' }}>Withdrawal Policy</Link></li>
              <li><Link href="#" style={{ transition: 'color 0.2s' }}>Terms of Service</Link></li>
            </ul>
          </div>

        </div>
        
        <div style={{ borderTop: '1px solid var(--border-medium)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          <p>&copy; {new Date().getFullYear()} BIGWIN959. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>18+ Play Responsibly</span>
            <span>Fully Licensed & Regulated</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
