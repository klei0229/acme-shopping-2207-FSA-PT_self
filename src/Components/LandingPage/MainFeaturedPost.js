import * as React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { Button, alpha, Container } from "@mui/material";

function MainFeaturedPost(props) {
  const { post } = props;

  return (
    <Paper
      sx={[
        {
          minWidth: "100%",
          minHeight: "65%",
          position: "relative",
          backgroundColor: "grey.800",
          color: "#fff",
          mb: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${post.image})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: ".5s",

          // backgroundColor:'green',
        },
        {
          "&:hover": {
            // backgroundSize: "contain",
            // transform: "scale(1.1)",
            // backgroundSize: "150%",
            // transition: "transform backgroundSize(101%) .5s ease"
          },
        },
      ]}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src={post.image}
          alt={post.imageText}
        />
      }

      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
          // backgroundColor:'red',
        }}
      />
      <Grid container align="center">
        <Grid item md={12}>
          <Box
            sx={{
              // backgroundColor:'green',
              minWidth: "65%",
              maxWidth: "75%",
              position: "relative",
              p: "20",
              // pt: { xs: 3, md: 6 }
              backgroundColor: alpha("#000000", 0.3),
              // backgroundOpacity:"25"
            }}
          >
            <Typography
              component="h3"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {post.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.description}
            </Typography>
            <Button
              href="#/bundles"
              variant="contained"
              // sx={{ backgroundColor: "teal" }}
            >
              View Bundles
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainFeaturedPost;
