/** @format */

'use client';
import React from 'react';
import { Container, Grid } from '@mui/material';
import { ServiceCard } from './ServiceCard';
import TitleSections from '@/app/utils/TitleSections';
import { services } from './Data';

export const ServicesTwo: React.FC = () => {
	return (
		<Container
			maxWidth='lg'
			sx={{ py: 8 }}>
			<TitleSections text='What makes us different?' />

			<Grid
				container
				spacing={4} // المسافات بين البطاقات
				sx={{
					mt: 4,
				}}>
				{services.map((service, index) => (
					<Grid
						item // البطاقة تأخذ عرض العمود كاملًا على الشاشات الصغيرة
						xs={12}
						sm={6} // نصف العرض على الشاشات المتوسطة
						md={4} // ثلث العرض على الشاشات الكبيرة
						key={index}>
						<ServiceCard
							Icon={service.Icon}
							title={service.title}
							description={service.description}
						/>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default ServicesTwo;
