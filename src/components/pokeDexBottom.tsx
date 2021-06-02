import React, { CSSProperties } from 'react';



interface Props {
}


export default class PokeDexBottom extends React.Component {
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
    backgroundColor: "blue",
    padding: "1em",
    height: "15%"
}
    