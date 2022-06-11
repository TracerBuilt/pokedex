import type { Pokemon } from '$lib/types/Pokemon'
import type { RequestHandler } from '@sveltejs/kit'

export async function post({ request }) {

const body = await request.json()
const url = await body.url

	const pokemon: Pokemon = await fetch(url).then((response) => response.json())

	if (pokemon) {
		return {
			body: { pokemon },
			status: 200
		}
	}

	return {
		status: 500
	}
}
