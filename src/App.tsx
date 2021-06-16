import * as React from 'react';
import Layout from "./components/layout"
import PokemonProvider from './context/pokeProvider';
import { PokemonOptions } from './context/pokeContext';


export default function App() {
    return (
        <PokemonProvider>
            <Layout />
        </PokemonProvider>

    );
}

