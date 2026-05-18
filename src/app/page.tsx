import Link from 'next/link';
import type { Metadata } from 'next';
import { OFFICIAL_SITE_URL, SITE_URL } from '@/constants/site';
import home from '@/content/home.json';

const seo = home.homePage.seo;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: '/' },
  openGraph: { type: 'website', url: '/', title: seo.title, description: seo.description },
  twitter: { title: seo.title, description: seo.description },
};

const TOC = [
  { id: 'about', label: 'Welcome' },
  { id: 'why-popular', label: 'Why BIGWIN959 is popular' },
  { id: 'games', label: 'Games & markets' },
  { id: 'bonuses', label: 'Bonuses & promotions' },
  { id: 'register', label: 'How to register' },
  { id: 'payments', label: 'Payment methods' },
  { id: 'smart-gaming', label: 'Smart gaming tips' },
  { id: 'responsible', label: 'Responsible gaming' },
  { id: 'recommended', label: 'Recommended categories' },
  { id: 'faq', label: 'FAQ' },
];

const cardStyle: React.CSSProperties = { padding: '1.75rem' };
const sectionStyle: React.CSSProperties = { padding: '3.5rem 0', scrollMarginTop: '5rem' };

const webPageLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: seo.title,
  description: seo.description,
  url: SITE_URL,
  inLanguage: 'en',
  isPartOf: { '@type': 'WebSite', name: 'BIGWIN959', url: SITE_URL },
};

