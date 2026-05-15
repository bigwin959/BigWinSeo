"use client";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1.25rem var(--spacing-md)',
      borderBottom: '1px solid var(--border-medium)',
      background: 'rgba(10, 12, 16, 0.85)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)'
    }}>
      <div style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.05em', fontFamily: 'Outfit, sans-serif' }}>
        <Link href="/" className="gradient-text" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '2rem' }}>⚡</span> BIGWIN959
        </Link>
      </div>
      
      <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        <Link href="#" style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--text-secondary)', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>Login</Link>
        <Link href="/affiliate" style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--text-secondary)', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>Affiliate</Link>
        <Link href="/download" style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--text-secondary)', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>Download APP</Link>
        <Link href="/guides" style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--text-secondary)', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>Cricket</Link>
        
        <Link href="/download" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
          Play Now
        </Link>
      </div>
    </nav>
  );
}
