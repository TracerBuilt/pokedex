<script lang="ts">
	import { getContext } from 'svelte'
	import { line, curveCardinalClosed } from 'd3-shape'
	import type { Pokemon } from '$lib/types/Pokemon'
	import { typeColors } from '$lib/utils/typeColors'

	const { data, width, height, xGet, config } = getContext('LayerCake')

	export let pokemon: Pokemon
	let color = typeColors(pokemon.types[0].type.name)
	//fill-neutral-400 fill-orange-500 fill-red-500 fill-sky-500 fill-violet-400 fill-green-500 fill-fuchsia-600 fill-yellow-400 fill-amber-700 fill-pink-600 fill-stone-500 fill-sky-200 fill-lime-600 fill-violet-700 fill-purple-800 fill-stone-800 fill-zinc-300 fill-rose-300 fill-teal-400 fill-gray-200 stroke-neutral-400 stroke-orange-500 stroke-red-500 stroke-sky-500 stroke-violet-400 stroke-green-500 stroke-fuchsia-600 stroke-yellow-400 stroke-amber-700 stroke-pink-600 stroke-stone-500 stroke-sky-200 stroke-lime-600 stroke-violet-700 stroke-purple-800 stroke-stone-800 stroke-zinc-300 stroke-rose-300 stroke-teal-400 stroke-gray-200

	export let strokeWidth = 2

	export let fillOpacity = 0.5

	export let r = 4.5

	export let circleStroke = '#fff'

	export let circleStrokeWidth = 1

	$: angleSlice = (Math.PI * 2) / $config.x.length

	$: path = line()
		.curve(curveCardinalClosed.tension(0.6))
		.x((d, i) => d * Math.cos(angleSlice * i - Math.PI / 2))
		.y((d, i) => d * Math.sin(angleSlice * i - Math.PI / 2))
</script>

<g transform="translate({$width / 2}, {$height / 2})">
	{#each $data as row}
		{@const xVals = $xGet(row)}
		<path
			class={`path-line fill-${color} stroke-${color}`}
			d={path(xVals)}
			stroke-width={strokeWidth}
			fill-opacity={fillOpacity}
		/>

		{#each xVals as circleR, i}
			{@const thisAngleSlice = angleSlice * i - Math.PI / 2}
			<circle
				class={`fill-${color}`}
				cx={circleR * Math.cos(thisAngleSlice)}
				cy={circleR * Math.sin(thisAngleSlice)}
				{r}
				stroke={circleStroke}
				stroke-width={circleStrokeWidth}
			/>
		{/each}
	{/each}
</g>

<style>
	.path-line {
		stroke-linejoin: miter;
		stroke-linecap: miter;
	}
</style>
