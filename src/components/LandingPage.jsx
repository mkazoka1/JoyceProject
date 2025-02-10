import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "bootstrap/dist/css/bootstrap.min.css";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="landing-container d-flex justify-content-center align-items-center text-center">
      <div className="overlay"></div>
      <div className="content text-white">
        <h1 className="display-4 fw-bold">Are you tired of living paycheck to paycheck?</h1>
        <p className="lead">But are open-minded and would like to work from home and earn extra income?</p>
        <p className="mb-4">Then click below and start your journey to financial freedom.</p>
        
        {/* Navigate to /services when button is clicked */}
        <button onClick={() => navigate("/services")} className="btn btn-warning btn-lg fw-bold">
          Start Now
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
