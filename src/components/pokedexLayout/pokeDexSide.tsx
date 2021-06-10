import React, { CSSProperties } from 'react';



interface Props {

}


export default class PokeDexSide extends React.Component {
    constructor(props: Props) {
        super(props)
    


    }



    render() {
        return (
            <div style = {pokeSide}>
                 { this.props.children }
            </div>
        )
    }

}

export const pokeSide: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    height: "568px",
    width: "320px",
    border: "2px solid black",
    /* borderCollapse: "collapse" */ //Ger inte önskad effekt

 
} 