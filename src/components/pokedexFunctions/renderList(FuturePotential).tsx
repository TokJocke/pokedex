/* Not being used at the moment, this is develop potential. */


import * as React from 'react';
import { PokeContext, PokemonIndex, PokemonOptions } from '../../context/pokeContext';
import { RouteComponentProps } from "react-router-dom"
import { ReactNode } from 'react';
import { useContext } from 'react';



export default function RenderList(props: any) {
   
  
    const renderMoves = (props: any) => (
        /* console.log(props) */
        props.map((item: any) => {
            return (
                <li style={text}>{item.move}</li>
            )
        })
      );

      const renderStats = (props: any) => (
        /* console.log(props) */
        props.map((item: any) => {
            return (
                <li style={text}>{item.stat}</li>
            )
        })
      );


    return (
            <ul style={ulStyle}>
                {/* {renderMoves(props.list.movesList)} */}
                {renderStats(props.list.statsList)}
            </ul>  
    );
    
};



const text: React.CSSProperties = {
    marginTop: 0,
    marginBottom: "0.5em",
    paddingLeft: "0",
    textTransform: "capitalize"
     
}

const highLighted: React.CSSProperties = {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    fontWeight: "bold",
    borderRadius: "5px"
}

const ulStyle: React.CSSProperties = {
    marginBlockStart: 0,
    paddingInlineStart: "1.2em"
}
