/** @format */
"use client"
import React from 'react';
import { Box } from '@mui/material';
import Link from 'next/link';
import { LogIn, Calculator } from 'lucide-react';

const HeroButtons = () => (
	<Box
		display='flex'
		justifyContent='center'
		gap={2}
		mt={2}>
		<Link
			href='/auth/login'
			passHref>
			<Box
				sx={{
					backgroundColor: '#1976d2',
					color: '#ffffff',
					display: 'flex',
					alignItems: 'center',
					gap: 1,
					px: 4,
					py: 1.5,
					borderRadius: '8px',
					textTransform: 'none',
					fontSize: '1rem',
					fontWeight: 'bold',
					boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
					transition: 'background-color 0.3s ease',
					'&:hover': {
						backgroundColor: '#125aa6',
					},
					'&:focus': {
						outline: '2px solid #1976d2',
						outlineOffset: '2px',
					},
				}}>
				<LogIn style={{ width: 20, height: 20 }} /> Account Login
			</Box>
		</Link>

		<Link
			href='/get-quote'
			passHref>
			<Box
				sx={{
					border: '2px solid #1976d2',
					color: '#1976d2',
					display: 'flex',
					alignItems: 'center',
					gap: 1,
					px: 4,
					py: 1.5,
					borderRadius: '8px',
					textTransform: 'none',
					fontSize: '1rem',
					fontWeight: 'bold',
					boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
					transition: 'background-color 0.3s ease, color 0.3s ease',
					'&:hover': {
						backgroundColor: '#1976d2',
						color: '#ffffff',
					},
					'&:focus': {
						outline: '2px solid #1976d2',
						outlineOffset: '2px',
					},
				}}>
				<Calculator style={{ width: 20, height: 20 }} /> Get A Free Quote
			</Box>
		</Link>
	</Box>
);

export default HeroButtons;