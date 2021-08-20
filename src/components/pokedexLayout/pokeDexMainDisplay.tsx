import React, { CSSProperties } from 'react';
import { PokeContext } from '../../context/pokeContext';
import ErrorBoundry from '../pokedexFunctions/errorBoundry';
import MainDisplayView from "../pokedexFunctions/mainDisplayView"
import BlinkerDot from ".././blinkerDot"
import Burst from './lines';
import RedDot from ".././redDot"

interface Props {


}

interface State {
 

}

export default class PokeDexMainDisplay extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    
    }




    render() {
        return (

            <div style = { displayWrap }>
                {/* Make theese into component */}
                <BlinkerDot></BlinkerDot>

                <div style = {pokeDexDisplay}>
                    
                       
                    <ErrorBoundry errorMsg="The Pokedex is broken">
                        <MainDisplayView/> 
                    </ErrorBoundry>            
                        
                    
                </div>

                {/* Make theese into component */}
                <div style = { bottomBorderWrap }>
                <RedDot></RedDot>
                    <Burst></Burst>
                </div>

            </div>
    )
    }

}


export const pokeDexDisplay: CSSProperties = {
    backgroundColor: "#51AC5F",
    padding: "0.5em",
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
    border: "2px solid black",
}


export const bottomBorderWrap: CSSProperties = {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flexGrow: 1,
    padding: "4% 8%"
}






    /* Skapa funktion som får knapparna att blinka när api ändras för mer levande pokedex */
/*     blink = () => {
       console.log(smallRoundDot.backgroundColor) 
    } */