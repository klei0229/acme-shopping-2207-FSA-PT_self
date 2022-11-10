import * as React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { Button, BasicCard, Card, Container } from "@mui/material";
import InfoCard from "./InfoCard";
import NowTrendingCard from "./NowTrendingCard";
import { useSelector } from "react-redux";

function NowTrending() {
  const { bundles } = useSelector((state) => state);
  //   console.log(bundles);
  //   let trendingBundles = [];
  const [trendingBundles, setTrendingBundles] = React.useState([]);

  const card1 = {
    image: "https://www.snackcrate.com/wp-content/uploads/2021/08/set2-box.svg",
    title: "Choose A Bundle",
    url: "https://www.snackcrate.com/wp-content/uploads/2021/08/set2-box.svg",
  };

  React.useEffect(() => {
    if (bundles.length > 0) {
      setTrendingBundles(bundles.slice(0, 6));
    }
  }, [bundles]);

  return (
    <div>
      <Typography variant="h3" align="center" gutterBottom>
        Now Trending
      </Typography>

      <Container maxWidth="xl">
        {/* <QuiltedImageList></QuiltedImageList> */}
        <Grid container align="center" spacing={2}>
          {trendingBundles.map((bundle) => {
            return (
              <Grid item align="center" xs={2}>
                {/* <h1>1</h1> */}
                <NowTrendingCard card={bundle}></NowTrendingCard>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default NowTrending;
