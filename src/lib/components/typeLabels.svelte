<script lang="ts">
	import type { Pokemon } from '$lib/types/Pokemon'
	import { typeColors } from '$lib/utils/typeColors'

	export let pokemon: Pokemon

	//bg-neutral-400 bg-orange-500 bg-red-500 bg-sky-500 bg-violet-400 bg-green-500 bg-fuchsia-600 bg-yellow-400 bg-amber-700 bg-pink-600 bg-stone-500 bg-sky-200 bg-lime-600 bg-violet-700 bg-purple-800 bg-stone-800 bg-zinc-300 bg-rose-300 bg-teal-400 bg-gray-200
</script>

<div class="flex content-center justify-center gap-3">
	{#each pokemon.types as type}
		<div
			class={`inline-block bg-${typeColors(
				type.type.name
			)} rounded-full px-3 py-1 text-sm font-semibold small-caps text-white mr-2`}
		>
			{type.type.name}
		</div>
	{/each}
</div>
