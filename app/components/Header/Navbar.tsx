/** @format */

'use client';
import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Button,
	Drawer,
	Container,
} from '@mui/material';
import { navigationItems } from './NavigationItem';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import Image from 'next/image';
import ModeToggle from '@/app/Theme/toggel';
import { useTheme } from 'next-themes';
import { NavigationLink } from './NavigationLink';
  
const Navbar = () => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const { theme } = useTheme();

	const sharedStyles = {
		backgroundImage:
			theme === 'dark'
				? ' linear-gradient(109.6deg, rgb(63, 76, 119) , rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)'
				: 'linear-gradient(to top, #dfe9f3 0%, white 100%)',
		color: theme === 'dark' ? '#fff' : '#000',
	};

	return (
		<AppBar
		position="fixed" 
		sx={sharedStyles}>
			<Container maxWidth='lg'>

				<Toolbar
					disableGutters
					sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Button
						component={Link}
						href='/'>
						<Image
							loading='lazy'
							src='/logo.png'
							className='object-contain shrink-0 max-w-full aspect-[3.76] w-[244px]'
							alt='Company Logo'
							width={244}
							height={65}
						/>
					</Button>
					<Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
						{navigationItems.map((item) => (
							<NavigationLink
								key={item.id}
								href={item.href}
								ariaLabel={item.ariaLabel}>
								{item.label}
							</NavigationLink>
						))}
					</Box>
					<Box>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							onClick={() => setMobileOpen(true)}
							sx={{ display: { md: 'none' } }}>
							<MenuIcon />
						</IconButton>
						<ModeToggle />
					</Box>
				</Toolbar>
				<Drawer
					anchor='right'
					open={mobileOpen}
					onClose={() => setMobileOpen(false)}
					sx={{
						display: { md: 'none' },
						'& .MuiDrawer-paper': sharedStyles,
					}}>
					<Box sx={{ width: 250, pt: 2 }}>
						<IconButton
							aria-label='close drawer'
							onClick={() => setMobileOpen(false)}
							sx={{ mb: 2, ml: 2 }}>
							<CloseIcon />
						</IconButton>
						<div className='flex flex-col gap-2 p-4'>
							{navigationItems.map((item) => (
								<NavigationLink
									key={item.id}
									aria-label={item.ariaLabel}
									href={item.href}>
									{item.label}
								</NavigationLink>
							))}
						</div>
					</Box>
				</Drawer>
			</Container>
		</AppBar>
	);
};

export default Navbar;