import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store';

import ResponsiveAppBar from './Navbar';
import MainFeaturedPost from './LandingPage/MainFeaturedPost';
import BasicCard from './LandingPage/InfoCard';
import HeroPost from './LandingPage/HeroPost';


// import Grid from '@mui/material/Grid'; // Grid version 1
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {Item, Typography, Container} from '@mui/material';


const Home = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const mainFeaturedPost = {
    title: 'Title: Snack Bundles for Everyone',
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    image: 'https://img.freepik.com/free-photo/closeup-shot-candy-canes-other-candies-green-background-perfcet-cool-wallpaper_181624-10003.jpg?w=1800&t=st=1667946946~exp=1667947546~hmac=333269566a28179218ace76b7b948dd3793d52f9f7d060c4bea26dff4a0ca960',
    imageText: 'main image description',
    linkText: 'See Bundles',
  };

  const sideFeaturedPost1 = {
    title: 'Around the World Bundles',
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    image: 'http://cdn.shopify.com/s/files/1/1832/6341/products/PLTC_FIL_004_GOLD__02_1024x1024.jpg?v=1612575928',
    linkText: 'See Bundles',
  };

  const sideFeaturedPost2 = {
    title: 'Christmas Bundle',
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    image: 'https://www.farmersalmanac.com/wp-content/uploads/2011/12/candy-canes-as_235424105-.jpeg',
    imageText: 'main image description',
    linkText: 'See Bundles',
  };

  const sideFeaturedPost3 = {
    title: 'Curated By Type',
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    image: 'https://media.istockphoto.com/id/1168124016/photo/closeup-of-a-table-of-different-types-of-candy-for-sale.jpg?s=170667a&w=0&k=20&c=qZ_TaVYIDBDqJpeFQDlqM2zoxqLa7pdnSBMH4y-Y7K0=',
    imageText: 'main image description',
    linkText: 'See Bundles',
  };

  const card1 = {
    title: 'Curated By Type',
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    image: 'https://media.istockphoto.com/id/1168124016/photo/closeup-of-a-table-of-different-types-of-candy-for-sale.jpg?s=170667a&w=0&k=20&c=qZ_TaVYIDBDqJpeFQDlqM2zoxqLa7pdnSBMH4y-Y7K0=',
    imageText: 'main image description',
    linkText: 'See Bundles',
  }

  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <hr></hr>

      {/* <HeroPost></HeroPost> */}

      <Container maxWidth="xl" align = 'center'> 
        <MainFeaturedPost post={mainFeaturedPost}/>


      <Grid container spacing={2}>
      
        <Grid xs={4}>
          <MainFeaturedPost post={sideFeaturedPost1}/>
        </Grid>
        <Grid xs={4}>
          {/* <Item>xs=4</Item> */}
          <MainFeaturedPost post={sideFeaturedPost2}/>
        </Grid>
        <Grid xs={4}>
          <MainFeaturedPost post={sideFeaturedPost3}/>
        </Grid>
      
      </Grid>
      <Grid container align ='center' spacing={2}>
      <Typography variant="h5" align="center">How It Works</Typography>
      <Grid align ='center' xs={1.5}>
        </Grid> 
        <Grid align ='center' xs={3}>
          <BasicCard/>
        </Grid>        
        <Grid align ='center'  xs={3}>
          <BasicCard/>
        </Grid>
        <Grid align ='center'  xs={3}>
          <BasicCard/>
        </Grid>
      </Grid>
      </Container>
      <hr></hr>
      

      


      {/* <h1>Home</h1>
      <div>
        Welcome { auth.username }!!
        <button onClick={()=> dispatch(logout())}>Logout</button>
        {
          !!auth.avatar && <img src={auth.avatar} />
        }
      </div> */}
    </div>
  );
};

export default Home;
