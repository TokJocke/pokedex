import React, { CSSProperties } from 'react';
import Dpad from "./dpad"



interface Props {
}


export default class NavBtnWrap extends React.Component {
    constructor(props: Props) {
        super(props)
    


    }



    render() {
        return (
            <div style = { wrapStyle }>
                <div style = { roundBtn } />
                <div style = { thinBtnWrap } > 
                    <div style = { thinLineBtn } />
                    <div style = { thinLineBtn }/>
                </div>
                <Dpad />
                
            </div>
    )
        
    }

}

const wrapStyle: CSSProperties = {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%"
}

const roundBtn: CSSProperties = {
    padding: "1.5em",
    border: "2px solid black",
    borderRadius: "50%",
    backgroundColor: "gray"
}

const thinBtnWrap: CSSProperties = {
    display: "flex",
    marginRight: "1.5em"
}

const thinLineBtn: CSSProperties = {
    width: "30px",
    height: "10px",
    margin: "0.2em",
    border: "2px solid black",
    borderRadius: "25px"
}