import React from "react";

const HeroSection = () => {
  return (
    <div className="hero-outer">
      <div className="hero-section">
        <div className="hero-container-1">
          <h1 className="hero-header">Snack Bundles For Everyone</h1>
          <p className="hero-text">
            Discover a World of Sweet Delights - Indulge in the Finest Candy &
            Snack Bundles!
          </p>
          <button>Shop Now</button>
        </div>
        <div className="hero-container-2">
          <div className="image-container">
            <div className="image-accent"></div>
            <img
              className="hero-container-2-img-1"
              src="https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
            ></img>
          </div>
          {/* <img
          className="hero-container-2-img-2"
          src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg-2.789918645915c8acb36f.jpeg"
        ></img> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
