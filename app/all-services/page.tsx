/** @format */

import React from 'react';
import { Box, Typography } from '@mui/material';
import { services } from '../components/Services/Data'; // Adjust the path as necessary

const AllServicesPage = () => {
	return (
		<Box sx={{ p: 4 }}>
			<Typography variant="h4" sx={{ mb: 4 }}>
				All Services
			</Typography>
			{services.map((service, index) => (
				<Box key={index} sx={{ mb: 3 }}>
					<Typography variant="h5">{service.title}</Typography>
					<Typography variant="body1">{service.description}</Typography>
				</Box>
			))}
		</Box>
	);
};

export default AllServicesPage; // Ensure this is the default export