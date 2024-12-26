/** @format */

export interface County {
	name: string;
	description: string;
	cities: string[];
}

export const counties: County[] = [
	{
		name: 'San Francisco County',
		description:
			'Offering premium non-emergency medical transportation throughout the city.',
		cities: ['San Francisco'],
	},
	{
		name: 'San Mateo County',
		description:
			'From bustling cities like Redwood City to serene spots like Half Moon Bay, we offer specialized transportation for wheelchair, gurney, and ambulatory patients across the region.',
		cities: [
			'Atherton',
			'Belmont',
			'Brisbane',
			'Burlingame',
			'Colma',
			'Daly City',
			'East Palo Alto',
			'Foster City',
			'Half Moon Bay',
			'Hillsborough',
			'Menlo Park',
			'Millbrae',
			'Pacifica',
			'Portola Valley',
			'Redwood City',
			'San Bruno',
			'San Carlos',
			'San Mateo',
			'South San Francisco',
			'Woodside',
		],
	},
	{
		name: 'Santa Clara County',
		description:
			'We cover a wide range of cities, including Palo Alto, home to Stanford Hospital, ensuring timely and professional medical transportation.',
		cities: [
			'Campbell',
			'Cupertino',
			'Gilroy',
			'Los Altos',
			'Los Altos Hills',
			'Los Gatos',
			'Milpitas',
			'Monte Sereno',
			'Morgan Hill',
			'Mountain View',
			'Palo Alto',
			'San Jose',
			'Santa Clara',
			'Saratoga',
			'Sunnyvale',
		],
	},
];
