import * as React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { Button, BasicCard, Card, Container, CssBaseline, Divider } from "@mui/material";
import InfoCard from "./InfoCard";

function HowItWorks() {
  const card1 = {
    number: "1",
    image: "https://cdn-icons-png.flaticon.com/512/7444/7444243.png",
    title: "Choose A Bundle",
    description: "Choose between a variety of snacks.",
  };

  const card2 = {
    number: "2",
    image: "https://cdn-icons-png.flaticon.com/512/2523/2523166.png",
    title: "Select A Size",
    description: "Choose between regular or large bundle",
  };

  const card3 = {
    number: "3",
    image: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
    title: "Select A Subscription",
    description: "Select between a monthly or annual subscription",
  };

  const card4 = {
    number: "4",
    image: "https://cdn-icons-png.flaticon.com/512/4184/4184759.png",
    title: "Get Bundle",
    description: "Enjoy the contents of your bundle!",
  };

  return (
    <div>
      <CssBaseline/>
      <Typography variant="h3" align="center" gutterBottom>
        How It Works
      </Typography>
      <Container maxWidth="xs">
      <Divider variant = "middle"></Divider>
      </Container>
      <br></br>
    <br></br>
      <Container maxWidth="lg">
        <Grid container align="center" spacing={4}>
          <Grid item align="center" xs={3}>
            <InfoCard card={card1}></InfoCard>
          </Grid>
          <Grid item align="center" xs={3}>
            <InfoCard card={card2}></InfoCard>
          </Grid>
          <Grid item align="center" xs={3}>
            <InfoCard card={card3}></InfoCard>
          </Grid>
          <Grid item align="center" xs={3}>
            <InfoCard card={card4}></InfoCard>
          </Grid>
        </Grid>
      </Container>
      <br></br>    <br></br>
    </div>
  );
}

export default HowItWorks;
