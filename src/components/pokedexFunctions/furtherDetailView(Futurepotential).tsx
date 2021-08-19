/* Not being used at the moment, this is develop potential. */

import * as React from 'react';
import { PokeContext, PokemonIndex, PokemonOptions, PokemonFuncs } from '../../context/pokeContext';
import { RouteComponentProps } from "react-router-dom"
import { ReactNode } from 'react';
import RenderList from "./renderList(FuturePotential)"

export default class FurtherDetailView extends React.Component<RouteComponentProps<{statOrMove: string}> > {

    findStatOrMove: () => any = () => {

        const filter = (bla: any) => {
            return bla.title === this.props.match.params.statOrMove
        }

        return this.context.statsAndMoves.find(filter)

    } 

/*     renderList: (statOrMove: any) => any = (list) => {
        console.log(list)
        if (list.title === "Moves") {
            list.movesList.map((move: any) => {
                console.log(move.move)
                return(
                    <p>{move.move}</p>
                )
            })
        }
        else if (list.title === "Stats") {
            return <p>s</p>
        }
    } */
    

    render() {
        return <RenderList list={this.findStatOrMove()}/>          
    }
}
    

FurtherDetailView.contextType = PokeContext