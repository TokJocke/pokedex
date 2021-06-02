import React, { CSSProperties } from 'react';
import PokeDexDisplay, { pokeDexDisplay } from "./pokeDexDisplay"

interface Props {
}


export default class PokeDexCenter extends React.Component {
    constructor(props: Props) {
        super(props)
    


    }



    render() {
        return (
            <div style = {pokeDexTopStyle}>
                <PokeDexDisplay />
            </div>
    )
        
    }

}

export const pokeDexTopStyle: CSSProperties = {
    backgroundColor: "red",
    padding: "1em",
    height: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}
    