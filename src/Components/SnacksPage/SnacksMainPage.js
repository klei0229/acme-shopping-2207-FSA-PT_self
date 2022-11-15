import * as React from "react";
import { Container, Paper, TextField } from "@mui/material";
import {useSelector} from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom';

// import MainFeaturedPost from "./LandingPage/MainFeaturedPost";
// import SecondaryFeaturedPost from "./LandingPage/SecondaryFeaturedPost";
import { Grid, Typography, CssBaseline } from "@mui/material";
import SnackItemCard from "./SnackItemCard";


import { useEffect, useState } from "react";
function LandingPage() {
  const navigate = useNavigate()
  const {filter} = useParams();

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
      
      setProducts(productArray);
    } catch (ex) {
      console.log(ex);
    }
  }, [bundles]);
  const filtered = products.filter(product=> !filter || product.name.toLowerCase().includes(filter))
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
      <Container align='center'>
      <TextField  style={{width:"25%"}} id="outlined-basic" label="Search" variant="outlined" value={filter || '' } placeholder='What are you craving?' onChange={ev => navigate(`/snacks/${ev.target.value}`)} />
      </Container>
      <br/>
      <Container sx={{mt: 5}} maxWidth="xl" align="center">
        <Grid container spacing={4}>
          {/* {products.length} */}
          {filtered.map((product) => {
            // console.log(product);
            return (
              <Grid item md={3} key={product.id}>
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
