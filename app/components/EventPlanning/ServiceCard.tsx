/** @format */

import React from 'react';
import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	List,
	ListItem,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Service } from './types';
import { useTheme } from 'next-themes';

export const ServiceCard: React.FC<Service> = ({
	title,
	subtitle,
	description,
	imageUrl,
	features,
}) => {
	const { theme } = useTheme();

	return (
		<Card
			className='shadow-md hover:shadow-lg transition-shadow'
			sx={{
				backgroundColor: theme === 'dark' ? '#34495e' : '#ecf0f1',
				color: theme === 'dark' ? '#ecf0f1' : '#2c3e50',
			}}>
			<CardMedia
				component='img'
				height='200'
				image={imageUrl}
				alt={title}
				className='rounded-t-lg'
			/>
			<CardContent>
				<Typography
					variant='h5'
					className='font-bold mb-2'>
					{title}
				</Typography>
				<Typography
					variant='subtitle1'
					className='mb-4'>
					{subtitle}
				</Typography>
				<Typography
					variant='body2'
					className=' mb-4'>
					{description}
				</Typography>
				<List>
					{features.map((feature, index) => (
						<ListItem
							key={index}
							sx={{
								display: 'flex',
								alignItems: 'center',
								color: theme === 'dark' ? '#ecf0f1' : '#2c3e50',
							}}>
							<CheckCircleIcon
								sx={{
									marginRight: 1,
									fontSize: 18,
									color: '#3498db',
								}}
							/>
							<Typography variant='body2'>{feature}</Typography>
						</ListItem>
					))}
				</List>
			</CardContent>
		</Card>
	);
};
