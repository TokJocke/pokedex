import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import '../index.css';

interface Props {
    isOpen: boolean
}

export default class Modal extends Component<Props>{
    element: HTMLDivElement 
    constructor(props: Props){
    super(props)
    this.element = document.createElement("div")
    this.element.id = "modal-root"
       
   }
   componentDidMount(){
        document.body.appendChild(this.element)
        console.log("did mount")

    }
    componentWillUnmount(){
        document.body.removeChild(this.element)
        console.log("unmount")
    }
    render(){
        return (
            ReactDOM.createPortal(
                <div className="modal-div">
                {this.props.children}
                </div>,
                this.element
            )
        )
    }

}