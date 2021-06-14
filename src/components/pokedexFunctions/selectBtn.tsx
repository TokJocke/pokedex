import * as React from 'react';




export default function SelectBtn() {
  
    const onClick: () => void = () => {
        
    }
  
  
    return (
        <div style={roundBtn}></div>
    );
}


const roundBtn: React.CSSProperties = {
    padding: "1.5em",
    border: "2px solid black",
    borderRadius: "50%",
    backgroundColor: "gray"
}