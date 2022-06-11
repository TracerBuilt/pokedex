import type { PokemonSpecies } from '$lib/types/Pokemon'
import type { RequestHandler } from '@sveltejs/kit'

const url = 'https://pokeapi.co/api/v2/pokemon-species/'

export async function post({ request }) {
	const body = await request.json()
	const name = await body.name

	const species: PokemonSpecies = await fetch(url + name).then((response) => response.json())

	if (species) {
		return {
			body: { species },
			status: 200
		}
	}

	return {
		status: 500
	}
}
