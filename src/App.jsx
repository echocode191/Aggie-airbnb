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

// ---------- Loader ----------
// ---------- Loader ----------
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
    {/* Announcement Banner */}
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        background: 'linear-gradient(90deg, #FF69B4, #9370DB)',
        color: 'white',
        textAlign: 'center',
        padding: '12px 20px',
        fontSize: '16px',
        fontWeight: '600',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        zIndex: 10000
      }}
    >
      🚀 Our aggieairbnb.co.ke will be live in 48hrs
    </div>

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
    <h1
      style={{
        fontSize: '2rem',
        fontWeight: '700',
        color: '#9370DB',
        marginBottom: '12px',
        fontFamily: "'Playfair Display', serif"
      }}
    >
      Aggie Airbnb
    </h1>
    <p style={{ fontSize: '1.2rem', color: '#FF69B4', opacity: 0.9 }}>
      Preparing your experience...
    </p>
    <style>
      {`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}
    </style>
  </div>
);
// ---------- Track route changes for mini-loader ----------
const RouteChangeTracker = ({ setLoading }) => {
  const location = useLocation();
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, [location, setLoading]);
  return null;
};

// ---------- Page fade-in wrapper ----------
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
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            background: 'linear-gradient(145deg, #fff0f5, #f3e5ff)',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '20px'
          }}
        >
          <h1 style={{ color: '#9370DB' }}>Oops! Something went wrong.</h1>
          <button
            onClick={() => (window.location.href = '/')}
            style={{
              marginTop: '20px',
              background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
              border: 'none',
              borderRadius: '50px',
              color: '#fff',
              padding: '12px 24px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Return to Home
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// ---------- Main App ----------
export default function App() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(() => setLoading(false), 600);
    }, 800); // simulate image preloading
    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <RouteChangeTracker setLoading={() => {}} />
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

              {/* ✅ Catch-all: redirect any unknown route to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <PWAInstallPrompt />
        </div>
      </Router>
    </ErrorBoundary>
  );
}
