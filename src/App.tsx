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
    allPokemons: string[]
}
export default class App extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)
        this.state = {
           allPokemons: [""]
        }
       
    }



    render() {
        return (
            <div style = { mainWrap }>
    
                <PokeDexSide> 
                    <PokeDexTop bgImg = { leftTopBgImg } />
                    <PokeDexCenter> 
                        <PokeDexMainDisplay currentPokemon = { "testtesttest" } />
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

