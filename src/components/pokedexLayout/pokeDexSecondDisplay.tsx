import React, { CSSProperties } from 'react';





export default function PokeDexSecondDisplay() {
  
    return (
        <div style = { secondDisplayStyle } />
    );
}

const secondDisplayStyle: CSSProperties = {
    backgroundColor: "#51AC5F",
    padding: "1em",
    height: "40%",
    width: "90%",
    borderRadius: "1em",
    border: "2px solid black"
}