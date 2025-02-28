import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import "../../styles/Auth.css";

const AuthForm = ({ isLogin }) => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await login(formData.email, formData.password);
      } else {
        await axios.post("http://localhost:5000/api/auth/register", formData);
        alert("Registration successful! Please login.");
      }
    } catch (error) {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        {!isLogin && <input type="text" name="name" placeholder="Name" onChange={handleChange} required />}
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">{isLogin ? "Login" : "Register"}</button>
      </form>
    </div>
  );
};

export default AuthForm;
