/** @format */

'use client';

import { Chip, Typography, useTheme } from '@mui/material';
import { locations } from './Data';

export default function LocationsList() {
	const theme = useTheme(); // Get current theme

	return (
		<div className='text-center'>
			<Typography
				variant='h5'
				className='mb-6 font-bold'>
				We Pick You Up Anywhere
			</Typography>
			<div className='flex flex-wrap justify-center gap-2'>
				{locations.map((location) => (
					<Chip
						key={location}
						label={location}
						sx={{
							backgroundColor:
								theme.palette.mode === 'dark' ? '#1abc9c' : '#3498db', // Chip color based on mode
							color: 'white',
							'&:hover': {
								backgroundColor:
									theme.palette.mode === 'dark' ? '#16a085' : '#2980b9', // Hover effect
							},
						}}
						className='m-1'
					/>
				))}
			</div>
		</div>
	);
}
