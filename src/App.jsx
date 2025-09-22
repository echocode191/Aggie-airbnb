import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Gallery from './pages/Gallery';
import Location from './pages/Location';
import About from './pages/About';
import Contact from './pages/Contact';

// Simple full-screen loader
const Loader = () => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(255,240,245,0.9)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      fontFamily: "'Nunito Sans', sans-serif",
      fontSize: '1.5rem',
      color: '#9370DB',
    }}
  >
    Loading…
  </div>
);

// Watches route changes to trigger loader
const RouteChangeTracker = ({ setLoading }) => {
  const location = useLocation();
  useEffect(() => {
    setLoading(true);
    // Small delay to simulate loading; adjust as needed
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [location, setLoading]);
  return null;
};

function App() {
  const [loading, setLoading] = useState(true);

  // Initial page load loader
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <RouteChangeTracker setLoading={setLoading} />
      {loading && <Loader />}
      <div
        style={{
          fontFamily: "'Nunito Sans', sans-serif",
          background: 'linear-gradient(145deg, #fff0f5, #f3e5ff)',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Navbar />
        <main style={{ flex: '1' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/location" element={<Location />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Catch-all route */}
            <Route
              path="*"
              element={
                <div
                  style={{
                    textAlign: 'center',
                    padding: '4rem 1rem',
                    fontSize: '1.25rem',
                    color: '#555',
                  }}
                >
                  404 – Page Not Found
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
