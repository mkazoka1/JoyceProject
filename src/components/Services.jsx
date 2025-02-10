import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Services = () => {
  useEffect(() => {
    window.paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [{ amount: { value: "20.00" } }],
        });
      },
      onApprove: (data, actions) => {
        return actions.order.capture().then((details) => {
          alert(`Transaction completed by ${details.payer.name.given_name}`);
        });
      },
    }).render("#paypal-button-container-20");

    window.paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [{ amount: { value: "25.00" } }],
        });
      },
      onApprove: (data, actions) => {
        return actions.order.capture().then((details) => {
          alert(`Transaction completed by ${details.payer.name.given_name}`);
        });
      },
    }).render("#paypal-button-container-25");

    window.paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [{ amount: { value: "30.00" } }],
        });
      },
      onApprove: (data, actions) => {
        return actions.order.capture().then((details) => {
          alert(`Transaction completed by ${details.payer.name.given_name}`);
        });
      },
    }).render("#paypal-button-container-30");
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Choose Your Session</h2>

      {/* First Container: $20 for 20 Minutes */}
      <div className="p-4 mb-4 text-white text-center" style={{ backgroundColor: "blue", borderRadius: "10px" }}>
        <h3>$20 for 20 Minutes Session</h3>
        <p>Get expert guidance in just 20 minutes.</p>
        <div id="paypal-button-container-20"></div>
      </div>

      {/* Second Container: $25 for 30 Minutes */}
      <div className="p-4 mb-4 text-white text-center" style={{ backgroundColor: "blue", borderRadius: "10px" }}>
        <h3>$25 for 30 Minutes Session</h3>
        <p>More time for deeper insights.</p>
        <div id="paypal-button-container-25"></div>
      </div>

      {/* Third Container: $30 for 60 Minutes */}
      <div className="p-4 text-white text-center" style={{ backgroundColor: "blue", borderRadius: "10px" }}>
        <h3>$30 for 60 Minutes Session</h3>
        <p>Full-hour session for in-depth consultation.</p>
        <div id="paypal-button-container-30"></div>
      </div>
    </div>
  );
};

export default Services;
