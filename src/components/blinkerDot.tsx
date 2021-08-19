import React, { CSSProperties, Component } from 'react';

interface Props {
}

export default class BlinkerDot extends Component {
    constructor(props: Props) {
        super(props)

    }
   

    render(){
        return (
          <div style = { smallRoundDotWrap }>
          <div style = { smallRoundDot } />
          <div style = { smallRoundDotTwo } />
      </div>
      )
    }

}



export const smallRoundDotWrap: CSSProperties = {
  display: "flex",
  flexGrow: 1
}

export const smallRoundDot: CSSProperties = {
  padding: "0.3em",
  borderRadius: "50%",
  backgroundColor: "red",
  margin: "6px 3px",
  border: "0.1px solid black",
  animation: "blinker 1.5s infinite"
}

export const smallRoundDotTwo: CSSProperties = {
  padding: "0.3em",
  borderRadius: "50%",
  backgroundColor: "red",
  margin: "6px 3px",
  border: "0.1px solid black",
  animation: "blinkerTwo 1.5s infinite"
}




