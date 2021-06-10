import React, { Component } from "react"
import { PokeContext, PokemonOptions } from "./pokeContext"

interface Props{}


export default class PokemonProvider extends Component<Props, PokemonOptions> {

    state: PokemonOptions = {
        allPokemons: [],
        setPokemon: this.setPokemon.bind(this)
    }

    getPokemons = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=60");
        const jsonData = await response.json();
        this.setState({allPokemons: jsonData.results})
        console.log(jsonData)
        console.log("state in asyncFunc ", this.state.allPokemons)
        this.setPokemon()
    };

    componentDidMount(){
        setTimeout(() => {/* Kallar på api när component har laddats, timeout for testing, remove when done */

            this.getPokemons()
        }, 3000)
    }


    /* Fixa så att funktionen funkar för upp och ner */
    setPokemon() {
        
        if(!this.state.currentPokemon) {
            this.setState({
                currentPokemon: {
                    index: 0,
                    pokemon: this.state.allPokemons[0]
                }
            }, () => {console.log(this.state.currentPokemon)})
            
        }else {
            this.setState({
                currentPokemon: {
                    index: this.state.currentPokemon.index + 1,
                    pokemon: this.state.allPokemons[this.state.currentPokemon.index + 1]
                }
            }, () => {console.log(this.state.currentPokemon)} )     
        }
    }



    render() {
        return(
            <PokeContext.Provider value={this.state}>
                {this.props.children}
            </PokeContext.Provider>
        )
    }
}
