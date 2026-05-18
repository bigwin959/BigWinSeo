import Link from 'next/link';
import type { Metadata } from 'next';
import { OFFICIAL_SITE_URL, SITE_URL } from '@/constants/site';
import data from '@/content/download.json';

const ad = data.appDownload;
const seo = ad.seo;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: '/download' },
  openGraph: { type: 'website', url: '/download', title: seo.title, description: seo.description },
  twitter: { title: seo.title, description: seo.description },
};

const TOC = [
  { id: 'why-use', label: 'Why use the app' },
  { id: 'android', label: 'Android install steps' },
  { id: 'ios', label: 'iPhone / iPad' },
  { id: 'pc', label: 'PC or laptop' },
  { id: 'update', label: 'How to update' },
  { id: 'safety', label: 'Safety tips' },
  { id: 'troubleshooting', label: 'Troubleshooting' },
  { id: 'faq', label: 'FAQ' },
];

const sectionStyle: React.CSSProperties = { padding: '3.5rem 0', scrollMarginTop: '5rem' };
const cardStyle: React.CSSProperties = { padding: '1.5rem' };

const ANDROID_STEPS = [
  { ...ad.androidSteps.step1, items: undefined },
  { ...ad.androidSteps.step2, items: [ad.androidSteps.step2.item1, ad.androidSteps.step2.item2] },
  ad.androidSteps.step3,
  { ...ad.androidSteps.step4, items: [
    ad.androidSteps.step4.item1, ad.androidSteps.step4.item2,
    ad.androidSteps.step4.item3, ad.androidSteps.step4.item4, ad.androidSteps.step4.item5,
  ] },
  { ...ad.androidSteps.step5, items: [ad.androidSteps.step5.item1, ad.androidSteps.step5.item2, ad.androidSteps.step5.item3] },
] as Array<{
  title: string;
  desc?: string;
  note?: string;
  warning?: string;
  warningMessage?: string;
  items?: Array<string | undefined>;
}>;

