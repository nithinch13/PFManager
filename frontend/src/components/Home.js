import { useState } from "react";
import Auth from "./Auth";
import "./Home.css";

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="home-container">
      <nav className="navbar">
        <h1>Personal Finance Manager</h1>
        <div className="nav-buttons">
          <button onClick={() => setShowLogin(true)}>Login</button>
          <button onClick={() => setShowRegister(true)}>Register</button>
        </div>
      </nav>

      <div className="content">
        <h2>Welcome to Personal Finance Manager</h2>
        <p>Track, manage, and optimize your financial goals easily.</p>
        <div className="cta-buttons">
          <button onClick={() => setShowLogin(true)}>Get Started</button>
        </div>
      </div>

      {showLogin && (
        <div className="modal">
          <div className="modal-content">
            <h2>Login</h2>
            <p>Login form will be placed here.</p>
            <button onClick={() => setShowLogin(false)}>Close</button>
          </div>
        </div>
      )}

      {showRegister && (
        <div className="modal">
          <div className="modal-content">
            <h2>Register</h2>
            <p>Registration form will be placed here.</p>
            <button onClick={() => setShowRegister(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
