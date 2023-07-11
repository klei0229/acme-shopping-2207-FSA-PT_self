import React from "react";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-container-1">
        <h1 className="hero-header">Design Your Comfort Zone</h1>
        <p className="hero-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>
        <button>Shop Now</button>
      </div>
      <div className="hero-container-2">
        <div className="image-container">
          <div className="image-accent"></div>
          <img
            className="hero-container-2-img-1"
            src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f6786a3aca992.jpeg"
          ></img>
        </div>
        {/* <img
          className="hero-container-2-img-2"
          src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg-2.789918645915c8acb36f.jpeg"
        ></img> */}
      </div>
    </div>
  );
};

export default HeroSection;
