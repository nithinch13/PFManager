import { useState } from "react";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import "../styles/Auth.css"; // ✅ Import styles

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle state

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="toggle-buttons">
          <button onClick={() => setIsLogin(true)} className={isLogin ? "active" : ""}>
            Login
          </button>
          <button onClick={() => setIsLogin(false)} className={!isLogin ? "active" : ""}>
            Register
          </button>
        </div>

        {isLogin ? <Login /> : <Register />}
      </div>
    </div>
  );
};

export default AuthPage;
