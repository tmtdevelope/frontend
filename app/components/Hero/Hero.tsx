
/** @format */
'use client';
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import HeroButtons from './HeroButtons';
import FeatureGrid from './FeatureCard';
import ContactInfo from './ContactInfo';
const HeroSection = () => {
	return (
		<section className='py-16'>
			<Container maxWidth='lg'>
				<Box
					sx={{
						display: 'flex',
						justifyContent: { xs: 'center', lg: 'flex-start' },
						alignItems: 'center',
						textAlign: 'center',
						mb: 4,
					}}>
					<Typography
						variant='h1'
						sx={{
							fontWeight: 'bold',
							fontFamily: 'Roboto, Arial, sans-serif',
							fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
							lineHeight: 1.2,
							background: 'linear-gradient(to right, #1976d2, #42a5f5)',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
							color: { xs: 'inherit', dark: '#fff' },
							mb: 3,
						}}>
						Non-Emergency Medical Transportation (NEMT)
					</Typography>
				</Box>
				<Box
					sx={{
						textAlign: 'center',
						'& > *': {
							mb: 3,
						},
					}}>
					<Typography
						variant='body1'
						sx={{
							fontSize: { xs: '1rem', md: '1.5rem' },
							lineHeight: 1.6,
						}}>
						Trust Medical Transportation TMT: Safe & reliable in the Bay Area.
						Wheelchair, Gurney & Ambulatory services.{' '}
					</Typography>
				</Box>
				<ContactInfo />
				<Box
					sx={{
						mt: 4,
						display: 'flex',
						justifyContent: 'center',
					}}>
					<HeroButtons />
				</Box>
				<Box
					sx={{
						mt: 2,
						display: 'flex',
						justifyContent: 'center',
					}}>
					<FeatureGrid />
				</Box>
			</Container>
		</section>
	);
};

export default HeroSection;
