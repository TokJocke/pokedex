import React, { CSSProperties } from 'react';
import PokeDexSide from "./components/pokedexLayout/pokeDexSide"
import PokeDexTop from "./components/pokedexLayout/pokeDexTop"
import PokeDexCenter from "./components/pokedexLayout/pokeDexCenter"
import PokeDexBottom from "./components/pokedexLayout/pokeDexBottom"
import kanto from './assets/kanto.jpg'
import PokeDexMainDisplay from "./components/pokedexLayout/pokeDexMainDisplay"
import PokeDexSecondDisplay from "./components/pokedexLayout/pokeDexSecondDisplay"
import NavBtnWrap from "./components/pokedexLayout/navBtnWrap"
import SearchInput from "./components/pokedexLayout/searchInput"
import rightTopDetails from "./assets/topheader.svg"
import leftTopDetails from "./assets/rightheader.svg"

interface Props {

}

interface State {
    allPokemons: []
    currentPokemon?: string
}
export default class App extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)
        this.state = {
           allPokemons: [],
           currentPokemon: undefined
        }
       
    }
    /* Fecth för pokemon api */
    getPokemons = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=60");
        const jsonData = await response.json();
        this.setState({allPokemons: jsonData})
        console.log(jsonData)
        console.log("state in asyncFunc ", this.state.allPokemons)

    };
    /* Kallar på api när component har laddats */
    componentDidMount(){
        this.getPokemons()
    }
    


    render() {
        return (
            <div style = { mainWrap }>
                
                <PokeDexSide> 
                    <PokeDexTop bgImg = { leftTopBgImg } />
                    <PokeDexCenter> 
                        <PokeDexMainDisplay currentPokemon = { "Pokemon visas här" } />
                        <NavBtnWrap />
                    </PokeDexCenter>
                    <PokeDexBottom> 
                        <SearchInput />
                    </PokeDexBottom>
                </PokeDexSide>
    
                <PokeDexSide> 
                    <PokeDexTop bgImg = { rightTopBgImg } />
                    <PokeDexCenter>
                        <PokeDexSecondDisplay />
                    </PokeDexCenter>
                    <PokeDexBottom />
                </PokeDexSide>
    
            </div>
        )
    }   
}

export const mainWrap: CSSProperties = {
  width: "100vw",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${kanto})`,
  backgroundSize: "cover",
}

export const leftTopBgImg: CSSProperties = {
  backgroundImage: `url(${rightTopDetails})`,
  backgroundSize: "cover",
}

export const rightTopBgImg: CSSProperties = {
  backgroundImage: `url(${leftTopDetails})`,
  backgroundSize: "cover",
}

