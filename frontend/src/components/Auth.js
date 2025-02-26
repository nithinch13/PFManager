import { useState } from "react";
import "./Auth.css";
import axios from "axios";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const res = await axios.post("http://localhost:5000/api/auth/login", {
          email,
          password,
        });
        alert("Login successful!");
      } else {
        await axios.post("http://localhost:5000/api/auth/register", {
          name,
          email,
          password,
        });
        alert("Registration successful! Please login.");
        setIsLogin(true);
      }
    } catch (error) {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="container">
      <h1 className="marquee-title">Welcome to Personal Finance Management</h1>
      <div className="form-container">
        
        {/* PNG Image for Login/Register */}
        <img
          src={isLogin ? "/assets/login.png" : "/assets/register.png"}
          alt={isLogin ? "Login" : "Registeration"}
          className="auth-image"
        />
        <h2>{isLogin ? "Login" : "Registeration"}</h2> {/* Added heading */}

        <div className="form-toggle">
          <button className={isLogin ? "active" : ""} onClick={() => setIsLogin(true)}>
            Login
          </button>
          <button className={!isLogin ? "active" : ""} onClick={() => setIsLogin(false)}>
            Sign Up
          </button>
        </div>
        <form onSubmit={handleSubmit} className="form">
          <div className="input-group">
            {!isLogin && (
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            /><br></br>
          </div>
          <button type="submit">{isLogin ? "Login" : "Register"}</button>
        </form>
        <a onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
        </a>
      </div>
    </div>
  );
};

export default Auth;
