import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate banner slides
    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 5);
    }, 4000);
    
    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  // Pink and purple color palette
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

  const whatsappLink = `https://wa.me/254727012403?text=Hi! I'm interested in booking a stay with Aggie Airbnb.`;

  // Banner slides
  const bannerSlides = [
    {
      image: "/assets/image1.png",
      title: "Spacious Comfort",
      subtitle: "Your perfect getaway in Nakuru"
    },
    {
      image: "./assets/image2.png",
      title: "Stylish Interiors",
      subtitle: "Beautifully designed spaces"
    },
    {
      image: "/assets/image3.png",
      title: "Modern Living",
      subtitle: "Contemporary amenities"
    },
    {
      image: "/assets/image4.png",
      title: "Mountain Views",
      subtitle: "Breathtaking scenery"
    },
    {
      image: "/assets/image5.png",
      title: "Family Friendly",
      subtitle: "Perfect for gatherings"
    }
  ];

  const features = [
    {
      title: "3 Spacious Bedrooms",
      description: "All ensuite with comfortable bedding",
      icon: "🛏️"
    },
    {
      title: "Fully Equipped Kitchen",
      description: "Cook your favorite meals",
      icon: "🍳"
    },
    {
      title: "Smart TV & WiFi",
      description: "Stay connected and entertained",
      icon: "📺"
    },
    {
      title: "Family-Friendly Living",
      description: "Open concept for quality time",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "Pet Friendly",
      description: "Bring your furry friends along",
      icon: "🐕"
    },
    {
      title: "Flexible Stay Options",
      description: "Short or long term stays",
      icon: "📅"
    }
  ];

  const roomOptions = [
    {
      name: "One Room",
      price: "KSH 3000",
      description: "Cozy space for solo travelers or couples"
    },
    {
      name: "Two Rooms",
      price: "KSH 5000",
      description: "Perfect for small families or friends"
    },
    {
      name: "Three Rooms",
      price: "KSH 8000",
      description: "Spacious for larger groups or families"
    }
  ];

  return (
    <div style={{ 
      fontFamily: "'Nunito Sans', sans-serif", 
      lineHeight: 1.6,
      background: 'linear-gradient(145deg, #fff0f5, #f3e5ff)',
      borderRadius: '24px',
      overflow: 'hidden',
      position: 'relative',
      paddingTop: '80px'
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
      
      {/* Woman-owned badge */}
      <div style={{
        position: 'absolute',
        top: '100px',
        right: '20px',
        background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '50px',
        fontSize: '14px',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        zIndex: 2
      }}>
        <span>♀️</span> Woman-Owned Business
      </div>
      
      {/* Sliding Banner Carousel */}
      <div style={{
        position: 'relative',
        height: '500px',
        overflow: 'hidden',
        borderRadius: '0 0 24px 24px',
        marginBottom: '40px'
      }}>
        {bannerSlides.map((slide, index) => (
          <div 
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: currentSlide === index ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              zIndex: currentSlide === index ? 1 : 0
            }}
          >
            <img 
              src={slide.image} 
              alt={slide.title} 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover'
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              background: 'linear-gradient(to top, rgba(255, 105, 180, 0.8), rgba(147, 112, 219, 0.4), transparent)',
              padding: '60px 20px 30px',
              color: 'white',
              textAlign: 'center'
            }}>
              <h2 style={{ 
                fontSize: 'clamp(28px, 6vw, 48px)', 
                marginBottom: '10px',
                fontFamily: "'Playfair Display', serif",
                fontWeight: '700',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
              }}>
                {slide.title}
              </h2>
              <p style={{ 
                fontSize: 'clamp(16px, 3vw, 24px)',
                fontWeight: '300',
                textShadow: '0 1px 5px rgba(0, 0, 0, 0.3)'
              }}>
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
        
        {/* Carousel indicators */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '10px',
          zIndex: 3
        }}>
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: currentSlide === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Hero Section */}
      <section style={{
        textAlign: 'center',
        padding: 'clamp(20px, 5vw, 40px) 20px',
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
          textShadow: '0 2px 10px rgba(147, 112, 219, 0.2)',
          animation: 'float 3s ease-in-out infinite'
        }}>
          Welcome to Aggie Airbnb!
        </h1>
        <p style={{ 
          fontSize: 'clamp(16px, 3vw, 20px)', 
          maxWidth: '720px', 
          margin: '0 auto 30px',
          color: '#555'
        }}>
          ✨ Airbnb Ready for Booking Today! ✨<br />
          Looking for a homely getaway just a drive away from Nakuru Town with breathtaking mountain views? This is the perfect spot for you!
        </p>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '16px', 
          alignItems: 'center',
          maxWidth: '400px',
          margin: '0 auto'
        }}>
          <Link 
            to="/rooms" 
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 6px 20px rgba(255, 105, 180, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(255, 105, 180, 0.3)';
            }}
          >
            View Rooms
          </Link>
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
        </div>
      </section>

      {/* Room Options */}
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
            Room Options
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
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {roomOptions.map((room, index) => (
            <div 
              key={index} 
              style={{ 
                ...glassStyle, 
                overflow: 'hidden',
                transitionDelay: `${0.1 * index}s`,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0,
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
              <div style={{ padding: '30px', textAlign: 'center' }}>
                <h3 style={{ 
                  fontSize: '24px', 
                  marginBottom: '10px', 
                  color: '#333',
                  fontFamily: "'Playfair Display', serif"
                }}>
                  {room.name}
                </h3>
                <div style={{
                  fontSize: '28px',
                  fontWeight: 'bold',
                  color: '#FF69B4',
                  marginBottom: '15px'
                }}>
                  {room.price}
                </div>
                <p style={{ fontSize: '16px', color: '#555', marginBottom: '20px' }}>
                  {room.description}
                </p>
                <Link 
                  to="/rooms" 
                  style={{ 
                    ...buttonStyle, 
                    fontSize: '14px', 
                    padding: '10px 20px',
                    width: '100%',
                    textAlign: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(255, 105, 180, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(255, 105, 180, 0.3)';
                  }}
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
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
            Our Features
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
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              style={{ 
                ...glassStyle, 
                padding: '30px',
                textAlign: 'center',
                transitionDelay: `${0.1 * index}s`,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0,
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
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>
                {feature.icon}
              </div>
              <h3 style={{ 
                fontSize: '20px', 
                marginBottom: '10px', 
                color: '#333',
                fontFamily: "'Playfair Display', serif"
              }}>
                {feature.title}
              </h3>
              <p style={{ fontSize: '16px', color: '#555' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        ...glassStyle,
        padding: '50px 20px',
        margin: '0 20px 40px',
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
          Ready for Your Stay?
        </h2>
        <p style={{ 
          fontSize: 'clamp(16px, 3vw, 18px)', 
          marginBottom: '30px', 
          maxWidth: '600px', 
          marginInline: 'auto',
          color: '#555'
        }}>
          Book your perfect room today and experience comfort like never before. Our team is dedicated to making your stay unforgettable.
        </p>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '16px', 
          alignItems: 'center',
          maxWidth: '400px',
          margin: '0 auto'
        }}>
          <Link 
            to="/rooms" 
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 6px 20px rgba(255, 105, 180, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(255, 105, 180, 0.3)';
            }}
          >
            View All Rooms
          </Link>
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
            💬 Quick WhatsApp Booking
          </a>
        </div>
      </section>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Nunito+Sans:wght@400;600;700&display=swap');
      `}</style>
    </div>
  );
};

export default Home;