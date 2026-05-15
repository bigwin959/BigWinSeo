import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1.5rem var(--spacing-md)',
      borderBottom: '1px solid var(--border)',
      background: 'rgba(15, 17, 21, 0.8)',
      backdropFilter: 'blur(10px)',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.05em' }}>
        <Link href="/" className="gradient-text">BIGWIN959</Link>
      </div>
      
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link href="/services" style={{ fontWeight: 500, fontSize: '0.95rem' }}>Providers</Link>
        <Link href="/blog" style={{ fontWeight: 500, fontSize: '0.95rem' }}>Guides</Link>
        <Link href="/about" style={{ fontWeight: 500, fontSize: '0.95rem' }}>About Us</Link>
        <Link href="/download" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem' }}>
          Download App
        </Link>
      </div>
    </nav>
  );
}
