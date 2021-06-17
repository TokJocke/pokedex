import * as React from 'react';
import { PokeContext, PokemonIndex, PokemonOptions, PokemonFuncs } from '../../context/pokeContext';
import { RouteComponentProps } from "react-router-dom"
import { ReactNode } from 'react';
import PokemonProvider from '../../context/pokeProvider';


/* Skapa nytt state i context för displayad pokemon */


export default class DetailView extends React.Component<RouteComponentProps<{pokeId: string}> > {


    async componentDidMount() {
        this.context.pokemonFuncs.setRegion() //for testing
        await this.context.pokemonFuncs.getPokemonDetails(this.props.match.params.pokeId)
        console.log("did mount")
    }
    

    render() {
        console.log(this.context.pokemonData)
        if(this.context.pokemonData) {
            //console.log(this.context.pokemonFuncs["setRegion"])
            return (
                <div>
                    <img src={this.context.pokemonData.sprites.front_default} />
                </div>
            );
        }
        return <p>not working</p>
    }
    
}



DetailView.contextType = PokeContext