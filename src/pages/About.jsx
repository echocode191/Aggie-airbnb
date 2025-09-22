import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
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

  const teamMembers = [
    {
      name: "Agnes Karime",
      role: "Owner & Host",
      bio: "With over 10 years in hospitality, Agnes ensures every guest has a memorable stay.",
      image: "/assets/image21.png"
    }
  ];

  const testimonials = [
    {
      text: "The most comfortable stay I've had in Nakuru. The attention to detail was exceptional!",
      author: "Sarah M.",
      location: "Nairobi"
    },
    {
      text: "Perfect location, beautiful decor, and the host was incredibly accommodating.",
      author: "Jessica K.",
      location: "Mombasa"
    },
    {
      text: "Felt like a home away from home. Will definitely book again on my next visit.",
      author: "Amanda O.",
      location: "Kisumu"
    }
  ];

  const values = [
    {
      title: "Comfort",
      description: "We prioritize your comfort with well-appointed rooms and thoughtful amenities.",
      icon: "🛏️"
    },
    {
      title: "Hospitality",
      description: "Our warm and welcoming service makes you feel right at home.",
      icon: "🤝"
    },
    {
      title: "Location",
      description: "Enjoy the perfect balance of tranquility and convenience to town.",
      icon: "📍"
    },
    {
      title: "Value",
      description: "Experience premium accommodation at affordable rates.",
      icon: "💰"
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
          About Aggie Airbnb
        </h1>
        <p style={{ 
          fontSize: 'clamp(16px, 3vw, 20px)', 
          maxWidth: '800px', 
          margin: '0 auto',
          color: '#555'
        }}>
          ✨ Airbnb Ready for Booking Today! ✨<br />
          A woman-owned business dedicated to providing exceptional hospitality experiences.
        </p>
      </section>

      {/* Our Story */}
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
            display: ['block', 'flex'].map((val, i) => val),
            gap: '40px',
            alignItems: 'center'
          }}>
            <div style={{ flex: '1' }}>
              <h2 style={{ 
                fontSize: 'clamp(28px, 6vw, 36px)', 
                marginBottom: '20px', 
                color: '#9370DB',
                fontFamily: "'Playfair Display', serif",
                fontWeight: '600',
              }}>
                Our Story
              </h2>
              <p style={{ fontSize: '16px', color: '#555', marginBottom: '20px' }}>
                Aggie Airbnb was born from a passion for hospitality and a desire to create a home away from home for travelers visiting Nakuru. Our property, BISMACk WHITEHOUSE NAKURU, has been carefully designed to provide comfort, style, and convenience.
              </p>
              <p style={{ fontSize: '16px', color: '#555', marginBottom: '20px' }}>
                Located just a short drive from Nakuru Town with breathtaking mountain views, we offer the perfect blend of tranquility and accessibility. Whether you're visiting for business or leisure, our spacious accommodations and thoughtful amenities ensure a memorable stay.
              </p>
              <p style={{ fontSize: '16px', color: '#555' }}>
                As a woman-owned business, we take pride in creating a welcoming environment where all guests feel valued and cared for. Our attention to detail and commitment to excellence sets us apart in the hospitality industry.
              </p>
            </div>
            <div style={{ flex: '1', textAlign: 'center' }}>
              <img 
                src="/assets/image22.png" 
                alt="Aggie Airbnb Property" 
                style={{ 
                  width: '100%', 
                  maxWidth: '400px',
                  borderRadius: '16px',
                  boxShadow: '0 10px 30px rgba(255, 105, 180, 0.2)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
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
            Our Values
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '30px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {values.map((value, index) => (
            <div 
              key={index} 
              style={{ 
                ...glassStyle, 
                padding: '30px',
                textAlign: 'center',
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
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>
                {value.icon}
              </div>
              <h3 style={{ 
                fontSize: '22px', 
                marginBottom: '15px', 
                color: '#333',
                fontFamily: "'Playfair Display', serif",
                margin: 0
              }}>
                {value.title}
              </h3>
              <p style={{ fontSize: '16px', color: '#555', margin: 0 }}>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Team */}
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
            Meet the Owner
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
          display: 'flex',
          justifyContent: 'center',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              style={{ 
                ...glassStyle, 
                padding: '30px',
                textAlign: 'center',
                maxWidth: '400px',
                width: '100%'
              }}
            >
              <img 
                src={member.image} 
                alt={member.name} 
                style={{ 
                  width: '150px', 
                  height: '150px', 
                  borderRadius: '50%',
                  objectFit: 'cover',
                  margin: '0 auto 20px',
                  border: '4px solid rgba(255, 105, 180, 0.3)'
                }}
              />
              <h3 style={{ 
                fontSize: '24px', 
                marginBottom: '5px', 
                color: '#333',
                fontFamily: "'Playfair Display', serif",
                margin: 0
              }}>
                {member.name}
              </h3>
              <div style={{
                background: 'rgba(147, 112, 219, 0.1)',
                color: '#9370DB',
                padding: '5px 15px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: 'bold',
                display: 'inline-block',
                margin: '10px 0 20px'
              }}>
                {member.role}
              </div>
              <p style={{ fontSize: '16px', color: '#555', margin: 0 }}>
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
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
            What Our Guests Say
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              style={{ 
                ...glassStyle, 
                padding: '30px',
                position: 'relative',
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
              <div style={{ 
                fontSize: '60px', 
                position: 'absolute', 
                top: '20px', 
                left: '20px',
                opacity: 0.1,
                color: '#FF69B4'
              }}>
                "
              </div>
              
              <p style={{ 
                fontSize: '16px', 
                fontStyle: 'italic', 
                color: '#555',
                marginBottom: '20px',
                minHeight: '80px'
              }}>
                {testimonial.text}
              </p>
              
              <div style={{ textAlign: 'right' }}>
                <p style={{ 
                  fontSize: '16px', 
                  fontWeight: 'bold', 
                  color: '#9370DB',
                  margin: '0 0 5px 0'
                }}>
                  {testimonial.author}
                </p>
                <p style={{ 
                  fontSize: '14px', 
                  color: '#666',
                  margin: 0
                }}>
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
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
          Experience the Aggie Airbnb Difference
        </h2>
        <p style={{ 
          fontSize: 'clamp(16px, 3vw, 18px)', 
          marginBottom: '30px', 
          maxWidth: '600px', 
          marginInline: 'auto',
          color: '#555'
        }}>
          Book your stay today and discover why our guests keep coming back. We look forward to welcoming you to our home in Nakuru.
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
            View Our Rooms
          </Link>
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
        </div>
      </section>
    </div>
  );
};

export default About;