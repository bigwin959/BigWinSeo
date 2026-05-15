import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Download App',
  description: 'Download the BIGWIN959 Android application for faster loading and smoother gameplay.',
};

export default function DownloadPage() {
  return (
    <div className="container animate-fade-in" style={{ paddingTop: 'var(--spacing-xl)', textAlign: 'center' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Get the <span className="gradient-text">BIGWIN959 App</span></h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
          Take your gaming everywhere. Access sports, live casino, and account features more quickly and smoothly than using a browser.
        </p>

        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div className="glass-card" style={{ flex: '1', minWidth: '250px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Android APK</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Optimized for all Android devices. Faster loading, biometric login, and smoother gameplay.</p>
            <ul style={{ color: 'var(--text-secondary)', textAlign: 'left', marginBottom: '2rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
              <li>Download the APK file directly</li>
              <li>Enable "Allow from this source" in settings</li>
              <li>Install and log in instantly</li>
            </ul>
            <a href="https://bigwin959.vip" className="btn btn-primary" style={{ width: '100%', display: 'block', textAlign: 'center' }}>Download APK</a>
          </div>
          
          <div className="glass-card" style={{ flex: '1', minWidth: '250px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>iOS / Desktop</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Currently optimized for mobile browser. No separate app needed for iPhone or PC.</p>
            <ul style={{ color: 'var(--text-secondary)', textAlign: 'left', marginBottom: '2rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
              <li>Open Safari or Chrome</li>
              <li>Visit BIGWIN959.vip</li>
              <li>Add shortcut to Home Screen</li>
            </ul>
            <a href="https://bigwin959.vip" className="btn btn-secondary" style={{ width: '100%', display: 'block', textAlign: 'center' }}>Play in Browser</a>
          </div>
        </div>
      </div>
    </div>
  );
}
