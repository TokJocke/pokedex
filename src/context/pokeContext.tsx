import { createContext } from 'react'
import kantoImg from "../assets/kanto.jpg"
export interface PokemonOptions {
    allPokemons: PokemonIndex[]
    pokemonData?: any
    pokemonFuncs: PokemonFuncs
    currentRegion?: RegionDetails
}

/* export interface Pokemon {
    
}  */

export interface PokemonIndex {
    name: string
    id: string
    isSelected?: boolean
}

/* Function interface */
export interface PokemonFuncs {
    setPokemon: (param: number) => void
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
    pokemonData: undefined,
    pokemonFuncs: {
        setPokemon: (param: number) => {},
        getPokemonDetails: (id: string) => {},
        setRegion: () => {}
    },
    allPokedexRegions: [],
    currentRegion: undefined
} as PokemonOptions)