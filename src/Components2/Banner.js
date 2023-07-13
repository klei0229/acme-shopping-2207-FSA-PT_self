import React from "react";

const Banner = (props) => {
  return (
    <>
      <div className="banner-background">
        <div className="banner-text">
          <span className="home-span">Home</span>
          <span> / {props.text}</span>
        </div>
      </div>
    </>
  );
};

export default Banner;
