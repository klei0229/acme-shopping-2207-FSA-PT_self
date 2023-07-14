import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="section">
        <h2>Join our newsletter and get 20% off</h2>
        <div className="flex-row center-vertical">
          <p className="news-letter">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint unde quaerat ratione soluta veniam provident adipisci cumque
            eveniet tempore?
          </p>
          <input placeholder="Enter Email"></input>
          <button >Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
