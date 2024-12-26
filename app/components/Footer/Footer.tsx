/** @format */

'use client';

import { Container, Grid, Typography, Box, Link } from '@mui/material';
import {
	Facebook,
	Twitter,
	Instagram,
	LinkedIn,
	Fax,
	Mail,
	LocationOn,
	PhoneAndroid,
} from '@mui/icons-material';

import { useTheme } from 'next-themes';
import { navigationItems } from '../Header/NavigationItem';
import { Icon } from '@iconify/react';
import tiktokIcon from '@iconify/icons-simple-icons/tiktok';
const Footer = () => {
	const { theme } = useTheme();

	const isDarkMode = theme === 'dark';
	const textColor = isDarkMode ? 'text-gray-300' : 'text-gray-700';
	const linkHoverColor = isDarkMode
		? 'hover:text-white'
		: 'hover:text-blue-600';

	return (
		<footer className={`pt-16 pb-8   border-b `}>
			<Container>
				<Grid
					container
					spacing={8}>
					<Grid
						item
						xs={12}
						md={4}>
						<Typography
							variant='h6'
							className='font-bold mb-4'>
							Follow Us
						</Typography>
						<Typography className={`${textColor} mb-4`}>
							Stay connected with us through our social media channels. Follow
							us for the latest updates and news.
						</Typography>
						<div className='flex space-x-4'>
							<Link
								href='https://www.facebook.com/TrustmedicaLtransportation'
								target='_blank'
								className={`${textColor} ${linkHoverColor}`}>
								<Facebook className='w-6 h-6' />
							</Link>
							<Link
								href='https://x.com/MedicalTmt'
								target='_blank'
								className={`${textColor} ${linkHoverColor}`}>
								<Twitter className='w-6 h-6' />
							</Link>
							<Link
								href='https://www.instagram.com/trust_medical_transportation/'
								target='_blank'
								className={`${textColor} ${linkHoverColor}`}>
								<Instagram className='w-6 h-6' />
							</Link>
							<Link
								href='https://www.linkedin.com/company/trust-medical-transportation-tmt/'
								target='_blank'
								className={`${textColor} ${linkHoverColor}`}>
								<LinkedIn className='w-6 h-6' />
							</Link>
							<Link
								href='https://www.tiktok.com/@trust_medical_transport'
								target='_blank'
								className={`${textColor} ${linkHoverColor}`}>
								<Icon
									icon={tiktokIcon}
									className='w-6 h-6'
								/>
							</Link>
						</div>
					</Grid>

					{/* Section 2: Navigation Links */}
					<Grid
						item
						xs={12}
						md={4}>
						<Typography
							variant='h6'
							className='font-bold mb-4'>
							Quick Links
						</Typography>
						<ul className='space-y-2'>
							{navigationItems.map((item) => (
								<li key={item.id}>
									<Link
										href={item.href}
										className={`${textColor} underline ${linkHoverColor}`}>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</Grid>
					<Grid
						item
						xs={12}
						md={4}>
						<Typography
							variant='h6'
							className='font-bold mb-4'>
							Contact Info
						</Typography>
						<div className='space-y-4'>
							{/* رقم الهاتف */}
							<div className='flex items-center'>
								<PhoneAndroid className='w-5 h-5 mr-3 text-blue-400 hover:text-blue-600 transition-all duration-300' />
								<a
									href='tel:+18886604441'
									className='hover:text-blue-600 transition-all duration-300'>
									<Typography
										className={`${textColor} hover:text-blue-600 transition-all duration-300`}>
										+1 (888) 660-4441
									</Typography>
								</a>
							</div>

							{/* الفاكس */}
							<div className='flex items-center'>
								<Fax className='w-5 h-5 mr-3 text-blue-400 hover:text-blue-600 transition-all duration-300' />
								<a
									href='tel:+16502922323'
									className='hover:text-blue-600 transition-all duration-300'>
									<Typography
										className={`${textColor} hover:text-blue-600 transition-all duration-300`}>
										+1 (650) 292-2323
									</Typography>
								</a>
							</div>

							{/* البريد الإلكتروني */}
							<div className='flex items-center'>
								<Mail className='w-5 h-5 mr-3 text-blue-400 hover:text-blue-600 transition-all duration-300' />
								<a
									href='mailto:trustmtrans@outlook.com'
									className='hover:text-blue-600 transition-all duration-300'>
									<Typography
										className={`${textColor} hover:text-blue-600 transition-all duration-300`}>
										trustmtrans@outlook.com
									</Typography>
								</a>
							</div>

							{/* العنوان */}
							<div className='flex items-center'>
								<LocationOn className='w-5 h-5 mr-3 text-blue-400 hover:text-blue-600 transition-all duration-300' />
								<a
									href='https://www.google.com/maps?q=291+Emaron+Dr,+San+Bruno,+CA+94066'
									target='_blank'
									rel='noopener noreferrer'
									className='hover:text-blue-600 transition-all duration-300'>
									<Typography
										className={`${textColor} hover:text-blue-600 transition-all duration-300`}>
										291 Emaron Dr, San Bruno, CA 94066
									</Typography>
								</a>
							</div>
						</div>
					</Grid>
				</Grid>
			</Container>
			<Box className={`border-t mt-12 pt-8 text-center `}>
				<Typography className={textColor}>
					© {new Date().getFullYear()} Trust Medical Transportation. All rights
					reserved.
				</Typography>
			</Box>
		</footer>
	);
};

export default Footer;
