<script lang="ts">
	export const preload = true

	import type { Pokemon, PokemonSpecies } from '$lib/types/Pokemon'
	import StatsChart from '$lib/components/StatsChart.svelte'
	import TypeLabels from '$lib/components/typeLabels.svelte'

	export let pokemon: Pokemon
	export let species: PokemonSpecies

	let englishName = species.names.find((name) => name.language.name === 'en')?.name
	let flavorText = species.flavor_text_entries.find(
		(text) => text.language.name === 'en'
	)?.flavor_text
</script>

<main class="flex flex-col justify-center items-center xl:grid xl:grid-cols-3 ">
	<div class="col-start-2 flex flex-col justify-center items-center">
		<img
			class="w-96"
			src={pokemon.sprites.other['official-artwork'].front_default}
			alt={`offical artwork of ${englishName}`}
			width="475"
			height="475"
		/>
		<h1 class="text-3xl my-3">{englishName}</h1>
		<TypeLabels {pokemon} />
		<p class="my-3 text-xl">#{pokemon.id}</p>
	</div>
	<div class="col-start-1 row-start-1">
		<p>{flavorText}</p>
		<h3>Height:</h3>
		<p>{pokemon.height}</p>
		<h3>Weight:</h3>
		<p>{pokemon.weight}</p>
	</div>
	<StatsChart {pokemon} />
</main>
