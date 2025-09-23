import React, { useState, useEffect } from 'react';

export default function PWAInstallPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () =>
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  const handleInstallClick = () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choice) => {
      console.log(
        choice.outcome === 'accepted'
          ? 'User accepted the install prompt'
          : 'User dismissed the install prompt'
      );
      setDeferredPrompt(null);
      setShowPrompt(false);
    });
  };

  if (!showPrompt) return null;

  // ✅ Define all style objects before the JSX return
  const containerStyle = {
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'linear-gradient(135deg,#FF69B4,#9370DB)',
    color: '#fff',
    padding: '15px 20px',
    borderRadius: '50px',
    boxShadow: '0 4px 20px rgba(255,105,180,0.4)',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    zIndex: 1000,
    maxWidth: '90%',
    animation: 'slideUp 0.5s ease-out',
  };

  const textBlockStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  const buttonBase = {
    border: 'none',
    borderRadius: '20px',
    padding: '6px 12px',
    fontSize: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={containerStyle}>
      <div style={textBlockStyle}>
        <span style={{ fontSize: '20px' }}>📱</span>
        <div>
          <div style={{ fontWeight: 'bold', fontSize: '14px' }}>Install Aggie Airbnb</div>
          <div style={{ fontSize: '12px', opacity: 0.9 }}>
            Get our app on your home screen
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '10px', marginLeft: 'auto' }}>
        <button
          onClick={() => setShowPrompt(false)}
          style={{ ...buttonBase, background: 'rgba(255,255,255,0.2)', color: '#fff' }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.3)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
        >
          Not now
        </button>

        <button
          onClick={handleInstallClick}
          style={{ ...buttonBase, background: '#fff', color: '#FF69B4', fontWeight: 'bold' }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          Install
        </button>
      </div>
    </div>
  );
}
