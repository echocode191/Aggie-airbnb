import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => setIsVisible(true), []);

  const glassStyle = {
    background: 'linear-gradient(135deg, rgba(255,105,180,0.15), rgba(147,112,219,0.1))',
    backdropFilter: 'blur(16px)',
    borderRadius: '24px',
    border: '1px solid rgba(255,255,255,0.3)',
    boxShadow: '0 8px 32px rgba(255,105,180,0.15)',
    transition: 'all 0.4s ease',
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    opacity: isVisible ? 1 : 0
  };

  const buttonStyle = {
    background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
    border: 'none',
    borderRadius: '50px',
    color: '#fff',
    padding: '14px 28px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    textAlign: 'center',
    fontFamily: "'Nunito Sans', sans-serif",
    boxShadow: '0 4px 15px rgba(255,105,180,0.3)'
  };

  const inputStyle = {
    width: '100%',
    padding: '15px',
    borderRadius: '12px',
    border: '1px solid rgba(255,105,180,0.3)',
    background: 'rgba(255,255,255,0.7)',
    fontSize: '16px',
    marginBottom: '20px',
    boxSizing: 'border-box'
  };

  const textareaStyle = { ...inputStyle, minHeight: '150px', resize: 'vertical' };

  const handleInputChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendToWhatsApp = () => {
    const text = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/254727012403?text=${text}`, '_blank');
  };

  const sendToSMS = () => {
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    window.open(`sms:0727012403?body=${body}`, '_self');
  };

  return (
    <div style={{
      fontFamily: "'Nunito Sans', sans-serif",
      lineHeight: 1.6,
      background: 'linear-gradient(145deg,#fff0f5,#f3e5ff)',
      padding: '80px 20px 50px',
      position: 'relative'
    }}>

      {/* ===== Contact Form ===== */}
      <section style={{ ...glassStyle, maxWidth: '800px', margin: '0 auto', padding: '40px' }}>
        <h1 style={{ textAlign: 'center', color: '#9370DB', fontSize: '32px', marginBottom: '25px' }}>
          Contact Us
        </h1>

        <form onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            style={inputStyle}
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            style={inputStyle}
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Your Phone"
            style={inputStyle}
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            style={textareaStyle}
            required
          />

          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginTop: '10px' }}>
            <button
              type="button"
              style={{ ...buttonStyle, flex: 1, background: 'linear-gradient(45deg,#25D366,#128C7E)' }}
              onClick={sendToWhatsApp}
            >
              Send via WhatsApp
            </button>
            <button
              type="button"
              style={{ ...buttonStyle, flex: 1 }}
              onClick={sendToSMS}
            >
              Send via SMS
            </button>
          </div>
        </form>
      </section>

      {/* ===== About Developer ===== */}
      <section style={{
        ...glassStyle,
        maxWidth: '800px',
        margin: '50px auto 0',
        padding: '30px',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#9370DB', marginBottom: '15px', fontSize: '24px' }}>About the Developer</h2>
        <p style={{ color: '#555', fontSize: '16px', marginBottom: '0' }}>
          Hi, I’m <strong>Agent Kim</strong> – a passionate web developer focused on creating
          modern, responsive, and user-friendly websites for businesses and personal brands.
          I love turning ideas into elegant digital experiences.
        </p>
      </section>

      {/* ===== Developer Credit ===== */}
      <footer style={{
        marginTop: '40px',
        textAlign: 'center',
        color: '#555',
        fontSize: '14px'
      }}>
        © {new Date().getFullYear()} Developed by <span style={{ color: '#9370DB', fontWeight: 600 }}>Agent Kim</span>
      </footer>
    </div>
  );
};

export default Contact;
