import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

import { Paper, CardMedia } from "@mui/material";

import InventoryIcon from "@mui/icons-material/Inventory";
import CssBaseline from "@mui/material/CssBaseline";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

function InfoCard(props) {
  // console.log(props);
  const { card } = props;
  // console.log(card);

  return (
    <div>
      <Card
        sx={{
          minWidth: 275,
          minHeight: "100%",
          pt: "40",
          mt: "10",
          mb: "30",
        }}
        raised="true"
      >
        <Typography variant="h5" component="div">
          {card.number}
        </Typography>
        <br></br>
        <CardMedia sx ={{
          objectFit: "contain",
          mb:3
        }}
                  component="img"
                  height="150px"
                  image={card.image}
                  alt="image"
                />
        <CardContent>
          {/* <img src={card.image}></img> */}

          <Typography variant="h5" component="div">
            {card.title}
          </Typography>

          <Typography variant="body2" color="grey">
            {card.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

InfoCard.propTypes = {
  card: PropTypes.shape({
    number: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default InfoCard;
