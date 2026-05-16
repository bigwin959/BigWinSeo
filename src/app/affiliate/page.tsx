import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Elite Partners Club',
  description: 'Join the most exclusive, high-yield affiliate program in Asia.',
};

export default function AffiliatePage() {
  return (
    <div className="animate-fade-in" style={{ backgroundColor: '#050505' }}>
      
      {/* Exclusive Hero Section */}
      <section className="section" style={{ paddingTop: '10rem', paddingBottom: '6rem', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle Gold/Purple Glow Background */}
        <div style={{ position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)', width: '80vw', height: '80vw', background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, rgba(124,58,237,0.05) 40%, transparent 70%)', filter: 'blur(60px)', zIndex: 0, borderRadius: '50%' }}></div>
        
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(212,175,55,0.3)', padding: '0.5rem 1.25rem', borderRadius: '50px', marginBottom: '2rem', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)' }}>
            <span style={{ color: '#d4af37', fontSize: '1.2rem' }}>✦</span>
            <span style={{ color: '#d4af37', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.75rem', fontWeight: 700 }}>By Invitation Only</span>
          </div>
          
          <h1 style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', marginBottom: '1.5rem', lineHeight: '1.1', fontWeight: 300, fontFamily: 'Outfit, sans-serif' }}>
            The Elite <br />
            <span style={{ fontWeight: 800, background: 'linear-gradient(135deg, #fceda1 0%, #d4af37 50%, #b5952f 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Partners Club</span>
          </h1>
          
          <p style={{ color: '#a1a1aa', fontSize: '1.25rem', maxWidth: '750px', margin: '0 auto 3rem', fontWeight: 300, lineHeight: 1.8 }}>
            Engineered for top-tier affiliates, high-net-worth introducers, and master agents. Gain access to unprecedented liquidity, bespoke commission structures, and a private concierge.
          </p>
          
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <Link href="#apply" className="btn" style={{ background: 'linear-gradient(135deg, #d4af37 0%, #b5952f 100%)', color: '#000', padding: '1rem 3rem', fontSize: '1.1rem', boxShadow: '0 10px 30px rgba(212,175,55,0.2)' }}>
              Request Access
            </Link>
            <Link href="#contact" className="btn btn-secondary" style={{ padding: '1rem 3rem', fontSize: '1.1rem', borderColor: 'rgba(255,255,255,0.1)' }}>
              Contact VIP Host
            </Link>
          </div>
        </div>
      </section>

      {/* High-Net-Worth Metrics */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', background: '#0a0a0a' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '3rem 0' }}>
          <div style={{ flex: '1 1 250px', textAlign: 'center', padding: '2rem', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
            <h4 style={{ fontSize: '3rem', color: '#fff', fontWeight: 300, marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>$42M<span style={{ color: '#d4af37' }}>+</span></h4>
            <p style={{ color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem' }}>Paid to Partners in 2025</p>
          </div>
          <div style={{ flex: '1 1 250px', textAlign: 'center', padding: '2rem', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
            <h4 style={{ fontSize: '3rem', color: '#fff', fontWeight: 300, marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>55<span style={{ color: '#d4af37' }}>%</span></h4>
            <p style={{ color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem' }}>Max Rev-Share Tier</p>
          </div>
          <div style={{ flex: '1 1 250px', textAlign: 'center', padding: '2rem' }}>
            <h4 style={{ fontSize: '3rem', color: '#fff', fontWeight: 300, marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>Zero</h4>
            <p style={{ color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem' }}>Negative Carryover</p>
          </div>
        </div>
      </section>

      {/* Luxury Features & Graphic Designer Spaces */}
      <section className="section" style={{ padding: '8rem 0' }}>
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            
            {/* Graphic Designer Placeholder 1: Luxury Lifestyle / Black Card */}
            <div style={{ 
              aspectRatio: '4/5', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              background: 'linear-gradient(to bottom, #111, #0a0a0a)',
              border: '1px solid rgba(212,175,55,0.2)',
              borderRadius: '2px',
              position: 'relative',
              boxShadow: '0 30px 60px rgba(0,0,0,0.8), inset 0 0 100px rgba(212,175,55,0.03)'
            }}>
              {/* Corner Accents */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '30px', height: '30px', borderTop: '1px solid #d4af37', borderLeft: '1px solid #d4af37' }}></div>
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: '30px', height: '30px', borderBottom: '1px solid #d4af37', borderRight: '1px solid #d4af37' }}></div>
              
              <div style={{ color: '#d4af37', marginBottom: '1.5rem', opacity: 0.5 }}>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: '#fff', fontWeight: 300, letterSpacing: '0.05em' }}>Designer Canvas</h3>
              <p style={{ fontSize: '0.9rem', color: '#71717a', textAlign: 'center', maxWidth: '70%', lineHeight: 1.6 }}>
                Insert high-end luxury lifestyle imagery here. E.g., Private jets, exclusive "Black Card" aesthetics, or a sleek metallic dashboard mockup. (Recommended: 1000x1250)
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '3rem', marginBottom: '2rem', fontWeight: 300, lineHeight: 1.2 }}>Uncompromising <br /><span style={{ color: '#d4af37', fontWeight: 600 }}>Commission Models</span></h2>
              <p style={{ color: '#a1a1aa', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                We don't do generic tiers. High-volume partners receive custom-tailored hybrid deals (CPA + RevShare) designed to maximize your specific traffic's lifetime value.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(212,175,55,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d4af37', flexShrink: 0, border: '1px solid rgba(212,175,55,0.2)' }}>
                    01
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: 500 }}>Infinite Revenue Share</h4>
                    <p style={{ color: '#71717a', lineHeight: 1.6 }}>Earn up to 55% net revenue with absolutely no negative carryover. Your slate is wiped clean every month.</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(212,175,55,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d4af37', flexShrink: 0, border: '1px solid rgba(212,175,55,0.2)' }}>
                    02
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: 500 }}>Private Liquidity Payouts</h4>
                    <p style={{ color: '#71717a', lineHeight: 1.6 }}>Withdraw your commissions daily or weekly. We support high-limit crypto transfers (USDT, BTC) and secure local wires.</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '5rem', alignItems: 'center', marginTop: '10rem' }}>
            
            <div style={{ order: 2 }}>
              <h2 style={{ fontSize: '3rem', marginBottom: '2rem', fontWeight: 300, lineHeight: 1.2 }}>Your Private <br /><span style={{ color: '#d4af37', fontWeight: 600 }}>Wealth Concierge</span></h2>
              <p style={{ color: '#a1a1aa', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                Skip the support queues. Elite partners are assigned a dedicated VIP manager, available 24/7 on private channels to authorize special player bonuses and optimize campaigns instantly.
              </p>
              
              <Link href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', color: '#d4af37', fontWeight: 600, fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #d4af37', paddingBottom: '0.25rem' }}>
                Schedule a Consultation <span style={{ fontSize: '1.5rem' }}>&rarr;</span>
              </Link>
            </div>

            {/* Graphic Designer Placeholder 2: VIP Concierge / High-End App */}
            <div style={{ 
              order: 1,
              aspectRatio: '4/5', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              background: 'linear-gradient(to top, #111, #0a0a0a)',
              border: '1px solid rgba(212,175,55,0.2)',
              borderRadius: '2px',
              position: 'relative',
              boxShadow: '0 30px 60px rgba(0,0,0,0.8), inset 0 0 100px rgba(212,175,55,0.03)'
            }}>
               {/* Corner Accents */}
               <div style={{ position: 'absolute', top: 0, right: 0, width: '30px', height: '30px', borderTop: '1px solid #d4af37', borderRight: '1px solid #d4af37' }}></div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '30px', height: '30px', borderBottom: '1px solid #d4af37', borderLeft: '1px solid #d4af37' }}></div>
              
              <div style={{ color: '#d4af37', marginBottom: '1.5rem', opacity: 0.5 }}>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: '#fff', fontWeight: 300, letterSpacing: '0.05em' }}>Designer Canvas</h3>
              <p style={{ fontSize: '0.9rem', color: '#71717a', textAlign: 'center', maxWidth: '70%', lineHeight: 1.6 }}>
                Insert premium concierge imagery here. E.g., A luxury watch alongside an exclusive mobile app dashboard, or high-end bespoke marketing assets. (Recommended: 1000x1250)
              </p>
            </div>
            
          </div>

        </div>
      </section>
      
      {/* Footer CTA */}
      <section style={{ padding: '8rem 0', background: 'radial-gradient(circle at center, #1a1a1a 0%, #050505 100%)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontWeight: 300 }}>Ready to <span style={{ color: '#d4af37', fontWeight: 600 }}>Scale?</span></h2>
          <p style={{ color: '#a1a1aa', maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.2rem' }}>
            Submit your portfolio. Our partner acquisition team reviews all applications within 12 hours.
          </p>
          <button className="btn" style={{ background: '#fff', color: '#000', padding: '1.2rem 4rem', fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
}
