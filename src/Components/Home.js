import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store";

import ResponsiveAppBar from "./Navbar";
import MainFeaturedPost from "./LandingPage/MainFeaturedPost";
import BasicCard from "./LandingPage/InfoCard";

import LandingPage from "./LandingPage";

// import Grid from '@mui/material/Grid'; // Grid version 1
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Item, Typography, Container, Box } from "@mui/material";

const Home = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <br></br>
    </div>
  );
};

export default Home;
