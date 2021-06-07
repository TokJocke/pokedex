import React, { CSSProperties } from 'react';
import { PokemonIndex } from '../../App';
import MainDisplayView from "../pokedexFunctions/mainDisplayView"


interface Props {
    isLoading: boolean
    allPokemons: PokemonIndex[]

}

interface State {

}

export default class PokeDexMainDisplay extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    


    }

    /* Skapa condintional renderering för load/view pokemons */
    


    render() {
        return (

            <div style = { displayWrap }>

                <div style = { smallRoundDotWrap }>
                    <div style = { smallRoundDot } />
                    <div style = { smallRoundDot } />
                </div>

                <div style = {pokeDexDisplay}>
                    <MainDisplayView allPokemons={this.props.allPokemons} />
                </div>

                <div style = { bottomBorderWrap }>
                    <div style = { mediumRoundDot } />
                    <div style = { lineWrap }> 
                        <div style = { line } />
                        <div style = { line } />
                        <div style = { line } />
                        <div style = { line } />
                    </div>
                </div>

            </div>
    )
    }

}

export const pokeDexDisplay: CSSProperties = {
    backgroundColor: "#51AC5F",
    padding: "1em",
    height: "80%",
    width: "90%",
    borderRadius: "1em",
    border: "2px solid black"

}

export const displayWrap: CSSProperties = {
    width: "90%",
    height: "70%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px 5px 5px 15%",
    border: "2px solid black"
}

export const smallRoundDotWrap: CSSProperties = {
    display: "flex",
    flexGrow: 1
}

export const smallRoundDot: CSSProperties = {
    padding: "0.3em",
    borderRadius: "50%",
    backgroundColor: "red",
    margin: "6px 3px",
    border: "0.1px solid black"
}

export const bottomBorderWrap: CSSProperties = {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flexGrow: 1,
    padding: "4% 8%"
}

export const mediumRoundDot: CSSProperties = {
    padding: "0.6em",
    borderRadius: "50%",
    backgroundColor: "red",
    border: "2px solid black"
}

export const lineWrap: CSSProperties = {
    display:  "flex",
    flexDirection: "column",
    width: "25px",
    justifyContent: "space-evenly"
}

export const line: CSSProperties = {
    height: "3px",
    backgroundColor: "gray",
    
}