import React, { CSSProperties } from 'react';
import PokeDexDisplay, { pokeDexDisplay } from "./pokeDexMainDisplay"
import NavBtnWrap from "./navBtnWrap"

interface Props {
}


export default class PokeDexCenter extends React.Component {
    constructor(props: Props) {
        super(props)
    
    }



    render() {
        return (
            <div style = {pokeDexTopStyle}>
                { this.props.children }
            </div>
    )
        
    }

}

export const pokeDexTopStyle: CSSProperties = {
    backgroundColor: "#DB0E2D",
    padding: "0 1em",
    height: "67.5%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}
    