import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerStyle = {
    background: 'linear-gradient(135deg, #FF69B4, #9370DB)',
    color: 'white',
    padding: '50px 20px 30px',
    marginTop: '50px'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '30px'
  };

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column'
  };

  const headingStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '20px',
    fontFamily: "'Playfair Display', serif"
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '8px 0',
    transition: 'all 0.3s ease'
  };

  const socialIconStyle = {
    fontSize: '24px',
    margin: '0 10px 0 0',
    transition: 'all 0.3s ease'
  };

  const copyrightStyle = {
    textAlign: 'center',
    marginTop: '40px',
    paddingTop: '20px',
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    fontSize: '14px',
    lineHeight: '1.6'
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={columnStyle}>
          <h3 style={headingStyle}>Aggie Airbnb</h3>
          <p style={{ margin: '0 0 20px 0' }}>
            ✨ Airbnb Ready for Booking Today! ✨
          </p>
          <p style={{ margin: '0 0 20px 0' }}>
            Your home away from home in Nakuru.
          </p>
          <div>
            <a href="https://wa.me/254727012403" target="_blank" rel="noopener noreferrer" style={socialIconStyle}>📱</a>
            <a href="mailto:agneskarime68@gmail.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle}>✉️</a>
          </div>
        </div>

        <div style={columnStyle}>
          <h3 style={headingStyle}>Quick Links</h3>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/rooms" style={linkStyle}>Rooms</Link>
          <Link to="/gallery" style={linkStyle}>Gallery</Link>
          <Link to="/location" style={linkStyle}>Location</Link>
          <Link to="/about" style={linkStyle}>About</Link>
        </div>

        <div style={columnStyle}>
          <h3 style={headingStyle}>Contact Us</h3>
          <p style={linkStyle}>📞 0727-012-403</p>
          <p style={linkStyle}>📞 0707-373-456</p>
          <p style={linkStyle}>✉️ agneskarime68@gmail.com</p>
          <Link to="/contact" style={linkStyle}>Contact Form</Link>
        </div>

        <div style={columnStyle}>
          <h3 style={headingStyle}>Location</h3>
          <p style={linkStyle}>BISMACk WHITEHOUSE NAKURU</p>
          <p style={linkStyle}>Conveniently Close to Nakuru Town</p>
          <a
            href="https://maps.app.goo.gl/hD8XKTmJt52YnzpS9"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            View on Map →
          </a>
        </div>
      </div>

      <div style={copyrightStyle}>
        © {new Date().getFullYear()} Aggie Airbnb. All rights reserved.  
        Designed by <strong>Kim – Zoka Digital</strong>.  
        WhatsApp: <a href="https://wa.me/254721635810" style={{ color: 'white', textDecoration: 'underline' }}>0721635810</a>
      </div>
    </footer>
  );
};

export default Footer;
