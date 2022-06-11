<script lang="ts">
	import { LayerCake, Svg } from 'layercake'
	import type { Pokemon } from '$lib/types/Pokemon'
	import Radar from './Radar.svelte'
	import AxisRadial from './AxisRadial.svelte'

	// This example loads csv data as json using @rollup/plugin-dsv
	export let pokemon: Pokemon

	const data = pokemon.stats.map((stat) => {
		return {
			name: stat.stat.name,
			value: stat.base_stat
		}
	})

	const stats: { [key: string]: number } = {}
let totalStats = 0

	data.forEach((stat) => {
		stats[
			stat.name === 'special-attack'
				? 'sp. attack'
				: stat.name === 'special-defense'
				? 'sp. defense'
				: stat.name
		] = stat.value
		totalStats += stat.value
	})



	console.log(stats)

	const xKey = ['hp', 'attack', 'defense', 'speed', 'sp. attack', 'sp. defense']
</script>

<div
	class="h-64 w-full my-24 mx-auto xl:mx-0 small-caps text-center"
>
	{#if stats !== {}}
		<LayerCake x={xKey} xDomain={[0, 255]} xRange={({ height }) => [0, height / 2]} data={[stats]}>
			<Svg>
				<AxisRadial />
				<Radar {pokemon} />
			</Svg>
		</LayerCake>
	{/if}
	<h3 class="text-2xl mt-12">{totalStats}</h3>
</div>

<style>
	:global(g g text) {
		max-width: 1rem;
	}
</style>
