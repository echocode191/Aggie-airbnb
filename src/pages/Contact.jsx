import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const glassStyle = {
    background: 'linear-gradient(135deg, rgba(255, 105, 180, 0.15), rgba(147, 112, 219, 0.1))',
    backdropFilter: 'blur(16px)',
    borderRadius: '24px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 8px 32px rgba(255, 105, 180, 0.15)',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    opacity: isVisible ? 1 : 0,
  };

  const buttonStyle = {
    background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
    border: 'none',
    borderRadius: '50px',
    color: 'white',
    padding: '14px 28px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    textAlign: 'center',
    fontFamily: "'Nunito Sans', sans-serif",
    boxShadow: '0 4px 15px rgba(255, 105, 180, 0.3)',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1,
  };

  const inputStyle = {
    width: '100%',
    padding: '15px',
    borderRadius: '12px',
    border: '1px solid rgba(255, 105, 180, 0.3)',
    background: 'rgba(255, 255, 255, 0.7)',
    fontSize: '16px',
    marginBottom: '20px',
    boxSizing: 'border-box',
    transition: 'all 0.3s ease'
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '150px',
    resize: 'vertical'
  };

  const contactInfo = [
    {
      type: "Phone",
      value: "0727-012-403",
      icon: "📞",
      link: "tel:0727012403"
    },
    {
      type: "Phone",
      value: "0707-373-456",
      icon: "📱",
      link: "tel:0707373456"
    },
    {
      type: "Email",
      value: "agneskarime68@gmail.com",
      icon: "✉️",
      link: "mailto:agneskarime68@gmail.com"
    },
    {
      type: "Location",
      value: "BISMACk WHITEHOUSE NAKURU",
      icon: "📍",
      link: "https://maps.app.goo.gl/hD8XKTmJt52YnzpS9"
    }
  ];

  const socialMedia = [
    {
      name: "WhatsApp",
      icon: "💬",
      link: "https://wa.me/254727012403"
    },
    {
      name: "Email",
      icon: "✉️",
      link: "mailto:agneskarime68@gmail.com"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div style={{ 
      fontFamily: "'Nunito Sans', sans-serif", 
      lineHeight: 1.6,
      background: 'linear-gradient(145deg, #fff0f5, #f3e5ff)',
      borderRadius: '24px',
      overflow: 'hidden',
      position: 'relative',
      paddingTop: '100px',
      paddingBottom: '50px'
    }}>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, rgba(255, 105, 180, 0.1), rgba(147, 112, 219, 0.1))',
        zIndex: 0
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-150px',
        left: '-150px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, rgba(147, 112, 219, 0.1), rgba(255, 105, 180, 0.1))',
        zIndex: 0
      }}></div>
      
      {/* Page Header */}
      <section style={{
        textAlign: 'center',
        padding: '20px',
        marginBottom: '40px',
        position: 'relative',
        zIndex: 1
      }}>
        <h1 style={{ 
          fontSize: 'clamp(32px, 8vw, 52px)', 
          marginBottom: '20px', 
          color: '#9370DB',
          fontFamily: "'Playfair Display', serif",
          fontWeight: '700',
          textShadow: '0 2px 10px rgba(147, 112, 219, 0.2)'
        }}>
          Contact Us
        </h1>
        <p style={{ 
          fontSize: 'clamp(16px, 3vw, 20px)', 
          maxWidth: '800px', 
          margin: '0 auto',
          color: '#555'
        }}>
          Have questions or ready to make a reservation? We'd love to hear from you!
        </p>
      </section>

      {/* Contact Information */}
      <section style={{ 
        marginBottom: '60px', 
        padding: '0 20px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          ...glassStyle,
          padding: '40px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(2, 1fr)'].map((val, i) => val),
            gap: '40px'
          }}>
            <div>
              <h2 style={{ 
                fontSize: 'clamp(24px, 5vw, 30px)', 
                marginBottom: '25px', 
                color: '#9370DB',
                fontFamily: "'Playfair Display', serif",
                fontWeight: '600',
              }}>
                Get in Touch
              </h2>
              
              <div style={{ marginBottom: '30px' }}>
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      marginBottom: '20px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <div style={{ 
                      fontSize: '24px', 
                      marginRight: '15px',
                      color: '#FF69B4'
                    }}>
                      {info.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', color: '#666', marginBottom: '2px' }}>
                        {info.type}
                      </div>
                      <a 
                        href={info.link}
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ 
                          color: '#333', 
                          textDecoration: 'none',
                          fontSize: '16px',
                          fontWeight: '600'
                        }}
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <h3 style={{ 
                fontSize: '20px', 
                marginBottom: '15px', 
                color: '#9370DB',
                fontFamily: "'Playfair Display', serif"
              }}>
                Follow Us
              </h3>
              
              <div style={{ display: 'flex', gap: '15px' }}>
                {socialMedia.map((social, index) => (
                  <a 
                    key={index}
                    href={social.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: 'rgba(255, 105, 180, 0.1)',
                      color: '#FF69B4',
                      fontSize: '24px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(255, 105, 180, 0.2)';
                      e.target.style.transform = 'translateY(-5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(255, 105, 180, 0.1)';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h2 style={{ 
                fontSize: 'clamp(24px, 5vw, 30px)', 
                marginBottom: '25px', 
                color: '#9370DB',
                fontFamily: "'Playfair Display', serif",
                fontWeight: '600',
              }}>
                Send a Message
              </h2>
              
              <form onSubmit={handleSubmit}>
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
                  placeholder="Your Phone Number"
                  style={inputStyle}
                />
                
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  style={textareaStyle}
                  required
                ></textarea>
                
                <button
                  type="submit"
                  style={{
                    ...buttonStyle,
                    width: '100%',
                    fontSize: '18px',
                    padding: '16px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(255, 105, 180, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(255, 105, 180, 0.3)';
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking */}
      <section style={{
        ...glassStyle,
        padding: '40px 20px',
        margin: '0 20px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        background: 'linear-gradient(135deg, rgba(255, 105, 180, 0.2), rgba(147, 112, 219, 0.15))'
      }}>
        <h2 style={{ 
          fontSize: 'clamp(28px, 6vw, 36px)', 
          marginBottom: '15px', 
          color: '#9370DB',
          fontFamily: "'Playfair Display', serif'",
          fontWeight: '600',
        }}>
          Quick Booking
        </h2>
        <p style={{ 
          fontSize: 'clamp(16px, 3vw, 18px)', 
          marginBottom: '30px', 
          maxWidth: '600px', 
          marginInline: 'auto',
          color: '#555'
        }}>
          For the fastest response, book directly via WhatsApp or call us. We're available to assist you with your reservation.
        </p>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '16px', 
          alignItems: 'center',
          maxWidth: '400px',
          margin: '0 auto'
        }}>
          <a 
            href="https://wa.me/254727012403?text=Hi! I'm interested in booking a stay with Aggie Airbnb."
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              ...buttonStyle,
              background: 'linear-gradient(45deg, #25D366, #128C7E)',
              width: '100%',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.3)';
            }}
          >
            💬 Book via WhatsApp
          </a>
          <a 
            href="tel:0727012403"
            style={{
              ...buttonStyle,
              background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
              width: '100%',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 6px 20px rgba(255, 105, 180, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(255, 105, 180, 0.3)';
            }}
          >
            📞 Call Now: 0727-012-403
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