export default function Home() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: home.faq.items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };

  return (
    <div className="home-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <div className="mesh-bg" aria-hidden>
        <div className="mesh-blob blob-1" />
        <div className="mesh-blob blob-2" />
        <div className="mesh-blob blob-3" />
      </div>

      {/* HERO */}
      <section id="about" style={{ ...sectionStyle, position: 'relative', zIndex: 1, paddingTop: '5rem', paddingBottom: '4rem', textAlign: 'center' }}>
        <div className="container">
          <div className="news-tag tag-live" style={{ marginBottom: '1.5rem' }}>{home.hero.officialBadge}</div>
          <h1 className="title-glow" style={{ fontSize: 'clamp(2.75rem, 7vw, 5.5rem)', lineHeight: 1.05, marginBottom: '1.25rem' }}>
            {home.hero.mainHeading1}<br />
            <span className="gradient-text">{home.hero.mainHeading2}</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '740px', margin: '0 auto 1.5rem' }}>
            {home.hero.subtitle}. {home.hero.description}.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
            {home.hero.disclaimer.text}{' '}
            <a href={OFFICIAL_SITE_URL} rel="noopener noreferrer" target="_blank" className="link-accent">{home.hero.disclaimer.link}</a>
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={OFFICIAL_SITE_URL} className="btn btn-primary" rel="noopener noreferrer" target="_blank">{home.hero.cta.official}</a>
            <Link href="/download" className="btn btn-secondary">{home.hero.cta.download}</Link>
          </div>

          <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', textAlign: 'left' }}>
            <div className="glass-card" style={{ padding: '1.25rem' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>{home.hero.features.deposits.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{home.hero.features.deposits.items.join(' • ')}</p>
            </div>
            <div className="glass-card" style={{ padding: '1.25rem' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>{home.hero.features.games.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{home.hero.features.games.items.join(' • ')}</p>
            </div>
            <div className="glass-card" style={{ padding: '1.25rem' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>{home.hero.features.security.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{home.hero.features.security.desc}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="home-body">
          <aside className="home-toc" aria-label="On this page">
            <h2 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '1rem' }}>On this page</h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {TOC.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{t.label}</a>
                </li>
              ))}
            </ul>
          </aside>

          <main className="home-main">
            {/* WHY POPULAR */}
            <section id="why-popular" style={sectionStyle}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', marginBottom: '0.75rem' }}>{home.whyPopular.title}</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem' }}>{home.whyPopular.subtitle}</p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                {Object.values(home.whyPopular.cards).map((card) => (
                  <div key={card.title} className="glass-card" style={cardStyle}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{card.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>{card.desc}</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{card.detail}</p>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{home.whyPopular.additional.title}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                {home.whyPopular.additional.items.map((it) => (
                  <div key={it.title} className="glass-card" style={{ padding: '1.25rem' }}>
                    <h4 style={{ fontSize: '1.05rem', marginBottom: '0.4rem' }}>{it.title}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{it.desc}</p>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {home.whyPopular.featureChips.map((chip) => (
                  <span key={chip} className="news-tag" style={{ background: 'var(--surface-hover)', color: 'var(--text-secondary)' }}>{chip}</span>
                ))}
              </div>
            </section>

            {/* GAMES */}
            <section id="games" style={sectionStyle}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', marginBottom: '0.75rem' }}>Games & Betting Markets</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem' }}>From cricket exchanges to live dealer tables, here&apos;s the lay of the land for what you can bet on at BIGWIN959.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {Object.values(home.games).map((g) => (
                  <div key={g.title} className="glass-card" style={cardStyle}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{g.title}</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>{g.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* BONUSES */}
            <section id="bonuses" style={sectionStyle}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', marginBottom: '0.75rem' }}>{home.bonuses.title}</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem' }}>{home.bonuses.subtitle}</p>

              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Bonus types</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                {home.bonuses.types.map((t) => (
                  <div key={t.title} className="glass-card" style={{ padding: '1.25rem' }}>
                    <h4 style={{ fontSize: '1.05rem', marginBottom: '0.4rem' }}>{t.title}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{t.desc}</p>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>How to use them</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                {home.bonuses.strategies.map((s) => (
                  <div key={s.title} className="glass-card" style={cardStyle}>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.6rem' }}>{s.title}</h4>
                    <p style={{ color: 'var(--text-secondary)' }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* REGISTER */}
            <section id="register" style={sectionStyle}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', marginBottom: '1.5rem' }}>{home.register.title}</h2>
              <ol style={{ display: 'grid', gap: '0.75rem', paddingLeft: 0, listStyle: 'none', counterReset: 'step' }}>
                {home.register.steps.map((step, i) => (
                  <li key={step} className="glass-card" style={{ padding: '1.1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent-cyan)', minWidth: '2rem' }}>0{i + 1}</span>
                    <span style={{ color: 'var(--text-secondary)' }}>{step}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* PAYMENTS */}
            <section id="payments" style={sectionStyle}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', marginBottom: '0.75rem' }}>{home.payments.title}</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem' }}>{home.payments.subtitle}</p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
                {home.payments.features.map((f) => (
                  <div key={f.title} className="glass-card" style={{ padding: '1.1rem' }}>
                    <h4 style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>{f.title}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{f.desc}</p>
                  </div>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Bangladesh methods</h3>
                  <div style={{ display: 'grid', gap: '0.75rem' }}>
                    {home.payments.methods.bd.map((m) => (
                      <div key={m.name} className="glass-card" style={{ padding: '1rem 1.25rem' }}>
                        <strong style={{ color: 'var(--text-primary)' }}>{m.name}</strong>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>{m.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Myanmar methods</h3>
                  <div style={{ display: 'grid', gap: '0.75rem' }}>
                    {home.payments.methods.mm.map((m) => (
                      <div key={m.name} className="glass-card" style={{ padding: '1rem 1.25rem' }}>
                        <strong style={{ color: 'var(--text-primary)' }}>{m.name}</strong>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>{m.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* SMART GAMING */}
            <section id="smart-gaming" style={sectionStyle}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', marginBottom: '0.75rem' }}>{home.smartGaming.title}</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem' }}>{home.smartGaming.subtitle}</p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {Object.values(home.smartGaming.cards).map((c) => (
                  <div key={c.title} className="glass-card" style={cardStyle}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.6rem' }}>{c.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>{c.desc}</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{c.detail}</p>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{home.smartGaming.proTips.title}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                {home.smartGaming.proTips.items.map((t) => (
                  <div key={t.title} className="glass-card" style={{ padding: '1.25rem' }}>
                    <h4 style={{ fontSize: '1.05rem', marginBottom: '0.4rem' }}>{t.title}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{t.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* RESPONSIBLE GAMING */}
            <section id="responsible" style={sectionStyle}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', marginBottom: '0.75rem' }}>{home.responsibleGaming.title}</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem' }}>{home.responsibleGaming.subtitle}</p>

              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{home.responsibleGaming.tools.title}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
                {home.responsibleGaming.tools.items.map((t) => (
                  <div key={t.title} className="glass-card" style={{ padding: '1.25rem' }}>
                    <h4 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{t.title}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{t.desc}</p>
                  </div>
                ))}
              </div>

              <blockquote className="glass-card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent-cyan)', marginBottom: '2rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                {home.responsibleGaming.reminder}
              </blockquote>

              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{home.responsibleGaming.security.title}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
                {home.responsibleGaming.security.items.map((t) => (
                  <div key={t.title} className="glass-card" style={{ padding: '1.25rem' }}>
                    <h4 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{t.title}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{t.desc}</p>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{home.responsibleGaming.bestPractices.title}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                {home.responsibleGaming.bestPractices.items.map((t) => (
                  <div key={t.title} className="glass-card" style={{ padding: '1.25rem' }}>
                    <h4 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{t.title}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{t.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* RECOMMENDED */}
            <section id="recommended" style={sectionStyle}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', marginBottom: '0.75rem' }}>{home.recommended.title}</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem' }}>Cricket guides, slot picks, and the live-table classics our readers explore most.</p>

              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Cricket guides</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                {home.recommended.cricketGuide.items.map((c) => (
                  <Link key={c.title} href="/cricket" className="glass-card" style={{ padding: '1.25rem', display: 'block' }}>
                    <h4 style={{ fontSize: '1.05rem', marginBottom: '0.4rem' }}>{c.title}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>{c.desc}</p>
                    <span className="link-accent" style={{ fontSize: '0.9rem' }}>Read guide &rarr;</span>
                  </Link>
                ))}
              </div>

              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Top categories</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                {home.recommended.categories.map((c) => (
                  <div key={c.title} className="glass-card" style={{ padding: '1.25rem' }}>
                    <h4 style={{ fontSize: '1.05rem', marginBottom: '0.4rem' }}>{c.title}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{c.desc}</p>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{home.recommended.liveTitle}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                {home.recommended.liveCategories.map((c) => (
                  <div key={c.title} className="glass-card" style={{ padding: '1.25rem' }}>
                    <h4 style={{ fontSize: '1.05rem', marginBottom: '0.4rem' }}>{c.title}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{c.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" style={sectionStyle}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', marginBottom: '0.75rem' }}>{home.faq.title}</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem' }}>{home.faq.subtitle}</p>

              <div style={{ display: 'grid', gap: '0.75rem' }}>
                {home.faq.items.map((it) => (
                  <details key={it.q} className="glass-card" style={{ padding: '1.25rem 1.5rem' }}>
                    <summary style={{ cursor: 'pointer', fontWeight: 600, fontSize: '1.05rem', color: 'var(--text-primary)' }}>{it.q}</summary>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', lineHeight: 1.7 }}>{it.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* FINAL CTA */}
            <section style={sectionStyle}>
              <div className="glass-card" style={{ padding: '3rem 2rem', textAlign: 'center', background: 'var(--gradient-primary)', border: '1px solid rgba(255,255,255,0.2)', boxShadow: 'var(--shadow-glow)' }}>
                <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#fff', marginBottom: '0.75rem' }}>{home.help.title}</h2>
                <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '620px', margin: '0 auto 2rem' }}>{home.help.desc}</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href={OFFICIAL_SITE_URL} className="btn" style={{ background: '#fff', color: '#0f1115' }} rel="noopener noreferrer" target="_blank">{home.cta.downloadApp}</a>
                  <Link href="/cricket" className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#fff' }}>Read cricket guide</Link>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
