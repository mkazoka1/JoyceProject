import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";  // Import AboutPage as a component
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";
import "./components/AboutPage.css";  // Import AboutPage CSS separately
import "./components/LandingPage.css";  // Import other CSS files as needed
import Services from "./components/Services"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<Services />} /> {/* Services Route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
