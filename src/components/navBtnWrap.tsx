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
            
                <Dpad />
                
            </div>
    )
        
    }

}

const wrapStyle: CSSProperties = {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    width: "90%"
}