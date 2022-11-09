import * as React from "react";
import { Typography, Button } from "@mui/material";
const HeroPost = () => {
  const backgroundImage =
    "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400";

  const mainText = "Upgrade Your Sundays";
  const secondaryText = "Lorem Ipsum";

  return (
    <div>
      {/* Main Text   */}
      <Typography color="inherit" align="center" variant="h2" marked="center">
        {mainText}
      </Typography>

      {/* Secondary Text */}
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        {secondaryText}
      </Typography>

      {/* Button */}
      <Button
        align="center"
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/bundles"
        sx={{ minWidth: 200 }}
      >
        View Bundles
      </Button>
    </div>
  );
};

export default HeroPost;
