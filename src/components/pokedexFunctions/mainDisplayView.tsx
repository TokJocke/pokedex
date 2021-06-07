import React, { CSSProperties } from 'react';
import { PokemonIndex } from '../../App';


interface Props {
    allPokemons: PokemonIndex[]
}



export default function MainDisplayView(props: Props) {
  

    
    const renderPokemon = props.allPokemons.map((pokemon) => {
       return (
           <p style={pokemonName}>{pokemon.name}</p>
       )
    })


    
    return (
        <div id={"mainDisplayView"} style={mainDisplay}>
           {renderPokemon}
        </div>
    )
        
    ;
}

const mainDisplay: CSSProperties = {
    width: "100%",
    height: "100%",
    overflow: "scroll",
    
}

const pokemonName: CSSProperties = {
    marginTop: 0,
    marginBottom: "0.5em"
}