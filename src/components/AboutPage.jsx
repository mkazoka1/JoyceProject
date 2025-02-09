import React from "react";
import Footer from "./Footer";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="container mt-5">
      {[1, 2, 3].map((num) => (
        <div key={num} className="row mb-4 align-items-center">
          <div className="col-md-6">
            <img src={`/image${num}.jpg`} className="img-fluid rounded" alt={`Image ${num}`} />
          </div>
          <div className="col-md-6">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius.</p>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default AboutPage;
