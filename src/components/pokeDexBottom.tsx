import React, { CSSProperties } from 'react';



interface Props {
}


export default class PokeDexBottom extends React.Component {
    constructor(props: Props) {
        super(props)
    


    }



    render() {
        return (
            <div style = {pokeDexBottomStyle}>
                <input style = { pokeInput } placeholder = { "sök här...."} />
            </div>
    )
        
    }

}

export const pokeDexBottomStyle: CSSProperties = {
    backgroundColor: "#DB0E2D",
    padding: "0 1em",
    height: "15%",
    display: "flex",
    alignItems: "top",
    justifyContent: "center",
    flexGrow: 1
}
    
export const pokeInput: CSSProperties = {
    backgroundColor: "#51AC5F",
    border: "2px solid black",
    width: "90%",
    height: "55%",
    fontSize: "1.5em"
}