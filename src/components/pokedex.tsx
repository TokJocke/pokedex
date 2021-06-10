import React, { CSSProperties } from 'react';
import PokeDexSide from "./pokedexLayout/pokeDexSide"
import PokeDexTop from "./pokedexLayout/pokeDexTop"
import PokeDexCenter from "./pokedexLayout/pokeDexCenter"
import PokeDexBottom from "./pokedexLayout/pokeDexBottom"
import PokeDexMainDisplay from "./pokedexLayout/pokeDexMainDisplay"
import PokeDexSecondDisplay from "./pokedexLayout/pokeDexSecondDisplay"
import NavBtnWrap from "./pokedexLayout/navBtnWrap"
import SearchInput from "./pokedexLayout/searchInput"
import rightTopDetails from "../assets/topheader.svg"
import leftTopDetails from "../assets/rightheader.svg"

interface Props {

}

export interface PokemonIndex {
    name: string
    url: string
}
interface State {
    allPokemons: PokemonIndex[]
    currentPokemon?: string
}
export default class Pokedex extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)
        this.state = {
           allPokemons: [],
           currentPokemon: undefined
        }
       
    }
    /* Fecth för pokemon api. Bör denna ligga i componentDidMount istället? */
    getPokemons = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=60");
        const jsonData = await response.json();
        this.setState({allPokemons: jsonData.results})
        console.log(jsonData)
        console.log("state in asyncFunc ", this.state.allPokemons)

    };
    /* Kallar på api när component har laddats, timeout for testing, remove when done */
    componentDidMount(){
        setTimeout(() => {
            
            this.getPokemons()
        }, 3000)
    }
    
    render() {
        return (
            <div style={ mainWrap }>
                
                <PokeDexSide> 
                    <PokeDexTop bgImg={ leftTopBgImg } />
                    <PokeDexCenter> 
                        <PokeDexMainDisplay allPokemons={this.state.allPokemons}/>
                        <NavBtnWrap/>
                    </PokeDexCenter>
                    <PokeDexBottom> 
                        <SearchInput />
                    </PokeDexBottom>
                </PokeDexSide>
    
                <PokeDexSide> 
                    <PokeDexTop bgImg={ rightTopBgImg } />
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

    display: "flex",
    boxShadow: "0 0 40px 20px",
    justifyContent: "center",
   /*  flexDirection: "column" */ //Should be in mobile device
}

export const leftTopBgImg: CSSProperties = {
  backgroundImage: `url(${rightTopDetails})`,
  backgroundSize: "cover",
}

export const rightTopBgImg: CSSProperties = {
  backgroundImage: `url(${leftTopDetails})`,
  backgroundSize: "cover",
}

