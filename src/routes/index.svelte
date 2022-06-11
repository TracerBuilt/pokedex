<script lang="ts" context="module">
	export const preload = true

	import { pokemonSpeciesList } from '$lib/stores'

	export async function load({ fetch }) {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species?limit=1000`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Cache-Control': 'public, max-age=31536000'
			}
		})
		const data = await res.json()
		const pokeData = data.results.map((data: { name: string; url: string }) => {
			return {
				name: data.name,
				url: data.url
			}
		})

		pokemonSpeciesList.set(pokeData)

		return {
			pokemonSpeciesList: pokemonSpeciesList
		}
	}
</script>

<script lang="ts">
	import PokeCard from '$lib/components/pokeCard.svelte'
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-3">
	{#each $pokemonSpeciesList as species}
		<PokeCard name={species.name} />
	{/each}
</div>
