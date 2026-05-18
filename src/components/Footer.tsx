import Link from 'next/link';
import { OFFICIAL_SITE_URL } from '@/constants/site';

export default function Footer() {
  return (
    <footer
      className="footer"
      style={{
        padding: 'var(--spacing-xl) var(--spacing-md) var(--spacing-md)',
        borderTop: '1px solid var(--border-medium)',
        background: 'var(--surface)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          bottom: '-50px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60vw',
          height: '100px',
          background: 'var(--accent-blue)',
          filter: 'blur(100px)',
          opacity: 0.1,
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
          }}
        >
          <div>
            <h3
              className="gradient-text"
              style={{
                fontSize: '2rem',
                marginBottom: '1rem',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 800,
              }}
            >
              BIGWIN959
            </h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '420px', fontSize: '1rem' }}>
              Independent guide to BIGWIN959 for players in Bangladesh and Myanmar. Cricket
              betting, casino, app download, and affiliate program. 18+. Play responsibly.
            </p>
          </div>

          <div>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '1.25rem', fontSize: '1.1rem' }}>
              Pages
            </h4>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
                color: 'var(--text-secondary)',
              }}
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/cricket">Cricket</Link>
              </li>
              <li>
                <Link href="/affiliate">Affiliate</Link>
              </li>
              <li>
                <Link href="/download">Download App</Link>
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '1.25rem', fontSize: '1.1rem' }}>
              Official platform
            </h4>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
                color: 'var(--text-secondary)',
              }}
            >
              <li>
                <a href={OFFICIAL_SITE_URL} rel="noopener noreferrer" target="_blank">
                  Play on BIGWIN959.vip
                </a>
              </li>
              <li>
                <a href={OFFICIAL_SITE_URL} rel="noopener noreferrer" target="_blank">
                  24/7 live chat
                </a>
              </li>
              <li>
                <a href={OFFICIAL_SITE_URL} rel="noopener noreferrer" target="_blank">
                  Deposit & withdrawal
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid var(--border-medium)',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
            color: 'var(--text-muted)',
            fontSize: '0.85rem',
          }}
        >
          <p>&copy; {new Date().getFullYear()} BIGWIN959. Independent informational guide.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>18+ Play Responsibly</span>
            <span>Always verify the official URL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
