import React, { useState, useEffect } from 'react';

export default function PWAInstallPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    // Show immediately for 10 s or until dismissed
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
      setShowPrompt(false);
    }
  };

  if (!showPrompt) return null;

  const barStyle = {
    position: 'fixed',
    top: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'linear-gradient(135deg,#FF69B4,#9370DB)',
    color: '#fff',
    padding: '8px 16px',
    borderRadius: '30px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '14px',
    zIndex: 2000,
    fontFamily: "'Nunito Sans', sans-serif",
    animation: 'fadeSlide 0.4s ease-out',
  };

  const buttonStyle = {
    border: 'none',
    borderRadius: '20px',
    padding: '4px 10px',
    fontSize: '12px',
    cursor: 'pointer',
    background: '#fff',
    color: '#FF69B4',
    fontWeight: 'bold'
  };

  const closeStyle = {
    cursor: 'pointer',
    marginLeft: '6px',
    fontSize: '16px',
    fontWeight: 'bold'
  };

  return (
    <>
      <div style={barStyle}>
        <span role="img" aria-label="phone">📱</span>
        <span>Install Aggie Airbnb for a better experience</span>
        <button style={buttonStyle} onClick={handleInstallClick}>Install</button>
        <span style={closeStyle} onClick={() => setShowPrompt(false)}>×</span>
      </div>

      <style>{`
        @keyframes fadeSlide {
          from {opacity:0; transform:translate(-50%, -10px);}
          to   {opacity:1; transform:translate(-50%, 0);}
        }
      `}</style>
    </>
  );
}
