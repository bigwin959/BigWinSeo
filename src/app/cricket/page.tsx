import Link from 'next/link';
import type { Metadata } from 'next';
import { OFFICIAL_SITE_URL, SITE_URL } from '@/constants/site';
import cricket from '@/content/cricket.json';

const cg = cricket.cricketGuide;
const seo = cg.seo;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: '/cricket' },
  openGraph: { type: 'article', url: '/cricket', title: seo.title, description: seo.description },
  twitter: { title: seo.title, description: seo.description },
};

const TOC = [
  { id: 'intro', label: 'Cricket betting overview' },
  { id: 'providers', label: 'Sportsbook channels' },
  { id: 'bet-types', label: 'Bet types explained' },
  { id: 'how-to-bet', label: 'How to place a bet' },
  { id: 'events', label: 'Major events covered' },
  { id: 'settlement', label: 'Settlement rules' },
  { id: 'confusions', label: 'Confusing situations' },
  { id: 'trust', label: 'Trust & safety' },
  { id: 'faq', label: 'Cricket FAQ' },
];

const sectionStyle: React.CSSProperties = { padding: '3.5rem 0', scrollMarginTop: '5rem' };
const cardStyle: React.CSSProperties = { padding: '1.5rem' };

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Cricket', item: `${SITE_URL}/cricket` },
  ],
};

