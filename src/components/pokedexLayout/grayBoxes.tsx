import React, { CSSProperties } from 'react';


interface Props {

}

export default class GrayBoxes extends React.Component {
    constructor(props: Props) {
        super(props)
    


    }



    render() {
        return (
        <>
        <div style = { grayBoxDiv }>
            <div style = { grayBoxInput }>
            { "#id" }
            </div>
             <div style = { grayBoxInput }>
                 
             </div>
        </div>
        </>
        );
    }
}

export const grayBoxDiv: CSSProperties = {
    backgroundColor: "#DB0E2D",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "55%",
}

const grayBoxInput: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#58585A",
    width: "4em",
    height: "38px",
    margin: "0 1em",
    border: "1px solid black",
    borderRadius: "8px",
    fontSize: "1.5em"
}