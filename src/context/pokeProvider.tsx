import React, { Component } from "react"
import { findRenderedDOMComponentWithTag } from "react-dom/test-utils"
import { PokeContext, /* PokedexRegions, */ PokemonIndex, PokemonOptions, } from "./pokeContext"
import { RouteComponentProps } from "react-router-dom"
import kantoImg from "../assets/kanto.jpg"
import johtoImg from "../assets/johto.jpg"
import hoennImg from "../assets/hoenn.jpg"
import sinnohImg from "../assets/sinnoh.jpg"

interface Props{}

export default class PokemonProvider extends Component<Props, PokemonOptions>   {

    state: PokemonOptions = {
        allPokemons: [],
        pokemonFuncs: {
            setPokemon: this.setPokemon.bind(this),
            getPokemonDetails: this.getPokemonDetails.bind(this),
            setRegion: this.setRegion.bind(this),
        },
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
    /* Use id = 0 to reset details */
    async getPokemonDetails(id: number) {
        if(id <= 0) {
            this.setState({
                pokemonData: undefined
            })
        }
        else {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const jsonData = await response.json()
            console.log("jsonData = ", jsonData)
                this.setState({
                    pokemonData: jsonData 
                }, () => {console.log("state in getPokemonDetails() = ", this.state.pokemonData)})
        }
    }

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
         //   this.setRegion(0)
        }, 3000)
 
    }
    
    setPokemon(param: number) { /* Vid mån av tid lägg till funktion som väljer pokemon från url om ingen är selected och sidan /detail refreshas  */
        let myClonedArray = [...this.state.allPokemons]
        const foundIndex = myClonedArray.findIndex((pokemon) => {
            return pokemon.isSelected
        })
        if(foundIndex === -1) {
            myClonedArray[0].isSelected = true
        }else if (foundIndex + param >= 0 && foundIndex + param < myClonedArray.length){
            myClonedArray[foundIndex + param].isSelected = true
            myClonedArray[foundIndex].isSelected = false
        }
        this.setState({
            allPokemons: myClonedArray
        })
    }

    setRegion(param: number, region?: string) {
        if(region) {
            this.state.PokedexRegions.find((foundRegion) =>{
                if(foundRegion.name === region) {
                    foundRegion.isSelected = true
                    this.setState({                                                                         
                        currentRegion: foundRegion
                    },() => {this.getPokemons()})
                }
            })
          
        }
        else {
            let myClonedArray = [...this.state.PokedexRegions]
            const foundIndex = myClonedArray.findIndex((region) => {
                return region.isSelected
            })
            if(foundIndex == -1) {
                myClonedArray[0].isSelected = true
                    this.setState({                                                                         
                        currentRegion: this.state.PokedexRegions[0]
                    }, () => {this.getPokemons()})
           
            }else if (foundIndex + param >= 0 && foundIndex + param < myClonedArray.length) {
                myClonedArray[foundIndex + param].isSelected = true
                myClonedArray[foundIndex].isSelected = false
                    this.setState({
                        currentRegion: this.state.PokedexRegions[foundIndex + param]
                    }, () => {this.getPokemons()})
            
            }
            this.setState({
                PokedexRegions: myClonedArray,
            })
        // this.getPokemons() /* För att ladda nya pokemon när region.isSelected ändras */
        }
    }

    pokemonDetailsList() {
        
    }
     


    render() {
        return(
            <PokeContext.Provider value={this.state}>
                {this.props.children}
            </PokeContext.Provider>
        )
    }
}
