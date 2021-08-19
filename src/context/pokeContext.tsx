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
    statsAndMoves?: any
}

/* export interface Pokemon {
    
}  */

export interface PokemonIndex {
    name: string
    id: string
    isSelected?: boolean
}

/* statsAndMovesInterface skapa när jag är säker på typning */
export interface statsAndMovesInterface {
    
}


/* Function interface */
export interface PokemonFuncs {
    setPokemon: (param: number) => void
    getPokemonDetails: (id: number) => void
    setRegion: (param: number, region?: string) => void
    statsOrMoves: (param: number) => void
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
        statsOrMoves: (param: number) => {}
    },
    currentRegion: undefined,
    PokedexRegions: [],
        
} as PokemonOptions)