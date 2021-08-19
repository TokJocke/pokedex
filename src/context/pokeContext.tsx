import { createContext } from 'react'
import kantoImg from "../assets/kanto.jpg"
import johtoImg from "../assets/johto.jpg"
import hoennImg from "../assets/hoenn.jpg"
import sinnohImg from "../assets/sinnoh.jpg"

export interface PokemonOptions {
    allPokemons: PokemonIndex[]
    pokemonData?: any
    pokemonFuncs: PokemonFuncs
    currentRegion?: RegionDetails 
    PokedexRegions: RegionDetails[]
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
    getPokemonDetails: (id: number) => void
    setRegion: (param: number, region?: string) => void
}


export interface RegionDetails {
    name: string
    background: string
    pokemonAmount: number
    offset: number
    isSelected?: boolean
}


export const PokeContext = createContext({
    allPokemons: [],
    pokemonData: undefined,
    pokemonFuncs: {
        setPokemon: (param: number) => {},
        getPokemonDetails: (id: number) => {},
        setRegion: (param: number) => {},
    },
    currentRegion: undefined,
    PokedexRegions: [],
        
} as PokemonOptions)