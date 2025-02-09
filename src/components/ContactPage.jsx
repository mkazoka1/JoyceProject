import React from "react";
import Footer from "./Footer";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="container mt-5">
      <div className="contact-header text-center text-white p-5">
        <h2>Get in Touch</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      {[{ time: "20 min", price: "$20" }, { time: "30 min", price: "$25" }, { time: "1 hour", price: "$30" }].map(
        (session, index) => (
          <div key={index} className="text-center my-4">
            <h4>For {session.time} session {session.price}</h4>
            <div className="paypal-button">
              <button className="btn btn-primary">Pay with PayPal</button>
            </div>
          </div>
        )
      )}
      
      <Footer />
    </div>
  );
};

export default ContactPage;
