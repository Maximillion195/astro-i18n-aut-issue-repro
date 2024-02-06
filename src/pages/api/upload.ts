export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
	return new Response(
		JSON.stringify({
			success: true,
		}),
		{
			status: 200,
		}
	);

	// return new Response(null, { status: 400 });
};