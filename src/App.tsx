import * as React from 'react';
import Layout from "./components/layout"
import PokemonProvider from './context/pokeProvider';



export default function App() {
    return (
        <PokemonProvider>
            <Layout />
        </PokemonProvider>

    );
}

