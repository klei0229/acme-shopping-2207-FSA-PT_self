import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="section">
        <h2>Join our newsletter and get 20% off</h2>
        <div className="flex-row center-vertical">
          <p className="news-letter">
            Stay Sweetly Updated - Subscribe to Our Newsletter for Exclusive
            Deals and Tasty Treats!
          </p>
          <input placeholder="Enter Email"></input>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
