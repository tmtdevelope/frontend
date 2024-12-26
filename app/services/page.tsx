/** @format */

import React from 'react';
import { Box, Typography } from '@mui/material';
import ServiceCard from '../components/Services/ServiceCard';
import { services } from '../components/Services/Data';
import TitleSections from '@/app/utils/TitleSections';

const ServicesPage = () => {
	return (
		<Box className='container'>
			<TitleSections text='Our Services' />
			<Box
				display='flex'
				flexWrap='wrap'
				justifyContent='center'>
				{services.map((service, index) => (
					<ServiceCard
						key={index}
						title={service.title}
						description={service.description}
						Icon={service.Icon}
					/>
				))}
			</Box>
		</Box>
	);
};

export default ServicesPage;
