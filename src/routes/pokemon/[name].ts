/** @type {import('./__types/[id]').RequestHandler} */

import type { Pokemon, PokemonSpecies } from '$lib/types/Pokemon'
const url = 'https://pokeapi.co/api/v2/pokemon/'

export async function get({ params }) {
	// `params.id` comes from [id].js
	const pokemon: Pokemon = await fetch(url + params.name, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Cache-Control': 'public, max-age=31536000'
		},
	}).then((response) => response.json())
	const species: PokemonSpecies = await fetch(pokemon.species.url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Cache-Control': 'public, max-age=31536000'
		},
	}).then((response) =>
		response.json()
	)

	if (pokemon) {
		return {
			body: { pokemon, species }
		}
	}

	return {
		status: 404
	}
}
