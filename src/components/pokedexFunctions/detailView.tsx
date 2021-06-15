import * as React from 'react';
import { currentPokemon, PokeContext, PokemonIndex, PokemonOptions } from '../../context/pokeContext';
import { RouteComponentProps } from "react-router-dom"
import { ReactNode } from 'react';





export default function DetailView(props: RouteComponentProps<{pokeId: string}>) {
    
/*     React.useEffect(() => {
        (async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.match.params.pokeId}`)
            const jsonData = await response.json()
            console.log(jsonData)
        })()
        
      
    } ) */


    const renderDetailView: (value: PokemonOptions) => ReactNode  = ({allPokemons, currentPokemon, pokemonFuncs}) => {
        /* Funktion från Context provider som returnerar JSON från api med pokemon detaljer. Bör hitta någon form av state lösning */
        pokemonFuncs.getPokemonDetails(props.match.params.pokeId)
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



