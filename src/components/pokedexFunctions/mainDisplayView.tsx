import React, { CSSProperties, useState } from 'react';
import { currentPokemon, PokeContext, PokemonIndex } from "../../context/pokeContext" 

interface Props {
    allPokemons: PokemonIndex[]
    isLoading: boolean
    currentPokemon?: currentPokemon
}



export default function MainDisplayView(props: Props) {
  
    

   /* Med hjälp av currentPokemon skapa funktion för att highlighta vald pokemon */
    const renderPokemon = props.allPokemons.map((pokemon) => {
       return (
           <p style={{...pokemonName, }}>{pokemon.name}</p>
       )
    })

    return (
 
            <div id={"mainDisplayView"} style={mainDisplay}>
                {props.isLoading ? <p>Loading...</p> : renderPokemon}
            </div>
    )
}


const mainDisplay: CSSProperties = { /* Någonting pajjar proportionerna i pdmainDisplay display wrap när name laddas */
    width: "100%",
    height: "100%",
    overflow: "scroll",
    
}

const pokemonName: CSSProperties = {
    marginTop: 0,
    marginBottom: "0.5em"
    
}