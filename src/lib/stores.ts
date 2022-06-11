import { browser } from '$app/env'
import { writable } from 'svelte/store'
import type { Pokemon, PokemonSpecies } from '$lib/types/Pokemon'

export const pokemonSpeciesList = writable<{ name: string; urls: string }[]>([])

const storedPokemonSpecies = browser ? localStorage.getItem('pokemonSpecies') : null
export const pokemonSpecies = writable<{ [name: string]: PokemonSpecies}>(
	storedPokemonSpecies ? JSON.parse(storedPokemonSpecies) : {}
)

if (browser) {
	pokemonSpecies.subscribe((value) => (localStorage.pokemonSpecies = JSON.stringify(value)))
}

const storedPokemonDetails = browser ? localStorage.getItem('pokemonDetails') : null
export const pokemonDetails = writable<{ [name: string]: Pokemon }>(
	storedPokemonDetails ? JSON.parse(storedPokemonDetails) : {}
)

if (browser) {
	pokemonDetails.subscribe((value) => (localStorage.pokemonDetails = JSON.stringify(value)))
}
