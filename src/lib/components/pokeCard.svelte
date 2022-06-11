<script lang="ts">
	import type { Pokemon, PokemonSpecies } from '$lib/types/Pokemon'
	import { typeColors } from '$lib/utils/typeColors'
	import { pokemonDetails, pokemonSpecies } from '$lib/stores'
	import TypeLabels from './typeLabels.svelte';

	export let name: string
	let pokemon: Pokemon
	let species: PokemonSpecies
	let englishName: string | undefined
	let loaded = false

	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0
	}


	const lazyLoad = (element) => {
		const observer = new IntersectionObserver(async (entries) => {
			if (entries[0].isIntersecting) {
				if (!$pokemonSpecies[name]) {
					const data = await fetch('api/pokemonSpecies', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							'Cache-Control': 'public, max-age=31536000'
						},
						body: JSON.stringify({ name: name })
					}).then((res) => res.json())

					$pokemonSpecies[name] = data.species as PokemonSpecies

					const firstPokemonUrl = $pokemonSpecies[name].varieties[0].pokemon.url

					if (!$pokemonDetails[$pokemonSpecies[name].name]) {
						const data = await fetch('api/pokemon', {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
								'Cache-Control': 'public, max-age=31536000'
							},
							body: JSON.stringify({ url: firstPokemonUrl })
						}).then((res) => res.json())

						$pokemonDetails[name] = data.pokemon
					}
				}

				species = $pokemonSpecies[name]
				pokemon = $pokemonDetails[name]
				loaded = true
				observer.disconnect()
			}
		}, options)
		observer.observe(element)
	}

	$: if (species && species.names) {
		englishName = species.names.find((name) => name.language.name === 'en')?.name
	} else if (pokemon) {
		englishName = pokemon.name
	} else {
		englishName = name
	}
</script>

<div use:lazyLoad>
	<div
		class="flex flex-col content-center justify-center gap-3 rounded-md bg-white shadow-lg shadow-red-100 p-3"
	>
		{#if loaded}
			<a
				class="flex flex-col content-center justify-center gap-3"
				href={`/pokemon/${species.name}`}
			>
				<img
					class="h-64 w-64"
					src={pokemon.sprites.other['official-artwork'].front_default}
					alt={`depiction of ${englishName}`}
					width="475"
					height="475"
				/>
				<h3 class="text-3xl text-center">{englishName}</h3>
				<h4 class="text-xl text-center">#{pokemon.id}</h4>
				<TypeLabels pokemon={pokemon} />
			</a>
		{:else}
			<div class="rounded-full bg-slate-200 animate-pulse h-64 w-64" />
			<div class="self-center rounded-md bg-slate-200 h-8 w-32 animate-pulse" />
			<div class="self-center rounded-md bg-slate-200 h-8 w-32 animate-pulse" />
			<div class="self-center rounded-md bg-slate-200 h-8 w-32 animate-pulse" />
		{/if}
	</div>
</div>
