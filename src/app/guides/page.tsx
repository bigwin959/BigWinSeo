import { Metadata } from 'next';
import Link from 'next/link';
import { getAllContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Global Cricket News & Schedules',
  description: 'Live match schedules, latest cricket news, and expert betting strategies.',
};

// Mock data for the Match Center
const LIVE_MATCHES = [
  { id: 1, teamA: 'India', teamB: 'Australia', scoreA: '245/4', scoreB: 'Yet to bat', status: 'Live - 34.2 Overs', tournament: 'World Cup 2026' },
  { id: 2, teamA: 'Dhaka Dynamites', teamB: 'Sylhet Strikers', scoreA: '185/6', scoreB: '142/8', status: 'Sylhet need 44 runs in 18 balls', tournament: 'BPL 2026' }
];

const UPCOMING_MATCHES = [
  { id: 3, teamA: 'England', teamB: 'South Africa', time: 'Tomorrow, 14:00 GMT', tournament: 'T20 Internationals', odds: { A: '1.85', B: '2.10' } },
  { id: 4, teamA: 'Mumbai Indians', teamB: 'Chennai Super Kings', time: 'May 18, 18:00 GMT', tournament: 'IPL 2026', odds: { A: '1.90', B: '1.95' } },
  { id: 5, teamA: 'Pakistan', teamB: 'New Zealand', time: 'May 20, 10:00 GMT', tournament: 'Test Series', odds: { A: '2.20', B: '1.75' } }
];

export default async function CricketPage() {
  const posts = getAllContent('guides');

  return (
    <div className="animate-fade-in" style={{ paddingBottom: 'var(--spacing-xl)' }}>
      
      {/* Hero Section */}
      <section className="section" style={{ background: 'var(--surface)', padding: '6rem 0 4rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="news-tag tag-live" style={{ marginBottom: '1rem' }}>Live Match Center</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem' }}>
            Cricket <span className="gradient-text">Intelligence Hub</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Real-time scorecards, upcoming schedules, and in-depth analysis from our betting experts over the past 3 months.
          </p>
        </div>
      </section>

      {/* Match Center Section */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            {/* Live Matches Column */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444', animation: 'pulse 2s infinite' }}></div>
                <h2 style={{ fontSize: '1.5rem' }}>Live Scorecards</h2>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {LIVE_MATCHES.map(match => (
                  <div key={match.id} className="glass-card" style={{ padding: '1.5rem', borderLeft: '3px solid #ef4444' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.05em' }}>{match.tournament}</div>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>{match.teamA}</span>
                      <span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '1.2rem' }}>{match.scoreA}</span>
                    </div>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                      <span style={{ fontWeight: 600, fontSize: '1.1rem', color: 'var(--text-secondary)' }}>{match.teamB}</span>
                      <span style={{ fontWeight: 700, color: 'var(--text-secondary)' }}>{match.scoreB}</span>
                    </div>
                    
                    <div style={{ fontSize: '0.85rem', color: '#ef4444', fontWeight: 500 }}>{match.status}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Matches Column */}
            <div style={{ gridColumn: 'span 2' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '1.2rem' }}>📅</span>
                <h2 style={{ fontSize: '1.5rem' }}>Upcoming Schedules & Odds</h2>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                {UPCOMING_MATCHES.map(match => (
                  <div key={match.id} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--accent-purple)', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.05em', fontWeight: 600 }}>{match.tournament}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>{match.time}</div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>{match.teamA}</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontStyle: 'italic' }}>vs</div>
                      <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>{match.teamB}</div>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
                      <div style={{ flex: 1, background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '4px', textAlign: 'center', border: '1px solid var(--border-light)' }}>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{match.teamA}</div>
                        <div style={{ fontWeight: 700, color: 'var(--accent-cyan)' }}>{match.odds.A}</div>
                      </div>
                      <div style={{ flex: 1, background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '4px', textAlign: 'center', border: '1px solid var(--border-light)' }}>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{match.teamB}</div>
                        <div style={{ fontWeight: 700, color: 'var(--accent-purple)' }}>{match.odds.B}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="section" style={{ borderTop: '1px solid var(--border-medium)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '1.2rem' }}>📰</span>
            <h2 style={{ fontSize: '2rem' }}>Latest Cricket <span className="gradient-text">News & Analysis</span></h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {posts.map((post, index) => (
              <article key={post.slug} className={`glass-card delay-${(index % 3 + 1) * 100}`} style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-purple)', marginBottom: '0.5rem', fontWeight: 600 }}>{post.date}</span>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{post.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>{post.description}</p>
                <Link href={`/guides/${post.slug}`} style={{ fontWeight: 600, color: 'var(--text-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: 'auto' }}>
                  Read Full Analysis <span style={{ color: 'var(--accent-purple)' }}>&rarr;</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
