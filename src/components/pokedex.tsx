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
import PokemonProvider from '../context/pokeProvider';
import BtnLayout from "./pokedexLayout/btnLayout"
import GrayBoxes from "./pokedexLayout/grayBoxes"
import { BrowserRouter } from 'react-router-dom';
import { PokeContext, PokemonIndex, PokemonFuncs, PokemonOptions } from "../context/pokeContext" 
interface Props {

}

interface State {

}
export default class Pokedex extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)     
    }

    
    render() {
        
        return (
            
            <BrowserRouter >
                    <div style={ mainWrap }> 
                        <PokeDexSide> 
                            <PokeDexTop bgImg={ leftTopBgImg } />
                            <PokeDexCenter> 
                                <PokeDexMainDisplay />
                                <NavBtnWrap/> {/* knappar */}
                            </PokeDexCenter>
                            <PokeDexBottom> 
                                <SearchInput />
                            </PokeDexBottom>
                        </PokeDexSide>
            
                        <PokeDexSide> 
                            <PokeDexTop bgImg={ rightTopBgImg } />
                            <PokeDexCenter>
                                <PokeDexSecondDisplay />
                                <BtnLayout /> {/* knappar */}
                            </PokeDexCenter>
                        <PokeDexBottom> 
                            <GrayBoxes />
                        </PokeDexBottom>
                        </PokeDexSide>
                    </div>
            </BrowserRouter>
            
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

