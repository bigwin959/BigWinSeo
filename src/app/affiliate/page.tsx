import Link from 'next/link';
import type { Metadata } from 'next';
import { OFFICIAL_SITE_URL, SITE_URL } from '@/constants/site';
import data from '@/content/affiliate.json';

const ap = data.affiliatePage;
const seo = ap.seo;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  alternates: { canonical: '/affiliate' },
  openGraph: { type: 'website', url: '/affiliate', title: seo.title, description: seo.description },
  twitter: { title: seo.title, description: seo.description },
};

const TOC = [
  { id: 'what-is', label: 'What is an affiliate program' },
  { id: 'commission', label: 'Commission structure' },
  { id: 'multi-level', label: 'Multi-level system' },
  { id: 'opportunities', label: 'Promotional opportunities' },
  { id: 'get-started', label: 'How to get started' },
  { id: 'earning', label: 'Earning potential' },
  { id: 'who-can-join', label: 'Who can join' },
];

const sectionStyle: React.CSSProperties = { padding: '3.5rem 0', scrollMarginTop: '5rem' };
const cardStyle: React.CSSProperties = { padding: '1.5rem' };

const TIERS = ['bronze', 'silver', 'gold', 'platinum'] as const;

export default function AffiliatePage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Affiliate', item: `${SITE_URL}/affiliate` },
    ],
  };

  return (
    <div className="home-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <div className="mesh-bg" aria-hidden>
        <div className="mesh-blob blob-1" />
        <div className="mesh-blob blob-2" />
        <div className="mesh-blob blob-3" />
      </div>

      {/* HERO */}
      <section style={{ position: 'relative', zIndex: 1, padding: '5rem 0 3rem', textAlign: 'center' }}>
        <div className="container">
          <span className="news-tag tag-casino" style={{ marginBottom: '1.25rem', display: 'inline-block' }}>{ap.hero.badge}</span>
          <h1 className="title-glow" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
            <span className="gradient-text">{ap.hero.title}</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '780px', margin: '0 auto 2rem' }}>{ap.hero.subtitle}</p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <a href={OFFICIAL_SITE_URL} className="btn btn-primary" rel="noopener noreferrer" target="_blank">{ap.hero.cta.join}</a>
            <a href="#what-is" className="btn btn-secondary">{ap.hero.cta.learnMore}</a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', textAlign: 'left', maxWidth: '900px', margin: '0 auto' }}>
            {Object.values(ap.hero.stats).map((s) => (
              <div key={s.label} className="glass-card" style={{ padding: '1.25rem' }}>
                <div style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>{s.label}</div>
                <div style={{ color: 'var(--text-primary)', fontSize: '1.05rem', fontWeight: 600 }}>{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="home-body">
          <aside className="home-toc" aria-label="On this page">
            <h2 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '1rem' }}>On this page</h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {TOC.map((t) => (
                <li key={t.id}><a href={`#${t.id}`}>{t.label}</a></li>
              ))}
            </ul>
          </aside>

          <main className="home-main">
            {/* WHAT IS */}
            <section id="what-is" style={sectionStyle}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', marginBottom: '1.5rem' }}>{ap.whatIs.title}</h2>
              {ap.whatIs.content.map((para, i) => (
                <p key={i} style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', fontSize: '1.05rem' }}>{para}</p>
              ))}
            </section>

            {/* COMMISSION STRUCTURE */}
            <section id="commission" style={sectionStyle}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', marginBottom: '0.5rem' }}>{ap.commission.title}</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem' }}>{ap.commission.subtitle}</p>

              {(['invitation', 'accumulative', 'deposit', 'turnover'] as const).map((key) => {
                const c = ap.commission[key] as {
                  title: string;
                  desc: string[];
                  example?: { title?: string; items?: string[]; text?: string; rate?: string; result?: string };
                };
                return (
                  <div key={key} className="glass-card" style={{ ...cardStyle, marginBottom: '1.25rem' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{c.title}</h3>
                    {c.desc.map((p, i) => (
                      <p key={i} style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>{p}</p>
                    ))}
                    {c.example && (
                      <div style={{ borderTop: '1px solid var(--border-medium)', paddingTop: '1rem', marginTop: '0.5rem' }}>
                        {c.example.title && <strong style={{ color: 'var(--text-primary)' }}>{c.example.title}</strong>}
                        {c.example.items && (
                          <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem', color: 'var(--text-secondary)', display: 'grid', gap: '0.3rem' }}>
                            {c.example.items.map((it) => <li key={it}>{it}</li>)}
                          </ul>
                        )}
                        {c.example.text && <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>{c.example.text}</p>}
                        {c.example.rate && <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.25rem' }}>{c.example.rate}</p>}
                        {c.example.result && <p style={{ color: 'var(--accent-cyan)', fontWeight: 600, marginTop: '0.25rem' }}>{c.example.result}</p>}
                      </div>
                    )}
                  </div>
                );
              })}
            </section>

            {/* MULTI-LEVEL */}
            <section id="multi-level" style={sectionStyle}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', marginBottom: '0.5rem' }}>{ap.multiLevel.title}</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem' }}>{ap.multiLevel.subtitle}</p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                {TIERS.map((tier) => (
                  <div key={tier} className="glass-card" style={{ padding: '1.5rem' }}>
                    <div style={{ textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.8rem', color: 'var(--accent-cyan)', marginBottom: '0.4rem' }}>
                      {ap.multiLevel.tiers[tier]}
                    </div>
                    <div style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: 600 }}>
                      {ap.multiLevel.requirements[tier]}
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                      {ap.multiLevel.benefits.tierBenefits[tier].map((b) => <li key={b}>• {b}</li>)}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="glass-card" style={cardStyle}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{ap.multiLevel.benefits.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>{ap.multiLevel.benefits.desc}</p>
                <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', display: 'grid', gap: '0.3rem' }}>
                  {ap.multiLevel.benefits.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </div>
            </section>

            {/* OPPORTUNITIES */}
            <section id="opportunities" style={sectionStyle}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', marginBottom: '0.5rem' }}>{ap.opportunities.title}</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem' }}>{ap.opportunities.subtitle}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                {ap.opportunities.items.map((it) => (
                  <div key={it.title} className="glass-card" style={{ padding: '1.25rem' }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{it.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{it.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* GET STARTED */}
            <section id="get-started" style={sectionStyle}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', marginBottom: '0.5rem' }}>{ap.getStarted.title}</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem' }}>{ap.getStarted.subtitle}</p>

              <ol style={{ display: 'grid', gap: '0.75rem', paddingLeft: 0, listStyle: 'none', marginBottom: '2rem' }}>
                {ap.getStarted.steps.map((s, i) => (
                  <li key={s.title} className="glass-card" style={{ padding: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent-cyan)', minWidth: '2.5rem' }}>0{i + 1}</span>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>{s.title}</h3>
                      <p style={{ color: 'var(--text-secondary)', margin: 0 }}>{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="glass-card" style={cardStyle}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{ap.getStarted.included.title}</h3>
                <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', display: 'grid', gap: '0.3rem' }}>
                  {ap.getStarted.included.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </div>
            </section>

            {/* EARNING POTENTIAL */}
            <section id="earning" style={sectionStyle}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', marginBottom: '1.5rem' }}>{ap.earningPotential.title}</h2>
              {ap.earningPotential.desc.map((p, i) => (
                <p key={i} style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', fontSize: '1.05rem' }}>{p}</p>
              ))}
              <div className="glass-card" style={cardStyle}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>{ap.earningPotential.examples.title}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                  {ap.earningPotential.examples.items.map((e) => (
                    <div key={e.label} style={{ padding: '1rem', borderLeft: '3px solid var(--accent-cyan)', background: 'rgba(255,255,255,0.02)' }}>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>{e.label}</div>
                      <div style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 600 }}>{e.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* WHO CAN JOIN */}
            <section id="who-can-join" style={sectionStyle}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', marginBottom: '0.5rem' }}>{ap.whoCanJoin.title}</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem' }}>{ap.whoCanJoin.subtitle}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                {ap.whoCanJoin.items.map((it) => (
                  <div key={it.title} className="glass-card" style={{ padding: '1.25rem' }}>
                    <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{it.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{it.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FINAL CTA */}
            <section style={sectionStyle}>
              <div className="glass-card" style={{ padding: '3rem 2rem', textAlign: 'center', background: 'var(--gradient-primary)', border: '1px solid rgba(255,255,255,0.2)', boxShadow: 'var(--shadow-glow)' }}>
                <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#fff', marginBottom: '0.5rem' }}>{ap.cta.title}</h2>
                <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '620px', margin: '0 auto 1.5rem' }}>{ap.cta.subtitle}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
                  {ap.cta.features.map((f) => (
                    <span key={f} className="news-tag" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)' }}>{f}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href={OFFICIAL_SITE_URL} className="btn" style={{ background: '#fff', color: '#0f1115' }} rel="noopener noreferrer" target="_blank">{ap.cta.buttons.join}</a>
                  <Link href="/login" className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#fff' }}>{ap.cta.buttons.contact}</Link>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
