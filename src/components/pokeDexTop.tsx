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
                sdsdsd
            </div>
    )
        
    }

}

export const pokeDexTopStyle: CSSProperties = {
    backgroundColor: "red",
    padding: "1em",
    height: "15%"
}
    