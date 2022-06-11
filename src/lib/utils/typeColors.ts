export function typeColors(type: string) {
	switch (type) {
		case 'normal':
			return 'neutral-400'
		case 'fire':
			return 'orange-500'
		case 'fighting':
			return 'red-500'
		case 'water':
			return 'sky-500'
		case 'flying':
			return 'violet-400'
		case 'grass':
			return 'green-500'
		case 'poison':
			return 'fuchsia-600'
		case 'electric':
			return 'yellow-400'
		case 'ground':
			return 'amber-700'
		case 'psychic':
			return 'pink-600'
		case 'rock':
			return 'stone-500'
		case 'ice':
			return 'sky-200'
		case 'bug':
			return 'lime-600'
		case 'dragon':
			return 'violet-700'
		case 'ghost':
			return 'purple-800'
		case 'dark':
			return 'stone-800'
		case 'steel':
			return 'zinc-300'
		case 'fairy':
			return 'rose-300'
		case 'unknown':
			return 'teal-400'
		default:
			return 'gray-200'
	}
}
