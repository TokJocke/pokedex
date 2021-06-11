import React, { CSSProperties } from 'react';



interface Props {
    setPokemon: (param?: number) => void
}


export default class Dpad extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    


    }


    render() {
        return (
            <div style = {center}>
                <div style ={top} onClick={() => this.props.setPokemon(-1)}></div>
                <div style ={bottom} onClick={() => this.props.setPokemon(+1)}></div>
                <div style ={left}></div>
                <div style ={right}></div>
            </div>
    )
        
    }

}


const center: CSSProperties = {
    backgroundColor: "#333333",
    width: "35px",
    height: "35px",
    position: "relative",
    marginRight: "2em"
}

const top: CSSProperties = {
    backgroundColor: "#333333",
    width: "35px",
    height: "35px",
    position: "absolute",
    borderRadius: "15%",
    marginTop: "-30px"
}

const bottom: CSSProperties = {
    backgroundColor: "#333333",
    width: "35px",
    height: "35px",
    position: "absolute",
    borderRadius: "15%",
    marginTop: "30px"
}

const left: CSSProperties = {
    backgroundColor: "#333333",
    width: "35px",
    height: "35px",
    position: "absolute",
    borderRadius: "15%",
    marginLeft: "-30px"
}

const right: CSSProperties = {
    backgroundColor: "#333333",
    width: "35px",
    height: "35px",
    position: "absolute",
    borderRadius: "15%",
    marginLeft: "30px"
}



















/* const center: CSSProperties = {
    backgroundColor: "#333333",
    width: "1.8em",
    height: "1.8em",
    position: "relative"
}

const top: CSSProperties = {
    backgroundColor: "#333333",
    width: "1.8em",
    height: "2em",
    position: "absolute",
    borderRadius: "15%",
    marginTop: "-1.8em"
}

const bottom: CSSProperties = {
    backgroundColor: "#333333",
    width: "1.8em",
    height: "2em",
    position: "absolute",
    borderRadius: "15%",
    marginTop: "1.6em"
}

const left: CSSProperties = {
    backgroundColor: "#333333",
    width: "2em",
    height: "1.8em",
    position: "absolute",
    borderRadius: "15%",
    marginLeft: "-1.8em"
}

const right: CSSProperties = {
    backgroundColor: "#333333",
    width: "2em",
    height: "1.8em",
    position: "absolute",
    borderRadius: "15%",
    marginLeft: "1.6em"
}


 */