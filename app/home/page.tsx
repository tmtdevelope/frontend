/** @format */
'use client';

import Hero from '../components/Hero/Hero';
import React from 'react';
import Services from '../components/Services/Services';
import { EventPlanning } from '../components/EventPlanning/EventPlanning';
import ServicesTwo from '../components/Services_2/ServicesTwo';
import ServicesSection from '../components/Locations/ServicesSection';
function Home() {
	return (
		<>
			<div className='flex flex-col items-center justify-center '>
				<Hero />
				<Services />
				<ServicesTwo />
				<EventPlanning />
				<ServicesSection />
			</div>
		</>
	);
}

export default Home;
