import * as React from 'react';
import { currentPokemon, PokeContext, PokemonIndex, PokemonOptions } from '../../context/pokeContext';
import { RouteComponentProps } from "react-router-dom"
import { ReactNode } from 'react';





export default function DetailView(props: RouteComponentProps<{pokeId: string}>) {
    
    const renderDetailView: (value: PokemonOptions) => ReactNode  = ({allPokemons, currentPokemon}) => {
        console.log("detail")
        return (
            <h1>{props.match.params.pokeId}</h1>
            
        )
    }
    
    
    return (
        <PokeContext.Consumer>
            {renderDetailView}
        </PokeContext.Consumer>
    );
}



