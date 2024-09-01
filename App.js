import React from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <Chatbot />
    </div>
  );
}

export default App;
