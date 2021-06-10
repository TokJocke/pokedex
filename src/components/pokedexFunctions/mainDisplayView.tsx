import React, { CSSProperties } from 'react';
import { PokemonIndex } from '../pokedex';


interface Props {
    allPokemons: PokemonIndex[]
    isLoading: boolean
}



export default function MainDisplayView(props: Props) {
  
    console.log("in last component", props)
    
    const renderPokemon = props.allPokemons.map((pokemon) => {
       return (
           <p style={pokemonName}>{pokemon.name}</p>
       )
    })


    /* Skapa en loader som har någon grafisk effekt */
    return (
        <div id={"mainDisplayView"} style={mainDisplay}>
           {props.isLoading ? <p>Loading database..</p> : renderPokemon}
        </div>
    )
        
    ;
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