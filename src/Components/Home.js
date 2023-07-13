import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store";

import ResponsiveAppBar from "./Navbar";
import MainFeaturedPost from "./LandingPage/MainFeaturedPost";
import BasicCard from "./LandingPage/InfoCard";

import LandingPage from "./LandingPage";
import FeaturedProducts from "../Components2/FeaturedProducts";
import Navbar2 from "../Components2/Navbar2";
import Newsletter from "../Components2/Newsletter";
// import Grid from '@mui/material/Grid'; // Grid version 1
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Item, Typography, Container, Box } from "@mui/material";
import HeroSection from "../Components2/HeroSection";
import LandingPageDetailSection from "../Components2/LandingPageDetailSection";
import Footer from "../Components2/Footer";
import Bundle from "../Components/Bundle/Bundle";
const Home = (props) => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="home-container">
      <Navbar2></Navbar2>

    </div>
  );
};

export default Home;
