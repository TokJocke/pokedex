import * as React from 'react';
import Pokedex from "./pokedex"
import kanto from '../assets/kanto.jpg'


/* Kanske skapa en wrap här där bakgrundsbild ligger som tillåter mer anpassning för pokedex wrap */
/* Kanske köra device size state här */
export default function Layout() {
    return (
        <div style={layoutStyle}>
            <Pokedex />
        </div>
    );
}

const layoutStyle: React.CSSProperties = {
    width: "100vw",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${kanto})`,
    backgroundSize: "cover"
}