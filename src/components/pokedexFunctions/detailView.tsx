import * as React from 'react';
import { currentPokemon, PokeContext, PokemonIndex, PokemonOptions, PokemonFuncs } from '../../context/pokeContext';
import { RouteComponentProps } from "react-router-dom"
import { ReactNode } from 'react';
import PokemonProvider from '../../context/pokeProvider';





export default class DetailView extends React.Component<RouteComponentProps<{pokeId: string}> > {


    componentDidMount() {
        this.context.pokemonFuncs.setRegion() //for testing
        this.context.pokemonFuncs.setPokemon(9)
    }
    


    render() {
        console.log(this.context.pokemonFuncs["setRegion"])
        return (
            <div></div>
        );
    }
    
}



DetailView.contextType = PokeContext