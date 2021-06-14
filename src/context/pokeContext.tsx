import { createContext } from 'react'

export interface PokemonOptions {
    allPokemons: PokemonIndex[]
    currentPokemon?: currentPokemon
    pokemonFuncs: PokemonFuncs

}

export interface PokemonIndex {
    name: string
    url: string
    pokemonData?: any 
}

export interface PokemonFuncs {
    setPokemon: (param?: number) => void
}

export interface currentPokemon {
    index: number
    pokemon: PokemonIndex 
}

export const PokeContext = createContext({
    allPokemons: [],
    currentPokemon: undefined,
    pokemonFuncs: {
        setPokemon: (param?: number) => {},
    }
} as PokemonOptions)