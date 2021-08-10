import * as React from 'react';
import { PokeContext, PokemonIndex, PokemonOptions, PokemonFuncs } from '../../context/pokeContext';
import { RouteComponentProps } from "react-router-dom"
import { ReactNode } from 'react';
import PokemonProvider from '../../context/pokeProvider';
import { CSSProperties } from 'react';


/* Skapa nytt state i context för displayad pokemon */


export default class SecondDetailView extends React.Component<RouteComponentProps<{region: string}> > {


    async componentDidMount() {
        if(!this.context.currentRegion) {
           await this.context.pokemonFuncs.setRegion(0, this.props.match.params.region)
        }   
        console.log(this.context.currentRegion)
        console.log("did mount", this.props.match.params.region)
    }
    

    render() {
        if(this.context.pokemonData) {
            return (

                <div style = { wrapp }>
                    <h1 style={title}>{this.context.pokemonData.name}</h1>
                    <ul style={ulStyle}>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            );
        }
        return <p>not working</p>
    }
    
}

export const wrapp: CSSProperties = {
    width: "100%",
    height: "100%"
}

export const title: CSSProperties = {
    fontSize: "1.5em",
    margin: "0",
    textAlign: "center",
    textTransform: "capitalize"

}

export const ulStyle: CSSProperties = {
    margin: "0"
}

SecondDetailView.contextType = PokeContext