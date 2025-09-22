import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Preload all gallery images
    const preloadImages = () => {
      const imageUrls = [
        "/assets/image9.png",
        "/assets/image10.png",
        "/assets/image11.png",
        "/assets/image12.png",
        "/assets/image13.png",
        "/assets/image14.png",
        "/assets/image15.png",
        "/assets/image16.png",
        "/assets/image17.png",
        "/assets/image18.png",
        "/assets/image19.png",
        "/assets/image20.png"
      ];
      
      let loadedCount = 0;
      const totalImages = imageUrls.length;
      
      const updateProgress = () => {
        loadedCount++;
        const progress = Math.round((loadedCount / totalImages) * 100);
        setLoadingProgress(progress);
        
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
          console.log("All gallery images preloaded successfully");
        }
      };
      
      imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
        img.onload = updateProgress;
        img.onerror = updateProgress; // Count errors as loaded to avoid infinite loading
      });
    };
    
    preloadImages();
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

  // Gallery images with categories
  const galleryImages = [
    {
      id: 1,
      src: "/assets/image9.png",
      category: "Living Room",
      title: "Spacious living area"
    },
    {
      id: 2,
      src: "/assets/image10.png",
      category: "Bedroom",
      title: "Comfortable master bedroom"
    },
    {
      id: 3,
      src: "/assets/image11.png",
      category: "Kitchen",
      title: "Fully equipped kitchen"
    },
    {
      id: 4,
      src: "/assets/image12.png",
      category: "Bathroom",
      title: "Modern bathroom"
    },
    {
      id: 5,
      src: "/assets/image13.png",
      category: "Exterior",
      title: "Beautiful property exterior"
    },
    {
      id: 6,
      src: "/assets/image14.png",
      category: "Bedroom",
      title: "Cozy second bedroom"
    },
    {
      id: 7,
      src: "/assets/image15.png",
      category: "Living Room",
      title: "Entertainment area"
    },
    {
      id: 8,
      src: "/assets/image16.png",
      category: "Kitchen",
      title: "Modern appliances"
    },
    {
      id: 9,
      src: "/assets/image17.png",
      category: "Bathroom",
      title: "Ensuite bathroom"
    },
    {
      id: 10,
      src: "/assets/image18.png",
      category: "Exterior",
      title: "Garden view"
    },
    {
      id: 11,
      src: "/assets/image19.png",
      category: "Bedroom",
      title: "Third bedroom"
    },
    {
      id: 12,
      src: "/assets/image20.png",
      category: "Living Room",
      title: "Dining area"
    }
  ];

  // Get unique categories
  const categories = ["All", ...new Set(galleryImages.map(img => img.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter images based on selected category
  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
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
      {/* Image preloading component (invisible) */}
      <div style={{ display: 'none' }}>
        {galleryImages.map((image) => (
          <img 
            key={`preload-${image.id}`}
            src={image.src} 
            alt=""
            onLoad={() => console.log(`Gallery image ${image.id} loaded`)}
          />
        ))}
      </div>
      
      {/* Loading indicator */}
      {!imagesLoaded && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(145deg, #fff0f5, #f3e5ff)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
          flexDirection: 'column'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
            marginBottom: '20px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(255, 255, 255, 0.3)',
              borderRadius: '50%',
              transform: `scale(${loadingProgress / 100})`,
              transition: 'transform 0.3s ease'
            }}></div>
          </div>
          <p style={{ 
            color: '#9370DB', 
            fontWeight: 'bold',
            marginBottom: '10px',
            fontSize: '18px'
          }}>
            Loading gallery images...
          </p>
          <div style={{
            width: '200px',
            height: '8px',
            background: 'rgba(147, 112, 219, 0.2)',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${loadingProgress}%`,
              height: '100%',
              background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
              borderRadius: '4px',
              transition: 'width 0.3s ease'
            }}></div>
          </div>
          <p style={{ 
            color: '#9370DB', 
            fontSize: '14px',
            marginTop: '10px'
          }}>
            {loadingProgress}% complete
          </p>
        </div>
      )}
      
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
          Photo Gallery
        </h1>
        <p style={{ 
          fontSize: 'clamp(16px, 3vw, 20px)', 
          maxWidth: '800px', 
          margin: '0 auto',
          color: '#555'
        }}>
          Take a visual tour of our beautiful property. Each space is designed to provide comfort and style during your stay.
        </p>
      </section>

      {/* Category Filter */}
      <section style={{ 
        marginBottom: '40px', 
        padding: '0 20px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '15px',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              style={{
                background: selectedCategory === category 
                  ? 'linear-gradient(45deg, #FF69B4, #9370DB)' 
                  : 'white',
                color: selectedCategory === category ? 'white' : '#9370DB',
                border: 'none',
                borderRadius: '50px',
                padding: '10px 20px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '14px',
                boxShadow: selectedCategory === category 
                  ? '0 4px 15px rgba(255, 105, 180, 0.3)' 
                  : '0 2px 8px rgba(147, 112, 219, 0.2)'
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== category) {
                  e.target.style.background = 'rgba(255, 105, 180, 0.1)';
                  e.target.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== category) {
                  e.target.style.background = 'white';
                  e.target.style.transform = 'translateY(0)';
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section style={{ 
        marginBottom: '60px', 
        padding: '0 20px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '25px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {filteredImages.map((image, index) => (
            <div 
              key={image.id} 
              style={{ 
                ...glassStyle, 
                overflow: 'hidden',
                cursor: 'pointer',
                transitionDelay: `${0.05 * index}s`,
              }}
              onClick={() => openLightbox(image)}
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
                {imagesLoaded ? (
                  <img 
                    src={image.src} 
                    alt={image.title} 
                    style={{ 
                      width: '100%', 
                      height: '220px', 
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                  />
                ) : (
                  <div style={{
                    width: '100%',
                    height: '220px',
                    background: 'linear-gradient(135deg, #FF69B4, #9370DB)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white'
                  }}>
                    Loading...
                  </div>
                )}
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '100%',
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)',
                  padding: '20px 15px 15px',
                  color: 'white'
                }}>
                  <div style={{
                    background: 'rgba(255, 105, 180, 0.8)',
                    color: 'white',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    display: 'inline-block',
                    marginBottom: '8px'
                  }}>
                    {image.category}
                  </div>
                  <h3 style={{ 
                    fontSize: '16px', 
                    margin: 0,
                    fontFamily: "'Playfair Display', serif"
                  }}>
                    {image.title}
                  </h3>
                </div>
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
          Ready to Experience It in Person?
        </h2>
        <p style={{ 
          fontSize: 'clamp(16px, 3vw, 18px)', 
          marginBottom: '30px', 
          maxWidth: '600px', 
          marginInline: 'auto',
          color: '#555'
        }}>
          Book your stay today and enjoy the comfort and beauty of Aggie Airbnb.
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

      {/* Lightbox Modal */}
      {selectedImage && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2000,
          padding: '20px'
        }}
        onClick={closeLightbox}
        >
          <div style={{
            maxWidth: '90%',
            maxHeight: '90%',
            position: 'relative'
          }}
          onClick={(e) => e.stopPropagation()}
          >
            {imagesLoaded ? (
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title} 
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  maxHeight: '80vh',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  boxShadow: '0 5px 25px rgba(0, 0, 0, 0.5)'
                }}
              />
            ) : (
              <div style={{
                width: '100%',
                height: '80vh',
                background: 'linear-gradient(135deg, #FF69B4, #9370DB)',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '20px'
              }}>
                Loading high-resolution image...
              </div>
            )}
            <div style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              width: '100%',
              background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)',
              padding: '30px 20px 20px',
              color: 'white',
              borderRadius: '0 0 8px 8px'
            }}>
              <div style={{
                background: 'rgba(255, 105, 180, 0.8)',
                color: 'white',
                padding: '4px 10px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: 'bold',
                display: 'inline-block',
                marginBottom: '8px'
              }}>
                {selectedImage.category}
              </div>
              <h3 style={{ 
                fontSize: '20px', 
                margin: 0,
                fontFamily: "'Playfair Display', serif"
              }}>
                {selectedImage.title}
              </h3>
            </div>
            <button 
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 105, 180, 0.8)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.2)';
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;