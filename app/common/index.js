/** @format */

import { method } from "lodash";

const backendDomin = process.env.NEXT_PUBLIC_Backend_URL;

const SummaryApi = {
	login: {
		login: `${backendDomin}/api/auth/login`,
	},
	signup: {
		signup: `${backendDomin}/api/auth/signup`,
	},
};

export default SummaryApi;
