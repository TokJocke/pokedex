import * as React from 'react';
import { PokeContext, PokemonIndex, PokemonOptions } from '../../context/pokeContext';
import { RouteComponentProps } from "react-router-dom"
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { useContext } from 'react';
import { useState } from 'react';



export default function ListView(props: RouteComponentProps) {
   
    const pokemonDetails: PokemonOptions = useContext(PokeContext)

/*      const resetPokemonDetails: (param: PokemonOptions) => void = pokemonDetails => {
        if(pokemonDetails.pokemonData) {
            setData(undefined)   
        }
    } */
    
    React.useEffect(() => {
        console.log("useEffect in listview")
        if(pokemonDetails.pokemonData) {
            pokemonDetails.pokemonFuncs.getPokemonDetails(0)
        }
    })

  
    
    const renderPokemonList: (value: PokemonOptions) => ReactNode  = ({allPokemons}) => {
        
        //resetPokemonDetails(pokemonDetails)
        
        if(!allPokemons.length) {
            return <p>is loading</p>
        }
        return allPokemons.map((pokemon) => {
            if(pokemon.isSelected) {
                return(
                    <p style={{...pokemonName, ...highLighted }}>{pokemon.name}</p>
                    )
                }
                else {
                    return (
                        <p style={{...pokemonName }}>{pokemon.name}</p>
                        )
                }  
        })
    }
            
            
    return (
        <PokeContext.Consumer>
            {renderPokemonList}
        </PokeContext.Consumer>
    );
}



const pokemonName: React.CSSProperties = {
    marginTop: 0,
    marginBottom: "0.5em",
    paddingLeft: "0.5em",
    textTransform: "capitalize"
     
}

const highLighted: React.CSSProperties = {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    fontWeight: "bold",
    borderRadius: "5px"
}

