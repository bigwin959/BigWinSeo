export default function Footer() {
  return (
    <footer style={{
      padding: 'var(--spacing-lg) var(--spacing-md)',
      borderTop: '1px solid var(--border)',
      marginTop: 'var(--spacing-xl)',
      textAlign: 'center',
      color: 'var(--text-secondary)',
      fontSize: '0.9rem'
    }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem', textAlign: 'left' }}>
          <div style={{ flex: '1', minWidth: '200px' }}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>BIGWINSEO</h3>
            <p>Elevating your digital presence through data-driven SEO strategies.</p>
          </div>
          <div style={{ flex: '1', minWidth: '150px' }}>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>
          <div style={{ flex: '1', minWidth: '150px' }}>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Legal</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <p>&copy; {new Date().getFullYear()} BIGWINSEO. All rights reserved.</p>
      </div>
    </footer>
  );
}
