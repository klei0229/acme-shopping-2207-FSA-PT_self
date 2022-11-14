import * as React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { Button, alpha } from "@mui/material";

function MainFeaturedPost(props) {
  const { post } = props;

  return (
    <Paper
      sx={{
        // minWidth: "7",
        // maxHeight: "45%",
        minHeight: "400px",
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

        backgroundColor: "green",
      }}
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
          //   backgroundColor:'red',
        }}
      />
      <Grid container align="center">
        <Grid item md={12}>
          <Box
            sx={{
              padding: 3,
              backgroundColor: alpha("#000000", 0.5),
              minWidth: "75%",
              position: "relative",
              // pt: { xs: 3, md: 6 }
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
            {/* <Typography variant="h5" color="inherit" paragraph>
              {post.description}
            </Typography> */}
            <Button
              variant="contained"
              href={post.link}
              sx={{
                // backgroundColor: "teal",
              }}
            >
              See Bundle
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
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainFeaturedPost;
