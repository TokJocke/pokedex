import React, { CSSProperties } from 'react';
import PokeDexSide, { pokeSide } from "./components/pokeDexSide"
import PokeDexTop from "./components/pokeDexTop"
import PokeDexCenter from "./components/pokeDexCenter"
import PokeDexBottom from "./components/pokeDexBottom"
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
