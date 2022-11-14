import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  Card,
  Grid,
  Container,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  ToggleButtonGroup,
  ToggleButton,
  CssBaseline,
} from "@mui/material";
import SnackItemCard from "./SnacksPage/SnackItemCard";

// import ToggleButtons from "./BundleDetails/ToggleButtons";

const BundleDetail = () => {
  const { id } = useParams();
  const { bundles } = useSelector((state) => state);
  const [bundle, setBundle] = useState({});
  const [products, setProducts] = useState([]);

  const [subscription, setSubscription] = useState("monthly");
  const [size, setSize] = useState("small");

  const basePrice = 14.99;
  const [price, setPrice] = useState(`$${basePrice}`);

  //   let price = "14.99"

  const handleSubscription = (event, newSubscription) => {
    console.log("clicked");
    console.log("last is:" + subscription);
    if (newSubscription !== null) {
      setSubscription(newSubscription);
      if (newSubscription == "monthly") {
        if (size == "small") {
          setPrice(`$${basePrice}`);
          console.log(1);
        } else {
          setPrice(`$${(basePrice * 1.75).toFixed(2)}`);
        }
      } else {
        if (size == "small") {
          setPrice(`$${(basePrice * 1.75).toFixed(2)}`);
          console.log(1);
        } else {
          setPrice(`$${(basePrice * 11 * 1.75).toFixed(2)}`);
        }
      }
    }
  };

  const handleSize = (event, newSize) => {
    if (newSize !== null) {
      setSize(newSize);
      //   calculatePrice();

      if (newSize == "large") {
        if (subscription == "monthly") {
          setPrice(`$${(basePrice * 1.75).toFixed(2)}`);
          console.log(1);
        } else {
          setPrice(`$${(basePrice * 1.75 * 11).toFixed(2)}`);
        }
      } else {
        if (subscription == "monthly") {
          setPrice(`$${basePrice}`);
          console.log(1);
        } else {
          setPrice(`$${(basePrice * 11).toFixed(2)}`);
        }
      }
    }
    // console.log(newSize);
  };

  const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.";

  const addToCart = () => {
    console.log(subscription);
    console.log(size);
  };

  useEffect(() => {
    if (bundles.length) {
      const bundle = bundles.find((bundle) => bundle.id === id);
      setBundle(bundle);
      setProducts(bundle.products);
    }
  }, [bundles]);

  return (
    <div>
      <div>
        {/* <h1>{bundle.name}</h1> */}
        <Button sx={{ mt: 4 }}>
          <Link to={"/bundles"} style={{ textDecoration: "none" }}>
            Return to our other bundless3423
          </Link>
        </Button>
      </div>
      <div>
        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* <Typography variant="h2">{bundle.name}</Typography> */}
          <Grid container spacing={2}>
            <Grid item md={7}>
              <CardMedia
                component="img"
                height="100%"
                image={bundle.imageUrl}
                alt="image"
              />

              {/* <img src={bundle.imageUrl}></img> */}
              {/* </Box> */}
            </Grid>

            <Grid item md={5}>
              {/* <h3>Details</h3> */}
              <Container
                sx={{
                  margin: "5",
                  // padding:
                }}
              >
                <Typography variant="h3" gutterBottom>
                  {bundle.name}
                </Typography>
                <Typography variant="h4" gutterBottom>
                  {price}
                </Typography>
                <Typography variant="p" gutterBottom>
                  {description}
                </Typography>
                <br></br>
                <br></br>
                <Typography variant="h5" gutterBottom>
                  Frequency
                </Typography>
                <ToggleButtonGroup
                  value={subscription}
                  exclusive
                  onChange={handleSubscription}
                  aria-label="subscription"
                  fullWidth="true"
                >
                  <ToggleButton value="monthly" aria-label="monthly">
                    Monthly
                  </ToggleButton>
                  <ToggleButton value="annually" aria-label="annually">
                    Annually
                  </ToggleButton>
                </ToggleButtonGroup>
                <br></br>
                <br></br>

                <Typography variant="h5">Size</Typography>
                <ToggleButtonGroup
                  value={size}
                  exclusive
                  onChange={handleSize}
                  aria-label="small"
                  fullWidth="true"
                >
                  <ToggleButton value="small" aria-label="small">
                    Small
                  </ToggleButton>
                  <ToggleButton value="large" aria-label="large">
                    Large
                  </ToggleButton>
                </ToggleButtonGroup>
                <br></br>
                <br></br>
                <Button
                  sx={{ mt: "10" }}
                  size="large"
                  fullWidth="true"
                  variant="contained"
                  onClick={addToCart}
                >
                  Add To Cart
                </Button>
              </Container>
            </Grid>
          </Grid>
          <br></br>
          <br></br>

          {/* Bundle Many Include Grid */}
          <Typography variant="h4">Bundle May Include</Typography>
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
          </Container>
          {/* 
          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image={product.imageURL}
                    alt={product.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid> */}
        </Container>
      </div>
    </div>
  );
};

export default BundleDetail;
