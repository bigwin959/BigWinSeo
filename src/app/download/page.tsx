import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Download App',
  description: 'Download the BIGWINSEO analytics application.',
};

export default function DownloadPage() {
  return (
    <div className="container animate-fade-in" style={{ paddingTop: 'var(--spacing-xl)', textAlign: 'center' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Get the <span className="gradient-text">BIGWINSEO App</span></h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
          Take your SEO data everywhere. Monitor your rankings, audit reports, and competitor analysis directly from your mobile device or desktop.
        </p>

        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div className="glass-card" style={{ flex: '1', minWidth: '250px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Desktop</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Available for Windows and macOS.</p>
            <button className="btn btn-primary" style={{ width: '100%' }}>Download for Windows</button>
            <button className="btn btn-secondary" style={{ width: '100%', marginTop: '1rem' }}>Download for Mac</button>
          </div>
          
          <div className="glass-card" style={{ flex: '1', minWidth: '250px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Mobile</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Available for iOS and Android.</p>
            <button className="btn btn-primary" style={{ width: '100%' }}>App Store</button>
            <button className="btn btn-secondary" style={{ width: '100%', marginTop: '1rem' }}>Google Play</button>
          </div>
        </div>
      </div>
    </div>
  );
}
