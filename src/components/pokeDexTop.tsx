import React, { CSSProperties } from 'react';



interface Props {
}


export default class PokeDexTop extends React.Component {
    constructor(props: Props) {
        super(props)
    


    }



    render() {
        return (
            <div style = {pokeDexTopStyle}>
                
            </div>
    )
        
    }

}

export const pokeDexTopStyle: CSSProperties = {
    backgroundColor: "#DB0E2D",
    padding: "0 1em",
    height: "15%"
}
    