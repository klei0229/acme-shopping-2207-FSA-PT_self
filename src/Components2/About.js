import React from "react";
import Banner from "./Banner";

const About = () => {
  return (
    <div className="about-page">
      <Banner text="About"></Banner>
      <div className="inner-about">
        <div className="about-col-1">
          <img
            className="about-img"
            src="https://images.unsplash.com/photo-1532117364815-720cd35ff6e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
          ></img>
        </div>
        <div className="about-col-2">
          <h1>Our Story</h1>
          <div className="story-underline"> _______</div>
          <p>
          Welcome to Snackclub - your candy and snack wonderland! We curate the finest treats from around the world to create unique bundles that ignite your taste buds and imagination. From nostalgic classics to trendy sensations, each handpicked bundle promises an unforgettable experience. Quality is our priority, as we partner with trusted suppliers to ensure freshness and delectable flavors. Share the joy with loved ones or elevate your celebrations with our thoughtful candy and snack bundles. Join us on this scrumptious journey of exploration and delight!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
