import React, { useState, useEffect } from 'react';

export default function PWAInstallPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    // show for first 10s regardless of install event
    setShowPrompt(true);
    const hideTimer = setTimeout(() => setShowPrompt(false), 10000);

    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      clearTimeout(hideTimer);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.finally(() => setShowPrompt(false));
    } else {
      // fallback for browsers without beforeinstallprompt
      setShowPrompt(false);
    }
  };

  if (!showPrompt) return null;

  const baseStyle = {
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'linear-gradient(135deg,#FF69B4,#9370DB)',
    color: '#fff',
    padding: '10px 18px',
    borderRadius: '40px',
    boxShadow: '0 4px 20px rgba(255,105,180,0.4)',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    zIndex: 2000,
    maxWidth: '90%',
    fontFamily: "'Nunito Sans', sans-serif",
    animation: 'fadeSlide 0.5s ease-out',
  };

  const buttonBase = {
    border: 'none',
    borderRadius: '20px',
    padding: '6px 12px',
    fontSize: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    background: '#fff',
    color: '#FF69B4',
    fontWeight: 'bold'
  };

  return (
    <>
      {/* Top prompt */}
      <div style={{ ...baseStyle, position: 'fixed', top: '20px' }}>
        <span style={{ fontSize: 20 }}>📱</span>
        <span>Install Aggie Airbnb for a better experience</span>
        <button style={buttonBase} onClick={handleInstallClick}>Install</button>
      </div>

      {/* Bottom prompt */}
      <div style={{ ...baseStyle, position: 'fixed', bottom: '20px' }}>
        <span style={{ fontSize: 20 }}>📱</span>
        <span>Install Aggie Airbnb for a better experience</span>
        <button style={buttonBase} onClick={handleInstallClick}>Install</button>
      </div>

      <style>{`
        @keyframes fadeSlide {
          from {opacity:0; transform:translate(-50%,20px);}
          to   {opacity:1; transform:translate(-50%,0);}
        }
      `}</style>
    </>
  );
}
