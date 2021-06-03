import React, { CSSProperties } from 'react';
import PokeDexSide, { pokeSide } from "./components/pokedexLayout/pokeDexSide"
import PokeDexTop from "./components/pokedexLayout/pokeDexTop"
import PokeDexCenter from "./components/pokedexLayout/pokeDexCenter"
import PokeDexBottom from "./components/pokedexLayout/pokeDexBottom"
import kanto from './assets/kanto.jpg'



function App() {
  return (
    <div style = { mainWrap }>
      <PokeDexSide> 
        <PokeDexTop />
        <PokeDexCenter />
        <PokeDexBottom />
      </PokeDexSide>
    </div>
)}

export const mainWrap: CSSProperties = {
  width: "100vw",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${kanto})`,
  backgroundSize: "cover",
}


export default App;
