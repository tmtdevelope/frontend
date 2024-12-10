/** @format */

'use client';
import {
	Container,
	Typography,
	Box,
	Button,
	List,
	ListItem,
	ListItemText,
	Link,
} from '@mui/material';
import { privacyPolicySections } from './Data';

const PrivacyPolicy = () => {
	return (
		<Container
			maxWidth='md'
			sx={{ padding: '40px', marginTop: '40px' }}>
			{privacyPolicySections.map((section, index) => (
				<Box
					key={index}
					sx={{ marginBottom: '40px' }}>
					<Typography
						variant='h5'
						sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
						Policy Effective Date: {section.effectiveDate}
					</Typography>

					{section.sections.map((subSection, idx) => (
						<Box
							key={idx}
							sx={{ marginBottom: '30px' }}>
							<Typography
								variant='h6'
								sx={{ fontWeight: 'bold', marginBottom: '15px' }}>
								{subSection.title}
							</Typography>

							<Typography
								variant='body1'
								sx={{ marginBottom: '15px' }}>
								{subSection.content}
							</Typography>

							{subSection.list && (
								<List sx={{ paddingLeft: '20px', marginBottom: '15px' }}>
									{subSection.list.map((item, idx) => (
										<ListItem key={idx}>
											<ListItemText
												primary={item}
												sx={{ fontSize: '16px', color: '#348' }}
											/>
										</ListItem>
									))}
								</List>
							)}

							{/* {subSection.link && (
								<Link
									href={subSection.link}
									target='_blank'
									rel='noopener noreferrer'
									sx={{
										color: 'primary.main',
										textDecoration: 'underline',
										fontWeight: 'bold',
									}}>
									{subSection.link}
								</Link>
							)} */}
						</Box>
					))}
				</Box>
			))}
		</Container>
	);
};

export default PrivacyPolicy;
