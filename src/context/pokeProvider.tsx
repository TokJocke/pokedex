import React, { Component } from "react"
import { PokeContext, PokemonOptions, regions } from "./pokeContext"

interface Props{}


export default class PokemonProvider extends Component<Props, PokemonOptions> {

    state: PokemonOptions = {
        allPokemons: [],
        pokemonFuncs: {
            setPokemon: this.setPokemon.bind(this),
            getPokemonDetails: this.getPokemonDetails.bind(this),
            setRegion: this.setRegion.bind(this)
        },

    }
    
    /* Slutade i evighets loop när jag försökte sätta state här i. Hitta lösning!! */
    async getPokemonDetails(id: string) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const jsonData = await response.json()
        console.log("jsonData = ", jsonData)
        if(this.state.currentPokemon) {
            this.setState({
                currentPokemon: {
                    index: this.state.currentPokemon.index,
                    pokemon: this.state.currentPokemon.pokemon, 
                    pokemonData: jsonData
                        
                }
            }, () => {console.log("state in getPokemonDetails() = ", this.state.currentPokemon)})
        }
    }

    getPokemons = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
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


    setPokemon(param?: number) {
       
        if(!this.state.currentPokemon) {
            this.setState({
                currentPokemon: {
                    index: 0,
                    pokemon: this.state.allPokemons[0],
                }
            }, () => {console.log(this.state.currentPokemon)})
        }else if (this.state.currentPokemon && param) {
            const newIndex: number = this.state.currentPokemon.index + param
            if(newIndex >= 0){
                this.setState({
                    currentPokemon: {
                        index: newIndex,
                        pokemon: this.state.allPokemons[newIndex]
                    }
                }, () => {console.log(this.state.currentPokemon)} )
            }
        }
    }

    setRegion() {
        if(!this.state.currentRegion) {
            this.setState({
                currentRegion: regions.kanto
            }, () => {console.log(this.state.currentRegion)})
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
