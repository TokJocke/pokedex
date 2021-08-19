import React, { CSSProperties } from 'react';
import { PokeContext, PokemonIndex } from '../../context/pokeContext';
import Dpad from "./dpad"
import { Link } from "react-router-dom"
import { createBrowserHistory } from "history";
interface Props {
    
}


export default class NavBtnWrap extends React.Component {
    constructor(props: Props) {
        super(props)
    
    }
   
 
    findId: () => void = () => {
        const foundPokemon = this.context.allPokemons.find((pokemon: PokemonIndex) => {
            return pokemon.isSelected
        })
        if(foundPokemon) {
            return foundPokemon.id
        }
    }   

    selectedStatOrMove: () => void = () => {
        const selectedStatOrMove = this.context.statsAndMoves.find((statOrMove: any) => {
            return statOrMove.isSelected
        })
        if(selectedStatOrMove) {
            return selectedStatOrMove.title
        }
    }   
    
    selectBtn: () => JSX.Element = () => {
        if(this.context.pokemonData/*  && this.context.statsAndMoves */) { 
            return <span style = { roundBtn } />
        }
        else {
            return <Link to={`${this.context.currentRegion?.name}/detail/${this.findId()}`} style = { roundBtn } />

        }
    }


    render() {
        
        console.log(createBrowserHistory())
        
        const pokemonLink: JSX.Element = <Link to={`${this.context.currentRegion?.name}/detail/${this.findId()}`} style = { roundBtn } />
        const pokemonSpan: JSX.Element = <span style = { roundBtn } />
     
        return (
            <div style = { wrapStyle }>
                {/* Bestämmer url vid detailview */}
                { this.context.allPokemons.length? this.selectBtn() : pokemonSpan  } {/* Renderar knapp med onclick om listan finns annars knapp utan funktion */}
                <div style = { thinBtnWrap } > 
                    <div style = { {...thinLineBtn, backgroundColor: "red"} }/>
                    <div style = { {...thinLineBtn, backgroundColor: "cyan"} }/>
                </div>
                <Dpad setPokemon={this.context.pokemonFuncs.setPokemon} /> 
            </div>     
        )   
    }

}

NavBtnWrap.contextType = PokeContext

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

