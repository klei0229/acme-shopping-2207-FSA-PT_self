import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useSnackbar } from "notistack";
// import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { addQtyCart, fetchCart } from "../../store";
import NowTrending from "../LandingPage/NowTrending";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      {/* <Link color='inherit' href='/'>
				WorldMunchies
			</Link>{' '} */}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Bundle = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  const { bundles } = useSelector((state) => state);
  const [_bundles, setBundles] = useState([]);
  useEffect(() => {
    if (bundles.length) {
      setBundles(bundles);
    }
    dispatch(fetchCart());
  }, [bundles]);
  const { enqueueSnackbar } = useSnackbar();
  const handleClickVariant = (bundle) => {
    const item = cart.lineItems.find(
      (lineItem) => lineItem.bundleId === bundle.id
    );
    if (item) {
      dispatch(addQtyCart(item.bundle, 1, item.size, item.frequency));
    } else {
      dispatch(addQtyCart(bundle));
    }
    enqueueSnackbar("Item added to your cart!", { variant: "success" });
  };

  const bundleEven = (_bundles) => {
    let arr = [];
    for (let i = 0; i < _bundles.length; i++) {
      if (i % 2 === 0) {
        arr.push(_bundles[i]);
      }
    }
    return arr;
  };

  const bundleOdd = (_bundles) => {
    let arr = [];
    for (let i = 0; i < _bundles.length; i++) {
      if (i % 2 === 1) {
        arr.push(_bundles[i]);
      }
    }
    return arr;
  };

  return (
    <div>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography
              component="h2"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Bundles
            </Typography>
            <Typography
              variant="h7"
              align="center"
              color="text.secondary"
              paragraph
            >
              Check our selection of bundles made for every taste! No matter if
              you choose based on region, season or cookies, be sure we have
              curated the best selection of snacks just for you! <br /> Enjoy!
            </Typography>
            <Stack
              sx={{ pt: 1 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Link to="/bundles" style={{ textDecoration: "none" }}>
                <Button variant="contained">All</Button>
              </Link>
              <Link to="/bundles/featured" style={{ textDecoration: "none" }}>
                <Button variant="contained">Featured</Button>
              </Link>
              <Link to="/bundles/new" style={{ textDecoration: "none" }}>
                <Button variant="contained">New</Button>
              </Link>
              <Link to="/bundles/best" style={{ textDecoration: "none" }}>
                <Button variant="contained">Best Sellers</Button>
              </Link>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8, padding: 0 }} maxWidth="xl" align="center">
          {/* End hero unit */}
          <Grid container spacing={10} sx={{ justifyContent: "center" }}>
            {bundleEven(_bundles).map((bundle) => (
              <Grid item key={bundle.id} xs={12} sm={6} md={3}>
                <Card
                  align="center"
                  style={{ border: "none", boxShadow: "none" }}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box>
                    <div className="container">
                      <Link
                        to={`/bundles/${bundle.id}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <img
                          className="image"
                          style={{ width: "100%", height: 250 }}
                          src={bundle.imageUrl}
                          alt={bundle.name}
                        />
                        <div className="middle">
                          <div className="text">View </div>
                        </div>
                        {/* <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      maxWidth: '100%',
                      height: 250,
                     }                 
                  }
                    image={bundle.imageUrl}
                    alt={bundle.name}
                  /> */}

                        <CardContent
                          sx={{
                            flexGrow: 1,
                            color: "inherit",
                            textDecoration: "none",
                          }}
                        >
                          <Typography
                            align="center"
                            gutterBottom
                            variant="h5"
                            component="h2"
                          >
                            {bundle.name}
                          </Typography>
                          <Typography variant="body2">
                            Starting At ${bundle.price}
                          </Typography>
                        </CardContent>
                      </Link>
                    </div>
                  </Box>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <Button
                      sx={{
                        mb: 2,
                        transition: "all 0.2s ease",
                        "&:hover": {
                          transform: "scale3d(1.6, 1.6, 1)",
                        },
                      }}
                      size="small"
                      variant="contained"
                      style={{ textDecoration: "none" }}
                      onClick={(ev) => {
                        ev.preventDefault();
                        handleClickVariant(bundle);
                      }}
                    >
                      Add to cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <br />
          <Grid sx={{ mt: 2, justifyContent: "center" }}>
            <NowTrending></NowTrending>
          </Grid>
          <br />
          <Grid
            style={{ marginTop: 2 }}
            container
            spacing={10}
            sx={{ justifyContent: "center" }}
          >
            {bundleOdd(_bundles).map((bundle) => (
              <Grid item key={bundle.id} xs={12} sm={6} md={3}>
                <Card
                  align="center"
                  style={{ border: "none", boxShadow: "none" }}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box>
                    <div className="container">
                      <Link
                        to={`/bundles/${bundle.id}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <img
                          className="image"
                          style={{ width: "100%", height: 250 }}
                          src={bundle.imageUrl}
                          alt={bundle.name}
                        />
                        <div className="middle">
                          <div className="text">View </div>
                        </div>
                        {/* <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      maxWidth: '100%',
                      height: 250,
                     }                 
                  }
                    image={bundle.imageUrl}
                    alt={bundle.name}
                  /> */}

                        <CardContent
                          sx={{
                            flexGrow: 1,
                            color: "inherit",
                            textDecoration: "none",
                          }}
                        >
                          <Typography
                            align="center"
                            gutterBottom
                            variant="h5"
                            component="h2"
                          >
                            {bundle.name}
                          </Typography>{" "}
                          <Typography variant="body2">
                            Starting At ${bundle.price}
                          </Typography>
                        </CardContent>
                      </Link>
                    </div>
                  </Box>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <Button
                      sx={{
                        mb: 2,
                        transition: "all 0.2s ease",
                        "&:hover": {
                          transform: "scale3d(1.6, 1.6, 1)",
                        },
                      }}
                      size="small"
                      variant="contained"
                      style={{ textDecoration: "none" }}
                      onClick={(ev) => {
                        ev.preventDefault();
                        handleClickVariant(bundle);
                      }}
                    >
                      Add to cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom></Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          made with love
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </div>
  );
};

export default Bundle;
