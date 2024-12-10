'use client';

import { IconButton } from '@mui/material';
import { useTheme } from 'next-themes';
import { DarkMode, LightMode } from '@mui/icons-material';

export default function ModeToggle() {
	const { theme, setTheme } = useTheme();

	const handleThemeToggle = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<IconButton
			onClick={handleThemeToggle}
			color='inherit'>
			{theme === 'light' ? <LightMode /> : <DarkMode />}
		</IconButton>
	);
}