export default function CricketPage() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: seo.headline ?? seo.title,
    description: seo.description,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/cricket` },
    url: `${SITE_URL}/cricket`,
    author: { '@type': 'Organization', name: 'BIGWIN959', url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'BIGWIN959',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/icon.png` },
    },
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: cg.faq.items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };

  return (
    <div className="home-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <div className="mesh-bg" aria-hidden>
        <div className="mesh-blob blob-1" />
        <div className="mesh-blob blob-2" />
        <div className="mesh-blob blob-3" />
      </div>

      {/* HERO */}
      <section style={{ position: 'relative', zIndex: 1, padding: '5rem 0 3rem', textAlign: 'center' }}>
        <div className="container">
          <span className="news-tag tag-cricket" style={{ marginBottom: '1.25rem', display: 'inline-block' }}>Cricket Hub 2025</span>
          <h1 className="title-glow" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
            <span className="gradient-text">{cg.hero.title}</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '780px', margin: '0 auto 1rem' }}>{cg.hero.subtitle}</p>
          <p style={{ color: 'var(--text-muted)', maxWidth: '780px', margin: '0 auto 1rem' }}>{cg.hero.desc1}</p>
          <p style={{ color: 'var(--text-muted)', maxWidth: '780px', margin: '0 auto 1.5rem' }}>{cg.hero.desc2}</p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem', maxWidth: '780px', margin: '0 auto 2rem' }}>
            {cg.hero.items.map((item) => (
              <span key={item} className="news-tag" style={{ background: 'var(--surface-hover)', color: 'var(--text-secondary)' }}>{item}</span>
            ))}
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1.5rem' }}>{cg.hero.disclaimer}</p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={OFFICIAL_SITE_URL} className="btn btn-primary" rel="noopener noreferrer" target="_blank">{cg.cta.play}</a>
            <Link href="/download" className="btn btn-secondary">Download App</Link>
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
            {/* INTRO / OVERVIEW */}
            <section id="intro" style={sectionStyle}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', marginBottom: '0.75rem' }}>Cricket Betting Overview</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', fontSize: '1.05rem' }}>{cg.betTypes.intro}</p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>{cg.betTypes.intro2}</p>
              <blockquote className="glass-card" style={{ padding: '1.25rem 1.5rem', borderLeft: '4px solid var(--accent-cyan)', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                {cg.betTypes.disclaimer}
              </blockquote>
            </section>

            {/* PROVIDERS */}
            <section id="providers" style={sectionStyle}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', marginBottom: '0.75rem' }}>{cg.providers.title}</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem' }}>{cg.providers.subtitle}</p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {cg.providers.items.map((p) => (
                  <div key={p.name} className="glass-card" style={cardStyle}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>{p.name}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>{p.subtitle}</p>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>{p.desc}</p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '0.5rem' }}><strong>{cg.cards.strengths}</strong> {p.strengths.join(', ')}</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}><strong>{cg.cards.bestFor}</strong> {p.bestFor}</p>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{cg.providers.comparison.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>{cg.providers.comparison.subtitle}</p>
              <div className="glass-card" style={{ padding: 0, overflow: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                  <thead>
                    <tr style={{ background: 'var(--surface-hover)' }}>
                      <th style={{ textAlign: 'left', padding: '0.85rem 1rem', color: 'var(--text-primary)' }}>{cg.providers.comparison.headers.channel}</th>
                      <th style={{ textAlign: 'left', padding: '0.85rem 1rem', color: 'var(--text-primary)' }}>{cg.providers.comparison.headers.bestFor}</th>
                      <th style={{ textAlign: 'left', padding: '0.85rem 1rem', color: 'var(--text-primary)' }}>{cg.providers.comparison.headers.strength}</th>
                      <th style={{ textAlign: 'left', padding: '0.85rem 1rem', color: 'var(--text-primary)' }}>{cg.providers.comparison.headers.userType}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cg.providers.comparison.rows.map((r, i) => (
                      <tr key={i} style={{ borderTop: '1px solid var(--border-medium)' }}>
                        <td style={{ padding: '0.85rem 1rem', color: 'var(--text-primary)' }}>{r.channel}</td>
                        <td style={{ padding: '0.85rem 1rem', color: 'var(--text-secondary)' }}>{r.bestFor}</td>
                        <td style={{ padding: '0.85rem 1rem', color: 'var(--text-secondary)' }}>{r.strength}</td>
                        <td style={{ padding: '0.85rem 1rem', color: 'var(--text-secondary)' }}>{r.userType}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* BET TYPES */}
            <section id="bet-types" style={sectionStyle}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', marginBottom: '0.75rem' }}>{cg.betTypes.title}</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem' }}>{cg.betTypes.subtitle}</p>

              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {cg.betTypes.sections.map((s) => (
                  <div key={s.title} className="glass-card" style={cardStyle}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>{s.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1rem' }}>{s.subtitle}</p>
                    <ul style={{ listStyle: 'none', display: 'grid', gap: '0.6rem', paddingLeft: 0, marginBottom: '0.75rem' }}>
                      {s.markets.map((m) => (
                        <li key={m.name} style={{ borderLeft: '2px solid var(--accent-cyan)', paddingLeft: '0.85rem' }}>
                          <strong style={{ color: 'var(--text-primary)' }}>{m.name}.</strong>{' '}
                          <span style={{ color: 'var(--text-secondary)' }}>{m.desc}</span>
                        </li>
                      ))}
                    </ul>
                    {s.note && <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontStyle: 'italic' }}>{s.note}</p>}
                  </div>
                ))}
              </div>

              <div className="glass-card" style={{ ...cardStyle, marginTop: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{cg.betTypes.summary.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>{cg.betTypes.summary.text1}</p>
                {cg.betTypes.summary.text2 && <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>{cg.betTypes.summary.text2}</p>}
                {cg.betTypes.summary.text3 && <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>{cg.betTypes.summary.text3}</p>}
                {cg.betTypes.summary.disclaimer && <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', fontSize: '0.95rem' }}>{cg.betTypes.summary.disclaimer}</p>}
              </div>
            </section>

            {/* HOW TO BET (stepByStep) */}
            <section id="how-to-bet" style={sectionStyle}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', marginBottom: '0.5rem' }}>{cg.stepByStep.title}</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>{cg.stepByStep.subtitle}</p>
              <ol style={{ display: 'grid', gap: '0.75rem', paddingLeft: 0, listStyle: 'none' }}>
                {cg.stepByStep.items.map((s, i) => (
                  <li key={s.title} className="glass-card" style={{ padding: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent-cyan)', minWidth: '2.5rem' }}>0{i + 1}</span>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>{s.title}</h3>
                      <p style={{ color: 'var(--text-secondary)', margin: 0 }}>{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p style={{ color: 'var(--text-muted)', marginTop: '1.5rem' }} dangerouslySetInnerHTML={{ __html: cg.stepByStep.final }} />
            </section>

            {/* EVENTS */}
            <section id="events" style={sectionStyle}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', marginBottom: '0.75rem' }}>{cg.events.title}</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem' }}>{cg.events.subtitle}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                {cg.events.items.map((e) => {
                  const ev = e as { title?: string; name?: string; desc?: string; description?: string };
                  const heading = ev.title ?? ev.name ?? '';
                  const body = ev.desc ?? ev.description;
                  return (
                    <div key={heading} className="glass-card" style={{ padding: '1.25rem' }}>
                      <h4 style={{ fontSize: '1.05rem', marginBottom: '0.4rem' }}>{heading}</h4>
                      {body && <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{body}</p>}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SETTLEMENT */}
            <section id="settlement" style={sectionStyle}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', marginBottom: '0.5rem' }}>{cg.settlement.title}</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '0.75rem' }}>{cg.settlement.subtitle}</p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>{cg.settlement.desc}</p>

              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{cg.settlement.core.title}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                {cg.settlement.core.items.map((it) => (
                  <div key={it.title} className="glass-card" style={{ padding: '1.25rem' }}>
                    <h4 style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>{it.title}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{it.desc}</p>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{cg.settlement.status.title}</h3>
              <div className="glass-card" style={{ padding: 0, overflow: 'auto', marginBottom: '0.75rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                  <thead>
                    <tr style={{ background: 'var(--surface-hover)' }}>
                      <th style={{ textAlign: 'left', padding: '0.85rem 1rem', color: 'var(--text-primary)' }}>{cg.settlement.status.headers.status}</th>
                      <th style={{ textAlign: 'left', padding: '0.85rem 1rem', color: 'var(--text-primary)' }}>{cg.settlement.status.headers.meaning}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cg.settlement.status.rows.map((r) => (
                      <tr key={r.status} style={{ borderTop: '1px solid var(--border-medium)' }}>
                        <td style={{ padding: '0.85rem 1rem', color: 'var(--text-primary)' }}>{r.status}</td>
                        <td style={{ padding: '0.85rem 1rem', color: 'var(--text-secondary)' }}>{r.meaning}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '2rem' }}>{cg.settlement.status.note}</p>

              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{cg.settlement.matchWinner.title}</h3>
              <div className="glass-card" style={{ padding: 0, overflow: 'auto', marginBottom: '0.75rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                  <thead>
                    <tr style={{ background: 'var(--surface-hover)' }}>
                      <th style={{ textAlign: 'left', padding: '0.85rem 1rem', color: 'var(--text-primary)' }}>Scenario</th>
                      <th style={{ textAlign: 'left', padding: '0.85rem 1rem', color: 'var(--text-primary)' }}>Settlement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cg.settlement.matchWinner.rows.map((r, i) => (
                      <tr key={i} style={{ borderTop: '1px solid var(--border-medium)' }}>
                        <td style={{ padding: '0.85rem 1rem', color: 'var(--text-primary)' }}>{r.scenario}</td>
                        <td style={{ padding: '0.85rem 1rem', color: 'var(--text-secondary)' }}>{r.settlement}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '2rem' }}>{cg.settlement.matchWinner.tip}</p>

              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{cg.settlement.handicap.title}</h3>
              <div className="glass-card" style={{ padding: 0, overflow: 'auto', marginBottom: '0.75rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                  <thead>
                    <tr style={{ background: 'var(--surface-hover)' }}>
                      <th style={{ textAlign: 'left', padding: '0.85rem 1rem', color: 'var(--text-primary)' }}>Condition</th>
                      <th style={{ textAlign: 'left', padding: '0.85rem 1rem', color: 'var(--text-primary)' }}>Settlement Logic</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cg.settlement.handicap.rows.map((r, i) => (
                      <tr key={i} style={{ borderTop: '1px solid var(--border-medium)' }}>
                        <td style={{ padding: '0.85rem 1rem', color: 'var(--text-primary)' }}>{r.condition}</td>
                        <td style={{ padding: '0.85rem 1rem', color: 'var(--text-secondary)' }}>{r.logic}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '2rem' }}>{cg.settlement.handicap.note}</p>

              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{cg.settlement.dispute.title}</h3>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2rem', display: 'grid', gap: '0.4rem' }}>
                {cg.settlement.dispute.items.map((it: string) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>

              <div className="glass-card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent-cyan)' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.6rem' }}>{cg.settlement.reminder.title}</h3>
                <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', display: 'grid', gap: '0.4rem' }}>
                  {cg.settlement.reminder.items.map((it: string) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* CONFUSIONS */}
            <section id="confusions" style={sectionStyle}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', marginBottom: '0.5rem' }}>{cg.confusions.title}</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>{cg.confusions.subtitle}</p>

              <div style={{ display: 'grid', gap: '1rem' }}>
                {cg.confusions.items.map((it) => (
                  <div key={it.title} className="glass-card" style={cardStyle}>
                    <h3 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>{it.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '0.6rem' }}>{it.desc}</p>
                    {it.example && <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '0.6rem' }}><em>{it.example}</em></p>}
                    {it.action && <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}><strong>Action:</strong> {it.action}</p>}
                  </div>
                ))}
              </div>
            </section>

            {/* TRUST */}
            <section id="trust" style={sectionStyle}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', marginBottom: '0.5rem' }}>{cg.trust.title}</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>{cg.trust.subtitle}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                {cg.trust.items.map((it) => (
                  <div key={it.title} className="glass-card" style={{ padding: '1.25rem' }}>
                    <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{it.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{it.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" style={sectionStyle}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', marginBottom: '0.5rem' }}>{cg.faq.title}</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>{cg.faq.subtitle}</p>
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                {cg.faq.items.map((it) => (
                  <details key={it.q} className="glass-card" style={{ padding: '1.25rem 1.5rem' }}>
                    <summary style={{ cursor: 'pointer', fontWeight: 600, fontSize: '1.05rem' }}>{it.q}</summary>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', lineHeight: 1.7 }}>{it.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* FINAL CTA */}
            <section style={sectionStyle}>
              <div className="glass-card" style={{ padding: '3rem 2rem', textAlign: 'center', background: 'var(--gradient-primary)', border: '1px solid rgba(255,255,255,0.2)', boxShadow: 'var(--shadow-glow)' }}>
                <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#fff', marginBottom: '0.5rem' }}>{cg.cta.title}</h2>
                <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '620px', margin: '0 auto 2rem' }}>{cg.cta.subtitle}</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href={OFFICIAL_SITE_URL} className="btn" style={{ background: '#fff', color: '#0f1115' }} rel="noopener noreferrer" target="_blank">{cg.cta.play}</a>
                  <Link href="/download" className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#fff' }}>{cg.cta.deposit}</Link>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
