import React, { CSSProperties, Component } from 'react';

interface Props {
}

export default class Blink extends Component {
    constructor(props: Props) {
        super(props)

    }
   

    render(){
        return (
          <div style = { thinBtnWrap } > 
          <div style = { {...thinLineBtn, backgroundColor: 'red' } }/>
          <div style = { {...thinLineBtnTwo, backgroundColor: 'cyan' } }/>
      </div>
      )
    }

}



export const thinBtnWrap: CSSProperties = {
  display: "flex",
  marginRight: "1.5em"
}

export const thinLineBtn: CSSProperties = {
  width: "30px",
  height: "10px",
  margin: "0.2em",
  border: "2px solid black",
  borderRadius: "25px",
}

export const thinLineBtnTwo: CSSProperties = {
  width: "30px",
  height: "10px",
  margin: "0.2em",
  border: "2px solid black",
  borderRadius: "25px",
}




