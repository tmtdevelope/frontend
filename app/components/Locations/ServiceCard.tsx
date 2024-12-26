/** @format */

import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { ServiceCardProps } from './Types';
import { useTheme } from 'next-themes';

export default function ServiceCard({
	icon,
	title,
	description,
}: ServiceCardProps) {
	const { theme } = useTheme();

	return (
		<Card
			className='h-full transition-transform duration-300 hover:scale-105 hover:shadow-xl'
			sx={{
				backgroundColor: theme === 'dark' ? '#34495e' : '#ecf0f1',
				color: theme === 'dark' ? '#ecf0f1' : '#2c3e50',
				borderRadius: '8px',
			}}>
			<CardContent className='flex flex-col items-center p-6 text-center'>
				<div
					className='mb-4'
					style={{
						color: theme === 'dark' ? '#1abc9c' : '#3498db',
					}}>
					{icon}
				</div>
				<Typography
					variant='h6'
					className='mb-3 font-bold'
					sx={{
						color: theme === 'dark' ? '#ecf0f1' : '#2c3e50',
					}}>
					{title}
				</Typography>
				<Typography
					variant='body2'
					sx={{
						color: '#7f8c8d',
					}}>
					{description}
				</Typography>
			</CardContent>
		</Card>
	);
}
