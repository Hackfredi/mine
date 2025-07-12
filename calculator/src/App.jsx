import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import Testimonials from "./pages/Testimonials/Testimonials";
import Support from "./pages/Support/Support";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import AccountSettings from "./pages/Account/AccountSettings";
import NotFound from "./pages/NotFound/NotFound";
import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Main layout wraps all public pages */}
          <Route path="/" element={<MainLayout />}>
            {/* Public routes */}
            <Route index element={<Home />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="how-it-works" element={<HowItWorks />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="support" element={<Support />} />

            {/* Auth routes (public) */}
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />

            {/* Protected routes (require authentication) */}
            <Route element={<ProtectedRoute />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="account" element={<AccountSettings />} />
            </Route>

            {/* 404 handler */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
