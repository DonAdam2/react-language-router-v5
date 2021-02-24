import React from 'react';
//material UI
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

const DetailsWrapper = () => {
	return (
		<Grid container className="details-wrapper">
			<Grid item xs={12} sm={6} className="left-section">
				left
			</Grid>
			<Hidden only="xs">
				<Grid item sm={6} className="right-section">
					right
				</Grid>
			</Hidden>
		</Grid>
	);
};

export default DetailsWrapper;
