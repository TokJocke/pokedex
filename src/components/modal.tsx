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

    }
    componentWillUnmount(){
        document.body.removeChild(this.element)
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