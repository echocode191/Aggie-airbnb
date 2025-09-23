import React, { useState, useEffect } from 'react';

const PWAInstallPrompt = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();           // stop the default mini-infobar
      setDeferredPrompt(e);         // stash event
      setShowPrompt(true);          // show our custom prompt
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      console.log(
        choiceResult.outcome === 'accepted'
          ? 'User accepted the install prompt'
          : 'User dismissed the install prompt'
      );
      setDeferredPrompt(null);
      setShowPrompt(false);
    });
  };

  const handleDismissClick = () => setShowPrompt(false);

  if (!showPrompt) return null;

  const containerStyle = {
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'linear-gradient(135deg, #FF69B4, #9370DB)',
    color: '#fff',
    padding: '15px 20px',
    borderRadius: '50px',
    boxShadow: '0 4px 20px rgba(255,105,180,0.4)',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    zIndex: 1000,
    maxWidth: '90%',
    animation: 'slideUp 0.5s ease-out'
  };

  const textBlockStyle = { display: 'flex', alignItems: 'center', gap: '10px' };
  const actionsStyle = { display: 'flex', gap: '10px', marginLeft: 'auto' };

  const btnBase = {
    border: 'none',
    borderRadius: '20px',
    padding: '6px 12px',
    fontSize: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  const dismissBtnStyle = {
    ...btnBase,
    background: 'rgba(255,255,255,0.2)',
    color: '#fff'
  };

  const installBtnStyle = {
    ...btnBase,
    background: '#fff',
    color: '#FF69B4',
    fontWeight: 'bold'
  };

  return (
    <div style={containerStyle}>
      <div style={textBlockStyle}>
        <span style={{ fontSize: '20px' }}>📱</span>
        <div>
          <div style={{ fontWeight: 'bold', fontSize: '14px' }}>Install Aggie Airbnb</div>
          <div style={{ fontSize: '12px', opacity: 0.9 }}>Get our app on your home screen</div>
        </div>
      </div>
      <div style={actionsStyle}>
        <button
          type="button"
          onClick={handleDismissClick}
          style={dismissBtnStyle}
        >
          Not now
        </button>
        <button
          type="button"
          onClick={handleInstallClick}
          style={installBtnStyle}
        >
          Install
        </button>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;
