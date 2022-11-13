import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Link from '@mui/material/Link';;

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
        raised="true"
        sx={{
          minWidth: "175px",
          minHeight: "100%",
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
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              // backgroundColor:"green",
              backgroundSize: "contain",
              // border: '1px dashed grey',
              backgroundImage: `url(${card.imageUrl})`,
            }}
          ></Box>

          <br></br>
          <Link color="black" underline="hover" href={`#/bundles/${card.id}`}>
            <Typography variant="h5" textAlign="center">{card.name}</Typography>
          </Link> 
          

          <Typography variant="h5" component="div">
            {/* {card.name} */}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

NowTrendingCard.propTypes = {
  card: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    URL: PropTypes.string.isRequired,
  }).isRequired,
};

export default NowTrendingCard;
