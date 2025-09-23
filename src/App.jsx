import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PWAInstallPrompt from './components/PWAInstallPrompt';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Gallery from './pages/Gallery';
import Location from './pages/Location';
import About from './pages/About';
import Contact from './pages/Contact';

// ---------- Enhanced Loader with Animation ----------
const Loader = ({ fadingOut }) => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(145deg, #fff0f5, #f3e5ff)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      fontFamily: "'Nunito Sans', sans-serif",
      transition: 'opacity 0.6s ease',
      opacity: fadingOut ? 0 : 1
    }}
  >
    {/* Animated logo */}
    <div
      style={{
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '24px',
        animation: 'pulse 1.5s infinite',
        boxShadow: '0 8px 32px rgba(255, 105, 180, 0.3)'
      }}
    >
      <span style={{ fontSize: '36px', color: 'white' }}>🏠</span>
    </div>
    
    {/* Loading text with animation */}
    <div style={{ textAlign: 'center' }}>
      <h1
        style={{
          fontSize: '2rem',
          fontWeight: '700',
          color: '#9370DB',
          marginBottom: '12px',
          fontFamily: "'Playfair Display', serif",
          animation: 'fadeInUp 1s ease-out'
        }}
      >
        Aggie Airbnb
      </h1>
      <p
        style={{
          fontSize: '1.2rem',
          color: '#FF69B4',
          animation: 'fadeInUp 1s ease-out 0.2s',
          opacity: 0.9
        }}
      >
        Preparing your experience...
      </p>
    </div>
    
    {/* Progress bar */}
    <div
      style={{
        width: '200px',
        height: '4px',
        backgroundColor: 'rgba(147, 112, 219, 0.2)',
        borderRadius: '2px',
        marginTop: '30px',
        overflow: 'hidden',
        animation: 'fadeInUp 1s ease-out 0.4s'
      }}
    >
      <div
        style={{
          height: '100%',
          width: '100%',
          background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
          borderRadius: '2px',
          animation: 'progressBar 2s ease-in-out infinite'
        }}
      />
    </div>
    
    {/* Animated dots */}
    <div
      style={{
        display: 'flex',
        gap: '8px',
        marginTop: '20px',
        animation: 'fadeInUp 1s ease-out 0.6s'
      }}
    >
      {[1, 2, 3].map((dot) => (
        <div
          key={dot}
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: '#9370DB',
            animation: `dotPulse 1.4s infinite ${dot * 0.2}s`
          }}
        />
      ))}
    </div>
    
    {/* Global styles for animations */}
    <style>
      {`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes progressBar {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes dotPulse {
          0%, 80%, 100% { 
            transform: scale(0.8); 
            opacity: 0.5; 
          }
          40% { 
            transform: scale(1.2); 
            opacity: 1; 
          }
        }
      `}
    </style>
  </div>
);

// ---------- Track route changes ----------
const RouteChangeTracker = ({ setLoading }) => {
  const location = useLocation();
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, [location, setLoading]);
  return null;
};

// ---------- Page transition wrapper ----------
const PageTransition = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);
  
  return (
    <div
      style={{
        animation: 'fadeIn 0.5s ease-out',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(10px)'
      }}
    >
      {children}
    </div>
  );
};

// ---------- Error Boundary ----------
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Router>
          <div
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              background: 'linear-gradient(145deg, #fff0f5, #f3e5ff)',
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              textAlign: 'center'
            }}
          >
            <div
              style={{
                maxWidth: '500px',
                padding: '30px',
                background: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(255, 105, 180, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}
            >
              <h1
                style={{
                  fontSize: '24px',
                  color: '#9370DB',
                  marginBottom: '16px',
                  fontFamily: "'Playfair Display', serif"
                }}
              >
                Oops! Something went wrong
              </h1>
              <p
                style={{
                  fontSize: '16px',
                  color: '#555',
                  marginBottom: '24px',
                  lineHeight: '1.5'
                }}
              >
                We're sorry, but something unexpected happened. Our team has been notified.
              </p>
              <button
                onClick={() => window.location.href = '/'}
                style={{
                  background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
                  border: 'none',
                  borderRadius: '50px',
                  color: 'white',
                  padding: '12px 24px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '16px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(255, 105, 180, 0.3)'
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
                Return to Home
              </button>
            </div>
          </div>
        </Router>
      );
    }

    return this.props.children;
  }
}

// ---------- Main App Component ----------
function App() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);
  const [routeLoaded, setRouteLoaded] = useState(false);

  // List any images you want to be sure are cached before entry.
  const imagesToPreload = [
    '/logo.png',
    '/logo192.png',
    '/logo512.png',
    '/assets/image1.png',
    '/assets/image2.png',
    '/assets/image3.png',
    '/assets/image4.png',
    '/assets/image5.png',
    '/assets/image9.png',
    '/assets/image10.png',
    '/assets/image11.png',
    '/assets/image12.png',
    '/assets/image13.png',
    '/assets/image14.png',
    '/assets/image15.png',
    '/assets/image16.png',
    '/assets/image17.png',
    '/assets/image18.png',
    '/assets/image19.png',
    '/assets/image20.png'
  ];

  // Valid routes that exist in the application
  const validRoutes = [
    '/',
    '/rooms',
    '/gallery',
    '/location',
    '/about',
    '/contact'
  ];

  useEffect(() => {
    // Preload images, then fade loader
    let cancelled = false;

    const preload = imagesToPreload.map(
      src =>
        new Promise(resolve => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = resolve;
        })
    );

    Promise.all(preload).then(() => {
      if (!cancelled) {
        setFade(true);               // start fade out
        setTimeout(() => setLoading(false), 600); // remove after fade
      }
    });

    return () => { cancelled = true; };
  }, []);

  // Handle route changes for smooth transitions
  const handleRouteChange = () => {
    setRouteLoaded(false);
    setTimeout(() => setRouteLoaded(true), 50);
  };

  // Check if current route is valid
  const isValidRoute = (path) => {
    // Remove query parameters and hash if present
    const cleanPath = path.split('?')[0].split('#')[0];
    return validRoutes.includes(cleanPath);
  };

  return (
    <ErrorBoundary>
      <Router>
        <RouteChangeTracker setLoading={handleRouteChange} />
        {loading && <Loader fadingOut={fade} />}

        <div
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            background: 'linear-gradient(145deg, #fff0f5, #f3e5ff)',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Navbar />
          <main style={{ flex: '1' }}>
            <Routes>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/rooms" element={<PageTransition><Rooms /></PageTransition>} />
              <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
              <Route path="/location" element={<PageTransition><Location /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              
              {/* Catch-all route that checks if the route is valid */}
              <Route 
                path="*" 
                element={
                  <RouteHandler isValidRoute={isValidRoute} />
                } 
              />
            </Routes>
          </main>
          <Footer />
          <PWAInstallPrompt />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

// ---------- Route Handler Component ----------
const RouteHandler = ({ isValidRoute }) => {
  const location = useLocation();
  
  // If the route is valid, render the page
  if (isValidRoute(location.pathname)) {
    return <PageTransition><Navigate to={location.pathname} replace /></PageTransition>;
  }
  
  // If the route is not valid, redirect to home
  return <PageTransition><Navigate to="/" replace /></PageTransition>;
};

export default App;