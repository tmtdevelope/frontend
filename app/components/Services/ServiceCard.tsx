/** @format */

'use client';
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useTheme } from 'next-themes';
import { ServiceCardProps } from './types';

const ServiceCard: React.FC<ServiceCardProps> = ({
	title,
	description,
	Icon,
}) => {
	const { theme } = useTheme();

	return (
		<Card
			sx={{
				width: 400,
				margin: 3,
				backgroundColor: theme === 'dark' ? '#2c3e50' : '#ffffff', // لون الخلفية حسب الثيم
				boxShadow: 10,
				borderRadius: 3,
				transition: 'transform 0.3s ease, box-shadow 0.3s ease',
				'&:hover': {
					transform: 'scale(1.05)',
					boxShadow: 12,
				},
			}}>
			<CardContent
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'center',
					padding: 5,
				}}>
				<Icon
					sx={{
						fontSize: 60,
						color:'#3498db', 
						marginBottom: 3,
					}}
				/>
				<Typography
					variant='h5'
					component='div'
					sx={{
						fontWeight: 'bold',
						marginBottom: 2,
						fontFamily: 'Roboto',
						color: theme === 'dark' ? '#ecf0f1' : '#2c3e50', 
					}}>
					{title}
				</Typography>
				<Typography
					variant='body1'
					sx={{
						fontFamily: 'Roboto',
						fontSize: '1rem',
						lineHeight: 1.8,
						color: '#7f8c8d',
					}}>
					{description}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default ServiceCard;
