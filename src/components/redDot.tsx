import React, { CSSProperties, Component } from 'react';

interface Props {
}

export default class RedDot extends Component {
    constructor(props: Props) {
        super(props)

    }
   

    render(){
        return (
            <div style = { mediumRoundDot } />
      )
    }

}


export const mediumRoundDot: CSSProperties = {
    padding: "0.6em",
    borderRadius: "50%",
    backgroundColor: "red",
    border: "2px solid black"
}