export default function DownloadPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Download App', item: `${SITE_URL}/download` },
    ],
  };

  const howToLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: ad.schema.howTo.name,
    description: ad.schema.howTo.description,
    step: [ad.schema.howTo.step1, ad.schema.howTo.step2, ad.schema.howTo.step3, ad.schema.howTo.step4].map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: ad.faq.items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };

  return (
    <div className="home-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <div className="mesh-bg" aria-hidden>
        <div className="mesh-blob blob-1" />
        <div className="mesh-blob blob-2" />
        <div className="mesh-blob blob-3" />
      </div>

      {/* HERO */}
      <section style={{ position: 'relative', zIndex: 1, padding: '5rem 0 3rem', textAlign: 'center' }}>
        <div className="container">
          <span className="news-tag tag-cricket" style={{ marginBottom: '1.25rem', display: 'inline-block' }}>{ad.hero.subtitle}</span>
          <h1 className="title-glow" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
            <span className="gradient-text">{ad.hero.title}</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '780px', margin: '0 auto 1rem' }}>{ad.hero.description1}</p>
          <p style={{ color: 'var(--text-muted)', maxWidth: '780px', margin: '0 auto 1.5rem' }}>{ad.hero.description2}</p>

          <div className="glass-card" style={{ padding: '1rem 1.25rem', maxWidth: '640px', margin: '0 auto 2rem', borderLeft: '3px solid var(--accent-cyan)', textAlign: 'left' }}>
            <strong style={{ color: 'var(--accent-cyan)' }}>{ad.hero.warning}</strong>
            <span style={{ color: 'var(--text-secondary)', marginLeft: '0.5rem' }}>{ad.hero.warningText}</span>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={OFFICIAL_SITE_URL} className="btn btn-primary" rel="noopener noreferrer" target="_blank">{ad.hero.downloadButton}</a>
            <Link href="/login" className="btn btn-secondary">Login</Link>
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
            {/* WHY USE */}
            <section id="why-use" style={sectionStyle}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', marginBottom: '1.5rem' }}>{ad.whyUse.title}</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                {ad.whyUse.features.map((f) => (
                  <div key={f.title} className="glass-card" style={{ padding: '1.25rem' }}>
                    <h3 style={{ fontSize: '1.05rem', marginBottom: '0.4rem' }}>{f.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{f.desc}</p>
                  </div>
                ))}
              </div>
              <div className="glass-card" style={{ padding: '1.25rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>{ad.whyUse.availableFor}</strong>
                <span style={{ color: 'var(--text-secondary)', marginLeft: '0.5rem' }}>{ad.whyUse.devices.join(' • ')}</span>
              </div>
            </section>

            {/* ANDROID STEPS */}
            <section id="android" style={sectionStyle}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', marginBottom: '1rem' }}>{ad.androidSteps.title}</h2>
              <div className="glass-card" style={{ padding: '1.25rem', borderLeft: '3px solid #ef4444', marginBottom: '2rem' }}>
                <strong style={{ color: '#ef4444' }}>{ad.androidSteps.warning}</strong>
                <span style={{ color: 'var(--text-secondary)', marginLeft: '0.5rem' }}>{ad.androidSteps.warningText}</span>
              </div>

              <ol style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                {ANDROID_STEPS.map((step, i) => (
                  <li key={step.title} className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-cyan)', minWidth: '2.5rem' }}>0{i + 1}</span>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>{step.title}</h3>
                      {step.desc && <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{step.desc}</p>}
                      {step.warning && step.warningMessage && (
                        <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '0.5rem' }}>
                          <strong>{step.warning}</strong> {step.warningMessage}
                        </p>
                      )}
                      {step.items && (
                        <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', display: 'grid', gap: '0.3rem' }}>
                          {step.items.filter(Boolean).map((it) => <li key={it}>{it}</li>)}
                        </ul>
                      )}
                      {step.note && <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>{step.note}</p>}
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* IOS */}
            <section id="ios" style={sectionStyle}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', marginBottom: '0.5rem' }}>{ad.ios.title}</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{ad.ios.subtitle}</p>
              <div className="glass-card" style={cardStyle}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>{ad.ios.forIphone}</h3>
                <ol style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', display: 'grid', gap: '0.3rem', marginBottom: '1.5rem' }}>
                  {ad.ios.steps.map((s) => <li key={s}>{s}</li>)}
                </ol>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{ad.ios.shortcut}</h4>
                <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', display: 'grid', gap: '0.3rem' }}>
                  {ad.ios.shortcutSteps.map((s) => <li key={s}>{s}</li>)}
                </ul>
              </div>
            </section>

            {/* PC */}
            <section id="pc" style={sectionStyle}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', marginBottom: '0.5rem' }}>{ad.pc.title}</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{ad.pc.subtitle}</p>
              <div className="glass-card" style={cardStyle}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>{ad.pc.forPC}</h3>
                <ol style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', display: 'grid', gap: '0.3rem', marginBottom: '1rem' }}>
                  {ad.pc.steps.map((s) => <li key={s}>{s}</li>)}
                </ol>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  <strong style={{ color: 'var(--text-secondary)' }}>{ad.pc.advanced}</strong> {ad.pc.advancedText}
                </p>
              </div>
            </section>

            {/* UPDATE */}
            <section id="update" style={sectionStyle}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', marginBottom: '0.5rem' }}>{ad.update.title}</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{ad.update.subtitle}</p>
              <div className="glass-card" style={cardStyle}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>{ad.update.toUpdate}</h3>
                <ol style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', display: 'grid', gap: '0.3rem', marginBottom: '1rem' }}>
                  {ad.update.steps.map((s) => <li key={s}>{s}</li>)}
                </ol>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontStyle: 'italic' }}>{ad.update.note}</p>
              </div>
            </section>

            {/* SAFETY */}
            <section id="safety" style={sectionStyle}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', marginBottom: '0.5rem' }}>{ad.safety.title}</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{ad.safety.subtitle}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                {ad.safety.tips.map((t) => (
                  <div key={t} className="glass-card" style={{ padding: '1.25rem', color: 'var(--text-secondary)' }}>{t}</div>
                ))}
              </div>
            </section>

            {/* TROUBLESHOOTING */}
            <section id="troubleshooting" style={sectionStyle}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', marginBottom: '1.5rem' }}>{ad.troubleshooting.title}</h2>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {ad.troubleshooting.issues.map((q) => (
                  <details key={q.question} className="glass-card" style={{ padding: '1.25rem 1.5rem' }}>
                    <summary style={{ cursor: 'pointer', fontWeight: 600, fontSize: '1.05rem' }}>{q.question}</summary>
                    <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', display: 'grid', gap: '0.3rem', marginTop: '0.75rem' }}>
                      {q.solutions.map((s) => <li key={s}>{s}</li>)}
                    </ul>
                  </details>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" style={sectionStyle}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', marginBottom: '1.5rem' }}>{ad.faq.title}</h2>
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                {ad.faq.items.map((it) => (
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
                <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#fff', marginBottom: '0.5rem' }}>{ad.finalCTA.title}</h2>
                <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '620px', margin: '0 auto 2rem' }}>{ad.finalCTA.description}</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href={OFFICIAL_SITE_URL} className="btn" style={{ background: '#fff', color: '#0f1115' }} rel="noopener noreferrer" target="_blank">{ad.finalCTA.downloadButton}</a>
                  <Link href="/login" className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#fff' }}>{ad.finalCTA.loginButton}</Link>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
