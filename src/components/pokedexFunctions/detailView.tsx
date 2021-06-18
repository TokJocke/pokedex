import * as React from 'react';
import { PokeContext, PokemonIndex, PokemonOptions, PokemonFuncs } from '../../context/pokeContext';
import { RouteComponentProps } from "react-router-dom"
import { ReactNode } from 'react';
import PokemonProvider from '../../context/pokeProvider';
import { CSSProperties } from 'react';


/* Skapa nytt state i context för displayad pokemon */


export default class DetailView extends React.Component<RouteComponentProps<{pokeId: string}> > {


    async componentDidMount() {
        this.context.pokemonFuncs.setRegion() //for testing
        await this.context.pokemonFuncs.getPokemonDetails(this.props.match.params.pokeId)
        console.log("did mount")
    }
    

    render() {
        console.log(this.context.pokemonData)
        throw new Error("crash and burn")
        if(this.context.pokemonData) {
            //console.log(this.context.pokemonFuncs["setRegion"])
            return (

                <div style = { sprite }>
                <img style = { sprite } src={this.context.pokemonData.sprites.front_default}/>

                </div>
            );
        }
        return <p>not working</p>
    }
    
}

export const sprite: CSSProperties = {
    width: "100%",
    height: "100%"
}

DetailView.contextType = PokeContext