import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

import {Paper} from '@mui/material';

import InventoryIcon from '@mui/icons-material/Inventory';
import CssBaseline from '@mui/material/CssBaseline';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function BasicCard(props) {
  

  const {details} = props;

    return (
        <div>


    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          1
        </Typography>
        <Typography variant="h5" component="div">
          Choose a Bundle
        </Typography>
        <InventoryIcon align="center" fontSize="large"></InventoryIcon>
        <Typography variant="body2">
          Choose from a list of curated bundles
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

        </div>
    );
}

BasicCard.propTypes = {
    post: PropTypes.shape({
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      imageText: PropTypes.string.isRequired,
      linkText: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  };
  
  export default BasicCard;