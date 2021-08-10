import { List } from '@material-ui/core';
import React, { CSSProperties, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import {  PokeContext, PokemonIndex } from "../../context/pokeContext" 
import DetailView from './detailView';
import ListView from './listView';
import ErrorBoundry from './errorBoundry';



export default function MainDisplayView() {
  
    
  
    
    return (
        
            <div id={"mainDisplayView"} style={mainDisplay}>
                {/* Routes för att skapa länk system i applikationen */}
                <Switch>
                
                    <Route exact path={"/"} component={ListView} />      {/* trying to add dynamic region to url */}
                
                    <ErrorBoundry>
                        <Route path={"/:region/detail/:pokeId"} component={DetailView} />
                    </ErrorBoundry>
               
                </Switch>                
            </div>
         
    )
}


const mainDisplay: CSSProperties = { /* Någonting pajjar proportionerna i pdmainDisplay display wrap när name laddas */
    width: "100%",
    height: "100%",
    overflow: "scroll",
    
}






/* 

const renderPokemon = props.allPokemons.map((pokemon) => {
    return (
        
       <p style={{...pokemonName }}>{pokemon.name}</p>
   ) 
   
}) */