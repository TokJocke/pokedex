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
                { this.props.children }
            </div>
    )
        
    }

}

export const pokeDexBottomStyle: CSSProperties = {
    backgroundColor: "#DB0E2D",
    padding: "0 1em",
    height: "12.5%",
    display: "flex",
    alignItems: "top",
    justifyContent: "center",
    flexGrow: 1
}
    
