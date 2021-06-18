import React, { Component } from "react"
import { findRenderedDOMComponentWithTag } from "react-dom/test-utils"
import { PokeContext, PokemonIndex, PokemonOptions, regions } from "./pokeContext"

interface Props{}


export default class PokemonProvider extends Component<Props, PokemonOptions> {

    state: PokemonOptions = {
        allPokemons: [],
        pokemonFuncs: {
            setPokemon: this.setPokemon.bind(this),
            getPokemonDetails: this.getPokemonDetails.bind(this),
            setRegion: this.setRegion.bind(this)
        },
        currentRegion: regions.kanto

    }
    
    async getPokemonDetails(id: string) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const jsonData = await response.json()
        console.log("jsonData = ", jsonData)
            this.setState({
                pokemonData: jsonData 
            }, () => {console.log("state in getPokemonDetails() = ", this.state.pokemonData)})
    }

    getPokemons = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        const jsonData = await response.json();
        console.log(jsonData)
        const allPokemons: PokemonIndex[] = jsonData.results.map((pokemon: {name: string, url: string}) => {
            return {
                name: pokemon.name,
                id: pokemon.url.substr(pokemon.url.indexOf('pokemon/')).replace(/\D/g,'')
            }
        })
        this.setState({allPokemons}, () => { this.setPokemon(0) })
        console.log("state in asyncFunc ", this.state.allPokemons)

    };

    componentDidMount(){
        setTimeout(() => {/* Kallar på api när component har laddats, timeout for testing, remove when done */

            this.getPokemons()
        }, 3000)
    }
    
    setPokemon(param: number) {
        let myClonedArray = [...this.state.allPokemons]
        const foundIndex = myClonedArray.findIndex((pokemon) => {
            return pokemon.isSelected
        })
        if(foundIndex == -1) {
            myClonedArray[0].isSelected = true
        }else if (foundIndex + param >= 0 && foundIndex + param < myClonedArray.length){
            myClonedArray[foundIndex + param].isSelected = true
            myClonedArray[foundIndex].isSelected = false
        }
        this.setState({
            allPokemons: myClonedArray
        })
    }
        
    setRegion(region: string) {
        if(region === "kanto") {
            this.state.currentRegion = regions.kanto
        }else if(region === "johto") {
            this.state.currentRegion = regions.johto
        }


    /*     if(!this.state.currentRegion) {
            this.setState({
                currentRegion: regions.kanto
            }, () => {console.log(this.state.currentRegion)})
        } */
    }

    render() {
        return(
            <PokeContext.Provider value={this.state}>
                {this.props.children}
            </PokeContext.Provider>
        )
    }
}
