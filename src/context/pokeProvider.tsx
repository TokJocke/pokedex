import React, { Component } from "react"
import { findRenderedDOMComponentWithTag } from "react-dom/test-utils"
import { PokeContext, /* PokedexRegions, */ PokemonIndex, PokemonOptions, } from "./pokeContext"

import kantoImg from "../assets/kanto.jpg"
import johtoImg from "../assets/johto.jpg"
import hoennImg from "../assets/hoenn.jpg"
import sinnohImg from "../assets/sinnoh.jpg"

interface Props{}


export default class PokemonProvider extends Component<Props, PokemonOptions> {

    state: PokemonOptions = {
        allPokemons: [],
        pokemonFuncs: {
            setPokemon: this.setPokemon.bind(this),
            getPokemonDetails: this.getPokemonDetails.bind(this),
            setRegion: this.setRegion.bind(this),
        },
       /*  currentRegion: undefined, */
        PokedexRegions: [
            {
                name: "kanto",
                background: `url(${kantoImg})`,
                pokemonAmount: 151,
                offset: 0,
            },
            {
                name: "johto",
                background: `url(${johtoImg})`,
                pokemonAmount: 100,
                offset: 151,
            },
            {
                name: "Hoenn",
                background: `url(${hoennImg})`,
                pokemonAmount: 135,
                offset: 251,

            },
            {
                name: "Sinnoh",
                background: `url(${sinnohImg})`,
                pokemonAmount: 107,
                offset: 386,

            } 
        ],
    }
    
    async getPokemonDetails(id: string) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const jsonData = await response.json()
        console.log("jsonData = ", jsonData)
            this.setState({
                pokemonData: jsonData 
            }, () => {console.log("state in getPokemonDetails() = ", this.state.pokemonData)})
    }
    /* fetch limit & offset should sync with region.isSelected, if !region.isSelected && !regionInUrl select kanto */
    getPokemons = async () => {
        console.log("inGetPokemons ", this.state.currentRegion)

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${this.state.currentRegion?.pokemonAmount}&offset=${this.state.currentRegion?.offset}`);
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
            this.setRegion(0)
            console.log(this.state.PokedexRegions)
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

    setRegion(param: number) {
        console.log("running set region")
        if(window.location.pathname == "/:region/detail/:" ) { /* Testing */
            console.log("path IF worked", window.location.hash)
        }


        let myClonedArray = [...this.state.PokedexRegions]
        const foundIndex = myClonedArray.findIndex((region) => {
            return region.isSelected
        })
        if(foundIndex == -1) {
            myClonedArray[0].isSelected = true
           // if (window.location.pathname.length <= 1) {
                this.setState({                                                                         
                    currentRegion: this.state.PokedexRegions[0]
                }, () => {this.getPokemons()})
                console.log("HEEERE", this.state.currentRegion)
            //}
        }else if (foundIndex + param >= 0 && foundIndex + param < myClonedArray.length) {
            myClonedArray[foundIndex + param].isSelected = true
            myClonedArray[foundIndex].isSelected = false
           // if (window.location.pathname.length <= 1) {
                this.setState({
                    currentRegion: this.state.PokedexRegions[foundIndex + param]
                }, () => {this.getPokemons()})
                console.log("HEEERE", this.state.currentRegion)
           // }
        }
        this.setState({
            PokedexRegions: myClonedArray,
        })
       // console.log(this.state.PokedexRegions)
       // this.getPokemons() /* För att ladda nya pokemon när region.isSelected ändras */
    }


     


    render() {
        return(
            <PokeContext.Provider value={this.state}>
                {this.props.children}
            </PokeContext.Provider>
        )
    }
}
