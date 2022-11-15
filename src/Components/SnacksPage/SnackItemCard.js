import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';

function SnackInfoCard(props) {
	const { card } = props;
	const cardSX = {
		maxWidth: '250px',
		minHeight: '350px',
		maxHeight: '350px',
		pt: '40',
		mt: '10',
		mb: '30',
		transition: 'transform 0.15s ease-in-out',
		'&:hover': { transform: 'scale3d(1.3, 1.3, 1)' },
	};

	const boxSX = {
		width: '10rem',
		height: '10rem',
		borderRadius: '50%',
		backgroundSize: 'contain',
		backgroundImage: `url(${card.imageURL})`,
		'&:hover': {
			// transform: 'scale("150%")',
			// backgroundColor:'green'
			// width: "15",
			// height: "15",
		},
	};

	return (
		<div>
			<CssBaseline />
			<Card sx={cardSX} style={{ border: 'none', boxShadow: 'none' }}>
				<CardContent>
					<Box sx={boxSX}></Box>
					<br></br>
					<Typography variant='h5' component='div'>
						{card.name}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}

SnackInfoCard.propTypes = {
	card: PropTypes.shape({
		imageURL: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
	}).isRequired,
};

export default SnackInfoCard;
