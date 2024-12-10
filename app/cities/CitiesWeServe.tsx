/** @format */

'use client';

import React from 'react';
import { CountyCard } from './CountyCard';
import { counties } from './Data';
import { ContactCTA } from './ContactCTA';
import { Box, Container, Grid } from '@mui/material';

export default function CitiesWeServe() {
	return (
		<Box sx={{ minHeight: '100vh' }}>
			<Container
				maxWidth='lg'
				sx={{ py: 8 }}>
				<Grid
					container
					spacing={4}>
					{counties.map((county) => (
						<Grid
							item
							xs={12}
							sm={6}
							md={4}
							key={county.name}>
							<CountyCard county={county} />
						</Grid>
					))}
				</Grid>
				<Box mt={8}>
					<ContactCTA />
				</Box>
			</Container>
		</Box>
	);
}
