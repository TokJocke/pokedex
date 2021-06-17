import React, { CSSProperties } from 'react';
import { PokeContext } from '../../context/pokeContext';
import Dpad from "./dpad"
import { Link } from "react-router-dom"


interface Props {
    
}


export default class NavBtnWrap extends React.Component {
    constructor(props: Props) {
        super(props)
    
    }
    /* Tar ut id från currentpokemon.pokemon.url Måste finnas bättre lösning */
    /* Möjligt ha isselected? i stora lista */
    getIdFromString: (string: string | undefined) => string = (string) => {
        if (string) {   
            var match = string.substr(string.indexOf('pokemon/')).replace(/\D/g,'')
            return match
        }
        else {
            return "no id found"
        }
    }

    render() {
        return (
 
                <PokeContext.Consumer>    
                    {
                        ({pokemonFuncs, currentPokemon}) => {
                            return(
                                <div style = { wrapStyle }>
                                    {/* Bestämmer url vid detailview */}
                                    <Link to={`/detail/${this.getIdFromString(currentPokemon?.pokemon.url)}`} style = { roundBtn } />
                                    <div style = { thinBtnWrap } > 
                                        <div style = { {...thinLineBtn, backgroundColor: "red"} }/>
                                        <div style = { {...thinLineBtn, backgroundColor: "cyan"} }/>
                                    </div>
                                    <Dpad setPokemon={pokemonFuncs["setPokemon"]} /> 
                                </div>
                            )    
                        } 
                    }
                </PokeContext.Consumer>
                
    )
        
    }

}

const wrapStyle: CSSProperties = {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%"
}

const roundBtn: CSSProperties = {
    padding: "1.5em",
    border: "2px solid black",
    borderRadius: "50%",
    backgroundColor: "gray"
}

const thinBtnWrap: CSSProperties = {
    display: "flex",
    marginRight: "1.5em"
}

const thinLineBtn: CSSProperties = {
    width: "30px",
    height: "10px",
    margin: "0.2em",
    border: "2px solid black",
    borderRadius: "25px",
}

