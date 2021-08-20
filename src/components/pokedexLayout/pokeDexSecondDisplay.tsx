import React, { CSSProperties } from 'react';
import { Route, Switch } from 'react-router-dom';
import DetailView from '../pokedexFunctions/detailView';
import ErrorBoundry from '../pokedexFunctions/errorBoundry';
import RegionListView from '../pokedexFunctions/regionListView';
import SecondDetailView from '../pokedexFunctions/secondDetailView';





export default function PokeDexSecondDisplay() {
    
    return (
        <div id={"secondDisplayView"} style = { secondDisplayStyle }> 
            
            <Switch> 
                <Route exact path={"/"} component={RegionListView} />    
                {/* <Route path={"/:region/detail/:pokeId/:statOrMove"} component={FurtherDetailView}/> */}
                <ErrorBoundry errorMsg="The Pokedex is broken">
                    <Route path={"/:region/detail/:pokeId"} component={SecondDetailView} />
                </ErrorBoundry>
            </Switch>   
        </div>
    );
}

const secondDisplayStyle: CSSProperties = {
    backgroundColor: "#51AC5F",
    padding: "0.5em",
    height: "40%",
    width: "90%",
    borderRadius: "1em",
    border: "2px solid black",
    overflow: "scroll",
}