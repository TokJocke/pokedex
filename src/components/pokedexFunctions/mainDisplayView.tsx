import React, { CSSProperties, useState } from 'react';
import { currentPokemon, PokeContext, PokemonIndex } from "../../context/pokeContext" 

interface Props {
    allPokemons: PokemonIndex[]
    isLoading: boolean
    currentPokemon?: currentPokemon
}



export default function MainDisplayView(props: Props) {
  
    
    /* Försöker skapa funktion som highlightar current pokemon i listan. */
  
    const currentName: string | undefined = props.currentPokemon?.pokemon.name    
    
    const somePokemons: () => PokemonIndex[] = () => {
        const pokeIndex = props.currentPokemon?.index
        
            let somePokemonsArr = props.allPokemons.slice(pokeIndex, pokeIndex? pokeIndex + 6 : 6)
            return somePokemonsArr
    }

    
   /* Med hjälp av currentPokemon skapa funktion för att highlighta vald pokemon */
    const renderPokemon = somePokemons().map((pokemon) => {
        if(currentName === pokemon.name ) {
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
    marginBottom: "0.5em",
    paddingLeft: "0.5em"
     
}

const highLighted: CSSProperties = {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    fontWeight: "bold",
    borderRadius: "5px"
}






/* 

const renderPokemon = props.allPokemons.map((pokemon) => {
    return (
        
       <p style={{...pokemonName }}>{pokemon.name}</p>
   ) 
   
}) */