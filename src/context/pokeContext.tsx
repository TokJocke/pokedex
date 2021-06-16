import { createContext } from 'react'
import kantoImg from "../assets/kanto.jpg"
export interface PokemonOptions {
    allPokemons: PokemonIndex[]
    currentPokemon?: currentPokemon
    pokemonFuncs: PokemonFuncs
    currentRegion?: RegionDetails
}

export interface currentPokemon {
    index: number
    pokemon: PokemonIndex 
    pokemonData?: any 
}

export interface PokemonIndex {
    name: string
    url: string
}

/* Function interface */
export interface PokemonFuncs {
    setPokemon: (param?: number) => void
    getPokemonDetails: (id: string) => void
    setRegion: () => void
}

/* Pokemon regions data */
export interface PokedexRegions { 
    kanto: RegionDetails
    johto: RegionDetails
    hoenn: RegionDetails
}
export interface RegionDetails {
    name: string
    background: string
    pokemonAmount: number
}

export const regions: PokedexRegions = {
    kanto: {
        name: "Kanto",
        background: `url(${kantoImg})`,
        pokemonAmount: 151
    },
    johto: {
        name: "Johto",
        background: "background",
        pokemonAmount: 100
    },
    hoenn: {
        name: "Hoenn",
        background: "background",
        pokemonAmount: 135
    }
}



export const PokeContext = createContext({
    allPokemons: [],
    currentPokemon: undefined,
    pokemonFuncs: {
        setPokemon: (param?: number) => {},
        getPokemonDetails: (id: string) => {},
        setRegion: () => {}
    },
    allPokedexRegions: [],
    currentRegion: undefined
} as PokemonOptions)