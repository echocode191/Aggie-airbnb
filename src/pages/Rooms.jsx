import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Rooms = () => {
  const [isVisible, setIsVisible] = useState(false);
  
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

  const whatsappLink = `https://wa.me/254727012403?text=Hi! I'm interested in booking a room with Aggie Airbnb.`;

  const rooms = [
    {
      id: 1,
      name: "One Room",
      price: "KSH 3000",
      image: "/assets/image6.png",
      description: "Cozy and comfortable space perfect for solo travelers or couples. Enjoy a peaceful stay with all essential amenities.",
      features: ["Comfortable bed", "Private bathroom", "Smart TV", "High-speed WiFi", "Work desk"],
      size: "25 sqm"
    },
    {
      id: 2,
      name: "Two Rooms",
      price: "KSH 5000",
      image: "/assets/image7.png",
      description: "Spacious accommodation with two separate rooms, ideal for small families or friends traveling together.",
      features: ["Two comfortable bedrooms", "Shared bathroom", "Living area", "Smart TV", "High-speed WiFi", "Kitchen access"],
      size: "45 sqm"
    },
    {
      id: 3,
      name: "Three Rooms",
      price: "KSH 8000",
      image: "/assets/image8.png",
      description: "Our largest accommodation option with three spacious bedrooms, perfect for larger groups or extended families.",
      features: ["Three spacious bedrooms", "Two bathrooms", "Large living area", "Dining area", "Full kitchen access", "Smart TV", "High-speed WiFi", "Washing machine"],
      size: "75 sqm"
    }
  ];

  const amenities = [
    { name: "Free WiFi", icon: "📶" },
    { name: "Smart TV", icon: "📺" },
    { name: "Air Conditioning", icon: "❄️" },
    { name: "Kitchen Access", icon: "🍳" },
    { name: "Washing Machine", icon: "🧺" },
    { name: "Parking Space", icon: "🚗" },
    { name: "Pet Friendly", icon: "🐕" },
    { name: "Security Cameras", icon: "🔒" }
  ];

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
          Our Rooms & Accommodation
        </h1>
        <p style={{ 
          fontSize: 'clamp(16px, 3vw, 20px)', 
          maxWidth: '800px', 
          margin: '0 auto',
          color: '#555'
        }}>
          Choose from our comfortable and spacious accommodation options. Each room is designed to provide a relaxing and enjoyable stay.
        </p>
      </section>

      {/* Room Options */}
      <section style={{ 
        marginBottom: '60px', 
        padding: '0 20px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {rooms.map((room, index) => (
            <div 
              key={room.id} 
              style={{ 
                ...glassStyle, 
                overflow: 'hidden',
                transitionDelay: `${0.1 * index}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 105, 180, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(255, 105, 180, 0.15)';
              }}
            >
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img 
                  src={room.image} 
                  alt={room.name} 
                  style={{ 
                    width: '100%', 
                    height: '220px', 
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: 'rgba(255, 105, 180, 0.8)',
                  color: 'white',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}>
                  {room.price}
                </div>
              </div>
              <div style={{ padding: '25px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                  <h3 style={{ 
                    fontSize: '24px', 
                    color: '#333',
                    fontFamily: "'Playfair Display', serif",
                    margin: 0
                  }}>
                    {room.name}
                  </h3>
                  <span style={{ 
                    background: 'rgba(147, 112, 219, 0.1)',
                    color: '#9370DB',
                    padding: '5px 10px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: 'bold'
                  }}>
                    {room.size}
                  </span>
                </div>
                <p style={{ fontSize: '16px', color: '#555', marginBottom: '20px' }}>
                  {room.description}
                </p>
                <div style={{ marginBottom: '25px' }}>
                  <h4 style={{ 
                    fontSize: '16px', 
                    marginBottom: '10px', 
                    color: '#9370DB',
                    fontFamily: "'Playfair Display', serif"
                  }}>
                    Features:
                  </h4>
                  <ul style={{ 
                    padding: 0, 
                    margin: 0, 
                    listStyle: 'none',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px'
                  }}>
                    {room.features.map((feature, idx) => (
                      <li key={idx} style={{
                        background: 'rgba(255, 105, 180, 0.1)',
                        color: '#FF69B4',
                        padding: '5px 12px',
                        borderRadius: '20px',
                        fontSize: '14px'
                      }}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <a 
                    href={whatsappLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      ...buttonStyle,
                      background: 'linear-gradient(45deg, #25D366, #128C7E)',
                      flex: 1,
                      textAlign: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.3)';
                    }}
                  >
                    💬 Book Now
                  </a>
                  <Link 
                    to="/gallery" 
                    style={{
                      ...buttonStyle,
                      background: 'linear-gradient(45deg, #9370DB, #7B68EE)',
                      flex: 1,
                      textAlign: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 6px 20px rgba(147, 112, 219, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 15px rgba(147, 112, 219, 0.3)';
                    }}
                  >
                    View Photos
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities Section */}
      <section style={{ 
        marginBottom: '60px', 
        padding: '0 20px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{ 
            fontSize: 'clamp(28px, 6vw, 36px)', 
            marginBottom: '10px', 
            color: '#9370DB',
            fontFamily: "'Playfair Display', serif",
            fontWeight: '600',
          }}>
            Our Amenities
          </h2>
          <div style={{ 
            width: '80px', 
            height: '4px', 
            background: 'linear-gradient(45deg, #FF69B4, #9370DB)', 
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </div>
        
        <div style={{
          ...glassStyle,
          padding: '40px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px'
          }}>
            {amenities.map((amenity, index) => (
              <div 
                key={index} 
                style={{ 
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ fontSize: '36px', marginBottom: '10px' }}>
                  {amenity.icon}
                </div>
                <h3 style={{ 
                  fontSize: '18px', 
                  color: '#333',
                  fontFamily: "'Playfair Display', serif",
                  margin: 0
                }}>
                  {amenity.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Information */}
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
          fontFamily: "'Playfair Display', serif",
          fontWeight: '600',
        }}>
          Booking Information
        </h2>
        <p style={{ 
          fontSize: 'clamp(16px, 3vw, 18px)', 
          marginBottom: '30px', 
          maxWidth: '700px', 
          marginInline: 'auto',
          color: '#555'
        }}>
          To make a reservation, please contact us directly via WhatsApp or phone call. We'll be happy to assist you with your booking and answer any questions you may have.
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
            href={whatsappLink}
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
            📞 Call Us: 0727-012-403
          </a>
        </div>
      </section>
    </div>
  );
};

export default Rooms;