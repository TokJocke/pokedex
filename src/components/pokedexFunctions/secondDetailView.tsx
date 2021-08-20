import * as React from 'react';
import { PokeContext, PokemonIndex, PokemonOptions, PokemonFuncs } from '../../context/pokeContext';
import { RouteComponentProps } from "react-router-dom"
import { ReactNode } from 'react';
import PokemonProvider from '../../context/pokeProvider';
import { CSSProperties } from 'react';


export default class SecondDetailView extends React.Component<RouteComponentProps<{region: string}>> {


    async componentDidMount() {
        if(!this.context.currentRegion) {
           await this.context.pokemonFuncs.setRegion(0, this.props.match.params.region)
        }   
    }
    

    render() {
        if(this.context.pokemonData) {
            return (
                <div style = { wrapp }>
                    <h1 style={title}>{this.context.pokemonData.name}</h1>
                    {/* {this.renderStatsAndMoves()} */}
                    <div style={statsWrap}>
                        <p style={statStyle}> HP : {this.context.pokemonData.stats[0].base_stat}</p>
                        <p style={statStyle}> ATK : {this.context.pokemonData.stats[1].base_stat}</p>
                        <p style={statStyle}> DEF : {this.context.pokemonData.stats[2].base_stat}</p>
                        <p style={statStyle}> S-ATK : {this.context.pokemonData.stats[3].base_stat}</p>
                        <p style={statStyle}> S-DEF : {this.context.pokemonData.stats[4].base_stat}</p>
                        <p style={statStyle}> SPD : {this.context.pokemonData.stats[5].base_stat}</p>
                    </div>
                </div>
            );
        }
        return <p>Loading..</p>
    }
    
}

export const wrapp: CSSProperties = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
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

const normalText: React.CSSProperties = {
    marginTop: 0,
    marginBottom: "0.5em",
    paddingLeft: "0.5em",
    textTransform: "capitalize"
     
}

const highLighted: React.CSSProperties = {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    fontWeight: "bold",
    borderRadius: "5px"
}

const statsWrap: React.CSSProperties = {
    display: 'flex',
    flexWrap: "wrap",
    flexDirection: "row",
}

const statStyle: React.CSSProperties = {
    width: "50%",
    fontSize: "1.2em",
    margin: 0,
    textAlign: "center"
}

SecondDetailView.contextType = PokeContext  








/*     renderStatsAndMoves: () => ReactNode = () => {
        const statsAndMoves = this.context.statsAndMoves
        if(!statsAndMoves) {
            return <p>No moves or stats found..</p>
        }
        return statsAndMoves.map((statAndMove: any) => {
            if(statAndMove.isSelected) {
                return(
                    <div>
                        <p style={{...normalText, ...highLighted}}>{statAndMove.title}</p>
                    </div>
                )
            }
            else {
                return (
                    <p style={{...normalText}}>{statAndMove.title}</p>
                )
            }    
        })
    }  */