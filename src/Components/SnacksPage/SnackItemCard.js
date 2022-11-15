import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

import { Paper, Container } from "@mui/material";

import InventoryIcon from "@mui/icons-material/Inventory";
import CssBaseline from "@mui/material/CssBaseline";

function SnackInfoCard(props) {
  // console.log(props);
  const { card } = props;
  // console.log(card);

  const cardSX = {
    maxWidth: "250px",
    minHeight: "350px",
    maxHeight: "350px",
    pt: "40",
    mt: "10",
    mb: "30",

    "&:hover": {
      // backgroundColor: "grey",
    },
  };

  const boxSX = {
    width: "10rem",
    height: "10rem",
    borderRadius: "50%",
    // backgroundColor:"green",
    backgroundSize: "contain",
    // border: '1px dashed grey',
    backgroundImage: `url(${card.imageURL})`,
    // transitionDuration: "1000",
    "&:hover": {
      // transform: 'scale("150%")',
      // backgroundColor:'green'
      // width: "15",
      // height: "15",
    },
  };

  return (
    <div>
      <CssBaseline />
      <Card sx={cardSX}>
        <CardContent>
          <Box sx={boxSX}></Box>
          <br></br>
          <Typography variant="h6" component="div">
            {card.name}
          </Typography>

          <Typography variant="body2" color="grey">
            {/* {card.description} */}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

SnackInfoCard.propTypes = {
  card: PropTypes.shape({
    imageURL: PropTypes.string.isRequired,
    // description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default SnackInfoCard;
