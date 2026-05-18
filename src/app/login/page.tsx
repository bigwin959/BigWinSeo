import type { Metadata } from 'next';
import Link from 'next/link';
import { OFFICIAL_SITE_URL } from '@/constants/site';

export const metadata: Metadata = {
  title: 'Login',
  description:
    'Sign in to your BIGWIN959 account on the official secure portal. Always verify the URL before entering your password.',
  alternates: { canonical: '/login' },
  robots: { index: false, follow: true },
  openGraph: {
    type: 'website',
    url: '/login',
    title: 'Login — BIGWIN959',
    description: 'Account login happens on the official secure site.',
  },
  twitter: {
    title: 'Login — BIGWIN959',
    description: 'Account login happens on the official secure site.',
  },
};

export default function LoginPage() {
  return (
    <div className="container page-shell animate-fade-in">
      <div className="glass-card" style={{ maxWidth: '520px', margin: '0 auto', padding: 'var(--spacing-lg)', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.25rem', marginBottom: '0.75rem' }}>
          Sign in to <span className="gradient-text">BIGWIN959</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem' }}>
          Account login and registration happen on our official secure site. This page is only a gateway from our information site.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a href={OFFICIAL_SITE_URL} className="btn btn-primary" rel="noopener noreferrer" target="_blank">
            Open official login
          </a>
          <Link href="/download" className="btn btn-secondary">
            Get the app first
          </Link>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '1.5rem' }}>
          Always check the URL is the official domain before entering your password.
        </p>
      </div>
    </div>
  );
}
