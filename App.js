// App.js
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './Profile';
import ChatbotApp from "./ChatbotApp";
import EmbeddedIframe from "./EmbeddedIFrame";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Dashboard</h1>
      </header>

      <div className="App-container">
        <nav className="App-menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

        <main className="MainContent">
          {/* Your main content goes here */}
          <EmbeddedIframe />
        </main>

        <aside className="Profile">
          <Profile />
        </aside>
      </div>

      <div>
        <h1>OpenAI Chatbot App</h1>
        <ChatbotApp />
      </div>
    </div>
  );
}

export default App;
