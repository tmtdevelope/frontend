/** @format */

import { Section } from './Types';

export const privacyPolicySections: Section[] = [
	{
		effectiveDate: '10/01/2024',
		sections: [
			{
				title: '1. Introduction',
				content:
					'This Privacy Policy describes how Trust Medical Transportation (TMT), located at 291 Emaron Drive, San Bruno, California, 94017 collects, uses, and protects personal information through its portal, in compliance with San Mateo County and California state privacy laws, and in compliance with HIPAA regulations.',
			},
			{
				title: '2. Information Collection',
				content:
					'We collect the following personal information for transportation booking:',
				list: [
					"Patient's name, date of birth, phone number, and addresses (pickup and drop-off)",
					"Requester's name, phone number, and email address",
					"Patient's insurance ID number and related information",
					"Doctor's name, NPI number, phone number, and fax number",
					'IP address',
					'Procedure code',
				],
			},
			{
				title: '3. Use of Information',
				content: 'The collected information is used to:',
				list: [
					'Schedule and manage transportation services',
					'Obtain prior authorization from insurance companies',
					'Communicate with healthcare providers and case managers',
					'Ensure compliance with HIPAA requirements for handling patient data',
				],
			},
			{
				title: '4. Data Protection',
				content:
					"We use encryption and secure storage to protect personal information. Access is restricted to authorized personnel from TMT and the individual who entered the data (e.g., case manager). All data protection measures comply with HIPAA's administrative, physical, and technical safeguards to maintain confidentiality, integrity, and availability of protected health information (PHI).",
			},
			{
				title: '5. Third-Party Sharing',
				content:
					'Information may be shared with insurance companies for prior authorization and with healthcare providers involved in patient care. All third parties receiving information are required to follow HIPAA regulations and data protection standards. We do not sell or share information for marketing purposes.',
			},
			{
				title: '6. User Rights',
				content:
					"Users have the right to request access to, correction of, or deletion of their personal information at any time by contacting us. These rights are provided in accordance with HIPAA's privacy rule.",
			},
			{
				title: '7. Policy Updates',
				content:
					'We may update this policy as needed to comply with changes in regulations or our operational practices. Users will be notified of significant changes through the portal notification system.',
			},
			{
				title: '8. Contact Information',
				content:
					'For privacy concerns or questions, please contact us at:\nP.O. Box 2569, Daly City, CA 94017\nPhone number: 650-799-9921\nWebsite: www.trustmtrans.com',
			},
			{
				title: '9. Cookies and Tracking',
				content:
					'Our portal uses cookies and similar tracking technologies to enhance user experience and gather analytics data. Users can manage or disable cookies through their browser settings. For more information, please refer to our Cookie Policy.',
				link: 'https://www.trustmtrans.com/cookie-policy-for-trust-medical-transportation-tmt',
			},
			{
				title: '10. Retention Policy',
				content:
					'Personal data is retained for as long as necessary to provide our services and comply with legal obligations. When data is no longer needed, it is securely deleted in accordance with our data retention policy, in line with HIPAA requirements.',
			},
			{
				title: "11. Children's Privacy",
				content:
					'We do not knowingly collect personal data from individuals under the age of 13. If we become aware that we have inadvertently collected such data, we will take immediate steps to delete it. For patients who are minors, data collection complies with relevant child protection and HIPAA privacy laws.',
			},
			{
				title: '12. Data Breach Protocol',
				content:
					'In the event of a data breach, affected users will be notified within 72 hours after the breach is discovered. We will take appropriate steps to mitigate further risks and assist users in protecting their information, following HIPAA guidelines.',
			},
			{
				title: '13. International Users',
				content:
					'This portal is operated from the United States and is governed by U.S. privacy laws, including HIPAA. Users accessing the portal from outside the U.S. should be aware that their data may be stored and processed in the U.S. and be subject to U.S. legal requirements.',
			},
		],
	},
];
