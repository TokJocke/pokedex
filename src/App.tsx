import * as React from 'react';
import Layout from "./components/layout"
import ErrorBoundry from './components/pokedexFunctions/errorBoundry';
import PokemonProvider from './context/pokeProvider';


export default function App() {
    return (
      
        <PokemonProvider>
            <Layout />
        </PokemonProvider>
    
    );
}

