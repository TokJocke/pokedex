import React, { CSSProperties } from 'react';
import { PokemonIndex } from '../pokedex';
import MainDisplayView from "../pokedexFunctions/mainDisplayView"


interface Props {
    allPokemons: PokemonIndex[]

}

interface State {
 

}

export default class PokeDexMainDisplay extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    
    }

    /* Skapa funktion som får knapparna att blinka när api ändras för mer levande pokedex */
/*     blink = () => {
       console.log(smallRoundDot.backgroundColor) 
    } */


    render() {
        return (

            <div style = { displayWrap }>
                {/* Make theese into component */}
                <div style = { smallRoundDotWrap }>
                    <div style = { smallRoundDot } />
                    <div style = { smallRoundDot } />
                </div>

                <div style = {pokeDexDisplay}>
                    <MainDisplayView allPokemons={this.props.allPokemons} isLoading={!this.props.allPokemons.length} />
                </div>

                {/* Make theese into component */}
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
    height: "74%", //Om denna är större tappas proportioner på parent och "smallrounddot" skjuts upp
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