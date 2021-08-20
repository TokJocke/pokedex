import React, { CSSProperties, Component } from 'react';

interface Props {
}

export default class Lines extends Component {
    constructor(props: Props) {
        super(props)

    }
   

    render(){
        return (
            <div style = { lineWrap }> 
                        <div style = { line } />
                        <div style = { line } />
                        <div style = { line } />
                        <div style = { line } />
                    </div>
      )
    }

}


export const lineWrap: CSSProperties = {
    display:  "flex",
    flexDirection: "column",
    width: "25px",
    justifyContent: "space-evenly"
}

export const line: CSSProperties = {
    height: "3px",
    backgroundColor: "gray",
    
}





