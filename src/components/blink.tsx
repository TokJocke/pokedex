import React, { CSSProperties, Component, useState } from 'react';

export default function Blink(props: any) {


const [blinker, setBlinker] = useState(false) 


const blinkers = () => {

  setTimeout(() => {
    setBlinker(!blinker)
  }, 1500);

  return (
    <div style = { thinBtnWrap } > 
      <div style = { {...thinLineBtn, backgroundColor: blinker? 'red' : "cyan" } }/>
      <div style = { {...thinLineBtnTwo, backgroundColor: blinker? 'cyan' : "red" } }/>
    </div>
  )

}



return blinkers()

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




