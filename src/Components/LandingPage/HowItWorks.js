import * as React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { Button, BasicCard, Card, Container, CssBaseline } from "@mui/material";
import InfoCard from "./InfoCard";

function HowItWorks() {
  const card1 = {
    number: "1",
    image: "https://www.snackcrate.com/wp-content/uploads/2021/08/set2-box.svg",
    title: "Choose A Bundle",
    description: "Choose between a variety of snack",
  };

  const card2 = {
    number: "2",
    image: "https://www.snackcrate.com/wp-content/uploads/2021/08/set2-box.svg",
    title: "Select a Size",
    description: "Choose Between Regular or Large Bundle",
  };

  const card3 = {
    number: "3",
    image: "https://www.snackcrate.com/wp-content/uploads/2021/08/set2-box.svg",
    title: "Select A Subscription",
    description: "Select Between a Monthly or Annual Subscription",
  };

  const card4 = {
    number: "4",
    image: "https://www.snackcrate.com/wp-content/uploads/2021/08/set2-box.svg",
    title: "Get Bundle",
    description: "Enjoy the contents of your bundle!",
  };

  return (
    <div>
      <CssBaseline/>
      <Typography variant="h3" align="center" gutterBottom>
        How It Works
      </Typography>

      <Container maxWidth="lg">
        <Grid container align="center" spacing={2}>
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
    </div>
  );
}

export default HowItWorks;
