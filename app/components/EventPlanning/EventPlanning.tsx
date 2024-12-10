/** @format */

import React from 'react';
import { ServiceCard } from './ServiceCard';
import { services } from './Data';

export const EventPlanning: React.FC = () => {
	return (
		<section className='py-16'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-12'>
					<h2 className='text-4xl font-bold mb-4'>
						Plan Your Next Event With Us
					</h2>
					<p className='text-xl max-w-3xl mx-auto'>
						Experience exceptional medical transportation services tailored to
						your needs. Whether it&apos;s personal transport, airport transfers,
						or city tours, we&apos;ve got you covered.
					</p>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{services.map((service, index) => (
						<ServiceCard
							key={index}
							{...service}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
