<script>
	import { getContext } from 'svelte'

	const { width, height, xScale, extents, config } = getContext('LayerCake')

	export let lineLengthFactor = 1.1

	export let labelPlacementFactor = 1.25

	$: max = $xScale(255)

	$: lineLength = max * lineLengthFactor
	$: labelPlacement = max * labelPlacementFactor

	$: angleSlice = (Math.PI * 2) / $config.x.length

	function anchor(total, i) {
		if (i === 0 || i === total / 2) {
			return 'middle'
		} else if (i < total / 2) {
			return 'start'
		}
		return 'end'
	}
</script>

<g transform="translate({$width / 2}, {$height / 2})">
	<circle cx="0" cy="0" r={max} stroke="#ccc" stroke-width="1" fill="#CDCDCD" fill-opacity="0.1" />
	<circle cx="0" cy="0" r={3 * (max / 4)} stroke="#ccc" stroke-width="1" fill="none" />
	<circle cx="0" cy="0" r={max / 2} stroke="#ccc" stroke-width="1" fill="none" />
	<circle cx="0" cy="0" r={max / 4} stroke="#ccc" stroke-width="1" fill="none" />

	{#each $config.x as label, i}
		{@const thisAngleSlice = angleSlice * i - Math.PI / 2}
		<line
			x1="0"
			y1="0"
			x2={lineLength * Math.cos(thisAngleSlice)}
			y2={lineLength * Math.sin(thisAngleSlice)}
			stroke="#ccc"
			stroke-width="1"
			fill="none"
		/>
		<text
			text-anchor={anchor($config.x.length, i)}
			dy="0.35em"
			font-size="1rem"
			text-outline="#fff"
			transform="translate({labelPlacement * Math.cos(thisAngleSlice)}, {labelPlacement *
				Math.sin(thisAngleSlice)})">{label}</text
		>
	{/each}
</g>
