import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store";


import FeaturedProducts from "../Components2/FeaturedProducts";
import Navbar2 from "../Components2/Navbar2";
import Newsletter from "../Components2/Newsletter";
// import Grid from '@mui/material/Grid'; // Grid version 1
import HeroSection from "../Components2/HeroSection";
import LandingPageDetailSection from "../Components2/LandingPageDetailSection";
const LandingPage2 = () => {
  return (
    <div className="main-container">
      <HeroSection></HeroSection>
      <FeaturedProducts></FeaturedProducts>
      <LandingPageDetailSection></LandingPageDetailSection>
      <Newsletter></Newsletter>
    </div>
  );
};

export default LandingPage2;
