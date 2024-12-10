/** @format */

import './globals.css';
import type { Metadata } from 'next';
import { Providers } from './Theme/provider';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';

export const metadata: Metadata = {
	title: 'TrustMTrans - Professional Translation Services',
	description:
		'Professional translation services for businesses and individuals. Certified translations, localization, and interpretation services in multiple languages.',
	keywords:
		'translation services, professional translation, certified translation, language services, document translation',
	openGraph: {
		title: 'TrustMTrans - Professional Translation Services',
		description:
			'Professional translation services for businesses and individuals.',
		images: ['/og-image.jpg'],
	},
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>
				<Providers>
					<Navbar />
					<main>{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
