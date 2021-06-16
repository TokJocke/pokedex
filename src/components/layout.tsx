import * as React from 'react';
import Pokedex from "./pokedex"
import { PokeContext, PokemonOptions } from "../context/pokeContext"

/* Kanske skapa en wrap här där bakgrundsbild ligger som tillåter mer anpassning för pokedex wrap */
/* Kanske köra device size state här */
export default function Layout() {
    return (
        <PokeContext.Consumer>
            {
                ({currentRegion}) => (
                
                    <div style={{...layoutStyle, backgroundImage:currentRegion?.background}}>
                        <Pokedex />
                    </div>
                      
                )
            }
        </PokeContext.Consumer>   



       
    );
}

const layoutStyle: React.CSSProperties = {
    width: "100vw",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
/*     backgroundImage: `url(${kanto})`,
 */    backgroundSize: "cover"
}