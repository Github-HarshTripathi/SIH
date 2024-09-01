import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <h1>Welcome to TIXPLORE Museum</h1>
      <p>Experience a new way of exploring our museum with TIXPLORE chatbot.</p>
      <p>Take a virtual tour, check real-time crowd levels, and more!</p>
      <div className="buttons">
        <button className="demo-btn">Schedule Demo</button>
        <button className="template-btn">Explore Features</button>
      </div>
    </div>
  );
};

export default MainContent;
