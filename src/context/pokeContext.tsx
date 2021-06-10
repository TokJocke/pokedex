import { createContext } from 'react'

export interface PokemonOptions {
    allPokemons: PokemonIndex[]
    currentPokemon?: currentPokemon
    setPokemon: () => void

}

export interface PokemonIndex {
    name: string
    url: string
    pokemonData?: any 
}

export interface currentPokemon {
    index: number
    pokemon: PokemonIndex 
}

export const PokeContext = createContext({
    allPokemons: [],
    currentPokemon: undefined,
    setPokemon: () => {}
} as PokemonOptions)