import React, { CSSProperties } from 'react';
import topDetails from "../../assets/topheader.svg"


interface Props {
     bgImg: CSSProperties 
}


export default class PokeDexTop extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    


    }

    render() {
        return (
            <div style = { { ...pokeDexTopStyle, ...this.props.bgImg } }>
                
            </div>
    )
        
    }

}
export const pokeDexTopStyle: CSSProperties = {
    backgroundColor: "#DB0E2D",
    padding: "0 1em",
    height: "20%",
    /* backgroundImage: `url(${topDetails})` */ /* Hitta sätt för att köra denna som props istället */
}
    