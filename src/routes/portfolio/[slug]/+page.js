/** @type {import('./$types').PageLoad} */

import { error } from '@sveltejs/kit';
import { oldPortfolio } from "$lib/old-portfolio.js";

export function load({ params }) {

	let project = oldPortfolio[params.slug];

	if (project===undefined) {
		error(404);
	}

	return {
		params: params,
		project: project,
	};
}