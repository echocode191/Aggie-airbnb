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

// ---------- Loader ----------
const Loader = ({ fadingOut }) => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(145deg,#fff0f5,#f3e5ff)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      fontFamily: "'Nunito Sans', sans-serif",
      fontSize: '1.5rem',
      color: '#9370DB',
      transition: 'opacity 0.6s ease',
      opacity: fadingOut ? 0 : 1
    }}
  >
    Welcome…
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

function App() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  // List any images you want to be sure are cached before entry.
  const imagesToPreload = [
    '/logo.png',
    '/hero.jpg',
    '/gallery1.jpg',
    '/gallery2.jpg',
    '/rooms1.jpg'
    // add more static paths here
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

  return (
    <Router>
      <RouteChangeTracker setLoading={setLoading} />
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
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/location" element={<Location />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={
                <div
                  style={{
                    textAlign: 'center',
                    padding: '4rem 1rem',
                    fontSize: '1.25rem',
                    color: '#555'
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
