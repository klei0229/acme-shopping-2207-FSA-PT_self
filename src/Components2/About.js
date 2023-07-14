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
            src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f6786a3aca992.jpeg"
          ></img>
        </div>
        <div className="about-col-2">
          <h1>Our Story</h1>
          <div className="story-underline"> _______</div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
