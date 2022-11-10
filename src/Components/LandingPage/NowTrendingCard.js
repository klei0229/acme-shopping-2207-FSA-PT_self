import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

function NowTrendingCard(props) {
  // console.log(props);
  const { card } = props;
  // console.log(card);

  return (
    <div>
      <Card
        sx={{
          minWidth: "175px",
          minHeight: "200px",
          pt: "40",
          mt: "10",
          mb: "30",
        }}
      >
        <Typography variant="h5" component="div">
          {/* {card.number} */}
        </Typography>
        <CardContent>
          {/* <img src={card.image}></img> */}
          <Box
            sx={{
              width: "10rem",
              height: "10rem",
              borderRadius: "50%",
              // backgroundColor:"green",
              backgroundSize: "contain",
              // border: '1px dashed grey',
              backgroundImage: `url(https://i5.walmartimages.com/asr/43eca98b-40b9-4fc7-a6ae-c02f63b957cc.7a725e370c9d1dafbab842b9a3c861e3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF)`,
            }}
          ></Box>

          <Typography variant="h5" component="div">
            {card.name}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

NowTrendingCard.propTypes = {
  card: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    URL: PropTypes.string.isRequired,
  }).isRequired,
};

export default NowTrendingCard;
