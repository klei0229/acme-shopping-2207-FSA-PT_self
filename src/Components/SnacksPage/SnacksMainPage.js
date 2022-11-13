import * as React from "react";
import { Container, Paper } from "@mui/material";
// import MainFeaturedPost from "./LandingPage/MainFeaturedPost";
// import SecondaryFeaturedPost from "./LandingPage/SecondaryFeaturedPost";
import { Grid, Typography, CssBaseline } from "@mui/material";
import SnackItemCard from "./SnackItemCard";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
function LandingPage() {
  //gets bundles from store and extract items from each bundle
  const bundles = useSelector((state) => state.bundles);

  const [products, setProducts] = useState([]);
  let productArray = [];
  // console.log(bundles);

  useEffect(() => {
    // console.log(bundles);
    try {
      bundles.forEach((bundle) => {
        // console.log(bundle.products)
        productArray = productArray.concat(bundle.products);
        // console.log(products);
      });
      // console.log(productArray);
      setProducts(productArray);
    } catch (ex) {
      console.log(ex);
    }
  }, [bundles]);

  return (
    <div>
      <CssBaseline />
      <br></br>
      <br></br>
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Snacks
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          These are all the potential snacks you can receive from one of our
          bundles. Have a look!
        </Typography>
        <br></br>
        <br></br>
      </Container>
      <Container maxWidth="lg" align="center">
        <Grid container spacing={1}>
          {/* {products.length} */}
          {products.map((product) => {
            // console.log(product);
            return (
              <Grid item md={3}>
                {/* <h1>1</h1> */}
                <SnackItemCard card={product}></SnackItemCard>
              </Grid>
            );
          })}
          {/* <Grid item md={3}>
            <h1>test</h1>
            <SnackItemCard></SnackItemCard>
          </Grid> */}
        </Grid>

        <Grid container spacing={2}>
          <Grid item md={6}>
            {/* <SecondaryFeaturedPost post={christmasFeaturedPost} /> */}
          </Grid>
          <Grid item md={6}>
            {/* <SecondaryFeaturedPost post={thanksGivingFeaturedPost} /> */}
          </Grid>
        </Grid>

        {/* <NowTrending></NowTrending> */}
      </Container>
    </div>
  );
}

export default LandingPage;
