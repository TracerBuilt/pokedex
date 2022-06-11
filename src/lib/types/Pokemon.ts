export interface PokemonSpecies {
	id: number
	name: string
	order: number
	gender_rate: number
	capture_rate: number
	base_happiness: number
	is_baby: boolean
	is_legendary: boolean
	is_mythical: boolean
	hatch_counter: number
	has_gender_differences: boolean
	forms_switchable: boolean
	growth_rate: NamedAPIResource
	pokedex_numbers: PokemonSpeciesDexEntry[]
	egg_groups: NamedAPIResource[]
	color: NamedAPIResource
	shape: NamedAPIResource
	evolves_from_species: NamedAPIResource
	evolution_chain: APIResource
	habitat: NamedAPIResource
	generation: NamedAPIResource
	names: Name[]
	pal_park_encounters: PalParkEncounterArea[]
	flavor_text_entries: FlavorText[]
	form_descriptions: Description[]
	genera: Genus[]
	varieties: PokemonSpeciesVariety[]
}

export interface PokemonSpeciesDexEntry {
	entry_number: number
	pokedex: NamedAPIResource
}

export interface Pokemon {
	id: number
	name: string
	base_experience: number
	height: number
	is_default: boolean
	order: number
	weight: number
	abilities: PokemonAbility[]
	forms: NamedAPIResource[]
	game_indices: VersionGameIndex[]
	held_items: PokemonHeldItem[]
	location_area_encounters: string
	moves: PokemonMove[]
	past_types: PokemonTypePast[]
	sprites: PokemonSprites
	species: NamedAPIResource
	stats: PokemonStat[]
	types: PokemonType[]
}

export interface PokemonAbility {
	is_hidden: boolean
	slot: number
	ability: NamedAPIResource
}

export interface APIResource {
	url: string
}

export interface NamedAPIResource {
	name: string
	url: string
}

export interface VersionGameIndex {
	game_index: number
	version: NamedAPIResource
}

export interface PokemonHeldItem {
	item: NamedAPIResource
	version_details: PokemonHeldItemVersion[]
}

export interface PokemonHeldItemVersion {
	version: NamedAPIResource
	rarity: number
}

export interface PokemonMove {
	move: NamedAPIResource
	version_group_details: PokemonMoveVersion[]
}

export interface PokemonMoveVersion {
	move_learn_method: NamedAPIResource
	version_group: NamedAPIResource
	level_learned_at: number
}

export interface PokemonTypePast {
	generation: NamedAPIResource
	types: PokemonType[]
}

export interface PokemonType {
	slot: number
	type: NamedAPIResource
}

export interface PokemonSprites {
	font_default: string
	front_shiny: string
	front_female: string | null
	fron_shiny_female: string | null
	back_default: string
	back_shiny: string
	back_female: string | null
	back_shiny_female: string | null
	other: {
		dream_world: {
			front_default: string
			front_female: string | null
		}
		home: {
			front_default: string
			front_female: string | null
			front_shiny: string
			front_shiny_female: string | null
		}
		'official-artwork': {
			front_default: string
		}
	}
	versions: {
		'generation-i': {
			'red-blue': {
				back_default: string
				back_gray: string
				front_default: string
				front_gray: string
			}
			yellow: {
				back_default: string
				back_gray: string
				front_default: string
				front_gray: string
			}
		}
		'generation-ii': {}
		'generation-iii': {}
		'generation-iv': {}
		'generation-v': {}
		'generation-vi': {}
		'generation-vii': {}
		'generation-viii': {}
	}
}

export interface PokemonStat {
	stat: NamedAPIResource
	effort: number
	base_stat: number
}

export interface PalParkEncounterArea {
	base_score: number
	rate: number
	area: NamedAPIResource
}

export interface Name {
	name: string
	language: NamedAPIResource
}

export interface FlavorText {
	flavor_text: string
	language: NamedAPIResource
	version: NamedAPIResource
}

export interface Description {
	description: string
	language: NamedAPIResource
}

export interface Genus {
	genus: string
	language: NamedAPIResource
}

export interface PokemonSpeciesVariety {
	is_default: boolean
	pokemon: NamedAPIResource
}

export interface Stat {
	id: number
	name: string
	game_index: number
	is_battle_only: boolean
	affecting_moves: MoveStatAffectSets
	affecting_natures: NatureStatAffectSets
	characteristics: APIResource[]
	move_damage_class: NamedAPIResource
	names: Name[]
}

export interface MoveStatAffectSets {
	increase: MoveStatAffect[]
	decrease: MoveStatAffect[]
}

export interface MoveStatAffect {
	change: number
	move: NamedAPIResource
}

export interface NatureStatAffectSets {
	increase: NamedAPIResource[]
	decrease: NamedAPIResource[]
}
