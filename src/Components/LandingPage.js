import * as React from "react";
import { Container, Paper } from "@mui/material";
import MainFeaturedPost from "./LandingPage/MainFeaturedPost";
import SecondaryFeaturedPost from "./LandingPage/SecondaryFeaturedPost";
import { Grid, Typography } from "@mui/material";
import HowItWorks from "./LandingPage/HowItWorks";
import NowTrending from "./LandingPage/NowTrending";

function LandingPage() {
  const mainFeaturedPost = {
    title: "Snack Bundles for Everyone",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    image:
      "https://img.freepik.com/free-photo/closeup-shot-candy-canes-other-candies-green-background-perfcet-cool-wallpaper_181624-10003.jpg?w=1800&t=st=1667946946~exp=1667947546~hmac=333269566a28179218ace76b7b948dd3793d52f9f7d060c4bea26dff4a0ca960",
    imageText: "main image description",
    linkText: "See Bundles",
  };

  const sideFeaturedPost1 = {
    title: "Around the World Bundles",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    image:
      "http://cdn.shopify.com/s/files/1/1832/6341/products/PLTC_FIL_004_GOLD__02_1024x1024.jpg?v=1612575928",
    linkText: "See Bundles",
  };

  const sideFeaturedPost2 = {
    title: "October Bundle",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    image:
      "https://media.istockphoto.com/id/855767220/vector/set-of-halloween-candies.jpg?s=612x612&w=0&k=20&c=Yysp4a8vfjzjDRZw2IVsPYPjWrXBrrhyqpQx-GoW2lk=",
    imageText: "main image description",
    linkText: "See Bundles",
  };

  const sideFeaturedPost3 = {
    title: "Curated By Type",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    image:
      "https://media.istockphoto.com/id/1168124016/photo/closeup-of-a-table-of-different-types-of-candy-for-sale.jpg?s=170667a&w=0&k=20&c=qZ_TaVYIDBDqJpeFQDlqM2zoxqLa7pdnSBMH4y-Y7K0=",
    imageText: "main image description",
    linkText: "See Bundles",
  };

  const christmasFeaturedPost = {
    title: "Christmas Bundle",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    image:
      "https://www.farmersalmanac.com/wp-content/uploads/2011/12/candy-canes-as_235424105-.jpeg",
    imageText: "main image description",
    linkText: "See Bundles",
  };

  const thanksGivingFeaturedPost = {
    title: "Thanksgiving Bundle",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    image: "http://www.ohnuts.com/blog/candy-turkey-14.jpg",
    imageText: "main image description",
    linkText: "See Bundles",
  };

  return (
    <div>
      <Container maxWidth="xl" align="center">
        <MainFeaturedPost post={mainFeaturedPost} />

        <Grid container spacing={2}>
          <Grid item md={4}>
            <SecondaryFeaturedPost post={sideFeaturedPost1} />
          </Grid>
          <Grid item md={4}>
            <SecondaryFeaturedPost post={sideFeaturedPost2} />
          </Grid>
          <Grid item md={4}>
            <SecondaryFeaturedPost post={sideFeaturedPost3} />
          </Grid>
        </Grid>

        <HowItWorks></HowItWorks>

        <Typography variant="h3" align="center" gutterBottom>
          Upcoming Holidays
        </Typography>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <SecondaryFeaturedPost post={christmasFeaturedPost} />
          </Grid>
          <Grid item md={6}>
            <SecondaryFeaturedPost post={thanksGivingFeaturedPost} />
          </Grid>
        </Grid>

        <NowTrending></NowTrending>
      </Container>
    </div>
  );
}

export default LandingPage;
