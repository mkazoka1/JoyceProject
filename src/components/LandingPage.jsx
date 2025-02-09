import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container d-flex justify-content-center align-items-center text-center">
      <div className="overlay"></div>
      <div className="content text-white">
        <h1 className="display-4 fw-bold">Are you tired of living paycheck to paycheck?</h1>
        <p className="lead">But are open-minded and would like to work from home and earn extra income?</p>
        <p className="mb-4">Then click below and start your journey to financial freedom.</p>
        <a href="/signup" className="btn btn-warning btn-lg fw-bold">Start Now</a>
      </div>
    </div>
  );
};

export default LandingPage;
