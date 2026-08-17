import React from 'react';

function Header({ status }) {
  return (
    <header className="app-header">
      <div className="logo-section">
        <span className="moon-icon">🌕</span>
        <div>
          <h1>LUNAR SITE PREDICTOR</h1>
          <p className="subtitle">AI-Powered Lunar South Pole Landing Site Optimization</p>
        </div>
      </div>
      <div className="status-badge">
        <span className={`status-dot ${status === 'online' ? 'active' : ''}`}></span>
        <span>SYSTEM STATUS: {status.toUpperCase()}</span>
      </div>
    </header>
  );
}

export default Header;
