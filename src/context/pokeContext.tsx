import { createContext } from 'react'

export interface PokemonOptions {
    allPokemons: PokemonIndex[]
    currentPokemon?: currentPokemon
    pokemonFuncs: PokemonFuncs

}

export interface PokemonIndex {
    name: string
    url: string
}

export interface PokemonFuncs {
    setPokemon: (param?: number) => void
    getPokemonDetails: (id: string) => void
}

export interface currentPokemon {
    index: number
    pokemon: PokemonIndex 
    pokemonData?: any 
}


export const PokeContext = createContext({
    allPokemons: [],
    currentPokemon: undefined,
    pokemonFuncs: {
        setPokemon: (param?: number) => {},
        getPokemonDetails: (id: string) => {}
    }
} as PokemonOptions)