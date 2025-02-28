import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <h1>Finance Manager</h1>
      <div>
        {user ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/auth?type=login">Login</Link>
            <Link to="/auth?type=register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
