import * as React from 'react';
import { PokeContext, PokemonIndex, PokemonOptions } from '../../context/pokeContext';
import { RouteComponentProps } from "react-router-dom"
import { render } from '@testing-library/react';
import { ReactNode, useEffect } from 'react';
import { useContext } from 'react';



export default function RegionListView(props: RouteComponentProps) {
   
    const pokemonDetails: PokemonOptions = useContext(PokeContext)
    useEffect(() => {
        console.log("useEffect in regionlistview")

        if(!pokemonDetails.currentRegion) {
            pokemonDetails.pokemonFuncs.setRegion(0)
        }   
    });

    const renderRegionList: () => ReactNode = () => {
        const regions = pokemonDetails.PokedexRegions
        if(!regions.length) {
            return <p>No regions found..</p>
        }
        return regions.map((region) => {
            if(region.isSelected) {
                return(
                    <p style={{...regionName, ...highLighted}}>{region.name}</p>
                )
            }
            else {
                return (
                    <p style={{...regionName}}>{region.name}</p>
                )
            }
        })
    }
            
            
    return (
        <PokeContext.Consumer>
            {renderRegionList}
        </PokeContext.Consumer>
    );
}



const regionName: React.CSSProperties = {
    marginTop: 0,
    marginBottom: "0.5em",
    paddingLeft: "0.5em",
    textTransform: "capitalize"
     
}

const highLighted: React.CSSProperties = {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    fontWeight: "bold",
    borderRadius: "5px"
}

