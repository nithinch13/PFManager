import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { TransactionProvider } from "./context/TransactionContext";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import DashboardPage from "./pages/DashboardPage";
import Navbar from "./components/navbar/Navbar";
import "./styles/App.css"; // Import global styles

const AppContent = () => {
  const location = useLocation();
  const hideNavbarRoutes = ["/auth"]; // Routes where navbar should be hidden

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <TransactionProvider>
        <Router>
          <AppContent />
        </Router>
      </TransactionProvider>
    </AuthProvider>
  );
}

export default App;
